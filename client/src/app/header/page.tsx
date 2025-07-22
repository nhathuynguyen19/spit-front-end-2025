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
      className="relative w-full h-screen gap-8 flex justify-center items-center overflow-hidden"
    >
      <BackgroundParallax />

      <motion.div
        ref={backHeadingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute w-full h-[100vh] flex items-center justify-center z-30 md:z-20 top-[-5%]"
      >
        <div className="text-center">
          <h1
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            className="font-playfair font-bold text-white text-sm sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:mt-[-2%]"
          >
            FESTIVAL HUE 2025
          </h1>

          <div className="opacity-0">
            <AnimatedText />
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={gateRef}
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className=" z-20 absolute w-full h-[20vh] sm:h-[30vh] md:h-[30vh] lg:h-[30vh] xl:h-[30vh] bottom-[98%] sm:bottom-[76%] md:bottom-[67%] lg:bottom-[72%] xl:bottom-[73%]"
      >
        <NgoMonModel />
      </motion.div>

      <motion.div
        ref={frontHeadingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute w-full h-[100vh] flex items-center justify-center z-50 top-[-5%]"
      >
        <div className="text-center">
          <h1
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            className="opacity-0 font-playfair font-bold text-white text-sm sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:mt-[-2%]"
          >
            FESTIVAL HUE 2025
          </h1>

          <div className="">
            <AnimatedText />
          </div>
        </div>
      </motion.div>
      <div className="absolute h-full w-full top-0 left-0 bg-black bg-opacity-50 z-10"></div>
      {/* tuong truoc ngo mon  */}
      <ImageParallax />

      <NavBar />
    </section>
  );
};

export default Header;
