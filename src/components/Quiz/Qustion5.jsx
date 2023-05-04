import { ReactComponent as Title5 } from "../../assets/images/quiz/5/title.svg";
import { Q5options } from "./options";

const Option = ({ opt, optText, optTextEng, Image, handleSaveAns, quizAns }) => {
  return (
    <div
      className={`flex justify-between md:text-xl tv:text-4xl p-2 cursor-custom group hover:bg-black items-center flex-1 transition duration-500 ${
        quizAns[2] === opt && "bg-black"
      }`}
      onClick={() => handleSaveAns(2, opt)}>
      <span
        className={`group-hover:hidden  md:text-2xl tv:text-4xl ${quizAns[2] === opt && "hidden"}`}>
        {optTextEng}
      </span>
      {
        <Image
          className={`w-[30%] group-hover:block group-hover:fill-blue ${
            quizAns[2] === opt ? "block fill-blue" : "hidden"
          }`}
        />
      }
      <p className={`group-hover:text-blue ${quizAns[2] === opt && "text-blue"}`}>{optText}</p>
    </div>
  );
};

const Question5 = ({ questionNum, setQuestionNum, handleSaveAns, quizAns }) => {
  return (
    <div
      className={`bg-blue flex px-4 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[16] ${
        questionNum <= 5
          ? "h-[96%] md:h-[95%] tv:h-[96%] pt-40 md:pt-56 pb-16 animate-slideDown"
          : "h-[20%] md:h-[25%] tv:h-[20%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 5 && "hidden"
        } flex justify-between md:text-xl tv:text-4xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(5)}>
        <p>V.</p>
        <p>FIFTH</p>
      </div>
      {questionNum === 5 && (
        <>
          <div className='flex flex-col justify-between h-full tv:mt-56'>
            <div className='text-sm md:text-xl tv:text-4xl font-medium'>
              <p>該夢境的主要走向是?</p>
              <p className='font-medium mt-2 tv:mt-6'>HOW DOES THE DREAM’S PLOT DEVELOPES?</p>
            </div>
            <div className='flex flex-col-reverse tv:flex-col-reverse items-start tv:items-start md:flex-row md:items-end justify-center tv:justify-center md:justify-between gap-16 md:gap-24 w-full mx-auto md:h-[48%] tv:h-auto'>
              <Title5 className='w-[23%] ml-auto md:w-[15%] md:ml-0 tv:ml-auto tv:w-[23%]' />
              <div className='w-full md:h-full md:w-[55%] tv:w-full justify-between flex flex-col font-semibold mt-4 md:mt-0 tv:mt-4 divide-y-2 divide-black border-y-2 border-black'>
                {Q5options.map((option) => {
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
          </div>
        </>
      )}
    </div>
  );
};
export default Question5;
