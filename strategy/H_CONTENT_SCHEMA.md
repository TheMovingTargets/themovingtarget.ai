# The Moving Target — Content Schema

## Episode Schema

### File Location
`src/content/episodes/{slug}.json`

### TypeScript Interface

```typescript
interface Episode {
  id: string;                    // Unique identifier
  episodeNumber: number;         // Episode number (1, 2, 3...)
  title: string;                 // Episode title
  slug: string;                  // URL-friendly slug
  publishDate: string;           // ISO date (YYYY-MM-DD)
  duration: string;              // Duration string (MM:SS or HH:MM:SS)
  
  guest: {
    name: string;               // Guest full name
    title: string;              // Guest title/role
    company?: string;           // Guest company (optional)
    links?: {
      linkedin?: string;
      website?: string;
      twitter?: string;
    };
  };
  
  description: string;           // Short episode description
  
  keyTakeaways: string[];        // 5 key takeaways (bullets)
  
  showNotes: {
    time: string;               // Timestamp (MM:SS or HH:MM:SS)
    topic: string;              // Topic at this timestamp
  }[];
  
  links: {
    title: string;              // Resource name
    url: string;                // Resource URL
  }[];
  
  spotifyUrl: string;            // Spotify episode URL
  youtubeUrl: string;            // YouTube video URL
  
  tags: string[];                // Topic tags
  
  transcript?: string;           // Full transcript (optional)
  
  comicImage?: string;           // Path to comic image
  thumbnail: string;             // Path to thumbnail image
}
```

### Example Episode

```json
{
  "id": "ep-12-ai-agents-hospitality",
  "episodeNumber": 12,
  "title": "AI Agents in Hospitality: Beyond the Hype",
  "slug": "ai-agents-in-hospitality",
  "publishDate": "2025-01-15",
  "duration": "45:00",
  "guest": {
    "name": "Sarah Chen",
    "title": "Head of Technology",
    "company": "Grand Hotels Group",
    "links": {
      "linkedin": "https://linkedin.com/in/sarahchen",
      "website": "https://sarahchen.com"
    }
  },
  "description": "Sarah Chen joins us to discuss real AI agent deployments in the hospitality industry—what's working, what's not, and what operators need to know before they build.",
  "keyTakeaways": [
    "Most hospitality AI projects fail because they start with technology, not operations.",
    "The best agent deployments augment staff rather than replace them.",
    "Context is everything—generic LLMs perform poorly without operational data.",
    "Start with a single workflow, prove value, then expand.",
    "Staff buy-in is the make-or-break factor for AI success."
  ],
  "showNotes": [
    { "time": "00:00", "topic": "Introduction and Sarah's background" },
    { "time": "04:30", "topic": "The current state of AI in hospitality" },
    { "time": "12:15", "topic": "Real deployment stories—successes and failures" },
    { "time": "24:45", "topic": "Common pitfalls and how to avoid them" },
    { "time": "36:20", "topic": "What's next for agentic systems in hospitality" },
    { "time": "43:00", "topic": "Closing thoughts and resources" }
  ],
  "links": [
    { "title": "Sarah's article on Hospitality Tech", "url": "https://example.com/article" },
    { "title": "Grand Hotels Group", "url": "https://grandhotels.com" },
    { "title": "Hospitality AI Report 2024", "url": "https://example.com/report" }
  ],
  "spotifyUrl": "https://open.spotify.com/episode/abc123",
  "youtubeUrl": "https://youtube.com/watch?v=xyz789",
  "tags": ["AI Agents", "Hospitality", "Operations", "Case Study"],
  "transcript": "Full transcript text here...",
  "comicImage": "/episodes/ep12-comic.png",
  "thumbnail": "/episodes/ep12-thumb.png"
}
```

---

## Project Schema

### File Location
`src/content/projects/{slug}.md`

### Frontmatter Schema

```yaml
---
id: string                    # Unique identifier
slug: string                  # URL-friendly slug
title: string                 # Project title
date: string                  # ISO date (YYYY-MM-DD)
category: string              # Category: Frameworks | Diagrams | Episode Resources | Notes
tags: string[]                # Topic tags
featured: boolean             # Featured on homepage (optional)
excerpt: string               # Short description for cards
---
```

### TypeScript Interface

