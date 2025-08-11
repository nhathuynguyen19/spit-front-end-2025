"use client";

import { useState } from "react";
import Button from "@/app/components/Button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`fixed top-0 left-0 right-0 h-[50px] sm:bg-transparent z-50 w-full flex items-center justify-center px-4 sm:px-8 sm:shadow-lg backdrop-blur-sm ${
        isOpen ? "bg-[#3D365C] opacity-100" : "bg-transparent"
      } `}
      draggable={false}
    >
      {/* Mobile menu toggle */}
      <button
        className={`absolute left-4 sm:hidden hover:bg-[#3D365C] hover:scale-110 transition-transform text-black hover:text-[#F8B55F] rounded-md p-1 transition-colors duration-1000 ease-out ${
          isOpen ? "" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white bg-[#3D365C] hover:text-[#F8B55F] transition-transform transition-colors duration-1000 ease-out" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Menu items - Centered on desktop */}
      <div className="hidden z-100 sm:flex space-x-4 text-white text-sm sm:text-[12px] lg:text-base tracking-wide">
        <Button idName="trang-chu">Ngọ Môn</Button>
        <Button idName="lang-nghe">Làng Nghề</Button>
        <Button idName="am-thuc">Ẩm Thực</Button>
        <Button idName="nghe-thuat">Nghệ Thuật</Button>
        <Button idName="festival-info">Festival Info</Button>
      </div>

      {/* Mobile menu dropdown */}
      {
        <div
          className={`absolute min-w-[342px] text-white w-full h-fit z-100 left-0 top-[50px] text-sm items-start flex flex-col p-4 gap-3 sm:hidden 
            ${
              isOpen
                ? "bg-[#3D365C] opacity-100 pointer-events-auto"
                : "bg-transparent pointer-events-none"
            } `}
        >
          <Button
            idName="trang-chu"
            onClick={() => setIsOpen(false)}
            isOpen={isOpen}
          >
            Ngọ Môn
          </Button>
          <Button
            idName="lang-nghe"
            onClick={() => setIsOpen(false)}
            isOpen={isOpen}
          >
            Làng Nghề
          </Button>
          <Button
            idName="am-thuc"
            onClick={() => setIsOpen(false)}
            isOpen={isOpen}
          >
            Ẩm Thực
          </Button>
          <Button
            idName="nghe-thuat"
            onClick={() => setIsOpen(false)}
            isOpen={isOpen}
          >
            Nghệ Thuật
          </Button>
          <Button
            idName="festival-info"
            onClick={() => setIsOpen(false)}
            isOpen={isOpen}
          >
            Festival Info
          </Button>
        </div>
      }
    </section>
  );
};

export default NavBar;
