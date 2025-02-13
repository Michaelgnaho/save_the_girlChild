import React from "react";
import about1 from "../assets/educaion.jpg";
import about2 from "../assets/health.jpg";
import about3 from "../assets/a4.jpg";

function About() {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl  md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg slide-left md:text-xl text-gray-700">
              At Adunni Save A Girl Foundation, we are dedicated to nurturing
              and empowering young girls to achieve their dreams and build
              brighter futures.
            </p>
            <p className="text-lg slide-right md:text-xl text-gray-700">
              Currently focused on girls in Nigeria, we provide education,
              mentorship, and advocacy to nurture their potential, break
              barriers, and equip them with the knowledge, skills, and
              confidence needed for self-actualization.
            </p>
            <p className="text-lg slide-left md:text-xl text-gray-700">
              As we grow, our goal is to expand this impact globally, creating a
              world where every girl can dream, achieve, and lead with purpose.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Education",
              description:
                "We are committed to providing young girls with access to quality education and the necessary learning resources, empowering them to unlock their full potential and achieve their dreams.",
              image: about1,
            },
            {
              title: "Healthcare",
              description:
                "We aim to ensure girls in underserved and rural areas have access to essential healthcare services, fostering their well-being and growth",
              image: about2,
            },
            {
              title: "Empowerment",
              description:
                "Through skill development and mentorship programs, we empower young girls to become confident, independent, and capable of building a brighter future for themselves and their communities",
              image: about3,
            },
          ].map((card, index) => (
            <div key={index} className="group slide-right relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg transform transition duration-300 ease-in-out group-hover:-translate-y-2">
                <div className="overflow-hidden rounded-lg mb-6">
                  <img
                    src={card.image}
                    alt={`Icon representing ${card.title}`}
                    className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.description}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

// import React from "react";
// import { MessageCircle } from "lucide-react";

// const ComfortChatbot = () => {
//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       <button
//         onClick={scrollToContact}
//         className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
//         aria-label="Contact Us"
//       >
//         <MessageCircle size={24} />
//       </button>
//     </div>
//   );
// };

// export default ComfortChatbot;
