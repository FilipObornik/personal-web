import { NextResponse } from "next/server";
import { ACADEMY_STUDENT_COUNT } from "@/lib/data";

export const revalidate = 3600; // revalidate every hour

interface CommunityStats {
  youtube: number | null;
  discord: number | null;
  academy: number;
}

async function fetchYouTubeSubscribers(): Promise<number | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return null;

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=@aisrozumem&key=${apiKey}`;

  try {
    const res = await fetch(url, {
      headers: { Referer: "https://filipobornik.cz" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const count = data?.items?.[0]?.statistics?.subscriberCount;
    return count ? parseInt(count, 10) : null;
  } catch {
    return null;
  }
}

async function fetchDiscordMembers(): Promise<number | null> {
  try {
    const res = await fetch(
      "https://discord.com/api/invites/mgrgyZuJuv?with_counts=true",
      { next: { revalidate: 900 } } // 15 min cache for Discord
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data?.approximate_member_count ?? null;
  } catch {
    return null;
  }
}

export async function GET() {
  const [youtube, discord] = await Promise.all([
    fetchYouTubeSubscribers(),
    fetchDiscordMembers(),
  ]);

  const stats: CommunityStats = {
    youtube,
    discord,
    academy: ACADEMY_STUDENT_COUNT,
  };

  return NextResponse.json(stats);
}
