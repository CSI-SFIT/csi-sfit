import React, { useRef } from "react";
import { motion, useSpring, type SpringOptions } from "framer-motion";


interface TiltedCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export const TiltedCardWithContent: React.FC<TiltedCardProps> = ({
  icon: Icon,
  title,
  description,
  rotateAmplitude = 14,
  scaleOnHover = 1.05,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleMouseEnter = () => {
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative [perspective:800px] flex justify-center items-center"
    >
      <motion.div
        className=" w-full min-h-[300px] pt-4 text-center inset-0 bg-gradient-to-br from-white/15 via-transparent to-neutral-700 rounded-xl pointer-events-none"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
          style={{
            background:
              "linear-gradient(to bottom right, #2580E4, #36B7B7, #FFCDB9)",
          }}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm p-5">{description}</p>
      </motion.div>
    </div>
  );
};
