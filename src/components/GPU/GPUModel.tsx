import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

interface GPUModelProps {
  scrollProgress: MotionValue<number>;
  onLoad?: () => void;
}

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Object3D>;
  materials: Record<string, THREE.Material>;
};

export default function GPUModel({ scrollProgress, onLoad }: GPUModelProps) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/gpu_model.gltf") as GLTFResult;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (onLoad) onLoad(); // Call onLoad when model is available
  }, [scene, animations, onLoad]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mixer = useRef<THREE.AnimationMixer>();
  const action = useRef<THREE.AnimationAction>();
  const animatedTime = useRef(0);
  const progressRef = useRef(0);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const act = mixer.current.clipAction(animations[0]);
      act.play();
      act.paused = true;
      action.current = act;
    }
  }, [animations, scene]);

  useMotionValueEvent(scrollProgress, "change", (value) => {
    progressRef.current = value;
  });

  useFrame(() => {
    if (action.current && mixer.current && group.current) {
      const animStart = 0.5;
      const animEnd = 0.95;
      const scroll = progressRef.current;

      const rawT = (scroll - animStart) / (animEnd - animStart);
      const t = THREE.MathUtils.clamp(rawT, 0, 1);

      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const duration = action.current.getClip().duration;
      const targetTime = eased * duration;

      animatedTime.current = THREE.MathUtils.lerp(
        animatedTime.current,
        targetTime,
        0.03
      );

      action.current.time = animatedTime.current;
      mixer.current.update(0);

      const currentPos = group.current.position;
      const targetZ = THREE.MathUtils.lerp(0, 2, eased);
      currentPos.z = THREE.MathUtils.lerp(currentPos.z, targetZ, 0.1);
    }
  });

  return (
    <primitive
      object={scene}
      ref={group}
      position={[0, 0, 0]}
      scale={isMobile ? 0.5 : 1.5}
    />
  );
}
