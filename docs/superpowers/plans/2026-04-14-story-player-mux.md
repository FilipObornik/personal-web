# Story Player (Mux) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static `VideoPlaceholder` component on landing pages with a real Instagram story-style vertical video player backed by Mux.

**Architecture:** A single `StoryPlayer` client component accepts an array of Mux playback IDs and renders them in a 9:16 container using `@mux/mux-player-react`. Progress bars at the top auto-advance through clips; tapping the left/right halves navigates manually. The three existing landing pages (mentoring, skoleni, konzultace) each currently render one `VideoPlaceholder` — these are replaced with `StoryPlayer` once real playback IDs are available. Until then the component gracefully shows a placeholder state when the clips array is empty.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, `@mux/mux-player-react`, Framer Motion (already installed), Tailwind CSS v4

---

## File Map

| Action | Path | Purpose |
|---|---|---|
| Modify | `package.json` | add `@mux/mux-player-react` |
| Create | `src/components/landing/StoryPlayer.tsx` | story player component |
| Modify | `src/app/mentoring/MentoringContent.tsx` | swap VideoPlaceholder → StoryPlayer |
| Modify | `src/app/skoleni-pro-vyvojare/SkoleniContent.tsx` | swap VideoPlaceholder → StoryPlayer |
| Modify | `src/app/konzultace/KonzultaceLandingContent.tsx` | swap VideoPlaceholder → StoryPlayer |

`VideoPlaceholder.tsx` is NOT deleted — it may be used elsewhere in future. `StoryPlayer` supersedes it on landing pages.

---

## Task 1: Install `@mux/mux-player-react`

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install the package**

```bash
npm install @mux/mux-player-react
```

Expected output: package added, `package.json` updated with `"@mux/mux-player-react": "^3.x.x"` (or similar).

- [ ] **Step 2: Verify TypeScript types are included**

```bash
cat node_modules/@mux/mux-player-react/package.json | grep '"types"'
```

Expected: a `"types"` or `"typings"` field pointing to a `.d.ts` file. Mux bundles its own types — no `@types/` package needed.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install @mux/mux-player-react"
```

---

## Task 2: Create `StoryPlayer` component

**Files:**
- Create: `src/components/landing/StoryPlayer.tsx`

### What this component does

- Accepts `clips: { playbackId: string; label?: string }[]`
- Renders a 9:16 container (max 360px wide, centered)
- Shows segmented progress bars at the top — one per clip, filling over the clip's duration
- When a clip ends → auto-advance to next; last clip loops back to first
- Tapping left 40% of the container → previous clip
- Tapping right 60% of the container → next clip
- Tap-and-hold → pause (progress pauses too)
- `MuxPlayer` has all controls hidden via CSS custom property
- When `clips` is empty → renders a placeholder matching the existing `VideoPlaceholder` style

### Progress bar logic

Progress is driven by `onTimeUpdate` from MuxPlayer. Each clip's fill = `currentTime / duration * 100`. Clips before the current index show 100% fill; clips after show 0%.

- [ ] **Step 1: Create the file with this full implementation**

```tsx
"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import MuxPlayer from "@mux/mux-player-react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

interface Clip {
  playbackId: string;
  label?: string;
}

interface StoryPlayerProps {
  clips: Clip[];
  className?: string;
}

