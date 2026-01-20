"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Youtube,
  Mail,
  Linkedin,
  Calendar,
  Phone,
  Sparkles,
  Download,
} from "lucide-react";
import { siteConfig, externalLinks } from "@/lib/data";

// Contact card data
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

// Primary links (main actions)
const primaryLinks = [
  {
    icon: Globe,
    label: "Web",
    href: contactData.website,
  },
  {
    icon: Calendar,
    label: "Rezervace",
    href: externalLinks.calendarUrl,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${contactData.email}`,
  },
];

// Secondary links (social/resources)
const secondaryLinks = [
  {
    icon: Sparkles,
    label: "AI s rozumem",
    href: "https://aisrozumem.cz",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: externalLinks.youtubeChannel,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: contactData.linkedin,
  },
];

// Generate vCard format
function generateVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.name}
N:Oborník;Filip;;;
TITLE:${contactData.title}
TEL;TYPE=CELL:${contactData.phone}
EMAIL:${contactData.email}
URL:${contactData.website}
NOTE:${contactData.subtitle}
END:VCARD`;
  return vcard;
}

function downloadVCard() {
  const vcard = generateVCard();

  // Try to open vCard directly (triggers "Add to Contacts" on mobile)
  const dataUri = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;

  // On iOS/Android, this typically opens the contacts app directly
  window.location.href = dataUri;
}

export default function VizitkaPage() {
  return (
    <div className="min-h-screen min-h-dvh bg-white flex items-center justify-center sm:p-8">
      <main className="w-full sm:max-w-[390px] bg-white sm:rounded-3xl sm:shadow-2xl sm:shadow-black/10 sm:border sm:border-gray-200 overflow-hidden flex flex-col min-h-dvh sm:min-h-0 sm:max-h-[844px]">
      {/* Dark blue header section */}
      <section className="relative bg-secondary overflow-hidden flex-shrink-0">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-0 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-10 pb-14 px-5">
          {/* Photo */}
          <div className="flex justify-center mb-5">
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-125" />
              {/* Photo container */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-[3px] border-primary/50 shadow-xl shadow-primary/20">
                <Image
                  src={contactData.photo}
                  alt={contactData.name}
                  fill
                  className="object-cover object-top scale-[1.35]"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-1"
          >
            <h1 className="text-2xl font-bold leading-tight text-white">
              Filip Oborník<span className="text-primary">.</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-center text-sm"
          >
            {contactData.title}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="text-white/50 text-center text-xs mb-3"
          >
            {contactData.subtitle}
          </motion.p>

          {/* Phone */}
          <motion.a
            href={`tel:${contactData.phone}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
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
      <section className="relative bg-white px-5 pb-6 pt-2 flex-1 flex flex-col">
        {/* Save to phone button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
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
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-2.5 mb-5"
        >
          {primaryLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
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
          transition={{ delay: 0.65 }}
          className="flex justify-center gap-8"
        >
          {secondaryLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 + index * 0.05 }}
              className="flex flex-col items-center gap-1.5 py-2 px-3 active:opacity-70 transition-opacity"
            >
              <div className="w-9 h-9 bg-secondary/10 rounded-full flex items-center justify-center">
                <link.icon size={17} className="text-secondary/50" />
              </div>
              <span className="text-secondary/40 text-[11px]">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-secondary/30 text-[11px] pt-4"
        >
          filipobornik.cz
        </motion.p>
      </section>
    </main>
    </div>
  );
}
