"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Calendar } from "lucide-react";
import { InstagramMedia } from "@/types/instagram";

interface InstagramPostProps {
  post: InstagramMedia;
  index: number;
}

export default function InstagramPost({ post, index }: InstagramPostProps) {
  const formattedDate = new Date(post.timestamp).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Truncate caption to 2 lines
  const truncatedCaption = post.caption
    ? post.caption.length > 100
      ? post.caption.substring(0, 100) + "..."
      : post.caption
    : "";

  return (
    <motion.a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group block flex-shrink-0 w-[280px] md:w-[320px]"
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 h-full">
        {/* Image */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-secondary-light/50 to-secondary overflow-hidden">
          <Image
            src={post.media_url}
            alt={truncatedCaption || "Instagram post"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 280px, 320px"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Instagram icon on hover */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Instagram size={18} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Date */}
          <div className="flex items-center gap-2 text-white/40 text-xs mb-2">
            <Calendar size={12} />
            {formattedDate}
          </div>

          {/* Caption */}
          {truncatedCaption && (
            <p className="text-white/70 text-sm leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors">
              {truncatedCaption}
            </p>
          )}

          {/* Read more hint */}
          <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            Zobrazit na Instagramu
          </span>
        </div>
      </div>
    </motion.a>
  );
}
