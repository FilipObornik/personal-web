"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Check,
  Zap,
  Sparkles,
  Clock,
  Wallet,
  Target,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";

const benefits = [
  {
    icon: Clock,
    title: "Hotovo za dny, ne týdny",
    description: "Profesionální web bez čekání na agenturu. Rychlá realizace díky vibe codingu.",
  },
  {
    icon: Wallet,
    title: "Zlomek nákladů",
    description: "Žádné hodinové sazby vývojářů. Platíte jen za výsledek, ne za čas.",
  },
  {
    icon: Target,
    title: "Přesně podle představ",
    description: "Iterativní tvorba v dialogu. Úpravy za pár minut, ne dní.",
  },
  {
    icon: TrendingUp,
    title: "Profesionální dojem",
    description: "Moderní design a animace, které budí důvěru u potenciálních klientů.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Vize",
    desc: "Popsal jsem, co web potřebuje - služby, portfolio, reference, kontakt",
  },
  {
    step: "2",
    title: "Tvorba",
    desc: "AI postupně vytvořil jednotlivé sekce podle mých požadavků",
  },
  {
    step: "3",
    title: "Ladění",
    desc: "Úpravy textů, barev a detailů - vše v reálném čase",
  },
];

export default function OsobniWebContent() {
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

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
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
              {["Vibe Coding", "Osobní prezentace", "Freelancer"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Osobní web<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl"
            >
              Profesionální web pro freelancera - vytvořený kompletně pomocí vibe codingu.
              Důkaz, že i bez programování můžete mít web na úrovni.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-6 py-3 rounded-full transition-all"
              >
                Prohlédnout web
                <ExternalLink size={18} />
              </Link>
              <span className="inline-flex items-center gap-2 text-white/50 text-sm">
                <Calendar size={16} />
                2025
              </span>
            </motion.div>
          </div>
        </div>

        <WaveSeparator fillColor="white" />
      </section>

      {/* Screenshot Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <Image
              src="/images/portfolio/portfolio/portfolio_landing.png"
              alt="Osobní web - úvodní stránka"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 md:py-28 pb-28 md:pb-36 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                <Zap size={16} />
                Výzva
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Freelancer potřebuje profesionální prezentaci
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Jako konzultant a lektor jsem potřeboval web, který představí mé služby,
                ukáže reference a umožní klientům snadno mě kontaktovat. Klasická cesta přes
                agenturu? Týdny čekání a vysoké náklady. Šablonový web? Vypadá jako tisíc dalších.
              </p>
            </motion.div>
          </div>
        </div>
        <WaveSeparator fillColor="#f8fafc" variant={2} />
      </section>

      {/* Solution Section */}
      <section className="pt-12 md:pt-16 pb-40 md:pb-48 bg-section-alt relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                <Check size={16} />
                Řešení
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Vibe coding - web vlastními slovy
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Místo programování nebo čekání na někoho jiného jsem jednoduše popsal,
                co potřebuji. AI vytvořil kód, já viděl výsledek a řekl, co změnit.
                Jako byste měli vývojáře, který okamžitě reaguje.
              </p>
            </motion.div>

            {/* Process steps */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <WaveSeparator fillColor="white" />
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 pb-28 md:pb-36 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Proč vibe coding pro osobní web?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-section-alt rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <WaveSeparator fillColor="#05121F" variant={2} />
      </section>

      {/* Result Section */}
      <section className="pt-12 md:pt-16 pb-40 md:pb-48 bg-secondary relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                <Sparkles size={16} />
                Výsledek
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Web, který pracuje pro mě
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Moderní design, který budí důvěru. Přehledné služby, reference od klientů,
                jasná cesta ke kontaktu. Web, který sám o sobě demonstruje, co vibe coding dokáže.
              </p>
            </motion.div>

            {/* What the site includes */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                "Úvodní sekce",
                "Přehled služeb",
                "Portfolio projektů",
                "Reference klientů",
                "O mně",
                "Kontaktní formulář",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <span className="text-white font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <WaveSeparator fillColor="white" />
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 pb-28 md:pb-36 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                <Lightbulb size={16} />
                Pro koho je to vhodné
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Chcete podobný web?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Pomohu vám vytvořit podobný web nebo vás naučím, jak na to sami.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/sluzby/webinare-a-workshopy"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-6 py-3 rounded-full transition-all"
                >
                  Naučit se vibe coding
                </Link>
                <Link
                  href="/sluzby/partnerske-projekty"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-full transition-all"
                >
                  Nechte to na mně
                </Link>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
              {[
                {
                  title: "Osobní portfolio",
                  description:
                    "Prezentace vašich projektů, dovedností a zkušeností.",
                },
                {
                  title: "Vizitka na web",
                  description:
                    "Jednoduchá stránka s kontaktem a základními informacemi.",
                },
                {
                  title: "Landing page",
                  description:
                    "Představení vašeho produktu, služby nebo akce.",
                },
                {
                  title: "Firemní web",
                  description:
                    "Profesionální prezentace vaší firmy nebo týmu.",
                },
                {
                  title: "Osobní blog",
                  description:
                    "Místo pro sdílení vašich myšlenek a článků.",
                },
                {
                  title: "Komunitní stránka",
                  description:
                    "Web pro váš klub, spolek nebo neziskový projekt.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Check className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <WaveSeparator fillColor="#f8fafc" />
      </section>

      {/* Other Projects */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Další projekty
            </h2>
            <Link
              href="/projekty"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
            >
              Zobrazit všechny projekty
              <ExternalLink size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
