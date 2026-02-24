"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram as InstagramIcon, Heart, MessageCircle, ExternalLink, Plus, Camera } from "lucide-react";
import WaveSeparator from "@/components/ui/WaveSeparator";

interface InstagramPost {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: "IMAGE" | "CAROUSEL_ALBUM";
  caption: string;
  prunedCaption: string;
  likeCount: number;
  commentsCount: number;
  sizes: {
    small: { mediaUrl: string; width: number; height: number };
    medium: { mediaUrl: string; width: number; height: number };
    large: { mediaUrl: string; width: number; height: number };
    full: { mediaUrl: string; width: number; height: number };
  };
}

interface InstagramFeed {
  username?: string;
  profilePictureUrl?: string;
  posts: InstagramPost[];
}

const CARD_HEIGHT = 320;
const PROFILE_URL = "https://instagram.com/ai_s_rozumem";

export default function Instagram() {
  const [feed, setFeed] = useState<InstagramFeed | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram-feed")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.posts?.length > 0) {
          setFeed(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (!loading && (!feed || feed.posts.length === 0)) {
    return null;
  }

  return (
    <section className="pt-20 md:pt-32 pb-20 md:pb-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      {/* Section Header */}
      <div className="container-narrow mx-auto relative px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Ze zákulisí mé práce<span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            Workshopy, přednášky, projekty a každodenní práce s AI — nahlédněte, jak to u mě vypadá v praxi
          </motion.p>
        </div>
      </div>

      {/* Posts row */}
      <div className="relative">
        {/* Fade right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {loading ? (
          <div className="flex gap-4 md:gap-6 justify-center px-4 md:px-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl bg-gray-100 animate-pulse"
                style={{ width: 260, height: CARD_HEIGHT }}
              />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 md:gap-6 px-4 md:px-8 w-max mx-auto">
              {feed?.posts.map((post, index) => {
                const aspect = post.sizes.medium.width / post.sizes.medium.height;
                const cardWidth = Math.round(CARD_HEIGHT * aspect);

                return (
                  <motion.a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100"
                    style={{ width: cardWidth, height: CARD_HEIGHT }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.sizes.medium.mediaUrl}
                      alt={post.prunedCaption || "Instagram post"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <div className="flex items-center gap-4 text-white mb-3">
                        <span className="flex items-center gap-1.5 text-sm font-semibold">
                          <Heart size={16} className="fill-white" />
                          {post.likeCount}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-semibold">
                          <MessageCircle size={16} className="fill-white" />
                          {post.commentsCount}
                        </span>
                      </div>
                      {post.prunedCaption && (
                        <p className="text-white/80 text-xs text-center line-clamp-3 max-w-[200px]">
                          {post.prunedCaption}
                        </p>
                      )}
                    </div>

                    {/* Carousel album indicator */}
                    {post.mediaType === "CAROUSEL_ALBUM" && (
                      <div className="absolute top-3 right-3 w-7 h-7 bg-secondary/40 backdrop-blur-sm rounded-md flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <rect x="3" y="3" width="13" height="13" rx="2" />
                          <path d="M8 21h10a2 2 0 002-2V8" />
                        </svg>
                      </div>
                    )}
                  </motion.a>
                );
              })}

              {/* "More posts" placeholder card */}
              <motion.a
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (feed?.posts.length ?? 0) * 0.08 }}
                className="group flex-shrink-0 rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 hover:border-primary transition-colors duration-300 flex flex-col items-center justify-center gap-4"
                style={{ width: CARD_HEIGHT * 0.75, height: CARD_HEIGHT }}
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Plus size={24} className="text-secondary" />
                </div>
                <div className="text-center px-4">
                  <p className="font-semibold text-secondary text-sm mb-1">Více na Instagramu</p>
                  <p className="text-muted text-xs">@ai_s_rozumem</p>
                </div>
              </motion.a>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="container-narrow mx-auto relative px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:gap-3"
          >
            <InstagramIcon size={18} />
            Sledovat na Instagramu
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>

    </section>
  );
}
