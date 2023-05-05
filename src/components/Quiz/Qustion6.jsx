import { ReactComponent as Finger } from "../../assets/images/icons/icon-finger.svg";

import { ReactComponent as Title6 } from "../../assets/images/quiz/6/title.svg";
import { Q6options } from "./options";

const Option = ({ opt, optText, Image, handleSaveAns, otherAns, i }) => {
  return (
    <div
      className={`flex justify-between md:text-xl tv:text-4xl p-2 cursor-custom group hover:bg-black items-center md:flex-1 transition duration-500 ${
        otherAns[i] === opt && "bg-black"
      }`}
      onClick={() => handleSaveAns(i, opt)}>
      <span
        className={`group-hover:hidden md:text-2xl tv:text-4xl ${otherAns[i] === opt && "hidden"}`}>
        {opt}
      </span>
      <Image
        className={`w-[79%] md:w-[83%] tv:w-[83%] -translate-x-2 md:-translate-x-4 group-hover:block group-hover:fill-yellow ${
          otherAns[i] === opt ? "block fill-yellow" : "hidden"
        }`}
      />
      <p className={`group-hover:text-yellow ${otherAns[i] === opt && "text-yellow"}`}>{optText}</p>
    </div>
  );
};

const Question6 = ({ questionNum, setQuestionNum, handleSaveAns, otherAns }) => {
  function checkNotEmptyAns() {
    otherAns[2] !== undefined && otherAns[3] !== undefined && setQuestionNum(questionNum + 1);
  }

  return (
    <div
      className={`bg-yellow flex px-4 md:px-20 flex-col md:justify-between tv:justify-normal overflow-hidden absolute w-full z-[15] ${
        questionNum <= 6 ? "h-[100%] pt-44 md:pt-72 pb-16 animate-slideDown" : "h-[24%] md:h-[25%]"
      }`}>
      <div
        className={`${
          questionNum === 6 && "hidden"
        } flex justify-between md:text-xl tv:text-4xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(6)}>
        <p>VI.</p>
        <p>SIXTH</p>
      </div>
      {questionNum === 6 && (
        <>
          <div className='flex flex-col-reverse md:flex-row tv:flex-col-reverse gap-2 md:gap-6 items-start justify-between tv:mt-60'>
            <div className='text-sm md:text-xl tv:text-4xl font-medium tv:leading-relaxed tv:mt-6'>
              <p>該夢境發生在什麼樣的場景?是認得的空間嗎？開放或是密閉的？（四選二）</p>
              <p className='font-medium mt-2'>
                WHAT DOES THE SCENE LOOK LIKE?
                <br />
                IS IT FAMILIAR OR RECONGNIZED? OPEN OR SEALED? <br />
                (CHOOSE 2 OPTIONS)
              </p>
            </div>
            <Title6 className='w-[30%] md:w-[15%] tv:w-[35%] ml-auto md:ml-0 tv:ml-auto' />
          </div>
          <div className='md:flex items-end justify-between md:h-[36%] tv:block tv:mt-8 tv:h-[20%] mt-8 md:mt-0  '>
            <div className='w-[70%] md:w-[30%] tv:w-[72%] flex flex-col font-semibold md:h-full tv:h-[70%] divide-y-2 divide-black border-y-2 border-black'>
              {Q6options.slice(0, 2).map((option) => {
                const { opt, optText, Image } = option;
                return (
                  <Option
                    key={opt}
                    opt={opt}
                    optText={optText}
                    Image={Image}
                    handleSaveAns={handleSaveAns}
                    otherAns={otherAns}
                    i={2}
                  />
                );
              })}
            </div>
            {!!otherAns[2] && (
              <div className='w-[70%] md:w-[30%] md:ml-[5%] tv:w-[72%] tv:ml-0 flex flex-col font-semibold md:h-full tv:h-[70%] divide-y-2 divide-black md:border-y-2 border-b-2 border-black'>
                {Q6options.slice(2, 4).map((option) => {
                  const { opt, optText, Image } = option;
                  return (
                    <Option
                      key={opt}
                      opt={opt}
                      optText={optText}
                      Image={Image}
                      handleSaveAns={handleSaveAns}
                      otherAns={otherAns}
                      i={3}
                    />
                  );
                })}
              </div>
            )}
            <div
              className={`bg-blue mt-6 md:mt-0 tv:mt-6 w-min ml-auto px-5 md:px-6 py-3 tv:px-12 tv:py-6 rounded-full animate-remind-lightening transition hover:animate-lightening ${
                otherAns[3] !== undefined ? "opacity-1 cursor-custom" : "opacity-0"
              }`}
              onClick={checkNotEmptyAns}>
              <Finger className='w-[42px] h-[20px] md:w-[56px] md:h-[25px] tv:w-[120px] tv:h-[60px] fill-yellow' />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Question6;
