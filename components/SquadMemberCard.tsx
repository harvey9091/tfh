
import React from 'react';
import { Member } from '../types';
import { Target } from 'lucide-react';

interface Props {
  member: Member;
  index: number;
}

const SquadMemberCard: React.FC<Props> = ({ member }) => {
  return (
    <div 
      className="glass-panel group relative overflow-hidden transition-all duration-500 w-full max-w-sm mx-auto hover:-translate-y-1 bg-black/40 border border-white/5 hover:border-red-900/30"
    >
      {/* Image Container - STRICT SQUARE CROP */}
      {/* aspect-square enforces 1:1 ratio. object-cover fills the square without stretching. */}
      <div className="relative w-full aspect-square overflow-hidden bg-zinc-950">
        <img 
          src={member.imageUrl} 
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 contrast-125 saturate-0 group-hover:saturate-50" 
        />
        
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        
        {/* Subtle Red tint on hover */}
        <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-500 pointer-events-none mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 border-t border-white/5">
        <div className="flex justify-between items-end mb-4">
            <h3 className="text-3xl font-display font-bold text-white tracking-tight drop-shadow-lg group-hover:text-red-500 transition-colors duration-300">
            {member.name}
            </h3>
            <Target className="text-zinc-700 group-hover:text-red-700 transition-colors duration-300" size={18} />
        </div>
        
        <div className="flex gap-4 mb-6 font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
          <div className="flex flex-col">
            <span className="text-zinc-700 mb-0.5">Status</span>
            <span className="text-zinc-300 group-hover:text-red-400 transition-colors">{member.status}</span>
          </div>
          <div className="flex flex-col">
             <span className="text-zinc-700 mb-0.5">Location</span>
             <span className="text-zinc-300 group-hover:text-red-400 transition-colors">{member.location}</span>
          </div>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed font-body pt-4 border-t border-white/5 group-hover:border-red-900/20 transition-colors">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default SquadMemberCard;
