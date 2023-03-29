import { useEffect, useState, Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import html2canvas from "html2canvas";
import { ReactComponent as Finger } from "../images/icons/icon-finger.svg";
import { ReactComponent as Title1 } from "../images/quiz/1/title.svg";
import { ReactComponent as Title2 } from "../images/quiz/2/title.svg";
import { ReactComponent as Title3 } from "../images/quiz/3/title.svg";
import { ReactComponent as Title4 } from "../images/quiz/4/title.svg";
import { ReactComponent as Title5 } from "../images/quiz/5/title.svg";
import { ReactComponent as Title6 } from "../images/quiz/6/title.svg";
import { ReactComponent as Choice1 } from "../images/quiz/1/choice1.svg";
import { ReactComponent as Choice2 } from "../images/quiz/1/choice2.svg";
import { ReactComponent as Choice3 } from "../images/quiz/1/choice3.svg";
import { ReactComponent as Choice4 } from "../images/quiz/1/choice4.svg";
import { ReactComponent as Choice5 } from "../images/quiz/1/choice5.svg";
import { ReactComponent as Choice6 } from "../images/quiz/1/choice6.svg";
import { ReactComponent as Choice7 } from "../images/quiz/1/choice7.svg";
import { ReactComponent as Choice8 } from "../images/quiz/1/choice8.svg";
import { ReactComponent as Yes } from "../images/quiz/2/yes.svg";
import { ReactComponent as No } from "../images/quiz/2/no.svg";
import { ReactComponent as Animal } from "../images/quiz/3/animal.svg";
import { ReactComponent as Ghost } from "../images/quiz/3/ghost.svg";
import { ReactComponent as Nonexisted } from "../images/quiz/3/nonexisted.svg";
import { ReactComponent as Person } from "../images/quiz/3/person.svg";
import { ReactComponent as Myself } from "../images/quiz/4/myself.svg";
import { ReactComponent as Strangers } from "../images/quiz/4/strangers.svg";
import { ReactComponent as Acquaintance } from "../images/quiz/4/acquaintance.svg";
import { ReactComponent as Threatening } from "../images/quiz/4/threatening.svg";
import { ReactComponent as NotThreatening } from "../images/quiz/4/notthreatening.svg";
import { ReactComponent as Other } from "../images/quiz/4/other.svg";
import { ReactComponent as Positive } from "../images/quiz/4/positive.svg";
import { ReactComponent as Negative } from "../images/quiz/4/negative.svg";
import { ReactComponent as None } from "../images/quiz/4/none.svg";
import { ReactComponent as Natural } from "../images/quiz/5/natural.svg";
import { ReactComponent as Normal } from "../images/quiz/5/normal.svg";
import { ReactComponent as Novel } from "../images/quiz/5/novel.svg";
import { ReactComponent as Notrecognized } from "../images/quiz/6/notrecognized.svg";
import { ReactComponent as Open } from "../images/quiz/6/open.svg";
import { ReactComponent as Recognized } from "../images/quiz/6/recognized.svg";
import { ReactComponent as Sealed } from "../images/quiz/6/sealed.svg";
import Loading1 from "../images/quiz/loading/loading1.svg";
import Loading2 from "../images/quiz/loading/loading2.svg";
import Loading3 from "../images/quiz/loading/loading3.svg";
import Loading4 from "../images/quiz/loading/loading4.svg";
import Loading5 from "../images/quiz/loading/loading5.svg";
import Marquee from "../images/quiz/showResult/marquee.svg";
import LeftMarquee from "../images/quiz/showResult/left-marquee.svg";
import RightMarquee from "../images/quiz/showResult/right-marquee.svg";
import { ReactComponent as ChevronUp } from "../images/quiz/showResult/chevronUp.svg";
import { getImageUrl } from "../utils/getImageUrl";
import { ReactComponent as Home } from "../images/resultCards/nav/icon-home.svg";
import { ReactComponent as Download } from "../images/resultCards/nav/icon-download.svg";
import { ReactComponent as Share } from "../images/resultCards/nav/icon-share.svg";
import Arrow from "../images/resultCards/nav/icon-arrow.svg";
import { Dialog, Transition } from "@headlessui/react";
import Logo from "../images/resultCards/nav/icon-logo.svg";
import { useNavigate } from "react-router-dom";
import { useLongPress } from "use-long-press";

const Question1 = ({ questionNum, setQuestionNum, handleSaveAns, quizAns }) => {
  return (
    <div
      className={` bg-red flex px-6 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[20] ${
        questionNum === 1
          ? "h-[80%] md:h-[75%] py-6 md:py-16 animate-slideDown"
          : "h-[4%] md:h-[5%] animate-slideUp"
      }`}
    >
      <div
        className={`${
          questionNum === 1 && "hidden"
        } flex justify-between md:text-xl absolute inset-0 h-min m-auto font-chakra px-4 md:px-8 hover:italic cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
        onClick={() => setQuestionNum(1)}
      >
        <p>I.</p>
        <p>FIRST</p>
      </div>

      {questionNum === 1 && (
        <>
          <div className="md:flex gap-6 md:max-w-1/2 items-end">
            <Title1 className="w-[25%] md:w-[10%]" />
            <div className="text-sm mt-4 md:mt-0 md:text-xl font-medium">
              <p>請試著回憶你的夢境，當下的情緒是？</p>
              <p className="font-medium mt-2">
                TRY TO RECALL YOUR DREAM, <br />
                WHAT’S YOUR MOOD IN THE MOMENT?
              </p>
            </div>
          </div>
          <div className="md:flex justify-between mt-3 md:mt-0 md:h-[62%] overflow-x-scroll">
            <div className="w-full md:w-[45%] flex flex-col font-medium md:font-semibold">
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "A" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "A")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[0] === "A" && "hidden"
                  }`}
                >
                  sad
                </span>
                <Choice1
                  className={`w-[18%] group-hover:block group-hover:fill-red ${
                    quizAns[0] === "A" ? "block fill-red" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-red ${
                    quizAns[0] === "A" && "text-red"
                  }`}
                >
                  悲傷
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "B" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "B")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[0] === "B" && "hidden"
                  }`}
                >
                  feel nothing
                </span>
                <Choice2
                  className={`w-[40%] group-hover:block group-hover:fill-red ${
                    quizAns[0] === "B" ? "block fill-red" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-red ${
                    quizAns[0] === "B" && "text-red"
                  }`}
                >
                  無感
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "C" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "C")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[0] === "C" && "hidden"
                  }`}
                >
                  fear
                </span>
                <Choice3
                  className={`w-[14%] group-hover:block group-hover:fill-red ${
                    quizAns[0] === "C" ? "block fill-red" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-red ${
                    quizAns[0] === "C" && "text-red"
                  }`}
                >
                  恐懼
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "D" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "D")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[0] === "D" && "hidden"
                  }`}
                >
                  sexual pleasure
                </span>
                <Choice4
                  className={`w-[55%] group-hover:block group-hover:fill-red ${
                    quizAns[0] === "D" ? "block fill-red" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-red ${
                    quizAns[0] === "D" && "text-red"
                  }`}
                >
                  性歡愉
                </p>
              </div>
            </div>
            <div className="w-full md:w-[45%] flex flex-col font-semibold">
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] md:border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "E" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "E")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[0] === "E" && "hidden"
                  }`}
                >
                  disgust
                </span>
                <Choice5
                  className={`w-[25%] group-hover:block group-hover:fill-red ${
                    quizAns[0] === "E" ? "block fill-red" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-red ${
                    quizAns[0] === "E" && "text-red"
                  }`}
                >
                  厭惡
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "F" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "F")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[0] === "F" && "hidden"
                  }`}
                >
                  angry
                </span>
                <Choice6
                  className={`w-[25%] group-hover:block group-hover:fill-red ${
                    quizAns[0] === "F" ? "block fill-red" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-red ${
                    quizAns[0] === "F" && "text-red"
                  }`}
                >
                  憤怒
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "G" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "G")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[0] === "G" && "hidden"
                  }`}
                >
                  terrified
                </span>
                <Choice7
                  className={`w-[25%] group-hover:block group-hover:fill-red ${
                    quizAns[0] === "G" ? "block fill-red" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-red ${
                    quizAns[0] === "G" && "text-red"
                  }`}
                >
                  驚嚇
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-base md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "H" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "H")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[0] === "H" && "hidden"
                  }`}
                >
                  happy satisfied
                </span>
                <Choice8
                  className={`w-[42%] group-hover:block group-hover:fill-red ${
                    quizAns[0] === "H" ? "block fill-red" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-red ${
                    quizAns[0] === "H" && "text-red"
                  }`}
                >
                  幸福滿足
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Question2 = ({
  questionNum,
  setQuestionNum,
  handleSaveAns,
  otherAns,
}) => {
  return (
    <div
      className={` bg-lightgreen flex px-6 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[19] ${
        questionNum <= 2
          ? "h-[84%] md:h-[80%] pt-24 md:pt-28 pb-16 animate-slideDown"
          : "h-[8%] md:h-[10%] animate-slideUp"
      }`}
    >
      <div
        className={`${
          questionNum === 2 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
        onClick={() => setQuestionNum(2)}
      >
        <p>II.</p>
        <p>SECOND</p>
      </div>
      {questionNum === 2 && (
        <>
          <div className="md:flex gap-6 max-w-1/2 items-start">
            <Title2 className="w-[20%] md:w-[10%]" />
            <div className="text-sm mt-6 md:mt-0 md:text-xl font-medium">
              <p>是否曾經發生在現實生活中，這個夢是你的真實回憶嗎？</p>
              <p className="font-medium mt-2">
                HAS IT EVER HAPPENED IN THE REAL LIFE? <br />
                IS IT A REAL MEMORY OF YOURS?
              </p>
            </div>
          </div>
          <div className="flex justify-between md:h-[35%]">
            <div className="w-[70%] md:w-[20%] md:mr-12 ml-auto h-full justify-between flex flex-col font-semibold">
              <div
                className={`flex justify-between  text-base md:text-xl px-2 md:px-4 py-2 md:py-4 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[0] === "Y" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "Y")}
              >
                <span
                  className={`group-hover:hidden  text-base md:text-2xl ${
                    otherAns[0] === "Y" && "hidden"
                  }`}
                >
                  yes
                </span>
                <Yes
                  className={`w-[40%] group-hover:fill-lightgreen group-hover:block ${
                    otherAns[0] === "Y" ? "block fill-lightgreen" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-lightgreen ${
                    otherAns[0] === "Y" && "text-lightgreen"
                  }`}
                >
                  是
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-4 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[0] === "N" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "N")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    otherAns[0] === "N" && "hidden"
                  }`}
                >
                  no
                </span>
                <No
                  className={`w-[40%] group-hover:fill-lightgreen group-hover:block ${
                    otherAns[0] === "N" ? "block fill-lightgreen" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-lightgreen ${
                    otherAns[0] === "N" && "text-lightgreen"
                  }`}
                >
                  否
                </p>
              </div>
            </div>
          </div>
        </>
      )}
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
      }`}
    >
      <div
        className={`${
          questionNum === 3 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
        onClick={() => setQuestionNum(3)}
      >
        <p>III.</p>
        <p>THIRD</p>
      </div>

      {questionNum === 3 && (
        <>
          <div className="flex flex-col-reverse md:flex-row gap-6 items-end md:items-center justify-between">
            <div className="text-sm md:text-xl">
              <p className="font-medium">
                該夢境中的主角是？
                <br /> 可以是自己、物品或動物。
              </p>
              <p className="font-medium mt-2">
                WHAT IS THE MAIN PROTAGONIST OF THIS DREAM?
                <br />
                IT COULD BE YOURSELF, AN OBJECT OR ANIMAL.
              </p>
            </div>
            <Title3 className="w-[25%] mr-6 md:w-[10%]" />
          </div>
          <div className="flex justify-between md:h-[62%] mt-6 md:mt-0">
            <div className="w-full md:w-[60%] flex flex-col font-semibold">
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "2" && "bg-black"
                }`}
                onClick={() => handleSaveAns(1, "2")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[1] === "2" && "hidden"
                  }`}
                >
                  ghost
                </span>
                <Ghost
                  className={`w-[25%] group-hover:block group-hover:fill-lakegreen ${
                    quizAns[1] === "2" ? "block fill-lakegreen" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-lakegreen ${
                    quizAns[1] === "2" && "text-lakegreen"
                  }`}
                >
                  鬼神
                </p>
              </div>
              <div
                className={`flex justify-between text-sm md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "3" && "bg-black"
                }`}
                onClick={() => handleSaveAns(1, "3")}
              >
                <span
                  className={`group-hover:hidden text-sm md:text-2xl ${
                    quizAns[1] === "3" && "hidden"
                  }`}
                >
                  undefined mysterious animal
                </span>
                <Nonexisted
                  className={`w-[70%] group-hover:block group-hover:fill-lakegreen ${
                    quizAns[1] === "3" ? "block fill-lakegreen" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-lakegreen ${
                    quizAns[1] === "3" && "text-lakegreen"
                  }`}
                >
                  不存在的生物
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "1" && "bg-black"
                }`}
                onClick={() => handleSaveAns(1, "1")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[1] === "1" && "hidden"
                  }`}
                >
                  people
                </span>
                <Person
                  className={`w-[15%] group-hover:block group-hover:fill-lakegreen ${
                    quizAns[1] === "1" ? "block fill-lakegreen" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-lakegreen ${
                    quizAns[1] === "1" && "text-lakegreen"
                  }`}
                >
                  人
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "4" && "bg-black"
                }`}
                onClick={() => handleSaveAns(1, "4")}
              >
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[1] === "4" && "hidden"
                  }`}
                >
                  animal
                </span>
                <Animal
                  className={`w-[18%] group-hover:block group-hover:fill-lakegreen ${
                    quizAns[1] === "4" ? "block fill-lakegreen" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-lakegreen ${
                    quizAns[1] === "4" && "text-lakegreen"
                  }`}
                >
                  動物
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Question4 = ({
  questionNum,
  setQuestionNum,
  handleSaveAns,
  otherAns,
  quizAns,
}) => {
  return (
    <div
      className={`bg-purple flex px-4 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[17] ${
        questionNum <= 4
          ? "h-[92%] md:h-[90%] pt-36 md:pt-48 pb-16 animate-slideDown"
          : "h-[16%] md:h-[20%] animate-slideUp"
      }`}
    >
      <div
        className={`${
          questionNum === 4 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
        onClick={() => setQuestionNum(4)}
      >
        <p>IV.</p>
        <p>FOURTH</p>
      </div>

      {questionNum === 4 && (
        <>
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <Title4 className="w-[40%] md:w-[12%]" />
            <div className="text-sm md:text-xl font-medium">
              <p>承上題，請選擇以下項目</p>
              <p className="font-medium mt-2">
                FOLLOWING THE PREVIOUS QUESTION, WHAT SPECIFIC IT IS?
              </p>
            </div>
          </div>
          <div
            className={`md:flex justify-center gap-24 ${
              quizAns[1] === "1" ? "md:h-[35%]" : "md:h-[16%] md:mb-[3%]"
            } `}
          >
            {quizAns[1] === "1" && (
              <>
                <div className="w-[90%] mx-auto md:w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "myself" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "myself")}
                  >
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "myself" && "hidden"
                      }`}
                    >
                      myself
                    </span>
                    <Myself
                      className={`w-[30%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "myself"
                          ? "block fill-purple"
                          : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "myself" && "text-purple"
                      }`}
                    >
                      自己
                    </p>
                  </div>
                  <div
                    className={`flex justify-between md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "strangers" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "strangers")}
                  >
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "strangers" && "hidden"
                      }`}
                    >
                      strangers
                    </span>
                    <Strangers
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "strangers"
                          ? "block fill-purple"
                          : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "strangers" && "text-purple"
                      }`}
                    >
                      陌生人
                    </p>
                  </div>
                </div>
                <div className="w-[90%] mx-auto md:w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] md:border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "acquaintance" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "acquaintance")}
                  >
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "acquaintance" && "hidden"
                      }`}
                    >
                      acquaintance
                    </span>
                    <Acquaintance
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "acquaintance"
                          ? "block fill-purple"
                          : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "acquaintance" && "text-purple"
                      }`}
                    >
                      知道或認得但不認識的人
                    </p>
                  </div>
                  <div
                    className={`flex justify-between px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "significant other" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "significant other")}
                  >
                    <span
                      className={`group-hover:hidden md:text-2xl mr-6 ${
                        otherAns[1] === "significant other" && "hidden"
                      }`}
                    >
                      significant other
                    </span>
                    <Other
                      className={`w-[35%] group-hover:block group-hover:fill-purple mr-6 ${
                        otherAns[1] === "significant other"
                          ? "block fill-purple"
                          : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple text-[8px] md:text-base ${
                        otherAns[1] === "significant other" && "text-purple"
                      }`}
                    >
                      重要他人（家人、伴侶、照顧者、生命中重要的人、前任）
                    </p>
                  </div>
                </div>
              </>
            )}
            {quizAns[1] === "2" && (
              <>
                <div className="w-[80%] mx-auto md:w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 md:border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "positive" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "positive")}
                  >
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "positive" && "hidden"
                      }`}
                    >
                      positive
                    </span>
                    <Positive
                      className={`w-[30%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "positive"
                          ? "block fill-purple"
                          : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "positive" && "text-purple"
                      }`}
                    >
                      正向的
                    </p>
                  </div>
                </div>
                <div className="w-[80%] mx-auto md:w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "negative" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "negative")}
                  >
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "negative" && "hidden"
                      }`}
                    >
                      negative
                    </span>
                    <Negative
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "negative"
                          ? "block fill-purple"
                          : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "negative" && "text-purple"
                      }`}
                    >
                      負面的
                    </p>
                  </div>
                </div>
              </>
            )}
            {quizAns[1] === "3" && (
              <>
                <div className="w-[80%] mx-auto md:w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 md:border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "threatening" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "threatening")}
                  >
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "threatening" && "hidden"
                      }`}
                    >
                      threatening
                    </span>
                    <Threatening
                      className={`w-[30%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "threatening"
                          ? "block fill-purple"
                          : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "threatening" && "text-purple"
                      }`}
                    >
                      具威脅性
                    </p>
                  </div>
                </div>
                <div className="w-[80%] mx-auto md:w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "not threatening" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "not threatening")}
                  >
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "not threatening" && "hidden"
                      }`}
                    >
                      not threatening
                    </span>
                    <NotThreatening
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "not threatening"
                          ? "block fill-purple"
                          : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "not threatening" && "text-purple"
                      }`}
                    >
                      不具威脅性
                    </p>
                  </div>
                </div>
              </>
            )}
            {quizAns[1] === "4" && (
              <>
                <div className="w-[80%] md:w-[40%] mx-auto font-semibold">
                  <div
                    className={`flex justify-between text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "none" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "none")}
                  >
                    <span
                      className={`group-hover:hidden text-2xl ${
                        otherAns[1] === "none" && "hidden"
                      }`}
                    >
                      none
                    </span>
                    <None
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "none" ? "block fill-purple" : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "none" && "text-purple"
                      }`}
                    >
                      無
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
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
      }`}
    >
      <div
        className={`${
          questionNum === 5 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
        onClick={() => setQuestionNum(5)}
      >
        <p>V.</p>
        <p>FIFTH</p>
      </div>
      {questionNum === 5 && (
        <>
          <div className="flex flex-col justify-between h-full">
            <div className="text-sm md:text-xl font-medium">
              <p>該夢境的主要走向是?</p>
              <p className="font-medium mt-2">
                HOW DOES THE DREAM’S PLOT DEVELOPES?
              </p>
            </div>
            <div className="flex flex-col-reverse items-start md:flex-row md:items-end justify-center md:justify-between gap-16 md:gap-24 w-[100%] mx-auto md:h-[48%]">
              <Title5 className="w-[25%] ml-auto md:w-[15%] md:ml-0" />
              <div className="w-full md:w-[55%] h-full justify-between flex flex-col font-semibold mt-4 md:mt-0">
                <div
                  className={`flex justify-between md:text-xl px-2 md:px-4 py-1 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                    quizAns[2] === "Y" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(2, "Y")}
                >
                  <span
                    className={`group-hover:hidden  md:text-2xl ${
                      quizAns[2] === "Y" && "hidden"
                    }`}
                  >
                    daily
                  </span>
                  <Normal
                    className={`w-[20%] group-hover:block group-hover:fill-blue translate-y-2 ${
                      quizAns[2] === "Y" ? "block fill-blue" : "hidden"
                    }`}
                  />
                  <p
                    className={`group-hover:text-blue ${
                      quizAns[2] === "Y" && "text-blue"
                    }`}
                  >
                    日常生活
                  </p>
                </div>
                <div
                  className={`flex justify-between  md:text-xl px-2 md:px-4 py-1 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                    quizAns[2] === "X" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(2, "X")}
                >
                  <span
                    className={`group-hover:hidden  md:text-2xl ${
                      quizAns[2] === "X" && "hidden"
                    }`}
                  >
                    natural
                  </span>
                  <Natural
                    className={`w-[25%] group-hover:block group-hover:fill-blue ${
                      quizAns[2] === "X" ? "block fill-blue" : "hidden"
                    }`}
                  />
                  <p
                    className={`group-hover:text-blue ${
                      quizAns[2] === "X" && "text-blue"
                    }`}
                  >
                    自然現象
                  </p>
                </div>
                <div
                  className={`flex justify-between  md:text-xl px-2 md:px-4 py-1 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                    quizAns[2] === "Z" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(2, "Z")}
                >
                  <span
                    className={`group-hover:hidden  md:text-2xl ${
                      quizAns[2] === "Z" && "hidden"
                    }`}
                  >
                    unrealistic
                  </span>
                  <Novel
                    className={`w-[45%] group-hover:block group-hover:fill-blue ${
                      quizAns[2] === "Z" ? "block fill-blue" : "hidden"
                    }`}
                  />
                  <p
                    className={`group-hover:text-blue ${
                      quizAns[2] === "Z" && "text-blue"
                    }`}
                  >
                    小說情節
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Question6 = ({
  questionNum,
  setQuestionNum,
  handleSaveAns,
  otherAns,
}) => {
  function checkNotEmptyAns() {
    otherAns[2] !== undefined &&
      otherAns[3] !== undefined &&
      setQuestionNum(questionNum + 1);
  }

  return (
    <div
      className={`bg-yellow flex px-4 md:px-20 flex-col md:justify-between overflow-hidden absolute w-full z-[15] ${
        questionNum <= 6
          ? "h-[100%] pt-44 md:pt-52 md:pt-64 pb-16 animate-slideDown"
          : "h-[24%] md:h-[25%]"
      }`}
    >
      <div
        className={`${
          questionNum === 6 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
        onClick={() => setQuestionNum(6)}
      >
        <p>VI.</p>
        <p>SIXTH</p>
      </div>
      {questionNum === 6 && (
        <>
          <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-6 items-start justify-between">
            <div className="text-sm md:text-xl font-medium">
              <p>
                該夢境發生在什麼樣的場景?是認得的空間嗎？開放或是密閉的？（四選二）
              </p>
              <p className="font-medium mt-2">
                WHAT DOES THE SCENE LOOK LIKE?
                <br />
                IS IT FAMILIAR OR RECONGNIZED? OPEN OR SEALED? <br />
                (CHOOSE 2 OPTIONS)
              </p>
            </div>
            <Title6 className="w-[30%] md:w-[15%] ml-auto md:ml-0" />
          </div>
          <div className="md:flex items-end justify-between md:h-[36%] mt-8 md:mt-0">
            <div className="w-[60%] md:w-[30%] flex flex-col font-semibold md:h-full">
              <div
                className={`flex justify-between md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-t-2 border-b-2 border-black group hover:bg-black items-center md:flex-1 transition duration-500 ${
                  otherAns[2] === "recognize" && "bg-black"
                }`}
                onClick={() => handleSaveAns(2, "recognize")}
              >
                <span
                  className={`group-hover:hidden  md:text-2xl ${
                    otherAns[2] === "recognize" && "hidden"
                  }`}
                >
                  recognize
                </span>
                <Recognized
                  className={`w-[46%] group-hover:block group-hover:fill-yellow ${
                    otherAns[2] === "recognize" ? "block fill-yellow" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-yellow ${
                    otherAns[2] === "recognize" && "text-yellow"
                  }`}
                >
                  認得
                </p>
              </div>
              <div
                className={`flex justify-between  md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center md:flex-1 transition duration-500 ${
                  otherAns[2] === "not recognized" && "bg-black"
                }`}
                onClick={() => handleSaveAns(2, "not recognized")}
              >
                <span
                  className={`group-hover:hidden  md:text-2xl ${
                    otherAns[2] === "not recognized" && "hidden"
                  }`}
                >
                  not recognized
                </span>
                <Notrecognized
                  className={`w-[46%] group-hover:block group-hover:fill-yellow ${
                    otherAns[2] === "not recognized"
                      ? "block fill-yellow"
                      : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-yellow ${
                    otherAns[2] === "not recognized" && "text-yellow"
                  }`}
                >
                  不認得
                </p>
              </div>
            </div>
            {otherAns[2] !== undefined && (
              <div className="w-[60%] md:w-[30%] md:ml-[5%] flex flex-col font-semibold md:h-full">
                <div
                  className={`flex justify-between  md:text-xl px-2 md:px-4 py-2 md:py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] md:border-t-2 border-b-2 border-black group hover:bg-black items-center md:flex-1 transition duration-500 ${
                    otherAns[3] === "open" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(3, "open")}
                >
                  <span
                    className={`group-hover:hidden  md:text-2xl ${
                      otherAns[3] === "open" && "hidden"
                    }`}
                  >
                    open
                  </span>
                  <Open
                    className={`w-[30%] group-hover:block group-hover:fill-yellow ${
                      otherAns[3] === "open" ? "block fill-yellow" : "hidden"
                    }`}
                  />
                  <p
                    className={`group-hover:text-yellow ${
                      otherAns[3] === "open" && "text-yellow"
                    }`}
                  >
                    開放
                  </p>
                </div>
                <div
                  className={`flex justify-between  md:text-xl px-2 md:px-4 py-3 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] border-b-2 border-black group hover:bg-black items-center md:flex-1 transition duration-500 ${
                    otherAns[3] === "sealed" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(3, "sealed")}
                >
                  <span
                    className={`group-hover:hidden  md:text-2xl ${
                      otherAns[3] === "sealed" && "hidden"
                    }`}
                  >
                    sealed
                  </span>
                  <Sealed
                    className={`w-[30%] group-hover:block group-hover:fill-yellow ${
                      otherAns[3] === "sealed" ? "block fill-yellow" : "hidden"
                    }`}
                  />
                  <p
                    className={`group-hover:text-yellow ${
                      otherAns[3] === "sealed" && "text-yellow"
                    }`}
                  >
                    密閉
                  </p>
                </div>
              </div>
            )}
            <div
              className={`bg-blue mt-6 md:mt-0 w-min ml-auto px-5 md:px-6 py-3 rounded-full animate-remind-lightening transition hover:animate-lightening ${
                otherAns[3] !== undefined
                  ? "opacity-1 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]"
                  : "opacity-0"
              }`}
              onClick={checkNotEmptyAns}
            >
              <Finger className="w-[42px] h-[20px] md:w-[56px] md:h-[25px] fill-yellow" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const GeneratingResult = ({ setQuestionNum }) => {
  setTimeout(() => setQuestionNum(8), 3000);
  return (
    <div className="w-[75%] md:max-w-[50%] m-auto text-center">
      <div className="flex m-auto justify-center">
        <img className="w-[3.5rem] md:w-[5rem]" src={Loading1} alt="Loading1" />
        <img className="w-[3.5rem] md:w-[5rem]" src={Loading2} alt="Loading2" />
        <img className="w-[3.5rem] md:w-[5rem]" src={Loading3} alt="Loading3" />
        <img className="w-[3.5rem] md:w-[5rem]" src={Loading4} alt="Loading4" />
      </div>
      <p className="md:text-lg mt-4">
        WHAT YOU DREAM LEADS YOU BECOMING A BETTER MAN.
      </p>
      <span className="block animate-loaded h-[1rem] bg-blue mt-4" />
    </div>
  );
};

const ShowResult = ({ signImgPath, quizAns, otherAns, setQuestionNum }) => {
  function getEmotion() {
    switch (quizAns[0]) {
      case "A":
        return [
          "悲傷",
          "sad",
          "有一種悲傷～是笑著與你分開思念卻背對背張望～哭啊、喊阿～好好的擁抱自己吧，這無關對錯，只是情緒的出口，請相信你的世界仍充滿絢麗的陽光，那些過不去的坎…..都是因為你腿短。",
          "原本想一口一口吃掉憂愁，不料卻一口一口吃成胖子。",
        ];
      case "B":
        return [
          "無感",
          "feel nothing",
          "人生百態，笑笑看待，我們做人啊，要記得及時行樂，天天快樂，多買可樂。在這座城市，誰先認真，誰就輸了，古人說：自殺不能解決問題，但裝死可以：））",
          "生活就像鴨子游水，別人只看水面悠閒的樣子，沒人知道水下的雙腳有多拼命。每個人都只是在不動聲色地努力罷了。",
        ];
      case "C":
        return [
          "恐懼",
          "fear",
          "不哭不哭眼淚是珍珠，越哭越像豬～做惡夢不怕不怕，最怕的是走建國路回家但後座少ㄌ泥！經過惡夢的洗禮恭喜你成功挺ㄌ過來，你「兵來將擋、水來土掩」，生活中的挫折都無法將你輕易打敗～試著傾聽自己內心的聲音，不要逃避也不要害怕，你會成為更好的自己。",
        ];
      case "D":
        return [
          "性歡愉",
          "sexual pleasure",
          "對你的愛，不只說說，因為剩下….都用做的。👌 💦 🍑今晚，我要你愛，我要你為了我變壞，如果可以，只想和你…回到那天相遇。",
          "愛情，笑起來很甜，嚐起來很鹹。",
          "白天只想讓你…心上有我，夜晚也想讓你身上有我。",
          "脫了衣服我是禽獸，穿上衣服我是衣冠禽獸！",
        ];
      case "E":
        return [
          "厭惡",
          "disgust",
          "面對討厭的人事物，唯一的解決辦法就是….讓他更討厭你🤪，物極必反、負負得正、愛拼才會贏。",
        ];
      case "F":
        return [
          "憤怒",
          "angry",
          "別惹我，否則我會讓你死得很有節奏感。媽媽說：讀書是為了心平氣和地跟傻逼說話，而健身是為了讓傻逼心平氣和地跟你說話。現在我明白了，謝謝那些曾經擊倒我的人，躺著真舒服。",
        ];
      case "G":
        return [
          "驚嚇",
          "terrified",
          "兄弟你說 ：你若不勇敢，誰替你堅強？當時，真的是害怕吉了， 要記住！情況越嚴重，越困難，就越需要堅定，別亂了陣腳。",
          "為什麼要怕鬼，害你的全是人。 人只要不失去方向，就不會失去自己！人生重要的不是所站的位置，而是所朝的方向。",
        ];
      case "H":
        return [
          "幸福滿足",
          "happy satisfied",
          "最近的你生活順利滿福堡、心靈富足比奇堡，樂悠悠的快樂好比海綿寶寶跟派大星，至於章魚哥？算了吧。保持你的好心情和正能量，沒事多喝水，多喝水沒事…",
        ];
    }
  }

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

  function getCharacter() {
    if (quizAns[1] === "1") {
      if (otherAns[1] === "myself") {
        return [
          "人",
          "people",
          "要好好愛自己，因為沒有人會愛你，夢見那個始終不離不棄的你，好好享受孤獨吧。一個人想著一個人，到頭來才發現，原來最長的戀愛，叫自戀。",
        ];
      } else if (otherAns[1] === "strangers") {
        return [
          "人",
          "people",
          "想念是會呼吸的痛，相信夢到的那個他在你的生命中佔了一席之地，人生的旅途一路顛簸，有人留下、有人離開，但這些都是為了讓你成為更完整、更完美的人。所以愛我別走～希望你愛的那個他都能留在你身邊。",
        ];
      } else if (otherAns[1] === "acquaintance") {
        return [
          "人",
          "people",
          "有些人跟牛排一樣，不要太熟比較好，來衝衝去衝衝，轟隆轟隆，別為了不屬於你的觀眾，演了一段你根本不喜歡的人生。",
        ];
      } else if (otherAns[1] === "significant other") {
        return [
          "人",
          "people",
          "對你而言，最遠的不是沒有緣分，而是從熟識變得陌生，對我而言，最遙遠的距離是他媽的星期一到星期五💩",
          "我喜歡你，就像你媽打你……不講道理。",
        ];
      }
    } else if (quizAns[1] === "2") {
      if (otherAns[1] === "positive") {
        return [
          "鬼神",
          "ghost",
          "R們R們，上帝關上一扇門，必定開啟一扇窗，讓你跳下去。日子過得好苦呀～靜下來多留意身旁的人事物，走走平時不會走的路，就算跌倒，也要豪邁地笑，是驚喜、是驚嚇？下一個轉角是什麼？拐個彎，搞不好幸運小精靈就在你身邊。",
        ];
      } else if (otherAns[1] === "negative") {
        return [
          "鬼神",
          "ghost",
          "夜路走多，總會遇到鬼😨，原來那不是別人，是藏在我們內心的魔鬼，總在夜闌人靜的時候跑出來，讓我們變得脆弱、不安。歇會歇會吧～～生活是否覺得疲憊了？那就對了！因為舒服是負責留給有錢人的🤭，笑一個吧，快樂快樂才叫做意義！",
        ];
      }
    } else if (quizAns[1] === "3") {
      if (otherAns[1] === "threatening") {
        return [
          "不存在的生物",
          "undefined mysterious animal",
          "有怪獸、大怪獸，一直纏著我～被生活壓的喘不過氣的你是不是要netflix and chill一下？現實生活就像是寶可夢ㄉ世界，面對火箭隊來勢洶洶ㄉ進擊，或許你需要一隻皮卡丘來跟你並肩作戰！試著讓自己放鬆一下吧！",
        ];
      } else if (otherAns[1] === "not threatening") {
        return [
          "不存在的生物",
          "undefined mysterious animal",
          "面對外物的紛紛擾擾，我不會眼睜睜讓你去送死，我會閉上眼睛。老話說得好呀：心靜則清，心清則明，當心真正沉靜下來之後，生活隨即而來也將變得輕鬆隨性。",
        ];
      }
    } else if (quizAns[1] === "4") {
      return [
        "動物",
        "animal",
        "動物是人類最好的朋友，從小我就開始培養最穩固的友誼，名叫侯友宜。",
      ];
    }
  }

  function getLifeStyle() {
    switch (quizAns[2]) {
      case "X":
        return [
          "自然現象",
          "natural",
          "世界上最寬闊的是海洋，比海洋更寬闊的是天空，在這大自然中，自然而然地忘卻生活中所有的不愉快，腦海裡滋生出許多美好的想法，心底也覺得像大海一樣很寬、很寬……宰相肚裡能撐船，而我撐的卻是整座食堂，人生苦短，再來給我三百碗…..",
        ];
      case "Y":
        return [
          "日常生活",
          "normal",
          "人生苦短，必須性感，每天來點儀式感。偶爾為生活添加一些樂子，替平凡加入一點美麗的藥水💦",
          "早起可以做很多事，比如說再睡個回籠覺。",
          "一早醒來我以為我長大了，原來是被子蓋橫了。",
          "不要放棄你的夢！繼續睡！棉被以外的地方，都是遠方，請先不要叫我起床。成人的世界除了長胖，一切都不容易。",
        ];
      case "Z":
        return [
          "小說情節",
          "novel",
          "想像力就是你的超能力，奶油獅都沒你這麼有創意！BLACKPINK的演唱會規模都不及你腦內的派對，天馬行空的你總是有機靈古怪的想法，有想法就去衝！get ‘em get ‘em",
          "很喜歡你的愚蠢，總是那麼富有想像力。",
        ];
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="bg-blue h-[2rem] md:h-[5rem] relative overflow-hidden">
        <div className="absolute inset-y-0 m-auto flex animate-marquee w-[200%]">
          <img className="w-[50%] h-auto" src={Marquee} />
          <img className="w-[50%] h-auto" src={Marquee} />
          <img className="w-[50%] h-auto" src={Marquee} />
          <img className="w-[50%] h-auto" src={Marquee} />
        </div>
      </div>
      <div className="bg-yellow absolute left-0 w-[2rem] md:w-[5rem] h-screen overflow-hidden">
        <div className="absolute inset-x-0 m-auto flex flex-col animate-marqueeV h-[200%]">
          <img className="h-[50%] md:h-[100%] w-auto" src={LeftMarquee} />
          <img className="h-[50%] md:h-[100%] w-auto" src={LeftMarquee} />
          <img className="h-[50%] md:h-[100%] w-auto" src={LeftMarquee} />
          <img className="h-[50%] md:h-[100%] w-auto" src={LeftMarquee} />
        </div>
      </div>
      <div className="bg-purple absolute right-0 w-[2rem] md:w-[5rem] h-screen overflow-hidden">
        <div className="absolute inset-x-0 m-auto flex flex-col animate-marqueeV h-[200%]">
          <img className="h-[50%] md:h-[100%] w-auto" src={RightMarquee} />
          <img className="h-[50%] md:h-[100%] w-auto" src={RightMarquee} />
          <img className="h-[50%] md:h-[100%] w-auto" src={RightMarquee} />
          <img className="h-[50%] md:h-[100%] w-auto" src={RightMarquee} />
        </div>
      </div>
      <img
        src={Loading5}
        className={
          "absolute -right-[0.1rem] -top-[0.1rem] w-[2.13rem] h-[2.13rem] md:w-[5.1rem] md:h-[5.2rem]"
        }
      />
      <img
        src={Loading2}
        className={
          "absolute -left-[0.1rem] -top-[0.1rem] w-[2.13rem] h-[2.13rem] md:w-[5.13rem] md:h-[5.2rem]"
        }
      />

      <div className="w-[80%] mx-auto md:w-full px-4 md:pt-6 pb-12 h-screen overflow-scroll">
        <img
          className="m-auto h-[8rem] md:h-[12rem] mb-2"
          src={signImgPath}
          alt="yourName"
        />
        <div className="mx-auto w-full max-w-3xl bg-white px-2 pb-8">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-t-2 border-blue px-4 py-6 md:py-8 text-left text-sm font-medium focus:outline-none relative z-[20]">
                  <p className="md:text-lg text-blue">
                    (1) <br />有{percentageArray[0]}%的人也跟你一樣做了（{" "}
                    {getEmotion()[0]} ）的夢 <br />
                    BASED ON YOUR CHOICE, <br />
                    YOU HAVE A{" "}
                    <span className="font-padyakke text-red">
                      ({getEmotion()[1]})
                    </span>
                    <span className="text-red"> {getEmotion()[0]} </span>
                    DREAM.
                  </p>
                  <ChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-8 text-sm md:text-md text-red relative flex items-end z-[10]">
                  <img
                    className={`max-w-[100%] md:max-w-[50%] mx-auto absolute z-[-1] -translate-y-[3rem] md:translate-y-0 left-0 right-0`}
                    src={getImageUrl("quiz/showResult", `${quizAns[0]}.svg`)}
                  />

                  <p className="underline-offset-1 decoration-red decoration-solid underline">
                    {quizAns[0] === "D"
                      ? getEmotion()[fourChoices]
                      : quizAns[0] === "A" ||
                        quizAns[0] === "B" ||
                        quizAns[0] === "G"
                      ? getEmotion()[twoChoices]
                      : getEmotion()[2]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-t-2 border-blue px-4 py-6 md:py-8 text-left text-sm font-medium focus:outline-none relative z-[20]">
                  <p className="md:text-lg text-blue">
                    (2) <br />而{percentageArray[1]}%的人夢境中的主角是（
                    {getCharacter()[0]}） <br />
                    WITH
                    <span className="font-padyakke text-red">
                      ({getCharacter()[1]})
                    </span>
                    <span className="text-red">{getCharacter()[0]}</span>
                    BECOMING YOUR DREAM’S <br />
                    MAIN OBJECT.{" "}
                  </p>
                  <ChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-8 text-sm md:text-md text-red relative flex items-end z-[10] w-full">
                  <img
                    className="max-w-[100%] md:max-w-[50%] mx-auto absolute z-[-1] -translate-y-[3rem] md:translate-y-0 left-0 right-0"
                    src={getImageUrl("quiz/showResult", `${quizAns[1]}.svg`)}
                  />
                  <p className="underline-offset-1 decoration-red decoration-solid underline">
                    {otherAns[1] === "significant other"
                      ? getCharacter()[twoChoices]
                      : getCharacter()[2]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-between border-t-2  border-blue px-4 py-6 md:py-8 text-left text-sm font-medium focus:outline-none relative z-[20] ${
                    !open && "border-b-2"
                  }`}
                >
                  <p className="md:text-lg text-blue">
                    (3) <br />
                    {percentageArray[1]}%的人做了有關（
                    {getLifeStyle()[0]}） 的夢
                    <br /> AND YOUR DREAM IS ALL ABOUT{""}
                    <span className="font-padyakke text-red">
                      ({getLifeStyle()[1]})
                    </span>
                    <span className="text-red">{getLifeStyle()[0]}</span>
                  </p>
                  <ChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className={`px-4 py-8 text-sm md:text-md text-red relative flex items-end z-[10] ${
                    open && "border-b-2 border-blue"
                  }`}
                >
                  <img
                    className="max-w-[100%] md:max-w-[50%] mx-auto absolute z-[-1] -translate-y-[3rem] md:translate-y-0 left-0 right-0"
                    src={getImageUrl("quiz/showResult", `${quizAns[2]}.svg`)}
                  />

                  <p className="underline-offset-1 decoration-red decoration-solid underline">
                    {quizAns[2] === "Y"
                      ? getLifeStyle()[fourChoices]
                      : quizAns[2] === "X"
                      ? getLifeStyle()[2]
                      : getLifeStyle()[twoChoices]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div
            className={`px-8 py-2 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] text-darkgreen border-2 border-darkgreen rounded-full w-max mx-auto mt-12 mb-12 hover:bg-darkgreen hover:text-white transition animate-lightening2`}
            onClick={() => setQuestionNum(9)}
          >
            生成解夢卡
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowResultCard = ({ signImgPath, quizAns }) => {
  const [resultCardPath, setResultCardPath] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [cardNo, setCardNo] = useState(1);
  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
  }

  function getResultCard() {
    const imgFileName = `${quizAns.join("")}.jpg`;
    setResultCardPath(imgFileName);
  }

  const downloadImage = () => {
    const element = document.getElementById("combinedImg");
    element.classList.remove("animate-rotate360");
    html2canvas(element, { backgroundColor: null }).then((canvas) => {
      const imgSrc = canvas.toDataURL();
      const link = document.createElement("a");
      link.download = `sheep_${String(cardNo).padStart(3, "0")}.png`;
      link.href = imgSrc;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setCardNo(cardNo + 1);
    });
    element.classList.add("animate-rotate360");
  };

  //長按儲存
  const onLongPressDownload = useLongPress(() => {
    const element = document.getElementById("combinedImg");
    element.classList.remove("animate-rotate360");

    html2canvas(element, { backgroundColor: null }).then((canvas) => {
      const imgSrc = canvas.toDataURL();

      // 使用 FileTransfer 插件下載圖片
      const fileTransfer = new FileTransfer();
      const fileName = `sheep_${String(cardNo).padStart(3, "0")}.png`;
      const fileUrl =
        cordova.file.externalRootDirectory + "DCIM/Camera/" + fileName;
      const uri = encodeURI(imgSrc);
      fileTransfer.download(
        uri,
        fileUrl,
        (entry) => {
          console.log("Download success: " + entry.toURL());
        },
        (error) => {
          console.log("Download error: " + error);
        },
        false
      );

      setCardNo(cardNo + 1);
    });

    element.classList.add("animate-rotate360");
  });

  useEffect(() => {
    getResultCard();
    setTimeout(() => setIsShow(false), 2000);
    setTimeout(() => setIsOpen(true), 2100);
  }, []);

  return (
    <div
      className="h-full w-screen md:flex justify-center items-center relative"
      {...onLongPressDownload()}
    >
      <img
        className="absolute md:static inset-y-0 h-min w-full -top-36 md:w-[80%] m-auto"
        src={signImgPath}
      />
      <div
        className={`absolute flex justify-center py-8 ${
          !isShow && !isOpen && "animate-rotate360"
        } bg-transparent`}
        id="combinedImg"
      >
        <img
          className="absolute scale-[0.3] md:scale-[0.2] z-[20] top-6 -left-4 md:-top-3 md:-left-8 rotate-6"
          src={signImgPath}
        />
        <img
          className="w-[50%] md:w-[35%] rotate-3"
          src={getImageUrl("resultCards", resultCardPath)}
        />
      </div>
      <div className="absolute z-10 bottom-[15%] md:bottom-[10%] right-[5%] flex flex-col md:flex-row gap-2 md:gap-4 md:gap-8 items-center">
        <div
          className="h-[3.5rem] md:h-[4.5rem] flex flex-col items-center justify-between cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] text-sm md:text-base"
          onClick={downloadImage}
        >
          <Download />
          <p className="underline-offset-1 decoration-black decoration-solid underline">
            DOWNLOAD
          </p>
        </div>
        <div
          className={`h-[3.5rem] md:h-[4.5rem] flex flex-col items-center justify-between cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]  text-sm md:text-base`}
          onClick={() => navigate("/")}
        >
          <Home />
          <p className="underline-offset-1 decoration-black decoration-solid underline">
            HOME
          </p>
        </div>
        <div
          className={`h-[3.5rem] md:h-[4.5rem] flex flex-col items-center justify-between cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]  text-sm md:text-base`}
        >
          <Share />
          <p className="underline-offset-1 decoration-black decoration-solid underline">
            SHARE
          </p>
        </div>
      </div>

      {/* 1st modal */}
      <Transition appear show={isShow} as={Fragment}>
        <Dialog as="div" className="relative z-[30]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 z-[29] overflow-hidden" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[30]">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform rounded-2xl bg-white px-6  py-8 text-left align-middle shadow-xl transition-all text-center relative z-[10]">
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-md font-medium">
                      獨一無二の解夢卡出爐啦！ <br />
                      YOUR ONE AND ONLY DREAMCARD IS NOW READY!
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* 2nd modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[30]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 z-[29] overflow-hidden" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[30]">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform rounded-2xl bg-white px-6 pt-16 md:pt-24 pb-12 text-left align-middle shadow-xl transition-all text-center relative z-[10]">
                  <img
                    className="w-[80%] absolute left-0 right-0 mx-auto -top-[10%] md:-top-[20%] z-[20]"
                    src={Logo}
                  />
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-md font-medium">
                      1.下載屬於你的解夢卡 <br />
                      CLICK BUTTON TO DOWNLOAD THE DREAMCARD.
                    </p>
                    <img className="w-[1.5rem]" src={Arrow} />
                    <p className="text-md font-medium">
                      2.追蹤「一隻羊，兩隻羊」IG <br />
                      FOLLOW OUR INSTARGRAM.
                    </p>

                    <img className="w-[1.5rem]" src={Arrow} />
                    <p className="text-md font-medium">
                      3.分享出去並標記我們！
                      <br />
                      REMEMBER TO SHARE AND TAG US!
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

const Quiz = ({ signImgPath }) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [quizAns, setQuizAns] = useState([]);

  const [otherAns, setOtherAns] = useState([]);

  function handleSaveAns(num, value) {
    if (questionNum % 2 !== 0) {
      const ansArray = quizAns.slice();
      ansArray[num] = value;

      setQuizAns(ansArray);
    } else {
      const otherAnsArray = otherAns.slice();
      otherAnsArray[num] = value;

      setOtherAns(otherAnsArray);
    }

    if (questionNum < 6) setQuestionNum(questionNum + 1);
  }

  return (
    <div className="flex flex-col h-screen relative">
      {questionNum <= 6 && (
        <div className="animate-fadeSlideIn">
          <Question1
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            quizAns={quizAns}
          />

          <Question2
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            otherAns={otherAns}
          />
          <Question3
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            quizAns={quizAns}
          />
          <Question4
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            otherAns={otherAns}
            quizAns={quizAns}
          />
          <Question5
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            quizAns={quizAns}
          />
          <Question6
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            otherAns={otherAns}
          />
        </div>
      )}
      {questionNum === 7 && (
        <GeneratingResult setQuestionNum={setQuestionNum} />
      )}
      {questionNum === 8 && (
        <ShowResult
          quizAns={quizAns}
          otherAns={otherAns}
          setQuestionNum={setQuestionNum}
          signImgPath={signImgPath}
        />
      )}
      {questionNum === 9 && (
        <ShowResultCard quizAns={quizAns} signImgPath={signImgPath} />
      )}
    </div>
  );
};

export default Quiz;
