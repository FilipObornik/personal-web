"use client";

import { motion } from "framer-motion";
import type { WorkshopQuestion } from "@/lib/workshop/questions";
import VoteResults from "./VoteResults";

interface QuestionCardProps {
  question: WorkshopQuestion;
  questionNumber: number;
  votes?: Record<number, number>;
  index?: number;
}

export default function QuestionCard({
  question,
  questionNumber,
  votes,
  index = 0,
}: QuestionCardProps) {
  const totalVotes = votes
    ? Object.values(votes).reduce((sum, count) => sum + count, 0)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 card-lift"
    >
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-primary font-bold text-sm">Q{questionNumber}</span>
        <h3 className="text-white font-semibold text-base leading-snug">
          {question.text}
        </h3>
      </div>
      {votes ? (
        <VoteResults question={question} votes={votes} compact />
      ) : (
        <p className="text-white/40 text-sm">Zatím žádné hlasy</p>
      )}
      <div className="mt-3 text-white/30 text-xs">
        {totalVotes} {totalVotes === 1 ? "hlas" : totalVotes >= 2 && totalVotes <= 4 ? "hlasy" : "hlasů"}
      </div>
    </motion.div>
  );
}
