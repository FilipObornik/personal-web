"use client";

import { motion } from "framer-motion";

export default function WaitingState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center gap-6 text-center"
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-4 h-4 rounded-full bg-primary"
      />
      <p className="text-white/60 text-lg">Počkejte na další otázku...</p>
    </motion.div>
  );
}
