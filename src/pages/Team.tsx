import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardsSection = React.lazy(
  () => import("../components/ProfileCard/CardsSection")
);

export const Team: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20">
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
              Meet the passionate individuals who drive innovation and
              excellence at CSI SFIT. Together, we're building the future of
              technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-[5rem]">
          <Suspense
            fallback={
              <div className="text-white text-center">Loading members...</div>
            }
          >
            <CardsSection department="Core" />
          </Suspense>
          <Suspense
            fallback={
              <div className="text-white text-center">Loading members...</div>
            }
          >
            <CardsSection department="Faculty" />
          </Suspense>
          <Suspense
            fallback={
              <div className="text-white text-center">Loading members...</div>
            }
          >
            <CardsSection department="Head" />
          </Suspense>
          <Suspense
            fallback={
              <div className="text-white text-center">Loading members...</div>
            }
          >
            <CardsSection department="Tech Team" />
          </Suspense>
          <Suspense
            fallback={
              <div className="text-white text-center">Loading members...</div>
            }
          >
            <CardsSection department="Creative Team" />
          </Suspense>
          <Suspense
            fallback={
              <div className="text-white text-center">Loading members...</div>
            }
          >
            <CardsSection department="PR Team" />
          </Suspense>
          <Suspense
            fallback={
              <div className="text-white text-center">Loading members...</div>
            }
          >
            <CardsSection department="Marketing Team" />
          </Suspense>
          <Suspense
            fallback={
              <div className="text-white text-center">Loading members...</div>
            }
          >
            <CardsSection department="Multimedia Team" />
          </Suspense>
        </div>
      </section>
    </div>
  );
};