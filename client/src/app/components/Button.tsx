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

  useEffect(() => {
    const checkScreen = () => setIsSm(window.innerWidth >= 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <button
      style={{
        textShadow: isOpen || isSm ? "2px 2px 4px rgba(0,0,0,0.7)" : "none",
      }}
      className={`hover:text-gray-300 sm:text-foreground transition-shadow font-playfair font-bold tracking-widest p-2 z-100 ${
        isOpen ? "text-foreground" : "text-transparent"
      } transition-colors duration-300 ease-in-out`}
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
