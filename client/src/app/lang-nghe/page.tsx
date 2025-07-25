import HueZigzag from "../components/HueZigzag";

const LangNghe = () => {
  return (
    <section
      id="lang-nghe"
      className="bg-[#7C4585] w-full h-[calc(300vh-100px)] min-w-[342px] min-h-[100vh] md:h-[calc(200vh-50px)] lg:h-[calc(100vh-50px)]"
    >
      {/* tren  */}
      <HueZigzag />
      {/* duoi  */}

      {/* chinh sua responsive  */}
      {/* container  */}
      <div className="w-full h-[calc(100%-50px)] lg:flex">
        {/* first-child  */}
        <div className="w-full h-[calc(100%/3*2)] md:flex md:h-[50%] lg:h-[100%] lg:h-[100%] lg:w-[40%]">
          {/* second-child  */}
          <div className="w-full h-[50%] min-h-[342px] md:h-[100%]">
            {/* thirty-child  */}
            <div className="w-full h-[50%] flex items-center justify-center">
              <article className="cursor-pointer relative border-4 w-[90%] md:w-[80%] h-[80%] overflow-hidden transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg hover:scale-105">
                <img
                  src="/images/lang-dan-lat-bao-la.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[30%] bottom-0"></div>
                <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                  Đan Lát Bao La - xã Đan Điền, huyện Quảng Điền
                </p>
              </article>
            </div>
            {/* thirty-child  */}
            <div className=" w-full h-[50%] flex">
              {/* fourty-child  */}
              <div className="w-[40%] h-[100%] flex items-center justify-center">
                <article className="cursor-pointer relative border-4 w-[75%] h-[80%] md:h-[50%] hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg overflow-hidden">
                  <img
                    src="/images/huong-hue.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[40%] bottom-0"></div>
                  <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                    Làng Hương - Thủy Xuân
                  </p>
                </article>
              </div>
              {/* fourty-child  */}
              <div className="w-[60%] h-[100%] flex items-center justify-center">
                <article className="cursor-pointer relative border-4 w-[83%] h-[80%] hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg overflow-hidden">
                  <img
                    src="/images/kim-hoan-ke-mon.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[40%] bottom-0"></div>
                  <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                    Kim Hoàn Kế Môn - xã Phong Thạnh, thị xã Phong Điền
                  </p>
                </article>
              </div>
            </div>
          </div>

          {/* second-child  */}
          <div className="w-full h-[50%] md:h-[100%] lg:hidden flex items-center justify-center">
            <article className="cursor-pointer relative hover:scale-105 w-[90%] h-[90%] border-4 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="/images/net-dep-non-la.jpg"
                alt=""
              />
              <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[30%] bottom-0"></div>
              <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                Nón Lá Tây Hồ - xã Phú Hồ, huyện Phú Vang TP Huế
              </p>
            </article>
          </div>
        </div>

        {/* first-child  */}
        <div className="w-full h-[calc(100%/3)] md:h-[50%] lg:w-[60%] lg:h-[100%]">
          {/* second-child  */}
          <div className="w-full h-[calc(100%/3*2)] lg:flex">
            {/* thirty-child  */}
            <div className="hidden w-[30%] h-[100%] lg:block lg:flex items-center justify-center">
              <article className="cursor-pointer relative hover:scale-105 border-4 w-[80%] h-[50%] lg:h-[70%] transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/images/net-dep-non-la.jpg"
                  alt=""
                />
                <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[30%] bottom-0"></div>
                <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                  Nón Lá Tây Hồ - xã Phú Hồ, huyện Phú Vang TP Huế
                </p>
              </article>
            </div>
            {/* thirty-child  */}
            <div className="w-full h-[100%] lg:w-[70%]">
              {/* fourty-child  */}
              <div className="w-[100%] h-[50%] flex items-center justify-center">
                <article className="cursor-pointer relative hover:scale-105 border-4 w-[90%] h-[80%] transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/sanh-hue.jpg"
                    alt=""
                  />
                  <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[30%] bottom-0"></div>
                  <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                    Nghề Khảm Sành Sứ
                  </p>
                </article>
              </div>
              {/* fourty-child  */}
              <div className="w-[100%] h-[50%] flex">
                {/* fifty-child  */}
                <div className="w-[40%] h-[100%] flex items-center justify-center">
                  <article className="cursor-pointer relative hover:scale-105 border-4 w-[75%] h-[80%] transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src="/images/tranh-lang-sinh.jpg"
                      alt=""
                    />
                    <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[65%] bottom-0"></div>
                    <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                      Nghề Tranh Làng Sình - dọc theo hạ lưu sông Hương
                    </p>
                  </article>
                </div>
                {/* fifty-child  */}
                <div className="w-[60%] h-[100%] flex items-center justify-center">
                  <article className="cursor-pointer relative hover:scale-105 w-[83.5%] h-[80%] border-4 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg overflow-hidden">
                    <img
                      src="/images/nghe-ren.jpg"
                      alt=""
                      className="w-full h-full object-cover"
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

          {/* second-child  */}
          <div className="w-full h-[calc(100%/3)] flex items-center justify-center">
            <article className="cursor-pointer relative hover:scale-105 border-4 w-[90%] lg:w-[94%] h-[80%] transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg overflow-hidden">
              <img
                src="/images/thuyen-hoa-giay.jpg"
                alt="thuyen-hoa-giay"
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute bg-gradient-to-t from-black/80 to-transparent w-full h-[65%] bottom-0"></div>
              <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
                Làng Hoa Giấy Thanh Tiên - dọc theo hạ lưu sông Hương
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LangNghe;
