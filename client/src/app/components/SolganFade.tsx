"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
  "Kinh Đô Xưa, Vận Hội Mới",
  "Visit Hue - VietNam",
  "Hưởng Ứng Năm Du Lịch Quốc Gia",
  "Nơi Hiện Đại Và Truyền Thống Giao Thoa",
  "Khám Phá Di Sản Văn Hóa",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return;

    // Thời gian giữ chữ hiện
    const holdTimer = setTimeout(() => {
      // Bắt đầu ẩn chữ
      setShow(false);
    }, 3000);

    return () => clearTimeout(holdTimer);
  }, [show]);

  useEffect(() => {
    if (show) return;

    // Thời gian hiệu ứng ẩn + delay chuyển sang chữ tiếp theo
    const hideTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % messages.length);
      setShow(true);
    }, 800); // phải tương ứng với duration fade out

    return () => clearTimeout(hideTimer);
  }, [show]);

  const variants = {
    enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    initial: { opacity: 0, y: 30 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="h-12 text-1xl md:text-2xl sm:text-2xl overflow-hidden en flex items-center justify-center font-sans font-bold text-[#F8B55F]">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {messages[index]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
