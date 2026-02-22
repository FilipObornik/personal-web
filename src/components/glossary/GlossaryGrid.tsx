"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlossarySearch from "./GlossarySearch";
import GlossaryCategoryFilter from "./GlossaryCategoryFilter";
import GlossaryCard from "./GlossaryCard";
import {
  type GlossaryTerm,
  type GlossaryCategory,
  glossaryCategories,
  searchGlossaryTerms,
  getGlossaryTermsByCategory,
} from "@/lib/glossary-data";

interface GlossaryGridProps {
  terms: GlossaryTerm[];
}

export default function GlossaryGrid({ terms }: GlossaryGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | null>(null);

  const filteredTerms = useMemo(() => {
    let result = terms;

    if (searchQuery.trim()) {
      result = searchGlossaryTerms(searchQuery);
    }

    if (activeCategory) {
      const categoryTermSlugs = new Set(
        getGlossaryTermsByCategory(activeCategory).map((t) => t.slug)
      );
      result = result.filter((t) => categoryTermSlugs.has(t.slug));
    }

    return result;
  }, [terms, searchQuery, activeCategory]);

  return (
    <div>
      <GlossarySearch query={searchQuery} onChange={setSearchQuery} />
      <GlossaryCategoryFilter
        categories={glossaryCategories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory || "all"}-${searchQuery}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTerms.map((term, index) => (
            <GlossaryCard key={term.slug} term={term} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredTerms.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted text-lg mb-2">
            Žádné pojmy neodpovídají vašemu hledání.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory(null);
            }}
            className="text-primary hover:underline font-medium"
          >
            Zobrazit všechny pojmy
          </button>
        </motion.div>
      )}
    </div>
  );
}
