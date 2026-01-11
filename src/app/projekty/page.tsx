"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Code2 } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TagFilter from "@/components/projects/TagFilter";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectItems, getAllProjectTags } from "@/lib/data";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Get all unique tags
  const allTags = useMemo(() => getAllProjectTags(), []);

  // Filter projects based on active tag
  const filteredProjects = useMemo(() => {
    if (!activeTag) return projectItems;
    return projectItems.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow mx-auto px-4 md:px-8 relative">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Zpět na úvod
            </Link>
          </motion.div>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              <Code2 size={16} />
              Moje práce
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Portfolio<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl"
            >
              Projekty, spolupráce a ukázky vibe coded aplikací
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-4 md:px-8">
          {/* Tag Filter */}
          <TagFilter
            tags={allTags}
            activeTag={activeTag}
            onTagClick={setActiveTag}
          />

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag || "all"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500">
                Žádné projekty pro tento tag.
              </p>
              <button
                onClick={() => setActiveTag(null)}
                className="mt-4 text-primary hover:underline"
              >
                Zobrazit všechny projekty
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
