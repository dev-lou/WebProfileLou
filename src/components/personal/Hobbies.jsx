import React from 'react';
import { motion } from 'framer-motion';
import { Code, FootprintsIcon, Utensils, Moon, Plane } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    { name: 'Coding', icon: Code, color: 'text-blue-400' },
    { name: 'Walking', icon: FootprintsIcon, color: 'text-green-400' },
    { name: 'Eating', icon: Utensils, color: 'text-yellow-400' },
    { name: 'Sleeping', icon: Moon, color: 'text-purple-400' },
    { name: 'Traveling', icon: Plane, color: 'text-pink-400' },
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
        <h3 className="text-2xl font-bold text-white mb-6">Hobbies</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div 
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group/card bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center gap-3"
              >
                <Icon className={`w-8 h-8 ${hobby.color}`} />
                <span className="text-white text-sm font-medium">{hobby.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Hobbies;
