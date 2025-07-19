"use client";

// import React, { useEffect, useState, useRef } from "react";
import Button from "@/app/components/Button";

const NavBar = () => {
  return (
    <section
      className="fixed top-0 left-0 right-0 h-[50px] z-30 w-full flex items-center justify-center select-none shadow-lg backdrop-blur-sm"
      draggable={false}
    >
      <div className="mx-auto z-10 flex space-x-5 text-white md:text-base sm:text-[10px] text-[10px] tracking-wide">
        <Button idName="trang-chu">Trang Chủ</Button>
        <Button idName="lang-nghe">Làng Nghề</Button>
        <Button>Ẩm Thực</Button>
        <Button>Nghệ Thuật</Button>
        <Button>Festival Info</Button>
      </div>
    </section>
  );
};

export default NavBar;
