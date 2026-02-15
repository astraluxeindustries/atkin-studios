import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Yoga Studio Texture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-primary uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6"
        >
          Est. 2004 • St. George, UT
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl text-gray-900 mb-8 leading-tight"
        >
          Atkin Studios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          More than just a home yoga studio. A vibrant event center fueled by passion, inclusivity, and creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
           <button className="bg-brand-primary text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
             Book a Class
           </button>
           <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
             View Packages
           </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;