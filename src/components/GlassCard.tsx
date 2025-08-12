import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover3d?: boolean;
  glowColor?: "primary" | "secondary" | "white" | "cyan"; // 🔹 added 'cyan'
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hover3d = true,
  glowColor = "cyan",
}) => {
  // 🔹 added cyan glow
  const glowColors = {
    primary: "hover:shadow-primary-500/20",
    secondary: "hover:shadow-secondary-500/20",
    white: "hover:shadow-white/20",
    cyan: "hover:shadow-[0_8px_24px_rgba(54,183,183,0.4)]",
  };

  return (
    <motion.div
      whileHover={
        hover3d
          ? {
              y: -5,
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
            }
          : {}
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative backdrop-blur-sm bg-white/5   rounded-xl
        shadow-2xl hover:shadow-4xl transition-all duration-300
        ${glowColors[glowColor]} hover:border-white/20
        ${className}
      `}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
