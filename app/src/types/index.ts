// Episode Types
export interface Guest {
  name: string;
  title: string;
  company?: string;
  links?: {
    linkedin?: string;
    website?: string;
    twitter?: string;
  };
}

export interface ShowNote {
  time: string;
  topic: string;
}

export interface EpisodeLink {
  title: string;
  url: string;
}

export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  slug: string;
  publishDate: string;
  duration: string;
  guest: Guest;
  description: string;
  keyTakeaways: string[];
  showNotes: ShowNote[];
  links: EpisodeLink[];
  spotifyUrl: string;
  youtubeUrl: string;
  tags: string[];
  transcript?: string;
  comicImage?: string;
  thumbnail: string;
}

// Project Types
export interface Project {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Frameworks' | 'Diagrams' | 'Episode Resources' | 'Notes';
  tags: string[];
  featured?: boolean;
  excerpt: string;
  content: string;
}

// Form Types
export interface GuestFormData {
  name: string;
  email: string;
  guestName: string;
  guestRole: string;
  reason: string;
  links?: string;
}

export interface PartnerFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  partnershipType: string;
  goals: string;
}

export interface DemoFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  problem: string;
  timeline: string;
}
