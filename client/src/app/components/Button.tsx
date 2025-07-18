"use client";

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="hover:text-gray-300">{children}</button>;
};

export default Button;
