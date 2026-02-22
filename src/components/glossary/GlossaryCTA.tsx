import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

interface GlossaryCTAProps {
  style: "subtle" | "prominent";
  relatedServiceSlugs: string[];
}

export default function GlossaryCTA({ style, relatedServiceSlugs }: GlossaryCTAProps) {
  const relatedServices = services.filter((s) =>
    relatedServiceSlugs.includes(s.slug)
  );

  if (style === "subtle") {
    return (
      <div className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-muted text-sm mb-3">
          Chcete se dozvědět více? Podívejte se na mé služby.
        </p>
        <div className="flex flex-wrap gap-3">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              href={`/sluzby/${service.slug}`}
              className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all"
            >
              {service.title}
              <ArrowRight size={14} />
            </Link>
          ))}
          {relatedServices.length === 0 && (
            <Link
              href="/#sluzby"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all"
            >
              Prohlédnout služby
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-bold text-white mb-3">
        Chcete toto téma řešit v praxi<span className="text-primary">?</span>
      </h3>
      <p className="text-white/70 text-sm mb-6">
        Pomohu vám s implementací, školením nebo konzultací. Vyberte si, co vám vyhovuje.
      </p>
      <div className="flex flex-wrap gap-3">
        {relatedServices.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.slug}
              href={`/sluzby/${service.slug}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
            >
              <Icon size={16} />
              {service.title}
            </Link>
          );
        })}
        <Link
          href="/#kontakt"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors border border-white/20"
        >
          Kontaktujte mě
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
