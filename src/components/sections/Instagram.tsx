"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram as InstagramIcon, Heart, MessageCircle, Play, ExternalLink } from "lucide-react";

interface InstagramPost {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  isReel?: boolean;
  caption: string;
  prunedCaption: string;
  likeCount: number;
  commentsCount: number;
  thumbnailUrl?: string;
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

  // Don't render section if no posts and not loading
  if (!loading && (!feed || feed.posts.length === 0)) {
    return null;
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-orange-500/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white rounded-full text-sm font-semibold mb-6"
          >
            <InstagramIcon size={16} />
            @ai_s_rozumem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Sledujte na Instagramu<span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            Tipy, novinky a zákulisí ze světa AI a vibe codingu
          </motion.p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {loading
            ? // Skeleton loading
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-gray-100 animate-pulse"
                />
              ))
            : feed?.posts.map((post, index) => (
                <motion.a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
                >
                  {/* Post Image - using <img> because Behold CDN URLs and Instagram thumbnail URLs are dynamic */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      post.mediaType === "VIDEO" && post.thumbnailUrl
                        ? post.thumbnailUrl
                        : post.sizes.medium.mediaUrl
                    }
                    alt={post.prunedCaption || "Instagram post"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Video indicator */}
                  {post.mediaType === "VIDEO" && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play size={14} className="text-white fill-white ml-0.5" />
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    {/* Stats */}
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

                    {/* Caption preview */}
                    {post.prunedCaption && (
                      <p className="text-white/80 text-xs text-center line-clamp-3 max-w-[200px]">
                        {post.prunedCaption}
                      </p>
                    )}
                  </div>
                </motion.a>
              ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://instagram.com/ai_s_rozumem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:gap-3"
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
