"use client";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  idName?: string;
}

const Button = ({ children, idName = "" }: ButtonProps) => {
  return (
    <button
      className="hover:text-gray-300 font-sans"
      onClick={() => {
        document.getElementById(idName)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </button>
  );
};

export default Button;
