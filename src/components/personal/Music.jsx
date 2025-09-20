import React from 'react';
import { motion } from 'framer-motion';

const Music = () => {
  const favoriteMusic = [
    { 
      title: 'Pop Music',
      image: '/logo.png',
      description: 'My favorite pop hits'
    },
    { 
      title: 'Rock Classics',
      image: '/logo.png',
      description: 'Best rock songs'
    },
    { 
      title: 'Gaming OSTs',
      image: '/logo.png',
      description: 'Video game soundtracks'
    },
    { 
      title: 'Anime Music',
      image: '/logo.png',
      description: 'Favorite anime songs'
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
        <h3 className="text-2xl font-bold text-white mb-6">Favorite Music</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favoriteMusic.map((music, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group/card aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={music.image}
                alt={music.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">{music.title}</h4>
                  <p className="text-gray-300 text-sm mt-1">{music.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Music;
