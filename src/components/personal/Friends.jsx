import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Friends = () => {
  const preview = {
    male: [
      { name: 'Karl', image: '/default.jpg' },
      { name: 'Jeff', image: '/default.jpg' },
      { name: 'Frenzy', image: '/default.jpg' },
    ],
    female: [
      { name: 'Kath', image: '/default.jpg' },
      { name: 'Ally', image: '/default.jpg' },
      { name: 'Kate', image: '/default.jpg' },
    ]
  };

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
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Friends</h3>
          <Link 
            to="/friends" 
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white text-sm font-medium"
          >
            View All Friends
            <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">70+</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[...preview.male.slice(0, 3), ...preview.female.slice(0, 3)].map((friend, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group/card bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full aspect-square overflow-hidden rounded-xl border-2 border-white/10 mb-3">
                  <img 
                    src={friend.image} 
                    alt={friend.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="text-white font-medium text-sm md:text-base">{friend.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Friends;
