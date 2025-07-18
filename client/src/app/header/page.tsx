"use client";

import React, { useEffect, useRef } from "react";
import NgoMonModel from "../components/NgoMon";
// import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import AnimatedText from "../components/SolganFade";
// import dynamic from "next/dynamic";

// const NgoMonModel = dynamic(() => import("@/app/components/NgoMon"), {
//   ssr: false,
//   loading: () => <p>Loading 3D...</p>,
// });

const Header = () => {
  const mountainRef = useRef<HTMLImageElement>(null);
  const gateRef = useRef<HTMLImageElement>(null);
  const riverRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;

      // Tạo hiệu ứng parallax: mỗi layer di chuyển với tốc độ khác nhau
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
      if (gateRef.current) {
        gateRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      if (riverRef.current) {
        riverRef.current.style.transform = `translateY(${scrollY * 0}px)`;
      }
      if (headingRef.current) {
        headingRef.current.style.transform = `translateY(${scrollY * 1}px)`;
        headingRef.current.style.opacity = `${1 - scrollY / 500}`; // Giảm độ mờ khi cuộn xuống
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex justify-center items-center items-end overflow-hidden min-h-[390px]">
      <img
        ref={mountainRef}
        className="absolute top-0 w-full"
        src="/images/sky1-crop.jpg"
        alt="sky"
      />

      <motion.div
        ref={gateRef}
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute top-0 z-5 bottom-0 h-screen w-full min-h-[425px] mx-auto"
      >
        <NgoMonModel />
      </motion.div>
      <img
        className="absolute top-0 w-screen z-20 h-[100vh] object-cover mx-auto min-h-[360px]"
        ref={riverRef}
        src="/images/tuong-truoc-ngo-mon.png"
        alt="truoc ngo mon"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute z-10 w-screen text-center"
      >
        <h1 className="text-3xl md:text-5xl sm:text-4xl font-sans font-bold tracking-wider text-white">
          Festival Hue 2025
        </h1>
        <AnimatedText />
      </motion.div>
    </section>
  );
};

export default Header;
