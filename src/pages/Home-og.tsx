import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Code2, Trophy, Users } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { AnimatedText } from "../components/AnimatedText";
import { GlassCard } from "../components/GlassCard";
import GPUSection from "../components/GPU/GPUSection";
import logo from "../logo-nobg.png";

export const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, label: "Active Members", value: "500+" },
    { icon: Calendar, label: "Events Organized", value: "50+" },
    { icon: Trophy, label: "Awards Won", value: "25+" },
    { icon: Code2, label: "Projects Completed", value: "100+" },
  ];

  const features = [
    {
      title: "Technical Workshops",
      description:
        "Hands-on workshops on cutting-edge technologies and programming languages.",
      gradient: "from-[#ff6b00] to-[#c2410c]",
    },
    {
      title: "Coding Competitions",
      description:
        "Regular coding contests to sharpen your problem-solving skills.",
      gradient: "from-[#00c9a7] to-[#047857]",
    },
    {
      title: "Industry Connect",
      description:
        "Networking events with industry professionals and tech leaders.",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Research Projects",
      description:
        "Collaborative research opportunities in emerging tech domains.",
      gradient: "from-pink-500 to-pink-700",
    },
  ];

  const [inReveal, setInReveal] = useState(false);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  // Animate values based on scroll progress (0 to 1)
  const x = useTransform(scrollYProgress, [0, 0.2], ["-50%", "-42vw"]);
  const y = useTransform(scrollYProgress, [0, 0.2], ["-50%", "-43vh"]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]); // Fade out after scroll

  useEffect(() => {
    const unsubscribe = smoothScroll.on("change", (v) => {
      setInReveal(v >= 0.95);
    });
    return unsubscribe;
  }, [smoothScroll]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm ">
      {/* Hero Section */}
      <section
        ref={scrollRef}
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="fixed z-40 w-64 h-64 object-contain left-1/2 top-1/2 pointer-events-none"
          style={{
            x,
            y,
            scale,
          }}
        />
        <div className="absolute inset-0 opacity-90" />

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          {/* Hero Text */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-[linear-gradient(135deg,#40E0D0_0%,#1A5AFF_50%,#40E0D0_100%)] bg-clip-text text-transparent animate-gradient bg-300">
                Computer Society
              </span>
              <br />
              <span className="text-white">of India</span>
            </h1>
            <AnimatedText
              text="St. Francis Institute of Technology Chapter"
              className="text-xl md:text-2xl text-gray-300 font-light"
              delay={0.6}
            />
          </motion.div>

          {/* Hero Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Empowering students with cutting-edge technology, fostering
            innovation, and building the next generation of tech leaders through
            collaborative learning and hands-on experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/membership" //Added Page Address Location and changed Color(below)
              className="group relative px-8 py-4 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] text-white font-semibold rounded-xl shadow-lg hover:shadow-[#ff6b00]/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>Join CSI SFIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/events"
              className="group px-8 py-4 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>View Events</span>
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* GPU Scroll Animation Section */}
      {/* <div style={{ height: "20vh" }} /> */}

      <section className={`canvas-section ${inReveal ? "reveal" : ""}`}>
        <GPUSection />
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center">
                    <Icon className="w-8 h-8 text-[#ff6b00] mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We{" "}
              <span className="bg-[linear-gradient(135deg,#40E0D0_0%,#1A5AFF_50%,#40E0D0_100%)] bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover opportunities to grow, learn, and connect with
              like-minded tech enthusiasts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                  >
                    <div className="w-6 h-6 bg-white/20 rounded" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming{" "}
              <span className="bg-gradient-to-r from-[#1A5AFF] to-[#40E0D0] bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join us for exciting events and opportunities to grow your skills
              and network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hackathon: CodeStorm",
                date: "August 15, 2025",
                description:
                  "A 24-hour coding sprint for innovators and developers to solve real-world challenges.",
              },
              {
                title: "AI & ML Workshop",
                date: "September 5, 2025",
                description:
                  "Hands-on sessions covering machine learning fundamentals and deep learning demos.",
              },
              {
                title: "TechTalks with Alumni",
                date: "October 1, 2025",
                description:
                  "Interactive panel with SFIT alumni working at top tech companies sharing insights.",
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-[1.03] transition-all duration-300 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#40E0D0] mb-3">{event.date}</p>
                  <p className="text-gray-300 text-sm">{event.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet the{" "}
                <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The passionate people behind the success of CSI SFIT.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Arshvir Singh",
                  role: "Chairperson",
                  image: "https://i.pravatar.cc/150?img=32",
                },
                {
                  name: "Aarushi Mehta",
                  role: "Vice Chairperson",
                  image: "https://i.pravatar.cc/150?img=47",
                },
                {
                  name: "Kunal Deshmukh",
                  role: "Technical Lead",
                  image: "https://i.pravatar.cc/150?img=22",
                },
                {
                  name: "Nikita Jain",
                  role: "Event Manager",
                  image: "https://i.pravatar.cc/150?img=65",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="group p-6 text-center bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl transition-all duration-300 hover:scale-[1.03]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#40E0D0]/30 shadow-lg group-hover:scale-105 transition"
                    />
                    <h3 className="text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
