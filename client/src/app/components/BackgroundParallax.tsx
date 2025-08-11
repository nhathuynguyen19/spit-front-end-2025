import { useEffect, useRef } from "react";

export default function BackgroundParallax() {
  const mountainRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const percentX = -e.clientX / window.innerWidth;
      const maxTranslate = 20;
      const offset = (percentX - 0.5) * 2 * maxTranslate + 40;
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translateX(${offset}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute bg-white z-0 h-full w-[100%] scale-[140%] sm:scale-[130%] flex items-center justify-center overflow-hidden">
      <img
        ref={mountainRef}
        className="h-full w-full md:w-full object-cover object-[0%,85%]"
        src="/images/sky1-crop.jpg"
        alt="sky"
      />
    </div>
  );
}
