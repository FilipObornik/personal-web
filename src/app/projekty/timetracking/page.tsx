"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";

export default function TimeTrackingProjectPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary pt-28 md:pt-36 pb-20 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/projekty"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Zpět na portfolio
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {["Web App", "AI", "Produktivita"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              AI Time Tracking<span className="text-primary">.</span>
            </motion.h1> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl"
            >
              Chytrý nástroj pro sledování času s AI funkcemi pro automatickou kategorizaci.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://timetracking.aisrozumem.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-6 py-3 rounded-full transition-all"
              >
                Navštívit aplikaci
                <ExternalLink size={18} />
              </a>
              <span className="inline-flex items-center gap-2 text-white/50 text-sm">
                <Calendar size={16} />
                2024
              </span>
            </motion.div>
          </div>
        </div>

        <WaveSeparator fillColor="white" />
      </section>

      {/* Content Section - TO BE VIBE CODED */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center py-20">
            <p className="text-gray-400 text-lg">
              Obsah této stránky bude brzy doplněn.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
