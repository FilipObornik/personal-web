"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { whatIDo } from "@/lib/data";

export default function WhatIDo() {
  return (
    <section id="co-delam" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Přehled
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-secondary"
            >
              Moje zaměření<span className="text-primary">.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-md"
          >
            Pomohu vám využít potenciál AI a moderních technologií pro váš byznys.
          </motion.p>
        </div>

        {/* Cards - Horizontal layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-primary/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgb(5,18,31,0.12)] hover:-translate-y-1">
                    {/* Top row: number + icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-bold text-secondary/10">
                        0{index + 1}
                      </span>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="text-primary group-hover:text-white transition-colors" size={22} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-secondary text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-section-alt flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={16} className="text-primary" />
                    </div>
                  </div>

                </motion.a>
              );
            })}
        </div>
      </div>
    </section>
  );
}
