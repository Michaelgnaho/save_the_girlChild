import React from "react";
import { motion } from "framer-motion";
import AH from "../assets/Ah.jpg";
import PO from "../assets/giwa.jpg";
import RMG from "../assets/philips.jpg";

const teamMembers = [
  {
    name: "Comfort Olaofare",
    role: "Founder & CEO",
    description:
      "comfort has been leading the foundation since its inception, driving initiatives to support and empower young girls in Nigeria.",
    image: AH,
  },
  {
    name: "Rukayah Motunrayo Giwa",
    role: "Project Director",
    description:
      "Rukayat oversees all programs and ensures they align with the foundation's mission to educate and protect young girls.",
    image: PO,
  },
  {
    name: "Phillips Olatunde (PO)",
    role: "Community Outreach Coordinator",
    description:
      "Overseeing the organization’s operations, ensuring the effective implementation of programs that empower, educate, and advocate for the rights of the girl child.",
    image: RMG,
  },
];

function Team() {
  return (
    <div
      className="container bg-gradient-to-b from-white to-orange-50 mx-auto py-12 px-4"
      id="team"
    >
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-16">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-full h-56 object-bottom transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-2">
                {member.name}
              </h3>
              <h4 className="text-xl text-gray-800 mb-4">{member.role}</h4>
              <p className="text-gray-600">{member.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Team;
