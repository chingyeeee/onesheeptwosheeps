import { ReactComponent as Title3 } from "../../assets/images/quiz/3/title.svg";
import { Q3options } from "./options";
const Option = ({ opt, optText, optTextEng, Image, handleSaveAns, quizAns }) => {
  return (
    <div
      className={`flex justify-between text-base md:text-xl p-2 cursor-custom group hover:bg-black items-center flex-1 transition duration-500 ${
        quizAns[1] === opt && "bg-black"
      }`}
      onClick={() => handleSaveAns(1, opt)}>
      <span
        className={`group-hover:hidden text-base md:text-2xl ${quizAns[1] === opt && "hidden"}`}>
        {optTextEng}
      </span>
      {
        <Image
          className={`w-[25%] group-hover:block group-hover:fill-lakegreen ${
            quizAns[1] === opt ? "block fill-lakegreen" : "hidden"
          }`}
        />
      }
      <p className={`group-hover:text-lakegreen ${quizAns[1] === opt && "text-lakegreen"}`}>
        {optText}
      </p>
    </div>
  );
};

const Question3 = ({ questionNum, setQuestionNum, handleSaveAns, quizAns }) => {
  return (
    <div
      className={`bg-lakegreen flex px-6 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[18] ${
        questionNum <= 3
          ? "h-[88%] md:h-[85%] pt-20 md:pt-36 pb-16 animate-slideDown"
          : "h-[12%] md:h-[15%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 3 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(3)}>
        <p>III.</p>
        <p>THIRD</p>
      </div>

      {questionNum === 3 && (
        <>
          <div className='flex flex-col-reverse md:flex-row gap-6 items-end md:items-center justify-between'>
            <div className='text-sm md:text-xl'>
              <p className='font-medium'>
                該夢境中的主角是？
                <br /> 可以是自己、物品或動物。
              </p>
              <p className='font-medium mt-2'>
                WHAT IS THE MAIN PROTAGONIST OF THIS DREAM?
                <br />
                IT COULD BE YOURSELF, AN OBJECT OR ANIMAL.
              </p>
            </div>
            <Title3 className='w-[25%] mr-6 md:w-[10%]' />
          </div>
          <div className='flex justify-between md:h-[62%] mt-6 md:mt-0'>
            <div className='w-full md:w-[60%] flex flex-col font-semibold divide-y-2 divide-black border-y-2 border-black'>
              {Q3options.map((option) => {
                const { opt, optText, optTextEng, Image } = option;
                return (
                  <Option
                    key={opt}
                    opt={opt}
                    optText={optText}
                    optTextEng={optTextEng}
                    Image={Image}
                    handleSaveAns={handleSaveAns}
                    quizAns={quizAns}
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
export default Question3;
