"use client";
import React from "react";

type DiemNhanProps = {
  title: string;
  src: string;
  desc: string;
};

function DiemNhan({ title, src, desc }: DiemNhanProps) {
  return (
    <div>
      <div className="pt-2 pb-2 md:hidden">
        <h2 className="text-center ">{title}</h2>
      </div>
      <div className="w-full aspect-[16/7] mt-2 mb-8 md:flex items-center md:max-h-[320px] md:p-4">
        <div className="w-[90%] h-[100%] mx-auto rounded-md overflow-hidden md:w-[569px] md:h-[320px]">
          <iframe
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="w-[90%] h-fit mx-auto text-[12px] p-2 md:w-[30%] lg:text-lg lg:w-[40%]">
          <div className="pt-2 pb-2 hidden md:block font-bold mb-4">
            <h2 className="text-right">{title}</h2>
          </div>
          <p className="text-center italic md:text-right">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default DiemNhan;
