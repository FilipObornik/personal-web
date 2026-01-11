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
  Sparkles,
  Code2,
  Building2,
  Globe,
  Monitor,
  UserCheck,
  School,
  Presentation,
  Briefcase,
  Video,
  Laptop,
  Bot,
  Workflow,
  Lightbulb,
  Rocket,
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

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  featuredImageUrl?: string;
  year: string;
  featured?: boolean;
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

export interface WorkshopTopic {
  title: string;
  description: string;
  forWhom: string;
  icon: LucideIcon;
  tools: string[];
}

export interface WorkshopFormat {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ToolCategory {
  name: string;
  tools: string[];
}

export interface WorkshopTestimonial {
  id: string;
  name: string;
  content: string;
  workshopType: string;
  details: string;
}

export interface ExperienceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export interface CareerItem {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  dateRange: string;
  description: string;
  highlights?: string[];
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
  email: "info@filipobornik.cz",
  linkedin: "https://linkedin.com/in/obornik",
  calendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_9GuxtdMSenskvP4AMBfLJYelAMs5W1wa3vJ_EnwKSMLsxWzxzV5NTweVMhNXj-nU1HPmKFD9?gv=true",
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
    slug: "webinare-a-workshopy",
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
      "Menší projekty realizujeme společně a pro větší projekty vám dokáži poskytnout technické konzultace a v případě potřeby implementace Vás propojím s mými partnery, kteří doručijí komplexní a profesionální softwarová řešení na míru. Ať už s AI nebo bez ní.",
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

// ============================================
// PROJECTS DATA
// ============================================

export const projectItems: ProjectItem[] = [
  {
    slug: "takdy",
    title: "Takdy.cz",
    description:
      "Bezplatná aplikace pro snadné plánování společných setkání. Jako Doodle, ale jednodušší a bez registrace.",
    tags: ["Vibe Coding", "Next.js", "Supabase"],
    imageUrl: "/images/portfolio/takdy/takdy_promo.png",
    featuredImageUrl: "/images/portfolio/takdy/takdy_landing.png",
    year: "2026",
    featured: true,
    demoUrl: "https://takdy.cz",
  },
  // {
  //   slug: "timetracking",
  //   title: "AI Time Tracking",
  //   description:
  //     "Chytrý nástroj pro sledování času s AI funkcemi pro automatickou kategorizaci.",
  //   tags: ["Web App", "AI", "Produktivita"],
  //   imageUrl: "/images/portfolio/timetracking.jpg",
  //   year: "2024",
  //   featured: true,
  //   demoUrl: "https://timetracking.aisrozumem.cz",
  // },
  {
    slug: "osobni-web",
    title: "Osobní web",
    description:
      "Tato webová stránka - vytvořena kompletně pomocí vibe codingu s Claude Code.",
    tags: ["Vibe Coding", "Next.js", "TypeScript"],
    imageUrl: "/images/portfolio/portfolio/portfolio_landing.png",
    year: "2026a",
    featured: true,
  },
  {
    slug: "tymbe",
    title: "Tymbe",
    description:
      "Mobilní aplikace pro flexibilní brigády. Ukázka mých technických zkušeností ve vedení vývojového týmu a doručení produktu - bez AI.",
    tags: ["Team Lead", "Flutter", "Mobile App", "Product Delivery"],
    imageUrl: "/images/portfolio/tymbe/promo_banner.png",
    year: "2024",
    featured: true,
    demoUrl: "https://tymbe.cz",
  },
];

// Helper functions for projects
export function getAllProjectTags(): string[] {
  const tags = new Set<string>();
  projectItems.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectItems.find((p) => p.slug === slug);
}

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
    title: "Akademie AI s Rozumem",
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

// ============================================
// WORKSHOP & SEMINARS DATA
// ============================================

export const workshopTopics: WorkshopTopic[] = [
  {
    title: "AI pro každého",
    description:
      "Základy využití AI v práci a podnikání. Naučte se efektivně pracovat s chatovacími asistenty jako ChatGPT, Gemini, Claude a dalšími. Praktické tipy, prompting techniky a reálné use-casy pro každodenní práci.",
    forWhom: "Podnikatelé, manažeři, studenti, široká veřejnost, ...",
    icon: Sparkles,
    tools: ["ChatGPT", "Claude", "Gemini", "..."],
  },
  {
    title: "Weby pomocí AI",
    description:
      "Tvorba jednoduchých webových prezentací a landing pages pro marketingové účely bez znalosti programování. Vytvořte si profesionální web během hodin, ne týdnů.",
    forWhom: "Podnikatelé, markeťáci, kreativci, produkťáci, ...",
    icon: Globe,
    tools: ["AI Studio", "Claude Code", "Cursor", "..."],
  },
  {
    title: "Vibe Coding",
    description:
      "Tvorba komplexnějšího software pomocí vibe codingu bez znalosti programování. Interní nástroje, automatizace, aplikace - vše pomocí přirozeného jazyka a AI asistentů.",
    forWhom: "Neprogramátoři, podnikatelé, produktoví manažeři, ...",
    icon: Code2,
    tools: ["Claude Code", "Cursor", "Lovable", "Maily", "..."],
  },
  {
    title: "AI v profesionálním vývoji",
    description:
      "Nasazení AI do vývojového procesu. Efektivnější vývoj, code reviews, debugging, refactoring a best practices pro maximální produktivitu vývojářských týmů.",
    forWhom: "Vývojáři, tech leads, ...",
    icon: Cpu,
    tools: ["Cursor", "Claude Code", "CI/CD", "..."],
  },
];

export const workshopFormats: WorkshopFormat[] = [
  {
    title: "Online webináře",
    description: "Živé online workshopy v malých skupinách. Interaktivní formát s prostorem pro dotazy a praktická cvičení.",
    icon: Monitor,
  },
  {
    title: "Firemní školení",
    description: "Přijedu přímo k vám do firmy. Školení přizpůsobené vašim konkrétním potřebám a nástrojům.",
    icon: Building2,
  },
  {
    title: "Mentoring",
    description: "1:1 formát pro maximální efektivitu. Řešíme přesně vaše výzvy a potřeby.",
    icon: UserCheck,
  },
];

export const workshopExperience: ExperienceItem[] = [
  {
    icon: Presentation,
    title: "AI univerzita",
    description: "Ambasador a lektor vibe coding workshopů",
    link: "http://aiuniverzita.cz/",
  },
  {
    icon: Briefcase,
    title: "Firemní přednášky",
    description: "Školení o AI v software developmentu pro české firmy",
  },
  {
    icon: Video,
    title: "Online vzdělávání",
    description: "Webináře a online kurzy o praktickém využití AI nástrojů",
  },
  {
    icon: School,
    title: "Univerzitní lektor",
    description: "2 semestry výuky vývoje Android aplikací na vysoké škole",
    link: "https://www.uhk.cz/",
  },
];

export const workshopTools: ToolCategory[] = [
  {
    name: "AI Asistenti",
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "NotebookLM"],
  },
  {
    name: "Vibe coding nástroje",
    tools: ["Lovable", "Macaly"],
  },
  {
    name: "Coding AI agenti",
    tools: ["Cursor", "Claude Code", "Open Code", "v0.dev"],
  },
  {
    name: "Ostatní",
    tools: ["n8n", "Generování obrázků", "Generování videí"],
  },
];

export const workshopTestimonials: WorkshopTestimonial[] = [
  {
    id: "w1",
    name: "Účastník kurzu",
    content:
      "jsem rád, že kurz zahrnul velkou část oboru AI abych si dokázal představit její využití v praxi.",
    workshopType: "Online kurz",
    details: "Zorientujte se ve světě umělé inteligence",
  },
  {
    id: "w3",
    name: "YouTube divák",
    content:
      "Super vysvětluješ, hlavně v pohodě, seš svuj a to je dnes asi jedinečný. Každý má títulky ve smyslu heeeej to je šílenýýý a nevím co ještě, je to přepálený. Tvá videa, projev, všechno ja ne jedničku s hvězdičkou, samozřejmě i témata :) Hodně štěstí a doufám že budeš mít více videí :) Klobou dolů a díky.",
    workshopType: "YouTube video",
    details: "AI a robotizace",
  },
  {
    id: "w2",
    name: "Vývojář",
    content:
      "Za me super uvod do problematiky pouzivani AI pri programovani. Delka i forma super, primerene mnozstvi informaci i zdroju.",
    workshopType: "Online školení",
    details: "AI v profesionálním vývoji",
  },

];

export const externalLinks = {
  aiUniversita: "https://aiuniversita.cz", // [PLACEHOLDER: Update URL]
  youtubeChannel: "https://youtube.com/@placeholder", // [PLACEHOLDER: Update URL]
  academy: "https://akademie.aisrozumem.cz",
  calendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_9GuxtdMSenskvP4AMBfLJYelAMs5W1wa3vJ_EnwKSMLsxWzxzV5NTweVMhNXj-nU1HPmKFD9?gv=true",
};

// ============================================
// CAREER HISTORY DATA
// ============================================

export const careerHistory: CareerItem[] = [
  {
    title: "AI & Vibe Coding konzultant",
    company: "filipobornik.cz",
    companyUrl: "https://filipobornik.cz",
    dateRange: "2025 - současnost",
    description: "Semináře, workshopy a mentoring v oblasti AI a vibe codingu. Pomáhám firmám i jednotlivcům efektivně využívat AI nástroje a tvořit software pomocí přirozeného jazyka.",
    highlights: ["Školení", "Mentoring", "AI implementace"],
  },
  {
    title: "Tvůrce edukačního obsahu o AI",
    company: "AI s rozumem",
    companyUrl: "https://aisrozumem.cz",
    dateRange: "2025 - současnost",
    description: "YouTube, Discord komunita a online kurzy. Průvodce světem umělé inteligence - v klidu a hlavně s rozumem.",
    highlights: ["YouTube", "Discord", "Online kurzy"],
  },
  {
    title: "Team leader, Flutter developer",
    company: "Tymbe, a.s.",
    companyUrl: "https://tymbe.cz",
    dateRange: "2023 - současnost",
    description: "Vedení Flutter týmu při vývoji mobilní aplikace Tymbe. Zodpovědnost za produktové otázky a tvorbu návrhu softwarového řešení.",
    highlights: ["Flutter", "Team lead", "Product"],
  },
  {
    title: "Co-founder, CTO",
    company: "nevr.app",
    companyUrl: "https://nevr.app/",
    dateRange: "2023 - současnost",
    description: "Creative studio zaměřené na vývoj mobilních a webových aplikací.",
    highlights: ["Startup", "Mobile apps", "Web development"],
  },
  {
    title: "Konzultant",
    company: "Na volné noze",
    dateRange: "2023 - současnost",
    description: "Konzultace v oblastech AI integrace, Flutter, Android, team leading, produkt a SW analýza.",
    highlights: ["AI integrace", "Flutter", "Android", "Team leading", "SW analýza"],
  },
  {
    title: "Konzultant (dříve Android vývojář, team lead, SW analytik)",
    company: "DAMI development s.r.o.",
    companyUrl: "https://damidev.cz",
    location: "Hradec Králové",
    dateRange: "2018 - 2025",
    description: "Vývoj nativních mobilních aplikací pro Android, práce jako grafik a analytik. Široký rozhled nad celkovým procesem vývoje aplikací.",
    highlights: ["Android", "Kotlin", "Software analýza", "Team lead"],
  },
  {
    title: "Instructor, vyučující",
    company: "Univerzita Hradec Králové",
    companyUrl: "https://uhk.cz",
    location: "Hradec Králové",
    dateRange: "2023 - 2024",
    description: "Tvorba materiálů a výuka předmětu Úvod do mobilních technologií na FIM UHK. Výuka zaměřená na Jetpack Compose, Kotlin, MVVM a MVI architekturu.",
    highlights: ["Android", "Výuka", "Jetpack Compose"],
  },
  {
    title: "Co-founder, backend developer",
    company: "Around Us - šipkovaná 21. století",
    dateRange: "2020 - 2022",
    description: "Šipkovaná 21. století - dobrodružná hra v přírodě. Objev zajímavá místa v ČR prostřednictvím úkolů prověřujících intelekt, kondici i odvahu.",
    companyUrl: "https://aroundus.filipobornik.cz/",
    highlights: ["Startup", "Gamifikace", "Full-stack"],
  },
  {
    title: "Stážista",
    company: "IHMC",
    companyUrl: "https://ihmc.us",
    location: "Florida, USA",
    dateRange: "2021",
    description: "Stáž v prestižním výzkumném institutu. Práce s Docker, Hadoop a NodeJS.",
    highlights: ["Docker", "Hadoop", "NodeJS"],
  },
  {
    title: "Android vývojář",
    company: "SABO Mobile IT GmbH",
    companyUrl: "https://saboit.de",
    location: "Praha",
    dateRange: "2019",
    description: "Vývoj Android aplikací pro německou společnost specializující se na mobilní IT řešení.",
    highlights: ["Android", "Kotlin"],
  },
];

export const education: CareerItem[] = [
  {
    title: "Bakalářské studium - Aplikovaná informatika",
    company: "Univerzita Hradec Králové",
    companyUrl: "https://uhk.cz",
    dateRange: "2019 - 2023",
    description: "Bakalářská práce: Bezpečnost Android aplikací z pohledu vývojáře.",
  },
  {
    title: "Střední škola - Programování a hardware",
    company: "SPŠE Pardubice",
    dateRange: "2015 - 2019",
    description: "Střední průmyslová škola elektrotechnická s výukou programování.",
  },
];
