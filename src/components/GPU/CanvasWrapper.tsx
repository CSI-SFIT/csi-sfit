import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionValue, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import GPUModel from "./GPUModel";
import ScrollRotateCamera from "./ScrollRotateCamera";

export default function CanvasWrapper() {
  const ref = useRef<HTMLElement | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false); // state for model load

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: ref,
      offset: ["start start", "end end"],
    });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section ref={ref} className="canvas-section">
      {!modelLoaded && (
        <div className="gpu-status-text">
          <p>Preparing GPU...</p>
        </div>
      )}

      <div className="gpu-canvas">
        <Canvas camera={{ position: [6, 6, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <Environment preset="sunset" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <ScrollRotateCamera scrollProgress={smoothScroll} />
          <GPUModel
            scrollProgress={smoothScroll}
            onLoad={() => setModelLoaded(true)} // callback on model load
          />
        </Canvas>
      </div>

      <div className="gpu-reveal-text">
        <div className="left-text">About CSI</div>
        <div className="right-text">Student Chapter & Events</div>
      </div>
    </section>
  );
}
