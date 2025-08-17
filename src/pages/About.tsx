import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Calendar,
  MapPin,
} from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { TiltedCardWithContent } from "../components/TiltedCardWithContent";
import StarBorder from "../components/StarBorder";

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineRefs = useRef<(HTMLLIElement | null)[]>([]);

  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To foster technological excellence and innovation among students while bridging the gap between academia and industry.",
    },
    {
      icon: Lightbulb,
      title: "Vision",
      description:
        "To be the leading student organization that empowers future tech leaders and contributes to the advancement of computer science.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a supportive community where students collaborate, learn, and grow together in their technological journey.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Striving for excellence in everything we do, from organizing events to developing innovative solutions.",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Chapter Establishment",
      description:
        "CSI SFIT chapter was officially established with 50 founding members.",
      color: "from-primary-500 to-primary-700",
    },
    {
      year: "2017",
      title: "First Tech Fest",
      description:
        "Organized our first major technical festival attracting 500+ participants.",
      color: "from-secondary-500 to-secondary-700",
    },
    {
      year: "2019",
      title: "Industry Partnerships",
      description:
        "Established partnerships with leading tech companies for internships and placements.",
      color: "from-purple-500 to-purple-700",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description:
        "Successfully transitioned to hybrid events during the pandemic, reaching global audiences.",
      color: "from-pink-500 to-pink-700",
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description:
        "Launched the Innovation Hub for student startups and research projects.",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      year: "2024",
      title: "Code With CSI",
      description:
        "Launched 'Code With CSI', a WhatsApp group where students can discuss and share information about DSA, cybersecurity, game development, and more.",
      color: "from-teal-500 to-teal-700",
    },
  ];

  useEffect(() => {
    if (!timelineRefs.current.length) return;

    const triggers: ScrollTrigger[] = [];

    timelineRefs.current.forEach((ref, index) => {
      if (ref) {
        const ctx = gsap.context(() => {
          const animation = gsap.fromTo(
            ref,
            { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
            {
              opacity: 1,
              x: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 85%",
                end: "top 40%",
                scrub: 2,
              },
            },
          );
          triggers.push(animation.scrollTrigger as ScrollTrigger);
        }, ref);

        return () => ctx.revert();
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2580E4]/15 via-transparent to-[#FFCDB9]/10">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">
                CSI SFIT
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Computer Society of India, St Francis Institute of Technology
              Chapter, is a vibrant community of technology enthusiasts
              dedicated to advancing computer science education and fostering
              innovation among students.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20"
          >
            {[
              { count: "500+", label: "Active Members" },
              { count: "9+", label: "Years Active" },
              { count: "50+", label: "Events Organized" },
              { count: "25+", label: "Awards Won" },
            ].map((stat, i) => (
              <StarBorder key={i} color="#FFCDB9" thickness={2}>
                <GlassCard className="flex flex-col justify-center items-center p-4 sm:p-6 text-center w-full h-full">
                  <div className="text-xl sm:text-2xl font-bold text-[#36B7B7] mb-1 break-words">
                    {stat.count}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400">
                    {stat.label}
                  </div>
                </GlassCard>
              </StarBorder>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}

      <section className="relative py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core{" "}
              <span className="gap-2 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Card with gradient overlay + backdrop-blur */}
                <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform">
                  {/* Gradient + blur overlay */}
                  <div
                    className="
                absolute inset-0 
                bg-gradient-to-br from-white/10 via-transparent to-transparent 
                backdrop-blur-sm
                pointer-events-none
              "
                  ></div>

                  {/* Card Content */}
                  <div className="relative  text-white">
                    <TiltedCardWithContent
                      icon={value.icon}
                      title={value.title}
                      description={value.description}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Our{" "}
              <span className="gap-2 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading tech community
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#1e30ff] to-[#42e0d8]" />

            <ul className="space-y-16">
              {timeline.map((item, index) => (
                <li
                  key={item.year}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2  w-full px-4">
                    <GlassCard className="p-6 backdrop-blur-sm no-hover">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white mb-3`}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>

                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#f7baa8] rounded-full border-4 border-dark-800 z-10" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Visit Us
            </h3>

            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-8 h-8 text-[#1e30ff] flex-shrink-0" />
                  <span className="text-neutral-400 text-sm sm:text-base">
                    St. Francis Institute of Technology, Mumbai
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-secondary-500 flex-shrink-0" />
                  <span className="text-neutral-400 text-sm sm:text-base">
                    Mon - Fri, 9:00 AM - 5:00 PM
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};
