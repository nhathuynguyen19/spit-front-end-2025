"use client";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  idName?: string;
}

const Button = ({ children, idName = "" }: ButtonProps) => {
  return (
    <button
      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
      className="hover:text-gray-300 font-playfair tracking-widest font-bold p-2"
      onClick={() => {
        document.getElementById(idName)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </button>
  );
};

export default Button;
