"use client";

import { motion } from "framer-motion";

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string | null) => void;
}

export default function TagFilter({ tags, activeTag, onTagClick }: TagFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10 md:mb-14"
    >
      <button
        onClick={() => onTagClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeTag === null
            ? "bg-primary text-secondary"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        Vše
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTag === tag
              ? "bg-primary text-secondary"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {tag}
        </button>
      ))}
    </motion.div>
  );
}
