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
      className={`cursor-pointer relative border-4 transition-transform duration-300 ease-in-out shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg overflow-hidden hover:scale-105 ${wrapperClass}`}
    >
      <img src={image} alt={title} className={imgClassName} />
      <div
        className={`absolute bg-gradient-to-t from-black/80 to-transparent w-full bottom-0 ${overlayClass}`}
      ></div>
      <p className="absolute text-[10px] italic text-gray-200 bottom-0 left-0 m-2">
        {title}
      </p>
    </article>
  );
}
