"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

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
                  <AnimatedCounter value={23} suffix="+" delay={0.4} />
                </div>
                <div className="text-white/50 text-sm">klientů</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={310} suffix="+" delay={0.5} />
                </div>
                <div className="text-white/50 text-sm">proškolených lidí</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={8} suffix="+" delay={0.6} />
                </div>
                <div className="text-white/50 text-sm">let v oboru</div>
              </div>
            </motion.div>
          </div>

          {/* Right visual - Photo with organic blob shape and floating badges */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient glow behind photo - pulses on reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={imageLoaded ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-3xl"
              />

              {/* Tear effect - expanding rings */}
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={imageLoaded ? { scale: 2.5, opacity: 0 } : { scale: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-32 h-32 rounded-full border-4 border-primary/60" />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={imageLoaded ? { scale: 2, opacity: 0 } : { scale: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-32 h-32 rounded-full border-2 border-white/40" />
              </motion.div>

              {/* Organic blob photo container - tears open */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={imageLoaded ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="relative aspect-[4/5]"
                style={{
                  clipPath: "url(#blob-mask)",
                }}
              >
                <Image
                  src="/images/portrait.png"
                  alt="Filip Oborník"
                  fill
                  className="object-cover object-[center_5%] scale-[1.15]" style={{ transformOrigin: "center 5%" }}
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
                {/* Flash effect on reveal */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={imageLoaded ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute inset-0 bg-secondary"
                />
                {/* Subtle inner shadow overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
              </motion.div>

              {/* SVG blob mask definition */}
              <svg className="absolute w-0 h-0">
                <defs>
                  <clipPath id="blob-mask" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0.02 C0.75,0.02 0.92,0.15 0.96,0.35 C1,0.55 0.95,0.75 0.85,0.88 C0.75,1 0.55,0.98 0.4,0.96 C0.25,0.94 0.1,0.88 0.05,0.7 C0,0.52 0.05,0.3 0.15,0.15 C0.25,0 0.35,0.02 0.5,0.02" />
                  </clipPath>
                </defs>
              </svg>

              {/* Floating tech badges - burst out from center */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: 100, y: 200 }}
                animate={imageLoaded ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0, x: 100, y: 200 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
                className="absolute -top-2 right-8"
              >
                <motion.div
                  animate={imageLoaded ? { y: [0, -8, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
                  className="px-4 py-2 bg-primary text-secondary font-semibold text-sm rounded-full shadow-lg shadow-primary/30"
                >
                  Umělá inteligence
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, x: 150, y: 100 }}
                animate={imageLoaded ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0, x: 150, y: 100 }}
                transition={{
                  duration: 0.6,
                  delay: 0.65,
                  type: "spring",
                  stiffness: 260,
                  damping: 15
                }}
                className="absolute top-1/4 -left-8"
              >
                <motion.div
                  animate={imageLoaded ? { y: [0, 6, 0] } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
                >
                  Technologické konzultace
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, x: 120, y: 50 }}
                animate={imageLoaded ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0, x: 120, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 240,
                  damping: 15
                }}
                className="absolute top-[45%] -left-4"
              >
                <motion.div
                  animate={imageLoaded ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
                >
                  Školení
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, x: -80, y: 80 }}
                animate={imageLoaded ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0, x: -80, y: 80 }}
                transition={{
                  duration: 0.6,
                  delay: 0.75,
                  type: "spring",
                  stiffness: 250,
                  damping: 15
                }}
                className="absolute top-[55%] -right-6"
              >
                <motion.div
                  animate={imageLoaded ? { y: [0, -6, 0] } : {}}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
                >
                  Mentoring
                </motion.div>
              </motion.div>

            </div>
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
