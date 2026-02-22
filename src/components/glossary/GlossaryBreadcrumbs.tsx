import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface GlossaryBreadcrumbsProps {
  termName?: string;
}

export default function GlossaryBreadcrumbs({ termName }: GlossaryBreadcrumbsProps) {
  const items = [
    { name: "Úvod", href: "/" },
    { name: "Slovníček AI pojmů", href: "/slovnicek" },
    ...(termName ? [{ name: termName, href: "" }] : []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `https://filipobornik.cz${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted flex-wrap">
          {items.map((item, index) => (
            <li key={item.name} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight size={14} className="text-muted/40" />}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-secondary font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
