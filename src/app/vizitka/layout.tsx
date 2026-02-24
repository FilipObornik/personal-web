import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Filip Oborník | COE 2026",
  description:
    "Digitální vizitka Filipa Oborníka - AI & Vibe Coding konzultant @ Czech Online Expo 2026.",
  openGraph: {
    title: "Filip Oborník | COE 2026",
    description: "AI & Vibe Coding konzultant @ Czech Online Expo 2026",
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
