import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  Users,
  Music,
  Music2,
  Heart,
  Play,
  BookOpen,
  Gamepad2,
  Utensils
} from 'lucide-react';

const PersonalNav = () => {
  const [activeSection, setActiveSection] = useState('moments');

  const sections = [
    { id: 'moments', name: 'Moments', icon: Camera },
    { id: 'friends', name: 'Friends', icon: Users },
    { id: 'nowplaying', name: 'Music', icon: Music },
    { id: 'instruments', name: 'Instruments', icon: Music2 },
    { id: 'hobbies', name: 'Hobbies', icon: Heart },
    { id: 'anime', name: 'Anime', icon: Play },
    { id: 'manga', name: 'Manga', icon: BookOpen },
    { id: 'games', name: 'Games', icon: Gamepad2 },
    { id: 'food', name: 'Food', icon: Utensils }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed right-6 top-1/4 z-40 hidden lg:block"
    >
      <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-2 space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              title={section.name}
            >
              <Icon className="w-5 h-5" />

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PersonalNav;
