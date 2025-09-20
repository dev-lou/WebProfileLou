import React from 'react';
import { motion } from 'framer-motion';

const NowPlaying = () => {
  const relapsePlaylist = 'RDoeiIxRpehc4'; // YouTube Mix/Relapse Playlist

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-xl transition-all duration-500 group-hover:from-[#6366f1]/20 group-hover:to-[#a855f7]/20" />
      
      <div className="relative bg-black/20 backdrop-blur-lg border border-white/10 p-6 rounded-3xl overflow-hidden">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Now Playing
        </h3>
        
        <div className="aspect-video w-full rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/videoseries?list=${relapsePlaylist}&autoplay=0`}
            title="YouTube playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl backdrop-blur-sm"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default NowPlaying;
