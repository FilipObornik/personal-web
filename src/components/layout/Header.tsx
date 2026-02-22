"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navigation } from "@/lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasBanner, setHasBanner] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check for banner on homepage
  useEffect(() => {
    if (isHomePage) {
      const checkBanner = () => {
        setHasBanner(document.documentElement.classList.contains("has-banner"));
      };
      checkBanner();
      // Observe class changes on html element
      const observer = new MutationObserver(checkBanner);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    } else {
      setHasBanner(false);
    }
  }, [isHomePage]);

  // Helper to get correct href based on current page
  const getHref = (href: string) => {
    if (isHomePage) return href;
    return `/${href}`;
  };

  const showSolidHeader = isScrolled || !isHomePage;

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        showSolidHeader
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      style={{ top: isHomePage && hasBanner ? "var(--banner-height, 0px)" : 0 }}
    >
      <nav className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - always visible on subpages, only after scroll on home */}
          <Link
            href="/"
            className={`font-bold text-lg transition-all duration-300 ${
              showSolidHeader
                ? "text-secondary opacity-100 translate-y-0"
                : "text-white opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            Filip Oborník
            <span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.slice(1, -1).map((item) => (
              <Link
                key={item.name}
                href={getHref(item.href)}
                className={`text-sm font-medium transition-colors ${
                  showSolidHeader
                    ? "text-muted hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={getHref("#kontakt")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                showSolidHeader
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              showSolidHeader ? "text-secondary" : "text-white"
            }`}
            aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className={`py-4 space-y-1 border-t ${
                showSolidHeader ? "border-gray-100 bg-white" : "border-white/10 bg-secondary/95 backdrop-blur-md"
              }`}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={getHref(item.href)}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                      showSolidHeader
                        ? "text-secondary hover:bg-section-alt"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2 px-2">
                  <Link
                    href={getHref("#kontakt")}
                    onClick={() => setIsMenuOpen(false)}
                    className="block bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-xl text-center font-semibold transition-colors"
                  >
                    Kontaktujte mě
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
