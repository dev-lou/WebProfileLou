import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, UserCircle2, User2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FriendsGallery = () => {
  const navigate = useNavigate();
  const allFriends = {
    male: [
      'Karl', 'Jeff', 'Frenzy', 'Ron', 'Nico', 'Rinz', 'Regodin', 'Sean', 'Janero',
      'Jayr', 'Chuquel', 'Wayne', 'Wency', 'Fr', 'Jelo', 'Leonardo', 'Lorenel',
      'Ryan', 'John Loyd', 'Gil', 'Ricardo', 'Nathaniel', 'Arch', 'Christian',
      'Shame', 'Andro', 'Jan Laurence', 'Lawrence', 'Dennis', 'Ed', 'Jerell',
      'Allyxis', 'Jhon Lawrence', 'Eric', 'Nicos', 'Selwyn', 'Clarenze', 'Hansel',
      'Mark', 'Mike', 'Jero'
    ].map(name => ({ name, image: '/default.jpg' })),
    
    female: [
      'Kath', 'Ally', 'Kate', 'Juliene', 'Kyra', 'Kia Mae', 'Rosalyn', 'Mary Charlyn',
      'Joysie', 'Shamy', 'Catherine', 'Ashley', 'Lorraine', 'Clares', 'Leilanie',
      'Mytz', 'Jovil', 'Kara', 'Ju Ann', 'Hazel', 'Mia', 'Richeliegh', 'Richel',
      'Princess', 'Aleila', 'Alexa', 'Eunice', 'Princess', 'Aime', 'Jeniel',
      'Nicole', 'Trisha', 'Marianne'
    ].map(name => ({ name, image: '/default.png' }))
  };

  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFriends = {
    male: filter !== 'female' ? allFriends.male.filter(friend => 
      friend.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [],
    female: filter !== 'male' ? allFriends.female.filter(friend => 
      friend.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : []
  };

  const totalFilteredCount = filteredFriends.male.length + filteredFriends.female.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
            <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
              <Users className="w-8 h-8 text-purple-400" />
              Friends Gallery
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search friends..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 pl-10 rounded-xl bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-0 transition-colors duration-300"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-colors duration-300 ${
                  filter === 'all'
                    ? 'bg-white/20 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                All
                <span className="text-sm bg-white/10 px-2 rounded-full">
                  {allFriends.male.length + allFriends.female.length}
                </span>
              </button>
              
              <button
                onClick={() => setFilter('male')}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-colors duration-300 ${
                  filter === 'male'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <UserCircle2 className="w-4 h-4" />
                Male
                <span className="text-sm bg-white/10 px-2 rounded-full">
                  {allFriends.male.length}
                </span>
              </button>
              
              <button
                onClick={() => setFilter('female')}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-colors duration-300 ${
                  filter === 'female'
                    ? 'bg-pink-500/20 text-pink-400'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <User2 className="w-4 h-4" />
                Female
                <span className="text-sm bg-white/10 px-2 rounded-full">
                  {allFriends.female.length}
                </span>
              </button>
            </div>
          </div>
        </div>

        {totalFilteredCount === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No friends found matching "{searchQuery}"
          </div>
        ) : (
          <div className="space-y-8">
            {/* Male Section */}
            {filteredFriends.male.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Male</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredFriends.male.map((friend, index) => (
                    <motion.div
                      key={friend.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="relative group"
                    >
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                        <img
                          src={friend.image}
                          alt={friend.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h4 className="text-white font-medium text-sm md:text-base truncate">{friend.name}</h4>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Female Section */}
            {filteredFriends.female.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Female</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredFriends.female.map((friend, index) => (
                    <motion.div
                      key={friend.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="relative group"
                    >
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                        <img
                          src={friend.image}
                          alt={friend.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h4 className="text-white font-medium text-sm md:text-base truncate">{friend.name}</h4>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FriendsGallery;
