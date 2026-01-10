"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import { portfolioItems } from "@/lib/data";
import WaveSeparator from "@/components/ui/WaveSeparator";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              <Code2 size={16} />
              Moje práce
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Portfolio<span className="text-primary">.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-md"
          >
            Projekty vytvořené s pomocí AI a vibe codingu
          </motion.p>
        </div>

        {/* Portfolio Grid - Creative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 h-full
                ${index === 0 ? 'min-h-[400px]' : 'min-h-[280px]'}
              `}>
                {/* Image area */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-light/50 to-secondary">
                  {/* Placeholder pattern */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }}
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className={`font-bold text-white mb-2 group-hover:text-primary transition-colors
                    ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}
                  `}>
                    {item.title}
                  </h3>
                  <p className={`text-white/60 leading-relaxed mb-4
                    ${index === 0 ? 'text-base' : 'text-sm line-clamp-2'}
                  `}>
                    {item.description}
                  </p>

                  {/* Action */}
                  {item.demoUrl ? (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                    >
                      Ukázat případovku
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-white/40 text-sm">
                      <Sparkles size={14} />
                      Brzy k dispozici
                    </span>
                  )}
                </div>

                {/* Corner decoration */}
                <div className="absolute top-6 right-6 w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white/40 text-sm font-mono">0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-4 rounded-full transition-all"
          >
            Další projekty
            <ExternalLink size={18} />
          </a>
          <p className="text-white/40 text-sm">
            Více projektů průběžně přidávám
          </p>
        </motion.div>
      </div>

      <WaveSeparator fillColor="white" variant={2} />
    </section>
  );
}
