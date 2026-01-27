# The Moving Target — Technical Plan

## Stack Overview

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | React + Vite | Fast, modern, excellent DX |
| Language | TypeScript | Type safety, better maintainability |
| Styling | Tailwind CSS | Utility-first, rapid development |
| UI Components | shadcn/ui | Accessible, customizable components |
| Routing | React Router v6 | Client-side routing, dynamic routes |
| Content | Markdown/JSON | Simple, version-controlled content |
| Forms | Formspree | Zero-backend form handling |
| Hosting | Vercel | Fast CDN, automatic deployments |
| Analytics | Plausible | Privacy-focused, lightweight |

---

## Project Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── episodes/           # Episode images, comics
│   ├── assets/             # Logos, brand assets
│   └── fonts/              # Custom fonts (if any)
├── src/
│   ├── components/         # Reusable components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── layout/        # Header, Footer, Navigation
│   │   ├── cards/         # EpisodeCard, ProjectCard
│   │   └── forms/         # Contact forms
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── LatestEpisode.tsx
│   │   ├── EpisodeGrid.tsx
│   │   ├── Pillars.tsx
│   │   ├── MariaFeature.tsx
│   │   ├── SocialProof.tsx
│   │   └── Newsletter.tsx
│   ├── pages/             # Route pages
│   │   ├── Home.tsx
│   │   ├── Episodes.tsx
│   │   ├── EpisodeDetail.tsx
│   │   ├── Agents.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── About.tsx
│   │   ├── Inquiries.tsx
│   │   ├── InquiriesSuccess.tsx
│   │   └── Press.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities, helpers
│   │   ├── utils.ts
│   │   └── data.ts        # Content data functions
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   ├── content/           # Content files
│   │   ├── episodes/      # Episode JSON files
│   │   └── projects/      # Project markdown files
│   ├── styles/            # Global styles
│   │   └── globals.css
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── router.tsx         # Route configuration
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Content Management Strategy

### Episodes: JSON Files

Each episode is a JSON file in `src/content/episodes/`

```json
{
  "id": "ep-12-ai-agents-hospitality",
  "episodeNumber": 12,
  "title": "AI Agents in Hospitality: Beyond the Hype",
  "slug": "ai-agents-in-hospitality",
  "publishDate": "2025-01-15",
  "duration": "45:00",
  "guest": {
    "name": "Guest Name",
    "title": "Title at Company",
    "links": {
      "linkedin": "https://linkedin.com/in/...",
      "website": "https://..."
    }
  },
  "description": "Episode description...",
  "keyTakeaways": [
    "First takeaway...",
    "Second takeaway..."
  ],
  "showNotes": [
    { "time": "00:00", "topic": "Introduction" },
    { "time": "03:45", "topic": "The state of AI in hospitality" }
  ],
  "links": [
    { "title": "Resource name", "url": "https://..." }
  ],
  "spotifyUrl": "https://open.spotify.com/episode/...",
  "youtubeUrl": "https://youtube.com/watch?v=...",
  "tags": ["AI Agents", "Hospitality", "Operations"],
  "transcript": "Full transcript text...",
  "comicImage": "/episodes/ep12-comic.png",
  "thumbnail": "/episodes/ep12-thumb.png"
}
```

### Projects: Markdown Files

Each project is a Markdown file in `src/content/projects/`

```markdown
---
id: rag-context-layers
title: "RAG Context Layers: A Practical Guide"
date: "2025-01-10"
category: "Frameworks"
tags: ["RAG", "LLMs", "Architecture"]
---

# RAG Context Layers: A Practical Guide

Content here...
```

### Content Helper Functions

```typescript
// src/lib/data.ts

// Get all episodes sorted by date
export function getAllEpisodes(): Episode[]

// Get latest episode
export function getLatestEpisode(): Episode

// Get episode by slug
export function getEpisodeBySlug(slug: string): Episode | undefined

// Get all projects
export function getAllProjects(): Project[]

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined

// Filter episodes by tag
export function getEpisodesByTag(tag: string): Episode[]
```

---

## Adding New Content

### Adding an Episode

1. Create JSON file: `src/content/episodes/ep-XX-title.json`
2. Add thumbnail image to `public/episodes/`
3. Add comic image (optional) to `public/episodes/`
4. Commit and push — site redeploys automatically

**Time required:** < 5 minutes

### Adding a Project

1. Create Markdown file: `src/content/projects/project-title.md`
2. Add any images to `public/projects/`
3. Commit and push — site redeploys automatically

**Time required:** < 5 minutes

---

## Form Handling

### Formspree Setup

1. Create account at formspree.io
2. Create three forms:
   - Guest Suggestion
   - Partnership Inquiry
   - Demo Request
3. Copy form endpoints to environment variables

### Environment Variables

```bash
# .env.local
VITE_FORMSPREE_GUEST_FORM_ID=xxxxxx
VITE_FORMSPREE_PARTNER_FORM_ID=xxxxxx
VITE_FORMSPREE_DEMO_FORM_ID=xxxxxx
VITE_PLAUSIBLE_DOMAIN=themovingtarget.com
```

### Form Component Pattern

```tsx
// Using Formspree React integration
import { useForm } from '@formspree/react';

function GuestForm() {
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_GUEST_FORM_ID
  );
  
  if (state.succeeded) {
    return <Navigate to="/inquiries/success" />;
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

---

## SEO & Meta Tags

### React Helmet Async

```tsx
import { Helmet } from 'react-helmet-async';

function EpisodeDetail({ episode }) {
  return (
    <>
      <Helmet>
        <title>{episode.title} | The Moving Target</title>
        <meta name="description" content={episode.description} />
        <meta property="og:title" content={episode.title} />
        <meta property="og:description" content={episode.description} />
        <meta property="og:image" content={episode.thumbnail} />
        <meta property="og:type" content="article" />
      </Helmet>
      {/* Page content */}
    </>
  );
}
```

### Sitemap Generation

```javascript
// scripts/generate-sitemap.js
// Run at build time to generate sitemap.xml
```

---

## Analytics Setup

### Plausible Integration

```html
<!-- index.html -->
<script 
  defer 
  data-domain="themovingtarget.com" 
  src="https://plausible.io/js/script.js"
></script>
```

### Custom Events

```typescript
// Track important interactions
window.plausible?.('Demo Request', { props: { source: 'agents-page' } });
```

---

## Performance Optimizations

### Images
- Use WebP format with JPEG fallback
- Implement lazy loading
- Provide srcset for responsive images
- Use blur placeholder for above-fold images

### Code Splitting
- Route-based code splitting via React.lazy()
- Dynamic imports for heavy components

### Build Optimizations
- Tree shaking
- Minification
- Gzip/Brotli compression
- Asset hashing for caching

---

## Deployment

### Vercel Configuration

```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

### Deployment Steps

1. Push to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy — automatic on every push

---

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route in `src/router.tsx`
3. Add navigation link in `src/components/layout/Header.tsx`
4. Create any needed content files

---

## Dependencies

### Core
- react
- react-dom
- react-router-dom
- typescript
- vite

### UI
- tailwindcss
- @radix-ui/* (via shadcn/ui)
- lucide-react
- class-variance-authority
- clsx
- tailwind-merge

### Forms
- @formspree/react

### SEO
- react-helmet-async

### Content
- gray-matter (for Markdown frontmatter)
- marked (for Markdown parsing)

### Dev
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- autoprefixer
- postcss
- eslint
