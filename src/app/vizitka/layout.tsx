import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Vizitka | Filip Oborník",
  description:
    "Kontaktní karta Filipa Oborníka - AI & Vibe Coding konzultant. Semináře, mentoring a konzultace.",
  openGraph: {
    title: "Filip Oborník - Vizitka",
    description: "AI & Vibe Coding konzultant - Semináře, mentoring, konzultace",
    type: "profile",
  },
  robots: {
    index: false, // Nechceme indexovat vizitku
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function VizitkaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
