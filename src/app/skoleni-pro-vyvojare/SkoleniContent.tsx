"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoPlaceholder from "@/components/landing/VideoPlaceholder";
import PricingPackage from "@/components/landing/PricingPackage";
import FAQAccordion from "@/components/landing/FAQAccordion";
import LeadForm from "@/components/landing/LeadForm";
import { Quote } from "lucide-react";
import { getTestimonials } from "@/lib/data";

const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};

const painPoints: React.ReactNode[] = [
  "Investovali jste do licencí na Claude Code, Copilot nebo jiný AI nástroj. Vývojáři ho používají jen jako lepší autocomplete. Nebo vůbec.",
  "Čtete o firmách, které díky AI zrychlily vývoj o desítky procent. U vás se nic nezměnilo.",
  <>Navrhli jste, že by tým mohl AI víc využívat. Reakce? Ticho, skepse, nebo prostě: <strong>to pro náš stack nefunguje</strong>.</>,
  "Nevíte, jestli problém je v nástrojích, v lidech, nebo v tom, že prostě nevíte, kde začít.",
];

const credentials = [
  "Tech lead Flutter týmu v Tymbe. Denně řeší reálný vývoj s reálným týmem.",
  "Konzultant pro firmy, které chtějí AI zavést do svého dev procesu.",
  "Spolutvůrce podcastu Deep Link Show a autor Coffee Break s Filipem — česky o AI bez buzzwordů.",
  "Přednášející na UHK, speaker na networking eventech.",
  "Pracuje s Claude Code, agentickými workflow a moderními AI nástroji každý den.",
];

const skoleniFAQ = [
  {
    question: "Musí naši vývojáři umět s AI, než přijdete?",
    answer:
      "Ne. Workshop funguje i pro tým, který AI zatím nepoužívá. Předem ale potřebuji vědět, jaká je aktuální úroveň — přizpůsobím tomu začátek i tempo, aby to dávalo smysl všem v místnosti.",
  },
  {
    question: "Co když máme specifický tech stack?",
    answer:
      "Nevadí. Principy, které školím, jsou přenositelné napříč tech stacky. Zaměřuji se primárně na mindset, návrh přístupu a využití AI agentů — ne na konkrétní jazyk nebo framework. To, co se naučíte, platí bez ohledu na to, čím stavíte.",
  },
  {
    question: "Budete integrovat AI do našich procesů?",
    answer:
      "Moje role je motivace, první kroky a obecné principy — nastavení workflow, výběr nástrojů, způsob přemýšlení o AI v každodenním vývoji. Pro pokročilou integraci od A do Z, která vyžaduje hluboký ponor do vašeho prostředí, rád vás propojím s partnery, kteří se na to specializují.",
  },
  {
    question: "Kolik lidí může být na workshopu?",
    answer:
      "Limit je 15 lidí na jednu session — tak, aby byl prostor na otázky a diskusi. Pokud máte větší tým, individuálně se dá domluvit.",
  },
  {
    question: "Je školení remote nebo osobně?",
    answer:
      "Preferuji osobní setkání. Při živém workshopu můžu mnohem lépe číst místnost, reagovat na otázky v reálném čase, přizpůsobit tempo a hloubku toho, co vysvětluji. Diskuse jde přirozeněji, know-how se předává efektivněji. Nicméně i tak je remote školení po domluvě možné.",
  },
];

