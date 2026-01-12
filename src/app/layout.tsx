import type { Metadata } from "next";
import { Inter, SUSE } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://filipobornik.cz"),
  title: "Filip Oborník | AI, Vibe Coding a technologie",
  description:
    "Pomohu vám s AI a vibe codingem. Semináře, mentoring, konzultace a implementace AI řešení.",
  keywords: [
    "Filip Oborník",
    "AI",
    "vibe coding",
    "mentoring",
    "konzultace",
    "semináře",
  ],
  authors: [{ name: "Filip Oborník" }],
  openGraph: {
    title: "Filip Oborník | AI, Vibe Coding a technologie",
    description:
      "Pomohu vám s AI a vibe codingem. Semináře, mentoring, konzultace a implementace AI řešení.",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "Filip Oborník - AI, Vibe Coding a technologie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Filip Oborník | AI, Vibe Coding a technologie",
    description:
      "Pomohu vám s AI a vibe codingem. Semináře, mentoring, konzultace a implementace AI řešení.",
    images: ["/images/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} ${suse.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
