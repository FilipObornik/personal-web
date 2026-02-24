"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Youtube,
  Mail,
  Linkedin,
  Calendar,
  Phone,
  Sparkles,
  Download,
  RotateCcw,
} from "lucide-react";
import { siteConfig, externalLinks } from "@/lib/data";

// ============================================
// DATA
// ============================================

const contactData = {
  name: "Filip Oborník",
  title: "AI, Vibe Coding & vývoj software",
  subtitle: "školení, mentoring, konzultace",
  email: siteConfig.email,
  phone: "+420 776 262 908",
  website: "https://filipobornik.cz",
  linkedin: siteConfig.linkedin,
  photo: "/images/portrait.png",
};

const primaryLinks = [
  { icon: Globe, label: "Web", href: contactData.website },
  { icon: Calendar, label: "Rezervace", href: externalLinks.calendarUrl },
  { icon: Mail, label: "Email", href: `mailto:${contactData.email}` },
];

const secondaryLinks = [
  { icon: Sparkles, label: "AI s rozumem", href: "https://aisrozumem.cz" },
  { icon: Youtube, label: "YouTube", href: externalLinks.youtubeChannel },
  { icon: Linkedin, label: "LinkedIn", href: contactData.linkedin },
];

const PROMPT_TEXT =
  "Hej Claude, postav vizitku pro toho týpka z COE 2026, co staví AI produkty a učí to i ostatní. Ať to žije.";

const THINKING_LINES = [
  { text: "Analyzuji požadavek...", delay: 0 },
  { text: "AI konzultant, co sám používá AI na svou vizitku? Meta.", delay: 600 },
  { text: "Vizitka musí být cooler než PowerPoint prezentace na expu", delay: 1300 },
  { text: "Přidám matrix rain, protože proč ne", delay: 2000 },
];

const GEN_LINES = [
  { text: "Stahuji fotku... ok, aspoň se usmívá", delay: 0 },
  { text: "Kontaktní údaje nalezeny", delay: 450 },
  { text: "Aplikuji COE 2026 branding", delay: 850 },
  { text: "Přidávám Easter egg pro pozorné čtenáře", delay: 1250 },
  { text: "Vizitka zkompilována", delay: 1600 },
];

const GENERATION_TIME = "4.2";

// ============================================
// HOOKS
// ============================================

function useTypewriter(text: string, speed = 35, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    let timeout: NodeJS.Timeout;

    const startTimeout = setTimeout(() => {
      const type = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setDone(true);
        }
      };
      type();
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

// ============================================
// MATRIX RAIN (Canvas)
// ============================================

function MatrixRain({ opacity = 0.15 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコABCDEF{}[]<>/=;:.";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () =>
      Math.random() * -canvas.height / fontSize
    );

    let animFrame: number;
    const draw = () => {
      ctx.fillStyle = "rgba(5, 18, 31, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Mix of orange and green-tinted colors
        if (Math.random() > 0.7) {
          ctx.fillStyle = `rgba(232, 143, 49, ${0.4 + Math.random() * 0.6})`;
        } else {
          ctx.fillStyle = `rgba(100, 200, 140, ${0.2 + Math.random() * 0.4})`;
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5;
      }

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity }}
    />
  );
}

// ============================================
// TERMINAL OVERLAY
// ============================================

type Phase = "intro" | "thinking" | "generating" | "reveal" | "card";

