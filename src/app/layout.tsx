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
  title: "Filip Oborník | AI & Vibe Coding Expert",
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
    title: "Filip Oborník | AI & Vibe Coding Expert",
    description:
      "Pomohu vám s AI a vibe codingem. Semináře, mentoring, konzultace a implementace AI řešení.",
    locale: "cs_CZ",
    type: "website",
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
