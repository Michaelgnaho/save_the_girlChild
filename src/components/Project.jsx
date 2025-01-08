// import {useState} from 'react'
import p1 from "../assets/a6.jpg"
import p2 from "../assets/A1.jpg"
import p3 from "../assets/a12.jpg"
import p4 from "../assets/a11.jpg"
import p5 from "../assets/a3.jpg"


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    {
      title: "Educational Scholarships",
      description: "Providing scholarships to underprivileged girls to ensure they have access to quality education.",
      icon: "fas fa-graduation-cap",
      stats: "500+ scholarships awarded",
      impact: "90% graduation rate",
      img: p1
    },
    {
      title: "Pad A Girl",
      description: "Ensuring girls receive proper healthcare and nutrition to grow and thrive.",
      icon: "fas fa-heartbeat",
      stats: "10,000+ girls supported",
      impact: "75% health improvement",
      img: p2
    },
    {
      title: "Skill Development",
      description: "Offering skill development programs to empower girls with vocational skills.",
      icon: "fas fa-tools",
      stats: "20+ skill programs",
      impact: "85% employment rate",
      img: p3
    },
    {
      title: "Advocacy and Awareness",
      description: "Raising awareness about the importance of girl child education and rights.",
      icon: "fas fa-bullhorn",
      stats: "100+ campaigns",
      impact: "1M+ people reached",
      img: p4
    },
    {
      title: "Conferences",
      description: "Creating safe spaces where girls can learn, play, and grow without fear.",
      icon: "fas fa-shield-alt",
      stats: "50+ annual events",
      impact: "5000+ participants",
      img: p5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-16" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Our Key Programs & Initiatives
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div 
                className={`h-full bg-gradient-to-br from-white to-orange-50 rounded-2xl overflow-hidden transform transition-all duration-300 
                  ${activeCard === index ? 'scale-105' : 'hover:scale-105'}
                  shadow-lg hover:shadow-2xl border border-orange-100`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.img} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
                </div>

                {/* Content Container */}
                <div className="p-6 relative">
                  <div className="absolute -top-12 right-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-lg shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                      <i className={`${feature.icon} text-white text-xl`}></i>
                    </div>
                  </div>

                  <div className="mt-2">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    
                    <div className="border-t border-orange-100 pt-4 mt-auto">
                      <div className="flex justify-between text-sm">
                        <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">{feature.stats}</div>
                        <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">{feature.impact}</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;