```typescript
interface Project {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Frameworks' | 'Diagrams' | 'Episode Resources' | 'Notes';
  tags: string[];
  featured?: boolean;
  excerpt: string;
  content: string;            // Markdown content (parsed)
}
```

### Example Project

```markdown
---
id: rag-context-layers-guide
slug: rag-context-layers-guide
title: "RAG Context Layers: A Practical Guide"
date: "2025-01-10"
category: "Frameworks"
tags: ["RAG", "LLMs", "Architecture", "Context"]
featured: true
excerpt: "A framework for thinking about context in retrieval-augmented generation systems."
---

# RAG Context Layers: A Practical Guide

When building RAG systems, context isn't binary—it's layered. Understanding these layers helps you design more effective retrieval and generation pipelines.

## The Four Layers

### 1. Static Context
Information that rarely changes: company policies, product specifications, historical data.

### 2. Dynamic Context
Real-time information: user preferences, current session data, live system state.

### 3. Ephemeral Context
Temporary information relevant to the current interaction: conversation history, recent actions.

### 4. Inferred Context
Information derived from other contexts: user intent, sentiment, implicit needs.

## Implementation Strategies

[Content continues...]
```

---

## Sample Episodes (6 Examples)

### Episode 1: Introduction to The Moving Target
```json
{
  "id": "ep-1-introduction",
  "episodeNumber": 1,
  "title": "Introduction: Why We're Starting This",
  "slug": "introduction-why-were-starting-this",
  "publishDate": "2024-08-15",
  "duration": "32:00",
  "guest": {
    "name": "No Guest",
    "title": "Hosts Only"
  },
  "description": "Sidd and Avyay introduce The Moving Target—why we're starting this podcast, what we plan to cover, and what listeners can expect.",
  "keyTakeaways": [
    "The gap between AI hype and operational reality is massive.",
    "We need more honest conversations about what actually works.",
    "The target moves fast—staying oriented is the challenge.",
    "We'll cover both the podcast conversations and our own builds.",
    "Listener questions and guest suggestions are always welcome."
  ],
  "showNotes": [
    { "time": "00:00", "topic": "Introduction" },
    { "time": "03:00", "topic": "Why this podcast now?" },
    { "time": "10:30", "topic": "What we plan to cover" },
    { "time": "20:00", "topic": "Our backgrounds and perspectives" },
    { "time": "28:00", "topic": "How to engage with us" }
  ],
  "links": [],
  "spotifyUrl": "[SPOTIFY_SHOW_URL]",
  "youtubeUrl": "[YOUTUBE_CHANNEL_URL]",
  "tags": ["Introduction", "AI", "Automation"],
  "thumbnail": "/episodes/ep1-thumb.png"
}
```

### Episode 2: Understanding LLMs
```json
{
  "id": "ep-2-understanding-llms",
  "episodeNumber": 2,
  "title": "Understanding LLMs: A Primer for Operators",
  "slug": "understanding-llms-primer",
  "publishDate": "2024-09-15",
  "duration": "48:00",
  "guest": {
    "name": "Dr. Priya Sharma",
    "title": "AI Research Lead",
    "company": "Tech Labs"
  },
  "description": "Dr. Priya Sharma breaks down large language models for non-technical operators—how they work, what they can and can't do, and how to think about using them.",
  "keyTakeaways": [
    "LLMs are prediction engines, not knowledge bases.",
    "Context window limitations are real and matter for applications.",
    "Prompt engineering is about clarity, not trickery.",
    "Hallucinations are a feature of how LLMs work, not a bug to fix.",
    "Start with problems, not technology."
  ],
  "showNotes": [
    { "time": "00:00", "topic": "Introduction to Priya" },
    { "time": "05:00", "topic": "What LLMs actually do" },
    { "time": "15:00", "topic": "Capabilities and limitations" },
    { "time": "28:00", "topic": "Practical applications" },
    { "time": "40:00", "topic": "Common misconceptions" }
  ],
  "links": [
    { "title": "Priya's Blog", "url": "https://priyasharma.com" }
  ],
  "spotifyUrl": "[SPOTIFY_SHOW_URL]",
  "youtubeUrl": "[YOUTUBE_CHANNEL_URL]",
  "tags": ["LLMs", "Fundamentals", "Operations"],
  "thumbnail": "/episodes/ep2-thumb.png"
}
```

