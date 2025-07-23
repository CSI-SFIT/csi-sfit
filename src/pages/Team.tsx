import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Users,
  Code,
  Lightbulb,
  Video,
  Building2,
  Megaphone,
  MicVocal,
} from "lucide-react";

import Card from "../components/ProfileCard/Card";
import data from "../components/ProfileCard/data";

export const Team: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const categories = [
    { id: "all", label: "All Members", icon: Users },
    { id: "core", label: "Core Team", icon: Award },
    { id: "faculty", label: "Faculty", icon: Building2 },
    { id: "technical", label: "Technical", icon: Code },
    { id: "creative", label: "Creative", icon: Lightbulb },
    { id: "multimedia", label: "Multimedia", icon: Video },
    { id: "marketing", label: "Marketing", icon: Megaphone },
    { id: "pr", label: "Public Relations", icon: MicVocal },
  ];

  let filteredMembers;
  if (selectedCategory.toLowerCase() === "all") {
    filteredMembers = data;
  } else if (selectedCategory.toLowerCase() === "core") {
    filteredMembers = data.filter((profile) => {
      return profile.category === "Core";
    });
  } else {
    filteredMembers = data.filter((profile) => {
      return (
        selectedCategory.toLowerCase().slice(0, 2) ===
        profile.title?.toLowerCase().slice(0, 2)
      );
    });
  }

  const visibleMembers = filteredMembers.slice(0, visibleCount);

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e30ff]/20 via-[#42e0d8]/10 to-[#f7baa8]/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setVisibleCount(9);
                  }}
                  className={`relative z-10 flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-[#36B7B7] to-[#2AA198] text-white shadow-lg shadow-[#36B7B7]/25"
                      : "text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 ml-2 text-4xl font-semibold relative inline-block text-transparent bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-0 after:bg-gradient-to-r after:from-[#40E0D0] after:to-[#1A5AFF] after:transition-all after:duration-500 hover:after:w-full">
            {selectedCategory[0].toUpperCase()}
            {selectedCategory.slice(1)}
          </h2>

          <div
            ref={teamRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
          >
            {visibleMembers.map((profile, index) => (
              <Card
                key={index}
                about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium unde sunt necessitatibus excepturi accusantium fugit maiores ipsam similique cum. Aspernatur, alias deleniti architecto, ipsum magnam vitae, magni quidem quia voluptatibus sint eum omnis voluptatem tempore quasi temporibus maiores modi facere recusandae? Natus culpa minus molestias dicta libero voluptatem repudiandae?"
                {...profile}
              />
            ))}
          </div>

          {visibleCount < filteredMembers.length && (
            <div className="mt-10 text-center">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-[#36B7B7] to-[#2AA198] text-white shadow-lg shadow-[#36B7B7]/25"
              >
                See More
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
