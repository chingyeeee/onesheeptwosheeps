import { ReactComponent as RulesLogo } from "../assets/images/rules/rules.svg";
import { ReactComponent as Finger } from "../assets/images/icons/icon-finger.svg";

const Rules = ({ nextStep }) => {
  return (
    <div className='h-full flex justify-center items-center animate-zoomIn min-h-inherit'>
      <div className='relative flex flex-col space-y-10 w-[90%] md:w-[70%] tv:w-[90%] bg-yellow rounded-[150px] md:rounded-full tv:rounded-[300px] py-24 px-12 text-center min-h-[50%]'>
        <RulesLogo className='md:w-[50%] w-[90%] tv:w-[80%] m-auto translate-x-3 md:translate-x-0 translate-y-3' />
        <div className='py-4 text-sm md:text-base tv:text-2xl'>
          請試著回想一個讓你印象深刻的夢，可以是任何的情境
          <br />
          不管傷心難過、開心快樂甚至是難以啟齒的夢，都請回答接下來的問題！
          <br />
          <div className='py-3 text-sm md:text-base tv:text-xl'>
            Please try to recall a dream that impressed you, it can be any situation.
            <br />
            Regardless of whether you are sad, happy or even unspeakable dreams, <br />
            please answer the following questions!
          </div>
        </div>
        <div
          className={`bg-blue mt-8 w-min m-auto px-6 py-3 tv:py-6 tv:px-12 rounded-full cursor-custom animate-remind-lightening transition hover:animate-lightening opacity-1`}
          onClick={nextStep}>
          <Finger className='w-[42px] h-[20px] md:w-[56px] md:h-[25px] tv:w-[130px] tv:h-[45px] fill-yellow' />
        </div>
      </div>
    </div>
  );
};

export default Rules;
