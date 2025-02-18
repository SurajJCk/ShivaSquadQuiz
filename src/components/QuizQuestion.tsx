
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import type { QuizQuestion as QuizQuestionType } from "../assets/quiz";
import { Button } from "./ui/button";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (personality: string) => void;
}

export default function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  if (!question) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-orange-300 font-semibold mb-6 text-center tracking-wide font-poppins">
        {question.question}
      </h2>

      <div className="grid gap-4">
        {question.options.map((option, idx) => (
          <Button
            key={idx}
            // variant="outline"
            className="w-full text-center h-auto p-4 whitespace-normal bg-[#283593] hover:bg-[#303f9f] border-none text-white hover:text-white flex items-center justify-center font-poppins font-normal rounded-2xl"
            onClick={() => onAnswer(option.personality)}
          >
            <span className="text-center w-full text-xl">
              {option.text}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}