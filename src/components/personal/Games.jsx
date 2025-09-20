import React from 'react';
import { motion } from 'framer-motion';

const Games = () => {
  const games = [
    {
      name: 'Roblox',
      logo: '/games/roblox.png',
      bg: 'bg-red-500/10',
      hover: 'hover:bg-red-500/20'
    },
    {
      name: 'Crossfire',
      logo: '/games/crossfire.png',
      bg: 'bg-orange-500/10',
      hover: 'hover:bg-orange-500/20'
    },
    {
      name: 'Clash of Clans',
      logo: '/games/coc.png',
      bg: 'bg-yellow-500/10',
      hover: 'hover:bg-yellow-500/20'
    },
    {
      name: 'Honor of Kings',
      logo: '/games/hok.png',
      bg: 'bg-purple-500/10',
      hover: 'hover:bg-purple-500/20'
    },
    {
      name: 'Mobile Legends',
      logo: '/games/ml.png',
      bg: 'bg-blue-500/10',
      hover: 'hover:bg-blue-500/20'
    },
    {
      name: 'Rules of Survival',
      logo: '/games/ros.png',
      bg: 'bg-green-500/10',
      hover: 'hover:bg-green-500/20'
    },
    {
      name: 'Pokemon Sword',
      logo: '/games/pokemon.png',
      bg: 'bg-indigo-500/10',
      hover: 'hover:bg-indigo-500/20'
    },
    {
      name: 'Dragon Ball Z: Kakarot',
      logo: '/games/dbz.png',
      bg: 'bg-amber-500/10',
      hover: 'hover:bg-amber-500/20'
    },
    {
      name: 'League of Legends',
      logo: '/games/lol.png',
      bg: 'bg-yellow-600/10',
      hover: 'hover:bg-yellow-600/20'
    },
    {
      name: 'Tekken 8',
      logo: '/games/tekken.png',
      bg: 'bg-red-600/10',
      hover: 'hover:bg-red-600/20'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-xl transition-all duration-500 group-hover:from-[#6366f1]/20 group-hover:to-[#a855f7]/20" />
      
      <div className="relative bg-black/20 backdrop-blur-lg border border-white/10 p-6 rounded-3xl">
        <h3 className="text-2xl font-bold text-white mb-6">Favorite Games</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group/card ${game.bg} backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 ${game.hover}`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-white/5 p-4">
                  <img
                    src={game.logo}
                    alt={`${game.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">{game.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Games;