### Episode 3: RAG Deep Dive
```json
{
  "id": "ep-3-rag-deep-dive",
  "episodeNumber": 3,
  "title": "RAG Deep Dive: Retrieval That Actually Works",
  "slug": "rag-deep-dive",
  "publishDate": "2024-10-15",
  "duration": "52:00",
  "guest": {
    "name": "Marcus Johnson",
    "title": "Founder",
    "company": "VectorDB Inc"
  },
  "description": "Marcus Johnson from VectorDB Inc joins us for a deep dive into retrieval-augmented generation—common patterns, failure modes, and production best practices.",
  "keyTakeaways": [
    "Chunking strategy matters more than embedding model choice.",
    "Hybrid search (keyword + semantic) outperforms either alone.",
    "Re-ranking significantly improves result quality.",
    "Evaluation is hard but essential—build feedback loops early.",
    "Most RAG failures are data quality issues, not retrieval issues."
  ],
  "showNotes": [
    { "time": "00:00", "topic": "Introduction to Marcus" },
    { "time": "04:00", "topic": "RAG architecture overview" },
    { "time": "14:00", "topic": "Chunking strategies" },
    { "time": "26:00", "topic": "Embedding and retrieval" },
    { "time": "38:00", "topic": "Evaluation and iteration" }
  ],
  "links": [
    { "title": "VectorDB Inc", "url": "https://vectordb.com" }
  ],
  "spotifyUrl": "[SPOTIFY_SHOW_URL]",
  "youtubeUrl": "[YOUTUBE_CHANNEL_URL]",
  "tags": ["RAG", "Vector DB", "Retrieval"],
  "thumbnail": "/episodes/ep3-thumb.png"
}
```

### Episode 4: Agents vs Workflows
```json
{
  "id": "ep-4-agents-vs-workflows",
  "episodeNumber": 4,
  "title": "Agents vs Workflows: When to Use What",
  "slug": "agents-vs-workflows",
  "publishDate": "2024-11-15",
  "duration": "41:00",
  "guest": {
    "name": "No Guest",
    "title": "Hosts Only"
  },
  "description": "Sidd and Avyay discuss the difference between agentic systems and traditional workflows—when each makes sense and how to decide what to build.",
  "keyTakeaways": [
    "Workflows are deterministic; agents are adaptive.",
    "Most 'agents' are actually just complex workflows.",
    "Start with workflows, add agentic behavior where needed.",
    "True agents require clear goals, tools, and feedback loops.",
    "Cost and latency are real constraints for agentic systems."
  ],
  "showNotes": [
    { "time": "00:00", "topic": "Introduction" },
    { "time": "05:00", "topic": "Defining agents and workflows" },
    { "time": "18:00", "topic": "Decision framework" },
    { "time": "30:00", "topic": "Real-world examples" },
    { "time": "38:00", "topic": "Closing thoughts" }
  ],
  "links": [],
  "spotifyUrl": "[SPOTIFY_SHOW_URL]",
  "youtubeUrl": "[YOUTUBE_CHANNEL_URL]",
  "tags": ["Agents", "Workflows", "Architecture"],
  "thumbnail": "/episodes/ep4-thumb.png"
}
```

### Episode 5: Building MARIA
```json
{
  "id": "ep-5-building-maria",
  "episodeNumber": 5,
  "title": "Building MARIA: Lessons from Our First Agent",
  "slug": "building-maria",
  "publishDate": "2024-12-15",
  "duration": "55:00",
  "guest": {
    "name": "No Guest",
    "title": "Hosts Only"
  },
  "description": "A behind-the-scenes look at building MARIA—our operational agent for hospitality teams. What we got right, what we got wrong, and what we'd do differently.",
  "keyTakeaways": [
    "Starting with a specific industry (hospitality) gave us focus.",
    "User research matters more than technical architecture early on.",
    "The 'simple' features often take the most time.",
    "Integration with existing tools is non-negotiable.",
    "We're still learning—this is a journey, not a destination."
  ],
  "showNotes": [
    { "time": "00:00", "topic": "Introduction" },
    { "time": "04:00", "topic": "Why hospitality?" },
    { "time": "12:00", "topic": "Early architecture decisions" },
    { "time": "25:00", "topic": "Challenges and pivots" },
    { "time": "42:00", "topic": "Current state and roadmap" }
  ],
  "links": [
    { "title": "MARIA Demo", "url": "/agents" }
  ],
  "spotifyUrl": "[SPOTIFY_SHOW_URL]",
  "youtubeUrl": "[YOUTUBE_CHANNEL_URL]",
  "tags": ["MARIA", "Building in Public", "Hospitality"],
  "thumbnail": "/episodes/ep5-thumb.png"
}
```

