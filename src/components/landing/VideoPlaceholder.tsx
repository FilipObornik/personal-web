"use client";

import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";

interface VideoPlaceholderProps {
  title: string;
  duration?: string;
}

export default function VideoPlaceholder({ title, duration }: VideoPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative bg-secondary-light rounded-3xl overflow-hidden w-full max-w-2xl mx-auto border border-white/10"
      style={{ aspectRatio: "16 / 9" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/30">
          <Play className="text-white ml-1" size={32} fill="white" />
        </div>
        <div className="text-center">
          <p className="text-white font-semibold text-lg">{title}</p>
          {duration && (
            <div className="flex items-center justify-center gap-1.5 mt-2 text-white/50 text-sm">
              <Clock size={14} />
              <span>{duration}</span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/50 text-xs">
          Video bude brzy k dispozici
        </span>
      </div>
    </motion.div>
  );
}
