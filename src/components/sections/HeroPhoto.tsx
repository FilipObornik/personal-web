"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const EASTER_EGG_QUOTES = [
  "Ano, tuhle vizitku fakt udělala AI",
  "Ano, programuju i z telefonu, fakt",
  "Jasně, můžu ti zautomatizovat i tohle",
  "Vibe coding je legitimní profese, mami",
];

const BONUS_QUOTE = "...a to jste ještě neviděli moje terminál";

// Matrix-style characters for the glitch overlay
const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";

function generateMatrixGrid(rows: number, cols: number): string[][] {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
      MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
    )
  );
}

interface HeroPhotoProps {
  imageLoaded: boolean;
  onImageLoad: () => void;
}

export default function HeroPhoto({ imageLoaded, onImageLoad }: HeroPhotoProps) {
  const [tapCount, setTapCount] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [currentQuote, setCurrentQuote] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);
  const [badgeChaos, setBadgeChaos] = useState(false);
  const [matrixGrid, setMatrixGrid] = useState<string[][]>(() => generateMatrixGrid(12, 10));

  const bubbleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const glitchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
      if (glitchTimeoutRef.current) clearTimeout(glitchTimeoutRef.current);
    };
  }, []);

  const handlePhotoTap = useCallback(() => {
    if (!imageLoaded) return;

    const newTapCount = tapCount + 1;
    setTapCount(newTapCount);

    // Regenerate matrix characters for fresh visual
    setMatrixGrid(generateMatrixGrid(12, 10));

    // Determine quote
    const isBonusTap = newTapCount % 5 === 0;
    const quote = isBonusTap
      ? BONUS_QUOTE
      : EASTER_EGG_QUOTES[(newTapCount - 1) % EASTER_EGG_QUOTES.length];

    // Show speech bubble
    setShowBubble(false);
    // Force re-render for AnimatePresence
    requestAnimationFrame(() => {
      setCurrentQuote(quote);
      setShowBubble(true);
    });

    // Auto-dismiss bubble
    if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
    bubbleTimeoutRef.current = setTimeout(() => setShowBubble(false), 3000);

    // Glitch effect
    setIsGlitching(true);
    if (glitchTimeoutRef.current) clearTimeout(glitchTimeoutRef.current);
    glitchTimeoutRef.current = setTimeout(() => setIsGlitching(false), 500);

    // Bonus: badge chaos on every 5th tap
    if (isBonusTap) {
      setBadgeChaos(true);
      setTimeout(() => setBadgeChaos(false), 2000);
    }
  }, [imageLoaded, tapCount]);

  // Badge chaos animation variants
  const badgeChaosVariants = {
    normal: { x: 0, y: 0, rotate: 0, scale: 1 },
    chaos: (i: number) => ({
      x: [0, (i % 2 ? 1 : -1) * (40 + i * 15), (i % 2 ? -1 : 1) * 30, 0],
      y: [0, -(30 + i * 10), (i % 2 ? 20 : -20), 0],
      rotate: [0, (i % 2 ? 1 : -1) * (15 + i * 5), (i % 2 ? -1 : 1) * 10, 0],
      scale: [1, 1.3, 0.8, 1],
      transition: {
        duration: 1.8,
        ease: "easeInOut" as const,
        times: [0, 0.3, 0.7, 1],
      },
    }),
  };

  return (
    <div className="relative hidden lg:block">
      <div className="relative w-full max-w-md mx-auto">
        {/* Gradient glow behind photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={imageLoaded ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-3xl"
        />

        {/* Tear effect - expanding rings */}
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={imageLoaded ? { scale: 2.5, opacity: 0 } : { scale: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-32 h-32 rounded-full border-4 border-primary/60" />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={imageLoaded ? { scale: 2, opacity: 0 } : { scale: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-32 h-32 rounded-full border-2 border-white/40" />
        </motion.div>

        {/* Speech Bubble */}
        <AnimatePresence mode="wait">
          {showBubble && (
            <motion.div
              key={tapCount}
              initial={{ scale: 0, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="absolute -top-14 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
              style={{ originY: 1 }}
            >
              <div className="relative bg-white rounded-2xl px-5 py-3 shadow-xl shadow-black/20 whitespace-nowrap">
                <span className="text-secondary font-semibold text-sm">
                  {currentQuote}
                </span>
                {/* Tail */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Organic blob photo container - clickable for easter egg */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={imageLoaded ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="relative aspect-[4/5] cursor-pointer select-none"
          style={{ clipPath: "url(#blob-mask)" }}
          onClick={handlePhotoTap}
        >
          <Image
            src="/images/portrait.png"
            alt="Filip Oborník"
            fill
            className="object-cover object-[center_5%] scale-[1.15]"
            style={{ transformOrigin: "center 5%" }}
            priority
            onLoad={onImageLoad}
          />
          {/* Flash effect on reveal */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={imageLoaded ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute inset-0 bg-secondary"
          />
          {/* Subtle inner shadow overlay */}
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />

          {/* Glitch Overlay */}
          {isGlitching && (
            <>
              {/* RGB Split - Red channel */}
              <div
                className="absolute inset-0 glitch-rgb-red pointer-events-none"
                style={{
                  backgroundImage: "url(/images/portrait.png)",
                  backgroundSize: "115% auto",
                  backgroundPosition: "center 5%",
                  mixBlendMode: "screen",
                }}
              />
              {/* RGB Split - Cyan channel */}
              <div
                className="absolute inset-0 glitch-rgb-cyan pointer-events-none"
                style={{
                  backgroundImage: "url(/images/portrait.png)",
                  backgroundSize: "115% auto",
                  backgroundPosition: "center 5%",
                  mixBlendMode: "screen",
                }}
              />
              {/* Horizontal slice displacement */}
              <div className="absolute inset-0 glitch-slice pointer-events-none overflow-hidden">
                <div className="absolute inset-0 glitch-slice-inner" style={{
                  backgroundImage: "url(/images/portrait.png)",
                  backgroundSize: "115% auto",
                  backgroundPosition: "center 5%",
                }} />
              </div>
              {/* Scan lines */}
              <div className="absolute inset-0 glitch-scanlines pointer-events-none" />
              {/* Matrix character overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden pointer-events-none glitch-matrix-fade">
                {matrixGrid.map((row, ri) => (
                  <div key={ri} className="flex justify-center gap-[2px] leading-none">
                    {row.map((char, ci) => (
                      <span
                        key={ci}
                        className="text-[10px] font-mono text-green-400 opacity-80"
                        style={{
                          animationDelay: `${(ri * 10 + ci) * 15}ms`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* SVG blob mask definition */}
        <svg className="absolute w-0 h-0">
          <defs>
            <clipPath id="blob-mask" clipPathUnits="objectBoundingBox">
              <path d="M0.5,0.02 C0.75,0.02 0.92,0.15 0.96,0.35 C1,0.55 0.95,0.75 0.85,0.88 C0.75,1 0.55,0.98 0.4,0.96 C0.25,0.94 0.1,0.88 0.05,0.7 C0,0.52 0.05,0.3 0.15,0.15 C0.25,0 0.35,0.02 0.5,0.02" />
            </clipPath>
          </defs>
        </svg>

        {/* Floating tech badges - with chaos mode */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100, y: 200 }}
          animate={imageLoaded ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0, x: 100, y: 200 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="absolute -top-2 right-8"
        >
          <motion.div
            variants={badgeChaosVariants}
            animate={badgeChaos ? "chaos" : "normal"}
            custom={0}
          >
            <motion.div
              animate={imageLoaded && !badgeChaos ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
              className="px-4 py-2 bg-primary text-secondary font-semibold text-sm rounded-full shadow-lg shadow-primary/30"
            >
              Umělá inteligence
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, x: 150, y: 100 }}
          animate={imageLoaded ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0, x: 150, y: 100 }}
          transition={{
            duration: 0.6,
            delay: 0.65,
            type: "spring",
            stiffness: 260,
            damping: 15,
          }}
          className="absolute top-1/4 -left-8"
        >
          <motion.div
            variants={badgeChaosVariants}
            animate={badgeChaos ? "chaos" : "normal"}
            custom={1}
          >
            <motion.div
              animate={imageLoaded && !badgeChaos ? { y: [0, 6, 0] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
            >
              Technologické konzultace
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, x: 120, y: 50 }}
          animate={imageLoaded ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0, x: 120, y: 50 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            type: "spring",
            stiffness: 240,
            damping: 15,
          }}
          className="absolute top-[45%] -left-4"
        >
          <motion.div
            variants={badgeChaosVariants}
            animate={badgeChaos ? "chaos" : "normal"}
            custom={2}
          >
            <motion.div
              animate={imageLoaded && !badgeChaos ? { y: [0, -5, 0] } : {}}
              transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
            >
              Školení
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, x: -80, y: 80 }}
          animate={imageLoaded ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0, x: -80, y: 80 }}
          transition={{
            duration: 0.6,
            delay: 0.75,
            type: "spring",
            stiffness: 250,
            damping: 15,
          }}
          className="absolute top-[55%] -right-6"
        >
          <motion.div
            variants={badgeChaosVariants}
            animate={badgeChaos ? "chaos" : "normal"}
            custom={3}
          >
            <motion.div
              animate={imageLoaded && !badgeChaos ? { y: [0, -6, 0] } : {}}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-full border border-white/20"
            >
              Mentoring
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
