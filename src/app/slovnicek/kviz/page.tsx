import { Metadata } from "next";
import QuizGame from "@/components/glossary/QuizGame";
import { glossaryTerms } from "@/lib/glossary-data";

export const metadata: Metadata = {
  title: "Kvíz: Znáte AI pojmy? | Filip Oborník",
  description:
    "Otestujte své znalosti AI pojmů v interaktivním kvízu. 10 otázek z oblasti umělé inteligence, prompt engineeringu a vibe codingu.",
  openGraph: {
    title: "Kvíz: Znáte AI pojmy? | Filip Oborník",
    description:
      "Otestujte své znalosti AI pojmů v interaktivním kvízu. 10 otázek z oblasti umělé inteligence.",
  },
};

export default function QuizPage() {
  return (
    <>
      {/* Dark strip for header navigation visibility */}
      <div className="bg-secondary pt-20 md:pt-24" />

      {/* Quiz Content */}
      <section className="section-padding bg-white flex-1 flex flex-col justify-center">
        <div className="container-narrow mx-auto">
          <QuizGame terms={glossaryTerms} />
        </div>
      </section>
    </>
  );
}
