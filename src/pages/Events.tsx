import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  Filter,
  Search,
} from "lucide-react";
import { GlassCard } from "../components/GlassCard";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: "workshop" | "seminar" | "competition" | "hackathon" | "networking";
  status: "upcoming" | "ongoing" | "completed";
  image: string;
  attendees: number;
  maxAttendees: number;
  tags: string[];
  featured: boolean;
}

export const Events: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [eventsRef, eventsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const events: Event[] = [
    {
      id: "1",
      title: "AI/ML Workshop Series",
      description:
        "Comprehensive workshop covering machine learning fundamentals, neural networks, and practical implementation using Python and TensorFlow.",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab A-301",
      category: "workshop",
      status: "upcoming",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      attendees: 45,
      maxAttendees: 60,
      tags: ["AI", "Machine Learning", "Python", "TensorFlow"],
      featured: true,
    },
    {
      id: "2",
      title: "CodeFest 2024",
      description:
        "48-hour coding hackathon where teams compete to build innovative solutions to real-world problems.",
      date: "2024-02-22",
      time: "9:00 AM - 9:00 AM (+2 days)",
      location: "Main Auditorium & Labs",
      category: "hackathon",
      status: "upcoming",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      attendees: 120,
      maxAttendees: 150,
      tags: ["Hackathon", "Innovation", "Competition", "Prizes"],
      featured: true,
    },
    {
      id: "3",
      title: "Industry Connect: Tech Careers",
      description:
        "Panel discussion with industry leaders about career opportunities, skill requirements, and future trends in technology.",
      date: "2024-02-08",
      time: "2:00 PM - 5:00 PM",
      location: "Seminar Hall B-201",
      category: "seminar",
      status: "upcoming",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      attendees: 85,
      maxAttendees: 100,
      tags: ["Career", "Industry", "Networking", "Guidance"],
      featured: false,
    },
    {
      id: "4",
      title: "Web Development Bootcamp",
      description:
        "Intensive bootcamp covering full-stack web development with modern frameworks like React, Node.js, and MongoDB.",
      date: "2024-01-25",
      time: "9:00 AM - 6:00 PM",
      location: "Computer Lab B-302",
      category: "workshop",
      status: "completed",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      attendees: 55,
      maxAttendees: 55,
      tags: ["Web Development", "React", "Node.js", "Full Stack"],
      featured: false,
    },
    {
      id: "5",
      title: "Cybersecurity Awareness",
      description:
        "Workshop on cybersecurity best practices, ethical hacking basics, and digital privacy protection.",
      date: "2024-03-01",
      time: "11:00 AM - 3:00 PM",
      location: "Computer Lab A-305",
      category: "workshop",
      status: "upcoming",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      attendees: 30,
      maxAttendees: 40,
      tags: ["Cybersecurity", "Ethical Hacking", "Privacy", "Security"],
      featured: false,
    },
    {
      id: "6",
      title: "Alumni Networking Night",
      description:
        "Connect with CSI SFIT alumni working in top tech companies. Share experiences and build professional networks.",
      date: "2024-02-12",
      time: "6:00 PM - 9:00 PM",
      location: "College Cafeteria",
      category: "networking",
      status: "upcoming",
      image:
        "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      attendees: 75,
      maxAttendees: 100,
      tags: ["Alumni", "Networking", "Career", "Experience"],
      featured: true,
    },
  ];

  const categories = [
    { id: "all", label: "All Events", count: events.length },
    {
      id: "workshop",
      label: "Workshops",
      count: events.filter((e) => e.category === "workshop").length,
    },
    {
      id: "seminar",
      label: "Seminars",
      count: events.filter((e) => e.category === "seminar").length,
    },
    {
      id: "competition",
      label: "Competitions",
      count: events.filter((e) => e.category === "competition").length,
    },
    {
      id: "hackathon",
      label: "Hackathons",
      count: events.filter((e) => e.category === "hackathon").length,
    },
    {
      id: "networking",
      label: "Networking",
      count: events.filter((e) => e.category === "networking").length,
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Custom gradient and color helpers using new palette
  const getCategoryColor = (category: string) => {
    const colors = {
      workshop: "from-blue-500 to-blue-700",
      seminar: "from-green-500 to-green-700",
      competition: "from-purple-500 to-purple-700",
      hackathon: "from-red-500 to-red-700",
      networking: "from-yellow-500 to-yellow-700",
    };
    return (
      colors[category as keyof typeof colors] || "from-[#2580E4] to-[#36B7B7]"
    );
  };

  const getStatusColor = (status: string) => {
    const colors = {
      upcoming: "bg-green-500/20 text-green-400 border-green-500/30",
      ongoing: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      completed: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    };
    return (
      colors[status as keyof typeof colors] ||
      "bg-[#2580E4]/20 text-[#2580E4] border-[#2580E4]/30"
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Custom gradient background using hex codes */}
        {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617]" /> */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Events &{" "}
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">
                Workshops
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join our exciting events, workshops, and competitions designed to
              enhance your technical skills and connect with the tech community.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <GlassCard className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#36B7B7]/60 focus:border-[#FFF5D6]/40"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#36B7B7]/60 focus:border-[#FFF5D6]/40"
                  >
                    {categories.map((category) => (
                      <option
                        key={category.id}
                        value={category.id}
                        className="bg-dark-800"
                      >
                        {category.label} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative z-10 px-4 py-2 rounded-lg font-medium backdrop-blur-sm bg-white/5 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#36B7B7] to-[#2AA198] text-white shadow-lg shadow-[#36B7B7]/25"
                    : "text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              ref={eventsRef}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <GlassCard className="group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(54,183,183,0.3)]">
                    {/* Event Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />

                      {/* Status Badge */}
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                          event.status
                        )}`}
                      >
                        {event.status.charAt(0).toUpperCase() +
                          event.status.slice(1)}
                      </div>

                      {/* Featured Badge */}
                      {event.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#2A2A2A] via-[#3F3F3F] to-[#1A1A1A]">
                          Featured
                        </div>
                      )}

                      {/* Category Badge */}
                      <div
                        className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(
                          event.category
                        )} text-white`}
                      >
                        {event.category.charAt(0).toUpperCase() +
                          event.category.slice(1)}
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#2580E4] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-300">
                          <Calendar className="w-4 h-4 text-primary-500 mr-2" />
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <Clock className="w-4 h-4 text-secondary-500 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <MapPin className="w-4 h-4 text-purple-500 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <Users className="w-4 h-4 text-pink-500 mr-2" />
                          {event.attendees}/{event.maxAttendees} attendees
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Attendee Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <span>Registration</span>
                          <span>
                            {Math.round(
                              (event.attendees / event.maxAttendees) * 100
                            )}
                            %
                          </span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={
                              eventsInView
                                ? {
                                    width: `${
                                      (event.attendees / event.maxAttendees) *
                                      100
                                    }%`,
                                  }
                                : {}
                            }
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-2 bg-gradient-to-r from-[#0F2C59] via-[#36CFCF] to-[#FFF5D6] rounded-full"
                          />
                        </div>
                      </div>

                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                          event.status === "upcoming"
                            ? "bg-gradient-to-r from-[#2580E4] to-[#1B6DC1] text-white hover:shadow-[0_4px_8px_0_#2580E433,0_5px_12px_0_#36B7B766]"
                            : event.status === "ongoing"
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                            : "bg-white/10 text-gray-400 border border-white/20"
                        }`}
                        disabled={event.status === "completed"}
                      >
                        <span>
                          {event.status === "upcoming"
                            ? "Register Now"
                            : event.status === "ongoing"
                            ? "Join Event"
                            : "Event Completed"}
                        </span>
                        {event.status !== "completed" && (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </motion.button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <GlassCard className="p-12 max-w-md mx-auto">
                <Calendar className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No Events Found
                </h3>
                <p className="text-gray-400">
                  No events match your current search criteria. Try adjusting
                  your filters.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-[#2580E4] to-[#1B6DC1] text-white rounded-lg font-medium"
                >
                  Clear Filters
                </motion.button>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};
