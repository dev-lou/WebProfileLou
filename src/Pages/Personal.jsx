import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { useEffect } from 'react';
import PersonalNav from '../components/PersonalNav';

// Lazy load sections to improve performance
const Friends = lazy(() => import('../components/personal/Friends'));
const Instruments = lazy(() => import('../components/personal/Instruments'));
const Hobbies = lazy(() => import('../components/personal/Hobbies'));
const Anime = lazy(() => import('../components/personal/Anime'));
const Manga = lazy(() => import('../components/personal/Manga'));
const Games = lazy(() => import('../components/personal/Games'));
const Food = lazy(() => import('../components/personal/Food'));
const Moments = lazy(() => import('../components/personal/Moments'));

const NowPlaying = lazy(() => import('../components/personal/NowPlaying'));

// Loading placeholder
const SectionLoader = () => (
  <div className="w-full h-[300px] bg-white/5 rounded-xl backdrop-blur-sm animate-pulse" />
);

export default function Personal() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto space-y-24 relative"
      >
        <PersonalNav />
        {/* Header */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Personal Space
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Welcome to my personal corner of the internet! Here's where I share the things that make me, well, me.
          </p>
        </div>

        {/* Sections */}
        <div id="moments">
          <Suspense fallback={<SectionLoader />}>
            <Moments />
          </Suspense>
        </div>

        <div id="friends">
          <Suspense fallback={<SectionLoader />}>
            <Friends />
          </Suspense>
        </div>

        <div id="nowplaying">
          <Suspense fallback={<SectionLoader />}>
            <NowPlaying />
          </Suspense>
        </div>

        <div id="instruments">
          <Suspense fallback={<SectionLoader />}>
            <Instruments />
          </Suspense>
        </div>

        <div id="hobbies">
          <Suspense fallback={<SectionLoader />}>
            <Hobbies />
          </Suspense>
        </div>

        <div id="anime">
          <Suspense fallback={<SectionLoader />}>
            <Anime />
          </Suspense>
        </div>

        <div id="manga">
          <Suspense fallback={<SectionLoader />}>
            <Manga />
          </Suspense>
        </div>

        <div id="games">
          <Suspense fallback={<SectionLoader />}>
            <Games />
          </Suspense>
        </div>

        <div id="food">
          <Suspense fallback={<SectionLoader />}>
            <Food />
          </Suspense>
        </div>

        {/* Footer */}
        <footer className="mt-24">
          <center>
            <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
            <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
              © 2025{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                BarLou™
              </a>
              . All Rights Reserved.
            </span>
          </center>
        </footer>
      </motion.div>
    </div>
  );
}
