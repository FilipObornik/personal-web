"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialPlaceholderProps {
  count?: number;
}

// TODO: Replace with real testimonials when available
export default function TestimonialPlaceholder({ count = 3 }: TestimonialPlaceholderProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_16px_rgb(0,0,0,0.06)]"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="text-primary fill-primary" />
            ))}
          </div>

          {/* Quote lines placeholder */}
          <div className="space-y-2 mb-6">
            <div className="h-3 bg-gray-200 animate-pulse rounded-full w-full" />
            <div className="h-3 bg-gray-200 animate-pulse rounded-full w-5/6" />
            <div className="h-3 bg-gray-200 animate-pulse rounded-full w-4/6" />
          </div>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
            <div className="space-y-1.5 flex-1">
              <div className="h-3 bg-gray-200 animate-pulse rounded-full w-28" />
              <div className="h-2.5 bg-gray-200 animate-pulse rounded-full w-36" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
