import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Random3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor: string; // ✅ Required glow color
}

const Random3DCard: React.FC<Random3DCardProps> = ({
  children,
  className = "",
  intensity = 15,
  glowColor,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [intensity, -intensity],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-intensity, intensity],
  );

  const setCoordinates = (clientX: number, clientY: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (clientX - rect.left) / rect.width - 0.5;
    const yPct = (clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    setCoordinates(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (touch) {
      setIsHovered(true);
      setCoordinates(touch.clientX, touch.clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (touch) {
      setCoordinates(touch.clientX, touch.clientY);
    }
  };

  const resetCard = () => {
    setTimeout(() => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    }, 600);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetCard}
      onMouseEnter={() => setIsHovered(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetCard}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <motion.div
        animate={{
          boxShadow: isHovered
            ? `0 25px 50px -12px ${glowColor}66, 0 0 60px ${glowColor}33`
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ duration: 0.3 }}
        className="w-full h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="relative z-10 h-full">{children}</div>

        <motion.div
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-xl blur-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${
              mouseXSpring.get() * 100 + 50
            }% ${mouseYSpring.get() * 100 + 50}%, ${glowColor}88, transparent 60%)`,
            transform: "translateZ(-50px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Random3DCard;
