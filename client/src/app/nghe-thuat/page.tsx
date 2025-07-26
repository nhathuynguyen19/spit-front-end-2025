import React, { useState, useEffect } from "react";

const images = [
  "/images/matna1.png",
  "/images/matna2.png",
  "/images/matna3.png",
  "/images/hue3d.jpg",
  "/images/huedragon.jpg",
];

const NgheThuat: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex justify-center items-center overflow-hidden p-8">
      {/* Slide content */}
      <div className="flex items-center justify-center gap-4 transition-transform duration-500 ease-in-out">
        {images.map((img, index) => {
          const isActive = index === current;
          const isLeft =
            index === (current - 1 + images.length) % images.length;
          const isRight = index === (current + 1) % images.length;

          return (
            <img
              key={index}
              src={img}
              alt={`Mask ${index}`}
              className={`transition-all duration-500 
                ${isActive ? "scale-110 z-10" : "scale-75 opacity-50 z-0"} 
                ${isLeft ? "translate-x-[-150px]" : ""} 
                ${isRight ? "translate-x-[150px]" : ""} 
                w-48 h-64 object-cover rounded-full`}
            />
          );
        })}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-110"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-110"
      >
        ▶
      </button>
    </div>
  );
};

export default NgheThuat;
