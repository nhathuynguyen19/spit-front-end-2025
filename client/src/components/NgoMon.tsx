"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
// import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
// import { RectAreaLight } from "three";
// import { useRef } from "react";
// import { useHelper } from "@react-three/drei";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import SpotLightWithHelper from "@/components/SpotLightWithHelper";
import React from "react";
// import CameraControl from "@/components/CameraControl";
// import { PresentationControls } from "@react-three/drei";
import { Fragment } from "react";

function NgoMon() {
  const { scene } = useGLTF("/models/ngo-mon.glb", true, true);
  return <primitive object={scene} />;
}

// function AreaLight() {
//   const lightRef = useRef<RectAreaLight>(null!);
//   useHelper(lightRef, RectAreaLightHelper, "cyan");
//   return (
//     <rectAreaLight
//       ref={lightRef}
//       intensity={1000}
//       width={0.01}
//       height={0.5}
//       color="white"
//       position={[-2.1, 0, 1.8]}
//       rotation={[-Math.PI / -2, 0, 0]} // xoay để nhìn xuống
//     />
//   );
// }

// function SpotLight() {}

export default function NgoMonModel() {
  // const lightRef = useRef<RectAreaLight>(null!);

  return (
    <Canvas
      // dpr={[1, 1]}
      // shadows={false}
      camera={{
        position: [0, 6, 10],
        fov: 45,
      }}
    >
      {/* <CameraControl /> */}
      {/*<AreaLight/>*/}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Fragment key={i}>
          <SpotLightWithHelper
            posx={-2.24 + i * 0.2}
            posy={-0.6}
            posz={1.95}
            target_posx={-2.24 + i * 0.2}
            target_posy={0.5}
            target_posz={1}
            helper={false}
          />
          <SpotLightWithHelper
            posx={2.24 - i * 0.2}
            posy={-0.6}
            posz={1.95}
            target_posx={2.24 - i * 0.2}
            target_posy={0.5}
            target_posz={1}
            helper={false}
          />
        </Fragment>
      ))}

      <ambientLight intensity={0} />

      <directionalLight position={[0, 0, 0.6]} intensity={1.2} />

      <directionalLight position={[1, 0, -0.6]} intensity={1} />

      <directionalLight position={[-20, -7, -8]} intensity={2} />

      <Suspense fallback={null}>
        <NgoMon />
      </Suspense>
      {/*<OrbitControls enableZoom={true} />*/}
    </Canvas>
  );
}
