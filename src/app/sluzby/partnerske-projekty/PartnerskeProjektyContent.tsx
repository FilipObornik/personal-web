"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Workflow,
  MessageCircleQuestion,
  FileSearch,
  Rocket,
  Settings,
  Brain,
  Building2,
  Globe,
  Smartphone,
  Database,
  ShoppingCart,
  LineChart,
  Users,
  Target,
  Lightbulb,
  Wrench,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import OtherServices from "@/components/services/OtherServices";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";

const projectTypes = [
  { title: "Webové Prezentace", description: "Moderní webové prezentace a landing page na míru - od desingu přes implementaci až po následný provoz. Díky využití AI bude Váš web hotový rychle a mnohem levněji, než dříve.", icon: Globe, examples: ["Web pro kavárnu", "Landing page nového produktu", "Osobní vizitka"] },
  { title: "Mobilní aplikace", description: "Nativní i cross-platform mobilní aplikace pro iOS a Android. Od prvotního návrhu po publikaci v obchodech.", icon: Smartphone, examples: ["iOS aplikace", "Android aplikace", "Cross-platform", "PWA"] },
  { title: "AI integrace", description: "Nasazení umělé inteligence do vašich produktů a procesů. Chatboti, automatizace, analýza dat a další AI řešení.", icon: Brain, examples: ["Chatboti", "Automatizace", "Analýza dat", "ML modely"] },
  { title: "Webové aplikace", description: "Moderní webové aplikace na míru - od jednoduchých webových aplikací až po komplexní SaaS platformy. React, Next.js, Node.js a další moderní technologie.", icon: Globe, examples: ["E-commerce", "Interní systémy", "SaaS platformy", "Portály"] },
  { title: "Firemní systémy", description: "Zakázkový vývoj interních nástrojů, CRM systémů, ERP řešení a dalších business aplikací přesně podle vašich potřeb.", icon: Building2, examples: ["CRM", "ERP", "Interní nástroje", "Reporting"] },
];

const collaborationProcess = [
  { icon: MessageCircleQuestion, title: "Úvodní konzultace", description: "Probereme váš projekt a potřeby" },
  { icon: FileSearch, title: "Propojení s partnery", description: "Vyslechnutí vašich potřeb" },
  { icon: Users, title: "Technická analýza", description: "Zpracování analýzi a návrh řešení" },
  { icon: Rocket, title: "Realizace projektu", description: "Partneři realizují projekt, mě máte vždy po ruce" },
];

const whyPartnership = [
  { icon: Shield, title: "Ověření partneři", description: "Spolupracuji pouze s profesionály, se kterými mám osobní zkušenost a jejichž práci znám" },
  { icon: Brain, title: "Techincké konzultace", description: "Partneři si projekt vezmou na starosti od začátku do konce, já Vám budu k dispozici po celou dobu ke konzultacím." },
  { icon: Zap, title: "AI-first přístup", description: "Využíváme AI nástroje pro rychlejší a efektivnější vývoj" },
];

const projectExamples = [
  { icon: LineChart, text: "Prezentační web, osobní portfolio nebo landing page Vašeho nového produktu" },
  { icon: ShoppingCart, text: "E-shop s napojením na skladový systém" },
  { icon: Database, text: "Interní systém pro správu klientů a automatizaci procesů" },
  { icon: Globe, text: "Moderní webová prezentace s redakčním systémem" },
  { icon: Smartphone, text: "Mobilní aplikace pro zákazníky nebo zaměstnance" },
  { icon: Workflow, text: "Automatizace firemních procesů pomocí AI agentů" },
];

const serviceOptions = [
  { title: "Technické konzultace", description: "Potřebujete pouze technickou expertízu? Pomohu s architekturou, výběrem technologií nebo code review vašeho existujícího projektu.", icon: Lightbulb, features: ["Architektonický návrh", "Výběr technologií", "Code review", "Technická specifikace"], link: "/sluzby/konzultace", linkText: "Více o konzultacích" },
  { title: "Kompletní realizace", description: "Potřebujete celé řešení od A do Z? Propojím Vás s partnery, kteří váš projekt kompletně zrealizují. Máte mě k dispozici ke konzultacím.", icon: Wrench, features: ["Návrh a specifikace", "Vývoj a implementace", "Testování a nasazení", "Podpora a údržba"], link: "/#kontakt", linkText: "Nezávazná poptávka" },
  { title: "AI implementace", description: "Chcete do projektu zapojit umělou inteligenci? Navrhnu a implementuji AI řešení, která přinesou reálnou hodnotu.", icon: Cpu, features: ["AI strategie", "Výběr nástrojů", "Integrace do systémů", "Školení týmu"], link: "/sluzby/ai-implementace", linkText: "Více o AI implementaci" },
];

