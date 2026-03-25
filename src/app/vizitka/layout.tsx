import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Filip Oborník | DAMI síťovka",
  description:
    "Digitální vizitka Filipa Oborníka - AI & Vibe Coding konzultant @ DAMI síťovka.",
  openGraph: {
    title: "Filip Oborník | DAMI síťovka",
    description: "AI & Vibe Coding konzultant @ DAMI síťovka",
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
