'use client';

import React, { useState, useRef, useEffect } from 'react';

const sliderImages = [
  '/images/bun-bo-hue-1-1.jpg',
  '/images/com-bun-hen.jpg',
  '/images/banh-mi-op-la.jpg',
  '/images/bep-ngon-xoi-xeo-559042.jpg',
  '/images/dac-san-hue-4-che-hue.jpg',
  '/images/dac-san-hue-12-banh-bot-loc.jpg',
  '/images/dac-san-hue-13-banh-nam.jpg',
  '/images/dac-san-hue-14-banh-khoai.jpg',
  '/images/banh-canh-kho-hue-3-960x600.jpg',
  '/images/ga.jpg',
  '/images/btn.jpg',
  '/images/nemlui.jpg',
];

const amThucList = [
  {
    name: 'Bún bò Huế',
    desc: 'Món ăn nổi tiếng với nước dùng đậm đà và sả thơm.',
    image: '/images/bun-bo-hue-1-1.jpg',
  },
  {
    name: 'Cơm hến',
    desc: 'Đây là món đặc biệt mà dù bạn có thích ăn như nào cũng khó tìm được ở tỉnh thành khác.',
    image: '/images/com-bun-hen.jpg',
  },
  {
    name: 'Bánh mì ốp la',
    desc: 'Bánh mì ốp la ở Huế là món ăn sáng đơn giản nhưng thơm ngon, giòn rụm.',
    image: '/images/banh-mi-op-la.jpg',
  },
  {
    name: 'Xôi',
    desc: 'Những hạt nếp tròn mẩy, mềm mà không nhão, hòa quyện cùng vị béo bùi.',
    image: '/images/bep-ngon-xoi-xeo-559042.jpg',
  },
  {
    name: 'Các loại chè',
    desc: 'Chè Huế là đặc sản không thể bỏ lỡ khi đến với cố đô.',
    image: '/images/dac-san-hue-4-che-hue.jpg',
  },
  {
    name: 'Bánh bột lọc',
    desc: 'Món ăn dân dã nhưng tinh tế bậc nhất trên bản đồ ẩm thực Huế.',
    image: '/images/dac-san-hue-12-banh-bot-loc.jpg',
  },
  {
    name: 'Bánh nậm',
    desc: 'Bánh nậm Huế thơm ngon, mềm mịn, thoang thoảng vị tôm.',
    image: '/images/dac-san-hue-13-banh-nam.jpg',
  },
  {
    name: 'Bánh khoái',
    desc: 'Bánh khoái Huế giòn rụm bên ngoài, mềm bên trong, nhân tôm thịt đặc trưng.',
    image: '/images/dac-san-hue-14-banh-khoai.jpg',
  },
  {
    name: 'Bánh canh Huế',
    desc: 'Bánh canh Huế mang hương vị đậm đà của ẩm thực cố đô.',
    image: '/images/banh-canh-kho-hue-3-960x600.jpg',
  },
  {
    name: 'Cháo gà Huế',
    desc: 'Tô cháo nóng hổi, thơm mùi hành lá và thịt gà ta mềm ngọt.',
    image: '/images/ga.jpg',
  },
  {
    name: 'Bún thịt nướng',
    desc: 'Món ăn quen thuộc nhưng khi chế biến theo kiểu Huế lại có nét riêng.',
    image: '/images/btn.jpg',
  },
  {
    name: 'Nem lụi Huế',
    desc: 'Nem lụi Huế nướng vàng thơm, quấn quanh cây sả đặc trưng.',
    image: '/images/nemlui.jpg',
  },
];

export default function AmThuc() {
  const [current, setCurrent] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleImageClick = (index: number) => {
  const ref = itemRefs.current[index];
  if (ref) {
    ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setHighlightIndex(index);
    setTimeout(() => setHighlightIndex(null), 2000);
  }
};


  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 py-16 px-4 font-[Arial]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg">
          Ẩm Thực Cố Đô Huế
        </h2>

        {/* Slider */}
        <div className="relative w-full max-w-6xl mx-auto h-96 overflow-hidden rounded-xl mb-16">
          {sliderImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                onClick={() => handleImageClick(index)}
                className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-black rounded-full p-2 shadow z-20"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-black rounded-full p-2 shadow z-20"
          >
            &gt;
          </button>
        </div>

        {/* Danh sách món ăn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amThucList.map((item, index) => (
            <React.Fragment key={index}>
              {index % 4 === 0 && (
                <div className="col-span-full text-left mb-2">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {index === 0
                      ? 'Các món ăn buổi sáng'
                      : index === 4
                      ? 'Các món ăn buổi chiều'
                      : 'Các món ăn buổi đêm khuya'}
                  </h3>
                </div>
              )}
              <div
                ref={(el) => (itemRefs.current[index] = el)}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition duration-300 
                  ${
                    highlightIndex === index
                      ? 'ring-4 ring-yellow-400 scale-105'
                      : 'hover:shadow-xl hover:scale-105'
                  }`}
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