export default function StoryPlayer({ clips, className = "" }: StoryPlayerProps) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0); // 0–100 for current clip
  const [isPaused, setIsPaused] = useState(false);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // When clip index changes, reset progress and play
  useEffect(() => {
    setProgress(0);
    setIsPaused(false);
  }, [current]);

  const goTo = useCallback((index: number) => {
    setCurrent((index + clips.length) % clips.length);
  }, [clips.length]);

  const handleTimeUpdate = useCallback((e: Event) => {
    const video = e.target as HTMLVideoElement;
    if (!video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  }, []);

  const handleEnded = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const handlePointerDown = useCallback(() => {
    holdTimer.current = setTimeout(() => {
      setIsPaused(true);
      playerRef.current?.pause();
    }, 200);
  }, []);

  const handlePointerUp = useCallback(() => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    if (isPaused) {
      setIsPaused(false);
      playerRef.current?.play();
    }
  }, [isPaused]);

  const handleTap = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isPaused) return; // release from hold, not a tap
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width * 0.4) {
      goTo(current - 1);
    } else {
      goTo(current + 1);
    }
  }, [current, goTo, isPaused]);

  // Empty state — styled like the old VideoPlaceholder
  if (clips.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`relative bg-secondary-light rounded-3xl overflow-hidden mx-auto border border-white/10 ${className}`}
        style={{ aspectRatio: "9 / 16", maxWidth: "360px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/30">
            <Play className="text-white ml-1" size={32} fill="white" />
          </div>
          <p className="text-white/50 text-sm text-center">Video bude brzy k dispozici</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative rounded-3xl overflow-hidden mx-auto bg-black select-none ${className}`}
      style={{ aspectRatio: "9 / 16", maxWidth: "360px" }}
    >
      {/* Progress bars */}
      <div className="absolute top-3 left-3 right-3 z-20 flex gap-1">
        {clips.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-0.5 rounded-full bg-white/30 overflow-hidden"
          >
            <div
              className="h-full bg-white rounded-full transition-none"
              style={{
                width:
                  i < current
                    ? "100%"
                    : i === current
                    ? `${progress}%`
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Tap zones */}
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={handleTap}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />

      {/* Pause indicator */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
          >
            <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
              <div className="flex gap-1.5">
                <div className="w-1.5 h-6 bg-white rounded-full" />
                <div className="w-1.5 h-6 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Player */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <MuxPlayer
            ref={playerRef}
            playbackId={clips[current].playbackId}
            autoPlay="muted"
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate as unknown as React.ReactEventHandler}
            onEnded={handleEnded as unknown as React.ReactEventHandler}
            style={
              {
                width: "100%",
                height: "100%",
                "--controls": "none",
                "--media-object-fit": "cover",
              } as React.CSSProperties
            }
          />
        </motion.div>
      </AnimatePresence>

      {/* Label */}
      {clips[current].label && (
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white/80 text-xs">
            {clips[current].label}
          </span>
        </div>
      )}
    </motion.div>
  );
}
```

- [ ] **Step 2: Run the TypeScript compiler to verify no type errors**

```bash
npx tsc --noEmit
```

Expected: no errors. If you see `ref` type errors from MuxPlayer, replace the `ref={playerRef}` approach with an `onLoadedMetadata` handler that caches `e.target as HTMLVideoElement` into the ref instead:

```tsx
const handleRef = useCallback((e: Event) => {
  playerRef.current = e.target as HTMLVideoElement;
}, []);
// Add to MuxPlayer: onLoadedMetadata={handleRef as unknown as React.ReactEventHandler}
// Remove: ref={playerRef}
// Update handlePointerDown/Up to read playerRef.current directly
```

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/StoryPlayer.tsx
git commit -m "feat: add StoryPlayer component with Mux"
```

---

## Task 3: Wire `StoryPlayer` into MentoringContent

**Files:**
- Modify: `src/app/mentoring/MentoringContent.tsx:32,270`

The file currently imports and renders `VideoPlaceholder` at line 270. Replace with `StoryPlayer`.

- [ ] **Step 1: Update the import at the top of the file**

Find:
```tsx
import VideoPlaceholder from "@/components/landing/VideoPlaceholder";
```

Replace with:
```tsx
import StoryPlayer from "@/components/landing/StoryPlayer";
```

- [ ] **Step 2: Replace the VideoPlaceholder JSX (around line 270)**

Find:
```tsx
<VideoPlaceholder title="Jak mentoring funguje v praxi" duration="45–60 sec" />
```

Replace with:
```tsx
<StoryPlayer
  clips={[
    // Add your Mux playback IDs here when ready, e.g.:
    // { playbackId: "VS3E2jiIMjS4Iu1XzLDH01", label: "Jak mentoring funguje v praxi" }
  ]}
/>
```

- [ ] **Step 3: Start dev server and verify the placeholder state renders correctly**

```bash
npm run dev
```

Open `http://localhost:3000/mentoring` — the hero section should show the dark 9:16 placeholder with the play icon, centered, matching the style of the old VideoPlaceholder but in portrait format.

- [ ] **Step 4: Commit**

```bash
git add src/app/mentoring/MentoringContent.tsx
git commit -m "feat: replace VideoPlaceholder with StoryPlayer on mentoring page"
```

---

## Task 4: Wire `StoryPlayer` into SkoleniContent

**Files:**
- Modify: `src/app/skoleni-pro-vyvojare/SkoleniContent.tsx:9,135`

- [ ] **Step 1: Update the import**

Find:
```tsx
import VideoPlaceholder from "@/components/landing/VideoPlaceholder";
```

Replace with:
```tsx
import StoryPlayer from "@/components/landing/StoryPlayer";
```

- [ ] **Step 2: Replace the VideoPlaceholder JSX (around line 135)**

Read the exact props being passed to `VideoPlaceholder` in this file first:
```bash
grep -n "VideoPlaceholder" src/app/skoleni-pro-vyvojare/SkoleniContent.tsx
```

Replace the entire `<VideoPlaceholder ... />` block with:
```tsx
<StoryPlayer
  clips={[
    // Add Mux playback IDs here when ready
  ]}
/>
```

- [ ] **Step 3: Verify at `http://localhost:3000/skoleni-pro-vyvojare`**

The 9:16 placeholder should render correctly in the hero section.

- [ ] **Step 4: Commit**

```bash
git add src/app/skoleni-pro-vyvojare/SkoleniContent.tsx
git commit -m "feat: replace VideoPlaceholder with StoryPlayer on skoleni page"
```

---

## Task 5: Wire `StoryPlayer` into KonzultaceLandingContent

**Files:**
- Modify: `src/app/konzultace/KonzultaceLandingContent.tsx:18,125`

- [ ] **Step 1: Update the import**

Find:
```tsx
import VideoPlaceholder from "@/components/landing/VideoPlaceholder";
```

Replace with:
```tsx
import StoryPlayer from "@/components/landing/StoryPlayer";
```

- [ ] **Step 2: Replace the VideoPlaceholder JSX (around line 125)**

Read the exact props:
```bash
grep -n "VideoPlaceholder" src/app/konzultace/KonzultaceLandingContent.tsx
```

Replace with:
```tsx
<StoryPlayer
  clips={[
    // Add Mux playback IDs here when ready
  ]}
/>
```

- [ ] **Step 3: Verify at `http://localhost:3000/konzultace`**

The 9:16 placeholder renders in the hero section.

- [ ] **Step 4: Commit**

```bash
git add src/app/konzultace/KonzultaceLandingContent.tsx
git commit -m "feat: replace VideoPlaceholder with StoryPlayer on konzultace page"
```

---

## Task 6: Smoke test with a real Mux playback ID

Once you have a Mux account and have uploaded at least one test video:

- [ ] **Step 1: Get a test playback ID from the Mux dashboard**

Mux → Video → Assets → pick any asset → copy the Playback ID (format: `xxxxxxxxxxxxxxxxxxxxxxxx`).

> For testing you can use Mux's own public test ID: `DS00Spx1CV902MCtPj5WknGlR102V5HFkDe`

- [ ] **Step 2: Add it to one landing page**

In `src/app/mentoring/MentoringContent.tsx`, update:
```tsx
<StoryPlayer
  clips={[
    { playbackId: "DS00Spx1CV902MCtPj5WknGlR102V5HFkDe", label: "Jak mentoring funguje v praxi" },
  ]}
/>
```

- [ ] **Step 3: Verify in browser**

Open `http://localhost:3000/mentoring`. The video should:
- Autoplay muted in 9:16 portrait format
- Show a progress bar filling across the top
- Advance to the next clip (or loop) when finished
- Show the label at the bottom
- Respond to left/right taps for navigation

- [ ] **Step 4: Test on mobile viewport**

In DevTools, switch to a mobile viewport (375px wide). Verify the component scales correctly and touch taps navigate correctly.

- [ ] **Step 5: Revert to empty clips if the test ID was temporary**

```tsx
<StoryPlayer clips={[]} />
```

Or leave the real ID in if the video is production-ready.

---

## How to add new testimonial videos (workflow)

1. Upload the video to Mux (dashboard → Video → Assets → Upload)
2. Copy the Playback ID from the asset detail page
3. Add `{ playbackId: "...", label: "Person name / short description" }` to the `clips` array in the relevant landing page

No code changes beyond that array entry are needed.
