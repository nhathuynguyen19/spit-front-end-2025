import CraftCard from "../components/CraftCard";
import HueZigzag from "../components/HueZigzag";

const LangNghe = () => {
  return (
    <section
      id="lang-nghe"
      className="bg-[#7C4585] w-full h-[calc(100vh)] min-w-[342px] min-h-[600px]"
    >
      {/* tren  */}
      <HueZigzag />
      {/* duoi  */}

      {/* chinh sua responsive  */}
      {/* container  */}
      <div className="w-full h-[calc(100%-50px)] lg:flex pb-4 sm:pb-6 md:pb-8 lg:pb-0 lg:pt-4">
        {/* first-child  */}
        <div className="w-full h-[calc(100%/6*3)] sm:flex sm:h-[50%] lg:h-[100%] lg:w-[40%]">
          {/* second-child  */}
          <div className="w-full h-[calc(100%/3*2)] sm:h-[100%]">
            {/* thirty-child  */}
            <div className="w-full h-[50%] flex items-center justify-center">
              <CraftCard
                image="/images/lang-dan-lat-bao-la.jpg"
                title="Đan Lát Bao La - xã Đan Điền, huyện Quảng Điền"
                wrapperClass="w-[90%] sm:w-[80%] lg:w-[92%] lg:h-[100%] h-[80%]"
                overlayClass="h-[70%]"
              />
            </div>
            {/* thirty-child  */}
            <div className=" w-full h-[50%] flex">
              {/* fourty-child  */}
              <div className="w-[60%] h-[100%] flex items-center justify-center">
                <CraftCard
                  image="/images/huong-hue.jpg"
                  title="Làng Hương - Thủy Xuân"
                  wrapperClass="w-[83%] sm:w-[66%] lg:w-[85%] lg:h-[86%] h-[80%]"
                  overlayClass="h-[60%] sm:h-[50%]"
                  imgClassName="w-full h-full object-cover object-[0%,30%]"
                />
              </div>
              {/* fourty-child  */}
              <div className="w-[40%] h-[100%] flex items-center justify-center">
                <CraftCard
                  image="/images/kim-hoan-ke-mon.jpg"
                  title="Kim Hoàn Kế Môn - xã Phong Thạnh, thị xã Phong Điền"
                  wrapperClass="w-[75%] sm:w-[100%] lg:h-[86%] h-[80%]"
                  overlayClass="h-[100%]"
                  imgClassName="w-full h-full object-cover lg:object-[35%]"
                />
              </div>
            </div>
          </div>

          {/* second-child  */}
          <div className="w-full h-[calc(100%/3)] sm:h-[100%] lg:hidden flex items-center justify-center">
            <CraftCard
              image="/images/net-dep-non-la.jpg"
              title="Nón Lá Tây Hồ - xã Phú Hồ, huyện Phú Vang TP Huế"
              wrapperClass="w-[90%] sm:w-[80%] h-[90%]"
              overlayClass="h-[90%]"
              imgClassName="w-full h-full object-cover object-[0%,35%]"
            />
          </div>
        </div>

        {/* first-child  */}
        <div className="w-full h-[calc(100%/6*3)] sm:h-[50%] lg:w-[60%] lg:h-[100%]">
          {/* second-child  */}
          <div className="w-full h-[calc(100%/3*2)] lg:flex">
            {/* thirty-child  */}
            <div className="hidden w-[30%] h-[100%] lg:flex items-center justify-center">
              <CraftCard
                image="/images/net-dep-non-la.jpg"
                title="Nón Lá Tây Hồ - xã Phú Hồ, huyện Phú Vang TP Huế"
                wrapperClass="w-[80%] h-[50%] lg:h-[100%]"
                overlayClass="h-[30%]"
                imgClassName="w-full h-full object-cover lg:object-[30%]"
              />
            </div>
            {/* thirty-child  */}
            <div className="w-full h-[100%] lg:w-[70%]">
              {/* fourty-child  */}
              <div className="w-[100%] h-[50%] flex items-center justify-center">
                <CraftCard
                  image="/images/sanh-hue.jpg"
                  title="Nghề Khảm Sành Sứ"
                  wrapperClass="w-[90%] h-[80%] lg:h-[100%]"
                  overlayClass="h-[70%]"
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
                    overlayClass="h-[140%]"
                    imgClassName="w-full h-full object-cover sm:object-[0%,100%]"
                  />
                </div>
                {/* fifty-child  */}
                <div className="w-[60%] h-[100%] flex items-center justify-center">
                  <CraftCard
                    image="/images/nghe-ren.jpg"
                    title="Làng Rèn Hiền Lương (Hoa Lang)"
                    wrapperClass="w-[83.5%] h-[80%]"
                    overlayClass="h-[85%]"
                    imgClassName="w-full h-full object-cover sm:object-[0%,70%]"
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
              overlayClass="h-[75%]"
              imgClassName="w-full h-full object-cover object-[0%,40%] sm:object-[0%,30%] lg:object-[0%,40%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LangNghe;
