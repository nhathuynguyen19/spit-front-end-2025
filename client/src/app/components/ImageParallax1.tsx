import { useEffect, useRef } from "react";

export default function ImageParallax() {
  const refFrontGate = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const percentX = e.clientX / window.innerWidth;
      const maxTranslate = 10; // px tối đa dịch trái/phải
      const offset = (percentX - 0.5) * 2 * maxTranslate + 8; // -10 đến +10
      if (refFrontGate.current) {
        refFrontGate.current.style.transform = `translateX(${offset}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute border z-30 w-full h-[290vh] sm:h-[185vh] md:h-[129vh] lg:h-[147vh] scale-[120%] md:scale-[117%] lg:scale-[114%] xl:scale-[110%] bottom-[-8.2%] sm:bottom-[-8.2%] md:bottom-[-8.2%] lg:bottom-[-8.2%] xl:bottom-[-9.2%]">
      <img
        ref={refFrontGate}
        src="/images/tuong-truoc-ngo-mon-short.png"
        alt="truoc ngo mon"
        draggable={false}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
