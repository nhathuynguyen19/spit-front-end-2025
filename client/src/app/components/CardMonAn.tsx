"use client";
import React from "react";

type CardMonAnProps = {
  src: string;
  title: string;
  des: string;
};

function CardMonAn({ src, title, des }: CardMonAnProps) {
  return (
    <div className="h-full m-4 aspect-[1/1.5] transition-transform duration-300 ease-in-out cursor-pointer md:h-[100%]">
      <div className="image-card overflow-hidden w-full aspect-square relative rounded-2xl shadow-[2px_2px_4px_1px_rgba(0,0,0,0.3)]">
        <img src={src} alt={title} className="h-full object-cover" />

        <div className="overlayImage opacity-0 transition-opacity duration-300"></div>
      </div>
      <p className="text-black text-md font-bold cursor-pointer mt-2 text-center md:text-left hover:underline w-fit mx-auto md:mx-0">
        {title}
      </p>
      <p className="text-gray-700 text-[10px] sm:text-sm lg:text-md cursor-text text-center md:text-left">
        {des}
      </p>
    </div>
  );
}

export default CardMonAn;
