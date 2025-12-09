import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Desaturated, Dark */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542259682-167814b609c7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      
      {/* Subtle Vignette & Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      {/* Soft Radial Red Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />
      
      {/* Floating Dust Particles - Tiny & Slow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
            <div 
                key={i}
                className="particle"
                style={{
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2}px`,
                    height: `${Math.random() * 2}px`,
                    animationDuration: `${Math.random() * 30 + 15}s`,
                    animationDelay: `${Math.random() * 10}s`,
                    opacity: 0.2
                }}
            />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl">
        {/* Soft Title Aura - Faint */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-900/10 blur-[80px] rounded-full pointer-events-none" />
        
        <h1 className="relative text-5xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter mb-8 drop-shadow-2xl">
            THE FOUR HORSEMEN
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-lg text-zinc-400 font-display tracking-[0.2em] uppercase mb-12 font-medium">
          <span>Battlefield Specialists</span>
          <span className="hidden md:inline w-1 h-1 bg-red-600/50 rounded-full" />
          <span>Chaos Architects</span>
          <span className="hidden md:inline w-1 h-1 bg-red-600/50 rounded-full" />
          <span>Legends Unseen</span>
        </div>

        <a 
          href={SOCIAL_LINKS.discord} 
          target="_blank"
          rel="noreferrer"
          className="glass-panel inline-block px-12 py-4 text-zinc-200 hover:text-white font-display font-semibold text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-500 hover:border-red-500/30 hover:bg-white/5 rounded-sm"
        >
          Enter the Abyss
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 animate-bounce text-zinc-600">
        <ChevronDown size={24} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Hero;