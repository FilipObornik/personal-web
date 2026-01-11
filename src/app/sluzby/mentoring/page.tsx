"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  Target,
  Zap,
  Clock,
  Calendar,
  MessageCircle,
  Rocket,
  Brain,
  TrendingUp,
  Sparkles,
  User,
  UsersRound,
  Compass,
  Lightbulb,
  Code2,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import OtherServices from "@/components/services/OtherServices";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";

const mentoringFormats = [
  {
    title: "Individuální mentoring",
    description:
      "1:1 setkání přizpůsobená přesně vašim potřebám. Maximální pozornost a tempo nastavené podle vás.",
    icon: User,
    features: [
      "Plně personalizovaný obsah",
      "Flexibilní tempo učení",
      "Přímá zpětná vazba",
      "Řešení vašich konkrétních projektů",
    ],
  },
  {
    title: "Skupinový mentoring",
    description:
      "Mentoringové skupiny nebo firemního týmu. Sdílené učení, vzájemná inspirace a nižší cena na osobu.",
    icon: UsersRound,
    features: [
      "Učení od ostatních účastníků",
      "Diskuze s podobně smýšlejícími",
      "Výhodnější cena",
      "Ideálně společné projekty",
    ],
  },
];

const mentoringTopics = [
  {
    title: "AI pro každodenní práci",
    description:
      "Naučte se efektivně využívat ChatGPT, Claude, Gemini a další AI nástroje. Od promptingu po pokročilé techniky.",
    icon: Sparkles,
    forWhom: "Každý, kdo chce pracovat efektivněji",
  },
  {
    title: "Vibe Coding od základů",
    description:
      "Tvorba aplikací a automatizací pomocí AI bez nutnosti umět programovat. Krok za krokem od jednoduchých projektů po složitější řešení.",
    icon: Code2,
    forWhom: "Neprogramátoři, podnikatelé, kreativci",
  },
  {
    title: "AI v profesionálním vývoji",
    description:
      "Integrace AI do vývojářského workflow. Cursor, Claude Code, best practices a jak maximalizovat produktivitu.",
    icon: Cpu,
    forWhom: "Vývojáři, tech leads, CTO",
  },
  {
    title: "Budování s AI",
    description:
      "Realizace vašeho konkrétního projektu s AI podporou. Ať už je to aplikace, web, automatizace nebo něco úplně jiného.",
    icon: Rocket,
    forWhom: "Kdokoliv s nápadem na projekt",
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

const whyMentoring = [
  {
    icon: Compass,
    title: "Jasný směr",
    description:
      "Nebudete tápat, co se učit a kde začít. Dostanete strukturovanou cestu přizpůsobenou vašim cílům.",
  },
  {
    icon: Clock,
    title: "Úspora času",
    description:
      "Vyhnete se slepým uličkám a zbytečnému zkoušení. Naučím vás to, co opravdu funguje.",
  },
  {
    icon: Zap,
    title: "Rychlejší pokrok",
    description:
      "S pravidelnou zpětnou vazbou a vedením postupujete mnohem rychleji než sami.",
  },
  {
    icon: Brain,
    title: "Praktické zkušenosti",
    description:
      "Učíte se Vašich reálných projektech a situacích, ne na teoretických příkladech.",
  },
];

const forWhom = [
  {
    title: "Podnikatelé a manažeři",
    description:
      "Chcete využít AI ve svém podnikání, ale nevíte kde začít? Pomohu vám identifikovat příležitosti a naučit se potřebné nástroje.",
    icon: Lightbulb,
  },
  {
    title: "Začínající vývojáři",
    description:
      "Učíte se programovat a chcete maximálně využít AI? Nastavím vám efektivní workflow a naučím best practices.",
    icon: Code2,
  },
  {
    title: "Kreativci a markeťáci",
    description:
      "Potřebujete vytvářet weby, automatizace nebo digitální produkty bez programování? Vibe coding je přesně pro vás.",
    icon: Sparkles,
  },
  {
    title: "Zkušení vývojáři",
    description:
      "Chcete držet krok s AI revolucí ve vývoji? Pomohu vám integrovat AI nástroje do profesionálního workflow.",
    icon: Cpu,
  },
];

export default function MentoringPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />

      <ServicePageHeader
        title="Mentoring"
        subtitle="Individuální rozvoj"
        description="Dlouhodobá spolupráce přizpůsobená vašim cílům a tempu. Pravidelná setkání, průběžná podpora a jasný plán, jak se dostat tam, kam chcete."
        icon={Users}
      />

      <main>
        {/* Why Mentoring Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Proč mentoring
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Nejrychlejší cesta k cíli<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted text-lg max-w-2xl mx-auto"
              >
                Naučit se vše sám je možné, ale s mentorem je to rychlejší, efektivnější
                a méně frustrující. Dostanete jasný směr a podporu na celé cestě.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyMentoring.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-center"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="text-primary" size={26} />
                    </div>
                    <h3 className="font-bold text-secondary text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formats Section */}
        <section className="section-padding pb-32 md:pb-40 bg-secondary relative overflow-hidden">
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
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Formáty mentoringu
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Vyberte si, co vám vyhovuje<span className="text-primary">.</span>
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
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="font-bold text-white text-2xl mb-3">
                      {format.title}
                    </h3>
                    <p className="text-white/70 mb-6">{format.description}</p>
                    <ul className="space-y-3">
                      {format.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-white/80"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-primary flex-shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <WaveSeparator fillColor="white" variant={2} />
        </section>

        {/* Topics Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 md:mb-16">
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
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted text-lg max-w-2xl mx-auto"
              >
                Mentoring přizpůsobím vašim cílům. Můžeme se zaměřit na jedno téma
                nebo kombinovat podle vašich potřeb.
              </motion.p>
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
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon
                        className="text-primary group-hover:text-white transition-colors duration-300"
                        size={26}
                      />
                    </div>
                    <h3 className="font-bold text-secondary text-xl mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {topic.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={14} className="text-primary" />
                      <span className="text-muted">{topic.forWhom}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-section-alt">
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
                Cesta k úspěchu<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

        {/* For Whom Section */}
        <section className="section-padding bg-white">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Pro koho je mentoring
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Najděte se v tom<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {forWhom.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-section-alt rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonial & Difference Section */}
        <section className="section-padding bg-section-alt relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <Calendar className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Skrytý benefit mentoringu
                </h3>
                <p className="text-muted leading-relaxed mb-4">
                  Pravidelná setkání vás drží v rytmu a odpovědnosti. Když víte,
                  že se za týden potkáme, máte motivaci pokročit. Není to jen o předávání
                  znalostí - je to o tom mít někoho, komu na vašem pokroku záleží.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-secondary/80">
                    <CheckCircle2 size={16} className="text-primary" />
                    Přirozená motivace se pravidelně věnovat učení
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary/80">
                    <CheckCircle2 size={16} className="text-primary" />
                    Někdo sleduje váš pokrok a fandí vám
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary/80">
                    <CheckCircle2 size={16} className="text-primary" />
                    Závazek, který vás posouvá kupředu
                  </div>
                </div>
              </motion.div>

              {/* Difference */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  Čím se mentoring liší od workshopu?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-secondary">Dlouhodobá spolupráce</p>
                      <p className="text-muted text-sm">
                        Workshop je jednorázový, mentoring je cesta k cíli
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-secondary">Personalizovaný obsah</p>
                      <p className="text-muted text-sm">
                        Vše přizpůsobené vašim konkrétním cílům a projektům
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-secondary">Průběžná podpora</p>
                      <p className="text-muted text-sm">
                        Nejste na to sami - máte podporu mezi setkáními
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-secondary">Měřitelný pokrok</p>
                      <p className="text-muted text-sm">
                        Vidíte svůj růst a můžeme plán průběžně upravovat
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/sluzby/webinare-a-workshopy"
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:gap-3 transition-all"
                >
                  Nebo raději jednorázový workshop?
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-24 md:pt-36 pb-32 md:pb-40 bg-secondary relative overflow-hidden">
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
          <div className="container-narrow mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Začněme společnou cestu<span className="text-primary">.</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Úvodní rozhovor je zdarma a nezávazný. Probereme vaše cíle a já vám
                řeknu, jestli a jak vám mohu pomoci. Žádné závazky, žádný tlak.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors"
                >
                  Domluvit úvodní rozhovor
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/sluzby/konzultace"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors border border-white/20"
                >
                  Raději jednorázová konzultace
                </Link>
              </div>
            </motion.div>
          </div>
          <WaveSeparator fillColor="#F8FAFC" variant={4} />
        </section>

        <OtherServices currentSlug="mentoring" />
      </main>

      <Footer />
    </>
  );
}
