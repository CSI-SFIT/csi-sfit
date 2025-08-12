import { AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  Camera,
  Code,
  Code2,
  Mail,
  Menu,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Image1 from "../assets/home-parallax/FIGMA 101 WORKSHOP.png";
import Image2 from "../assets/home-parallax/FLASK FORWARD WORKSHOP.png";
import Image3 from "../assets/home-parallax/LLM WORKSHOP.png";
import Image4 from "../assets/home-parallax/SPACE DAY 1.jpg";
import Image5 from "../assets/home-parallax/SPACE DAY 2.jpg";
import Image6 from "../assets/home-parallax/TEAM 24 PHOTO.jpg";
import Footer from "../components/Footer";
import { GlassCard } from "../components/GlassCard";
import logo from "../logo-nobg.png";
import ShiningStars from "../components/ShiningStars";

export const Home: React.FC = () => {
  const navItems = [
    { path: "/", label: "Home", icon: Code },
    { path: "/about", label: "About", icon: Users },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/team", label: "Team", icon: Users },
    { path: "/gallery", label: "Gallery", icon: Camera },
    { path: "/sponsors", label: "Sponsors", icon: Award },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

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

  // An array of image objects to display.
  // Each object has a src URL and a unique animation variant.
  // An array of image objects for parallax.
  const images = [
    { src: Image1, alt: "Parallax Image 1" },
    { src: Image2, alt: "Parallax Image 2" },
    { src: Image3, alt: "Parallax Image 3" },
    { src: Image4, alt: "Parallax Image 4" },
    { src: Image5, alt: "Parallax Image 5" },
    { src: Image6, alt: "Parallax Image 6" },
  ];

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, {
    once: true,
    amount: 0.1,
  });
  const featuresRef = React.useRef(null);
  const featuresInView = useInView(featuresRef, {
    once: true,
    amount: 0.1,
  });

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = sectionRef.current;
      if (heroSection) {
        // Calculate when the hero section is no longer in view
        const scrollThreshold = isMobile
          ? heroSection.clientHeight + 500
          : heroSection.clientHeight + 1000;
        const isPastHero = window.scrollY > scrollThreshold;
        setIsLogoVisible(isPastHero);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Responsive transforms - reduce complexity on mobile
  const lineWidth = useTransform(
    scrollYProgress,
    [0, 0.4],
    [isMobile ? "0%" : "52%", "0%"]
  );
  const opacityButs = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
  const display = useTransform(scrollYProgress, [0.02, 0.03], ["flex", "none"]);

  // Simplified animations for mobile
  const yUp1 = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.2, 0.25],
    isMobile
      ? ["50vh", "0vh", "0vh", "-50vh"]
      : ["100vw", "1vw", "1vw", "-100vw"]
  );
  const t1Opacity = useTransform(
    scrollYProgress,
    [0.094, 0.1, 0.2, 0.205],
    [0, 1, 1, 0]
  );

  const yUp2 = useTransform(
    scrollYProgress,
    [0.205, 0.21, 0.27, 0.45],
    isMobile
      ? ["50vh", "0vh", "0vh", "-50vh"]
      : ["100vw", "-3.5vw", "-3.5vw", "-100vw"]
  );
  const t2Opacity = useTransform(
    scrollYProgress,
    [0.2095, 0.21, 0.27, 0.279],
    [0, 1, 1, 0]
  );

  const yUp3 = useTransform(
    scrollYProgress,
    [0.27, 0.28],
    isMobile ? ["50vh", "0vh"] : ["100vw", "-9vw"]
  );
  const t3Opacity = useTransform(scrollYProgress, [0.278, 0.28], [0, 1]);

  // Responsive logo transforms
  const y = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, isMobile ? -200 : -337]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, isMobile ? -200 : -578]
  );
  const imgWidth = useTransform(
    scrollYProgress,
    [0, 0.1],
    [
      isMobile ? "50%" : "calc(1/3 * 100%)",
      isMobile ? "15%" : "calc(1/32 * 100%)",
    ]
  );
  const imgHeight = useTransform(scrollYProgress, [0, 0.1], ["100%", "100%"]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm z-[9999]">
      <ShiningStars count={isMobile ? 50 : 100} />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isLogoVisible
            ? "bg-[#0f0f0f]/80 backdrop-blur-lg border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[9999]">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <motion.img
                src={logo}
                alt="CSI Logo"
                className={`object-contain invert h-10 sm:h-14 p-0 m-0 logo-w drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] -mb-1 z-[999] ${
                  isLogoVisible ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
              />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#1A5AFF] to-[#00FFF0] bg-clip-text text-transparent">
                CSI SFIT
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? "text-[#00FFF0]"
                        : "text-gray-300 hover:text-[#00FFF0]"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#1A5AFF]/10 border border-[#1A5AFF]/20 rounded-lg"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-[#1A5AFF]/10 text-[#00FFF0] border border-[#1A5AFF]/20"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="relative min-h-screen backdrop-blur-sm">
        <section
          ref={sectionRef}
          className="sticky top-0 pb-12 z-[100] min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Desktop lines - hidden on mobile */}
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-[-10vw] top-[38.3vh] w-1/2 h-[9px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,1)] hidden md:block"
          ></motion.div>
          <motion.div
            style={{ width: lineWidth }}
            className="absolute right-[-10vw] top-[38.3vh] w-1/2 h-[9.3px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,1)] hidden md:block"
          ></motion.div>

          <motion.img
            src={logo}
            alt="CSI Logo"
            className="object-contain invert pt-16 sm:pt-[7.15rem] m-0 select-none pointer-events-none drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] mb-[-2rem] sm:mb-[-4.5rem] z-20"
            draggable={false}
            style={{ width: imgWidth, height: imgHeight, y, x }}
          />

          <motion.div
            className="flex flex-col gap-4 justify-center items-center"
            style={{ opacity: opacityButs, display }}
          >
            <div className="flex gap-4 justify-center items-center">
              <Link
                to="/membership"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 text-white bg-[#0f1629] border border-[#1A5AFF]/20 font-semibold rounded-xl shadow-lg hover:shadow-[#2d4277] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Join CSI SFIT</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/events"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 text-white bg-[#0f1629] border border-[#1A5AFF]/20 font-semibold rounded-xl shadow-lg hover:shadow-[#2d4277] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>View Events</span>
                  <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </div>
            <Link
              to="/gallery"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 text-white bg-[#0f1629] border border-[#1A5AFF]/20 font-semibold rounded-xl shadow-lg hover:shadow-[#2d4277] transition-all duration-300 transform hover:scale-105 w-full text-center"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View Gallery</span>
                <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Desktop lines - hidden on mobile */}
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-[-10vw] top-[54.3vh] w-1/2 h-[5.5px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,1)] hidden md:block"
          ></motion.div>
          <motion.div
            style={{ width: lineWidth }}
            className="absolute right-[-10vw] top-[54.2vh] w-1/2 h-[6px] bg-white drop-shadow-[0_0_10px_rgba(255,255,255,1)] hidden md:block"
          ></motion.div>

          <motion.h1
            style={{ y: yUp1, opacity: t1Opacity }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center px-4"
          >
            We are{" "}
            <span className="bg-[linear-gradient(135deg,#40E0D0_0%,#1A5AFF_50%,#40E0D0_100%)] bg-clip-text text-transparent">
              student innovators.
            </span>
          </motion.h1>

          <motion.h1
            style={{ y: yUp2, opacity: t2Opacity }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center px-4"
          >
            We are{" "}
            <span className="bg-[linear-gradient(135deg,#40E0D0_0%,#1A5AFF_50%,#40E0D0_100%)] bg-clip-text text-transparent">
              tech builders.
            </span>
          </motion.h1>

          <motion.h1
            style={{ y: yUp3, opacity: t3Opacity }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center px-4"
          >
            We are{" "}
            <span className="bg-[linear-gradient(135deg,#40E0D0_0%,#1A5AFF_50%,#40E0D0_100%)] bg-clip-text text-transparent">
              CSI
            </span>
          </motion.h1>

          <motion.video
            className="absolute w-full h-[105vh] object-cover top-0 -z-10 grayscale brightness-25"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/csi-intro.mp4" type="video/mp4" />
          </motion.video>
        </section>

        <div
          ref={contentRef}
          className="h-[75vh] sm:h-[125vh] min-h-screen backdrop-blur-sm"
        />

        <section className="px-4 sm:px-6 md:px-8 lg:px-[20rem] py-20 text-center text-white text-2xl font-bold mx-auto relative z-[200] bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-base sm:text-lg font-normal max-w-3xl mx-auto leading-relaxed">
              Empowering students with cutting-edge technology, fostering
              innovation, and building the next generation of tech leaders
              through collaborative learning and hands-on experience.
            </p>
          </div>

          {/* Stats and about us */}
          <section className="py-10 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                ref={statsRef}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
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
                      <GlassCard className="p-4 sm:p-6 text-center">
                        <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-[#ff6b00] mx-auto mb-4" />
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm">
                          {stat.label}
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-10 relative">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                What We Offer
              </h2>
              <motion.div
                ref={featuresRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6 sm:p-8 h-full">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}
                      >
                        <Code className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Image Gallery Section */}
          <section className="py-10 relative">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                Our Journey
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
};
