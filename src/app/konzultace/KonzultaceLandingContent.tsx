"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  Tag,
  ShieldCheck,
  Eye,
  HeartHandshake,
  Camera,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoPlaceholder from "@/components/landing/VideoPlaceholder";
import LeadForm from "@/components/landing/LeadForm";
import TestimonialPlaceholder from "@/components/landing/TestimonialPlaceholder";

const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};

const stavebniDozorBullets = [
  "Zhodnotím, jestli plánovaná investice dává smysl.",
  "Posoudím návrh architektury nebo technologie.",
  "Pomůžu vybrat dodavatele a nastavit spolupráci.",
  "Provedu audit existujícího řešení.",
  "Poradím, co se vyplatí řešit AI automatizací vs. klasickým vývojem.",
];

const realizacePrinciples = [
  {
    icon: ShieldCheck,
    text: "Transparentní cena — předem domluvený rozsah, žádná překvapení",
  },
  {
    icon: Eye,
    text: "Žádné černé skříňky — víte přesně, co se děje a proč",
  },
  {
    icon: HeartHandshake,
    text: "Na vaší straně — vždy hájím vaše zájmy, ne zájmy subdodavatelů",
  },
];

const credentials = [
  "8+ let zkušeností jako vývojář, analytik a tech lead.",
  "Pracoval jsem na projektech od startupů po enterprise — vím, co funguje a co ne.",
  "Denně pracuji s AI nástroji v praxi, ne jen na papíře.",
  "Neplatím provizi, neprodávám technologie — říkám, co si myslím.",
];

export default function KonzultaceLandingContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />

      {/* Section 1: Hero (dark, bg-secondary) */}
      <section className="bg-secondary text-white pt-32 pb-0 px-4 md:px-8 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-24 md:pb-32">
            {/* Left col */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-6 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20"
              >
                Konzultace & Vývoj
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Stavíte software a potřebujete někoho, kdo vám řekne{" "}
                <span className="text-primary">pravdu?</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/70 text-xl leading-relaxed mb-8"
              >
                Ne dodavatel, ne prodejce — nezávislý technický poradce, který
                hájí vaše zájmy. A když potřebujete, dokážu to i postavit.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 group shadow-lg shadow-primary/25"
              >
                Popište mi, co řešíte
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </div>

            {/* Right col */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VideoPlaceholder
                title="Stavební dozor pro váš software projekt"
                duration="60 sec"
              />
            </motion.div>
          </div>
        </div>

        {/* Wave separator into bg-white */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80H1440V40C1380 40 1320 50 1200 55C1080 60 960 70 840 72C720 74 600 70 480 60C360 50 240 30 120 20C60 15 0 20 0 20V80Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Section 2: Stavební dozor (bg-white) */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Služba A
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-secondary mb-8"
          >
            Nezávislý pohled na váš projekt<span className="text-primary">.</span>
          </motion.h2>

          {/* Emotional hook */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="border-l-4 border-primary pl-6 italic text-muted text-lg mb-8"
          >
            &ldquo;Nechci vyhodit statisíce za špatné rozhodnutí. Nemám
            technického člověka, kterému věřím, a dodavatel mi řekne cokoli,
            aby dostal zakázku.&rdquo;
          </motion.blockquote>

          {/* Bullets */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 mb-8"
          >
            {stavebniDozorBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2
                  size={22}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span className="text-secondary text-lg leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Key message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6 mt-6 mb-6"
          >
            <Quote size={32} className="text-primary mb-3 opacity-60" />
            <p className="text-secondary text-lg leading-relaxed font-medium">
              Nejsem dodavatel — nebudu vám prodávat řešení. Jsem na vaší
              straně stolu.
            </p>
          </motion.div>

          {/* Pricing badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-secondary text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-bold mt-2">
              <Tag size={18} />
              Konzultace od 1&nbsp;250&nbsp;Kč/hod
            </span>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Realizace (bg-section-alt) */}
      <section className="pt-28 md:pt-40 pb-28 md:pb-40 px-4 md:px-8 bg-secondary relative overflow-hidden">
        {/* Wave at top from bg-white */}
        <div className="absolute top-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0H1440V30C1380 30 1320 30 1200 35C1080 40 960 50 840 55C720 60 600 60 480 50C360 40 240 20 120 10C60 5 0 0 0 0Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="container-narrow relative">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Služba B
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            Potřebujete to i postavit? Umím to<span className="text-primary">.</span>
          </motion.h2>

          {/* Emotional hook */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="border-l-4 border-primary pl-6 italic text-white/70 text-lg mb-8"
          >
            &ldquo;Nechci hledat dodavatele naslepo. Chci někoho, kdo rozumí
            AI, rozumí vývoji, a dokáže to doručit.&rdquo;
          </motion.blockquote>

          {/* Body paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg leading-relaxed mb-10"
          >
            Podle rozsahu projektu budu realizaci provádět sám (menší projekty,
            automatizace, AI integrace), nebo koordinuji tým partnerů. Vždy
            s důrazem na to, že vy víte, co dostáváte, kolik to stojí, a proč.
            Žádné černé skříňky.
          </motion.p>

          {/* Key principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {realizacePrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <p className="text-white/80 leading-relaxed">{principle.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing note */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center italic text-white/50"
          >
            Cena projektu individuálně podle rozsahu. Úvodní konzultace zdarma.
          </motion.p>
        </div>

        {/* Wave at bottom into bg-white */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80H1440V40C1380 40 1320 50 1200 55C1080 60 960 70 840 72C720 74 600 70 480 60C360 50 240 30 120 20C60 15 0 20 0 20V80Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Section 4: References (bg-white) */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Reference
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            >
              Co říkají klienti<span className="text-primary">.</span>
            </motion.h2>
          </div>

          <TestimonialPlaceholder count={3} />
        </div>
      </section>

      {/* Section 5: About (bg-section-alt) */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Proč já
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            >
              Nezávislý. Zkušený. Na vaší straně<span className="text-primary">.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square rounded-3xl bg-secondary/5 border-2 border-dashed border-secondary/20 flex flex-col items-center justify-center gap-4 text-secondary/40">
                <Camera size={40} />
                <p className="text-sm">Foto</p>
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ul className="space-y-5">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <p className="text-secondary leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA + Form (dark, bg-secondary) */}
      <section
        id="form"
        className="pt-28 md:pt-40 pb-28 md:pb-40 px-4 md:px-8 bg-secondary relative overflow-hidden"
      >
        {/* Wave at top from bg-section-alt */}
        <div className="absolute top-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0H1440V30C1380 30 1320 30 1200 35C1080 40 960 50 840 55C720 60 600 60 480 50C360 40 240 20 120 10C60 5 0 0 0 0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-narrow relative">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Popište mi, co{" "}
              <span className="text-primary">řešíte.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg"
            >
              Úvodní konzultace je zdarma. Probereme vaši situaci a já vám
              řeknu upřímně, jestli a jak vám dokážu pomoct.
            </motion.p>
          </div>

          <LeadForm
            service="konzultace"
            fields={{
              showCompany: true,
              showBudget: true,
              messagePlaceholder:
                "Popište váš projekt nebo situaci. Čím více detailů, tím lépe se připravím.",
            }}
          />

          <p className="text-center text-white/50 text-sm mt-12 pt-8 border-t border-white/10">
            Hledáte něco jiného?{" "}
            <Link href="/#sluzby" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors font-medium">
              Prohlédněte si všechny služby →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
