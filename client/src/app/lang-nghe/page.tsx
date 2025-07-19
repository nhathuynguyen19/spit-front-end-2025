import React from "react";
import Hue from "../components/Hue";

const LangNghe = () => {
  return (
    <section id="lang-nghe" className="h-[100vh] bg-[#F8B55F]">
      <div className="h-[50px]"></div>
      <div className="h-[calc(100%-50px)] border flex">
        {/* trai */}
        <div className="w-[30%] min-w-[220px] h-full border">
          <div className="w-full max-[899px]:h-full h-[100px] border mx-auto my-auto border-e-red-950">
            <Hue />
          </div>
          <div className="w-full max-[899px]:hidden h-[calc(100%-100px)]"></div>
        </div>
        {/* phai */}
        <div className="w-[70%] h-full border">
          {/* tieu de tren phai */}
          <div></div>

          {/* noi dung duoi phai */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default LangNghe;
