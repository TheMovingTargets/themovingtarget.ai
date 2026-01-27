# The Moving Target — Website

A premium podcast and AI agent showcase website for The Moving Target.

**Live Site:** https://jjamqvuwfmwjg.ok.kimi.link

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# Navigate to the project directory
cd /mnt/okcomputer/output/app

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## Adding Content

### Adding a New Episode

1. Create a JSON file in `src/content/episodes/ep-XX-title.json`
2. Follow the episode schema
3. Add episode thumbnail to `public/episodes/`
4. Run `npm run build` to verify
5. Deploy

**Time required:** < 5 minutes

### Adding a New Project

1. Create a JSON file in `src/content/projects/project-name.json`
2. Follow the project schema
3. Run `npm run build` to verify
4. Deploy

**Time required:** < 5 minutes

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, latest episode, MARIA feature |
| Episodes | `/episodes` | Episode listing with filters |
| Episode Detail | `/episodes/:slug` | Episode player, show notes, transcript |
| Agents | `/agents` | MARIA overview and demo request |
| Projects | `/projects` | Repository of articles and resources |
| About | `/about` | Story, hosts, values |
| Inquiries | `/inquiries` | Guest, partner, demo forms |
| Press Kit | `/press` | Bios, blurbs, brand assets |

---

## Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router v6
