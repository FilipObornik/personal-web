"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
        <div className="bg-secondary rounded-2xl md:rounded-3xl overflow-hidden border border-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:border-primary/30 transition-all duration-500">
          {/* Content section (top) */}
          <div className="relative p-5 md:p-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-white/40 text-sm">{project.year}</span>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Zobrazit detail
                <ArrowRight size={16} />
              </span>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-5 right-5 w-8 h-8 border border-white/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white/50 text-xs font-mono">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Image section (bottom) with gradient overlay on top */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800" />
            )}
            {/* Gradient fade from dark blue into image */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-secondary to-transparent pointer-events-none" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
