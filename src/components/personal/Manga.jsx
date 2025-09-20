import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ImageOff } from 'lucide-react';

const MangaCard = ({ item, index }) => (
  <motion.div
    key={item.title}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative w-[300px] sm:w-[280px] lg:w-[300px] xl:w-[320px] group/card bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
  >
    <div className="aspect-[2/3] relative">
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.classList.add('hidden');
            e.target.nextElementSibling.classList.remove('hidden');
          }}
        />
        <div className="hidden absolute inset-0 flex items-center justify-center bg-white/5">
          <ImageOff className="w-8 h-8 text-gray-400" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <h4 className="text-white font-medium text-sm md:text-base line-clamp-1">{item.title}</h4>
        <p className="text-gray-300 text-xs md:text-sm mt-1 line-clamp-1">{item.subtitle}</p>
      </div>
      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h4 className="text-white font-medium text-sm md:text-base">{item.title}</h4>
        <p className="text-gray-300 text-xs md:text-sm mt-1">{item.subtitle}</p>
        <p className="text-gray-400 text-xs mt-2 line-clamp-3">{item.info}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-400 text-xs mt-2 hover:text-blue-300 transition-colors duration-300"
        >
          <span>More info</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Manga = () => {
  const mangaList = [
    {
      title: 'Solo Leveling',
      subtitle: 'Action, Fantasy',
      image: '/manga&manhwa/sololeveling.png',
      info: "A weak hunter becomes the world's strongest through a mysterious system in a world full of monsters.",
      link: 'https://en.wikipedia.org/wiki/Solo_Leveling'
    },
    {
      title: 'The Beginning After The End',
      subtitle: 'Fantasy, Reincarnation',
      image: '/manga&manhwa/beginning_after_the_end.png',
      info: 'A king reincarnates in a new world filled with magic and monsters, seeking a better life.',
      link: 'https://en.wikipedia.org/wiki/The_Beginning_After_The_End'
    },
    {
      title: 'The Greatest Estate Developer',
      subtitle: 'Fantasy, Strategy',
      image: '/manga&manhwa/greatest_estate_developer.png',
      info: 'A man uses his knowledge to develop estates and build a prosperous life in a fantasy world.',
      link: 'https://www.webtoons.com/en/fantasy/the-greatest-estate-developer/list?title_no=2923'
    },
    {
      title: 'Magic Emperor',
      subtitle: 'Fantasy, Action',
      image: '/manga&manhwa/magic_emperor.png',
      info: 'A powerful emperor returns to the world to reclaim his throne and protect his people.',
      link: 'https://www.webtoons.com/en/fantasy/magic-emperor/list?title_no=2924'
    },
    {
      title: 'Blue Lock',
      subtitle: 'Sports, Soccer',
      image: '/manga&manhwa/bluelock.png',
      info: 'Three hundred talented strikers compete in an intense training program to become Japan\'s ultimate forward.',
      link: 'https://en.wikipedia.org/wiki/Blue_Lock'
    },
    {
      title: 'Tomb Raider King',
      subtitle: 'Fantasy, Adventure',
      image: '/manga&manhwa/tomb_raider_king.png',
      info: 'A man gains powers from relics and seeks to become the strongest tomb raider.',
      link: 'https://www.webtoons.com/en/fantasy/tomb-raider-king/list?title_no=2925'
    },
    {
      title: 'The Fragrant Flower Blooms with Dignity',
      subtitle: 'Romance, Drama',
      image: '/manga&manhwa/fragrant_flower.png',
      info: 'A story of love and dignity blooming amidst challenges.',
      link: 'https://www.webtoons.com/en/romance/the-fragrant-flower-blooms-with-dignity/list?title_no=2926'
    },
    {
      title: 'A Returner\'s Magic Should Be Special',
      subtitle: 'Fantasy, Magic',
      image: '/manga&manhwa/returner_magic.png',
      info: 'A returner uses his knowledge to change the fate of the world.',
      link: 'https://www.webtoons.com/en/fantasy/a-returners-magic-should-be-special/list?title_no=2927'
    },
    {
      title: 'One Punch Man',
      subtitle: 'Action, Comedy',
      image: '/manga&manhwa/one_punch_man.png',
      info: 'A hero who can defeat any opponent with a single punch seeks a worthy challenge.',
      link: 'https://en.wikipedia.org/wiki/One-Punch_Man'
    },
    {
      title: 'Dreaming Freedom',
      subtitle: 'Drama, Slice of Life',
      image: '/manga&manhwa/dreaming_freedom.png',
      info: 'A story about dreams and the pursuit of freedom.',
      link: 'https://www.webtoons.com/en/drama/dreaming-freedom/list?title_no=2928'
    },
    {
      title: 'Lookism',
      subtitle: 'Drama, Social',
      image: '/manga&manhwa/lookism.png',
      info: 'A boy with two bodies navigates social challenges and discrimination.',
      link: 'https://en.wikipedia.org/wiki/Lookism_(webtoon)'
    },
    {
      title: 'How to Fight',
      subtitle: 'Action, Martial Arts',
      image: '/manga&manhwa/fight.png',
      info: 'A story about fighting and survival.',
      link: 'https://www.webtoons.com/en/action/how-to-fight/list?title_no=2929'
    },
    {
      title: 'Webtoon Character Na Kang Lim',
      subtitle: 'Fantasy, Adventure',
      image: '/manga&manhwa/na_kang_lim.png',
      info: 'A webtoon character comes to life and embarks on adventures.',
      link: 'https://www.webtoons.com/en/fantasy/na-kang-lim/list?title_no=2930'
    },
    {
      title: 'The Novel Extra',
      subtitle: 'Fantasy, Drama',
      image: '/manga&manhwa/the_novel_extra.png',
      info: 'A man reincarnates as a novel character and changes his fate.',
      link: 'https://www.webtoons.com/en/fantasy/the-novel-extra/list?title_no=2931'
    },
    {
      title: 'Infinite Mage',
      subtitle: 'Fantasy, Magic',
      image: '/manga&manhwa/infinite.png',
      info: 'A mage discovers infinite possibilities in a world of magic and adventure.',
      link: 'https://www.webtoons.com/en/fantasy/infinite-mage/list?title_no=2932'
    },
    {
      title: 'Juujika no Rokunin',
      subtitle: 'Horror, Thriller',
      image: '/manga&manhwa/juujika.png',
      info: 'Six students are trapped in a deadly game orchestrated by a mysterious figure.',
      link: 'https://en.wikipedia.org/wiki/Juujika_no_Rokunin'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative bg-black/20 backdrop-blur-lg border border-white/10 p-6 rounded-3xl group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-xl transition-all duration-500 group-hover:from-[#6366f1]/20 group-hover:to-[#a855f7]/20" />
        
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-400" />
          My favorite Manga & Manhwa
        </h3>

        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {mangaList.map((manga, index) => (
              <MangaCard key={manga.title} item={manga} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Manga;
