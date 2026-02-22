"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type GlossaryTerm, glossaryCategories } from "@/lib/glossary-data";

interface GlossaryCardProps {
  term: GlossaryTerm;
  index: number;
}

export default function GlossaryCard({ term, index }: GlossaryCardProps) {
  const category = glossaryCategories.find((c) => c.id === term.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      layout
    >
      <Link href={`/slovnicek/${term.slug}`} className="block group h-full">
        <div className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-primary/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          {/* Category tag */}
          {category && (
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                <category.icon size={12} />
                {category.label}
              </span>
            </div>
          )}

          {/* Term name */}
          <h3 className="font-bold text-secondary text-lg mb-1 group-hover:text-primary transition-colors">
            {term.term}
          </h3>

          {/* English name */}
          {term.termEn && (
            <p className="text-muted text-xs mb-3">{term.termEn}</p>
          )}

          {/* Short definition */}
          <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {term.shortDefinition}
          </p>

          {/* Read more */}
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all mt-auto">
            Zjistit více
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
