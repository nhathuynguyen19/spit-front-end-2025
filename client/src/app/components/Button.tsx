"use client";

import { useEffect, useState } from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  idName?: string;
  isOpen?: boolean;
}

const Button = ({ children, idName = "", onClick, isOpen }: ButtonProps) => {
  const [isSm, setIsSm] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSm(window.innerWidth >= 640);
    const mq = window.matchMedia("(hover: hover)");

    setCanHover(mq.matches);
    const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", listener);

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => {
      window.removeEventListener("resize", checkScreen);
      mq.removeEventListener("change", listener);
    };
  }, []);

  return (
    <button
      style={{
        textShadow: isOpen || isSm ? "2px 2px 4px rgba(0,0,0,0.7)" : "none",
        touchAction: "manipulation",
      }}
      className={`sm:hover:text-[#F8B55F] hover:scale-110 transition-transform transition-shadow sm:text-white font-playfair font-bold tracking-widest p-2 z-100 ${
        isOpen ? "text-white" : "text-transparent"
      } ${
        canHover ? "hover:text-[#F8B55F]" : ""
      } active:text-[#F8B55F] transition-colors duration-100 ease-in-out`}
      onClick={() => {
        if (idName) {
          document
            .getElementById(idName)
            ?.scrollIntoView({ behavior: "smooth" });
        }
        onClick?.();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
