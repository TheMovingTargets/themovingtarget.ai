import type { Episode, Project } from '@/types';

// Import all episode JSON files
const episodeFiles = import.meta.glob('@/content/episodes/*.json', { eager: true });

// Import all project JSON files
const projectFiles = import.meta.glob('@/content/projects/*.json', { eager: true });

export function getAllEpisodes(): Episode[] {
  const episodes = Object.values(episodeFiles).map((file: unknown) => (file as { default: Episode }).default);
  return episodes.sort((a: Episode, b: Episode) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getLatestEpisode(): Episode {
  return getAllEpisodes()[0];
}

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return getAllEpisodes().find(episode => episode.slug === slug);
}

export function getEpisodesByTag(tag: string): Episode[] {
  return getAllEpisodes().filter(episode => 
    episode.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllTags(): string[] {
  const episodes = getAllEpisodes();
  const tags = new Set<string>();
  episodes.forEach(episode => {
    episode.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getAllGuests(): string[] {
  const episodes = getAllEpisodes();
  const guests = new Set<string>();
  episodes.forEach(episode => {
    if (episode.guest.name !== 'No Guest') {
      guests.add(episode.guest.name);
    }
  });
  return Array.from(guests).sort();
}

export function getAllProjects(): Project[] {
  const projects = Object.values(projectFiles).map((file: unknown) => (file as { default: Project }).default);
  return projects.sort((a: Project, b: Project) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(project => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter(project => 
    project.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllProjectCategories(): string[] {
  const projects = getAllProjects();
  const categories = new Set<string>();
  projects.forEach(project => categories.add(project.category));
  return Array.from(categories).sort();
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Format duration
export function formatDuration(duration: string): string {
  return duration;
}

// Extract YouTube video ID from URL
export function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
    /youtube\.com\/shorts\/([^&\s?]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
}
