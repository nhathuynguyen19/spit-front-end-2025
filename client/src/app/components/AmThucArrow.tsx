import React from "react";

function AmThucArrow() {
  return (
    <div className="hidden md:flex w-full h-full flex justify-center items-center">
      <div className="relative w-[40px] h-[30px] rounded-full shadow-[0_0_3px_1px_rgba(0,0,0,0.2)] hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
        <img
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          src="/images/arrow-right.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default AmThucArrow;
