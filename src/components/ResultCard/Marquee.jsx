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
          vertical ? "animate-marqueeV h-[200%] flex-col w-full" : "animate-marquee w-[200%]",
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

{
  /* <div className='bg-yellow absolute left-0 w-[2rem] md:w-[5rem] min-h-inherit h-full overflow-hidden'>
        <div className='absolute inset-x-0 m-auto flex flex-col animate-marqueeV h-[200%]'>
          <img className='h-[50%] md:h-[100%] w-auto' src={LeftMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={LeftMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={LeftMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={LeftMarquee} />
        </div>
      </div>
      <div className='bg-purple absolute right-0 w-[2rem] md:w-[5rem] min-h-inherit h-full overflow-hidden'>
        <div className='absolute inset-x-0 m-auto flex flex-col animate-marqueeV h-[200%]'>
          <img className='h-[50%] md:h-[100%] w-auto' src={RightMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={RightMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={RightMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={RightMarquee} />
        </div>
      </div> */
}
