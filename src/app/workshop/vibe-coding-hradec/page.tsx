"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  Check,
  X,
  GraduationCap,
  Lightbulb,
  ArrowLeft,
  ExternalLink,
  Youtube,
  MessageCircle,
  BookOpen,
  Send,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  workshopHradec,
  workshopHradecAgenda,
  workshopHradecPhilosophy,
  workshopHradecTakeaways,
  workshopHradecForWhom,
  workshopHradecVibeCoding,
  workshopHradecStats,
  workshopHradecTool,
} from "@/lib/data";

export default function WorkshopHradecPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("hp_field")) {
      setFormStatus("error");
      return;
    }

    try {
      const response = await fetch("https://n8n.filipobornik.com/webhook/a15b1988-f640-4cff-a9ef-7e06b4930275", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          goal: formData.get("goal"),
          expectations: formData.get("expectations"),
          city: formData.get("city"),
        }),
      });

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[600px] md:min-h-[700px] relative overflow-hidden bg-secondary">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container-narrow mx-auto px-4 md:px-8 pt-32 pb-32 md:pt-40 md:pb-40 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Zpět na hlavní stránku
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {workshopHradec.subtitle}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Naučím vás tvořit
            <br />
            pomocí{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              vibe codingu
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl"
          >
            {workshopHradec.heroDescription}
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {workshopHradec.heroFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-white/80"
              >
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-primary" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#zajem"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Nezávazně rezervovat místo
            </a>
            <p className="text-white/50 text-sm self-center">
              Termíny budou vypsány podle zájmu
            </p>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <main>
        {/* Philosophy Section */}
        <section className="pt-12 md:pt-16 pb-40 md:pb-48 bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Proč tento workshop?
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted text-lg max-w-2xl mx-auto italic"
              >
                „Daruješ-li člověku rybu, nakrmíš ho na den. Naučíš-li ho lovit,
                dáš mu potravu pro celý život."
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {workshopHradecPhilosophy.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-secondary text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <WaveSeparator fillColor="#05121f" variant={1} />
        </section>

        {/* Agenda Section */}
        <section className="min-h-[600px] bg-secondary relative overflow-hidden">
          <div className="container-narrow mx-auto pt-20 pb-32 md:pt-24 md:pb-40">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Program workshopu
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Jak bude workshop probíhat
                <span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60"
              >
                Strukturovaný program s prostorem pro vaše projekty
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="max-w-3xl mx-auto">
              {workshopHradecAgenda.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4 pb-6"
                >
                  {/* Time - left side */}
                  <div
                    className={`w-[120px] shrink-0 text-right leading-6 ${
                      item.isHighlight
                        ? "text-primary font-semibold"
                        : item.isBreak
                        ? "text-white/40"
                        : "text-white/60"
                    } text-sm`}
                  >
                    {item.time}
                  </div>

                  {/* Timeline line and dot */}
                  <div className="flex flex-col items-center shrink-0 pt-[7px]">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.isHighlight
                          ? "bg-primary"
                          : item.isBreak
                          ? "bg-white/30"
                          : "bg-white/50"
                      }`}
                    />
                    {index < workshopHradecAgenda.length - 1 && (
                      <div className="w-0.5 bg-white/10 flex-1 min-h-[40px]" />
                    )}
                  </div>

                  {/* Content - right side */}
                  <div className="flex-1 pb-2 leading-6">
                    <h4
                      className={`font-semibold ${
                        item.isHighlight
                          ? "text-white"
                          : item.isBreak
                          ? "text-white/60"
                          : "text-white/80"
                      }`}
                    >
                      {item.title}
                    </h4>
                    {item.note && (
                      <p className="text-white/40 text-sm mt-1">
                        → {item.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Goal note */}
            <motion.a
              href="#zajem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mt-8 border border-white/10 hover:border-primary/30 transition-colors cursor-pointer"
            >
              <div className="text-2xl">
                <Lightbulb className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Cíl workshopu</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Cílem není odnést si jen „hotovou aplikaci" nebo konkrétní
                  řešení, ale pochopit principy vibe codingu - jak funguje, kdy
                  ho použít a kde jsou jeho limity. Naučíte se rozpoznat, kdy má
                  smysl použít vibe coding a kdy je lepší oslovit profesionálního
                  programátora. Odejdete s realistickými očekáváními a praktickou
                  dovedností, kterou můžete okamžitě využívat ve své práci a dále
                  rozvíjet.
                </p>
              </div>
            </motion.a>
          </div>
          <WaveSeparator fillColor="white" variant={2} />
        </section>

        {/* Tool Section - Macaly */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Nástroj workshopu
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Budeme pracovat s {workshopHradecTool.name}
                <span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted max-w-2xl mx-auto"
              >
                {workshopHradecTool.description}
              </motion.p>
            </div>

            {/* Free Credits Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-10 border border-primary/20 text-center"
            >
              <span className="text-5xl mb-4 block">🎁</span>
              <p className="text-secondary font-bold text-xl md:text-2xl mb-2">
                {workshopHradecTool.freeCredits} kreditů zdarma
              </p>
              <p className="text-muted text-sm">
                {workshopHradecTool.freeCreditsNote}
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {workshopHradecTool.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-secondary text-lg mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Note about transferable skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 bg-primary/5 rounded-2xl p-6 max-w-4xl mx-auto mt-8 border border-primary/10"
            >
              <div className="text-2xl">
                <Lightbulb className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">
                  Dovednosti přenositelné kamkoliv
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {workshopHradecTool.note}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Takeaways Section */}
        <section className="section-padding bg-section-alt relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Co si odnesete
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Co si z workshopu odnesete
                <span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <GraduationCap className="text-primary" size={26} />
                </div>
                <h3 className="font-bold text-secondary text-xl mb-4">
                  Nové dovednosti
                </h3>
                <ul className="space-y-3">
                  {workshopHradecTakeaways.skills.map((skill) => (
                    <li key={skill} className="flex gap-3 text-muted text-sm">
                      <Check
                        size={16}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Outputs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="font-bold text-secondary text-xl mb-4">
                  Hmatatelné výstupy
                </h3>
                <ul className="space-y-3">
                  {workshopHradecTakeaways.outputs.map((output) => (
                    <li key={output} className="flex gap-3 text-muted text-sm">
                      <Check
                        size={16}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      {output}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* For Whom Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Pro koho je workshop
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Pro koho je workshop určen
                <span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Ideal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                  <Check className="text-green-600" size={26} />
                </div>
                <h3 className="font-bold text-secondary text-xl mb-4">
                  Ideální účastník
                </h3>
                <ul className="space-y-3">
                  {workshopHradecForWhom.ideal.map((item) => (
                    <li key={item} className="flex gap-3 text-muted text-sm">
                      <Check
                        size={16}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Not For */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-5">
                  <X className="text-red-500" size={26} />
                </div>
                <h3 className="font-bold text-secondary text-xl mb-4">
                  Workshop není pro vás, pokud
                </h3>
                <ul className="space-y-3">
                  {workshopHradecForWhom.notFor.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-muted/70 text-sm"
                    >
                      <X
                        size={16}
                        className="text-red-400 flex-shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section-padding bg-section-alt relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Praktické informace
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Informace k workshopu
                <span className="text-primary">.</span>
              </motion.h2>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 md:col-span-3 bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm"
              >
                <MapPin className="text-primary flex-shrink-0" size={24} />
                <div>
                  <span className="text-muted text-sm">Místo</span>
                  <p className="font-bold text-secondary text-lg">
                    {workshopHradec.location}
                  </p>
                  <p className="text-muted text-sm">
                    {workshopHradec.locationDetail}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm"
              >
                <Calendar className="text-primary flex-shrink-0" size={24} />
                <div>
                  <span className="text-muted text-sm">Termín</span>
                  <p className="font-bold text-secondary">
                    {workshopHradec.date}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm"
              >
                <Users className="text-primary flex-shrink-0" size={24} />
                <div>
                  <span className="text-muted text-sm">Kapacita</span>
                  <p className="font-bold text-secondary">
                    {workshopHradec.capacity} účastníků
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm"
              >
                <span className="text-xl">💰</span>
                <div>
                  <span className="text-muted text-sm">Cena</span>
                  <p className="font-bold text-secondary">
                    {workshopHradec.price.toLocaleString("cs-CZ")} Kč
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Price Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 max-w-xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">💰</span>
                <div>
                  <span className="text-white/60 text-sm">Cena workshopu</span>
                  <p className="text-4xl font-bold text-white">
                    {workshopHradec.price.toLocaleString("cs-CZ")} Kč
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-white/60 text-sm mb-3">V ceně je zahrnuto:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {workshopHradec.priceIncludes.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 mb-6">
                <p className="text-white/50 text-sm">
                  💡 {workshopHradec.priceNote}
                </p>
              </div>

              <a
                href="#zajem"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Mám zájem
              </a>
            </motion.div>
          </div>
          <WaveSeparator fillColor="#05121f" variant={3} />
        </section>

        {/* What is Vibe Coding Section */}
        <section className="min-h-[500px] bg-secondary relative overflow-hidden">
          <div className="container-narrow mx-auto px-4 md:px-8 pt-20 pb-32 md:pt-24 md:pb-40">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Tvorba aplikací bez znalosti programování
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Co je Vibe Coding<span className="text-primary">?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60"
              >
                Programování bez nutnosti umět programovat — s pomocí AI
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {workshopHradecVibeCoding.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto mt-8 border border-white/10"
            >
              <div className="text-2xl">
                <Lightbulb className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">
                  Není třeba být programátor
                </h4>
                <p className="text-white/60 text-sm">
                  Workshop je určen pro úplné začátečníky i pokročilé. Jediné, co
                  potřebujete, je notebook a chuť učit se.
                </p>
              </div>
            </motion.div>

            {/* Project Showcase */}
            <div className="mt-16 max-w-4xl mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white text-center mb-8"
              >
                Příklady projektů vytvořených vibe codingem
                <span className="text-primary">.</span>
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Takdy */}
                <motion.a
                  href="https://takdy.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/portfolio/takdy/takdy_landing.png"
                      alt="Takdy.cz - aplikace pro plánování setkání"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-white text-lg">Takdy.cz</h4>
                      <ExternalLink size={14} className="text-white/40 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-white/60 text-sm mb-3">
                      Bezplatná aplikace pro snadné plánování společných setkání. Jako Doodle, ale jednodušší a bez registrace.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/20 rounded-full text-primary text-xs font-medium">
                        Vibe Coding
                      </span>
                      <span className="px-2 py-1 bg-white/10 rounded-full text-white/60 text-xs">
                        Next.js
                      </span>
                      <span className="px-2 py-1 bg-white/10 rounded-full text-white/60 text-xs">
                        Supabase
                      </span>
                    </div>
                  </div>
                </motion.a>

                {/* Osobní web */}
                <motion.a
                  href="/"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/portfolio/portfolio/portfolio_landing.png"
                      alt="Osobní web filipobornik.cz"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-white text-lg">Osobní web</h4>
                      <ExternalLink size={14} className="text-white/40 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-white/60 text-sm mb-3">
                      Tato webová stránka - vytvořena kompletně pomocí vibe codingu s Claude Code.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/20 rounded-full text-primary text-xs font-medium">
                        Vibe Coding
                      </span>
                      <span className="px-2 py-1 bg-white/10 rounded-full text-white/60 text-xs">
                        Next.js
                      </span>
                      <span className="px-2 py-1 bg-white/10 rounded-full text-white/60 text-xs">
                        TypeScript
                      </span>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
          <WaveSeparator fillColor="white" variant={4} />
        </section>

        {/* Community Stats Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                AI s rozumem
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Neustále rostoucí komunita
                <span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted"
              >
                Tisíce lidí se vzdělávají v oblasti AI a vibe codingu díky
                projektu AI s rozumem
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-section-alt rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={2660} suffix="+" delay={0.2} />
                </div>
                <p className="text-muted text-sm">Odběratelů YouTube</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-section-alt rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={183} suffix="+" delay={0.3} />
                </div>
                <p className="text-muted text-sm">Absolventů AI Akademie</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-section-alt rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={172} suffix="+" delay={0.4} />
                </div>
                <p className="text-muted text-sm">Členů Discord komunity</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section className="section-padding bg-section-alt relative overflow-hidden">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Text */}
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
                >
                  Váš lektor
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-secondary mb-6"
                >
                  Filip Oborník<span className="text-primary">.</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-muted mb-4"
                >
                  Jsem Filip Oborník, zakladatel projektu AI s rozumem. Pomáhám
                  firmám i jednotlivcům orientovat se ve světě AI a využít její
                  potenciál naplno — s praktickým přístupem a bez zbytečného
                  přehánění.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-muted mb-6"
                >
                  Aktivně využívám vibe coding ve své práci a sdílím své
                  zkušenosti prostřednictvím YouTube kanálu, Discord komunity a
                  praktických workshopů.
                </motion.p>

                {/* Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  <a
                    href="https://www.youtube.com/@aisrozumem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-secondary text-sm font-medium hover:shadow-md transition-shadow"
                  >
                    <Youtube size={16} />
                    YouTube
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                  <a
                    href="https://discord.com/invite/mgrgyZuJuv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-secondary text-sm font-medium hover:shadow-md transition-shadow"
                  >
                    <MessageCircle size={16} />
                    Discord
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                  <a
                    href="https://akademie.aisrozumem.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-secondary text-sm font-medium hover:shadow-md transition-shadow"
                  >
                    <BookOpen size={16} />
                    Akademie
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                </motion.div>

                {/* Credentials */}
                <div className="space-y-3">
                  {[
                    {
                      title: "Programátor a SW analytik",
                      desc: "Profesionálně a bezpečně vás provedu vibe codingem",
                    },
                    {
                      title: "Praktické zkušenosti",
                      desc: "Vibe coding používám denně pro vlastní projekty - například i tento web",
                    },
                    {
                      title: "Bez zbytečného hype",
                      desc: "Učím to, co opravdu funguje",
                    },
                    {
                      title: "Individuální přístup",
                      desc: "Malá skupina umožňuje věnovat se každému",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary text-sm">
                          {item.title}
                        </h4>
                        <p className="text-muted text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden">
                    <Image
                      src="/images/portrait.png"
                      alt="Filip Oborník"
                      width={400}
                      height={400}
                      className="object-cover"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section
          id="zajem"
          className="min-h-[600px] bg-secondary relative overflow-hidden"
        >
          <div className="container-narrow mx-auto px-4 md:px-8 py-20 md:py-24">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
              >
                Registrace
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Zaujal Vás workshop<span className="text-primary">?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60"
              >
                Udělejte si nezávaznou registraci. Jakmile bude termín, ozveme se
                Vám jako prvním.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                {formStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Děkuji za váš zájem
                    </h3>
                    <p className="text-white/60 mb-6">
                      Jakmile vypíšu termíny, budete mezi prvními, kterým se ozvu
                      s možností zakoupení.
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                    >
                      <ArrowLeft size={16} />
                      Zpět na hlavní stránku
                    </Link>
                  </div>
                ) : formStatus === "error" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <X className="text-red-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Něco se pokazilo
                    </h3>
                    <p className="text-white/60 mb-6">
                      Odeslání se nepovedlo. Zkuste to prosím znovu.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                    >
                      Zkusit znovu
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <div
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-9999px" }}
                    >
                      <label htmlFor="hp-field">Nevyplňovat:</label>
                      <input
                        type="text"
                        name="hp_field"
                        id="hp-field"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-white/80 text-sm mb-2"
                        >
                          Jméno *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Vaše jméno"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-white/80 text-sm mb-2"
                        >
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="vas@email.cz"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="goal"
                        className="block text-white/80 text-sm mb-2"
                      >
                        Jaký projekt byste chtěli vytvořit pomocí AI? *
                      </label>
                      <textarea
                        id="goal"
                        name="goal"
                        rows={3}
                        required
                        placeholder="Např.: nástroj pro automatizaci faktur, web pro firmu, kalkulačku pro analýzu dat..."
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="expectations"
                        className="block text-white/80 text-sm mb-2"
                      >
                        Jaké jsou Vaše očekávání od workshopu? (nepovinné)
                      </label>
                      <textarea
                        id="expectations"
                        name="expectations"
                        rows={3}
                        placeholder="Co byste se chtěli naučit, jaké dovednosti získat..."
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-white/80 text-sm mb-2"
                      >
                        Odkud přijedete? (nepovinné)
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Praha, Brno, Ostrava..."
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="gdpr"
                        name="gdpr"
                        required
                        className="mt-1 w-4 h-4 accent-primary"
                      />
                      <label
                        htmlFor="gdpr"
                        className="text-white/60 text-sm cursor-pointer"
                      >
                        Souhlasím se zpracováním e-mailu pro zaslání informací o
                        workshopu.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-secondary font-semibold px-8 py-4 rounded-full transition-all duration-300"
                    >
                      <Send size={18} />
                      {formStatus === "submitting"
                        ? "Odesílám..."
                        : "Zajistit místo na workshopu"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
