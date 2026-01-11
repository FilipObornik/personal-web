"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Route,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  MapPin,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";
import { careerHistory, education, siteConfig } from "@/lib/data";

export default function MojeCestaPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const currentJobs = careerHistory.filter((item) =>
    item.dateRange.includes("současnost")
  );
  const pastJobs = careerHistory.filter(
    (item) => !item.dateRange.includes("současnost")
  );

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container-narrow mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <Route className="text-white" size={32} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Moje cesta<span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto mb-6"
          >
            Jsem kovaný mobilní vývojář, software analytik a v poslední době se intenzivně zabývám
            AI a jejím využitím jak ve vývoji software tak i v podnikání a osobním životě.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm"
          >
            <Linkedin size={16} />
            Kompletní profil na LinkedIn
            <ExternalLink size={14} />
          </motion.a>
        </div>

        <WaveSeparator fillColor="white" variant={1} />
      </section>

      <main>
        {/* Intro Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-narrow mx-auto">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-muted space-y-4"
              >
                <p>
                  Věnuji se workshopům, školením a mentoringu v oblasti AI
                  a vibe codingu. Tvořím edukační obsah na YouTube a vedu
                  komunitu kolem projektu AI s rozumem. Zároveň působím jako
                  team leader Flutter týmu a konzultuji v oblastech mobilního
                  vývoje, produktu a AI integrace.
                </p>
                <p>
                  Moje povaha je generalista. Rád se učím, zkouším a objevuji
                  nové technologie, přístupy a možnosti. Právě díky přesahu
                  do různých odvětví - od vývoje přes produkt až po vzdělávání -
                  dokážu na problémy nahlížet z více úhlů a hledat řešení,
                  která dávají smysl.
                </p>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 pl-4 border-l-2 border-primary italic text-secondary"
              >
                „Je jedno, jaká výzva přijde - je třeba si ji pojmenovat,
                zavlastnit, rozpadnout, pokořit a dotáhnout do zdárného konce."
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* Current Jobs Section */}
        <section className="py-12 md:py-16 bg-section-alt">
          <div className="container-narrow mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h2 className="text-xl font-bold text-secondary">
                Aktuálně se věnuji
              </h2>
            </div>

            {/* Zig-zag Timeline - Current */}
            <div className="relative">
              <div className="absolute left-3 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-primary/30" />

              {currentJobs.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.dateRange}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative flex items-center mb-3 md:mb-0 ${
                    index % 2 === 0
                      ? "md:flex-row md:justify-start"
                      : "md:flex-row-reverse md:justify-start"
                  } ${index > 0 ? "md:-mt-6" : ""}`}
                >
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full z-10" />

                  <div
                    className={`ml-8 md:ml-0 md:w-[calc(50%-1rem)] ${
                      index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                    }`}
                  >
                    <div className="bg-white rounded-lg p-3 shadow-sm border-l-2 border-primary">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
                        <h3 className="font-semibold text-secondary text-sm">
                          {item.title}
                        </h3>
                        <span className="text-xs text-primary font-medium">
                          {item.dateRange}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted mb-1">
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors inline-flex items-center gap-1"
                          >
                            {item.company}
                            <ExternalLink size={10} />
                          </a>
                        ) : (
                          <span>{item.company}</span>
                        )}
                        {item.location && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin size={10} />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>

                      <p className="text-muted text-xs leading-relaxed">
                        {item.description}
                      </p>

                      {item.highlights && item.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-1rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Jobs Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-narrow mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-muted" size={20} />
              <h2 className="text-xl font-bold text-secondary">
                Předchozí zkušenosti
              </h2>
            </div>

            {/* Zig-zag Timeline - Past */}
            <div className="relative">
              <div className="absolute left-3 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gray-200" />

              {pastJobs.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.dateRange}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative flex items-center mb-3 md:mb-0 ${
                    index % 2 === 0
                      ? "md:flex-row md:justify-start"
                      : "md:flex-row-reverse md:justify-start"
                  } ${index > 0 ? "md:-mt-4" : ""}`}
                >
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full z-10" />

                  <div
                    className={`ml-8 md:ml-0 md:w-[calc(50%-1rem)] ${
                      index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
                        <h3 className="font-semibold text-secondary text-sm">
                          {item.title}
                        </h3>
                        <span className="text-xs text-muted">
                          {item.dateRange}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted mb-1">
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors inline-flex items-center gap-1"
                          >
                            {item.company}
                            <ExternalLink size={10} />
                          </a>
                        ) : (
                          <span>{item.company}</span>
                        )}
                        {item.location && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin size={10} />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>

                      <p className="text-muted text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-1rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 md:py-16 bg-section-alt">
          <div className="container-narrow mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={20} />
              <h2 className="text-xl font-bold text-secondary">Vzdělání</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {education.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.dateRange}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-gray-100"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-semibold text-secondary text-sm">
                      {item.title}
                    </h3>
                    <span className="text-xs text-muted">{item.dateRange}</span>
                  </div>
                  <p className="text-muted text-sm">{item.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-16 md:pt-24 pb-16 md:pb-24 bg-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 -translate-y-[59px]">
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full block h-[60px]"
              preserveAspectRatio="none"
            >
              <path
                d="M0 30C240 50 480 60 720 50C960 40 1200 20 1440 30V60H0V30Z"
                fill="var(--color-secondary)"
              />
            </svg>
          </div>

          <div className="container-narrow mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pojďme spolupracovat<span className="text-primary">.</span>
              </h2>
              <p className="text-white/70 mb-6">
                Ať už hledáte mentoring, konzultaci nebo školení - rád vám
                pomohu na vaší cestě.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Kontaktovat mě
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-colors border border-white/20"
                >
                  <Linkedin size={18} />
                  LinkedIn profil
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
