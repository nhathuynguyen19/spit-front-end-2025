"use client";

import { useState } from "react";
import Button from "@/app/components/Button";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`fixed top-0 left-0 right-0 h-[50px] sm:bg-transparent z-50 w-full flex items-center justify-center px-4 sm:px-8 sm:shadow-lg backdrop-blur-sm text-white transition-colors duration-300 ${
        isOpen ? "bg-background opacity-100" : "bg-transparent"
      } `}
      draggable={false}
    >
      {/* Mobile menu toggle */}
      <button
        className="absolute left-4 sm:hidden bg-transparent text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Menu items - Centered on desktop */}
      <div className="hidden z-100 sm:flex space-x-4 text-white text-sm sm:text-[12px] lg:text-base tracking-wide">
        <Button idName="trang-chu">Trang Chủ</Button>
        <Button idName="lang-nghe">Làng Nghề</Button>
        <Button>Ẩm Thực</Button>
        <Button>Nghệ Thuật</Button>
        <Button>Festival Info</Button>
      </div>

      {/* Mobile menu dropdown */}
      {
        <div
          className={`absolute transition-colors duration-300 text-foreground w-full h-fit z-100 top-[50px] text-sm items-start flex flex-col p-4 gap-3 sm:hidden 
            ${
              isOpen
                ? "bg-background opacity-100 pointer-events-auto"
                : "bg-transparent pointer-events-none"
            } `}
        >
          <Button
            idName="trang-chu"
            onClick={() => setIsOpen(false)}
            isOpen={isOpen}
          >
            Trang Chủ
          </Button>
          <Button
            idName="lang-nghe"
            onClick={() => setIsOpen(false)}
            isOpen={isOpen}
          >
            Làng Nghề
          </Button>
          <Button onClick={() => setIsOpen(false)} isOpen={isOpen}>
            Ẩm Thực
          </Button>
          <Button onClick={() => setIsOpen(false)} isOpen={isOpen}>
            Nghệ Thuật
          </Button>
          <Button onClick={() => setIsOpen(false)} isOpen={isOpen}>
            Festival Info
          </Button>
        </div>
      }
    </section>
  );
};

export default NavBar;
