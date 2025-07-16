"use client";

import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";

export default function CameraControl() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // tuỳ breakpoint bạn muốn
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return !isMobile ? <OrbitControls enableZoom={false} /> : null;
}
