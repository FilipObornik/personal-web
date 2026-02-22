"use client";

import { motion } from "framer-motion";
import { type GlossaryCategoryInfo, type GlossaryCategory } from "@/lib/glossary-data";

interface GlossaryCategoryFilterProps {
  categories: GlossaryCategoryInfo[];
  activeCategory: GlossaryCategory | null;
  onCategoryClick: (category: GlossaryCategory | null) => void;
}

export default function GlossaryCategoryFilter({
  categories,
  activeCategory,
  onCategoryClick,
}: GlossaryCategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10 md:mb-14 overflow-x-auto"
    >
      <button
        onClick={() => onCategoryClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
          activeCategory === null
            ? "bg-primary text-secondary"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        Vše
      </button>
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryClick(cat.id)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === cat.id
                ? "bg-primary text-secondary"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Icon size={14} />
            {cat.label}
          </button>
        );
      })}
    </motion.div>
  );
}
