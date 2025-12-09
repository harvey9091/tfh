export interface SocialLinks {
  youtube: string;
  instagram: string;
  discord: string;
}

export interface Member {
  id: string;
  name: string;
  status: string;
  location: string;
  description: string;
  imageUrl?: string; 
  prompt: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
}

export enum SectionId {
  HERO = 'hero',
  SQUAD = 'squad',
  VIDEOS = 'videos',
  FOOTER = 'footer'
}