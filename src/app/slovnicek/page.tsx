import { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import GlossaryGrid from "@/components/glossary/GlossaryGrid";
import { glossaryTerms } from "@/lib/glossary-data";

export const metadata: Metadata = {
  title: "Slovníček AI pojmů | Filip Oborník",
  description:
    "Přehledný slovníček pojmů z oblasti umělé inteligence, prompt engineeringu, vibe codingu a AI nástrojů. Srozumitelně vysvětlené definice pro každého.",
  openGraph: {
    title: "Slovníček AI pojmů | Filip Oborník",
    description:
      "Přehledný slovníček pojmů z oblasti umělé inteligence, prompt engineeringu, vibe codingu a AI nástrojů.",
  },
};

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Slovníček AI pojmů",
    description:
      "Přehledný slovníček pojmů z oblasti umělé inteligence, prompt engineeringu, vibe codingu a AI nástrojů.",
    url: "https://filipobornik.cz/slovnicek",
    hasDefinedTerm: glossaryTerms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term,
      description: term.shortDefinition,
      url: `https://filipobornik.cz/slovnicek/${term.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-secondary pt-24 md:pt-32 pb-40 md:pb-52 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="container-narrow mx-auto relative px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <BookOpen size={16} />
              Vzdělávání
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Slovníček AI pojmů<span className="text-primary">.</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl mb-8">
              {glossaryTerms.length}+ pojmů z oblasti umělé inteligence srozumitelně
              vysvětlených. Hledejte, filtrujte a učte se.
            </p>

            <Link
              href="/slovnicek/kviz"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Otestujte se v kvízu
            </Link>
          </div>
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

      {/* Glossary Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <GlossaryGrid terms={glossaryTerms} />
        </div>
      </section>
    </>
  );
}
