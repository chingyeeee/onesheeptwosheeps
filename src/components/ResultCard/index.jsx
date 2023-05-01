import { Disclosure } from "@headlessui/react";
import { ReactComponent as ChevronUp } from "../../assets/images/quiz/showResult/chevronUp.svg";
import Frame from "./Frame";
import { getImageUrl } from "../../utils/getImageUrl";
import { getEmotion, getCharacter, getLifeStyle } from "./EmotionAlgorithm";
import { useNavigate } from "react-router-dom";

const Result = ({ signImgPath, quizAns, otherAns, setQuestionNum }) => {
  const navigate = useNavigate();
  const percentageArray = [
    getRandomPercentage(94, 70),
    getRandomPercentage(80, 50),
    getRandomPercentage(94, 70),
  ];

  const twoChoices = getRandomPercentage(3, 2);
  const fourChoices = getRandomPercentage(5, 2);

  function getRandomPercentage(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className='relative h-screen'>
      <Frame />

      <div className='w-[80%] mx-auto md:w-full px-2 md:pt-6 pb-12'>
        <img className='m-auto h-[8rem] md:h-[12rem] mb-2' src={signImgPath} alt='yourName' />
        <div className='mx-auto w-full max-w-3xl bg-white px-2 pb-8'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-t-2 border-blue p-3 text-left font-medium focus:outline-none relative'>
                  <p className='md:text-lg text-[8pt] text-blue'>
                    (1) <br />有{percentageArray[0]}%的人也跟你一樣做了
                    <br />（ {getEmotion(quizAns)[0]} ）的夢 <br />
                    BASED ON YOUR CHOICE, <br />
                    YOU HAVE A{" "}
                    <span className='font-padyakke text-red'>({getEmotion(quizAns)[1]})</span>{" "}
                    DREAM.
                  </p>
                  <ChevronUp
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='p-3 space-y-2 text-sm md:text-md text-red relative flex flex-col items-center'>
                  <img
                    className='md:w-3/4 w-full'
                    src={getImageUrl("quiz/showResult", `${quizAns[0]}.svg`)}
                  />

                  <p className='w-full underline-offset-1 decoration-red decoration-solid underline'>
                    {quizAns[0] === "D"
                      ? getEmotion(quizAns)[fourChoices]
                      : quizAns[0] === "A" || quizAns[0] === "B" || quizAns[0] === "G"
                      ? getEmotion(quizAns)[twoChoices]
                      : getEmotion(quizAns)[2]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-t-2 border-blue p-3 text-left text-[10px] font-medium focus:outline-none relative z-[20]'>
                  <p className='md:text-lg text-[8pt] text-blue'>
                    (2) <br />而{percentageArray[1]}%的人夢境中的主角是（
                    {getCharacter(quizAns, otherAns)[0]}） <br />
                    WITH{" "}
                    <span className='font-padyakke text-red'>
                      ({getCharacter(quizAns, otherAns)[1]})
                    </span>{" "}
                    BECOMING YOUR DREAM’S MAIN OBJECT.
                  </p>
                  <ChevronUp
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='p-3 space-y-2 text-sm md:text-md text-red relative flex flex-col items-center z-[10] w-full'>
                  <img
                    className='md:w-3/4 w-full'
                    src={getImageUrl("quiz/showResult", `${quizAns[1]}.svg`)}
                  />
                  <p className='w-full underline-offset-1 decoration-red decoration-solid underline'>
                    {otherAns[1] === "significant other"
                      ? getCharacter(quizAns, otherAns)[twoChoices]
                      : getCharacter(quizAns, otherAns)[2]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-between border-t-2  border-blue p-3 text-left text-[10px] font-medium focus:outline-none relative z-[20] ${
                    !open && "border-b-2"
                  }`}>
                  <p className='md:text-lg text-[8pt] text-blue'>
                    (3) <br />
                    {percentageArray[1]}%的人做了有關（
                    {getLifeStyle(quizAns)[0]}） 的夢
                    <br /> AND YOUR DREAM IS ALL ABOUT{" "}
                    <span className='font-padyakke text-red'>({getLifeStyle(quizAns)[1]})</span>
                  </p>
                  <ChevronUp
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className={`p-3 space-y-2 text-sm md:text-md text-red relative flex flex-col items-center  ${
                    open && "border-b-2 border-blue"
                  }`}>
                  <img
                    className='md:w-3/4 w-full'
                    src={getImageUrl("quiz/showResult", `${quizAns[2]}.svg`)}
                  />

                  <p className='w-full underline-offset-1 decoration-red decoration-solid underline'>
                    {quizAns[2] === "Y"
                      ? getLifeStyle(quizAns)[fourChoices]
                      : quizAns[2] === "X"
                      ? getLifeStyle(quizAns)[2]
                      : getLifeStyle(quizAns)[twoChoices]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div
            className={`px-8 py-2 cursor-custom text-darkgreen border-2 border-darkgreen rounded-full w-max mx-auto mt-12 mb-12 hover:bg-darkgreen hover:text-white transition animate-lightening2`}
            onClick={() => navigate("../download", { state: { signImgPath, quizAns } })}>
            生成解夢卡
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;
