import type { InstagramPost, InstagramMediaResponse } from "@/types/instagram";

const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

export async function getInstagramPosts(
  limit: number = 9
): Promise<InstagramPost[]> {
  if (!INSTAGRAM_USER_ID || !INSTAGRAM_ACCESS_TOKEN) {
    console.warn("Instagram credentials not configured");
    return [];
  }

  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "permalink",
    "timestamp",
    "thumbnail_url",
  ].join(",");

  const url = `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=${fields}&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!response.ok) {
      console.error("Instagram API error:", response.status);
      return [];
    }

    const data: InstagramMediaResponse = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch Instagram posts:", error);
    return [];
  }
}

export function formatInstagramDate(timestamp: string): string {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function truncateCaption(caption: string, maxLength: number = 150): string {
  if (!caption || caption.length <= maxLength) return caption;
  return caption.substring(0, maxLength).trim() + "...";
}
