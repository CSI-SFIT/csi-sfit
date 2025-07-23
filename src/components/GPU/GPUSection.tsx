import { useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../global.css";
import CanvasWrapper from "./CanvasWrapper";

function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inReveal, setInReveal] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    return smoothScroll.on("change", (v) => {
      setInReveal(v >= 0.95);
    });
  }, [smoothScroll]);

  return (
    <div>
      <header className="csi-header">
        <h1>Computer Society of India (CSI)</h1>
        <p>Empowering innovation through collaboration and technology.</p>
      </header>

      <div style={{ height: "20vh" }} />

      <div
        ref={sectionRef}
        className={`canvas-section ${inReveal ? "reveal" : ""}`}
      >
        <CanvasWrapper />
      </div>
    </div>
  );
}

export default Home;
