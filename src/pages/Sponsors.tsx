import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Handshake, Download, ExternalLink } from 'lucide-react';
import { Enhanced3DCard } from '../components/Enhanced3DCard';
import { GlassCard } from '../components/GlassCard';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  description: string;
  website: string;
  contribution: string;
}

export const Sponsors: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Sponsor card component to avoid using hooks inside map
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
        <Enhanced3DCard glowColor={tierColors[tier as keyof typeof tierColors].glow}>
          <div className="p-6 text-center max-w-xs">
            <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
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
          </div>
        </Enhanced3DCard>
      </motion.div>
    );
  };

  const sponsors: Sponsor[] = [
    {
      id: '1',
      name: 'TechCorp Solutions',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'platinum',
      description: 'Leading technology solutions provider supporting innovation in education.',
      website: 'https://techcorp.com',
      contribution: 'Event Sponsorship & Mentorship'
    },
    {
      id: '2',
      name: 'InnovateLabs',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'gold',
      description: 'Startup incubator fostering technological innovation and entrepreneurship.',
      website: 'https://innovatelabs.com',
      contribution: 'Hackathon Prizes & Workshops'
    },
    {
      id: '3',
      name: 'DataFlow Systems',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'gold',
      description: 'Big data analytics and cloud computing solutions provider.',
      website: 'https://dataflow.com',
      contribution: 'Infrastructure & Training'
    },
    {
      id: '4',
      name: 'CodeCraft Academy',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'silver',
      description: 'Online coding education platform with industry-focused curriculum.',
      website: 'https://codecraft.com',
      contribution: 'Educational Resources'
    },
    {
      id: '5',
      name: 'DevTools Pro',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'silver',
      description: 'Professional development tools and software solutions.',
      website: 'https://devtools.com',
      contribution: 'Software Licenses'
    },
    {
      id: '6',
      name: 'StartupHub',
      logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'bronze',
      description: 'Entrepreneur support network and business development platform.',
      website: 'https://startuphub.com',
      contribution: 'Networking Events'
    }
  ];

  const tierColors = {
    platinum: { glow: '#e5e7eb' },
    gold: { glow: '#fbbf24' },
    silver: { glow: '#9ca3af' },
    bronze: { glow: '#fb923c' }
  };

  return (
    <div className="min-h-screen pt-16 bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  ease: 'easeOut',
                  delayChildren: 0.5,
                  staggerChildren: 0.2,
                }
              }
            }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } } }}
            >
              Our <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-pulse">Sponsors</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: 'easeOut' } } }}
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
            Current <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Partners</span>
          </h2>

          {['platinum', 'gold', 'silver', 'bronze'].map((tier) => (
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

          {/* Sponsorship Kit Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <GlassCard className="p-8 text-center">
                <Handshake className="w-16 h-16 text-primary-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Sponsorship Kit</h3>
                <p className="text-gray-400 mb-6">
                  Download our comprehensive sponsorship kit to learn more about partnership opportunities
                  and the impact of your support.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-lg font-medium"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Sponsorship Kit</span>
                </motion.button>
              </GlassCard>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
