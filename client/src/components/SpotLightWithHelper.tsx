// components/SpotLightWithHelper.tsx
"use client";

import { useRef, useEffect } from "react";
// import { SpotLightHelper } from "three";
// import { useHelper } from "@react-three/drei";
import { SpotLight } from "three";

type SpotLightProps = {
  posx: number;
  posy: number;
  posz: number;
  target_posx: number;
  target_posy: number;
  target_posz: number;
  helper: boolean;
};

export default function SpotLightWithHelper({
  posx,
  posy,
  posz,
  target_posx,
  target_posy,
  target_posz,
}: // helper = true,
SpotLightProps) {
  const spotRef = useRef<SpotLight>(null!);

  // Cập nhật target đúng hướng
  useEffect(() => {
    if (spotRef.current) {
      spotRef.current.target.position.set(
        target_posx,
        target_posy,
        target_posz
      );
      spotRef.current.target.updateMatrixWorld();
    }
  }, [target_posx, target_posy, target_posz]);

  // if (helper) {
  //   useHelper(spotRef, SpotLightHelper, "hotpink"); // helper màu hồng
  // }

  return (
    <spotLight
      ref={spotRef}
      position={[posx, posy, posz]}
      angle={Math.PI / 15} // spread
      penumbra={1} // viền mềm
      intensity={10}
      castShadow
      color="white"
      target-position={[target_posx, target_posy, target_posz]} // hướng về gốc
    />
  );
}
