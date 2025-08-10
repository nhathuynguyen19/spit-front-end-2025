"use client";

import CardMonAn from "../components/CardMonAn";

const amThucDict = [
  {
    title: "Bún bò Huế",
    des: "Món ăn nổi tiếng với nước dùng đậm đà và sả thơm.",
    src: "/images/bun-bo-hue-1-1.jpg",
  },
  {
    title: "Cơm hến",
    des: "Đây là món đặc biệt mà dù bạn có thích ăn như nào cũng khó tìm được ở tỉnh thành khác.",
    src: "/images/com-bun-hen.jpg",
  },
  {
    title: "Bánh mì ốp la",
    des: "Bánh mì ốp la ở Huế là món ăn sáng đơn giản nhưng thơm ngon, giòn rụm.",
    src: "/images/banh-mi-op-la.jpg",
  },
  {
    title: "Xôi",
    des: "Những hạt nếp tròn mẩy, mềm mà không nhão, hòa quyện cùng vị béo bùi.",
    src: "/images/bep-ngon-xoi-xeo-559042.jpg",
  },
  {
    title: "Các loại chè",
    des: "Chè Huế là đặc sản không thể bỏ lỡ khi đến với cố đô.",
    src: "/images/dac-san-hue-4-che-hue.jpg",
  },
  {
    title: "Bánh bột lọc",
    des: "Món ăn dân dã nhưng tinh tế bậc nhất trên bản đồ ẩm thực Huế.",
    src: "/images/dac-san-hue-12-banh-bot-loc.jpg",
  },
  {
    title: "Bánh nậm",
    des: "Bánh nậm Huế thơm ngon, mềm mịn, thoang thoảng vị tôm.",
    src: "/images/dac-san-hue-13-banh-nam.jpg",
  },
  {
    title: "Bánh khoái",
    des: "Bánh khoái Huế giòn rụm bên ngoài, mềm bên trong, nhân tôm thịt đặc trưng.",
    src: "/images/dac-san-hue-14-banh-khoai.jpg",
  },
  {
    title: "Bánh canh Huế",
    des: "Bánh canh Huế mang hương vị đậm đà của ẩm thực cố đô.",
    src: "/images/banh-canh-kho-hue-3-960x600.jpg",
  },
  {
    title: "Cháo gà Huế",
    des: "Tô cháo nóng hổi, thơm mùi hành lá và thịt gà ta mềm ngọt.",
    src: "/images/ga.jpg",
  },
  {
    title: "Bún thịt nướng",
    des: "Món ăn quen thuộc nhưng khi chế biến theo kiểu Huế lại có nét riêng.",
    src: "/images/btn.jpg",
  },
  {
    title: "Nem lụi Huế",
    des: "Nem lụi Huế nướng vàng thơm, quấn quanh cây sả đặc trưng.",
    src: "/images/nemlui.jpg",
  },
];

export default function AmThuc() {

  return (
    <section
      id="am-thuc"
      className="w-full h-fit pb-4 pt-12 bg-white font-playfair min-w-[342px] md:pb-2 lg:pb-0"
    >
      {/* Danh sách món ăn */}
      <div className="w-full h-fit">
        <div className="h-fit">
          <h2 className="text-black ml-4 font-bold cursor-pointer md:hidden">
            Sáng &rsaquo;
          </h2>
          <h2 className="text-black font-bold cursor-pointer md:block text-center hidden">
            Sáng
          </h2>
          <div className="w-[200%] aspect-[16/5] flex md:w-[100%] md:h-fit md:justify-center">
            <CardMonAn
              src={amThucDict[0]["src"]}
              title={amThucDict[0]["title"]}
              des={amThucDict[0]["des"]}
            />
            <CardMonAn
              src={amThucDict[1]["src"]}
              title={amThucDict[1]["title"]}
              des={amThucDict[1]["des"]}
            />
            <CardMonAn
              src={amThucDict[2]["src"]}
              title={amThucDict[2]["title"]}
              des={amThucDict[2]["des"]}
            />
            <CardMonAn
              src={amThucDict[3]["src"]}
              title={amThucDict[3]["title"]}
              des={amThucDict[3]["des"]}
            />
          </div>
        </div>
        <div className="h-fit">
          <h2 className="text-black ml-4 font-bold cursor-pointer md:hidden">
            Trưa &rsaquo;
          </h2>
          <h2 className="text-black font-bold cursor-pointer md:block text-center hidden">
            Trưa
          </h2>
          <div className="w-[200%] aspect-[16/5] flex md:w-[100%] md:h-fit md:justify-center">
            <CardMonAn
              src={amThucDict[4]["src"]}
              title={amThucDict[4]["title"]}
              des={amThucDict[4]["des"]}
            />
            <CardMonAn
              src={amThucDict[5]["src"]}
              title={amThucDict[5]["title"]}
              des={amThucDict[5]["des"]}
            />
            <CardMonAn
              src={amThucDict[6]["src"]}
              title={amThucDict[6]["title"]}
              des={amThucDict[6]["des"]}
            />
            <CardMonAn
              src={amThucDict[7]["src"]}
              title={amThucDict[7]["title"]}
              des={amThucDict[7]["des"]}
            />
          </div>
        </div>
        <div className="h-fit">
          <h2 className="text-black ml-4 font-bold cursor-pointer md:hidden">
            Khuya &rsaquo;
          </h2>
          <h2 className="text-black font-bold cursor-pointer md:block text-center hidden">
            Khuya
          </h2>
          <div className="w-[200%] aspect-[16/5] flex md:w-[100%] md:h-fit md:justify-center">
            <CardMonAn
              src={amThucDict[8]["src"]}
              title={amThucDict[8]["title"]}
              des={amThucDict[8]["des"]}
            />
            <CardMonAn
              src={amThucDict[9]["src"]}
              title={amThucDict[9]["title"]}
              des={amThucDict[9]["des"]}
            />
            <CardMonAn
              src={amThucDict[10]["src"]}
              title={amThucDict[10]["title"]}
              des={amThucDict[10]["des"]}
            />
            <CardMonAn
              src={amThucDict[11]["src"]}
              title={amThucDict[11]["title"]}
              des={amThucDict[11]["des"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
