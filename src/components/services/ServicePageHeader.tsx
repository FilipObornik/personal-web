"use client";

import { motion } from "framer-motion";
import { ArrowLeft, LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServicePageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export default function ServicePageHeader({
  title,
  subtitle,
  description,
  icon: Icon,
}: ServicePageHeaderProps) {
  return (
    <section className="relative bg-secondary pt-24 md:pt-32 pb-40 md:pb-52 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      {/* Decorative arcs */}
      <div className="absolute top-20 right-20 pointer-events-none opacity-20">
        <div className="w-32 h-32 rounded-full border-2 border-white/20" />
        <div className="absolute top-4 left-4 w-24 h-24 rounded-full border-2 border-white/15" />
        <div className="absolute top-8 left-8 w-16 h-16 rounded-full border-2 border-white/10" />
      </div>

      <div className="container-narrow mx-auto relative px-4 md:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#sluzby"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Zpět na služby</span>
          </Link>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0"
          >
            <Icon className="text-white" size={40} />
          </motion.div>

          <div>
            {/* Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block"
            >
              {subtitle}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              {title}
              <span className="text-primary">.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/70 text-lg md:text-xl max-w-2xl"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
