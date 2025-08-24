import React, { useEffect, useState } from "react";

const generateStar = (id: number) => ({
  id,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2 + 1.5,
  delay: Math.random() * 2,
  duration: Math.random() * 4 + 2,
  lifeSpan: 4000 + Math.random() * 3000,
});

const ShiningStars: React.FC<{ count?: number }> = ({ count = 50 }) => {
  const [stars, setStars] = useState(() =>
    Array.from({ length: count }, (_, i) => generateStar(i))
  );
  const [idCounter, setIdCounter] = useState(count);

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const newStar = generateStar(idCounter);
      setStars((prev) => [...prev, newStar]);
      setIdCounter((id) => id + 1);

      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, newStar.lifeSpan);
    }, 250);

    return () => clearInterval(spawnInterval);
  }, [idCounter]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-gradient-to-br from-white via-[#e0e0e0] to-white animate-pulse"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: 0.8,
            filter: "drop-shadow(0 0 6px white)",
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default ShiningStars;
