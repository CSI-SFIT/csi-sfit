import { AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookMarked,
  Calendar,
  Camera,
  Code,
  Code2,
  Mail,
  Menu,
  Trophy,
  Users,
  X,
  Book,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Image1 from "../assets/home-parallax/FIGMA 101 WORKSHOP.png";
// import Image2 from "../assets/home-parallax/FLASK FORWARD WORKSHOP.png";
// import Image3 from "../assets/home-parallax/LLM WORKSHOP.png";
// import Image4 from "../assets/home-parallax/SPACE DAY 1.jpg";
// import Image5 from "../assets/home-parallax/SPACE DAY 2.jpg";
// import Image6 from "../assets/home-parallax/TEAM 24 PHOTO.jpg";
import Footer from "../components/Footer";
import { GlassCard } from "../components/GlassCard";
import ShiningStars from "../components/ShiningStars";
import logo from "../logo-nobg.png";
import logo2 from "../logo.png";
import Silk from "../components/Silk";
import GradientBlinds from "../components/GradientBlinds";
import FaultyTerminal from "../components/FaultyTerminal";
import Hyperspeed from "../components/Hyperspeed";
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const navItems = [
    { path: "/", label: "Home", icon: Code },
    { path: "/about", label: "About", icon: Users },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/team", label: "Team", icon: Users },
    { path: "/gallery", label: "Gallery", icon: Camera },
    { path: "/magazine", label: "Magazine", icon: Book },
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

  // Parallax images (if needed elsewhere)
  // const images = [
  //   { src: Image1, alt: "Parallax Image 1" },
  //   { src: Image2, alt: "Parallax Image 2" },
  //   { src: Image3, alt: "Parallax Image 3" },
  //   { src: Image4, alt: "Parallax Image 4" },
  //   { src: Image5, alt: "Parallax Image 5" },
  //   { src: Image6, alt: "Parallax Image 6" },
  // ];

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = sectionRef.current;
      if (heroSection) {
        const isPastHero = window.scrollY > heroSection.clientHeight + 800;
        setIsLogoVisible(isPastHero);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["52%", "0%"]);
  // const opacityButs = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
  // const display = useTransform(scrollYProgress, [0.02, 0.03], ["flex", "none"]);

  // Headline motion values
  const yUp1 = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.2, 0.25],
    ["100vw", "2vw", "2vw", "-100vw"]
  );
  const t1Opacity = useTransform(
    scrollYProgress,
    [0.094, 0.1, 0.2, 0.205],
    [0, 1, 1, 0]
  );

  const yUp2 = useTransform(
    scrollYProgress,
    [0.205, 0.21, 0.27, 0.45],
    ["100vw", "-3vw", "-3vw", "-100vw"]
  );
  const t2Opacity = useTransform(
    scrollYProgress,
    [0.2095, 0.21, 0.27, 0.279],
    [0, 1, 1, 0]
  );

  const yUp3 = useTransform(scrollYProgress, [0.27, 0.28], ["100vw", "-8vw"]);
  const t3Opacity = useTransform(scrollYProgress, [0.279, 0.28], [0, 1]);

  const y = useTransform(scrollYProgress, [0, 0.1], [0, -348]);
  const x = useTransform(scrollYProgress, [0, 0.1], [0, -588]);
  const imgWidth = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["calc(1/3 * 100%)", "calc(1/48 * 100%)"]
  );
  const imgHeight = useTransform(scrollYProgress, [0, 0.1], ["100%", "100%"]);

  // ✅ Instantly hide the hero logo as soon as any “We are …” headline becomes visible
  const logoOpacity = useTransform(
    [t1Opacity, t2Opacity, t3Opacity],
    ([o1, o2, o3]) =>
      Number(o1) > 0 || Number(o2) > 0 || Number(o3) > 0 ? 0 : 1
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm">
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
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo (navbar) */}
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <motion.img
                src={logo2}
                alt="CSI Logo"
                className={`w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-md transition-opacity duration-500 p-0 m-0 logo-w drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-[999] opacity-100 invert-0`}
                draggable={false}
              />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#1A5AFF] to-[#00FFF0] bg-clip-text text-transparent">
                CSI SFIT
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? "text-[#00FFF0]"
                        : "text-gray-300 hover:text-[#00FFF0]"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span className="hidden xl:inline">{item.label}</span>
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
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
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
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#0f0f0f]/95 backdrop-blur-lg border-t border-white/10"
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
                          : "text-gray-300 hover:text-white hover:bg:white/5"
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

      <div className="relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm -mt-16">
        <section
          ref={sectionRef}
          className="sticky top-0 pb-12 min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 animate-gradient bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-[length:400%_400%] z-[999]"
        >
          {/* Hero Logo */}
          <motion.img
            src={logo}
            alt="CSI Logo"
            className="object-contain invert mb-4 select-none pointer-events-none 
               drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-[999]
               w-[clamp(6rem,15vw,16rem)] h-auto"
            draggable={false}
            style={{ width: "69vh" }}
          />
          {/* CTA Buttons */}
          <motion.div
            className="
        absolute bottom-6 sm:bottom-12 
        z-[999] flex flex-col gap-4 
        justify-center items-center 
        w-full max-w-3xl px-4
      "
          >
            {/* Primary Buttons Row */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center w-full">
              {/* Join CSI */}
              <Link
                to="/membership"
                className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-white bg-[#182547] border border-[#1A5AFF]/20 font-semibold rounded-xl shadow-lg hover:shadow-[#2d4277] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center text-sm sm:text-base overflow-hidden"
              >
                <span className="absolute inset-0 pointer-events-none">
                  <span className="block w-full h-full shimmer-glow" />
                </span>
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  <span>Join CSI SFIT</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </Link>

              {/* Events */}
              <Link
                to="/events"
                className=" group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 
            text-white bg-[#182547] border border-[#1A5AFF]/20 
            font-semibold rounded-xl shadow-lg 
            hover:shadow-[#2d4277] transition-all duration-300 
            transform hover:scale-105 
            w-full sm:w-auto text-center text-sm sm:text-base overflow-hidden
          "
              >
                <span className="absolute inset-0 pointer-events-none">
                  <span className="block w-full h-full shimmer-glow" />
                </span>
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  <span>View Events</span>
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                </span>
              </Link>

              {/* WhatsApp Link */}
              <a
                href="https://chat.whatsapp.com/JWRSyFzmrzT3YJFr3HIM5H?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-white bg-[#182547] border border-[#1A5AFF]/20 font-semibold rounded-xl shadow-lg hover:shadow-[#2d4277] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center text-sm sm:text-base overflow-hidden
          "
              >
                <span className="absolute inset-0 pointer-events-none">
                  <span className="block w-full h-full shimmer-glow" />
                </span>
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  <span>Code with CSI</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </a>
            </div>

            {/* Magazine CTA */}
      


<Link
  to="/magazine"
  className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-white bg-[#182547] border border-[#1A5AFF]/20 font-semibold rounded-xl shadow-lg hover:shadow-[#2d4277] transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base w-full sm:w-auto overflow-hidden"
>
  <span className="absolute inset-0 pointer-events-none">
    <span className="block w-full h-full shimmer-glow" />
  </span>
  <span className="flex items-center justify-center space-x-2 relative z-10">
    <span className="truncate">View Paradigm Edition 8 Magazine</span>
    <BookMarked className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
  </span>
</Link>
          </motion.div>
          
          {/* ALL AVAILABLE BACKGROUND ELEMENTS */}
          <Silk
            speed={20}
            scale={1}
            color="#294585"
            noiseIntensity={1}
            rotation={180}
          />

          {/* <GradientBlinds
            className="absolute inset-0 -z-10"
            gradientColors={["#1A5AFF", "#00FFF0", "#1A5AFF"]}
            angle={45}
            noise={0.3}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
          /> */}

          {/* <div className="absolute inset-0 -z-10 opacity-20">
            <FaultyTerminal
              scale={2.5}
              gridMul={[3, 1]}
              digitSize={2.5}
              timeScale={1}
              pause={false}
              scanlineIntensity={1}
              glitchAmount={0}
              flickerAmount={0}
              noiseAmp={1}
              chromaticAberration={0}
              dither={1}
              curvature={0}
              tint="#183a92"
              mouseReact={true}
              mouseStrength={2.5}
              pageLoadAnimation={false}
              brightness={1}
            />
          </div> */}

          {/* <div className="absolute inset-0 -z-10">
            <Hyperspeed
              effectOptions={{
                onSpeedUp: () => {},
                onSlowDown: () => {},
                distortion: "turbulentDistortion",
                length: 600,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                  roadColor: 0x080808,
                  islandColor: 0x0a0a0a,
                  background: 0x000000,
                  shoulderLines: 0xffffff,
                  brokenLines: 0xffffff,
                  leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                  rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                  sticks: 0x03b3c3,
                },
              }}
            />
          </div> */}
        </section>

        <div
          ref={contentRef}
          className="h-[70vh] sm:h-[100vh]"
          // className="h-[150vh] sm:h-[100vh] min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm"
        />

        <section className="px-4 sm:px-8 md:px-16 lg:px-[20rem] py-20 text-center text-white text-2xl font-bold mx-auto relative z-[9999] bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm ">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-[linear-gradient(135deg,#40E0D0_0%,#1A5AFF_50%,#40E0D0_100%)] bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-normal leading-relaxed">
              Empowering students with cutting-edge technology, fostering
              innovation, and building the next generation of tech leaders
              through collaborative learning and hands-on experience.
            </p>
          </div>

          {/* Stats */}
          <section className="py-10 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                ref={statsRef}
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
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
                      <GlassCard className="p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff6b00] mx-auto mb-3 sm:mb-4" />
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

          {/* Features */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                ref={featuresRef}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  What We{" "}
                  <span className="bg-[linear-gradient(135deg,#40E0D0_0%,#1A5AFF_50%,#40E0D0_100%)] bg-clip-text text-transparent">
                    Offer
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-normal">
                  Discover opportunities to grow, learn, and connect with
                  like-minded tech enthusiasts
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-4 sm:p-6 h-full hover:scale-105 transition-transform duration-300">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
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
        </section>
      </div>

      <Footer />

      <ShiningStars count={200} />
    </div>
  );
};
