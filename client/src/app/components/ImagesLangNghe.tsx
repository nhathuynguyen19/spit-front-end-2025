"use client";

import { div } from "framer-motion/client";

interface ContentLangNgheProps {
  index: number;
}

const imagesList = [
  {
    src: "/images/huong-hue.jpg",
    title: "asd",
  },
  {
    src: "/images/sky1-crop.jpg",
    title: "assdfsfd",
  },
];

export default function ImagesLangNghe({ index }: ContentLangNgheProps) {
  const { src, title } = imagesList[index];

  return (
    <div className="w-full h-full">
      <div className="w-full h-[60px] border">s</div>
      <div className="w-full h-[calc(100%-60px)] border">
        <img src={src} alt={title} className="w-[70%] mx-auto rounded-md" />
      </div>
    </div>
  );
}
