"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  term: string;
  options: string[];
  selectedAnswer: number | null;
  correctAnswer: number;
  onAnswer: (index: number) => void;
}

export default function QuizQuestion({
  questionNumber,
  totalQuestions,
  term,
  options,
  selectedAnswer,
  correctAnswer,
  onAnswer,
}: QuizQuestionProps) {
  const answered = selectedAnswer !== null;

  return (
    <motion.div
      key={questionNumber}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-muted mb-2">
          <span>Otázka {questionNumber} z {totalQuestions}</span>
          <span>{Math.round((questionNumber / totalQuestions) * 100)} %</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8">
        Co je <span className="text-primary">{term}</span>?
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === correctAnswer;
          const showCorrect = answered && isCorrect;
          const showWrong = answered && isSelected && !isCorrect;

          let borderClass = "border-gray-200 hover:border-primary/30";
          let bgClass = "bg-white";
          if (showCorrect) {
            borderClass = "border-green-400";
            bgClass = "bg-green-50";
          } else if (showWrong) {
            borderClass = "border-red-400";
            bgClass = "bg-red-50";
          } else if (answered) {
            borderClass = "border-gray-100";
            bgClass = "bg-gray-50/50";
          }

          return (
            <button
              key={index}
              onClick={() => !answered && onAnswer(index)}
              disabled={answered}
              className={`w-full text-left p-4 rounded-xl border-2 ${borderClass} ${bgClass} transition-all duration-300 ${
                !answered ? "cursor-pointer hover:shadow-md" : "cursor-default"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    showCorrect
                      ? "bg-green-400 text-white"
                      : showWrong
                      ? "bg-red-400 text-white"
                      : isSelected
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {showCorrect ? (
                    <CheckCircle2 size={18} />
                  ) : showWrong ? (
                    <XCircle size={18} />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </span>
                <span
                  className={`text-sm md:text-base ${
                    showCorrect
                      ? "text-green-800 font-medium"
                      : showWrong
                      ? "text-red-800"
                      : "text-secondary"
                  }`}
                >
                  {option}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
