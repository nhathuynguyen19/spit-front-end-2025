import { useEffect, useRef } from "react";

export default function BackgroundParallax() {
  const mountainRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const percentX = -e.clientX / window.innerWidth;
      const maxTranslate = 20; // px tối đa dịch trái/phải
      const offset = (percentX - 0.5) * 2 * maxTranslate; // -10 đến +10
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translateX(${offset}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute [top:-30px] w-[150%] left-1/2 -translate-x-1/2 z-0 h-[100vh] overflow-hidden mx-auto min-w-[11rem] transition-transform duration-200 ease-out">
      <img
        ref={mountainRef}
        className=""
        src="/images/sky1-crop.jpg"
        alt="sky"
      />
    </div>
  );
}
