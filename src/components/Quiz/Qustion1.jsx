import React from "react";
import { ReactComponent as Choice1 } from "../../assets/images/quiz/1/choice1.svg";
import { ReactComponent as Choice2 } from "../../assets/images/quiz/1/choice2.svg";
import { ReactComponent as Choice3 } from "../../assets/images/quiz/1/choice3.svg";
import { ReactComponent as Choice4 } from "../../assets/images/quiz/1/choice4.svg";
import { ReactComponent as Choice5 } from "../../assets/images/quiz/1/choice5.svg";
import { ReactComponent as Choice6 } from "../../assets/images/quiz/1/choice6.svg";
import { ReactComponent as Choice7 } from "../../assets/images/quiz/1/choice7.svg";
import { ReactComponent as Choice8 } from "../../assets/images/quiz/1/choice8.svg";
import { ReactComponent as Title1 } from "../../assets/images/quiz/1/title.svg";

const Option = ({ opt, optText, optTextEng, Image, handleSaveAns, quizAns }) => {
  return (
    <div
      className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]  group hover:bg-black items-center flex-1 transition duration-500 ${
        quizAns[0] === opt && "bg-black"
      }`}
      onClick={() => handleSaveAns(0, opt)}>
      <span
        className={`group-hover:hidden text-base md:text-2xl ${
          quizAns[0] === opt ? "hidden" : ""
        }`}>
        <div>{optTextEng}</div>
      </span>
      {
        <Image
          className={`w-[40%] fill-red group-hover:block ${
            quizAns[0] === opt ? "block " : "hidden"
          }`}
        />
      }
      <p className={`group-hover:text-red ${quizAns[0] === opt ? "text-red" : ""}`}>{optText}</p>
    </div>
  );
};

const Question1 = ({ questionNum, setQuestionNum, handleSaveAns, quizAns }) => {
  const options = [
    { opt: "A", optText: "悲傷", optTextEng: "sad", Image: Choice1 },
    { opt: "B", optText: "無感", optTextEng: "feel nothing", Image: Choice2 },
    { opt: "C", optText: "恐懼", optTextEng: "fear", Image: Choice3 },
    { opt: "D", optText: "性歡愉", optTextEng: "sexual pleasure", Image: Choice4 },
    { opt: "E", optText: "厭惡", optTextEng: "disgust", Image: Choice5 },
    { opt: "F", optText: "憤怒", optTextEng: "angry", Image: Choice6 },
    { opt: "G", optText: "驚嚇", optTextEng: "terrified", Image: Choice7 },
    { opt: "H", optText: "幸福滿足", optTextEng: "happy satisfied", Image: Choice8 },
  ];

  return (
    <div
      className={` bg-red flex px-6 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[20] ${
        questionNum === 1
          ? "h-[80%] md:h-[75%] py-6 md:py-16 animate-slideDown"
          : "h-[4%] md:h-[5%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 1 && "hidden"
        } flex justify-between md:text-xl absolute inset-0 h-min m-auto font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(1)}>
        <p>I.</p>
        <p>FIRST</p>
      </div>

      {questionNum === 1 && (
        <>
          <div className='md:flex gap-6 md:max-w-1/2 items-end'>
            <Title1 className='w-[25%] md:w-[10%]' />
            <div className='text-sm mt-4 md:mt-0 md:text-xl font-medium'>
              <p>請試著回憶你的夢境，當下的情緒是？</p>
              <p className='font-medium mt-2'>
                TRY TO RECALL YOUR DREAM, <br />
                WHAT’S YOUR MOOD IN THE MOMENT?
              </p>
            </div>
          </div>
          <div className='md:flex justify-between mt-3 md:mt-0 md:h-[62%] overflow-x-scroll'>
            <div className='w-full md:w-[45%] flex flex-col font-medium md:font-semibold divide-y-2 divide-black border-t-2 md:border-b-2 border-black'>
              {options.slice(0, 4).map((option) => {
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
            <div className='w-full md:w-[45%] flex flex-col font-semibold divide-y-2 divide-black border-t-2 border-b-2 border-black'>
              {options.slice(4).map((option) => {
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

export default Question1;
