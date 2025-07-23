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
  //   {
  //     id: "1",
  //     name: "Arjun Sharma",
  //     position: "President",
  //     department: "Computer Engineering",
  //     year: "Final Year",
  //     bio: "Passionate about AI/ML and leading the team towards innovation. Currently working on deep learning research projects.",
  //     image:
  //       "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     skills: ["Python", "Machine Learning", "Leadership", "TensorFlow"],
  //     achievements: [
  //       "Best Project Award 2023",
  //       "Google Summer of Code",
  //       "Published Research Paper",
  //     ],
  //     social: {
  //       github: "https://github.com/arjun",
  //       linkedin: "https://linkedin.com/in/arjun",
  //       email: "arjun@csi.sfit.ac.in",
  //     },
  //     category: "core",
  //   },
  //   {
  //     id: "2",
  //     name: "Priya Patel",
  //     position: "Vice President",
  //     department: "Information Technology",
  //     year: "Third Year",
  //     bio: "Full-stack developer with expertise in modern web technologies. Leads technical workshops and hackathons.",
  //     image:
  //       "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     skills: ["React", "Node.js", "MongoDB", "AWS"],
  //     achievements: [
  //       "Winner - Smart India Hackathon",
  //       "Microsoft Student Ambassador",
  //       "Open Source Contributor",
  //     ],
  //     social: {
  //       github: "https://github.com/priya",
  //       linkedin: "https://linkedin.com/in/priya",
  //       email: "priya@csi.sfit.ac.in",
  //     },
  //     category: "core",
  //   },
  //   {
  //     id: "3",
  //     name: "Rahul Krishnan",
  //     position: "Technical Head",
  //     department: "Computer Engineering",
  //     year: "Final Year",
  //     bio: "Cybersecurity enthusiast and competitive programmer. Organizes coding competitions and security workshops.",
  //     image:
  //       "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     skills: ["Cybersecurity", "C++", "Python", "Ethical Hacking"],
  //     achievements: [
  //       "ACM ICPC Regionalist",
  //       "Bug Bounty Hunter",
  //       "CEH Certified",
  //     ],
  //     social: {
  //       github: "https://github.com/rahul",
  //       linkedin: "https://linkedin.com/in/rahul",
  //       email: "rahul@csi.sfit.ac.in",
  //     },
  //     category: "technical",
  //   },
  //   {
  //     id: "4",
  //     name: "Sneha Gupta",
  //     position: "Creative Head",
  //     department: "Information Technology",
  //     year: "Second Year",
  //     bio: "UI/UX designer and digital artist. Creates stunning visuals for events and manages social media presence.",
  //     image:
  //       "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     skills: [
  //       "UI/UX Design",
  //       "Adobe Creative Suite",
  //       "Figma",
  //       "Digital Marketing",
  //     ],
  //     achievements: [
  //       "Best Design Award",
  //       "Adobe Certified Expert",
  //       "50K+ Social Media Reach",
  //     ],
  //     social: {
  //       github: "https://github.com/sneha",
  //       linkedin: "https://linkedin.com/in/sneha",
  //       email: "sneha@csi.sfit.ac.in",
  //     },
  //     category: "creative",
  //   },
  //   {
  //     id: "5",
  //     name: "Vikram Singh",
  //     position: "Operations Head",
  //     department: "Computer Engineering",
  //     year: "Third Year",
  //     bio: "Expert in event management and logistics. Ensures smooth execution of all CSI activities and workshops.",
  //     image:
  //       "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     skills: [
  //       "Project Management",
  //       "Event Planning",
  //       "Communication",
  //       "Team Coordination",
  //     ],
  //     achievements: [
  //       "Organized 20+ Events",
  //       "PMP Certified",
  //       "Student Leadership Award",
  //     ],
  //     social: {
  //       linkedin: "https://linkedin.com/in/vikram",
  //       email: "vikram@csi.sfit.ac.in",
  //     },
  //     category: "operations",
  //   },
  //   {
  //     id: "6",
  //     name: "Ananya Rao",
  //     position: "Web Development Lead",
  //     department: "Information Technology",
  //     year: "Third Year",
  //     bio: "Frontend specialist passionate about creating beautiful and functional web experiences.",
  //     image:
  //       "https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  //     achievements: [
  //       "Freelance Developer",
  //       "Open Source Maintainer",
  //       "Tech Blog Writer",
  //     ],
  //     social: {
  //       github: "https://github.com/ananya",
  //       linkedin: "https://linkedin.com/in/ananya",
  //       email: "ananya@csi.sfit.ac.in",
  //     },
  //     category: "technical",
  //   },
  // ];

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
                  onClick={() => setSelectedCategory(category.id)}
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
          <motion.div
            ref={teamRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
          >
            {filteredMembers.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  key={index}
                  about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenitilaudantium unde sunt necessitatibus excepturi accusantium fugitmaiores ipsam similique cum. Aspernatur, alias delenitiarchitecto, ipsum magnam vitae, magni quidem quia voluptatibussint eum omnis voluptatem tempore quasi temporibus maiores modifacere recusandae? Natus culpa minus molestias dicta liberovoluptatem repudiandae?"
                  {...profile}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
