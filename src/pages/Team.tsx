import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Mail, Linkedin, Github, Instagram } from "lucide-react";
import type { Member, Category } from "../team-data/types";
import { TEAM_MODULES, YEARS, CATEGORY_ORDER } from "../team-data";

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
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="flex items-center justify-center mb-8 gap-4"
  >
    <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-pulse rounded-full" />
    <p className="text-3xl font-bold bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent whitespace-nowrap">
      {title}
    </p>
    <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-pulse rounded-full" />
  </motion.div>
);

const ProfileCard: React.FC<{ member: Member; year: number }> = ({ member, year }) => {
  const img = computeImage(member, year);
  const [failed, setFailed] = useState(false);
  const initials = useMemo(
    () =>
      member.name
        .split(/\s+/)
        .slice(0, 2)
        .map((s) => s[0]?.toUpperCase())
        .join(""),
    [member.name]
  );

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      onMouseMove={handleCardMove}
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative flex flex-col w-[300px] h-[380px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer bg-[#1C2C4A]"
      style={{ "--spotlight-color": "rgba(255, 255, 255, 0.25)" } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0 opacity-0 group-hover:opacity-100"
        style={{ background: "linear-gradient(145deg, #3B82F6, #1C2C4A)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 40%)",
        }}
      />
      <div className="relative z-10 p-[10px] box-border h-[280px]">
        {!failed ? (
          <img
            src={img}
            alt={member.name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="w-full h-full object-cover rounded-[10px] grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-sky-500 rounded-[10px]">
            <span className="text-white/90 text-5xl font-bold">{initials}</span>
          </div>
        )}
      </div>
      <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
        <h3 className="m-0 text-[1.05rem] font-semibold">{member.name}</h3>
        {member.email && (
          <a href={`mailto:${member.email}`} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
            <Mail size={18} />
          </a>
        )}
        <p className="m-0 text-[0.95rem] opacity-80 col-span-2">{member.title}</p>
        <div className="col-span-2 mt-1 flex items-center gap-3">
          {member.linkedinLink && (
            <a href={member.linkedinLink} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
              <Linkedin size={18} />
            </a>
          )}
          {member.githubLink && (
            <a href={member.githubLink} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
              <Github size={18} />
            </a>
          )}
          {member.instagramLink && (
            <a href={member.instagramLink} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
              <Instagram size={18} />
            </a>
          )}
        </div>
      </footer>
    </motion.article>
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
              return (
                <div key={`${cat}-${year}`}>
                  <SectionHeader title={cat} />
                  <div className="flex justify-center w-full px-2">
                    <div className="flex flex-wrap justify-center gap-8 max-w-screen-xl">
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
