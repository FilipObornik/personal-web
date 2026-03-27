"use client";

import { motion } from "framer-motion";
import type { WorkshopQuestion } from "@/lib/workshop/questions";

interface VoteResultsProps {
  question: WorkshopQuestion;
  votes: Record<number, number>;
  compact?: boolean;
}

export default function VoteResults({ question, votes, compact = false }: VoteResultsProps) {
  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);
  const maxVotes = Math.max(...Object.values(votes), 1);

  return (
    <div className={`flex flex-col ${compact ? "gap-2" : "gap-4"}`}>
      {question.options.map((option, index) => {
        const count = votes[index] || 0;
        const percentage = maxVotes > 0 ? (count / maxVotes) * 100 : 0;

        return (
          <div key={index} className={`flex flex-col ${compact ? "gap-1" : "gap-2"}`}>
            <div className="flex justify-between items-baseline">
              <span className={`text-white ${compact ? "text-sm" : "text-base"} font-medium`}>
                {option}
              </span>
              <span className={`text-white/60 ${compact ? "text-xs" : "text-sm"} tabular-nums`}>
                {count}
              </span>
            </div>
            <div
              className={`w-full ${compact ? "h-2" : "h-3"} bg-white/10 rounded-full overflow-hidden`}
            >
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              />
            </div>
          </div>
        );
      })}
      {!compact && (
        <p className="text-white/40 text-sm mt-1">
          Celkem hlasů: {totalVotes}
        </p>
      )}
    </div>
  );
}
