import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Youtube, Instagram, MessageCircle } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Banner - Thinner, more elegant, less red */}
      <div className="w-full bg-black/80 backdrop-blur-md border-b border-white/5 py-1.5 overflow-hidden">
        <div className="flex items-center justify-center">
            <span className="text-zinc-400 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] px-4 font-display">
             <span className="text-red-600 mr-2">●</span> Live: Saturday & Sunday @ 11 AM & 5 PM IST
            </span>
        </div>
      </div>

      {/* Main Nav - Clean Glassmorphism */}
      <nav className="w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-black/60 backdrop-blur-lg border-b border-white/5 transition-all">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-display font-bold tracking-tight text-white select-none">
            TFH
          </h1>
        </div>

        <div className="flex items-center gap-8">
           <div className="flex gap-5">
             <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-300">
               <Youtube size={18} />
             </a>
             <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-300">
               <Instagram size={18} />
             </a>
             <a href={SOCIAL_LINKS.discord} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-300">
               <MessageCircle size={18} />
             </a>
           </div>

           <a 
             href={SOCIAL_LINKS.discord}
             target="_blank"
             rel="noreferrer"
             className="relative px-6 py-2 overflow-hidden bg-white/5 border border-white/10 hover:border-red-500/50 text-zinc-300 hover:text-white font-display font-semibold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm"
           >
             <span>Join The Abyss</span>
           </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;