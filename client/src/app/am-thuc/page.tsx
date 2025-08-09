"use client";

import React, { useState, useRef, useEffect } from "react";

const sliderImages = [
  "/images/bun-bo-hue-1-1.jpg",
  "/images/com-bun-hen.jpg",
  "/images/banh-mi-op-la.jpg",
  "/images/bep-ngon-xoi-xeo-559042.jpg",
  "/images/dac-san-hue-4-che-hue.jpg",
  "/images/dac-san-hue-12-banh-bot-loc.jpg",
  "/images/dac-san-hue-13-banh-nam.jpg",
  "/images/dac-san-hue-14-banh-khoai.jpg",
  "/images/banh-canh-kho-hue-3-960x600.jpg",
  "/images/ga.jpg",
  "/images/btn.jpg",
  "/images/nemlui.jpg",
];

const amThucList = [
  {
    name: "Bún bò Huế",
    desc: "Món ăn nổi tiếng với nước dùng đậm đà và sả thơm.",
    image: "/images/bun-bo-hue-1-1.jpg",
  },
  {
    name: "Cơm hến",
    desc: "Đây là món đặc biệt mà dù bạn có thích ăn như nào cũng khó tìm được ở tỉnh thành khác.",
    image: "/images/com-bun-hen.jpg",
  },
  {
    name: "Bánh mì ốp la",
    desc: "Bánh mì ốp la ở Huế là món ăn sáng đơn giản nhưng thơm ngon, giòn rụm.",
    image: "/images/banh-mi-op-la.jpg",
  },
  {
    name: "Xôi",
    desc: "Những hạt nếp tròn mẩy, mềm mà không nhão, hòa quyện cùng vị béo bùi.",
    image: "/images/bep-ngon-xoi-xeo-559042.jpg",
  },
  {
    name: "Các loại chè",
    desc: "Chè Huế là đặc sản không thể bỏ lỡ khi đến với cố đô.",
    image: "/images/dac-san-hue-4-che-hue.jpg",
  },
  {
    name: "Bánh bột lọc",
    desc: "Món ăn dân dã nhưng tinh tế bậc nhất trên bản đồ ẩm thực Huế.",
    image: "/images/dac-san-hue-12-banh-bot-loc.jpg",
  },
  {
    name: "Bánh nậm",
    desc: "Bánh nậm Huế thơm ngon, mềm mịn, thoang thoảng vị tôm.",
    image: "/images/dac-san-hue-13-banh-nam.jpg",
  },
  {
    name: "Bánh khoái",
    desc: "Bánh khoái Huế giòn rụm bên ngoài, mềm bên trong, nhân tôm thịt đặc trưng.",
    image: "/images/dac-san-hue-14-banh-khoai.jpg",
  },
  {
    name: "Bánh canh Huế",
    desc: "Bánh canh Huế mang hương vị đậm đà của ẩm thực cố đô.",
    image: "/images/banh-canh-kho-hue-3-960x600.jpg",
  },
  {
    name: "Cháo gà Huế",
    desc: "Tô cháo nóng hổi, thơm mùi hành lá và thịt gà ta mềm ngọt.",
    image: "/images/ga.jpg",
  },
  {
    name: "Bún thịt nướng",
    desc: "Món ăn quen thuộc nhưng khi chế biến theo kiểu Huế lại có nét riêng.",
    image: "/images/btn.jpg",
  },
  {
    name: "Nem lụi Huế",
    desc: "Nem lụi Huế nướng vàng thơm, quấn quanh cây sả đặc trưng.",
    image: "/images/nemlui.jpg",
  },
];

export default function AmThuc() {
  return (
    <section className="w-full h-[calc(100vh-50px)] bg-white">
      <div className="w-full h-[calc(100%/3)] bg-slate-500">
        <div className="w-[50%] h-full bg-orange-300"></div>
        <div></div>
      </div>
      <div></div>
      <div></div>
    </section>
  );
}
