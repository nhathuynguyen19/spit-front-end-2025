"use client";

import React, { useEffect, useRef } from "react";
// import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import AnimatedText from "../components/SolganFade";
import NavBar from "../components/NavBar";
import NgoMonModel from "../components/NgoMonModel";
import ImageParallax from "../components/ImageParallax1";
import BackgroundParallax from "../components/BackgroundParallax";
// import dynamic from "next/dynamic";

// const NgoMonModel = dynamic(() => import("@/app/components/NgoMon"), {
//   ssr: false,
//   loading: () => <p>Loading 3D...</p>,
// });

const Header = () => {
  const mountainRef = useRef<HTMLImageElement>(null);
  const gateRef = useRef<HTMLImageElement>(null);
  const backHeadingRef = useRef<HTMLHeadingElement>(null);
  const frontHeadingRef = useRef<HTMLHeadingElement>(null);

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
      if (backHeadingRef.current) {
        backHeadingRef.current.style.transform = `translateY(${
          scrollY * 0.51
        }px)`;
        backHeadingRef.current.style.opacity = `${1 - scrollY / 500}`; // Giảm độ mờ khi cuộn xuống
      }
      if (frontHeadingRef.current) {
        frontHeadingRef.current.style.transform = `translateY(${
          scrollY * 0.51
        }px)`;
        frontHeadingRef.current.style.opacity = `${1 - scrollY / 500}`; // Giảm độ mờ khi cuộn xuống
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="trang-chu"
      className="relative min-w-[1080px] w-full h-[100vh] flex justify-center items-center overflow-hidden items-end min-h-[390px]"
    >
      <NavBar />
      <BackgroundParallax />

      <motion.div
        ref={backHeadingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute z-20 w-full text-center"
      >
        <h1
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          className="absolute left-1/2 z-40 -translate-x-1/2 bottom-1 text-3xl md:text-5xl z-0 sm:text-4xl font-playfair font-bold text-white"
        >
          FESTIVAL HUE <text className="text-6xl">2025</text>
        </h1>
      </motion.div>

      <motion.div
        ref={gateRef}
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute top-0 z-20 bottom-0 h-screen w-full min-h-[425px] mx-auto"
      >
        <NgoMonModel />
      </motion.div>

      <motion.div
        ref={frontHeadingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute z-40 w-full text-center"
      >
        <AnimatedText />
      </motion.div>
      {/* tuong truoc ngo mon  */}
      <ImageParallax />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
    </section>
  );
};

export default Header;
