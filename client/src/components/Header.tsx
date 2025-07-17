"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const NgoMonModel = dynamic(() => import("@/components/NgoMon"), {
  ssr: false,
  loading: () => <p>Loading 3D...</p>,
});

const Header = () => {
  const mountainRef = useRef<HTMLImageElement>(null);
  const gateRef = useRef<HTMLImageElement>(null);
  const riverRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;

      // Tạo hiệu ứng parallax: mỗi layer di chuyển với tốc độ khác nhau
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translateY(${scrollY * -0.2}px)`;
      }
      if (gateRef.current) {
        gateRef.current.style.transform = `translateY(${scrollY * -0.5}px)`;
      }
      if (riverRef.current) {
        riverRef.current.style.transform = `translateY(${scrollY * -1}px)`;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#f5f5f5]">
      {/* Lớp 1: Núi */}
      <img
        ref={mountainRef}
        src="/images/nui-ngu-binh-hue-6.jpg"
        alt="Núi"
        className="absolute top-0 left-0 w-full h-auto z-0 transition-transform duration-200 ease-out select-none pointer-events-none"
        draggable={false}
      />

      {/* Ngọ Môn - sẽ thay bằng component 3D sau */}
      <div
        ref={gateRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-200 ease-out pointer-events-none"
      >
        <img
          src="/images/chieu-sang-ngo-mon-real.jpg"
          alt="Ngọ Môn test"
          className="w-96 max-w-full pointer-events-none select-none"
          draggable={false}
        />
      </div>

      {/* Lớp 3: Sông */}
      <img
        ref={riverRef}
        src="/images/song-huong-duoi-cau-truong-tien.jpg"
        alt="Sông Hương"
        className="absolute bottom-0 left-0 w-full z-20 transition-transform duration-200 ease-out pointer-events-none select-none"
        draggable={false}
      />
    </section>
  );
};

export default Header;
