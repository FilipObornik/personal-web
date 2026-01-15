"use client";

import Image from "next/image";
import { CheckCircle, Users, BookOpen, Sparkles, ArrowRight, TrendingUp, Zap } from "lucide-react";

// Barvy z projektu
const primaryColor = "#E88F31"; // orange
const primaryDark = "#D17A1C";
const secondaryColor = "#05121F"; // deep blue
const secondaryLight = "#0A1F33";

// ============================================
// BANNER 1:1 (1080x1080) - Feed
// ============================================
function SquareBanner() {
  return (
    <div
      className="relative overflow-hidden font-sans"
      style={{
        width: "1080px",
        height: "1080px",
        background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryLight} 50%, ${secondaryColor} 100%)`
      }}
    >
      {/* Dekorativní prvky */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: `${primaryColor}25` }}
      />

      {/* Hlavní obsah */}
      <div className="relative z-20 h-full flex flex-col p-14">

        {/* Badge */}
        <div className="mb-6">
          <span
            className="inline-block text-white px-8 py-4 rounded-full text-4xl font-bold"
            style={{ background: primaryColor }}
          >
            -50% SLEVA
          </span>
        </div>

        {/* Hlavní nadpis - emocionální otázka */}
        <h1
          className="text-[5rem] font-bold text-white leading-[1.05] mb-5"
          style={{ fontFamily: 'var(--font-suse), system-ui, sans-serif' }}
        >
          Ztrácíte se ve světě<br />
          <span style={{ color: primaryColor }}>umělé inteligence?</span>
        </h1>

        {/* Emocionální copy */}
        <p className="text-[2.2rem] text-gray-300 mb-6 leading-snug max-w-[750px]">
          AI se vyvíjí <span className="text-white font-semibold">obrovskou rychlostí</span>.
          Zorientujte se a zjistěte, co všechno dnes dokáže.
        </p>

        {/* Co získáte - 2x2 grid */}
        <div className="grid grid-cols-2 gap-5">
          {[
            "ChatGPT a alternativy",
            "Generování obrázků & videí",
            "AI agenti a automatizace",
            "Budoucnost AI"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <CheckCircle className="w-10 h-10 flex-shrink-0" style={{ color: primaryColor }} />
              <span className="text-white text-[1.9rem] font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Spodní část - Cena vlevo */}
        <div className="flex items-end pb-4">
          {/* Levá strana - Cena a CTA */}
          <div>
            {/* Stats */}
            <div className="flex items-center gap-8 mb-5">
              <span className="flex items-center gap-3 text-gray-300 text-[1.7rem]">
                <Users className="w-8 h-8" style={{ color: primaryColor }} />
                <span className="font-semibold">184+</span> studentů
              </span>
              <span className="flex items-center gap-3 text-gray-300 text-[1.7rem]">
                <BookOpen className="w-8 h-8" style={{ color: primaryColor }} />
                <span className="font-semibold">24</span> lekcí
              </span>
            </div>

            {/* Cena */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-gray-500 line-through text-4xl">399 Kč</span>
              <span className="text-8xl font-bold" style={{ color: primaryColor }}>199 Kč</span>
            </div>

            {/* CTA */}
            <div
              className="text-white px-12 py-6 rounded-2xl text-4xl font-bold inline-flex items-center gap-4"
              style={{ background: primaryColor }}
            >
              KOUPIT NYNÍ
              <ArrowRight className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient pro čitelnost textu - přes celou šířku od spodu */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] z-10"
        style={{ background: 'linear-gradient(to top, rgba(5,18,31,1) 0%, rgba(5,18,31,0.85) 40%, transparent 100%)' }}
      />

      {/* Fotka v pravém dolním rohu - oříznutá spodní třetina */}
      <div className="absolute bottom-0 -right-16 w-[620px] h-[580px] overflow-hidden z-5">
        <Image
          src="/images/portrait.png"
          alt="Filip Oborník"
          width={620}
          height={870}
          className="object-cover object-top w-full"
        />
      </div>

      {/* Jméno a pozice přes fotku */}
      <div
        className="absolute bottom-4 right-6 text-right z-30"
      >
        <p className="text-white font-bold text-4xl mb-1">Filip Oborník</p>
        <p style={{ color: primaryColor }} className="text-2xl font-medium">Autor projektu AI s rozumem</p>
      </div>
    </div>
  );
}

// ============================================
// BANNER 9:16 (1080x1920) - Stories/Reels
// ============================================
function StoryBanner() {
  return (
    <div
      className="relative overflow-hidden font-sans"
      style={{
        width: "1080px",
        height: "1920px",
        background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryLight} 50%, ${secondaryColor} 100%)`
      }}
    >
      {/* Dekorativní prvky */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{ background: `${primaryColor}25` }}
      />

      {/* Hlavní obsah */}
      <div className="relative z-20 h-full flex flex-col pt-[225px] px-14 pb-14">

        {/* Badge */}
        <div className="mb-12">
          <span
            className="inline-block text-white px-10 py-5 rounded-full text-5xl font-bold"
            style={{ background: primaryColor }}
          >
            -50% SLEVA
          </span>
        </div>

        {/* Hlavní nadpis - emocionální otázka */}
        <h1
          className="text-[6.5rem] font-bold text-white leading-[1.05] mb-10"
          style={{ fontFamily: 'var(--font-suse), system-ui, sans-serif' }}
        >
          Ztrácíte se ve světě<br />
          <span style={{ color: primaryColor }}>umělé inteligence?</span>
        </h1>

        {/* Emocionální copy */}
        <p className="text-[2.8rem] text-gray-300 mb-10 leading-snug max-w-[900px]">
          AI se vyvíjí <span className="text-white font-semibold">obrovskou rychlostí</span>.
          Zorientujte se a zjistěte, co všechno dnes dokáže.
        </p>

        {/* Co získáte - seznam */}
        <div className="space-y-6 mb-10">
          {[
            "ChatGPT a alternativy",
            "Generování obrázků & videí",
            "AI agenti a automatizace",
            "Budoucnost AI"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5">
              <CheckCircle className="w-14 h-14 flex-shrink-0" style={{ color: primaryColor }} />
              <span className="text-white text-[2.5rem] font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-4 mb-8">
          <span className="flex items-center gap-4 text-gray-300 text-[2.2rem]">
            <Users className="w-12 h-12" style={{ color: primaryColor }} />
            <span className="font-semibold">184+</span> studentů
          </span>
          <span className="flex items-center gap-4 text-gray-300 text-[2.2rem]">
            <BookOpen className="w-12 h-12" style={{ color: primaryColor }} />
            <span className="font-semibold">24</span> lekcí
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Spodní část - Cena a CTA vlevo */}
        <div className="pb-6">
          {/* Cena */}
          <div className="mb-8">
            <span className="text-gray-500 line-through text-4xl block mb-2">399 Kč</span>
            <span className="text-[7rem] font-bold" style={{ color: primaryColor }}>199 Kč</span>
          </div>

          {/* CTA */}
          <div
            className="text-white px-16 py-8 rounded-2xl text-5xl font-bold inline-flex items-center gap-5"
            style={{ background: primaryColor }}
          >
            KOUPIT NYNÍ
            <ArrowRight className="w-14 h-14" />
          </div>
        </div>
      </div>

      {/* Gradient pro čitelnost textu - přes celou šířku od spodu */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[450px] z-10"
        style={{ background: 'linear-gradient(to top, rgba(5,18,31,1) 0%, rgba(5,18,31,0.85) 40%, transparent 100%)' }}
      />

      {/* Fotka v pravém dolním rohu - oříznutá spodní třetina */}
      <div className="absolute bottom-0 -right-56 w-[950px] h-[1230px] overflow-hidden z-5">
        <Image
          src="/images/portrait.png"
          alt="Filip Oborník"
          width={950}
          height={1425}
          className="object-cover object-top w-full"
        />
      </div>

      {/* Jméno a pozice přes fotku */}
      <div className="absolute bottom-[56px] right-8 text-right z-30">
        <p className="text-white font-bold text-5xl mb-2">Filip Oborník</p>
        <p style={{ color: primaryColor }} className="text-3xl font-medium">Autor projektu AI s rozumem</p>
      </div>
    </div>
  );
}

