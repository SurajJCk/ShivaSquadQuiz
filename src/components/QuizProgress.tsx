import { Progress } from "./ui/progress";


interface QuizProgressProps {
  current: number;
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  // Calculate progress based on completed questions (current is 0-based)
  // For example: if we're on question 1 (current = 0) of 6, progress should be 16.67%
  const progress = ((current + 1) / total) * 100;
  const displayProgress = Math.round(progress);

  return (
    <div className="space-y-2 mb-8">
      <div className="flex justify-between text-base font-semibold text-blue">
        <span>Question {current + 1} of {total}</span>
        <span>{displayProgress}% Complete</span>
      </div>
      <Progress 
        value={progress} 
        className="h-2"
      />
    </div>
  );
}