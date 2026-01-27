# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Moving Target is a podcast and AI agent showcase website built with React, TypeScript, and Vite. It's a static SPA with no backend - content is stored as JSON files, forms use Formspree, and analytics use Plausible.

## Commands

All commands run from the `/app` directory:

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # TypeScript check + Vite build to dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint on TypeScript/TSX files
```

## Architecture

### Directory Structure
```
/app/src/
├── components/
│   ├── ui/           # shadcn/ui components (55+ files)
│   ├── layout/       # Header.tsx, Footer.tsx
│   ├── cards/        # EpisodeCard, ProjectCard
│   └── forms/        # Contact/inquiry forms
├── pages/            # Route pages (10 pages)
├── content/
│   ├── episodes/     # Episode JSON files (ep-1 through ep-6)
│   └── projects/     # Project JSON files
├── lib/
│   ├── data.ts       # Content loading via Vite glob imports
│   └── utils.ts
├── types/index.ts    # TypeScript type definitions
├── router.tsx        # React Router config (13 routes)
└── App.tsx           # Root component with providers
```

### Content System

Content is stored as JSON files in `src/content/`. The `lib/data.ts` module uses Vite's `import.meta.glob` to load content at build time.

**Adding an episode:** Create `/app/src/content/episodes/ep-XX-slug.json` following the Episode type in `types/index.ts`

**Adding a project:** Create `/app/src/content/projects/slug.json` following the Project type in `types/index.ts`

**Assets:** Episode thumbnails and comics go in `/app/public/episodes/`

### Key Routes
- `/` - Home with hero, latest episode, MARIA feature
- `/episodes` and `/episodes/:slug` - Episode listing and detail
- `/agents` - MARIA AI agent showcase
- `/projects` and `/projects/:slug` - Resource repository
- `/inquiries` - Guest, partner, demo request forms

### Tech Stack
- React 19 + React Router v7
- TypeScript (strict mode, path alias `@/*` → `./src/*`)
- Vite 7 for build
- Tailwind CSS + shadcn/ui (new-york style)
- React Helmet Async for SEO
- Formspree for form handling

### Environment Variables
```
VITE_FORMSPREE_GUEST_FORM_ID
VITE_FORMSPREE_PARTNER_FORM_ID
VITE_FORMSPREE_DEMO_FORM_ID
VITE_PLAUSIBLE_DOMAIN
```

## Strategy Documentation

Detailed strategy docs are in `/strategy/`:
- `A_STRATEGY_SUMMARY.md` - Positioning, user journeys, success metrics
- `E_DESIGN_SYSTEM.md` - Design tokens, colors, typography
- `F_TECHNICAL_PLAN.md` - Architecture rationale
- `H_CONTENT_SCHEMA.md` - JSON schemas for content
