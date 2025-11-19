import { motion, AnimatePresence } from "framer-motion";
import p1 from "../assets/a6.jpg";
import p2 from "../assets/A1.jpg";
import p3 from "../assets/a12.jpg";
import p4 from "../assets/a11.jpg";
import p5 from "../assets/a3.jpg";

const Project = () => {
  const [activeTab, setActiveTab] = useState("2025");
  const [activeCard, setActiveCard] = useState(null);

  const projectsByYear = {
    2025: [
      {
        title: "Educational Scholarships",
        description:
          "Expanding our scholarship program to reach 1000+ underprivileged girls across multiple states.",
        icon: "fas fa-graduation-cap",
        stats: "Target: 1000+ scholarships",
        impact: "Expected 90% graduation rate",
        img: p1,
      },
      {
        title: "Pad A Girl 2025",
        description:
          "Launching our largest healthcare initiative yet, targeting 20,000 girls.",
        icon: "fas fa-heartbeat",
        stats: "20,000 girls target",
        impact: "Expected 85% health improvement",
        img: p2,
      },
      {
        title: "Menstrual Hygiene Project Outreach",
        description:
          "At Adunni Save A Girl Foundation, our recent survey revealed that many girls lack menstrual hygiene education and access to sanitary pads. To address this, we launched our Menstrual Hygiene Project at Zumuratul Islammiyah Grammar School, reaching over 1,000 girls with menstrual hygiene education and free sanitary pads. This outreach is part of our commitment to promoting dignity, confidence, and equal opportunities for every girl.",
        icon: "fas fa-hand-holding-heart",
        stats: "1,000+ girls reached",
        impact: "Improved menstrual hygiene awareness & dignity",
        img: p1, // replace with actual image variable
        video: "WATCH_HIGHLIGHTS_VIDEO_URL", // optional if you want a video field
      },
    ],

    2024: [
      {
        title: "Skill Development Program",
        description:
          "Introducing advanced vocational training programs with industry partnerships.",
        icon: "fas fa-tools",
        stats: "30+ skill programs",
        impact: "85% employment rate",
        img: p3,
      },
      {
        title: "National Awareness Campaign",
        description:
          "Nationwide advocacy program for girl child education and rights.",
        icon: "fas fa-bullhorn",
        stats: "150+ campaigns",
        impact: "2M+ people reached",
        img: p4,
      },
    ],
    2023: [
      {
        title: "Annual Conference 2023",
        description:
          "Hosted our largest conference focusing on girl child empowerment.",
        icon: "fas fa-shield-alt",
        stats: "75+ events completed",
        impact: "7500+ participants",
        img: p5,
      },
      {
        title: "Community Outreach",
        description:
          "Established local support networks in underserved communities.",
        icon: "fas fa-users",
        stats: "50+ communities served",
        impact: "10,000+ lives impacted",
        img: p1,
      },
    ],
    2022: [
      {
        title: "Foundation Launch",
        description:
          "Successfully launched Adunni Save A Girl Foundation with initial programs.",
        icon: "fas fa-flag",
        stats: "5 initial programs",
        impact: "1000+ girls supported",
        img: p2,
      },
      {
        title: "Pilot Scholarship Program",
        description: "Launched our first scholarship program for 100 girls.",
        icon: "fas fa-graduation-cap",
        stats: "100 scholarships awarded",
        impact: "95% retention rate",
        img: p3,
      },
    ],
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-16"
      id="programs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Our Journey & Impact
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 mx-auto rounded-full mb-12"></div>

          {/* Year Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(projectsByYear)
              .reverse()
              .map((year) => (
                <motion.button
                  key={year}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(year)}
                  className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 
                  ${
                    activeTab === year
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-orange-50"
                  }`}
                >
                  {year}
                </motion.button>
              ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsByYear[activeTab].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className={`h-full bg-white rounded-2xl overflow-hidden transform transition-all duration-300 
                    ${activeCard === index ? "scale-105" : "hover:scale-105"}
                    shadow-lg hover:shadow-2xl border border-orange-100`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 relative">
                    <div className="absolute -top-12 right-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-lg shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                        <i className={`${project.icon} text-white text-xl`}></i>
                      </div>
                    </div>

                    <div className="mt-2">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {project.description}
                      </p>

                      <div className="border-t border-orange-100 pt-4 mt-auto">
                        <div className="flex justify-between text-sm">
                          <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                            {project.stats}
                          </div>
                          <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                            {project.impact}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;
