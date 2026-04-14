import { NextResponse } from "next/server";

// Revalidate the Behold feed at most once per hour.
// NOTE: we intentionally rely on the per-fetch `next: { revalidate }` option
// below instead of `export const revalidate` at the route level, because the
// two don't compose well with route handlers in Next.js 16 and previously
// caused the feed to either never update or to skip caching entirely.
const FEED_REVALIDATE_SECONDS = 3600;

interface BeholdPost {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  isReel?: boolean;
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

interface BeholdFeed {
  username: string;
  profilePictureUrl: string;
  posts: BeholdPost[];
}

export async function GET() {
  const feedId = process.env.BEHOLD_FEED_ID;
  if (!feedId) {
    return NextResponse.json({ posts: [] });
  }

  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`, {
      next: { revalidate: FEED_REVALIDATE_SECONDS, tags: ["instagram-feed"] },
    });

    if (!res.ok) {
      return NextResponse.json({ posts: [] });
    }

    const data: BeholdFeed = await res.json();

    // Filter out reels/videos - only keep static image posts
    const staticPosts = data.posts.filter(
      (post) => post.mediaType !== "VIDEO"
    );

    return NextResponse.json({
      username: data.username,
      profilePictureUrl: data.profilePictureUrl,
      posts: staticPosts,
    });
  } catch {
    return NextResponse.json({ posts: [] });
  }
}
