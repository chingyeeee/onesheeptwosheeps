import { ReactComponent as Title2 } from "../../assets/images/quiz/2/title.svg";
import { Q2options } from "./options";
const Option = ({ opt, optText, optTextEng, Image, handleSaveAns, otherAns }) => {
  return (
    <div
      className={`flex justify-between text-base md:text-xl tv:text-4xl p-2 tv:p-7 cursor-custom group hover:bg-black items-center flex-1 transition duration-500 ${
        otherAns[0] === opt && "bg-black"
      }`}
      onClick={() => handleSaveAns(0, opt)}>
      <span
        className={`group-hover:hidden text-base md:text-2xl tv:text-4xl ${
          otherAns[0] === opt && "hidden"
        }`}>
        {optTextEng}
      </span>
      {
        <Image
          className={`w-[45%] md:w-[63%] group-hover:fill-lightgreen group-hover:block ${
            otherAns[0] === opt ? "block fill-lightgreen" : "hidden"
          }`}
        />
      }
      <p className={`group-hover:text-lightgreen ${otherAns[0] === opt && "text-lightgreen"}`}>
        {optText}
      </p>
    </div>
  );
};

const Question2 = ({ questionNum, setQuestionNum, handleSaveAns, otherAns }) => {
  return (
    <div
      className={` bg-lightgreen flex px-6 md:px-20 tv:px-20 flex-col justify-between overflow-hidden absolute w-full z-[19] ${
        questionNum <= 2
          ? "h-[84%] md:h-[80%] tv:h-[84%] pt-24 md:pt-28 pb-16 animate-slideDown"
          : "h-[8%] md:h-[10%] tv:h-[8%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 2 && "hidden"
        } flex justify-between md:text-xl tv:text-4xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 tv:bottom-1 font-chakra px-4 md:px-8 tv:px-4 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(2)}>
        <p>II.</p>
        <p>SECOND</p>
      </div>
      {questionNum === 2 && (
        <>
          <div className='md:flex tv:block gap-6 max-w-1/2 items-start'>
            <Title2 className='w-[20%] md:w-[10%] tv:w-[20%]' />
            <div className='text-sm mt-6 md:mt-0 tv:mt-6 md:text-xl font-medium tv:text-4xl'>
              <p>是否曾經發生在現實生活中，這個夢是你的真實回憶嗎？</p>
              <p className='font-medium mt-2 tv:mt-6'>
                HAS IT EVER HAPPENED IN THE REAL LIFE? <br />
                IS IT A REAL MEMORY OF YOURS?
              </p>
            </div>
          </div>
          <div className='flex justify-between md:h-[35%] tv:h-auto'>
            <div className='flex flex-col w-[70%] md:w-[35%] tv:w-[70%] tv:mr-0 md:mr-12 ml-auto h-full justify-between divide-y-2 divide-black border-y-2 border-black font-semibold'>
              {Q2options.map((option) => {
                const { opt, optText, optTextEng, Image } = option;
                return (
                  <Option
                    key={opt}
                    opt={opt}
                    optText={optText}
                    optTextEng={optTextEng}
                    Image={Image}
                    handleSaveAns={handleSaveAns}
                    otherAns={otherAns}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Question2;
