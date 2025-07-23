import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface ScrollProgressProps {
  scrollProgress: {
    get: () => number;
  };
}

export default function ScrollRotateCamera({
  scrollProgress,
}: ScrollProgressProps) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(6, 6, 6));

  const start = new THREE.Vector3(6, 6, 6);
  const mid = new THREE.Vector3(0, 10, 8);
  const end = new THREE.Vector3(0, 10, 4);

  const targetPos = new THREE.Vector3();

  useFrame(() => {
    const scroll = scrollProgress.get(); // <-- pulls the actual value from spring

    // Determine target position based on scroll
    if (scroll < 0.25) {
      const t = scroll / 0.25;
      targetPos.lerpVectors(start, mid, t);
    } else if (scroll < 0.5) {
      targetPos.copy(mid);
    } else if (scroll < 0.9) {
      const t = (scroll - 0.5) / 0.4;
      targetPos.lerpVectors(mid, end, t);
    } else {
      targetPos.copy(end);
    }

    // Smooth interpolation
    currentPos.current.lerp(targetPos, 0.1);
    camera.position.copy(currentPos.current);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
