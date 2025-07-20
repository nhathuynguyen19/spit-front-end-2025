import React, { useState } from "react";
import Hue from "../components/HueZigzag";
// import NgoMonModel from "../components/NgoMon";
import ContentLangNghe from "../components/ContentLangNghe";
import ImagesLangNghe from "../components/ImagesLangNghe";
import HueZigzag from "../components/HueZigzag";

const LangNghe = () => {
  const [index, setIndex] = useState(0);
  const max = 1;

  const next = () => setIndex((prev) => (prev === max ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? max : prev - 1));

  return (
    <section id="lang-nghe" className="h-[100vh] relative">
      {/* tren  */}
      <HueZigzag />
      {/* nen  */}
      <img
        src="/images/paper.jpg"
        alt="paper"
        className="z-0 absolute h-[calc(100%-50px)] w-full object-cover blur-sm"
      />

      {/* duoi  */}
      <div className="h-[calc(100%-50px)] flex"></div>
    </section>
  );
};

export default LangNghe;
