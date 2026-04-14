"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import WaveSeparator from "@/components/ui/WaveSeparator";

const offers = [
  {
    icon: GraduationCap,
    label: "Pro firmy a dev týmy",
    title: "Školení AI pro vývojáře",
    description:
      "Váš tým slyší o AI všude, ale v praxi to pořád nefunguje. Ukážu jim konkrétně — bez teorie — jak AI reálně mění způsob vývoje softwaru.",
    href: "/skoleni-pro-vyvojare",
    cta: "Zjistit více o školení",
    dark: true,
  },
  {
    icon: Users,
    label: "Pro jednotlivce i týmy",
    title: "Mentoring AI",
    description:
      "Nevíte, kde začít, nebo chcete AI využívat jinak než jen jako chatbot? Projdeme to společně — individuálně nebo v celém týmu — v tempu a hloubce, která dává smysl právě vám.",
    href: "/mentoring",
    cta: "Zjistit více o mentoringu",
    dark: false,
  },
];

export default function FeaturedOffers() {
  return (
    <section className="section-padding bg-section-alt relative">
      <div className="container-narrow mx-auto">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Připravené balíčky
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-secondary"
            >
              Kde vám dokážu{" "}
              <span className="text-primary">nejvíce pomoci.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/moje-cesta"
                className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors group text-sm whitespace-nowrap"
              >
                Moje profesní cesta
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={offer.href}
                  className={`group relative overflow-hidden rounded-2xl md:rounded-3xl p-8 flex flex-col h-full card-lift cursor-pointer block transition-all ${
                    offer.dark
                      ? "bg-secondary text-white"
                      : "bg-white border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                  }`}
                >
                  {offer.dark && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {offer.label}
                      </span>
                    </div>

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                      offer.dark ? "bg-white/10 group-hover:bg-primary" : "bg-primary/10 group-hover:bg-primary"
                    }`}>
                      <Icon
                        size={22}
                        className={`transition-colors duration-300 ${
                          offer.dark ? "text-primary group-hover:text-secondary" : "text-primary group-hover:text-white"
                        }`}
                      />
                    </div>

                    <h3 className={`font-bold text-xl mb-3 ${offer.dark ? "text-white" : "text-secondary"}`}>
                      {offer.title}
                    </h3>

                    <p className={`text-sm leading-relaxed flex-1 mb-6 ${offer.dark ? "text-white/70" : "text-muted"}`}>
                      {offer.description}
                    </p>

                    <div className={`inline-flex items-center gap-2 font-medium text-sm transition-all duration-300 group-hover:gap-3 ${
                      offer.dark ? "text-primary" : "text-secondary group-hover:text-primary"
                    }`}>
                      {offer.cta}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <WaveSeparator fillColor="white" variant={2} />
    </section>
  );
}
