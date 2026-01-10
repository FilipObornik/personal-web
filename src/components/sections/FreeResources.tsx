"use client";

import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Play } from "lucide-react";
import { freeResources } from "@/lib/data";

export default function FreeResources() {
  return (
    <section id="vzdelavani" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-section-alt to-transparent" />

      <div className="container-narrow mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-secondary rounded-full text-sm font-semibold mb-6"
          >
            <GraduationCap size={16} />
            AI s rozumem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Vzdělávání je základ<span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            S cílem edukovat v oblasti umělé inteligence a vibe codingu jsou založil projekt{" "}
            <a
              href="https://aisrozumem.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-bold text-secondary hover:text-primary transition-colors"
            >
              {/* Highlighter marker effect */}
              <span className="absolute -inset-x-1 -bottom-0.5 h-[40%] bg-primary/40 -skew-x-3 rounded-sm" />
              <span className="relative">AI s rozumem</span>
            </a>
            , kde tvořím edukační obsah bez zbytečného povyku a hlavně s rozumem.
          </motion.p>
        </div>

        {/* Resources - 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeResources.map((resource, index) => {
            const Icon = resource.icon;
            const isYouTube = resource.title === "YouTube";
            const isDiscord = resource.title === "Discord Komunita";
            const isAkademie = resource.title === "Akademie AI s Rozumem";

            // Different gradient for each card
            const gradientClass = isYouTube
              ? 'bg-gradient-to-br from-red-500 to-red-600'
              : isDiscord
              ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
              : 'bg-gradient-to-br from-primary to-amber-500';

            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative rounded-2xl md:rounded-3xl overflow-hidden h-full ${gradientClass}`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  <div className="relative p-6 md:p-8">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-xl md:text-2xl text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      {resource.description}
                    </p>

                    {/* CTA */}
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-secondary px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 hover:shadow-lg"
                    >
                      {isYouTube && <Play size={16} className="fill-current" />}
                      {resource.buttonText}
                      <ExternalLink size={14} />
                    </a>

                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-full" />
                    <div className="absolute bottom-6 right-12 w-6 h-6 bg-white/10 rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
