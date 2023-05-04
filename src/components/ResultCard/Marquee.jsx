import clsx from "clsx";
export default function Marquee({ image, className, vertical = true }) {
  return (
    <div
      className={clsx(
        className,
        vertical ? "w-[2rem] md:w-[5rem] h-full" : "h-[2rem] md:h-[5rem] w-full",
        "absolute overflow-hidden"
      )}>
      <div
        className={clsx(
          vertical
            ? "animate-marqueeV h-[200%] flex-col w-full"
            : "animate-marquee w-[200%] h-full",
          "absolute m-auto flex"
        )}>
        <img className={clsx(vertical ? "h-1/2 md:h-full w-auto" : "w-1/2 h-auto")} src={image} />
        <img className={clsx(vertical ? "h-1/2 md:h-full w-auto" : "w-1/2 h-auto")} src={image} />
        <img className={clsx(vertical ? "h-1/2 md:h-full w-auto" : "w-1/2 h-auto")} src={image} />
        <img className={clsx(vertical ? "h-1/2 md:h-full w-auto" : "w-1/2 h-auto")} src={image} />
      </div>
    </div>
  );
}
