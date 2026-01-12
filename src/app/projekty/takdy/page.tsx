"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Check,
  Users,
  Clock,
  Link as LinkIcon,
  MessageSquare,
  Zap,
  Code2,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";

const features = [
  {
    icon: Users,
    title: "Bez registrace",
    description: "Organizátoři i účastníci mohou používat aplikaci bez vytváření účtu.",
  },
  {
    icon: Clock,
    title: "Jednoduchý workflow",
    description: "6 kroků od vytvoření ankety po nalezení ideálního termínu.",
  },
  {
    icon: LinkIcon,
    title: "Sdílení odkazem",
    description: "Stačí poslat odkaz a účastníci mohou hlasovat okamžitě.",
  },
  {
    icon: MessageSquare,
    title: "Doplňující otázky",
    description: "Přidejte vlastní otázky - strava, doprava, cokoliv potřebujete.",
  },
];

const techStack = [
  { name: "Next.js", description: "React framework" },
  { name: "Supabase", description: "Backend & databáze" },
  { name: "TypeScript", description: "Typová bezpečnost" },
  { name: "Tailwind CSS", description: "Styling" },
  { name: "Claude Code", description: "Vibe coding" },
];

export default function TakdyProjectPage() {
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
              {["Vibe Coding", "Next.js", "Supabase"].map((tag) => (
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
              Takdy.cz<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl"
            >
              Bezplatná aplikace pro snadné plánování společných setkání. Jako Doodle, ale jednodušší a bez registrace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://takdy.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-6 py-3 rounded-full transition-all"
              >
                Vyzkoušet aplikaci
                <ExternalLink size={18} />
              </a>
              <span className="inline-flex items-center gap-2 text-white/50 text-sm">
                <Calendar size={16} />
                2026
              </span>
            </motion.div>
          </div>
        </div>

        <WaveSeparator fillColor="white" />
      </section>

      {/* Screenshot Section */}
      <section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16 overflow-visible">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            <Image
              src="/images/portfolio/takdy/takdy_promo.png"
              alt="Takdy.cz - landing page"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl md:rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding pb-32 md:pb-40 bg-white relative">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                <Zap size={16} />
                Problém
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Plánování společného času je otrava
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nekonečné zprávy ve skupinovém chatu. &quot;Kdy se vám hodí?&quot; &quot;Mně úterý.&quot;
                &quot;Mně ne, co středa?&quot; Domlouvání termínu se může táhnout pomaleji než lenochod na větvi.
                A pak ještě někdo napíše &quot;vlastně mi to nevyhovuje&quot;...
              </p>
            </motion.div>
          </div>
        </div>
        <WaveSeparator fillColor="#f8fafc" variant={2} />
      </section>

      {/* Solution Section */}
      <section className="min-h-[500px] md:min-h-[600px] pt-16 md:pt-0 pb-32 md:pb-40 bg-section-alt relative flex flex-col justify-center">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                <Check size={16} />
                Řešení
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Jeden odkaz, všechny odpovědi
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Vytvořte anketu, vyberte možné termíny, pošlete odkaz. Účastníci označí, kdy mohou -
                a vy vidíte v reálném čase, který termín vyhovuje nejvíce lidem. Žádná registrace,
                žádné složitosti.
              </p>
            </motion.div>

            {/* How it works */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { step: "1", title: "Vytvořte anketu", desc: "Pojmenujte událost a vyberte možné termíny" },
                { step: "2", title: "Sdílejte odkaz", desc: "Pošlete odkaz účastníkům přes chat nebo email" },
                { step: "3", title: "Vyberte termín", desc: "Sledujte odpovědi a vyberte ideální čas" },
              ].map((item, index) => (
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

      {/* Features Section */}
      <section className="section-padding pt-12 md:pt-20 pb-56 md:pb-80 bg-white relative">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Hlavní funkce
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-section-alt rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-secondary mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <WaveSeparator fillColor="#05121F" variant={2} />
      </section>

      {/* Vibe Coding Section */}
      <section className="min-h-[500px] md:min-h-[650px] pt-16 md:pt-12 pb-32 md:pb-40 bg-secondary relative flex flex-col justify-center">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                <Code2 size={16} />
                Vibe Coding
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Vytvořeno s Claude Code
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Takdy.cz je ukázkou toho, co lze vytvořit pomocí vibe codingu. Celá aplikace vznikla
                v konverzaci s AI - od návrhu databázového schématu po finální UI. Bez nutnosti psát
                každý řádek kódu ručně.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <span className="text-white font-medium text-sm">{tech.name}</span>
                  <span className="text-white/50 text-xs">•</span>
                  <span className="text-white/60 text-xs">{tech.description}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <WaveSeparator fillColor="white" />
      </section>

      {/* CTA Section */}
      <section className="section-padding pb-40 md:pb-52 bg-white relative">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                <Lightbulb size={16} />
                Pro koho je to vhodné
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Chcete podobnou aplikaci?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                Pomohu vám vytvořit vlastní webovou aplikaci nebo vás naučím, jak na to sami.
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

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Plánovací nástroj",
                  description:
                    "Aplikace pro organizaci schůzek, událostí nebo směn v týmu.",
                },
                {
                  title: "Interní firemní nástroj",
                  description:
                    "Řešení na míru pro specifické potřeby vaší firmy.",
                },
                {
                  title: "Rezervační systém",
                  description:
                    "Online rezervace pro služby, kurzy nebo konzultace.",
                },
                {
                  title: "Komunitní platforma",
                  description:
                    "Nástroj pro koordinaci aktivit ve spolku nebo skupině.",
                },
                {
                  title: "MVP pro startup",
                  description:
                    "Rychlý prototyp pro ověření vašeho nápadu na trhu.",
                },
                {
                  title: "Automatizace procesů",
                  description:
                    "Aplikace, která zjednoduší opakující se úkoly.",
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
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-secondary">
              Další projekty
            </h2>
          </motion.div>

          <div className="flex justify-center">
            <Link
              href="/projekty"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
            >
              Zobrazit všechny projekty
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
