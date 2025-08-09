import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Handshake, Download, ExternalLink } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import StarBorder from '../components/StarBorder'; 

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver';
  description: string;
  website: string;
  contribution: string;
}

export const Sponsors: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const SponsorCard: React.FC<{ sponsor: Sponsor; index: number; tier: string }> = ({ sponsor, index, tier }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
      <motion.div
        key={sponsor.id}
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <StarBorder 
          color={sponsor.name === 'AECC Study Abroad Consultants' ? '#40E0D0' : '#FFCDB9'} 
          speed="3s" 
          thickness={4}
        >
          <GlassCard className="overflow-visible p-6 text-center max-w-xs bg-white/10 shadow-none border border-white/10">
            <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-visible">
              <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">{sponsor.name}</h4>
            <p className="text-gray-400 text-sm mb-3">{sponsor.description}</p>
            <p className="text-primary-300 text-sm mb-3">{sponsor.contribution}</p>
            <motion.a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium"
            >
              <span>Visit</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </GlassCard>
        </StarBorder>
      </motion.div>
    );
  };

  const sponsors: Sponsor[] = [
    {
      id: '1',
      name: 'AECC Study Abroad Consultants',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAQe1MTRHj9x0yZ9P3sGBXqW-yLfMWU8v2Q&s',
      tier: 'platinum',
      description: 'Expert Study Abroad Consultants for Top Overseas Destinations.',
      website: 'https://www.aeccglobal.in/',
      contribution: 'Study Abroad Consultant Partner'
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-dark-800 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: 'easeOut',
                  delayChildren: 0.2,
                  staggerChildren: 0.1,
                }
              }
            }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
            >
              Our <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">Sponsors</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
            >
              We're grateful to our amazing sponsors who support our mission to empower students
              with technology education and innovation opportunities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Current <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">Partners</span>
          </h2>

          {['platinum'].map((tier) => (
            <div key={tier} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-300 mb-8 text-center capitalize">{tier} Partners</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {sponsors.filter(s => s.tier === tier).map((sponsor, index) => (
                  <SponsorCard 
                    key={sponsor.id}
                    sponsor={sponsor} 
                    index={index} 
                    tier={tier}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Sponsorship Tiers Benefits Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                Sponsorship <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">Benefits</span> 
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Silver Tier */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <StarBorder color="#40E0D0" speed="4s" thickness={8}>
                    <GlassCard className="p-8 h-full min-h-[400px] border-2 border-cyan-400">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Silver</h3>
                        <p className="text-gray-300">Supporting Partnership</p>
                      </div>
                      <ul className="space-y-3 text-white">
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Post Event Social Media Posts</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Logo feature in selected banner</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Verbal mention in events</span>
                        </li>
                      </ul>
                    </GlassCard>
                  </StarBorder>
                </motion.div>

                {/* Gold Tier */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <StarBorder color="#40E0D0" speed="4s" thickness={8}>
                    <GlassCard className="p-8 h-full min-h-[400px] border-2 border-cyan-400">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Gold</h3>
                        <p className="text-gray-300">Strategic Partnership</p>
                      </div>
                      <ul className="space-y-3 text-white">
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Co Partner status in events</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Standard Social Media Promotion</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Mention during key event session</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Brand Logo on shared banners</span>
                        </li>
                      </ul>
                    </GlassCard>
                  </StarBorder>
                </motion.div>
                
                {/* Platinum Tier */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <StarBorder color="#40E0D0" speed="4s" thickness={8}>
                    <GlassCard className="p-8 h-full min-h-[400px] border-2 border-cyan-400">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Platinum</h3>
                        <p className="text-gray-300">Premium Partnership</p>
                      </div>
                      <ul className="space-y-3 text-white">
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Title partner in all banners</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Dedicated Sponsorship desk</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Exclusive Banner space at entry</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Premium social media campaign</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Logo on CSI Website</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Post Event Video</span>
                        </li>
                      </ul>
                    </GlassCard>
                  </StarBorder>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Sponsorship Kit Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <GlassCard className="p-8 text-center">
                <Handshake className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Sponsorship Kit</h3>
                <p className="text-gray-400 mb-6">
                  Download our comprehensive sponsorship kit to learn more about partnership opportunities
                  and the impact of your support.
                </p>
                <motion.a
                  href="/brochure.pdf"
                  download="CSI-Sponsorship-Kit.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-lg font-medium"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Sponsorship Kit</span>
                </motion.a>
              </GlassCard>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
