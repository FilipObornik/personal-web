const SHOW_ID = "42u73bXQYUOmXkyf9sySMz";

export async function getLatestEpisodeId(): Promise<string | null> {
  try {
    const res = await fetch(`https://open.spotify.com/show/${SHOW_ID}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const html = await res.text();
    const match = html.match(/episode\/([a-zA-Z0-9]{22})/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

export function getSpotifyEmbedUrl(episodeId?: string | null): string {
  if (episodeId) {
    return `https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator&theme=0`;
  }
  return `https://open.spotify.com/embed/show/${SHOW_ID}?utm_source=generator&theme=0`;
}
