import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ExternalLink,
  Filter,
  Github,
  IndianRupee,
  Instagram,
  Linkedin,
  MapPin,
  Mic2,
  Search,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { GlassCard } from "../components/GlassCard";

import events2024 from "../components/events/events2024";
import events2025, { EventItem } from "../components/events/events2025";

type YearKey = "2025" | "2024";
const dataByYear: Record<YearKey, EventItem[]> = {
  "2025": events2025,
  "2024": events2024,
};

const toMapsLink = (location: string, explicit?: string) =>
  explicit ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;

const toCalendarLink = (e: EventItem) => {
  const title = e.title;
  const details = `${e.description}\n\nMore info: ${e.formLink ?? ""}`.trim();
  const location = e.location;

  let start = "";
  let end = "";
  if (e.time) {
    const match = e.time.match(/(\d{1,2}:\d{2}\s*[AP]M)/i);
    const startTimeStr = match ? match[1] : "10:00 AM";
    const startDateLocal = new Date(`${e.dateISO} ${startTimeStr}`);
    const endDateLocal = new Date(startDateLocal.getTime() + 60 * 60 * 1000);
    const fmt = (d: Date) =>
      d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    start = fmt(startDateLocal);
    end = fmt(endDateLocal);
  } else {
    const d = e.dateISO.replace(/-/g, "");
    start = d;
    const next = new Date(e.dateISO);
    next.setDate(next.getDate() + 1);
    const d2 = next.toISOString().slice(0, 10).replace(/-/g, "");
    end = d2;
  }

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    details,
    location,
    dates: `${start}/${end}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

type SpeakerLinks = Record<
  string,
  { instagram?: string; github?: string; linkedin?: string }
>;

export const Events: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [eventsRef, eventsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedYear, setSelectedYear] = useState<YearKey>("2025");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const events = useMemo(() => dataByYear[selectedYear] ?? [], [selectedYear]);

  const categories = useMemo(
    () => [
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
        count: events.filter((e) => e.category === "event").length,
      },
      {
        id: "networking",
        label: "Networking",
        count: events.filter((e) => e.category === "networking").length,
      },
    ],
    [events]
  );

  const filteredEvents = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return events.filter((event) => {
      const matchesCategory =
        selectedCategory === "all" || event.category === selectedCategory;
      const matchesSearch =
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term) ||
        event.tags.some((tag) => tag.toLowerCase().includes(term)) ||
        (event.speakers?.some((s) => s.toLowerCase().includes(term)) ?? false);
      return matchesCategory && matchesSearch;
    });
  }, [events, selectedCategory, searchTerm]);

  const getCategoryColor = (category: string) => {
    const colors = {
      workshop: "from-blue-500 to-blue-700",
      seminar: "from-green-500 to-green-700",
      competition: "from-purple-500 to-purple-700",
      hackathon: "from-red-500 to-red-700",
      networking: "from-yellow-500 to-yellow-700",
    } as const;
    return (colors as any)[category] || "from-[#2580E4] to-[#36B7B7]";
  };

  const getStatusColor = (status: string) => {
    const colors = {
      upcoming: "bg-green-500/20 text-green-400 border-green-500/30",
      ongoing: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      completed: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    } as const;
    return (
      (colors as any)[status] ||
      "bg-[#2580E4]/20 text-[#2580E4] border-[#2580E4]/30"
    );
  };

  return (
    <div className="min-h-screen">
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

          {/* Controls: Year Toggle + Search + Category Select */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <GlassCard className="p-6">
              <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:items-center">
                {/* Year Toggle */}
                <div className="md:col-span-3 flex justify-center md:justify-start gap-2">
                  {(["2025", "2024"] as YearKey[]).map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        selectedYear === yr
                          ? "bg-[#40E0D0] text-black"
                          : "bg-white/10 text-gray-300 hover:bg-white/15"
                      }`}
                    >
                      {yr}
                      <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                        {dataByYear[yr].length}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="md:col-span-6 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#36B7B7]/60 focus:border-[#FFF5D6]/40"
                  />
                </div>

                {/* Quick Category Select (optional to complement chips below) */}
                <div className="md:col-span-3 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full py-3 px-3 bg-white/5 border border-white/10 rounded-lg text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#36B7B7]/60 focus:border-[#FFF5D6]/40"
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

          {/* Category Chips */}
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
                className={`relative px-4 py-2 rounded-lg font-medium backdrop-blur-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#36B7B7] to-[#2AA198] text-white shadow-lg shadow-[#36B7B7]/25"
                    : "text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 bg-white/5"
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

      {/* Events Grid (your original cards) */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear + selectedCategory + searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              ref={eventsRef}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEvents.map((event, index) => {
                const speakerLinks = (
                  event as unknown as { speakerLinks?: SpeakerLinks }
                ).speakerLinks;
                const explicitMaps = (
                  event as unknown as { locationLink?: string }
                ).locationLink;

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <GlassCard className="group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(54,183,183,0.3)]">
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />

                        <div
                          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                            event.status
                          )}`}
                        >
                          {event.status.charAt(0).toUpperCase() +
                            event.status.slice(1)}
                        </div>

                        <div
                          className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(
                            event.category
                          )} text-white`}
                        >
                          {event.category.charAt(0).toUpperCase() +
                            event.category.slice(1)}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#2580E4] transition-colors">
                          {event.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-4 whitespace-pre-line">
                          {event.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <button
                            type="button"
                            onClick={() =>
                              window.open(
                                toCalendarLink(event),
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                            className="flex items-center text-left text-sm text-gray-300 hover:text-white transition cursor-pointer underline decoration-dotted underline-offset-4"
                            title="Add reminder (Google Calendar)"
                            aria-label="Add reminder on Google Calendar"
                            role="link"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.displayDate ??
                              new Date(event.dateISO).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            {event.time && (
                              <>
                                <span className="mx-2 text-gray-500">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                {event.time}
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              window.open(
                                toMapsLink(event.location, explicitMaps),
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                            className="flex items-center text-left text-sm text-gray-300 hover:text-white transition cursor-pointer underline decoration-dotted underline-offset-4"
                            title="Open in Google Maps"
                            aria-label="Open location in Google Maps"
                            role="link"
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </button>

                          {event.entry && (
                            <div className="flex items-center text-sm text-gray-300">
                              <IndianRupee className="w-4 h-4 mr-2 text-gray-300" />
                              <span className="font-medium">Entry:</span>&nbsp;
                              {event.entry}
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() =>
                                window.open(
                                  toCalendarLink(event),
                                  "_blank",
                                  "noopener,noreferrer"
                                )
                              }
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-white/90 bg-white/10 border border-white/15 hover:bg-white/15 transition"
                              aria-label="Add reminder on Google Calendar"
                            >
                              <Calendar className="w-4 h-4" />
                              Add to Calendar
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                window.open(
                                  toMapsLink(event.location, explicitMaps),
                                  "_blank",
                                  "noopener,noreferrer"
                                )
                              }
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-white/90 bg-white/10 border border-white/15 hover:bg-white/15 transition"
                              aria-label="Open location in Google Maps"
                            >
                              <MapPin className="w-4 h-4" />
                              Open in Maps
                            </button>
                          </div>

                          {event.speakers?.length > 0 && (
                            <div className="pt-2">
                              <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                                <Mic2 className="w-4 h-4" />
                                <span className="font-medium">Speakers</span>
                              </div>

                              <div className="flex flex-col gap-2">
                                {event.speakers.map((name, i) => {
                                  const links =
                                    (
                                      speakerLinks as SpeakerLinks | undefined
                                    )?.[name] || {};
                                  const hasAny =
                                    links.instagram ||
                                    links.github ||
                                    links.linkedin;

                                  return (
                                    <div
                                      key={i}
                                      className="flex items-center justify-between gap-3"
                                    >
                                      <span className="px-2 py-1 text-xs bg-white/10 text-gray-200 rounded-full border border-white/20">
                                        {name}
                                      </span>
                                      {hasAny && (
                                        <div className="flex items-center gap-1">
                                          {links.instagram && (
                                            <button
                                              type="button"
                                              onClick={() =>
                                                window.open(
                                                  links.instagram!,
                                                  "_blank",
                                                  "noopener,noreferrer"
                                                )
                                              }
                                              className="p-1 rounded hover:bg-white/10"
                                              title="Open Instagram"
                                            >
                                              <Instagram className="w-4 h-4" />
                                            </button>
                                          )}
                                          {links.github && (
                                            <button
                                              type="button"
                                              onClick={() =>
                                                window.open(
                                                  links.github!,
                                                  "_blank",
                                                  "noopener,noreferrer"
                                                )
                                              }
                                              className="p-1 rounded hover:bg-white/10"
                                              title="Open GitHub"
                                            >
                                              <Github className="w-4 h-4" />
                                            </button>
                                          )}
                                          {links.linkedin && (
                                            <button
                                              type="button"
                                              onClick={() =>
                                                window.open(
                                                  links.linkedin!,
                                                  "_blank",
                                                  "noopener,noreferrer"
                                                )
                                              }
                                              className="p-1 rounded hover:bg-white/10"
                                              title="Open LinkedIn"
                                            >
                                              <Linkedin className="w-4 h-4" />
                                            </button>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>

                        {event.tags?.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <motion.button
                          whileHover={{ scale: event.formLink ? 1.02 : 1.0 }}
                          whileTap={{ scale: event.formLink ? 0.98 : 1.0 }}
                          onClick={() => {
                            if (event.formLink)
                              window.open(
                                event.formLink,
                                "_blank",
                                "noopener,noreferrer"
                              );
                          }}
                          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                            event.formLink
                              ? "bg-gradient-to-r from-[#2580E4] to-[#1B6DC1] text-white hover:shadow-[0_4px_8px_0_#2580E433,0_5px_12px_0_#36B7B766]"
                              : "bg-white/10 text-gray-400 border border-white/20 cursor-not-allowed"
                          }`}
                          aria-disabled={!event.formLink}
                        >
                          <span>{event.registrationState}</span>
                          {event.formLink && (
                            <ExternalLink className="w-4 h-4" />
                          )}
                        </motion.button>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
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

export default Events;
