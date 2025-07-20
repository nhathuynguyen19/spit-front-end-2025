"use client";

const images = ["/H.png", "/U.png", "/E.png"];

export default function HueZigzag() {
  const rows = Array.from({ length: 3 }); // 3 hàng 60px / 20px

  return (
    <div className="w-full h-[60px] overflow-hidden bg-black text-white">
      {rows.map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex ${
            rowIndex % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } h-[20px]`}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex">
              {images.map((src, j) => (
                <img
                  key={j}
                  src={src}
                  alt={`letter-${j}`}
                  className="h-[20px] w-auto"
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
