import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { questions } from "../assets/quiz";
import QuizProgress from "../components/QuizProgress";
import QuizQuestion from "../components/QuizQuestion";
import { mp } from "../utils/mixpanel";

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Define window augmentation for TypeScript
declare global {
  interface Window {
    quizStartTime?: number;
    questionStartTime?: number;
  }
}

export const Route = createFileRoute("/quiz")({
  component: RouteComponent,
});

function RouteComponent() {
  // const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  // Initialize quiz tracking
  useEffect(() => {
    try {
      // Track when user starts the quiz
      window.quizStartTime = Date.now();
      window.questionStartTime = Date.now();

      // Only track on first mount
      if (!hasStarted) {
        mp.track("personality_game_started", {
          total_questions: questions.length,
          timestamp: new Date().toISOString(),
        });
        console.log("Quiz started - Mixpanel event tracked");
        setHasStarted(true);
      }
    } catch (error) {
      console.error("Failed to track quiz start:", error);
    }
  }, []); // Empty dependency array to ensure effect runs only once

  // Randomize questions
  const randomizedQuestions = useMemo(() => {
    try {
      return shuffleArray(questions);
    } catch (error) {
      console.error("Error shuffling questions:", error);
      return questions;
    }
  }, []);

  const handleAnswer = async (personality: string) => {
    try {
      const newAnswers = [...answers, personality];
      const currentTime = Date.now();
      const timeSpent = window.questionStartTime
        ? currentTime - window.questionStartTime
        : 0;

      // Track answer
      mp.track("question_answered", {
        question_number: currentQuestion + 1,
        total_questions: randomizedQuestions.length,
        answer: personality,
        time_spent_ms: timeSpent,
        question_text: randomizedQuestions[currentQuestion].question,
      });
      console.log("Answer tracked:", personality);

      // Reset question timer
      window.questionStartTime = currentTime;

      if (currentQuestion === randomizedQuestions.length - 1) {
        const personalityCount: Record<string, number> = {};
        newAnswers.forEach((ans) => {
          personalityCount[ans] = (personalityCount[ans] || 0) + 1;
        });

        const dominantPersonality = Object.entries(personalityCount).reduce(
          (a, b) => (a[1] > b[1] ? a : b)
        )[0];

        // Track quiz completion
        mp.track("personality_game_completed", {
          dominant_personality: dominantPersonality,
          personality_distribution: personalityCount,
          total_time_ms: window.quizStartTime
            ? currentTime - window.quizStartTime
            : 0,
          answers: newAnswers,
        });

        localStorage.setItem("completed_quiz", "true");
        window.location.href = `/result/${dominantPersonality}`;
        return;
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setAnswers(newAnswers);
      }
    } catch (error) {
      console.error("Error handling answer:", error);
      // Continue with the quiz even if tracking fails
      if (currentQuestion === randomizedQuestions.length - 1) {
        window.location.href = "/result/unknown";
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setAnswers([...answers, personality]);
      }
    }
  };

  return (
    <div className="min-h-screen relative bg-[#1a237e]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[#1a237e] opacity-100"
        style={{
          backgroundImage: 'url("/images/BGyellow.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-2xl px-4 py-8">
        <QuizProgress
          current={currentQuestion}
          total={randomizedQuestions.length}
        />
        <div className="bg-[#1a237e] rounded-3xl p-8 shadow-xl">
          <QuizQuestion
            question={randomizedQuestions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </div>
      </div>
    </div>
  );
}
