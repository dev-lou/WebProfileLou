import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

const Instruments = () => {
  const instruments = [
    {
      name: 'Piano',
      description: 'A versatile keyboard instrument with 88 keys, capable of playing both melody and harmony across a wide range of musical styles.',
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&w=200&h=200'
    },
    {
      name: 'Violin',
      description: 'A four-stringed bowed instrument known for its expressive sound, widely used in classical, folk, and contemporary music.',
      image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&w=200&h=200'
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
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Music className="w-6 h-6 text-purple-400" />
          Favorite Instruments
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {instruments.map((instrument, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group/card bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <img 
                  src={instrument.image} 
                  alt={instrument.name} 
                  className="w-16 h-16 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-medium">{instrument.name}</h4>
                  <p className="text-gray-400 text-sm mt-1">{instrument.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Instruments;
