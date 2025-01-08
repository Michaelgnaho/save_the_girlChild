import React from 'react';
import vid from "../assets/bgVid.mp4";

function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Video Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/70 via-amber-800/60 to-orange-900/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center p-8 rounded-2xl backdrop-blur-sm bg-white/10">
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 p-0.5 rounded-2xl">
          <div className="bg-white/95 p-8 rounded-2xl">
            {/* Title with Gradient */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              ADUNNI SAVE A GIRL FOUNDATION
            </h1>

            {/* Description */}
            <p className="text-lg md:text-2xl text-gray-700 mb-8">
              Adunni Save A Girl Foundation is a registered non-profit organization committed to empowering young girls through education and providing them with the tools and opportunities they need to achieve self-actualization.
            </p>

            {/* Gradient Button */}
            <button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full">
                <span className="relative text-lg md:text-xl font-bold text-white group-hover:text-orange-50 transition duration-300">
                  Learn More
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;