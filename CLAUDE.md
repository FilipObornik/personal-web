# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Filip Oborník, an AI & Vibe Coding consultant. The site is in Czech (locale: cs_CZ) and showcases services like workshops, mentoring, and AI implementation consulting.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (uses `@import "tailwindcss"` syntax)
- **Framer Motion** for animations
- **Lucide React** for icons

## Architecture

### Path Aliases
`@/*` → `./src/*`

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/sluzby/[slug]/` - Service detail pages (webinare-a-workshopy, konzultace, etc.)
- `src/components/layout/` - Header, Footer
- `src/components/sections/` - Homepage sections (Hero, Services, Portfolio, etc.)
- `src/components/services/` - Reusable service page components (ServicePageHeader, OtherServices)
- `src/components/ui/` - UI primitives (AnimatedCounter, WaveSeparator)
- `src/lib/data.ts` - Centralized data/content and TypeScript interfaces

### Key Patterns

**Data-driven content**: All site content (services, testimonials, navigation, etc.) is defined in `src/lib/data.ts`. Update content there rather than in components.

**Client components**: Components using Framer Motion or browser APIs are marked with `"use client"`.

**Styling**: Uses Tailwind with custom CSS variables defined in `globals.css`:
- Primary color: `--color-primary` (orange)
- Secondary color: `--color-secondary` (deep blue)
- Utility classes: `section-padding`, `container-narrow`, `gradient-text`, `card-lift`

**Fonts**: Inter (body) and SUSE (headings) loaded via `next/font/google`.

**Service pages**: Follow a consistent structure using `ServicePageHeader` and `OtherServices` components. Each service page scrolls to top on load.
