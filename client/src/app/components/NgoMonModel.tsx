"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import NgoMon from "./NgoMon";
import CameraLookAt from "./CameraLookAt";

export default function NgoMonModel() {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const percent = scrollY / maxScroll;
      const angle = -(percent + 0.15) * (Math.PI / 6);
      setRotationX(angle);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const percentX = e.clientX / window.innerWidth;
      const angleY = (percentX - 0.9) * (Math.PI / 24); // ±20 độ
      setRotationY(angleY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-[390px] w-full h-screen overflow-hidden">
      <Canvas
        shadows
        // dpr={[1, 1]}
        camera={{ position: [0.05, 0.4, 3.2], fov: 45 }}
        className="w-full h-full"
      >
        {/* <ambientLight intensity={0.1} /> */}
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.1}
          shadow-camera-far={10}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Suspense fallback={null}>
          <NgoMon rotationX={rotationX} rotationY={rotationY} />
        </Suspense>
        <CameraLookAt />
      </Canvas>
    </div>
  );
}
