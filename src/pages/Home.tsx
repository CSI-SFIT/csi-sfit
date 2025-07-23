import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Users, Calendar, Trophy, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingLogo } from '../components/FloatingLogo';
import { GlassCard } from '../components/GlassCard';
import { AnimatedText } from '../components/AnimatedText';

export const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Users, label: 'Active Members', value: '500+' },
    { icon: Calendar, label: 'Events Organized', value: '50+' },
    { icon: Trophy, label: 'Awards Won', value: '25+' },
    { icon: Code2, label: 'Projects Completed', value: '100+' },
  ];

  const features = [
    {
      title: 'Technical Workshops',
      description: 'Hands-on workshops on cutting-edge technologies and programming languages.',
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      title: 'Coding Competitions',
      description: 'Regular coding contests to sharpen your problem-solving skills.',
      gradient: 'from-secondary-500 to-secondary-700',
    },
    {
      title: 'Industry Connect',
      description: 'Networking events with industry professionals and tech leaders.',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Research Projects',
      description: 'Collaborative research opportunities in emerging tech domains.',
      gradient: 'from-pink-500 to-pink-700',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e30ff]/20 via-[#42e0d8]/10 to-[#f7baa8]/20" />
        
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          {/* Floating Logo */}
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={heroInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <FloatingLogo />
          </motion.div>

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
            Empowering students with cutting-edge technology, fostering innovation, 
            and building the next generation of tech leaders through collaborative learning 
            and hands-on experience.
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
              className="group relative px-8 py-4 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] text-white font-semibold rounded-xl shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105"
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
                    <Icon className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
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
              What We <span className="bg-[linear-gradient(135deg,#40E0D0_0%,#1A5AFF_50%,#40E0D0_100%)] bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover opportunities to grow, learn, and connect with like-minded tech enthusiasts
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
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
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
    </div>
  );
};