function TerminalOverlay({
  phase,
  onThinkingDone,
  onGeneratingDone,
}: {
  phase: Phase;
  onThinkingDone: () => void;
  onGeneratingDone: () => void;
}) {
  const { displayed: promptText, done: promptDone } = useTypewriter(
    PROMPT_TEXT,
    35,
    600
  );
  const [thinkingLines, setThinkingLines] = useState<number>(0);
  const [thinkingCollapsed, setThinkingCollapsed] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showDone, setShowDone] = useState(false);

  // Start thinking phase after prompt finishes
  useEffect(() => {
    if (!promptDone || phase !== "thinking") return;

    const timers: NodeJS.Timeout[] = [];

    THINKING_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setThinkingLines(i + 1), line.delay));
    });

    // Collapse thinking and signal done
    timers.push(
      setTimeout(() => setThinkingCollapsed(true), 2800)
    );
    timers.push(
      setTimeout(() => onThinkingDone(), 3200)
    );

    return () => timers.forEach(clearTimeout);
  }, [promptDone, phase, onThinkingDone]);

  // Generation lines
  useEffect(() => {
    if (phase !== "generating") return;

    const timers: NodeJS.Timeout[] = [];

    GEN_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), line.delay));
    });

    timers.push(setTimeout(() => setShowDone(true), 1900));
    timers.push(setTimeout(() => onGeneratingDone(), 2500));

    return () => timers.forEach(clearTimeout);
  }, [phase, onGeneratingDone]);

  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-center justify-center p-6"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full max-w-[370px]">
        {/* Terminal window */}
        <div className="bg-[#0d1b2a]/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-primary/10 overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 text-white/30 text-[10px] font-mono">
              claude-code ~/vizitka
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-4 font-mono text-[13px] leading-relaxed">
            {/* Prompt line */}
            <div className="flex gap-2">
              <span className="text-primary shrink-0">$</span>
              <span className="text-white/90">
                {promptText}
                {!promptDone && (
                  <span className="inline-block w-2 h-4 bg-primary/80 ml-0.5 align-middle terminal-cursor" />
                )}
              </span>
            </div>

            {/* Thinking / reasoning phase */}
            {(phase === "thinking" || phase === "generating" || thinkingCollapsed) &&
              promptDone && (
                <div className="mt-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1.5 mb-1.5"
                  >
                    <span className="text-violet-400 text-xs">
                      {thinkingCollapsed ? "▸" : "▾"}
                    </span>
                    <span className="text-violet-400/70 text-xs italic">
                      reasoning
                      {!thinkingCollapsed && (
                        <span className="thinking-dots" />
                      )}
                    </span>
                  </motion.div>

                  <AnimatePresence>
                    {!thinkingCollapsed && (
                      <motion.div
                        initial={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-l-2 border-violet-500/20 pl-3 ml-1 space-y-1"
                      >
                        {THINKING_LINES.slice(0, thinkingLines).map((line, i) => (
                          <motion.p
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.15 }}
                            className="text-white/30 text-[11px] italic"
                          >
                            {line.text}
                          </motion.p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

            {/* Generation / agent execution lines */}
            {(phase === "generating" ||
              (phase === "reveal" && visibleLines > 0)) && (
              <div className="mt-3 space-y-1.5">
                {GEN_LINES.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 text-xs"
                  >
                    <span className="text-green-400">✓</span>
                    <span className="text-white/50">{line.text}</span>
                  </motion.div>
                ))}

                {showDone && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-xs mt-2 pt-2 border-t border-white/5"
                  >
                    <span className="text-primary">⚡</span>
                    <span className="text-primary font-semibold">
                      Hotovo za {GENERATION_TIME}s
                    </span>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// BUSINESS CARD
// ============================================

function generateVCard() {
  return `BEGIN:VCARD
VERSION:3.0
FN:${contactData.name}
N:Oborník;Filip;;;
TITLE:${contactData.title}
TEL;TYPE=CELL:${contactData.phone}
EMAIL:${contactData.email}
URL:${contactData.website}
NOTE:${contactData.subtitle}
END:VCARD`;
}

function downloadVCard() {
  const blob = new Blob([generateVCard()], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Filip Oborník - virtuální vizitka.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function CopyableICO() {
  const [copied, setCopied] = useState(false);
  const ico = "07306300";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(ico);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-center text-secondary/30 text-[11px] pt-4 active:text-secondary/50 transition-colors"
    >
      {copied ? "Zkopírováno!" : `IČO: ${ico}`}
    </button>
  );
}

function BusinessCard({ onReplay }: { onReplay: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full sm:max-w-[390px] bg-white sm:rounded-3xl sm:shadow-2xl sm:shadow-black/10 sm:border sm:border-gray-200 overflow-hidden flex flex-col min-h-dvh sm:min-h-0 sm:max-h-[844px]"
    >
      {/* Dark blue header section */}
      <section className="relative bg-secondary flex-shrink-0">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Photo glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 pt-4 pb-14 px-5">
          {/* Photo */}
          <div className="flex justify-center mb-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
                type: "spring",
                bounce: 0.4,
              }}
              className="relative w-28 h-28 rounded-full overflow-hidden border-[3px] border-primary/50 shadow-xl shadow-primary/20"
            >
              <Image
                src={contactData.photo}
                alt={contactData.name}
                fill
                className="object-cover object-top scale-[1.35]"
                priority
              />
            </motion.div>
          </div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-center mb-1"
          >
            <h1 className="text-2xl font-bold leading-tight text-white">
              Filip Oborník<span className="text-primary">.</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-white/70 text-center text-sm"
          >
            {contactData.title}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="text-white/50 text-center text-xs mb-3"
          >
            {contactData.subtitle}
          </motion.p>

          {/* Phone */}
          <motion.a
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            href={`tel:${contactData.phone}`}
            className="flex items-center justify-center gap-2 text-white active:text-primary transition-colors py-1"
          >
            <Phone size={15} className="text-primary" />
            <span className="font-medium text-sm">{contactData.phone}</span>
          </motion.a>
        </div>

        {/* Wave separator */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: "40px" }}
          >
            <path
              d="M0 100L60 92C120 84 240 68 360 60C480 52 600 52 720 56C840 60 960 68 1080 72C1200 76 1320 76 1380 76L1440 76V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* White content section */}
      <section className="relative bg-white px-5 pb-2 pt-2 flex-1 flex flex-col">
        {/* Save to phone button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          onClick={downloadVCard}
          className="w-full bg-primary hover:bg-primary-dark text-secondary font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98] shadow-lg shadow-primary/25 mb-5 text-[15px]"
        >
          <Download size={19} strokeWidth={2.5} />
          Uložit do telefonu
        </motion.button>

        {/* Primary links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.4 }}
          className="grid grid-cols-3 gap-2.5 mb-5"
        >
          {primaryLinks.map((link, index) => (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + index * 0.05, duration: 0.3 }}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 py-4 px-2 rounded-2xl bg-secondary/[0.03] active:bg-secondary/[0.08] border border-secondary/10 transition-all duration-200 active:scale-[0.98]"
            >
              <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center shadow-md shadow-primary/20">
                <link.icon size={20} className="text-secondary" />
              </div>
              <span className="text-secondary font-medium text-[13px]">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-secondary/10 mb-5" />

        {/* Secondary links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex justify-center gap-8"
        >
          {secondaryLinks.map((link, index) => (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 py-2 px-3 active:opacity-70 transition-opacity"
            >
              <div className="w-9 h-9 bg-secondary/10 rounded-full flex items-center justify-center">
                <link.icon size={17} className="text-secondary/50" />
              </div>
              <span className="text-secondary/40 text-[11px]">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* IČO */}
        <CopyableICO />

        {/* Footer - vibe coded + replay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-between mt-auto pt-3 pb-2"
        >
          <span className="text-secondary/20 text-[10px]">
            ⚡ Vibe-coded za {GENERATION_TIME}s
          </span>
          <button
            onClick={onReplay}
            className="flex items-center gap-1 text-secondary/20 text-[10px] active:text-secondary/40 transition-colors"
          >
            <RotateCcw size={10} />
            Replay
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function VizitkaPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [key, setKey] = useState(0);

  // Phase transitions: intro → thinking → generating → reveal → card
  useEffect(() => {
    if (phase === "intro") {
      const timer = setTimeout(() => setPhase("thinking"), 100);
      return () => clearTimeout(timer);
    }
  }, [phase, key]);

  const handleThinkingDone = useCallback(() => {
    setPhase("generating");
  }, []);

  const handleGeneratingDone = useCallback(() => {
    setPhase("reveal");
    setTimeout(() => setPhase("card"), 800);
  }, []);

  const handleSkip = useCallback(() => {
    if (phase !== "card") {
      setPhase("card");
    }
  }, [phase]);

  const handleReplay = useCallback(() => {
    setPhase("intro");
    setKey((k) => k + 1);
  }, []);

  return (
    <div
      className="min-h-screen min-h-dvh bg-secondary sm:bg-white flex items-center justify-center sm:p-8"
      onClick={handleSkip}
    >
      <AnimatePresence mode="wait">
        {phase !== "card" ? (
          <motion.div
            key={`terminal-${key}`}
            className="absolute inset-0 bg-secondary overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Matrix rain background */}
            <MatrixRain opacity={0.12} />

            {/* Terminal */}
            <TerminalOverlay
              phase={phase}
              onThinkingDone={handleThinkingDone}
              onGeneratingDone={handleGeneratingDone}
            />

            {/* Skip hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute bottom-8 left-0 right-0 text-center"
            >
              <span className="text-white/20 text-xs font-mono">
                tap to skip
              </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={`card-${key}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full flex items-center justify-center"
          >
            <BusinessCard onReplay={handleReplay} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
