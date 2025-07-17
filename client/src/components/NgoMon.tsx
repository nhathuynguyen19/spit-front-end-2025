"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function NgoMon() {
  const { scene } = useGLTF("/models/ngo-mon.glb");
  return <primitive object={scene} />;
}

export default function NgoMonModel() {
  return (
    <Canvas
      // dpr={[1, 1]}
      // shadows={false}
      camera={{
        position: [0, 2, 10],
        fov: 35,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1.2} />
      <Suspense fallback={null}>
        <NgoMon />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
