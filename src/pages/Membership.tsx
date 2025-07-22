import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"; // <--- ADD THIS LINE
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, Users, Calendar, Award, Book, Code, Lightbulb, ArrowRight } from 'lucide-react';
import { Enhanced3DCard } from '../components/Enhanced3DCard';
import { GlassCard } from '../components/GlassCard';

export const Membership: React.FC = () => {
  const location = useLocation(); // <--- ADD THIS LINE

  useEffect(() => {
    // Only scroll to top if we're on the membership page
    if (location.pathname === "/membership") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    department: '',
    interests: [] as string[]
  });

  // Color classes
  const gradientTextClass = "bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent";
  const statsIconColor = "text-[#40E0D0]";
  const statsValueGradient = "bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent font-bold";

  // Membership benefits with white headings for each card
  const membershipBenefits = [
    {
      icon: Code,
      title: 'Technical Workshops',
      description: 'Access to exclusive hands-on workshops on latest technologies',
      color: statsIconColor
    },
    {
      icon: Users,
      title: 'Networking Events',
      description: 'Connect with industry professionals and like-minded peers',
      color: statsIconColor
    },
    {
      icon: Book,
      title: 'Learning Resources',
      description: 'Free access to premium courses, books, and learning materials',
      color: statsIconColor
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Industry-recognized certificates and skill validation',
      color: statsIconColor
    },
    {
      icon: Calendar,
      title: 'Priority Access',
      description: 'Early registration for events, competitions, and hackathons',
      color: statsIconColor
    },
    {
      icon: Lightbulb,
      title: 'Innovation Projects',
      description: 'Opportunity to work on real-world projects and research',
      color: statsIconColor
    }
  ];

  const membershipStats = [
    { label: 'Active Members', value: '500+', icon: Users },
    { label: 'Events Per Year', value: '50+', icon: Calendar },
    { label: 'Workshops Conducted', value: '100+', icon: Code },
    { label: 'Alumni Network', value: '2000+', icon: Award }
  ];

  const interestOptions = [
    'Web Development',
    'Mobile App Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Cybersecurity',
    'Cloud Computing',
    'DevOps',
    'UI/UX Design',
    'Blockchain',
    'IoT',
    'Game Development'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Membership form submitted:', formData);

        /// Sending data to Google Apps Script
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzCeLaKqxz3ZX8H3EM5_PD340vAHh0ywfMvXTMR-mIeJ397hiTkCJ_lc2gGSNhATmW6/exec'; 

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Join </span>
              <span className={gradientTextClass}>CSI SFIT</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Become part of a vibrant community of tech enthusiasts, innovators, and future leaders. 
              Access exclusive opportunities and accelerate your career in technology.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {membershipStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <GlassCard className="p-6 text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${statsIconColor}`} />
                    <div className={`text-2xl mb-1 ${statsValueGradient}`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Membership </span>
              <span className={gradientTextClass}>Benefits</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Unlock exclusive opportunities and resources designed to accelerate your tech journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Enhanced3DCard>
                    <div className="p-8 text-center h-full">
                      <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 ${statsIconColor}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </Enhanced3DCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Enhanced3DCard>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Start Your Journey
                  </h2>
                  <p className="text-gray-400">
                    Fill out the form below to become a member of CSI SFIT
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-2">
                        Academic Year *
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50"
                      >
                        <option value="" className="bg-dark-800">Select Year</option>
                        <option value="first" className="bg-dark-800">First Year</option>
                        <option value="second" className="bg-dark-800">Second Year</option>
                        <option value="third" className="bg-dark-800">Third Year</option>
                        <option value="final" className="bg-dark-800">Final Year</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-2">
                      Department *
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50"
                    >
                      <option value="" className="bg-dark-800">Select Department</option>
                      <option value="computer" className="bg-dark-800">Computer Engineering</option>
                      <option value="it" className="bg-dark-800">Information Technology</option>
                      <option value="electronics" className="bg-dark-800">Electronics Engineering</option>
                      <option value="extc" className="bg-dark-800">Electronics & Telecommunication</option>
                      <option value="mechanical" className="bg-dark-800">Mechanical Engineering</option>
                      <option value="other" className="bg-dark-800">Other</option>
                    </select>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interestOptions.map((interest) => (
                        <motion.button
                          key={interest}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleInterestToggle(interest)}
                          className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            formData.interests.includes(interest)
                              ? 'bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] text-white'
                              : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {interest}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-500/50"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the terms and conditions and privacy policy
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Join CSI SFIT</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </Enhanced3DCard>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8">
            <div className="text-center mb-8">
              <Star className={`w-16 h-16 mx-auto mb-4 ${statsIconColor}`} />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Why Join CSI SFIT?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${statsIconColor}`} />
                  <span>Access to industry experts and mentors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${statsIconColor}`} />
                  <span>Hands-on project experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${statsIconColor}`} />
                  <span>Career guidance and placement support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${statsIconColor}`} />
                  <span>Scholarship and internship opportunities</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${statsIconColor}`} />
                  <span>Build your professional network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${statsIconColor}`} />
                  <span>Leadership and organizational skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${statsIconColor}`} />
                  <span>Recognition and awards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${statsIconColor}`} />
                  <span>Lifetime alumni network access</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};
