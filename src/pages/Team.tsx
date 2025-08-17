import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Mail, Linkedin, Github, Instagram } from "lucide-react";
import type { Member, Category } from "../team-data/types";
import { TEAM_MODULES, YEARS, CATEGORY_ORDER } from "../team-data";
import ChromaGrid from "../components/ChromaGrid.tsx";
import "./ProfileCard.css";

const categoryFolder = (c: Category) => {
  switch (c) {
    case "Tech Team":
      return "Tech";
    case "Creative Team":
      return "Creative";
    case "PR Team":
      return "PR";
    case "Marketing Team":
      return "Marketing";
    case "Multimedia Team":
      return "Multimedia";
    case "Core":
      return "Core";
    default:
      return "Faculty";
  }
};

const firstName = (full: string) => full.trim().split(/\s+/)[0];

const computeImage = (m: Member, year: number) => {
  if (m.image) return m.image;
  const folder = m.title.toLowerCase().includes("convenor") ? "Faculty" : categoryFolder(m.category);
  return `/assets/team${year}/${folder}/${firstName(m.name)}.webp`;
};

const AcademicYearLabel: React.FC<{ year: number }> = ({ year }) => (
  <span className="text-2xl font-semibold text-gray-300">
    Team of {year - 1}-{year - 2000}
  </span>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 12, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="flex items-center justify-center mb-8 gap-4"
  >
    <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-pulse rounded-full" />
    <p className="text-3xl font-semibold bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent whitespace-nowrap">
      {title}
    </p>
    <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-pulse rounded-full" />
  </motion.div>
);

const ProfileCard: React.FC<{ member: Member; year: number }> = ({ member, year }) => {
  const img = computeImage(member, year);
  const cardStyle = useMemo(
    () => ({
      "--icon": "none",
      "--grain": "none",
      "--inner-gradient": "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",
    }) as React.CSSProperties,
    []
  );

  return (
    <div className="pc-card-wrapper" style={cardStyle}>
      <section className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={img}
              alt={`${member.name} avatar`}
              loading="lazy"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.style.display = "none";
              }}
            />
            <div className="pc-user-info">
              <div className="pc-user-details">
                <div className="pc-user-text">
                  <div className="pc-handle text-sm sm:text-base md:text-lg">
                    @{firstName(member.name).toLowerCase()}
                  </div>
                </div>
              </div>
              <ul className="pc-social-icons flex justify-center">
                {member.linkedinLink && (
                  <li>
                    <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                    </a>
                  </li>
                )}
                {member.instagramLink && (
                  <li>
                    <a href={member.instagramLink} target="_blank" rel="noopener noreferrer">
                      <Instagram />
                    </a>
                  </li>
                )}
                {member.githubLink && (
                  <li>
                    <a href={member.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github />
                    </a>
                  </li>
                )}
                {member.email && (
                  <li>
                    <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                      <Mail />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Team: React.FC = () => {
  const [index, setIndex] = useState(0);
  const year = YEARS[index];
  const [members, setMembers] = useState<Member[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setMembers(null);
    TEAM_MODULES[year]().then((mod) => {
      if (!cancelled) {
        setMembers(mod.default);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [year]);

  const goPrev = () => setIndex((p) => (p - 1 + YEARS.length) % YEARS.length);
  const goNext = () => setIndex((p) => (p + 1) % YEARS.length);

  const toChromaItems = (list: Member[], y: number) =>
    list.map((m) => ({
      image: computeImage(m, y),
      title: m.title,
      name: m.name,
      handle: `@${firstName(m.name).toLowerCase()}`,
      url: m.linkedinLink || m.githubLink || m.instagramLink || (m.email ? `mailto:${m.email}` : undefined),
    }));

  return (
    <div className="min-h-screen">
      <section className="relative py-20 pb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals who drive innovation and excellence at CSI SFIT. Together, we're building the future of technology.
            </p>
            <div className="flex flex-col items-center mt-16">
              <div className="flex items-center gap-6 mb-4">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={goPrev}
                  className="p-3 rounded-full bg-gray-700 text-white shadow-md hover:bg-gray-600 transition-colors"
                >
                  <ChevronLeft size={20} />
                </motion.button>
                <div className="min-w-[120px] flex justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={year}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="text-2xl font-semibold text-gray-300 leading-relaxed"
                    >
                      Team of {year - 1}-{year - 2000}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={goNext}
                  className="p-3 rounded-full bg-gray-700 text-white shadow-md hover:bg-gray-600 transition-colors"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        {loading && <div className="text-center text-gray-400">Loading members…</div>}
        {!loading && members && (
          <div className="max-w-7xl mx-auto flex flex-col gap-20">
            {CATEGORY_ORDER.map((cat) => {
              const list = members.filter((m) => m.category === cat);
              if (list.length === 0) return null;
              const isCore = cat === "Core";

              if (year === 2025) {
                const items = toChromaItems(list, year);
                return (
                  <div key={`${cat}-${year}`}>
                    <SectionHeader title={cat} />
                    <ChromaGrid items={items} className="w-full max-w-screen-xl mx-auto" />
                  </div>
                );
              }

              return (
                <div key={`${cat}-${year}`}>
                  <SectionHeader title={cat} />
                  <div className="flex justify-center w-full px-2">
                    <div
                      className={
                        isCore
                          ? "grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center w-full max-w-[860px] mx-auto"
                          : "flex flex-wrap justify-center gap-8 max-w-screen-xl"
                      }
                    >
                      {list.map((m, i) => (
                        <ProfileCard key={`${m.name}-${i}`} member={m} year={year} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Team;
