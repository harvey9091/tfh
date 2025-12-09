
import { Member, SocialLinks, Video } from './types';

export const SOCIAL_LINKS: SocialLinks = {
  youtube: 'https://www.youtube.com/@tfh-warzone',
  instagram: 'https://www.instagram.com/tfh.tamil.gaming/',
  discord: 'https://discord.gg/9ngvxaaGjx',
};

export const SQUAD_MEMBERS: Member[] = [
  {
    id: 'hunger',
    name: 'HUNGER',
    status: 'UNKNOWN',
    location: 'UNKNOWN',
    description: 'A relentless predator who stalks targets till the end. Hunger isn’t just a name — it’s a curse.',
    // New Image: Verified Working Tactical Scope / Rifle Detail
    imageUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800&auto=format&fit=crop', 
    prompt: 'A high-tech sniper rifle lying on a dark metallic surface. Minimalist, premium, dark cinematic lighting.'
  },
  {
    id: 'phantom',
    name: 'PHANTOM',
    status: 'OPERATES IN SILENCE',
    location: 'CLASSIFIED',
    description: 'A ghost in the battlefield. Unseen, unheard, unstoppable.',
    // Working Image: Dark Pistol on Table
    imageUrl: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=800&auto=format&fit=crop', 
    prompt: 'A sleek, silenced pistol with matte black finish. Soft rim lighting. Dark background.'
  },
  {
    id: 'conquest',
    name: 'CONQUEST',
    status: 'ALWAYS ADVANCING',
    location: 'FORWARD FRONTLINE',
    description: 'Strategic, ruthless, and precise. Every battlefield bends to his dominance.',
    // Working Image: Heavy AR
    imageUrl: 'https://images.unsplash.com/photo-1591123720164-de1348028a82?q=80&w=800&auto=format&fit=crop',
    prompt: 'A heavy machine gun with ammunition belt. Industrial metallic texture. Deep shadows.'
  },
  {
    id: 'war',
    name: 'WAR',
    status: 'ACTIVE',
    location: 'EVERYWHERE',
    description: 'The embodiment of destruction. When War arrives, the world burns.',
    // Working Image: Full Loadout
    imageUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800&auto=format&fit=crop',
    prompt: 'A battle-scarred assault rifle with sidearm and gear. Dark environment. Aggressive design.'
  },
];

export const LATEST_VIDEOS: Video[] = [
  { id: 'EhZ106tp31Q', title: '', url: 'https://youtu.be/EhZ106tp31Q?si=WKpqdm1xrLQGIlxq' },
  { id: 'hPUDf9IQX40', title: '', url: 'https://youtu.be/hPUDf9IQX40?si=6CCeLB-M80Pld30C' },
  { id: 'X828riCBF6A', title: '', url: 'https://youtu.be/X828riCBF6A?si=CP3tEpS0jGa90tjZ' },
  { id: 'oJI9nRJACck', title: '', url: 'https://youtu.be/oJI9nRJACck?si=OO3QXD9WL8AVnNT7' },
];