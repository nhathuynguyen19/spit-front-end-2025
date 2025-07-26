const images = ["/images/H.png", "/images/U.png", "/images/E.png"];

export default function HueZigzag() {
  const rowCount = 1;
  const hueRepeat = 40; // đủ dài để animation không bị giật

  return (
    <div className="relative w-full h-[50px] bg-[#7C4585] overflow-hidden flex items-center">
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="top-0 left-0 w-full h-[20px] bg-[#F8B55F]"
          style={{ top: `${rowIndex * 20}px` }}
        >
          <div
            className={`flex w-max ${
              rowIndex % 0 === 0 ? "animate-scrollLeft" : "animate-scrollRight"
            }`}
          >
            {/* Lặp HUE đủ 2 lần để scroll mượt */}
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex">
                {Array.from({ length: hueRepeat }).map((_, i) => (
                  <div
                    key={i}
                    className="flex mr-4 justify-center items-center"
                  >
                    <div className="flex gap-1">
                      {images.map((src, j) => (
                        <img
                          key={j}
                          src={src}
                          alt={`letter-${j}`}
                          className="w-auto h-4 mt-0.5"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
