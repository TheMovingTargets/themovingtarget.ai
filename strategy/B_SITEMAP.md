# The Moving Target — Sitemap & Navigation Structure

## Primary Navigation (Header)

```
[Logo: The Moving Target]    Episodes | Agents | Projects | About | Inquiries
                                                      [Listen Button]
```

**Rationale:** Clean, five-item nav. "Inquiries" is explicit (not "Contact") to signal multiple paths. "Listen" CTA is always visible.

---

## Full Sitemap

```
themovingtarget.com/
│
├── / (Home)
│   └── Sections: Hero, Latest Episode, Episode Grid, What We Talk About,
│                 MARIA Feature, Social Proof, Newsletter
│
├── /episodes (Episode Index)
│   └── Filters: Topic, Guest, Date | Search | Grid of episode cards
│
├── /episodes/[slug] (Episode Detail - Template)
│   └── Title, Guest, Date, Topics, Spotify Embed, YouTube Embed,
│       5 Key Takeaways, Show Notes, Transcript, Links, CTAs
│
├── /agents (What We Build)
│   └── MARIA Overview, How It Works, Use Cases, Demo Request Form
│
├── /projects (Repository)
│   └── Articles, Resources, Frameworks | Filter by category
│
├── /projects/[slug] (Project Detail - Template)
│   └── Title, Content, Share Links, Related Items
│
├── /about
│   └── Story, Host Bios (Sidd + Avyay), What We Care About, CTA
│
├── /inquiries
│   └── Three paths: Guest | Partnership | Demo (tabs or sections)
│
├── /inquiries/success
│   └── Confirmation + Next Steps
│
├── /press (Press Kit)
│   └── Description, Bios, Headshots, Brand Assets, Blurbs, Links
│
└── /comics (Optional - Episode Comics Gallery)
    └── Grid of four-panel webcomics by episode
```

---

## Footer Navigation

```
[Logo]                    Episodes | Agents | Projects | About | Inquiries
                          Press Kit | RSS Feed

[Social: Spotify] [YouTube] [LinkedIn] [X]

© 2025 The Moving Target. Built with intention.
```

---

## URL Structure Rules

| Content Type | URL Pattern | Example |
|--------------|-------------|---------|
| Episode | `/episodes/[kebab-title]` | `/episodes/ai-agents-in-hospitality` |
| Project | `/projects/[kebab-title]` | `/projects/rag-context-layers-guide` |
| Static | `/[page-name]` | `/about`, `/inquiries` |

---

## Navigation States

### Desktop
- Fixed header on scroll
- Active state indicator (underline or highlight)
- Dropdown: None (flat structure)

### Mobile
- Hamburger menu
- Full-screen overlay
- Collapsible sections

---

## Breadcrumbs (Optional)

Only on deep pages (episode detail, project detail):
```
Home > Episodes > AI Agents in Hospitality
```

---

## Redirects

| From | To |
|------|-----|
| `/podcast` | `/episodes` |
| `/contact` | `/inquiries` |
| `/maria` | `/agents` |
