import React from 'react';
import { LATEST_VIDEOS } from '../constants';
import { Play } from 'lucide-react';

const LatestVideos: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-1 h-8 bg-red-900/80" />
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
            LATEST DROPS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LATEST_VIDEOS.map((video) => (
            <div 
              key={video.id} 
              className="glass-panel group relative aspect-video overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/10"
              onClick={() => window.open(video.url, '_blank')}
            >
              {/* YouTube Thumbnail */}
              <img 
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-red-900/20 group-hover:border-red-500/30">
                  <Play className="text-white fill-white ml-1 opacity-80" size={24} />
                </div>
              </div>

              {/* Meta Data */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                 <h3 className="text-white font-display font-bold text-lg tracking-wide group-hover:text-red-500 transition-colors">
                   {video.title}
                 </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;