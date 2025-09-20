import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ImageOff } from 'lucide-react';

const AnimeCard = ({ item, index }) => (
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

const Anime = () => {

  const animeList = [
    {
      title: 'Oregairu',
      subtitle: 'My Youth Romantic Comedy Is Wrong, As I Expected',
      image: '/anime/oregairu.png',
      info: 'A pessimistic high school loner joins a service club to help others while discovering genuine connections.',
      link: 'https://en.wikipedia.org/wiki/My_Youth_Romantic_Comedy_Is_Wrong,_As_I_Expected'
    },
    {
      title: 'Ragna Crimson',
      subtitle: 'Dragon Hunter Fantasy',
      image: '/anime/ragna.png',
      info: 'A tale of dragon hunters where Ragna makes a deal for power to fight against overwhelming odds.',
      link: 'https://en.wikipedia.org/wiki/Ragna_Crimson'
    },
    {
      title: 'That Time I Got Reincarnated as a Slime',
      subtitle: 'Tensei Shitara Slime Datta Ken',
      image: '/anime/slime.png',
      info: 'A corporate worker reborn as a slime in a fantasy world builds his own nation of monsters.',
      link: 'https://en.wikipedia.org/wiki/That_Time_I_Got_Reincarnated_as_a_Slime'
    },
    {
      title: 'Steins;Gate',
      subtitle: 'El Psy Kongroo',
      image: '/anime/steinsgate.png',
      info: 'A self-proclaimed mad scientist discovers the ability to send messages to the past, leading to dire consequences.',
      link: 'https://en.wikipedia.org/wiki/Steins;Gate'
    },
    {
      title: 'Summer Time Rendering',
      subtitle: 'Mystery Thriller',
      image: '/anime/summertime.png',
      info: 'A young man returns to his hometown for a funeral and uncovers supernatural mysteries.',
      link: 'https://en.wikipedia.org/wiki/Summer_Time_Rendering'
    },
    {
      title: 'Blue Lock',
      subtitle: 'Soccer Evolution Project',
      image: '/anime/bluelock.png',
      info: "Three hundred talented strikers compete in an intense training program to become Japan's ultimate forward.",
      link: 'https://en.wikipedia.org/wiki/Blue_Lock'
    },
    {
      title: 'Pokémon Ultimate Journeys',
      subtitle: 'The Series',
      image: '/anime/pokemon.png',
      info: 'Ash and Goh continue their research fellows work at Cerise Laboratory while traveling across all eight regions.',
      link: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultimate_Journeys:_The_Series'
    },
    {
      title: 'To Be Hero X',
      subtitle: 'Chinese & Japanese Animation',
      image: '/anime/tobehero.png',
      info: 'The story of To Be Hero X is set in a world where "faith" turns people into superheroes.',
      link: 'https://en.wikipedia.org/wiki/To_Be_Hero_X'
    },
    {
      title: 'Yatagarasu',
      subtitle: 'Historical fantasy',
      image: '/anime/yatagarasu.png',
      info: 'Based on the mythological three-legged crow from Japanese folklore.',
      link: 'https://en.wikipedia.org/wiki/Yatagarasu_(novel_series)'
    },
    {
      title: 'Dragon Ball Super',
      subtitle: 'The Next Level of Power',
      image: '/anime/dbs.png',
      info: 'Goku and his friends defend Earth and explore the multiverse while facing increasingly powerful opponents.',
      link: 'https://en.wikipedia.org/wiki/Dragon_Ball_Super'
    },
  {
    title: 'Inazuma Eleven',
    subtitle: 'Soccer with Superpowers',
    image: '/anime/inazuma.png',
    info: 'A series about a school soccer team that uses special moves and techniques to compete.',
    link: 'https://en.wikipedia.org/wiki/Inazuma_Eleven'
  },
  {
    title: 'Tokyo Revengers',
    subtitle: 'Time-Travel Gang Drama',
    image: '/anime/tokyo.png',
    info: 'A man travels back in time to save his ex-girlfriend and change the future by altering gang conflicts.',
    link: 'https://en.wikipedia.org/wiki/Tokyo_Revengers'
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
      {/* Favorite Anime Section */}
      <div className="relative bg-black/20 backdrop-blur-lg border border-white/10 p-6 rounded-3xl group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-xl transition-all duration-500 group-hover:from-[#6366f1]/20 group-hover:to-[#a855f7]/20" />
        
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-400" />
          Favorite Anime
        </h3>

        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {animeList.map((item, idx) => (
              <AnimeCard key={item.title} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Anime;
