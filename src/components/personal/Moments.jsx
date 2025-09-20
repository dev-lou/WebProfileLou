import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Moments = () => {
  const moments = [
    { image: '/moments/1.png' },
    { image: '/moments/2.png' },
    { image: '/moments/3.png' },
    { image: '/moments/4.png' },
    { image: '/moments/5.png' },
    { image: '/moments/6.png' },
    { image: '/moments/7.png' },
    { image: '/moments/8.png' },
    { image: '/moments/9.png' },
    { image: '/moments/10.png' },
    { image: '/moments/11.png' },
    { image: '/moments/12.png' },
    { image: '/moments/13.png' },
    { image: '/moments/14.png' },
    { image: '/moments/15.png' },
    { image: '/moments/16.png' },
    { image: '/moments/17.png' },
    { image: '/moments/18.png' },
    { image: '/moments/19.png' },
    { image: '/moments/20.png' },
  ];

  const previewMoments = moments.slice(0, 3);

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
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
            <h3 className="text-2xl font-bold text-white">Moment Collections</h3>
            <Link
              to="/moments"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white text-sm font-medium"
            >
              View All Moments
              <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">20</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {previewMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group/card aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openImage(moment.image)}
              >
                <img
                  src={moment.image}
                  alt={`Moment ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110 rounded-xl"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
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
    </>
  );
};

export default Moments;
