"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
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

      <div className="container-narrow mx-auto px-4 md:px-8 pt-32 pb-32 md:pt-40 md:pb-48 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 mb-8"
            >
              <Sparkles size={16} className="text-primary" />
              <span>AI & Vibe Coding Expert</span>
            </motion.div>

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

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 mb-8 max-w-lg"
            >
              {siteConfig.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#sluzby"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:gap-4"
              >
                Prozkoumat služby
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/10"
              >
                <Calendar size={18} />
                Rezervovat hovor
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
                  <AnimatedCounter value={23} suffix="+" />
                </div>
                <div className="text-white/50 text-sm">spokojených klientů</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={310} suffix="+" />
                </div>
                <div className="text-white/50 text-sm">proškolených účastníků</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={8} suffix="+" />
                </div>
                <div className="text-white/50 text-sm">let zkušeností</div>
              </div>
            </motion.div>
          </div>

          {/* Right visual - Photo with organic blob shape and floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient glow behind photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-3xl scale-110" />

              {/* Organic blob photo container */}
              <div
                className="relative aspect-[4/5]"
                style={{
                  clipPath: "url(#blob-mask)",
                }}
              >
                <Image
                  src="/images/portrait.png"
                  alt="Filip Oborník"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle inner shadow overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
              </div>

              {/* SVG blob mask definition */}
              <svg className="absolute w-0 h-0">
                <defs>
                  <clipPath id="blob-mask" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0.02 C0.75,0.02 0.92,0.15 0.96,0.35 C1,0.55 0.95,0.75 0.85,0.88 C0.75,1 0.55,0.98 0.4,0.96 C0.25,0.94 0.1,0.88 0.05,0.7 C0,0.52 0.05,0.3 0.15,0.15 C0.25,0 0.35,0.02 0.5,0.02" />
                  </clipPath>
                </defs>
              </svg>

              {/* Floating tech badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-2 right-8"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="px-4 py-2 bg-primary text-secondary font-semibold text-sm rounded-full shadow-lg shadow-primary/30"
                >
                  AI
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-12 -right-4"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/80 to-primary text-secondary font-semibold text-sm rounded-full shadow-lg"
                >
                  Vibe Coding
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute top-1/4 -left-8"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
                >
                  Automatizace
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-[45%] -left-4"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
                >
                  Školení
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-[55%] -right-6"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
                >
                  Mentoring
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute bottom-16 -left-6"
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
                >
                  Technologie
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -bottom-2 right-12"
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="px-4 py-2 bg-primary text-secondary font-semibold text-sm rounded-full shadow-lg shadow-primary/30"
                >
                  Speaker
                </motion.div>
              </motion.div>

              {/* Small decorative dots */}
              <div className="absolute top-8 -left-12 w-2 h-2 bg-primary/60 rounded-full" />
              <div className="absolute bottom-1/3 -right-12 w-3 h-3 bg-primary/40 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
