import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Youtube, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-zinc-950 pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Subtle Red Vignette from Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_bottom,rgba(60,10,10,0.3)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        
        <div className="mb-16">
            <a 
                href={SOCIAL_LINKS.discord} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-red-900/30 text-zinc-300 hover:text-white font-display font-semibold uppercase tracking-[0.15em] transition-all duration-300 rounded-sm"
            >
                <span>Join Our Server</span>
            </a>
            <p className="mt-4 text-zinc-600 text-xs font-mono tracking-widest uppercase">Step into the hunt.</p>
        </div>

        <div className="flex justify-center gap-8 mb-16">
             <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors duration-300">
               <Youtube size={24} />
             </a>
             <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors duration-300">
               <Instagram size={24} />
             </a>
             <a href={SOCIAL_LINKS.discord} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors duration-300">
               <MessageCircle size={24} />
             </a>
        </div>

        <div className="border-t border-white/5 pt-8">
            <h2 className="text-xl md:text-2xl font-display font-bold text-zinc-800 uppercase select-none tracking-tighter">
                TFH
            </h2>
            <p className="mt-4 text-zinc-700 text-[10px] font-mono uppercase tracking-wider">
                © {new Date().getFullYear()} The Four Horsemen.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;