"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, X, Users } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { workshopHradec } from "@/lib/data";

export default function WorkshopBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  const updateBannerHeight = useCallback(() => {
    if (bannerRef.current) {
      const height = bannerRef.current.offsetHeight;
      document.documentElement.style.setProperty("--banner-height", `${height}px`);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
    // Check if banner is enabled and user hasn't dismissed it
    if (!workshopHradec.showBanner) return;
    const dismissed = localStorage.getItem("workshop-banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
      document.documentElement.classList.add("has-banner");
    }
  }, []);

  // Measure and update banner height on mount and resize
  useEffect(() => {
    if (!isVisible) return;

    // Initial measurement after a brief delay for render
    const initialTimeout = setTimeout(updateBannerHeight, 50);

    // Update on resize
    window.addEventListener("resize", updateBannerHeight);

    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener("resize", updateBannerHeight);
    };
  }, [isVisible, updateBannerHeight]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    localStorage.setItem("workshop-banner-dismissed", "true");
    document.documentElement.style.setProperty("--banner-height", "0px");
    document.documentElement.classList.remove("has-banner");
  };

  // Don't render anything on server, if dismissed, or if banner is disabled
  if (!isMounted || !isVisible || !workshopHradec.showBanner) return null;

  return (
    <motion.div
      ref={bannerRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      onAnimationComplete={updateBannerHeight}
      className="fixed top-0 left-0 right-0 z-60 bg-linear-to-r from-primary via-primary to-amber-500 overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-narrow mx-auto px-4 md:px-8 relative">
        <Link
          href="/workshop/vibe-coding-hradec"
          className="flex flex-col md:flex-row items-center justify-between gap-4 py-3 md:py-4 group"
        >
          {/* Left: Info */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
            {/* Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-secondary/20 backdrop-blur-sm rounded-full">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary font-semibold text-xs uppercase tracking-wider">
                Nový workshop
              </span>
            </div>

            {/* Title */}
            <div>
              <h3 className="text-secondary font-bold text-sm md:text-base">
                {workshopHradec.title}
              </h3>
              <p className="text-secondary/70 text-xs md:text-sm hidden md:block">
                Celodenní praktický workshop tváří v tvář
              </p>
            </div>

            {/* Details */}
            <div className="flex items-center gap-4 text-secondary/80 text-xs md:text-sm">
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{workshopHradec.location}</span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <Users size={14} />
                <span>Max {workshopHradec.capacity} lidí</span>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <span className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Zjistit více
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="p-1.5 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary/70 hover:text-secondary transition-colors"
              aria-label="Zavřít"
            >
              <X size={14} />
            </button>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
