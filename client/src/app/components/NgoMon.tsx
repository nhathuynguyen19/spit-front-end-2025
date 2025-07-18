"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
// import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CameraLookAt from "./CameraLookAt";

function NgoMon() {
  const { scene } = useGLTF("/models/ngo-mon.glb");
  return <primitive object={scene} />;
}

export default function NgoMonModel() {
  return (
    <Canvas
      dpr={[1, 1]}
      // shadows={false}
      camera={{
        position: [0.05, 0.4, 4.5],
        fov: 45,
      }}
      className=""
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 5, 4]} intensity={1.2} />
      <Suspense fallback={null}>
        <NgoMon />
      </Suspense>
      {/* <OrbitControls enableZoom={false} /> */}
      <CameraLookAt />
    </Canvas>
  );
}