// ============================================
// BANNER 9:16 Alt - Emocionální verze
// ============================================
function StoryBannerAlt() {
  return (
    <div
      className="relative overflow-hidden font-sans"
      style={{
        width: "1080px",
        height: "1920px",
        background: `linear-gradient(180deg, ${secondaryColor} 0%, ${secondaryLight} 100%)`
      }}
    >
      {/* Velký gradient efekt */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px]"
        style={{ background: `linear-gradient(180deg, ${primaryColor}30 0%, transparent 100%)` }}
      />

      {/* Hlavní obsah */}
      <div className="relative z-10 h-full flex flex-col p-14">

        {/* Emocionální hook nahoře */}
        <div className="text-center pt-12 mb-12">
          <h2
            className="text-6xl text-white font-light mb-4"
            style={{ fontFamily: 'var(--font-suse), system-ui, sans-serif' }}
          >
            Cítíte, že vám
          </h2>
          <h1
            className="text-[7rem] font-bold leading-none"
            style={{ fontFamily: 'var(--font-suse), system-ui, sans-serif' }}
          >
            <span className="text-white">AI </span>
            <span style={{ color: primaryColor }}>ujíždí?</span>
          </h1>
        </div>

        {/* Velká profilová fotka */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-[80px] scale-150"
              style={{ background: `${primaryColor}40` }}
            />
            <div
              className="relative w-[400px] h-[400px] rounded-full overflow-hidden"
              style={{ border: `10px solid ${primaryColor}` }}
            >
              <Image
                src="/images/portrait.png"
                alt="Filip Oborník"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white px-10 py-4 rounded-full text-3xl font-bold whitespace-nowrap"
              style={{ background: primaryColor }}
            >
              Filip Oborník
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center mb-12">
          <p className="text-5xl text-white leading-relaxed mb-6">
            Pomohu vám <span style={{ color: primaryColor }} className="font-bold">zorientovat se</span><br />
            ve světě umělé inteligence
          </p>
          <p className="text-3xl text-gray-400">
            24 lekcí • 184+ spokojených studentů
          </p>
        </div>

        {/* Cena box */}
        <div
          className="rounded-3xl p-10 mb-8"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
        >
          <div className="flex items-center justify-center gap-8 mb-4">
            <span className="text-gray-400 line-through text-5xl">399 Kč</span>
            <span className="text-9xl font-bold" style={{ color: primaryColor }}>199 Kč</span>
          </div>
          <p className="text-center text-3xl text-white">
            Ušetřete <span style={{ color: primaryColor }} className="font-bold">50%</span> – pouze dnes!
          </p>
        </div>

        {/* CTA */}
        <div
          className="text-white py-7 rounded-2xl text-5xl font-bold text-center flex items-center justify-center gap-5"
          style={{ background: primaryColor, boxShadow: `0 10px 40px ${primaryColor}50` }}
        >
          CHCI SE ZORIENTOVAT
          <ArrowRight className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}

// ============================================
// BANNER 1.91:1 (1200x628) - Landscape
// ============================================
function LandscapeBanner() {
  return (
    <div
      className="relative overflow-hidden font-sans"
      style={{
        width: "1200px",
        height: "628px",
        background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryLight} 100%)`
      }}
    >
      {/* Dekorativní prvky */}
      <div
        className="absolute -top-20 right-40 w-72 h-72 rounded-full blur-[80px]"
        style={{ background: `${primaryColor}40` }}
      />

      {/* Hlavní obsah */}
      <div className="relative z-10 h-full flex p-10">

        {/* Levá část - Fotka */}
        <div className="flex items-center justify-center pr-10">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-3xl scale-125"
              style={{ background: `${primaryColor}30` }}
            />
            <div
              className="relative w-56 h-56 rounded-full overflow-hidden flex-shrink-0"
              style={{ border: `6px solid ${primaryColor}` }}
            >
              <Image
                src="/images/portrait.png"
                alt="Filip Oborník"
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Střední část - Obsah */}
        <div className="flex-1 flex flex-col justify-between py-2">
          {/* Badge + nadpis */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-white px-5 py-2 rounded-full text-xl font-bold"
                style={{ background: primaryColor }}
              >
                -50% SLEVA
              </span>
              <span className="text-gray-400 text-lg">Online kurz</span>
            </div>

            <h1
              className="text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-suse), system-ui, sans-serif' }}
            >
              Zorientujte se ve světě<br />
              <span style={{ color: primaryColor }}>umělé inteligence</span>
            </h1>
          </div>

          {/* Body */}
          <div className="flex gap-8">
            {[
              { icon: BookOpen, text: "24 lekcí" },
              { icon: Sparkles, text: "ChatGPT a další" },
              { icon: Zap, text: "Generativní AI" },
              { icon: Users, text: "184+ studentů" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-6 h-6" style={{ color: primaryColor }} />
                <span className="text-white text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Jméno + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-2xl">Filip Oborník</p>
              <p className="text-gray-400">AI & Vibe Coding konzultant</p>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right">
                <span className="text-gray-500 line-through text-2xl block">399 Kč</span>
                <span className="text-5xl font-bold" style={{ color: primaryColor }}>199 Kč</span>
              </div>
              <div
                className="text-white px-8 py-4 rounded-xl text-2xl font-bold flex items-center gap-3"
                style={{ background: primaryColor }}
              >
                KOUPIT
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// NÁHLED KOMPONENTA - responzivní zobrazení
// ============================================
function BannerPreview({
  children,
  title,
  dimensions,
  number,
  aspectRatio = "1/1"
}: {
  children: React.ReactNode;
  title: string;
  dimensions: string;
  number: number;
  aspectRatio?: string;
}) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span
          className="text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
          style={{ background: primaryColor }}
        >
          {number}
        </span>
        {title} <span className="text-gray-500 font-normal">({dimensions})</span>
      </h2>

      {/* Responzivní kontejner - banner se vejde na obrazovku */}
      <div
        className="rounded-2xl"
        style={{ background: secondaryLight, overflow: 'visible' }}
      >
        <div
          className="flex items-center justify-center rounded-2xl"
          style={{
            height: aspectRatio === "9/16" ? '750px' : aspectRatio === "1.91/1" ? '400px' : '430px'
          }}
        >
          <div style={{
            transform: aspectRatio === "9/16" ? 'scale(0.35)' : aspectRatio === "1.91/1" ? 'scale(0.55)' : 'scale(0.36)',
            transformOrigin: 'center center'
          }}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// HLAVNÍ STRÁNKA
// ============================================
export default function AdsPage() {
  return (
    <div
      className="min-h-screen py-16"
      style={{ background: secondaryColor }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className="rounded-2xl p-8 mb-12"
          style={{ background: secondaryLight, border: `1px solid ${secondaryLight}` }}
        >
          <h1
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-suse), system-ui, sans-serif' }}
          >
            Reklamní banery
          </h1>
          <p className="text-gray-300 mb-4 text-lg">
            Kurz: <strong style={{ color: primaryColor }}>Zorientujte se ve světě umělé inteligence</strong>
          </p>
          <p className="text-gray-400 mb-6">
            Pro export: Použijte screenshot nástroj (CleanShot, Snagit) nebo otevřete banner v novém okně a uložte.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-lg text-gray-300" style={{ background: secondaryColor }}>
              1080×1080 px (1:1) - Feed
            </span>
            <span className="px-4 py-2 rounded-lg text-gray-300" style={{ background: secondaryColor }}>
              1080×1920 px (9:16) - Stories/Reels
            </span>
            <span className="px-4 py-2 rounded-lg text-gray-300" style={{ background: secondaryColor }}>
              1200×628 px (1.91:1) - Landscape
            </span>
          </div>
        </div>

        {/* Banner 1 - Feed */}
        <BannerPreview title="Feed Banner" dimensions="1080×1080 px" number={1} aspectRatio="1/1">
          <SquareBanner />
        </BannerPreview>

        {/* Banner 2 - Stories */}
        <BannerPreview title="Stories/Reels Banner" dimensions="1080×1920 px" number={2} aspectRatio="9/16">
          <StoryBanner />
        </BannerPreview>

        {/* Banner 3 - Stories Alt */}
        <BannerPreview title="Stories/Reels - Emocionální" dimensions="1080×1920 px" number={3} aspectRatio="9/16">
          <StoryBannerAlt />
        </BannerPreview>

        {/* Banner 4 - Landscape */}
        <BannerPreview title="Landscape Banner" dimensions="1200×628 px" number={4} aspectRatio="1.91/1">
          <LandscapeBanner />
        </BannerPreview>

        {/* Info sekce */}
        <div
          className="rounded-2xl p-8"
          style={{ background: secondaryLight, border: `1px solid ${secondaryLight}` }}
        >
          <h2
            className="text-2xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-suse), system-ui, sans-serif' }}
          >
            Informace o kurzu
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: primaryColor }}>Obsah kurzu:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>1. Úvod - Co je to AI?</li>
                <li>2. Základy práce s AI - ChatGPT a alternativy</li>
                <li>3. Generativní AI - Obrázky, videa, hudba</li>
                <li>4. Jak AI funguje? - Pojmy a principy</li>
                <li>5. AI nejsou jen chatboti - Agenti a automatizace</li>
                <li>6. Budoucnost AI - Co nás čeká</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: primaryColor }}>Reklamní prvky:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Emocionální hook (FOMO - ujíždějící vlak AI)</li>
                <li>✓ Social proof (184+ studentů)</li>
                <li>✓ Autorita (velká profilová fotka)</li>
                <li>✓ Hodnota (24 lekcí, konkrétní benefity)</li>
                <li>✓ Sleva (-50%, ušetříte 200 Kč)</li>
                <li>✓ Naléhavost (limitovaná nabídka)</li>
                <li>✓ Jasné CTA (Koupit nyní)</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6" style={{ borderTop: `1px solid ${secondaryColor}` }}>
            <p className="text-gray-400">
              <strong>Odkaz na kurz:</strong>{" "}
              <a
                href="https://akademie.aisrozumem.cz/kurzy/zorientujte-se-ve-svete-umele-inteligence"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: primaryColor }}
              >
                akademie.aisrozumem.cz/kurzy/zorientujte-se-ve-svete-umele-inteligence
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
