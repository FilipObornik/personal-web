"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectItem } from "@/lib/data";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      layout
    >
      <Link href={`/projekty/${project.slug}`} className="block group">
        <div
          className={`relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:border-primary/30 transition-all duration-500 h-full ${
            featured ? "min-h-[350px]" : "min-h-[300px]"
          }`}
        >
          {/* Image area / placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">{project.year}</span>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Zobrazit detail
                <ArrowRight size={16} />
              </span>
            </div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white/50 text-xs font-mono">
              0{index + 1}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
