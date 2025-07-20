import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Enhanced3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

export const Enhanced3DCard: React.FC<Enhanced3DCardProps> = ({
  children,
  className = '',
  intensity = 15,
  glowColor = '#36b7b7' // <--- Changed default to teal/cyan
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      <motion.div
        animate={{
          boxShadow: isHovered
            ? `0 25px 50px -12px ${glowColor}40, 0 0 60px ${glowColor}20`
            : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
        transition={{ duration: 0.3 }}
        className="w-full h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden"
        style={{ transform: 'translateZ(50px)' }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 h-full">
          {children}
        </div>

        {/* Glow effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-xl blur-xl"
          style={{
            background: `radial-gradient(circle at ${mouseXSpring}px ${mouseYSpring}px, ${glowColor}40, transparent 60%)`,
            transform: 'translateZ(-50px)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};