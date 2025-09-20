import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MomentsGallery = () => {
  const navigate = useNavigate();
  const moments = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `/moments/${i + 1}.png`,
    alt: `Moment ${i + 1}`
  }));

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <Image className="w-8 h-8 text-purple-400" />
            Moments Gallery
          </h1>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative group cursor-pointer"
              onClick={() => openImage(moment.image)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <img
                  src={moment.image}
                  alt={moment.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Selected Moment"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeImage}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default MomentsGallery;
