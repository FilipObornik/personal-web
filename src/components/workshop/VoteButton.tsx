"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface VoteButtonProps {
  label: string;
  index: number;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

export default function VoteButton({
  label,
  index,
  isSelected,
  isDisabled,
  onClick,
}: VoteButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        w-full min-h-14 px-4 sm:px-6 py-3.5 rounded-2xl text-left text-base sm:text-lg font-medium
        transition-all duration-200 flex items-center justify-between gap-3
        ${
          isSelected
            ? "bg-primary text-white"
            : isDisabled
            ? "bg-white/5 text-white/30 cursor-not-allowed"
            : "bg-white/5 text-white border border-white/10 hover:bg-primary/15 hover:border-primary/40 active:scale-[0.98]"
        }
      `}
    >
      <span>{label}</span>
      {isSelected && <Check className="w-5 h-5 shrink-0" />}
    </motion.button>
  );
}
