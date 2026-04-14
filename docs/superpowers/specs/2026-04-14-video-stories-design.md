# Video Stories Component — Design Spec

**Date:** 2026-04-14  
**Status:** Approved

---

## Context

Filip's personal website (filipobornik.cz) showcases AI consulting, mentoring, and workshops. The site needs an Instagram-style video stories viewer that can be triggered from anywhere on the site — hero sections, service pages, testimonials, landing pages — to enrich static content with short vertical video clips hosted on Mux.

The key requirement is that the **viewer is fully independent from the trigger**: drop a play button anywhere, it opens the same global fullscreen viewer. No per-section duplication of viewer logic.

---

## Architecture

### Approach: Global Context + Portal (Option A)

`StoriesProvider` wraps the app root in `layout.tsx`. Any component anywhere calls `useStories().open(videos, startIndex)`. The viewer renders via `createPortal` to `document.body`, completely decoupled from the DOM tree of the triggering component.

### File Structure

```
src/components/stories/
  StoriesProvider.tsx   — React context + state management
  StoriesViewer.tsx     — fullscreen overlay, video playback, all UI
  StoryTrigger.tsx      — play button trigger component
  index.ts              — barrel exports
```

### Data Model

```typescript
interface StoryVideo {
  playbackId: string  // Mux playback ID
  title?: string      // optional title shown as overlay on the video
}
```

Video URL is derived from `playbackId`:
- Stream: `https://stream.mux.com/{playbackId}.m3u8`
- Poster: `https://image.mux.com/{playbackId}/thumbnail.jpg`

---

## Components

### StoriesProvider

- Holds state: `{ videos: StoryVideo[], currentIndex: number, isOpen: boolean }`
- Exposes context with `open(videos, startIndex?)` and `close()` functions
- Renders `StoriesViewer` as a portal inside the provider
- Goes into `src/app/layout.tsx` — one change to existing files

### StoriesViewer

Fullscreen fixed overlay with dark semi-transparent background.

**Layout:**
```
┌──────────────────────────────┐
│  ▬▬▬▬▬  ▬▬▬▬▬  ▬▬▬▬▬    ✕  │  ← progress bars + close button
│                              │
│         [video]              │
│      (9:16 centered)         │
│                              │
│  ◀                        ▶  │  ← prev/next arrows
│                              │
│       [title overlay]        │  ← shown if title is set
└──────────────────────────────┘
```

**Progress bars:** One thin bar per video at the top. The current video's bar animates 0→100% in sync with `video.currentTime / video.duration` via `requestAnimationFrame`. Completed bars are full, upcoming bars are empty.

**Video playback:**
- Uses `@mux/mux-video` web component (`<mux-video>`) for native HLS support across all browsers
- `autoPlay` on open
- Audio on by default (no muted)
- `playsInline` for mobile

**Interactions:**

| Action | Result |
|---|---|
| Click center zone | Pause / resume |
| Click left 1/3 of video | Previous video |
| Click right 2/3 of video | Next video |
| Arrow button ◀ | Previous video |
| Arrow button ▶ | Next video |
| Swipe left | Next video |
| Swipe right | Previous video |
| Keyboard `←` / `→` | Previous / next video |
| Keyboard `Space` | Pause / resume |
| Keyboard `Escape` | Close viewer |
| Close button ✕ | Close viewer |
| Last video ends | Close viewer automatically |

**Animations:** Framer Motion `AnimatePresence` for overlay enter/exit (fade + slight scale), consistent with site's existing animation patterns.

### StoryTrigger

A circular play button with orange ring (`--color-primary`), using `Play` icon from `lucide-react`.

```tsx
<StoryTrigger
  videos={[{ playbackId: "abc123", title: "Intro" }]}
  startIndex={0}       // optional, defaults to 0
  className="..."      // optional, for positioning/sizing
/>
```

Calls `useStories().open(videos, startIndex)` on click. Self-contained — no viewer logic inside.

---

## Video Hosting: Mux

**Why Mux:** Clean developer API, `@mux/mux-video` handles HLS natively across all browsers with no extra bundler config, built-in analytics, and excellent DX.

**Pricing at this scale:** ~$0.015/min stored + $0.045/GB delivered. For ~20 minutes of stored video: ~$0.30/month storage + minimal delivery. Essentially free for a personal site.

**Setup:**
1. Upload videos to [Mux dashboard](https://dashboard.mux.com)
2. Copy the `playback_id` for each video
3. Pass as `playbackId` prop in `StoryVideo`

**No API keys required in the frontend** for public playback — just the `playbackId`.

---

## Integration Example

```tsx
// In any page or component
import { StoryTrigger } from "@/components/stories"

const mentorVideos = [
  { playbackId: "abc123", title: "Co je AI mentoring?" },
  { playbackId: "def456" },
]

// Open at first video
<StoryTrigger videos={mentorVideos} />

// Open at second video
<StoryTrigger videos={mentorVideos} startIndex={1} />
```

```tsx
// layout.tsx — one-time setup
import { StoriesProvider } from "@/components/stories"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StoriesProvider>
          {children}
        </StoriesProvider>
      </body>
    </html>
  )
}
```

---

## Dependencies

- `@mux/mux-video` — web component for Mux HLS playback (install via npm)
- `framer-motion` — already in project
- `lucide-react` — already in project

---

## Verification

1. Install `@mux/mux-video` and confirm it builds without errors
2. Add `StoriesProvider` to `layout.tsx`
3. Place `<StoryTrigger videos={testVideos} />` on homepage
4. Verify: viewer opens on click, video autoplays with sound
5. Verify: progress bars animate correctly
6. Verify: arrows and swipe navigate between videos
7. Verify: last video ending closes the modal
8. Verify: keyboard navigation works (←, →, Space, Escape)
9. Verify: trigger at `startIndex={1}` opens at the second video
10. Test on mobile (swipe gestures, fullscreen layout)
