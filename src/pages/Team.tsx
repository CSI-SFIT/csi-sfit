import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Team2026 from "../components/ProfileCard/teams/Team2026";
import Team2025 from "../components/ProfileCard/teams/Team2025";
import Team2022 from "../components/ProfileCard/teams/Team2022";
import Team2021 from "../components/ProfileCard/teams/Team2021";

export const Team: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamComponents = [
    { year: 2021, component: <Team2021 /> },
    { year: 2022, component: <Team2022 /> },
    { year: 2025, component: <Team2025 /> },
    { year: 2026, component: <Team2026 /> },
  ];

  const [currentIndex, setCurrentIndex] = useState(teamComponents.length - 1);

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamComponents.length) % teamComponents.length
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamComponents.length);
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-20 pb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals who drive innovation and
              excellence at CSI SFIT. Together, we're building the future of
              technology.
            </p>

            <div className="flex flex-col items-center mt-16">
              <div className="flex items-center gap-6 mb-4">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={goPrev}
                  className="p-3 rounded-full bg-gray-700 text-white shadow-md hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:hover:scale-100"
                >
                  <ChevronLeft size={20} />
                </motion.button>

                <div className="min-w-[70px] flex justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={teamComponents[currentIndex].year}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="text-2xl font-semibold text-gray-300 leading-relaxed"
                    >
                      Team of  {teamComponents[currentIndex].year - 1}-{teamComponents[currentIndex].year - 2000}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <motion.button
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={goNext}
                  className="p-3 rounded-full bg-gray-700 text-white shadow-md hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:hover:scale-100"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        {teamComponents[currentIndex].component}
      </section>
    </div>
  );
};
