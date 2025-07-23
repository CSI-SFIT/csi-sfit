import React from "react";
import { motion } from "framer-motion";

export const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes (outline squares) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 border border-[#FFCDB9]/60 rounded-sm" // outline only, no background
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1000),
            rotate: 0,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: 360,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Floating circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-2 h-2 bg-[#62cff4]/60 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};
