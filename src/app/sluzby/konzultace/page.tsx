"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  ArrowRight,
  Quote,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  Target,
  Zap,
  Clock,
  Users,
  Code2,
  Cpu,
  Workflow,
  FileSearch,
  MessageCircleQuestion,
  Calendar,
  Video,
  Coffee,
  ListChecks,
  Rocket,
  Settings,
  Brain,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import OtherServices from "@/components/services/OtherServices";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";

const consultationTypes = [
  {
    title: "Vibe Coding poradenství",
    description:
      "Jak začít s vibe codingem, výběr správných nástrojů, best practices a jak se vyhnout častým chybám při vývoji s AI.",
    icon: Zap,
    examples: ["Výběr nástrojů", "Workflow nastavení", "Best practices"],
  },
  {
    title: "Produktové konzultace",
    description:
      "Pomoc s návrhem a vývojem digitálních produktů. Od prvotní myšlenky přes MVP až po škálování.",
    icon: Rocket,
    examples: ["Validace nápadu", "MVP strategie", "Tech stack", "Škálování"],
  },
  {
    title: "AI Strategie",
    description:
      "Jak efektivně nasadit AI do vašeho byznysu nebo workflow. Identifikace příležitostí, výběr nástrojů a plán implementace.",
    icon: Brain,
    examples: ["Analýza procesů", "Výběr AI nástrojů", "Implementační plán",],
  },
  {
    title: "Technické konzultace",
    description:
      "Řešení konkrétních technických problémů, pomoc s Vašich automatizacemi nebo vibe coded řešeními.",
    icon: Code2,
    examples: ["Architektura aplikace", "Zhodnocení vibe coded řešení", "..."],
  },
];

const consultationProcess = [
  {
    icon: MessageCircleQuestion,
    title: "Úvodní kontakt",
    description: "Popíšete mi váš problém nebo cíl",
  },
  {
    icon: Calendar,
    title: "Naplánování",
    description: "Domluvíme termín a formát konzultace",
  },
  {
    icon: Video,
    title: "Konzultace",
    description: "Online nebo osobní setkání",
  },
  {
    icon: ListChecks,
    title: "Shrnutí & další kroky",
    description: "Dostanete konkrétní doporučení",
  },
];

const consultationFormats = [
  {
    title: "Jednorázová konzultace",
    duration: "60 minut",
    description: "Ideální pro rychlé vyřešení konkrétního problému nebo získání druhého názoru.",
    icon: Coffee,
    features: [
      "Konkrétní problém nebo otázka",
      "Okamžité doporučení",
      "Shrnutí emailem",
    ],
  },
  {
    title: "Hloubková analýza",
    duration: "2-4 hodiny",
    description: "Komplexní pohled na váš projekt, proces nebo strategii s detailním výstupem.",
    icon: FileSearch,
    features: [
      "Důkladná analýza",
      "Písemný report",
      "Akční plán",
      "Follow-up call",
    ],
  },
  {
    title: "Průběžné konzultace",
    duration: "Dle potřeby",
    description: "Pravidelná podpora při dlouhodobějších projektech nebo transformacích.",
    icon: Users,
    features: [
      "Flexibilní rozsah",
      "Prioritní dostupnost",
      "Průběžná podpora",
    ],
    link: "/sluzby/mentoring",
    linkText: "Nebo zkuste mentoring",
  },
];

const whyMe = [
  {
    icon: Code2,
    title: "8+ let v IT",
    description: "Zkušenosti jako vývojář, analytik i tech lead v různých projektech a firmách",
  },
  {
    icon: Cpu,
    title: "AI praktik",
    description: "Denně pracuji s AI nástroji a sleduji nejnovější trendy v oboru",
  },
  {
    icon: TrendingUp,
    title: "Business pohled",
    description: "Chápu nejen technickou stránku, ale i byznys kontext - mám za sebou několik vlastních projektů",
  },
  {
    icon: MessageSquare,
    title: "Srozumitelnost",
    description: "Vysvětlím i komplexní témata tak, aby jim rozuměl každý",
  },
];

