"use client";

// import React, { useEffect, useState, useRef } from "react";
import Button from "@/app/components/Button";

const NavBar = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[50px] z-30 w-screen flex items-center justify-center backdrop-blur-md select-none shadow-lg"
      draggable={false}
    >
      <div className="mx-auto z-10 flex space-x-5 text-white md:text-base sm:text-[10px] text-[10px] tracking-wide">
        <Button>Trang Chủ</Button>
        <Button>Làng Nghề</Button>
        <Button>Ẩm Thực</Button>
        <Button>Nghệ Thuật</Button>
        <Button>Festival Info</Button>
      </div>
    </div>
  );
};

export default NavBar;