### Episode 6: AI in Hospitality
```json
{
  "id": "ep-6-ai-in-hospitality",
  "episodeNumber": 6,
  "title": "AI in Hospitality: A State of the Union",
  "slug": "ai-in-hospitality",
  "publishDate": "2025-01-15",
  "duration": "49:00",
  "guest": {
    "name": "Lisa Wong",
    "title": "VP of Innovation",
    "company": "ResortChain Global"
  },
  "description": "Lisa Wong shares her perspective on AI adoption in hospitality—where the industry is, where it's headed, and what operators should focus on in 2025.",
  "keyTakeaways": [
    "Hospitality is behind other industries in AI adoption.",
    "The best use cases focus on staff augmentation, not replacement.",
    "Guest expectations are rising—personalization is table stakes.",
    "Data silos are the biggest technical barrier.",
    "2025 will be the year of operational AI, not guest-facing AI."
  ],
  "showNotes": [
    { "time": "00:00", "topic": "Introduction to Lisa" },
    { "time": "05:00", "topic": "Current state of AI in hospitality" },
    { "time": "16:00", "topic": "Successful use cases" },
    { "time": "28:00", "topic": "Barriers to adoption" },
    { "time": "40:00", "topic": "Predictions for 2025" }
  ],
  "links": [
    { "title": "ResortChain Global", "url": "https://resortchain.com" }
  ],
  "spotifyUrl": "[SPOTIFY_SHOW_URL]",
  "youtubeUrl": "[YOUTUBE_CHANNEL_URL]",
  "tags": ["Hospitality", "Industry Analysis", "Trends"],
  "thumbnail": "/episodes/ep6-thumb.png"
}
```

---

## Sample Projects (3 Examples)

### Project 1: RAG Context Layers
```markdown
---
id: rag-context-layers
slug: rag-context-layers
title: "RAG Context Layers: A Practical Guide"
date: "2025-01-10"
category: "Frameworks"
tags: ["RAG", "LLMs", "Architecture", "Context"]
featured: true
excerpt: "A framework for thinking about context in retrieval-augmented generation systems."
---

# RAG Context Layers: A Practical Guide

When building RAG systems, context isn't binary—it's layered. Understanding these layers helps you design more effective retrieval and generation pipelines.

[Full content...]
```

### Project 2: Agent Decision Matrix
```markdown
---
id: agent-decision-matrix
slug: agent-decision-matrix
title: "Agent Decision Matrix: When to Build What"
date: "2024-12-20"
category: "Frameworks"
tags: ["Agents", "Workflows", "Decision Making"]
featured: false
excerpt: "A simple framework for deciding between agents, workflows, and hybrid approaches."
---

# Agent Decision Matrix

Use this matrix to guide your architecture decisions...

[Full content...]
```

### Project 3: Episode 3 Resources
```markdown
---
id: ep3-resources
slug: ep3-resources
title: "Episode 3: Additional Resources"
date: "2024-10-16"
category: "Episode Resources"
tags: ["RAG", "Vector DB", "Resources"]
featured: false
excerpt: "Links and resources mentioned in Episode 3 with our commentary."
---

# Episode 3: Additional Resources

Links and resources mentioned in our conversation with Marcus Johnson...

[Full content...]
```

---

## Content Management Checklist

### Adding a New Episode
- [ ] Create JSON file with all required fields
- [ ] Generate episode thumbnail (1200x630px)
- [ ] Generate episode comic (optional, 1200x1600px)
- [ ] Add Spotify and YouTube URLs
- [ ] Write 5 key takeaways
- [ ] Create timestamped show notes
- [ ] Add relevant links
- [ ] Tag appropriately
- [ ] Test locally before deploying

### Adding a New Project
- [ ] Create Markdown file with frontmatter
- [ ] Write clear, scannable content
- [ ] Add any necessary images
- [ ] Categorize correctly
- [ ] Tag appropriately
- [ ] Test locally before deploying
