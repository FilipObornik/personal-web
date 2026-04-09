import { InstagramMedia, InstagramResponse } from "@/types/instagram";

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;

export async function getInstagramPosts(limit: number = 9): Promise<InstagramMedia[]> {
  // Return mock data if credentials are not configured
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.warn("Instagram credentials not configured, returning mock data");
    return getMockInstagramPosts(limit);
  }

  try {
    const url = `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp,thumbnail_url&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!response.ok) {
      console.error(`Instagram API error: ${response.status} ${response.statusText}`);
      return getMockInstagramPosts(limit);
    }

    const data: InstagramResponse = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch Instagram posts:", error);
    return getMockInstagramPosts(limit);
  }
}

// Mock data for development/fallback
function getMockInstagramPosts(limit: number): InstagramMedia[] {
  const mockPosts: InstagramMedia[] = [
    {
      id: "mock_1",
      caption: "AI workshopy a školení v plném proudu! 🚀 Další přednáška o praktickém využití AI nástrojů v byznysu.",
      media_type: "IMAGE",
      media_url: "/images/mock-instagram-1.jpg",
      permalink: "https://instagram.com",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "mock_2",
      caption: "Vibe coding mentoring session 💻 Společně s klientem tvoříme AI aplikaci během pár hodin.",
      media_type: "IMAGE",
      media_url: "/images/mock-instagram-2.jpg",
      permalink: "https://instagram.com",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "mock_3",
      caption: "Deep Dive podcast natáčení 🎙️ Rozhovor o budoucnosti AI a jejím dopadu na práci.",
      media_type: "IMAGE",
      media_url: "/images/mock-instagram-3.jpg",
      permalink: "https://instagram.com",
      timestamp: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  return mockPosts.slice(0, limit);
}
