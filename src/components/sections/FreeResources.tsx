"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GraduationCap, Play, Headphones, Coffee } from "lucide-react";
import Image from "next/image";
import { freeResources, ACADEMY_STUDENT_COUNT } from "@/lib/data";

interface CommunityStats {
  youtube: number | null;
  discord: number | null;
  academy: number;
}

function formatStat(value: number): string {
  return value.toLocaleString("cs-CZ");
}

export default function FreeResources({ spotifyEmbedUrl }: { spotifyEmbedUrl: string }) {
  const [stats, setStats] = useState<CommunityStats | null>(null);

  useEffect(() => {
    fetch("/api/community-stats")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setStats(data);
      })
      .catch(() => {
        // Fallback: show academy stat even if API fails
        setStats({ youtube: null, discord: null, academy: ACADEMY_STUDENT_COUNT });
      });
  }, []);

  function getStatValue(key: "youtube" | "discord" | "academy"): number | null {
    if (!stats) return null;
    return stats[key];
  }

  return (
    <section id="vzdelavani" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-section-alt to-transparent" />

      <div className="container-narrow mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-secondary rounded-full text-sm font-semibold mb-6"
          >
            <GraduationCap size={16} />
            AI s rozumem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Vzdělávání je základ<span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            S cílem edukovat v oblasti umělé inteligence a vibe codingu jsou založil projekt{" "}
            <a
              href="https://aisrozumem.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-bold text-secondary hover:text-primary transition-colors"
            >
              {/* Highlighter marker effect */}
              <span className="absolute -inset-x-1 -bottom-0.5 h-[40%] bg-primary/40 -skew-x-3 rounded-sm" />
              <span className="relative">AI s rozumem</span>
            </a>
            , kde tvořím edukační obsah bez zbytečného povyku a hlavně s rozumem.
          </motion.p>
        </div>

        {/* Resources - 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeResources.map((resource, index) => {
            const Icon = resource.icon;
            const isYouTube = resource.title === "YouTube";
            const isDiscord = resource.title === "Discord Komunita";

            // Different gradient for each card
            const gradientClass = isYouTube
              ? 'bg-gradient-to-br from-red-500 to-red-600'
              : isDiscord
              ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
              : 'bg-gradient-to-br from-primary to-amber-500';

            const statValue = resource.statKey ? getStatValue(resource.statKey) : null;

            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative rounded-2xl md:rounded-3xl overflow-hidden h-full ${gradientClass}`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  <div className="relative p-6 md:p-8">
                    {/* Icon + Stat Row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={28} />
                      </div>

                      {/* Stat Badge */}
                      <AnimatePresence>
                        {statValue != null && resource.statLabel && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-right"
                          >
                            <div className="text-2xl md:text-3xl font-bold text-white leading-none">
                              {formatStat(statValue)}+
                            </div>
                            <div className="text-xs text-white/70 mt-0.5">
                              {resource.statLabel}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-xl md:text-2xl text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      {resource.description}
                    </p>

                    {/* CTA */}
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-secondary px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 hover:shadow-lg"
                    >
                      {isYouTube && <Play size={16} className="fill-current" />}
                      {resource.buttonText}
                      <ExternalLink size={14} />
                    </a>

                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-full" />
                    <div className="absolute bottom-6 right-12 w-6 h-6 bg-white/10 rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Podcast Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-amber-800 to-amber-950">
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Podcast Image */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="relative w-full max-w-[280px] mx-auto lg:mx-0 aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/coffee_break_promo.png"
                      alt="Coffee Break s Filipem - Podcast"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Podcast Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4">
                    <Coffee size={14} />
                    Nový podcast
                  </div>

                  <h3 className="font-bold text-2xl md:text-3xl text-white mb-3">
                    Coffee Break s Filipem
                  </h3>

                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                    Novinky, inspirace a Filipova zamyšlení ze světa AI, technologií a produktů. Servírováno u kávy.
                  </p>

                  {/* Spotify Embed */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <iframe
                      src={spotifyEmbedUrl}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-xl"
                    />
                  </div>

                  {/* Platform Links */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <a
                      href="https://open.spotify.com/show/42u73bXQYUOmXkyf9sySMz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/30"
                    >
                      <Headphones size={16} />
                      Spotify
                    </a>
                    <a
                      href="https://podcasts.apple.com/gb/podcast/coffee-break-s-filipem/id1869317894"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/30"
                    >
                      Apple Podcasts
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href="https://www.youtube.com/playlist?list=PLy6-Siwmo4p-EIxm3U2DPlrMVAs0mrNZJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/30"
                    >
                      <Play size={14} className="fill-current" />
                      YouTube
                    </a>
                    <a
                      href="https://podcast.filipobornik.cz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/30"
                    >
                      Web podcastu
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-20 h-20 border border-white/10 rounded-full hidden lg:block" />
              <div className="absolute bottom-10 right-16 w-8 h-8 bg-white/5 rounded-full hidden lg:block" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
