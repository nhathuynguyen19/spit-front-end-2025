"use client";

// import Image from "next/image";
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
    <section
      id="lang-nghe"
      className="h-[100vh] min-w-[1080px] min-h-[440px] relative bg-[#7C4585]"
    >
      {/* tren  */}
      <HueZigzag />
      {/* duoi  */}
      <div className="w-full h-[calc(100%-50px)] min-h-[390px]  flex justify-center items-center">
        <div className="min-w-[1080px] max-w-[1080px] h-full flex justify-center items-center">
          <div className=" w-[96%] h-[90%] max-h-[390px] flex">
            <div className=" w-[30%] h-[100%]">
              <div className="w-[100%] h-[50%] flex justify-center items-center">
                <article className="relative hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] w-[95%] h-[95%] rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/lang-dan-lat-bao-la.jpg"
                    alt=""
                    className="w-full object-cover"
                  />
                  <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[30%] bottom-0"></div>
                  <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                    Đan Lát Bao La - xã Đan Điền, huyện Quảng Điền
                  </p>
                </article>
              </div>
              <div className="w-[100%] h-[50%] flex">
                <div className=" w-[40%] h-[100%] flex items-center justify-center">
                  <article className="relative hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] w-[95%] h-[70%] rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src="/images/huong-hue.jpg"
                      alt=""
                      className="h-full object-cover"
                    />
                    <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[30%] bottom-0"></div>
                    <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                      Làng Hương - Thủy Xuân
                    </p>
                  </article>
                </div>
                <div className="w-[60%] h-[100%] flex items-center justify-center">
                  <article className="relative hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] w-[95%] h-[95%] rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src="/images/kim-hoan-ke-mon.jpg"
                      alt=""
                      className="h-full object-cover"
                    />
                    <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[40%] bottom-0"></div>
                    <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                      Kim Hoàn Kế Môn - xã Phong Thạnh, thị xã Phong Điền
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div className=" w-[70%] h-[100%]">
              <div className=" w-[100%] h-[60%] flex">
                <div className=" w-[35%] h-[100%] flex items-center justify-center">
                  <article className="relative hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] w-[90%] h-[90%] rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      className="h-full object-cover"
                      src="/images/net-dep-non-la.jpg"
                      alt=""
                    />
                    <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[30%] bottom-0"></div>
                    <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                      Nón Lá Tây Hồ - xã Phú Hồ, huyện Phú Vang TP Huế
                    </p>
                  </article>
                </div>
                <div className="w-[65%] h-[100%]">
                  <div className="w-[100%] h-[50%] flex justify-center items-center">
                    <article className="relative hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] w-[95%] h-[95%] rounded-lg overflow-hidden flex items-center justify-center">
                      <img
                        className="w-full object-cover"
                        src="/images/sanh-hue.jpg"
                        alt=""
                      />
                      <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[30%] bottom-0"></div>
                      <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                        Nghề Khảm Sành Sứ
                      </p>
                    </article>
                  </div>
                  <div className="w-[100%] h-[50%] flex">
                    <div className=" w-[40%] h-[100%] flex items-center justify-center">
                      <article className="relative hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] w-[90%] h-[90%] rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                          className="h-full object-cover"
                          src="/images/tranh-lang-sinh.jpg"
                          alt=""
                        />
                        <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[65%] bottom-0"></div>
                        <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                          Nghề Tranh Làng Sình - dọc theo hạ lưu sông Hương
                        </p>
                      </article>
                    </div>
                    <div className="w-[60%] h-[100%] flex items-center justify-center">
                      <article className="relative hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] w-[95%] h-[95%] rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                          src="/images/nghe-ren.jpg"
                          alt=""
                          className="w-full object-cover"
                        />
                        <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[65%] bottom-0"></div>
                        <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                          Làng Rèn Hiền Lương (Hoa Lang)
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-[100%] h-[40%] flex justify-center items-center">
                <article className="relative hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] w-[80%] h-[90%] rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/thuyen-hoa-giay.jpg"
                    alt="thuyen-hoa-giay"
                    className="absolute w-full [top:-120px] object-cover"
                  />
                  <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[65%] bottom-0"></div>
                  <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                    Làng Hoa Giấy Thanh Tiên - dọc theo hạ lưu sông Hương
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LangNghe;
