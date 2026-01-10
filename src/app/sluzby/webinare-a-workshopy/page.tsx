"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowRight,
  Quote,
  Play,
  ExternalLink,
  Users,
  ClipboardList,
  FileQuestion,
  Presentation,
  MessageCircleQuestion,
  FileText,
  Mail,
  ThumbsUp,
  RefreshCcw,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import OtherServices from "@/components/services/OtherServices";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  workshopTopics,
  workshopFormats,
  workshopExperience,
  workshopTools,
  workshopTestimonials,
  externalLinks,
} from "@/lib/data";

export default function SeminarePage() {
  // Scroll to top instantly on page load to prevent animations triggering during smooth scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />

      {/* Page Header */}
      <ServicePageHeader
        title="Semináře & Workshopy"
        subtitle="Služby na míru"
        description="Od základů AI pro každého až po pokročilé techniky pro profesionální vývoj pomocí AI. Vzdělávání přizpůsobené přesně vašim potřebám."
        icon={GraduationCap}
      />

      {/* Main Content */}
      <main>
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
                Témata workshopů
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Co Vás naučím<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted text-lg max-w-2xl mx-auto"
              >
                Vyberte si téma podle vašich potřeb a zkušeností. Každý workshop
                je šitý na míru, praktický, interaktivní a zaměřený na okamžité využití v praxi.
              </motion.p>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workshopTopics.map((topic, index) => {
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
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <Users size={14} className="text-primary" />
                      <span className="text-muted">{topic.forWhom}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {topic.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <WaveSeparator fillColor="#05121f" variant={1} />
        </section>

        {/* Experience Section */}
        <section className="section-padding pb-32 md:pb-40 bg-secondary relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Text */}
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
                >
                  Proč právě já
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                  Zkušenosti s výukou<span className="text-primary">.</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-white/70 text-lg mb-8"
                >
                  Vzdělávání je moje vášeň. Ať už na univerzitě, ve firmách nebo
                  online - vždy se snažím předat praktické znalosti srozumitelnou
                  formou.
                </motion.p>

                {/* Experience Items */}
                <div className="space-y-4">
                  {workshopExperience.map((item, index) => {
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
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors inline-flex items-center gap-1"
                              >
                                {item.title}
                                <ExternalLink size={14} className="opacity-60" />
                              </a>
                            ) : (
                              item.title
                            )}
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

              {/* Right - Stats/Highlights */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter value={2} delay={0.2} stiffness={100} damping={30} />
                    </div>
                    <div className="text-white/60 text-sm">
                      Semestry univerzitní výuky
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter value={10} suffix="+" delay={0.3} stiffness={100} damping={30} />
                    </div>
                    <div className="text-white/60 text-sm">
                      Firemních školení
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter value={70} suffix="+" delay={0.4} stiffness={100} damping={30} />
                    </div>
                    <div className="text-white/60 text-sm">
                      Živě proškolených lidí
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter value={180} suffix="+" delay={0.5} stiffness={100} damping={30} />
                    </div>
                    <div className="text-white/60 text-sm">
                      Studentů online kurzů
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <WaveSeparator fillColor="white" variant={2} />
        </section>

        {/* Formats Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Jak to probíhá
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Formáty workshopů<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workshopFormats.map((format, index) => {
                const Icon = format.icon;
                const isMentoring = format.title === "Individuální konzultace";

                const cardContent = (
                  <>
                    <div className={`w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 ${isMentoring ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className={`font-bold text-secondary text-xl mb-3 ${isMentoring ? 'group-hover:text-primary transition-colors' : ''}`}>
                      {format.title}
                    </h3>
                    <p className="text-muted">{format.description}</p>
                    {isMentoring && (
                      <div className="mt-4 text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Více o mentoringu
                        <ArrowRight size={14} />
                      </div>
                    )}
                  </>
                );

                return (
                  <motion.div
                    key={format.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {isMentoring ? (
                      <Link
                        href="/sluzby/mentoring"
                        className="group block relative bg-white rounded-2xl p-8 text-center border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 h-full"
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <div className="relative bg-white rounded-2xl p-8 text-center border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full">
                        {cardContent}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workshop Roadmap Section */}
        <section className="section-padding bg-section-alt">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Průběh spolupráce
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Jak probíhá workshop nebo školení<span className="text-primary">.</span>
              </motion.h2>
            </div>

            {/* Main Roadmap Steps - Zig Zag */}
            <div className="relative mb-10 max-w-3xl mx-auto">
              {/* Vertical Center Line - starts from first badge, ends at last */}
              <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-primary/40 rounded-full -translate-x-1/2 hidden md:block" />

              {/* Steps */}
              <div className="space-y-4 md:space-y-0">
                {[
                  { icon: ClipboardList, title: "Zjištění potřeb", desc: "Úvodní rozhovor o vašich cílech" },
                  { icon: FileQuestion, title: "Dotazník pro tým", desc: "Přizpůsobení obsahu na míru" },
                  { icon: Presentation, title: "Workshop nebo školení", desc: "Interaktivní obsah" },
                  { icon: MessageCircleQuestion, title: "Živé Q&A", desc: "Prostor pro Vaše dotazy" },
                  { icon: FileText, title: "Materiály", desc: "Obdržíte materiály a důležité odkazy" },
                  { icon: Mail, title: "Follow-up", desc: "Možnost zaslání dalších otázek" },
                ].map((step, index) => {
                  const StepIcon = step.icon;
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className={`relative flex items-center md:py-1.5 ${
                        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Content Card */}
                      <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                        <div className={`bg-white rounded-xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 inline-block ${
                          isLeft ? 'md:ml-auto' : 'md:mr-auto'
                        }`}>
                          <div className={`flex items-center gap-2.5 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <StepIcon className="text-primary" size={18} />
                            </div>
                            <div className={isLeft ? 'md:text-right' : ''}>
                              <h4 className="font-bold text-secondary text-sm leading-tight">
                                {step.title}
                              </h4>
                              <p className="text-muted text-xs leading-tight">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Number Badge */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full items-center justify-center text-white text-sm font-bold shadow-lg z-10">
                        {index + 1}
                      </div>

                      {/* Empty space for the other side */}
                      <div className="hidden md:block flex-1" />

                      {/* Mobile Layout */}
                      <div className="md:hidden flex items-start gap-3 w-full">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                            {index + 1}
                          </div>
                          {index < 5 && (
                            <div className="w-0.5 h-8 bg-primary/40 mt-1" />
                          )}
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 flex-1 mt-0">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <StepIcon className="text-primary" size={16} />
                            </div>
                            <div>
                              <h4 className="font-bold text-secondary text-sm leading-tight">
                                {step.title}
                              </h4>
                              <p className="text-muted text-xs leading-tight">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Outcomes Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-6">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  A co dál?
                </span>
              </div>

              {/* Branching Lines Container */}
              <div className="relative max-w-4xl mx-auto">
                {/* Vertical line from top */}
                <div className="hidden md:flex justify-center">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                </div>

                {/* Branching horizontal line with 3 drops */}
                <div className="hidden md:block relative h-12 mb-4">
                  {/* Horizontal line */}
                  <div className="absolute top-0 left-[16.67%] right-[16.67%] h-1 bg-primary rounded-full" />
                  {/* Left vertical drop */}
                  <div className="absolute top-0 left-[16.67%] w-1 h-full bg-primary rounded-full" />
                  {/* Center vertical drop */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-primary rounded-full" />
                  {/* Right vertical drop */}
                  <div className="absolute top-0 right-[16.67%] w-1 h-full bg-primary rounded-full" />
                  {/* Dots at the end */}
                  <div className="absolute bottom-0 left-[16.67%] -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
                  <div className="absolute bottom-0 right-[16.67%] translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
                </div>

                {/* Mobile: simple vertical line */}
                <div className="md:hidden flex justify-center mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                </div>

                {/* Three Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: ThumbsUp,
                      title: "Vše vyřešeno",
                      desc: "Workshop splnil vaše očekávání a máte vše potřebné"
                    },
                    {
                      icon: RefreshCcw,
                      title: "Další workshop",
                      desc: "Jdeme více do detailu nebo pokračujeme s dalším tématem"
                    },
                    {
                      icon: UserCheck,
                      title: "Mentoring",
                      desc: "Dlouhodobá spolupráce pro kontinuální rozvoj",
                      link: "/sluzby/mentoring"
                    },
                  ].map((outcome, index) => {
                    const OutcomeIcon = outcome.icon;
                    const CardContent = (
                      <>
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                          <OutcomeIcon className="text-white" size={24} />
                        </div>
                        <h4 className="font-bold text-secondary text-base mb-2">
                          {outcome.title}
                        </h4>
                        <p className="text-muted text-sm">
                          {outcome.desc}
                        </p>
                        {outcome.link && (
                          <div className="mt-3 flex items-center justify-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                            Více o mentoringu
                            <ArrowRight size={14} />
                          </div>
                        )}
                      </>
                    );

                    return (
                      <motion.div
                        key={outcome.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        {outcome.link ? (
                          <Link
                            href={outcome.link}
                            className="group flex flex-col justify-center bg-white rounded-2xl p-5 text-center h-full hover:shadow-xl hover:border-primary/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50"
                          >
                            {CardContent}
                          </Link>
                        ) : (
                          <div className="flex flex-col justify-center bg-white rounded-2xl p-5 text-center h-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50">
                            {CardContent}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="section-padding bg-white">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Praktické nástroje
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                S čím vás naučím pracovat<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted max-w-2xl mx-auto"
              >
                Zaměřuji se na nejmodernější a nejefektivnější AI nástroje, které
                vám pomohou v každodenní práci.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workshopTools.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                >
                  <h3 className="font-bold text-secondary mb-4">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-section-alt rounded-full text-sm text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Poznejte mě Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-section-alt to-transparent" />

          <div className="container-narrow mx-auto relative">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-secondary rounded-full text-sm font-semibold mb-6"
              >
                <GraduationCap size={16} />
                Projekt AI s rozumem
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-secondary mb-6"
              >
                Poznejte mě<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted text-lg max-w-2xl mx-auto"
              >
                Webináře a workshopy probíhají na objednávku nebo jsou součástí
                placených služeb. Pokud mě chcete nejdříve poznat, mrkněte na
                můj bezplatný vzdělávací obsah a nahlédněte na moje online kurzy.
              </motion.p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* YouTube Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="group relative"
              >
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-full bg-gradient-to-br from-red-500 to-red-600">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="relative p-6 md:p-8">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl text-white mb-2">
                      YouTube
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      Podívejte se, jak vysvětluji a učím. Mějte na paměti, že se jedná o populárně naučný obsah, který musí i diváka zaujmout.
                    </p>
                    <a
                      href={externalLinks.youtubeChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-secondary px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 hover:shadow-lg"
                    >
                      <Play size={16} className="fill-current" />
                      Odebírat kanál
                      <ExternalLink size={14} />
                    </a>
                    <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-full" />
                    <div className="absolute bottom-6 right-12 w-6 h-6 bg-white/10 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Akademie Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-full bg-gradient-to-br from-primary to-amber-500">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="relative p-6 md:p-8">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl text-white mb-2">
                      Akademie AI s Rozumem
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      Vyzkoušejte si mé online kurzy a podívejte se na preview
                      lekce. Získáte představu o stylu a obsahu mých workshopů.
                    </p>
                    <a
                      href={externalLinks.academy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-secondary px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 hover:shadow-lg"
                    >
                      Vstoupit do akademie
                      <ExternalLink size={14} />
                    </a>
                    <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-full" />
                    <div className="absolute bottom-6 right-12 w-6 h-6 bg-white/10 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-section-alt relative overflow-hidden">
          <div className="container-narrow mx-auto">
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
                Co říkají účastníci<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {workshopTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                >
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <Quote className="text-white" size={18} />
                  </div>
                  <p className="text-secondary/80 mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <p className="font-semibold text-secondary text-sm text-center mb-4">
                    — {testimonial.name}
                  </p>
                  <div className="pt-4 border-t border-gray-100 text-center">
                    <span className="text-xs text-primary font-medium">
                      {testimonial.workshopType}
                    </span>
                    <span className="text-xs text-muted"> · </span>
                    <span className="text-xs text-muted">
                      {testimonial.details}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <WaveSeparator fillColor="#05121f" variant={2} />
        </section>

        {/* CTA Section */}
        <section className="pt-16 md:pt-24 pb-32 md:pb-40 bg-secondary relative overflow-hidden">
          <div className="container-narrow mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Máte zájem o školení nebo workshop<span className="text-primary">?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Ať už hledáte školení pro sebe nebo pro celý tým, rád s Vámi
                proberu možnosti. Domluvme si nezávaznou konzultaci.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors"
                >
                  Domluvit workshop
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/sluzby/mentoring"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors border border-white/20"
                >
                  Nebo zkusit mentoring
                </Link>
              </div>
            </motion.div>
          </div>
          <WaveSeparator fillColor="#F8FAFC" variant={4} />
        </section>

        {/* Other Services */}
        <OtherServices currentSlug="webinare-a-workshopy" />
      </main>

      <Footer />
    </>
  );
}
