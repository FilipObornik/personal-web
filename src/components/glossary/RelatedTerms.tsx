import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type GlossaryTerm, glossaryCategories } from "@/lib/glossary-data";

interface RelatedTermsProps {
  terms: GlossaryTerm[];
}

export default function RelatedTerms({ terms }: RelatedTermsProps) {
  if (terms.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-secondary mb-6">
        Související pojmy<span className="text-primary">.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {terms.map((term) => {
          const category = glossaryCategories.find((c) => c.id === term.category);
          return (
            <Link
              key={term.slug}
              href={`/slovnicek/${term.slug}`}
              className="group bg-white rounded-2xl p-5 border border-gray-100/50 shadow-[0_4px_15px_rgb(0,0,0,0.04)] hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {category && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium mb-2">
                  <category.icon size={10} />
                  {category.label}
                </span>
              )}
              <h3 className="font-bold text-secondary group-hover:text-primary transition-colors mb-1">
                {term.term}
              </h3>
              <p className="text-muted text-sm line-clamp-2 mb-3">
                {term.shortDefinition}
              </p>
              <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                Zjistit více
                <ArrowRight size={14} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