export default function SkoleniContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />

      {/* Section 1: Hero */}
      <section className="bg-secondary text-white pt-32 pb-36 md:pb-44 px-4 md:px-8 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left col */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-6 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20"
              >
                Školení pro dev týmy
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              >
                O AI slyšíte všude.<br />
                U vás to ale pořád{" "}
                <span className="text-primary">drhne.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-8"
              >
                Každý druhý článek, podcast i LinkedIn post mluví o tom, jak AI
                mění a zrychluje vývoj. Vy to slyšíte také, ale potýkáte se s
                odporem vašich vývojářů? Něco jim brání AI začít efektivně
                používat — a není to lenost. Pomůžu vám to změnit.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 group shadow-lg shadow-primary/25"
              >
                Chci nezávazně probrat, co potřebujeme
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </div>

            {/* Right col */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VideoPlaceholder
                title="Proč většina školení o AI nefunguje"
                duration="60–90 sec"
              />
            </motion.div>
          </div>
        </div>

        {/* Wave separator into bg-section-alt */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80H1440V40C1380 40 1320 50 1200 55C1080 60 960 70 840 72C720 74 600 70 480 60C360 50 240 30 120 20C60 15 0 20 0 20V80Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Section 2: Pain points */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            >
              Slyšíte o AI každý den. Ale váš tým pracuje pořád{" "}
              <span className="text-primary">stejně.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <AlertCircle size={22} className="text-primary" />
                </div>
                <p className="text-secondary leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted italic text-lg"
          >
            Pokud jste se poznali aspoň v jednom bodě, čtěte dál.
          </motion.p>
        </div>
      </section>

      {/* Section 3: Why */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Proč to tak je
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-secondary mb-10"
          >
            Tři důvody, proč to u vás{" "}
            <span className="text-primary">drhne.</span>
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold text-secondary text-lg mb-2">
                  Školení ukáže základy, ale nepojmenuje skutečné problémy
                </h3>
                <p className="text-secondary/75 leading-relaxed">
                  AI nástroje — zejména agenti — mají reálné limity a chování,
                  které není intuitivní. Vývojář to vyzkouší, narazí, spálí se a
                  udělá rychlý závěr: <strong>tohle nefunguje.</strong> Jenže problém není v
                  nástroji. Problém je v tom, že mu nikdo dopředu neřekl, kde
                  jsou hranice a jak s nimi pracovat.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-secondary text-lg mb-2">
                  Vyvíjí se to extrémně rychle
                </h3>
                <p className="text-secondary/75 leading-relaxed">
                  Co bylo pravda před půl rokem, dnes už neplatí. Skepticismus
                  vývojáře, který AI zkoušel v roce 2023, může být dnes úplně
                  mylný. Nástroje se změnily, workflow se změnily, možnosti se
                  změnily. Je potřeba to pořád zkoušet — a vědět, co zkoušet.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-secondary text-lg mb-2">
                  Špatný mindset zablokuje všechno ostatní
                </h3>
                <p className="text-secondary/75 leading-relaxed">
                  <strong>„AI za mě vyřeší všechno"</strong> — zklamání zaručeno. <strong>„AI mě nahradí"</strong>
                  — strach a skepse zaručeny. Oboje vede ke stejnému výsledku:
                  vývojář AI nepoužívá nebo ho používá špatně. Správný pohled je
                  jiný: AI je nástroj, se kterým se musím naučit pracovat. Jako
                  každý jiný. A to chce čas, praxi a správné vedení.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 bg-primary/5 border-l-4 border-primary rounded-r-xl p-6"
          >
            <p className="text-secondary leading-relaxed text-lg font-medium">
              Být dobrý vývojář neznamená, že umíte používat AI. To je samostatná
              dovednost — a dá se naučit.
            </p>
            <p className="text-secondary/70 leading-relaxed mt-3">
              Jsem sám vývojář — vedu Flutter tým, denně pracuju s Claude Code,
              stavím agentické workflow. Vím přesně, kde AI reálně šetří hodiny a
              kde je to zatím ztráta času. A hlavně — vím, jak vývojáře dostat od
              skepse k tomu, že to sami chtějí zkusit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Packages */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Balíčky
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            >
              Vyberte si, co dává smysl pro váš{" "}
              <span className="text-primary">tým.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <PricingPackage
              name="MOTIVACE"
              price="od 25 000 Kč"
              format="3–4 hodiny | Pro tým do 15 lidí"
              forWhom="Tým, který AI nepoužívá nebo jen povrchně — a chce vědět, co je dnes reálně možné a proč na to přestat čekat."
              goal="Vyvrátit mýty, nastavit správný mindset a vzbudit chuť to zkusit."
              form="Přednáška + interaktivní Q&A. Mapujeme AI Agentic Engineering — state of the art, co dnes funguje, co ne a kde je budoucnost. Bez zbytečné teorie."
              output="Tým odejde s jasnou představou, kde AI dává smysl — a s konkrétní motivací to sám vyzkoušet."
              features={[
                "AI state of the art pro vývoj software",
                "Agentic Engineering — co to je a kam to směřuje",
                "Kde AI dnes reálně šetří čas vývojářů",
                "Jak vytvořit správný mindset v celém týmu",
                "Reálné ukázky — co AI umí a co zatím ne",
                "Interaktivní Q&A",
              ]}
              highlighted={true}
              index={0}
              onCtaClick={scrollToForm}
            />
            <PricingPackage
              name="DEEP DIVE"
              price="od 40 000 Kč"
              format="Celodenní | Pro tým do 15 lidí"
              forWhom="Tým, který chce jít do hloubky — a odejít s nastaveným workflow, ne jen s inspirací."
              goal="Projít celý vývojářský toolstack: jak nástroje nakonfigurovat, propojit a efektivně sdílet v týmu."
              form="Celodenní školení zaměřené na konfiguraci a workflow. Každý vývojář odchází s nastaveným prostředím a jasným přehledem, jak ho dál rozvíjet."
              output="Tým má funkční AI workflow — ne teorii, ale reálné nastavení, které příští den používá."
              features={[
                "Vše z balíčku MOTIVACE",
                "Nastavení development workflow s AI nástroji",
                "Konfigurace Claude Code — CLAUDE.md, hooks, permissions",
                "MCP/CLI nástroje — které používat a jak je zapojit",
                "Automatické code review a bug fixing",
                "Sdílení konfigurace a best practices v týmu",
              ]}
              highlighted={false}
              index={1}
              onCtaClick={scrollToForm}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 max-w-2xl mx-auto space-y-3 text-center text-muted text-sm"
          >
            <p>
              <span className="font-semibold text-secondary">Potřebujete něco jiného?</span>{" "}
              Domluvíme se na školení přesně na míru vašemu týmu a situaci.
            </p>
            <p>
              Pokud chcete hlubokou integraci AI do vašeho dev procesu, rád vás
              propojím s{" "}
              <a
                href="https://dxheroes.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                DX Heroes
              </a>
              {" "}— specializují se přesně na tohle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Who will train you */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Kdo vás bude školit
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            >
              Vývojář, který mluví z{" "}
              <span className="text-primary">praxe.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/filip-obornik.jpg"
                alt="Filip Oborník"
                className="w-full aspect-square object-cover object-top rounded-3xl shadow-xl"
              />
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ul className="space-y-4 mb-8">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <p className="text-secondary leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/moje-cesta"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Moje profesní cesta
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: References */}
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
              Co říkají <span className="text-primary">ostatní.</span>
            </motion.h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {getTestimonials("skoleni").map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group break-inside-avoid mb-6"
              >
                <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                  <div className="absolute -top-4 -left-2 text-8xl font-serif text-primary/10 select-none leading-none">
                    &ldquo;
                  </div>
                  <div className="relative w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="text-white" size={20} />
                  </div>
                  <p className="relative text-secondary/80 leading-relaxed mb-8">
                    {testimonial.content}
                  </p>
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
                        <a
                          href={testimonial.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-secondary hover:text-primary transition-colors"
                        >
                          {testimonial.name.replace(/[\[\]]/g, "")}
                        </a>
                      ) : (
                        <p className="font-semibold text-secondary">
                          {testimonial.name.replace(/[\[\]]/g, "")}
                        </p>
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

      {/* Section 7: FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Časté otázky
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            >
              Možná vás{" "}
              <span className="text-primary">napadlo.</span>
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={skoleniFAQ} />
          </div>
        </div>
      </section>

      {/* Section 8: CTA + Form */}
      <section
        id="form"
        className="pt-28 md:pt-40 pb-28 md:pb-40 px-4 md:px-8 bg-secondary relative overflow-hidden"
      >
        {/* Wave at top (previous section is bg-white) */}
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

        {/* Background decorations */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-narrow relative">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Pojďme zjistit, co váš tým{" "}
              <span className="text-primary">potřebuje.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg"
            >
              Úvodní call je zdarma. Popište mi, co řešíte, a zjistíme společně,
              jak vám dokážu pomoct.
            </motion.p>
          </div>

          <LeadForm
            service="skoleni"
            fields={{
              showCompany: true,
              packages: ["MOTIVACE", "DEEP DIVE"],
              messagePlaceholder: "Co řešíte? Popište vaši situaci...",
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
