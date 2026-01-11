"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Smartphone,
  Target,
  GitBranch,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaveSeparator from "@/components/ui/WaveSeparator";

const highlights = [
  {
    icon: Users,
    title: "Vedení týmu",
    description:
      "Koordinace práce vývojářského týmu a podpora juniorních kolegů.",
  },
  {
    icon: Target,
    title: "Produktová spolupráce",
    description:
      "Spolupráce na produktových rozhodnutích a prioritizaci funkcí.",
  },
  {
    icon: Smartphone,
    title: "Mobilní vývoj",
    description: "Flutter aplikace pro iOS, Android i Web.",
  },
  {
    icon: GitBranch,
    title: "Technické rozhodování",
    description: "Podíl na návrhu řešení a code reviews.",
  },
];

const techStack = [
  { name: "Flutter", description: "Framework" },
  { name: "Dart", description: "Jazyk" },
  { name: "REST API", description: "Backend" },
  { name: "Firebase", description: "Services" },
  { name: "CI/CD", description: "Automatizace" },
];

export default function TymbeProjectPage() {
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
              {["Team Lead", "Flutter", "Mobile App", "Product Delivery"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Tymbe<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl"
            >
              Mobilní aplikace pro flexibilní brigády. Projekt vyvinutý
              tradičními metodami{" "}
              <span className="text-primary font-semibold">bez AI</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://tymbe.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-6 py-3 rounded-full transition-all"
              >
                Navštívit web
                <ExternalLink size={18} />
              </a>
              <span className="inline-flex items-center gap-2 text-white/50 text-sm">
                <Calendar size={16} />
                2024
              </span>
            </motion.div>
          </div>
        </div>

        <WaveSeparator fillColor="white" />
      </section>

      {/* About Section with Screenshot */}
      <section className="section-padding bg-white relative">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                O projektu
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tymbe je mobilní aplikace, která propojuje brigádníky s
                  firmami nabízejícími flexibilní pracovní příležitosti po celé
                  České republice. Uživatelé si mohou vybírat brigády podle
                  lokality, času a typu práce.
                </p>
                <p>
                  Na projektu jsem se podílel jako team leader Flutter týmu.
                  Aplikace vznikla v roce 2024 tradičními vývojovými metodami,
                  bez využití AI nástrojů.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/portfolio/tymbe/promo_banner.png"
                  alt="Tymbe mobilní aplikace"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <WaveSeparator fillColor="#f8fafc" variant={2} />
      </section>

      {/* Role Section */}
      <section className="section-padding bg-section-alt relative">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Moje role v projektu
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <WaveSeparator fillColor="#05121F" />
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-secondary relative">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Tech Stack
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Aplikace postavená na moderních technologiích s důrazem na výkon
                a udržitelnost kódu.
              </p>
            </motion.div>

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
                  <span className="text-white font-medium text-sm">
                    {tech.name}
                  </span>
                  <span className="text-white/50 text-xs">•</span>
                  <span className="text-white/60 text-xs">
                    {tech.description}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <WaveSeparator fillColor="white" />
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white relative">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <Briefcase size={16} />
              Spolupráce
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              Potřebujete podobný projekt?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Pomohu vám s technickými konzultacemi, návrhem architektury nebo
              vás propojím s partnery pro komplexní softwarová řešení.
            </p>
            <Link
              href="/sluzby/partnerske-projekty"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-4 rounded-full transition-all"
            >
              Software projekty
              <ExternalLink size={18} />
            </Link>
          </motion.div>
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
