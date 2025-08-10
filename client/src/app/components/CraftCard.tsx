type CraftCardProps = {
  image: string;
  title: string;
  wrapperClass?: string;
  overlayClass?: string;
  imgClassName?: string;
};

export default function CraftCard({
  image,
  title,
  wrapperClass = "",
  overlayClass = "h-[30%]",
  imgClassName = "w-full h-full object-cover",
}: CraftCardProps) {
  return (
    <article
      className={`overflow-hidden image-card cursor-pointer relative transition-transform duration-600 ease-out shadow-2xl hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] rounded-2xl hover:scale-105 ${wrapperClass}`}
    >
      <img src={image} alt={title} className={imgClassName} />
      <div
        className={`absolute bg-gradient-to-t from-black/80 to-transparent w-full bottom-0 ${overlayClass}`}
      ></div>
      <div className="overlayImage opacity-0 transition-opacity duration-300"></div>
      <p className="absolute font-playfair font- text-[9px] sm:text-[10px] md:text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
        {title}
      </p>
    </article>
  );
}
