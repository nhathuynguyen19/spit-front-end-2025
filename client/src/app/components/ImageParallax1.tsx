import { useEffect, useRef } from "react";

export default function ImageParallax() {
  const refFrontGate = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const percentX = e.clientX / window.innerWidth;
      const maxTranslate = 10; // px tối đa dịch trái/phải
      const offset = (percentX - 0.5) * 2 * maxTranslate; // -10 đến +10
      if (refFrontGate.current) {
        refFrontGate.current.style.transform = `translateX(${offset}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute [bottom:-40px] w-[110%] left-1/2 -translate-x-1/2 z-20 h-[100vh] overflow-hidden mx-auto min-w-[11rem] transition-transform duration-200 ease-out">
      <img
        ref={refFrontGate}
        src="/images/tuong-truoc-ngo-mon-short.png"
        alt="truoc ngo mon"
        draggable={false}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
