"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  ArrowRight,
  CheckCircle2,
  Target,
  Zap,
  Clock,
  MessageCircle,
  Rocket,
  Brain,
  TrendingUp,
  Bot,
  Workflow,
  Lightbulb,
  Code2,
  Building2,
  Users,
  Search,
  Wrench,
  Sparkles,
  Handshake,
  User,
  Shield,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import OtherServices from "@/components/services/OtherServices";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";

const implementationTypes = [
  {
    title: "AI Chatboti & Asistenti",
    description:
      "Vývoj inteligentních chatbotů pro zákaznickou podporu, interní helpdesk nebo prodejní asistenci. Od jednoduchých FAQ botů po pokročilé konverzační agenty napojené na vaše systémy.",
    icon: Bot,
    examples: ["Zákaznická podpora 24/7", "Interní helpdesk", "Prodejní asistent", "Onboarding zaměstnanců"],
  },
  {
    title: "Automatizace procesů",
    description:
      "Návrh a vývoj AI automatizací pro opakující se procesy. Zpracování dokumentů, e-mailů, dat a dalších rutinních úkolů, které zabírají čas vašemu týmu.",
    icon: Workflow,
    examples: ["Zpracování faktur", "Třídění e-mailů", "Extrakce dat z dokumentů", "Automatické reporty"],
  },
  {
    title: "AI funkce do aplikací",
    description:
      "Integrace AI funkcí do vašich existujících aplikací a produktů. Doporučovací systémy, personalizace, prediktivní funkce, inteligentní vyhledávání a další.",
    icon: Code2,
    examples: ["Doporučovací systémy", "Personalizace obsahu", "Prediktivní analýzy", "Smart search"],
  },
  {
    title: "Custom AI řešení na míru",
    description:
      "Kompletní vývoj AI řešení od analýzy přes prototyp až po produkční nasazení. Specifické use-casy, které vyžadují individuální přístup a architekturu.",
    icon: Lightbulb,
    examples: ["Specifické use-casy", "Enterprise řešení", "Komplexní workflow", "Proprietární modely"],
  },
];

const implementationProcess = [
  {
    icon: Search,
    title: "Analýza & Discovery",
    description: "Zmapujeme vaše procesy a identifikujeme příležitosti pro AI",
  },
  {
    icon: Target,
    title: "Návrh řešení",
    description: "Navrhneme architekturu a vybereme vhodné technologie",
  },
  {
    icon: Wrench,
    title: "Vývoj & Implementace",
    description: "Realizace řešení s průběžným testováním a iteracemi",
  },
  {
    icon: Rocket,
    title: "Nasazení & Podpora",
    description: "Spuštění do produkce, zaškolení týmu a následná podpora",
  },
];

const whyAI = [
  {
    icon: Clock,
    title: "Úspora času",
    description:
      "AI převezme rutinní úkoly a váš tým se může soustředit na to, co přináší hodnotu.",
  },
  {
    icon: TrendingUp,
    title: "Škálovatelnost",
    description:
      "AI řešení zvládnou rostoucí objem práce bez potřeby lineárně navyšovat tým.",
  },
  {
    icon: Zap,
    title: "Rychlost",
    description:
      "Okamžité odpovědi zákazníkům, rychlejší zpracování dat, kratší time-to-market.",
  },
  {
    icon: BarChart3,
    title: "Data-driven rozhodování",
    description:
      "AI analyzuje data a poskytuje insights pro lepší business rozhodnutí.",
  },
];

const realizationOptions = [
  {
    title: "Menší projekty - realizuji sám",
    description:
      "Jednodušší AI implementace, chatboty, automatizace a integrace realizuji osobně od začátku do konce. Přímá komunikace, rychlá realizace.",
    icon: User,
    features: [
      "Přímá komunikace se mnou",
      "Rychlá realizace",
      "Flexibilní přístup",
      "Osobní zodpovědnost za výsledek",
    ],
  },
  {
    title: "Větší projekty - s partnery",
    description:
      "Pro komplexnější AI řešení a enterprise projekty vás propojím s ověřenými partnery. Já zajistím AI expertízu a technické konzultace po celou dobu projektu.",
    icon: Handshake,
    features: [
      "Ověření partneři s track recordem",
      "Kapacity pro větší projekty",
      "Já jako AI konzultant po celou dobu",
      "Profesionální projektové řízení",
    ],
  },
];

const forWhom = [
  {
    title: "Firmy s opakujícími se procesy",
    description:
      "Máte procesy, které zabírají hodiny času a daly by se automatizovat? AI může převzít rutinu a uvolnit kapacity pro důležitější práci.",
    icon: Workflow,
  },
  {
    title: "Startupy a produktové týmy",
    description:
      "Chcete do svého produktu přidat AI funkce a získat konkurenční výhodu? Pomohu s návrhem i implementací.",
    icon: Rocket,
  },
  {
    title: "E-commerce a služby",
    description:
      "Potřebujete zlepšit zákaznickou podporu nebo personalizovat nabídku? AI chatboti a doporučovací systémy jsou řešením.",
    icon: Building2,
  },
  {
    title: "Týmy bez AI expertízy",
    description:
      "Nemáte v týmu AI specialisty? Dodám kompletní řešení včetně dokumentace a zaškolení vašeho týmu.",
    icon: Users,
  },
];

