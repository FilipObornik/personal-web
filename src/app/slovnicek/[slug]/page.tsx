import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GlossaryBreadcrumbs from "@/components/glossary/GlossaryBreadcrumbs";
import RelatedTerms from "@/components/glossary/RelatedTerms";
import GlossaryCTA from "@/components/glossary/GlossaryCTA";
import {
  glossaryTerms,
  getGlossaryTermBySlug,
  getRelatedTerms,
  glossaryCategories,
} from "@/lib/glossary-data";

interface TermPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return glossaryTerms
    .filter((t) => t.slug !== "kviz")
    .map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: TermPageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  if (!term) {
    return { title: "Pojem nenalezen | Filip Oborník" };
  }

  const title = `Co je ${term.term} | Filip Oborník`;
  const description = term.shortDefinition;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function TermPage({ params }: TermPageProps) {
  const { slug } = await params;

  // Guard: "kviz" slug is reserved
  if (slug === "kviz") {
    notFound();
  }

  const term = getGlossaryTermBySlug(slug);

  if (!term) {
    notFound();
  }

  const relatedTerms = getRelatedTerms(term);
  const category = glossaryCategories.find((c) => c.id === term.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.shortDefinition,
    url: `https://filipobornik.cz/slovnicek/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Slovníček AI pojmů",
      url: "https://filipobornik.cz/slovnicek",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-secondary pt-24 md:pt-32 pb-32 md:pb-36 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="container-narrow mx-auto relative px-4 md:px-8">
          {/* Back link */}
          <Link
            href="/slovnicek"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Zpět na slovníček</span>
          </Link>

          <div>
            {/* Category badge */}
            {category && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-primary rounded-full text-sm font-medium mb-4">
                <category.icon size={14} />
                {category.label}
              </span>
            )}

            {/* Term name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
              {term.term}
              <span className="text-primary">.</span>
            </h1>

            {/* English name */}
            {term.termEn && (
              <p className="text-white/40 text-lg md:text-xl">{term.termEn}</p>
            )}
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

      {/* Content */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="container-narrow mx-auto max-w-3xl">
          <GlossaryBreadcrumbs termName={term.term} />

          {/* Short definition callout */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-8">
            <div className="flex items-start gap-4">
              {category && (
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <category.icon className="text-primary" size={20} />
                </div>
              )}
              <p className="text-secondary font-medium text-lg leading-relaxed">
                {term.shortDefinition}
              </p>
            </div>
          </div>

          {/* Full description */}
          <div className="prose prose-lg max-w-none text-secondary/80 leading-relaxed">
            {term.fullDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* YouTube Videos */}
          {term.youtubeVideos.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Videa k tématu<span className="text-primary">.</span>
              </h2>
              <div className="space-y-4">
                {term.youtubeVideos.map((video) => (
                  <div
                    key={video.id}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      width="100%"
                      className="aspect-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <GlossaryCTA
            style={term.ctaStyle}
            relatedServiceSlugs={term.relatedServiceSlugs}
          />

          {/* Related Terms */}
          <RelatedTerms terms={relatedTerms} />
        </div>
      </section>
    </>
  );
}
