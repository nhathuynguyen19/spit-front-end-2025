import CraftCard from "../components/CraftCard";
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
        <div className="w-full h-[calc(100%/3*2)] md:flex md:h-[50%] lg:h-[100%] lg:w-[40%]">
          {/* second-child  */}
          <div className="w-full h-[50%] min-h-[342px] md:h-[100%]">
            {/* thirty-child  */}
            <div className="w-full h-[50%] flex items-center justify-center">
              <CraftCard
                image="/images/lang-dan-lat-bao-la.jpg"
                title="Đan Lát Bao La - xã Đan Điền, huyện Quảng Điền"
                wrapperClass="w-[90%] md:w-[80%] h-[80%]"
                overlayClass="h-[30%]"
              />
            </div>
            {/* thirty-child  */}
            <div className=" w-full h-[50%] flex">
              {/* fourty-child  */}
              <div className="w-[40%] h-[100%] flex items-center justify-center">
                <CraftCard
                  image="/images/huong-hue.jpg"
                  title="Làng Hương - Thủy Xuân"
                  wrapperClass="w-[75%] md:w-[80%] h-[80%]"
                  overlayClass="h-[30%] md:h-[50%]"
                />
              </div>
              {/* fourty-child  */}
              <div className="w-[60%] h-[100%] flex items-center justify-center">
                <CraftCard
                  image="/images/kim-hoan-ke-mon.jpg"
                  title="Kim Hoàn Kế Môn - xã Phong Thạnh, thị xã Phong Điền"
                  wrapperClass="w-[83%] h-[80%]"
                  overlayClass="h-[40%]"
                />
              </div>
            </div>
          </div>

          {/* second-child  */}
          <div className="w-full h-[50%] md:h-[100%] lg:hidden flex items-center justify-center">
            <CraftCard
              image="/images/net-dep-non-la.jpg"
              title="Nón Lá Tây Hồ - xã Phú Hồ, huyện Phú Vang TP Huế"
              wrapperClass="w-[90%] h-[90%]"
              overlayClass="h-[30%]"
            />
          </div>
        </div>

        {/* first-child  */}
        <div className="w-full h-[calc(100%/3)] md:h-[50%] lg:w-[60%] lg:h-[100%]">
          {/* second-child  */}
          <div className="w-full h-[calc(100%/3*2)] lg:flex">
            {/* thirty-child  */}
            <div className="hidden w-[30%] h-[100%] lg:flex items-center justify-center">
              <CraftCard
                image="/images/net-dep-non-la.jpg"
                title="Nón Lá Tây Hồ - xã Phú Hồ, huyện Phú Vang TP Huế"
                wrapperClass="w-[80%] h-[50%] lg:h-[70%]"
                overlayClass="h-[30%]"
              />
            </div>
            {/* thirty-child  */}
            <div className="w-full h-[100%] lg:w-[70%]">
              {/* fourty-child  */}
              <div className="w-[100%] h-[50%] flex items-center justify-center">
                <CraftCard
                  image="/images/sanh-hue.jpg"
                  title="Nghề Khảm Sành Sứ"
                  wrapperClass="w-[90%] h-[80%]"
                  overlayClass="h-[30%]"
                />
              </div>
              {/* fourty-child  */}
              <div className="w-[100%] h-[50%] flex">
                {/* fifty-child  */}
                <div className="w-[40%] h-[100%] flex items-center justify-center">
                  <CraftCard
                    image="/images/tranh-lang-sinh.jpg"
                    title="Nghề Tranh Làng Sình - dọc theo hạ lưu sông Hương"
                    wrapperClass="w-[75%] h-[80%]"
                    overlayClass="h-[65%]"
                  />
                </div>
                {/* fifty-child  */}
                <div className="w-[60%] h-[100%] flex items-center justify-center">
                  <CraftCard
                    image="/images/nghe-ren.jpg"
                    title="Làng Rèn Hiền Lương (Hoa Lang)"
                    wrapperClass="w-[83.5%] h-[80%]"
                    overlayClass="h-[65%]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* second-child  */}
          <div className="w-full h-[calc(100%/3)] flex items-center justify-center">
            <CraftCard
              image="/images/thuyen-hoa-giay.jpg"
              title="Làng Hoa Giấy Thanh Tiên - dọc theo hạ lưu sông Hương"
              wrapperClass="w-[90%] lg:w-[94%] h-[80%]"
              overlayClass="h-[65%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LangNghe;
