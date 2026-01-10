import {
  GraduationCap,
  Users,
  MessageSquare,
  Cpu,
  Handshake,
  Youtube,
  MessageCircle,
  BookOpen,
  LucideIcon,
} from "lucide-react";

// ============================================
// TYPES
// ============================================

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
}

export interface WhatIDoItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  imageUrl?: string;
}

export interface FreeResource {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  buttonText: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

// ============================================
// DATA - Edit these to update website content
// ============================================

export const siteConfig = {
  name: "Filip Oborník",
  title: "AI & Vibe Coding Expert",
  tagline: "Pomohu vám využít sílu technologií a AI pro vaše projekty",
  description:
    "Semináře, mentoring, konzultace a implementace technických a AI řešení. Naučte se vibe coding a pracujte efektivněji s umělou inteligencí.",
  email: "filip@example.com", // [PLACEHOLDER: Update email]
  linkedin: "https://linkedin.com/in/filipobornik", // [PLACEHOLDER: Update LinkedIn URL]
  calendarUrl: "https://calendar.google.com/calendar/appointments/...", // [PLACEHOLDER: Update calendar URL]
};

export const navigation = [
  { name: "Úvod", href: "#hero" },
  { name: "Zaměření", href: "#co-delam" },
  { name: "Služby", href: "#sluzby" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Vzdělávání", href: "#vzdelavani" },
  { name: "Reference", href: "#reference" },
  { name: "Kontakt", href: "#kontakt" },
];

export const whatIDo: WhatIDoItem[] = [
  {
    title: "Školení & Semináře",
    description: "Workshopy a semináře o AI a vibe codingu.",
    icon: GraduationCap,
    href: "#sluzby",
  },
  {
    title: "1:1 Mentoring",
    description: "Individuální mentoring přizpůsobený vašim potřebám",
    icon: Users,
    href: "#sluzby",
  },
  {
    title: "AI Řešení",
    description: "Implementace a integrace AI do vašich projektů",
    icon: Cpu,
    href: "#sluzby",
  },
  {
    title: "Vzdělávání zdarma",
    description: "YouTube, Discord a další bezplatné zdroje",
    icon: Youtube,
    href: "#vzdelavani",
  },
];

export const services: Service[] = [
  {
    id: "1",
    slug: "seminare",
    title: "Semináře & Workshopy",
    shortDescription:
      "Individuální i skupinová školení na téma AI a vibe coding. Naučím vás pracovat s AI nástroji efektivně a prakticky ať už jste začátečník a nebo potřebujete zapojit AI do profesionálního vývoje software. Přijedu za Vámi nebo se potkáme online.",
    icon: GraduationCap,
  },
  {
    id: "3",
    slug: "konzultace",
    title: "Konzultace",
    shortDescription:
      "Díky své mnohaleté zkušenosti jako vývojář a sofware analytik Vám dokáži poradi s Vašimi technickými výzvami.",
    icon: MessageSquare,
  },
  {
    id: "4",
    slug: "ai-implementace",
    title: "AI Implementace",
    shortDescription:
      "Pomohu vám implementovat AI řešení do vašich procesů a produktů. Od návrhu po realizaci.",
    icon: Cpu,
  },
  {
    id: "2",
    slug: "mentoring",
    title: "Mentoring",
    shortDescription:
      "Individuální nebo skupinový mentoring v oblasti AI a vibe codingu. Pravidelná online nebo osobní setkání přizpůsobené přesně Vašim cílům a tempu. Vhodné pro chvíle, kdy nevíte, kde začít nebo potřebujete co nejefektivnějí přistoupit k Vašemu vzdělávání nebo konkrétním řešením.",
    icon: Users,
  },
  {
    id: "6",
    slug: "partnerske-projekty",
    title: "Software projekty",
    shortDescription:
      "Pro větší projekty vám dokáži poskytnout technické konzultace a v případě potřeby implementace Vás propojím s mými partnery, kteří doručijí komplexní a profesionální softwarová řešení na míru. Ať už s AI nebo bez ní.",
    icon: Handshake,
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "projekt-1",
    title: "[Placeholder] Vibe Coding Demo",
    description:
      "Ukázka projektu vytvořeného pomocí vibe codingu. Popis toho, co projekt dělá a jak byl vytvořen.",
    tags: ["AI", "React", "Next.js"],
    imageUrl: "/images/portfolio/placeholder.jpg",
    demoUrl: "https://example.com",
  },
  {
    id: "2",
    slug: "projekt-2",
    title: "[Placeholder] AI Automatizace",
    description:
      "Automatizační nástroj postavený s pomocí AI. Zrychluje pracovní procesy a šetří čas.",
    tags: ["Automatizace", "Python", "AI"],
    imageUrl: "/images/portfolio/placeholder.jpg",
  },
  {
    id: "3",
    slug: "projekt-3",
    title: "[Placeholder] Webová Aplikace",
    description:
      "Moderní webová aplikace vytvořená s využitím nejnovějších technologií a AI asistence.",
    tags: ["Web", "TypeScript", "Tailwind"],
    imageUrl: "/images/portfolio/placeholder.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "[Placeholder] Jan Novák",
    role: "Developer",
    company: "Tech Company",
    content:
      "Filipův mentoring mi otevřel oči. Naučil jsem se pracovat s AI nástroji způsobem, který mi šetří hodiny práce denně.",
  },
  {
    id: "2",
    name: "[Placeholder] Marie Svobodová",
    role: "Product Manager",
    company: "Startup XYZ",
    content:
      "Seminář o vibe codingu byl skvělý. Praktické ukázky a hands-on přístup - přesně to, co jsme potřebovali.",
  },
  {
    id: "3",
    name: "[Placeholder] Petr Dvořák",
    role: "Freelancer",
    content:
      "Díky konzultacím s Filipem jsem dokázal implementovat AI do svého workflow. Produktivita šla nahoru.",
  },
];

export const freeResources: FreeResource[] = [
  {
    title: "YouTube",
    description:
      "Vzdělávací video o AI, vibe codingu a technologiích. Vibe coding, praktické návody i trocha filozofování o AI.",
    icon: Youtube,
    url: "https://youtube.com/@placeholder", // [PLACEHOLDER: Update URL]
    buttonText: "Odebírat kanál",
  },
  {
    title: "Discord Komunita",
    description:
      "Připojte se k naší komunitě. Sdílíme zkušenosti, inspirujeme se, pomáháme si a diskutujeme o AI.",
    icon: MessageCircle,
    url: "https://discord.gg/placeholder", // [PLACEHOLDER: Update URL]
    buttonText: "Připojit se",
  },
  {
    title: "AI s Rozumem Akademie",
    description:
      "Komplexní online kurzy a vzdělávací materiály o AI a vibe codingu. Učte se vlastním tempem krok za krokem.",
    icon: BookOpen,
    url: "https://akademie.aisrozumem.cz",
    buttonText: "Vstoupit do akademie",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    url: "https://youtube.com/@placeholder", // [PLACEHOLDER: Update URL]
    icon: Youtube,
  },
  {
    name: "Discord",
    url: "https://discord.gg/placeholder", // [PLACEHOLDER: Update URL]
    icon: MessageCircle,
  },
];
