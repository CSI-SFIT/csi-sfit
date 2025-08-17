import React from "react";

export interface ChromaItem {
  image: string;
  title: string;
  name: string;
  handle?: string;
  url?: string;
}

export interface ChromaGridProps {
  items: ChromaItem[];
  className?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({ items, className = "" }) => {
  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  if (!items || items.length === 0) {
    return (
      <div className={`relative w-full h-full flex justify-center items-center ${className}`}>
        <p className="text-gray-500">No items to display</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full flex flex-wrap justify-center items-start gap-6 p-4 ${className}`}>
      {items.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
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
            <img
              src={c.image}
              alt={c.name}
              loading="lazy"
              className="w-full h-full object-cover rounded-[10px] grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
            <h3 className="m-0 text-[1.05rem] font-semibold">{c.name}</h3>
            {c.handle && <span className="text-[0.95rem] opacity-80 text-right">{c.handle}</span>}
            <p className="m-0 text-[0.95rem] opacity-75 col-span-2">{c.title}</p>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
