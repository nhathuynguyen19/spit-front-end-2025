import React from "react";
import HueCharImage from "./HueCharImage";

const Hue = () => {
  return (
    <div className="min-[900px]:flex h-full w-full border border-red-700 justify-center items-center mx-auto my-auto">
      <HueCharImage src="/images/H.png" />
      <HueCharImage src="/images/U.png" />
      <HueCharImage src="/images/E.png" />
    </div>
  );
};

export default Hue;
