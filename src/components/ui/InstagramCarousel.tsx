"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import InstagramPost from "./InstagramPost";
import { InstagramMedia } from "@/types/instagram";

interface InstagramCarouselProps {
  posts: InstagramMedia[];
}

export default function InstagramCarousel({ posts }: InstagramCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Width of post card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} className="text-white/60 group-hover:text-primary transition-colors" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} className="text-white/60 group-hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Instagram posts */}
        {posts.map((post, index) => (
          <InstagramPost key={post.id} post={post} index={index} />
        ))}

        {/* Final card - link to Instagram profile */}
        <motion.a
          href="https://instagram.com/filipobornik"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: posts.length * 0.05 }}
          className="group flex-shrink-0 w-[280px] md:w-[320px]"
        >
          <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-500 h-full flex items-center justify-center aspect-square">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <Instagram size={40} className="text-primary" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Sleduj mě na Instagramu
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Další fotky z akcí, workshopů a přednášek
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                @filipobornik
              </span>
            </div>
          </div>
        </motion.a>
      </div>

      {/* Hide scrollbar with CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
