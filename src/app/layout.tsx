import type { Metadata } from "next";
import { Inter, SUSE } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-TQ6MVCK2";

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${suse.variable} antialiased font-sans`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
