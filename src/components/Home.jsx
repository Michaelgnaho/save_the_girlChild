import React from 'react';
import { motion } from 'framer-motion';
import vid from "../assets/bgVid.mp4";
import bgImg from "../assets/a13.jpg";


function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-top"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img src={bgImg} alt='background image' className='object-cover'/>
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Main Title with Animation */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              ADUNNI SAVE A GIRL
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
              FOUNDATION
            </span>
          </motion.h1>

          {/* Description with Blur Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-3xl mx-auto mb-8"
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl"></div>
            <p className="relative text-lg sm:text-xl md:text-2xl text-white/90 p-6 leading-relaxed">
              Empowering young girls through education and providing them with the tools and opportunities they need to achieve self-actualization.
            </p>
          </motion.div>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#about"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 opacity-70 blur-lg group-hover:opacity-100 transition-all duration-500 group-hover:blur-xl animate-pulse"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative text-lg md:text-xl font-bold text-white group-hover:text-orange-50 transition duration-300">
                  Discover Our Mission
                </span>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-white/80 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;