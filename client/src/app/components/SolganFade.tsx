"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
  "Kinh Đô Xưa - Vận Hội Mới",
  "Visit Hue - Vietnam",
  "The Year of Vietnamese Journeys",
  "Hồn Xưa Giữa Thời Nay",
  "Di Sản - Văn Hóa",
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
    <div
      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
      className="absolute left-1/2 z-40 select-none -translate-x-1/2 top-1/2 -translate-y-1/2 h-12 text-3xl overflow-hidden z-10 en flex items-center justify-center font-greatvibes font-bold text-[#F8B55F]"
    >
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
