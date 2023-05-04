import React from "react";
import { ReactComponent as Title1 } from "../../assets/images/quiz/1/title.svg";
import { Q1options } from "./options";

const Option = ({ opt, optText, optTextEng, Image, handleSaveAns, quizAns }) => {
  return (
    <div
      className={`flex justify-between text-base md:text-xl tv:text-4xl p-2 tv:p-7 cursor-custom group hover:bg-black items-center flex-1 transition duration-500 ${
        quizAns[0] === opt && "bg-black"
      }`}
      onClick={() => handleSaveAns(0, opt)}>
      <span
        className={`group-hover:hidden text-base md:text-2xl tv:text-4xl ${
          quizAns[0] === opt ? "hidden" : ""
        }`}>
        <div>{optTextEng}</div>
      </span>
      {
        <Image
          className={`w-[45%] md:w-[63%] tv:w-[20%] -translate-x-3  fill-red group-hover:block ${
            quizAns[0] === opt ? "block " : "hidden"
          }`}
        />
      }
      <p className={`group-hover:text-red ${quizAns[0] === opt ? "text-red" : ""}`}>{optText}</p>
    </div>
  );
};

const Question1 = ({ questionNum, setQuestionNum, handleSaveAns, quizAns }) => {
  return (
    <div
      className={` bg-red flex px-6 md:px-20 tv:px-20 flex-col justify-between overflow-hidden absolute w-full z-[20] ${
        questionNum === 1
          ? "h-[80%] md:h-[75%] tv:h-[80%] py-6 md:py-16 animate-slideDown"
          : "h-[4%] md:h-[5%] tv:h-[4%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 1 && "hidden"
        } absolute inset-0 flex justify-between items-center h-full md:text-xl tv:text-4xl font-chakra px-4 md:px-8 tv:px-4 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(1)}>
        <p>I.</p>
        <p>FIRST</p>
      </div>

      {questionNum === 1 && (
        <>
          <div className='md:flex gap-6 md:max-w-1/2 tv:block items-end'>
            <Title1 className='w-[25%] md:w-[10%] tv:w-[25%]' />
            <div className='text-sm mt-4 md:mt-0 tv:mt-6 md:text-xl tv:text-4xl font-medium'>
              <p>請試著回憶你的夢境，當下的情緒是？</p>
              <p className='font-medium mt-2 tv:mt-6'>
                TRY TO RECALL YOUR DREAM, <br />
                WHAT’S YOUR MOOD IN THE MOMENT?
              </p>
            </div>
          </div>
          <div className='md:flex tv:block justify-between mt-3 md:mt-0 md:h-[62%] tv:mt-3 tv:h-auto overflow-x-scroll'>
            <div className='w-full md:w-[45%] tv:w-full flex flex-col font-medium md:font-semibold tv:font-medium divide-y-2 divide-black border-t-2 md:border-b-2 tv:md:border-b-0 border-black'>
              {Q1options.slice(0, 4).map((option) => {
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
            <div className='w-full md:w-[45%] tv:w-full flex flex-col font-semibold divide-y-2 divide-black border-t-2 border-b-2 border-black'>
              {Q1options.slice(4).map((option) => {
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
