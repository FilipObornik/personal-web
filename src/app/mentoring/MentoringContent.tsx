"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  MessageSquare,
  MessageCircle,
  Target,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Quote,
  User,
  UsersRound,
  Sparkles,
  Code2,
  Cpu,
  Rocket,
  XCircle,
  Compass,
  Clock,
  Zap,
  Brain,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoPlaceholder from "@/components/landing/VideoPlaceholder";
import LeadForm from "@/components/landing/LeadForm";
import { getTestimonials } from "@/lib/data";

const painPoints = [
  {
    audience: "Jako jednotlivec",
    items: [
      "Zkoušíte stále nové nástroje — místo práce testujete. Výsledek je víc chaosu, ne víc výkonu.",
      "Jste na dalším YouTube tutoriálu. Zase. A zase odcházíte bez jasné odpovědi na to, co dělat konkrétně vy.",
      "Vidíte, jak ostatní s AI pracují přirozeně. Vy stále tápete, kde vlastně začít.",
      "Každý mluví o AI revoluci. Vy ji zatím necítíte — jen únavu ze sledování.",
    ],
  },
  {
    audience: "Jako firma nebo tým",
    items: [
      "Zaplatili jste licence na AI nástroje. Tým je skoro nepoužívá — nebo každý jinak, bez systému.",
      "Na konferenci jste slyšeli příběhy firem, kde AI změnila vše. U vás se zatím nic nezměnilo.",
      "Víte, že byste měli něco dělat. Ale nikdo vám neřekne přesně co, kdy a jak — bez prodeje něčeho navíc.",
      "Nechcete další nástroj — chcete přehled, jasnou strategii a znalosti, které v týmu skutečně zůstanou.",
    ],
  },
];

const mentoringFormats = [
  {
    title: "Individuální mentoring",
    description: "1:1 setkání přizpůsobená přesně vašim potřebám. Maximální pozornost a tempo nastavené podle vás.",
    icon: User,
    features: [
      "Plně personalizovaný obsah",
      "Flexibilní tempo učení",
      "Přímá zpětná vazba",
      "Řešení vašich konkrétních projektů",
    ],
    dark: true,
  },
  {
    title: "Firemní & týmový mentoring",
    description: "Pravidelná spolupráce s týmem nebo skupinou. Ideální pro firmy, které chtějí systematicky zvyšovat AI gramotnost svých lidí — ne jednorázově, ale průběžně.",
    icon: UsersRound,
    features: [
      "Sdílené učení a vzájemná inspirace",
      "Agenda přizpůsobená vašemu prostředí",
      "Výhodnější cena na osobu",
      "Dlouhodobý rozvoj celého týmu",
    ],
    dark: false,
  },
];

const mentoringTopics = [
  {
    title: "AI pro každodenní práci",
    description: "Naučte se efektivně využívat ChatGPT, Claude, Gemini a další AI nástroje. Od promptingu po pokročilé techniky.",
    icon: Sparkles,
    forWhom: "Každý, kdo chce pracovat efektivněji",
  },
  {
    title: "Vibe Coding od základů",
    description: "Tvorba aplikací a automatizací pomocí AI bez nutnosti umět programovat. Krok za krokem od jednoduchých projektů po složitější řešení.",
    icon: Code2,
    forWhom: "Neprogramátoři, podnikatelé, kreativci",
  },
  {
    title: "AI v profesionálním vývoji",
    description: "Integrace AI do vývojářského workflow. Cursor, Claude Code, best practices a jak maximalizovat produktivitu.",
    icon: Cpu,
    forWhom: "Vývojáři, tech leads, CTO",
  },
  {
    title: "Budování s AI",
    description: "Realizace vašeho konkrétního projektu s AI podporou. Ať už je to aplikace, web, automatizace nebo něco úplně jiného.",
    icon: Rocket,
    forWhom: "Kdokoliv s nápadem na projekt",
  },
];

const whyMentoring = [
  {
    icon: Compass,
    title: "Jasný směr",
    description: "Nebudete tápat, co se učit a kde začít. Dostanete strukturovanou cestu přizpůsobenou vašim cílům.",
  },
  {
    icon: Clock,
    title: "Úspora času",
    description: "Vyhnete se slepým uličkám a zbytečnému zkoušení. Naučím vás to, co opravdu funguje.",
  },
  {
    icon: Zap,
    title: "Rychlejší pokrok",
    description: "S pravidelnou zpětnou vazbou a vedením postupujete mnohem rychleji než sami.",
  },
  {
    icon: Brain,
    title: "Praktické zkušenosti",
    description: "Učíte se na vašich reálných projektech a situacích, ne na teoretických příkladech.",
  },
];

