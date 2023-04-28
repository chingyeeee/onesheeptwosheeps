import leftMarquee from "../../assets/images/quiz/showResult/left-marquee.svg";
import marquee from "../../assets/images/quiz/showResult/marquee.svg";
import rightMarquee from "../../assets/images/quiz/showResult/right-marquee.svg";
import Marquee from "./Marquee";
import loading2 from "../../assets/images/quiz/loading/loading2.svg";
import loading5 from "../../assets/images/quiz/loading/loading5.svg";

export default function Frame() {
  return (
    <>
      <div className='fixed inset-0 z-50 pointer-events-none'>
        <Marquee className='bg-blue top-0 left-0' image={marquee} vertical={false} />
        <Marquee className='bg-yellow top-0 left-0' image={leftMarquee} />
        <Marquee className='bg-purple top-0 right-0' image={rightMarquee} />
        <img
          src={loading5}
          className={
            "absolute -right-[0.1rem] -top-[0.1rem] w-[2.13rem] h-[2.13rem] md:w-[5.1rem] md:h-[5.2rem]"
          }
        />
        <img
          src={loading2}
          className={
            "absolute -left-[0.1rem] -top-[0.1rem] w-[2.13rem] h-[2.13rem] md:w-[5.13rem] md:h-[5.2rem]"
          }
        />
      </div>
      <div className='h-[2rem] md:h-[5rem]' />
    </>
  );
}