const whyMe = [
  {
    icon: Code2,
    title: "Technické zázemí",
    description:
      "Mnohaleté zkušenosti jako vývojář a software analytik. Rozumím jak AI, tak softwarovému vývoji a architektuře.",
  },
  {
    icon: Brain,
    title: "Praktický přístup",
    description:
      "Žádné buzzwordy a přehnané sliby. Implementuji řešení, která reálně fungují a přináší hodnotu.",
  },
  {
    icon: Sparkles,
    title: "Aktuální know-how",
    description:
      "Neustále sleduji vývoj v oblasti AI a používám nejnovější nástroje a best practices.",
  },
];

export default function AIImplementacePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />

      <ServicePageHeader
        title="AI Implementace"
        subtitle="Vývoj AI řešení na míru"
        description="Navrhuji a vyvíjím AI řešení pro vaše procesy a produkty. Chatboti, automatizace, integrace do aplikací - vše na míru vašim potřebám. Menší projekty realizuji sám, pro větší vás propojím s ověřenými partnery."
        icon={Cpu}
      />

      <main>
        {/* Why AI Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Proč AI
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                AI jako konkurenční výhoda<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted text-lg max-w-2xl mx-auto"
              >
                Správně implementovaná AI řešení šetří čas, snižují náklady a
                otevírají nové možnosti. Nejde o nahrazení lidí, ale o jejich
                posílení.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyAI.map((item, index) => {
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

        {/* Implementation Types Section */}
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
                Co vyvíjím
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Typy AI řešení<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg max-w-2xl mx-auto"
              >
                Od jednoduchých automatizací po komplexní AI systémy. Vyberu
                řešení, které dává smysl pro váš business.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {implementationTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.title}
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
                      {type.title}
                    </h3>
                    <p className="text-white/70 mb-6">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example) => (
                        <span
                          key={example}
                          className="text-xs bg-white/10 text-white/80 px-3 py-1.5 rounded-full"
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
          <WaveSeparator fillColor="white" variant={2} />
        </section>

        {/* Realization Options Section */}
        <section className="section-padding bg-white">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Způsob realizace
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Jak projekty realizuji<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted text-lg max-w-2xl mx-auto"
              >
                Podle rozsahu projektu volím optimální způsob realizace. Vždy
                máte jistotu, že projekt bude v dobrých rukou.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {realizationOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="bg-section-alt rounded-3xl p-8"
                  >
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="font-bold text-secondary text-2xl mb-3">
                      {option.title}
                    </h3>
                    <p className="text-muted mb-6">{option.description}</p>
                    <ul className="space-y-3">
                      {option.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-secondary/80"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mt-8"
            >
              <Link
                href="/sluzby/partnerske-projekty"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Více o spolupráci s partnery
                <ArrowRight size={18} />
              </Link>
            </motion.div>
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
                Proces vývoje<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted text-lg max-w-2xl mx-auto"
              >
                Strukturovaný přístup od analýzy po nasazení. Každý krok je
                transparentní a máte přehled o postupu.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {implementationProcess.map((step, index) => {
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
                    {index < implementationProcess.length - 1 && (
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
                Pro koho je služba
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Komu mohu pomoci<span className="text-primary">.</span>
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

        {/* Why Me Section */}
        <section className="section-padding bg-section-alt relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Why Me Points */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Proč spolupracovat se mnou
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                  Co ode mě dostanete<span className="text-primary">.</span>
                </h2>
                <div className="space-y-6">
                  {whyMe.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-secondary mb-1">
                            {item.title}
                          </h3>
                          <p className="text-muted text-sm">{item.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right - Approach */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <MessageCircle className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Můj přístup
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  Každý projekt začíná důkladnou analýzou. Neslíbím vám, že AI
                  vyřeší všechny problémy - ale ukážu vám, kde přinese reálnou
                  hodnotu. Pracuji transparentně, s pravidelnými updaty a bez
                  skrytých nákladů.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-secondary/80">
                    <CheckCircle2 size={16} className="text-primary" />
                    Bezplatná úvodní konzultace
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary/80">
                    <CheckCircle2 size={16} className="text-primary" />
                    Transparentní cenová nabídka předem
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary/80">
                    <CheckCircle2 size={16} className="text-primary" />
                    Pravidelné reporty o postupu
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary/80">
                    <CheckCircle2 size={16} className="text-primary" />
                    Dokumentace a zaškolení týmu
                  </div>
                </div>
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
                Pojďme prozkoumat možnosti<span className="text-primary">.</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Úvodní konzultace je zdarma. Probereme váš projekt, identifikujeme
                příležitosti a navrhnu optimální způsob realizace.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors"
                >
                  Domluvit konzultaci zdarma
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/sluzby/partnerske-projekty"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors border border-white/20"
                >
                  Obecné SW projekty
                </Link>
              </div>
            </motion.div>
          </div>
          <WaveSeparator fillColor="#F8FAFC" variant={4} />
        </section>

        <OtherServices currentSlug="ai-implementace" />
      </main>

      <Footer />
    </>
  );
}
