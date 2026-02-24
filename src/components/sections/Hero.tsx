"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import HeroPhoto from "@/components/sections/HeroPhoto";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section
      id="hero"
      className="min-h-[700px] relative overflow-hidden bg-secondary"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Large gradient blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-narrow mx-auto px-4 md:px-8 pt-32 pb-40 md:pt-40 md:pb-56 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div>
            {/* Name with accent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Filip
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                  Oborník
                </span>
              </h1>
            </motion.div>

            {/* One-liner differentiation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-8 max-w-lg"
            >
              Technologie a AI jsou pouze nástroje k dosažení výsledku – díky mým zkušenostem a přesahu napříč obory s Vámi při jeho řešení budu od začátku do konce.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:gap-4"
              >
                <Calendar size={18} />
                Rezervovat hovor
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#sluzby"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/10"
              >
                Prozkoumat služby
              </a>
            </motion.div>

            {/* Stats or social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={23} suffix="+" delay={0.8} />
                </div>
                <div className="text-white/50 text-sm">klientů</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={310} suffix="+" delay={1.0} />
                </div>
                <div className="text-white/50 text-sm">proškolených lidí</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={8} suffix="+" delay={1.2} />
                </div>
                <div className="text-white/50 text-sm">let v oboru</div>
              </div>
            </motion.div>
          </div>

          {/* Right visual - Photo with organic blob shape, floating badges & easter egg */}
          <HeroPhoto imageLoaded={imageLoaded} onImageLoad={() => setImageLoaded(true)} />
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
