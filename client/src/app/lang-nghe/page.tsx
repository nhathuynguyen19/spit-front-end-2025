"use client";

// import React, { useState } from "react";
// import NgoMonModel from "../components/NgoMon";
import HueZigzag from "../components/HueZigzag";
// import NgoMonModel from "../components/NgoMon";

const LangNghe = () => {
  //   const [index, setIndex] = useState(0);
  //   const max = 1;

  //   const next = () => setIndex((prev) => (prev === max ? 0 : prev + 1));
  //   const prev = () => setIndex((prev) => (prev === 0 ? max : prev - 1));

  //   const CARDS = 10;
  //   const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";

  return (
    <section id="lang-nghe" className="h-[100vh] relative">
      {/* tren  */}
      <HueZigzag />
      {/* duoi  */}
      <div className="w-full h-[calc(100%-50px)] border flex justify-center items-center">
        <div className="border w-[96%] h-[90%] flex">
          <div className="border w-[30%] h-[100%]">
            <div className="border w-[100%] h-[50%]">
              <article></article>
            </div>
            <div className="border w-[100%] h-[50%] flex">
              <div className="border w-[40%] h-[100%] flex items-center justify-center">
                <article className=" w-[80%] h-[50%] rounded-lg overflow-hidden">
                  <img src="/images/huong-nu.jpeg" alt="" />
                </article>
              </div>
              <div className="border w-[60%] h-[100%]"></div>
            </div>
          </div>

          <div className="border w-[70%] h-[100%]">
            <div className="border w-[100%] h-[60%] flex">
              <div className="border w-[35%] h-[100%] flex items-center justify-center">
                <article className="w-[90%] h-[90%] rounded-lg overflow-hidden">
                  <img
                    className="h-full object-cover"
                    src="/images/gai-hue-non-la.jpg"
                    alt=""
                  />
                </article>
              </div>
              <div className="border w-[65%] h-[100%]">
                <div className="border w-[100%] h-[50%]"></div>
                <div className="border w-[100%] h-[50%] flex">
                  <div className="border w-[40%] h-[100%] flex items-center justify-center">
                    <article className="w-[90%] h-[90%] rounded-lg overflow-hidden">
                      <img
                        className="h-full object-cover"
                        src="/images/tranh-lang-sinh.jpg"
                        alt=""
                      />
                    </article>
                  </div>
                  <div className="border w-[60%] h-[100%]"></div>
                </div>
              </div>
            </div>
            <div className="border w-[100%] h-[40%] flex justify-center items-center">
              <article className="relative  w-[80%] h-[90%] rounded-lg overflow-hidden">
                <img
                  src="/images/thuyen-hoa-giay.jpg"
                  alt="thuyen-hoa-giay"
                  className="absolute w-full [top:-120px]"
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LangNghe;
