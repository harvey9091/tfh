import React from 'react';
import { SQUAD_MEMBERS, SOCIAL_LINKS } from '../constants';
import SquadMemberCard from './SquadMemberCard';

const SquadSection: React.FC = () => {
  return (
    <section className="relative py-32 px-4 bg-black overflow-hidden" id="squad">
       {/* Background Elements - Minimal */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto relative z-10">
         {/* Intro Block - Clean Glass */}
         <div className="mb-24 text-center max-w-3xl mx-auto glass-panel p-10 rounded-sm">
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">
             The <span className="text-red-800">Horsemen</span>
           </h2>
           <p className="text-zinc-400 text-lg leading-relaxed font-body mb-8 max-w-xl mx-auto font-light">
             Operating in the shadows, executing perfect battlefield synergy. We are not just a squad; we are an eventuality.
           </p>
           
           <a 
               href={SOCIAL_LINKS.discord} 
               target="_blank" 
               rel="noreferrer"
               className="inline-block text-zinc-500 hover:text-red-500 font-display text-xs tracking-[0.25em] uppercase transition-colors duration-300 border-b border-transparent hover:border-red-500/50 pb-1"
           >
             Join the server — the abyss awaits
           </a>
         </div>

         {/* Members Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {SQUAD_MEMBERS.map((member, index) => (
             <SquadMemberCard key={member.id} member={member} index={index} />
           ))}
         </div>
       </div>
    </section>
  );
};

export default SquadSection;