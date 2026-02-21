"use client";

import Image from "next/image";
import type { InstagramPost as InstagramPostType } from "@/types/instagram";
import { formatInstagramDate, truncateCaption } from "@/lib/instagram";
import { useState } from "react";

interface InstagramPostProps {
  post: InstagramPostType;
}

export default function InstagramPost({ post }: InstagramPostProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const caption = post.caption || "";
  const needsTruncation = caption.length > 150;
  const displayCaption = isExpanded ? caption : truncateCaption(caption);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl">
      {/* Image */}
      <a
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-square overflow-hidden bg-gray-100"
      >
        <Image
          src={post.media_url}
          alt={caption || "Instagram post"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/20" />
      </a>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Date */}
        <time className="mb-2 text-xs text-gray-500">
          {formatInstagramDate(post.timestamp)}
        </time>

        {/* Caption */}
        {caption && (
          <div className="mb-3 flex-1">
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {displayCaption}
            </p>
            {needsTruncation && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1 text-xs font-medium text-blue-600 hover:text-blue-800"
              >
                {isExpanded ? "Zobrazit méně" : "Číst více"}
              </button>
            )}
          </div>
        )}

        {/* Link to Instagram */}
        <a
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
        >
          Zobrazit na Instagramu
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
