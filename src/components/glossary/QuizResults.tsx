"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, RotateCcw, BookOpen, ArrowRight } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

export default function QuizResults({ score, totalQuestions, onRetry }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage >= 90) return "Vynikající! Jste AI expert!";
    if (percentage >= 70) return "Skvělé! Máte solidní přehled o AI.";
    if (percentage >= 50) return "Dobrý základ! Ještě je co zlepšovat.";
    return "Nevadí! AI svět je rozsáhlý - začněte se slovníčkem.";
  };

  const getEmoji = () => {
    if (percentage >= 90) return "🏆";
    if (percentage >= 70) return "🎯";
    if (percentage >= 50) return "👍";
    return "📚";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {/* Score circle */}
      <div className="mb-8">
        <div className="relative w-40 h-40 mx-auto mb-4">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="8"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#E88F31"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
              animate={{
                strokeDashoffset: 2 * Math.PI * 52 * (1 - percentage / 100),
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-secondary">{percentage}%</span>
            <span className="text-muted text-sm">
              {score}/{totalQuestions}
            </span>
          </div>
        </div>
        <div className="text-4xl mb-2">{getEmoji()}</div>
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
          {getMessage()}
        </h2>
        <p className="text-muted">
          Správně jste odpověděli na {score} z {totalQuestions} otázek.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
        >
          <RotateCcw size={18} />
          Zkusit znovu
        </button>
        <Link
          href="/slovnicek"
          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-secondary px-6 py-3 rounded-full font-semibold transition-colors"
        >
          <BookOpen size={18} />
          Prozkoumat slovníček
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl p-6 md:p-8">
        <Trophy className="text-primary mx-auto mb-3" size={32} />
        <h3 className="text-xl font-bold text-white mb-2">
          Chcete se v AI posunout dál<span className="text-primary">?</span>
        </h3>
        <p className="text-white/70 text-sm mb-5 max-w-md mx-auto">
          Nabízím semináře, mentoring a konzultace, které vám pomohou zvládnout AI v praxi.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/sluzby/webinare-a-workshopy"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            Semináře a workshopy
          </Link>
          <Link
            href="/sluzby/mentoring"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors border border-white/20"
          >
            Mentoring
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