export default function KonzultacePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />

      <ServicePageHeader
        title="Konzultace"
        subtitle="Expertní poradenství"
        description="Potřebujete rychle vyřešit konkrétní problém nebo se poradit o směřování vašeho projektu? Využijte mé zkušenosti jako vývojáře, analytika a AI experta."
        icon={MessageSquare}
      />

      <main>
        {/* Consultation Types Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Oblasti konzultací
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                S čím vám pomohu<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted text-lg max-w-2xl mx-auto"
              >
                Díky kombinaci technických znalostí a praktických zkušeností s AI
                vám dokáži poradit v široké škále oblastí.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {consultationTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon
                        className="text-primary group-hover:text-white transition-colors duration-300"
                        size={26}
                      />
                    </div>
                    <h3 className="font-bold text-secondary text-xl mb-3">
                      {type.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {type.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example) => (
                        <span
                          key={example}
                          className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Me Section */}
        <section className="section-padding pb-32 md:pb-40 bg-secondary relative overflow-hidden">
          {/* Top wave */}
          <div className="absolute top-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
              <path d="M0 0H1440V30C1380 30 1320 30 1200 35C1080 40 960 50 840 55C720 60 600 60 480 50C360 40 240 20 120 10C60 5 0 0 0 0Z" fill="white" />
            </svg>
          </div>
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
                >
                  Proč konzultovat se mnou
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                  Zkušenosti z praxe<span className="text-primary">.</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-white/70 text-lg mb-8"
                >
                  Nejsem teoretik. Všechno, co doporučuji, jsem sám vyzkoušel a
                  používám v praxi. Pomohu vám vyhnout se chybám, které jsem
                  udělal já.
                </motion.p>

                <div className="space-y-4">
                  {whyMe.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <div className="text-center mb-6">
                  <Quote className="text-primary mx-auto mb-4" size={32} />
                  <p className="text-white/80 text-lg italic leading-relaxed mb-4">
                    &ldquo;Konzultace s Filipem mi ušetřila týdny zkoušení
                    různých přístupů. Během hodiny jsme vyřešili problém, nad
                    kterým jsem se trápil měsíc.&rdquo;
                  </p>
                  <p className="text-primary font-semibold">— Spokojený klient</p>
                </div>
                <div className="border-t border-white/10 pt-6 mt-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        Praktický
                      </div>
                      <div className="text-white/60 text-sm">přístup</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        Srozumitelný
                      </div>
                      <div className="text-white/60 text-sm">výklad</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <WaveSeparator fillColor="white" variant={2} />
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Jak to funguje
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Jednoduchý proces<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {consultationProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    {index < consultationProcess.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                    )}
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="text-xs text-primary font-bold mb-2">
                      Krok {index + 1}
                    </div>
                    <h3 className="font-bold text-secondary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formats Section */}
        <section className="section-padding bg-section-alt">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Formáty konzultací
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Vyberte si, co vám vyhovuje<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {consultationFormats.map((format, index) => {
                const Icon = format.icon;
                return (
                  <motion.div
                    key={format.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col"
                  >
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={26} />
                    </div>
                    <h3 className="font-bold text-secondary text-xl mb-1">
                      {format.title}
                    </h3>
                    <div className="text-primary text-sm font-medium mb-3">
                      {format.duration}
                    </div>
                    <p className="text-muted text-sm mb-4">{format.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {format.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-secondary"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-primary flex-shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {format.link && (
                      <Link
                        href={format.link}
                        className="mt-4 text-primary font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        {format.linkText}
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding bg-white">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Příklady využití
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Kdy se konzultace hodí<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Lightbulb,
                  text: "Máte nápad na aplikaci a nevíte, jak začít",
                },
                {
                  icon: Settings,
                  text: "Potřebujete vybrat správný tech stack pro váš projekt",
                },
                {
                  icon: Cpu,
                  text: "Chcete zavést AI do firemních procesů",
                },
                {
                  icon: Code2,
                  text: "Potřebujete code review nebo architektonické doporučení",
                },
                {
                  icon: Zap,
                  text: "Chcete začít s vibe codingem, ale nevíte kde",
                },
                {
                  icon: Target,
                  text: "Řešíte konkrétní technický problém a potřebujete druhý názor",
                },
              ].map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={useCase.text}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-section-alt rounded-xl"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <p className="text-secondary font-medium">{useCase.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-24 md:pt-36 pb-32 md:pb-40 bg-secondary relative overflow-hidden">
          {/* Top wave */}
          <div className="absolute top-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
              <path d="M0 0H1440V30C1380 30 1320 30 1200 35C1080 40 960 50 840 55C720 60 600 60 480 50C360 40 240 20 120 10C60 5 0 0 0 0Z" fill="white" />
            </svg>
          </div>
          <div className="container-narrow mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pojďme to vyřešit společně<span className="text-primary">.</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Popište mi svůj problém nebo cíl a domluvíme se na nejlepším
                formátu konzultace. První krátký call na seznámení je zdarma.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors"
                >
                  Domluvit konzultaci
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/sluzby/mentoring"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors border border-white/20"
                >
                  Nebo dlouhodobý mentoring
                </Link>
              </div>
            </motion.div>
          </div>
          <WaveSeparator fillColor="#F8FAFC" variant={4} />
        </section>

        <OtherServices currentSlug="konzultace" />
      </main>

      <Footer />
    </>
  );
}
