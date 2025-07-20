// import { img } from "framer-motion/client";
import React from "react";

interface HueCharImageProps {
  src?: string;
}

const HueCharImage = ({ src }: HueCharImageProps) => {
  return (
    <img
      className="h-full border ml-1 mr-1 mx-auto my-auto"
      src={src}
      alt="HUE"
    />
  );
};

export default HueCharImage;
