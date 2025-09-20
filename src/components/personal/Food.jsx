import React from 'react';
import { motion } from 'framer-motion';

const Food = () => {
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
        <h3 className="text-2xl font-bold text-white mb-6">Favorite Food</h3>
        <div className="relative max-w-full overflow-x-auto scrollbar-hide flex gap-6">
          {[
            { name: 'Buttered Shrimp', image: '/food/shrimp.png' },
            { name: 'Fried Chicken', image: '/food/chicken.png' },
            { name: 'Lumpia', image: '/food/lumpia.png' },
            { name: 'Liempo', image: '/food/liempo.png' },
            { name: 'Sinigang Baboy', image: '/food/sinigang.png' },
            { name: 'Mung Bean Stew', image: '/food/monggo.png' },
            { name: 'Fried Tilapia', image: 'food/tilapia.png' },
            { name: 'Onigiri', image: '/food/onigiri.png' },
            { name: 'BBQ', image: '/food/bbq.png' },
            { name: 'Kwek-Kwek', image: '/food/kwek.png' },
          ].map((food) => (
            <div key={food.name} className="flex flex-col items-center w-40 group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 p-4">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
                loading="lazy"
              />
              <span className="text-white font-medium text-center">{food.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Food;
