import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Hardcoded year → filename mapping
const MAGAZINES: { year: number; file: string }[] = [
  { year: 2025, file: "magazine8.pdf" },
  { year: 2024, file: "magazine7.pdf" },
  { year: 2022, file: "magazine22.pdf" },
];

export const Magazine: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { year, file } = MAGAZINES[index];

  const goPrev = () => setIndex((p) => (p - 1 + MAGAZINES.length) % MAGAZINES.length);
  const goNext = () => setIndex((p) => (p + 1) % MAGAZINES.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">
                Magazine
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore the creativity, innovation, and achievements of CSI SFIT
              through our yearly magazines.
            </p>

            {/* Year Selector */}
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
                      Magazine {year}
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

      {/* PDF Viewer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden border border-gray-700">
          <iframe
            src={`/assets/${file}`}
            className="w-full min-h-[80vh] lg:min-h-[90vh] h-[120vh] lg:h-[130vh]"
            title={`Magazine ${year}`}
          />
        </div>
      </section>
    </div>
  );
};

export default Magazine;