const forWhom = [
  {
    title: "Podnikatelé a manažeři",
    description: "Chcete využít AI ve svém podnikání, ale nevíte kde začít? Pomohu vám identifikovat příležitosti a naučit se potřebné nástroje.",
    icon: Lightbulb,
  },
  {
    title: "Začínající vývojáři",
    description: "Učíte se programovat a chcete maximálně využít AI? Nastavím vám efektivní workflow a naučím best practices.",
    icon: Code2,
  },
  {
    title: "Kreativci a markeťáci",
    description: "Potřebujete vytvářet weby, automatizace nebo digitální produkty bez programování? Vibe coding je přesně pro vás.",
    icon: Sparkles,
  },
  {
    title: "Zkušení vývojáři",
    description: "Chcete držet krok s AI revolucí ve vývoji? Pomohu vám integrovat AI nástroje do profesionálního workflow.",
    icon: Cpu,
  },
];

const mentoringProcess = [
  {
    icon: MessageCircle,
    title: "Úvodní rozhovor",
    description: "Zdarma probereme vaše cíle a očekávání",
  },
  {
    icon: Target,
    title: "Plán mentoringu",
    description: "Sestavíme individuální plán a harmonogram",
  },
  {
    icon: Calendar,
    title: "Pravidelná setkání",
    description: "Online nebo osobní setkání dle domluvy",
  },
  {
    icon: TrendingUp,
    title: "Průběžný pokrok",
    description: "Sledujeme váš růst a upravujeme plán",
  },
];

const howItWorksCards = [
  {
    icon: Calendar,
    title: "Pravidelné sessions",
    desc: "Obvykle 2× měsíčně, online nebo osobně. Každá session je zaměřená na to, co právě řešíte.",
  },
  {
    icon: MessageSquare,
    title: "Async podpora",
    desc: "Mezi sessions mi můžete napsat. Krátká otázka, quick review, nebo jen druhý názor.",
  },
  {
    icon: Target,
    title: "Přizpůsobeno vám",
    desc: "Žádná předpřipravená osnova. Témata si volíme podle aktuálních potřeb a výzev.",
  },
];

