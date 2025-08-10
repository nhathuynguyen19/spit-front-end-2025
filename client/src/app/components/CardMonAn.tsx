import React from "react";

type CardMonAnProps = {
  src: string;
  title: string;
  des: string;
};

function CardMonAn({ src, title, des }: CardMonAnProps) {
  return (
    <div className="image-card h-full m-4 aspect-[1/1.5] transition-transform duration-300 ease-in-out cursor-pointer md:h-[100%]">
      <div className="w-full aspect-square relative overflow-hidden rounded-2xl shadow-[2px_2px_4px_1px_rgba(0,0,0,0.3)]">
        <img src={src} alt={title} className="h-full object-cover" />

        <div className="overlayImage opacity-0 transition-opacity duration-300"></div>
      </div>
      <p className="text-black text-md font-bold cursor-text mt-2">{title}</p>
      <p className="text-gray-700 text-[10px] lg:text-sm cursor-text italic">
        {des}
      </p>
    </div>
  );
}

export default CardMonAn;
