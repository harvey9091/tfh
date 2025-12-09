import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { MessageCircle } from 'lucide-react';

const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <a 
        href={SOCIAL_LINKS.discord}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 text-white font-display font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-400 rounded-sm"
      >
        <MessageCircle size={18} />
        LIVE — Join Discord
      </a>
    </div>
  );
};

export default StickyMobileCTA;