export default function MentoringContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  const testimonials = getTestimonials("mentoring");

  return (
    <>
      <Header />

      {/* Section 1: Hero */}
      <section className="bg-secondary text-white pt-32 pb-36 md:pb-44 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
              >
                Mentoring
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              >
                Svět AI se mění každý den.{" "}
                <span className="text-primary">Ztratit se je snadné.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/70 text-lg mb-8 leading-relaxed"
              >
                Pomůžu vám se zorientovat, vybrat co dává smysl a začít AI skutečně využívat —
                ať jste sami nebo s celým týmem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors group"
                >
                  Chci si domluvit úvodní call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VideoPlaceholder title="Jak mentoring funguje v praxi" duration="45–60 sec" />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ marginBottom: "-1px" }}>
            <path d="M0 80H1440V50C1380 50 1320 50 1200 45C1080 40 960 30 840 25C720 20 600 20 480 30C360 40 240 60 120 70C60 75 0 80 0 80Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Section 2: Pain points */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Poznáváte se?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            >
              Takhle to vypadá, když v AI světě{" "}
              <span className="text-primary">tápete.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((group, gi) => (
              <motion.div
                key={group.audience}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-secondary text-lg mb-6 pb-4 border-b border-gray-100">
                  {group.audience}
                </h3>
                <ul className="space-y-5">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle size={18} className="text-primary/40 flex-shrink-0 mt-1" />
                      <p className="text-secondary/80 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-muted mt-10 text-lg max-w-2xl mx-auto"
          >
            Mentoring není kurz ani workshop. Je to průvodce na míru — pro vás nebo váš tým.
          </motion.p>
        </div>
      </section>

      {/* Section 3: Formáty */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 0H1440V30C1200 55 960 65 720 55C480 45 240 15 0 30Z" fill="#F8FAFC" />
          </svg>
        </div>

        <div className="container-narrow relative z-10 pt-8">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Formáty
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Pro jednotlivce i celý tým<span className="text-primary">.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentoringFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                >
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">{format.title}</h3>
                  <p className="text-white/70 mb-6 text-sm leading-relaxed">{format.description}</p>
                  <ul className="space-y-2">
                    {format.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-white/80 text-sm">
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ marginBottom: "-1px" }}>
            <path d="M0 80H1440V40C1200 55 960 65 720 55C480 45 240 20 0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Section 4: Témata */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Témata mentoringu
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            >
              Na čem můžeme pracovat<span className="text-primary">.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentoringTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={22} />
                  </div>
                  <h3 className="font-bold text-secondary text-lg mb-2">{topic.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">{topic.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Users size={12} className="text-primary" />
                    {topic.forWhom}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Jak to funguje */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
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
              Žádná fixní osnova. Agenda se řídí vašimi potřebami<span className="text-primary">.</span>
            </motion.h2>
          </div>

          {/* 4-krokový proces */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {mentoringProcess.map((step, index) => {
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
                  {index < mentoringProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                  )}
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-xs text-primary font-bold mb-2">Krok {index + 1}</div>
                  <h3 className="font-bold text-secondary mb-2">{step.title}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* 3 karty — jak vypadají sessions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {howItWorksCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-secondary text-lg mb-2">{card.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Skrytý benefit + srovnání s workshopem */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Calendar className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">Skrytý benefit mentoringu</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Pravidelná setkání vás drží v rytmu. Když víte, že se za týden potkáme, máte přirozenou motivaci pokročit. Není to jen o znalostech — je to o tom mít někoho, komu na vašem pokroku záleží.
              </p>
              <div className="space-y-2">
                {[
                  "Přirozená motivace věnovat se učení pravidelně",
                  "Někdo sleduje váš pokrok a fandí vám",
                  "Závazek, který vás posouvá kupředu",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-secondary/80">
                    <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-lg font-bold text-secondary mb-5">Čím se mentoring liší od workshopu?</h3>
              <div className="space-y-4">
                {[
                  { title: "Dlouhodobá spolupráce", desc: "Workshop je jednorázový, mentoring je cesta k cíli" },
                  { title: "Personalizovaný obsah", desc: "Vše přizpůsobené vašim konkrétním cílům a projektům" },
                  { title: "Průběžná podpora", desc: "Nejste na to sami — máte podporu mezi setkáními" },
                  { title: "Měřitelný pokrok", desc: "Vidíte svůj růst a můžeme plán průběžně upravovat" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <div>
                      <p className="font-semibold text-secondary text-sm">{item.title}</p>
                      <p className="text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/sluzby/webinare-a-workshopy"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold mt-5 hover:gap-3 transition-all"
              >
                Nebo raději jednorázový workshop?
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Pricing */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Cena
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            >
              Cena a formát na míru<span className="text-primary">.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-lg mx-auto bg-section-alt rounded-3xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <HeartHandshake className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Individuálně po úvodním callu
            </h3>
            <p className="text-muted leading-relaxed mb-7">
              Mentoring je personální služba. Cena závisí na frekvenci sessions, délce spolupráce
              a vaší situaci. Vše domluvíme na nezávazném úvodním callu.
            </p>
            <button
              onClick={scrollToForm}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-colors group"
            >
              Chci si domluvit úvodní call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Reference */}
      {testimonials.length > 0 && (
        <section className="section-padding bg-section-alt">
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
                Co říkají mentorees<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group break-inside-avoid mb-6"
                >
                  <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                    <div className="absolute -top-4 -left-2 text-8xl font-serif text-primary/10 select-none leading-none">&ldquo;</div>
                    <div className="relative w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Quote className="text-white" size={20} />
                    </div>
                    <p className="relative text-secondary/80 leading-relaxed mb-8">{testimonial.content}</p>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        {testimonial.imageUrl ? (
                          <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold">
                            {testimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2).replace(/[\[\]]/g, "")}
                          </div>
                        )}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        {testimonial.linkedinUrl ? (
                          <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary hover:text-primary transition-colors">
                            {testimonial.name.replace(/[\[\]]/g, "")}
                          </a>
                        ) : (
                          <p className="font-semibold text-secondary">{testimonial.name.replace(/[\[\]]/g, "")}</p>
                        )}
                        <p className="text-muted text-sm">
                          {testimonial.role}
                          {testimonial.company && (
                            testimonial.companyUrl
                              ? <a href={testimonial.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors"> · {testimonial.company}</a>
                              : <span className="text-primary"> · {testimonial.company}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 8: CTA + Form */}
      <section id="form" className="pt-28 md:pt-40 pb-28 md:pb-40 px-4 md:px-8 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 0H1440V30C1380 30 1320 30 1200 35C1080 40 960 50 840 55C720 60 600 60 480 50C360 40 240 20 120 10C60 5 0 0 0 0Z" fill="#F8FAFC" />
          </svg>
        </div>

        <div className="container-narrow relative z-10">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Napište mi a domluvíme si nezávazný úvodní call<span className="text-primary">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 text-lg max-w-xl mx-auto"
            >
              Úvodní call je zdarma a nezávazný. Probereme vaši situaci a zjistíme, jestli má
              mentoring pro vás smysl.
            </motion.p>
          </div>

          <LeadForm
            service="mentoring"
            fields={{
              showCompany: false,
              messagePlaceholder: "Co řešíte? Kde se chcete zlepšit?",
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
