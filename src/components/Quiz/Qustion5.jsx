import { ReactComponent as Title5 } from "../../assets/images/quiz/5/title.svg";
import { Q5options } from "./options";

const Option = ({ opt, optText, optTextEng, Image, handleSaveAns, quizAns }) => {
  return (
    <div
      className={`flex justify-between md:text-xl p-2 cursor-custom group hover:bg-black items-center flex-1 transition duration-500 ${
        quizAns[2] === opt && "bg-black"
      }`}
      onClick={() => handleSaveAns(2, opt)}>
      <span className={`group-hover:hidden  md:text-2xl ${quizAns[2] === opt && "hidden"}`}>
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
          ? "h-[96%] md:h-[95%] pt-40 md:pt-56 pb-16 animate-slideDown"
          : "h-[20%] md:h-[25%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 5 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(5)}>
        <p>V.</p>
        <p>FIFTH</p>
      </div>
      {questionNum === 5 && (
        <>
          <div className='flex flex-col justify-between h-full'>
            <div className='text-sm md:text-xl font-medium'>
              <p>該夢境的主要走向是?</p>
              <p className='font-medium mt-2'>HOW DOES THE DREAM’S PLOT DEVELOPES?</p>
            </div>
            <div className='flex flex-col-reverse items-start md:flex-row md:items-end justify-center md:justify-between gap-16 md:gap-24 w-[100%] mx-auto md:h-[48%]'>
              <Title5 className='w-[25%] ml-auto md:w-[15%] md:ml-0' />
              <div className='w-full h-full md:w-[55%] justify-between flex flex-col font-semibold mt-4 md:mt-0 divide-y-2 divide-black border-y-2 border-black'>
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
