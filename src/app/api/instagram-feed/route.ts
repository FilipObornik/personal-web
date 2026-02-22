import { NextResponse } from "next/server";

export const revalidate = 3600; // revalidate every hour

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
      next: { revalidate: 3600 },
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
