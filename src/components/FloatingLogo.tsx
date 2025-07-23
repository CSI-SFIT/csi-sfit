import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Globe, Zap, Terminal } from 'lucide-react';

export const FloatingLogo: React.FC = () => {
  const icons = [Code, Cpu, Database, Globe, Zap, Terminal];
  
  return (
    <div className="relative w-40 h-40 mx-auto">
      {/* Central CSI Logo */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotateY: [0, 360],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-24 h-24 w-24 h-24 bg-[linear-gradient(to_bottom_right,#40E0D0_0%,#1A5AFF_50%,#40E0D0_100%)] rounded-xl shadow-2xl flex items-center justify-center relative overflow-hidden"> 
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Code className="w-12 h-12 text-white drop-shadow-lg" />
          </motion.div>
        </div>
      </motion.div>

      {/* Orbiting Icons */}
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute w-8 h-8 flex items-center justify-center"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: '80px 80px',
            left: `${50 + 35 * Math.cos((index * 60 * Math.PI) / 180)}%`,
            top: `${50 + 35 * Math.sin((index * 60 * Math.PI) / 180)}%`,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-8 h-8 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center"
          >
            <Icon className="w-4 h-4 text-white/80" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