export default function PartnerskeProjektyContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />

      <ServicePageHeader
        title="Software projekty"
        subtitle="Partnerská síť"
        description="Menší projekty realizujeme společně a pro větší projekty vás propojím s mými ověřenými partnery, kteří navrhnou profesionální řešení a projekt realizují. Já Vám ale budu neustále k dispozici."
        icon={Handshake}
      />

      <main>
        {/* Project Types Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Typy projektů</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-secondary mb-4">Co dokáži/me realizovat<span className="text-primary">.</span></motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted text-lg max-w-2xl mx-auto">Díky síti zkušených partnerů pokryjeme široké spektrum technologií a typů projektů. Vždy najdeme optimální řešení pro vaše potřeby.</motion.p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {projectTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div key={type.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-primary/20 hover:shadow-xl transition-all duration-300 w-full md:w-[calc(50%-12px)]">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300"><Icon className="text-primary group-hover:text-white transition-colors duration-300" size={26} /></div>
                    <h3 className="font-bold text-secondary text-xl mb-3">{type.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{type.description}</p>
                    <div className="flex flex-wrap gap-2">{type.examples.map((example) => (<span key={example} className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{example}</span>))}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Partnership Section */}
        <section className="section-padding pb-32 md:pb-40 bg-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none"><path d="M0 0H1440V30C1380 30 1320 30 1200 35C1080 40 960 50 840 55C720 60 600 60 480 50C360 40 240 20 120 10C60 5 0 0 0 0Z" fill="white" /></svg>
          </div>
          <div className="container-narrow mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Proč partnerský model</motion.span>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-white mb-6">Výhody spolupráce<span className="text-primary">.</span></motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/70 text-lg mb-8">Kombinuji své technické know-how s kapacitami zkušených partnerů. Vy získáte profesionální ověřený tým a mě k ruce ke konzultacím.</motion.p>
                <div className="space-y-4">
                  {whyPartnership.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0"><Icon className="text-primary" size={20} /></div>
                        <div><h3 className="font-semibold text-white">{item.title}</h3><p className="text-white/60 text-sm">{item.description}</p></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="text-center mb-6">
                  <Target className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">Ověřené zkušenosti</h3>
                  <p className="text-white/80 text-base leading-relaxed mb-4">Jako team leader ve společnosti Tymbe vedu vývojový tým a zodpovídám za doručení mobilní aplikace s tisíci uživateli. Vím, co obnáší vést projekt od návrhu po produkci.</p>
                  <Link href="/projekty/tymbe" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">Zobrazit projekt Tymbe<ArrowRight size={16} /></Link>
                </div>
                <div className="border-t border-white/10 pt-6 mt-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div><div className="text-2xl font-bold text-primary mb-1">8+ let</div><div className="text-white/60 text-sm">zkušeností v IT</div></div>
                    <div><div className="text-2xl font-bold text-primary mb-1">Team Lead</div><div className="text-white/60 text-sm">v Tymbe</div></div>
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
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Jak to funguje</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-secondary mb-4">Průběh spolupráce<span className="text-primary">.</span></motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {collaborationProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative text-center">
                    {index < collaborationProcess.length - 1 && (<div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />)}
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"><Icon className="text-white" size={28} /></div>
                    <div className="text-xs text-primary font-bold mb-2">Krok {index + 1}</div>
                    <h3 className="font-bold text-secondary mb-2">{step.title}</h3>
                    <p className="text-muted text-sm">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Options Section */}
        <section className="section-padding bg-section-alt">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Možnosti spolupráce</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-secondary mb-4">Vyberte si, co potřebujete<span className="text-primary">.</span></motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div key={option.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4"><Icon className="text-white" size={26} /></div>
                    <h3 className="font-bold text-secondary text-xl mb-3">{option.title}</h3>
                    <p className="text-muted text-sm mb-4">{option.description}</p>
                    <ul className="space-y-2 mt-auto">{option.features.map((feature) => (<li key={feature} className="flex items-center gap-2 text-sm text-secondary"><CheckCircle2 size={16} className="text-primary flex-shrink-0" />{feature}</li>))}</ul>
                    {option.link && (<Link href={option.link} className="mt-4 text-primary font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">{option.linkText}<ArrowRight size={14} /></Link>)}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Examples Section */}
        <section className="section-padding bg-white">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Příklady projektů</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-secondary mb-4">S čím vám dokážeme pomoci<span className="text-primary">.</span></motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectExamples.map((example, index) => {
                const Icon = example.icon;
                return (
                  <motion.div key={example.text} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="flex items-center gap-4 p-4 bg-section-alt rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="text-primary" size={20} /></div>
                    <p className="text-secondary font-medium">{example.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-24 md:pt-36 pb-32 md:pb-40 bg-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0"><svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none"><path d="M0 0H1440V30C1380 30 1320 30 1200 35C1080 40 960 50 840 55C720 60 600 60 480 50C360 40 240 20 120 10C60 5 0 0 0 0Z" fill="white" /></svg></div>
          <div className="container-narrow mx-auto text-center px-6 md:px-12 py-16 md:py-24">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Potřebujete realizovat software projekt<span className="text-primary">?</span></h2>
              <p className="text-white/70 text-lg mb-8">Popište mi svou představu a společně najdeme nejlepší cestu k realizaci. Nezávazná konzultace je zdarma.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#kontakt" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors">Popsat projekt<ArrowRight size={18} /></Link>
                <Link href="/sluzby/konzultace" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors border border-white/20">Zatím pouze konzultace</Link>
              </div>
            </motion.div>
          </div>
          <WaveSeparator fillColor="#F8FAFC" variant={4} />
        </section>

        <OtherServices currentSlug="partnerske-projekty" />
      </main>

      <Footer />
    </>
  );
}
