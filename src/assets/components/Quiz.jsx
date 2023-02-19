import { useState } from "react";
import { Transition } from "@headlessui/react";
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

const Question1 = ({ questionNum, setQuestionNum, handleSaveAns, quizAns }) => {
  return (
    <div
      className={` bg-red flex px-20 flex-col justify-between overflow-hidden absolute w-full ${
        questionNum === 1 ? "h-[75%] py-16" : "h-[5%]"
      }`}
    >
      <p
        className={`${
          questionNum === 1 && "hidden"
        } text-xl absolute inset-y-0 h-min my-auto font-chakra left-8`}
      >
        1
      </p>
      {questionNum === 1 && (
        <>
          <div className="flex gap-6 max-w-1/2 items-end">
            <Title1 className="w-[10%]" />
            <div className="text-xl font-light">
              <p>請試著回憶你的夢境，當下的情緒是？</p>
              <p className="font-medium mt-2">
                TRY TO RECALL YOUR DREAM, <br />
                WHAT’S YOUR MOOD IN THE MOMENT?
              </p>
            </div>
          </div>
          <div className="flex justify-between h-[62%]">
            <div className="w-[45%] flex flex-col font-semibold">
              <div
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "A" && "bg-black"
                }`}
                onClick={() => handleSaveAns("A")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "B" && "bg-black"
                }`}
                onClick={() => handleSaveAns("B")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "C" && "bg-black"
                }`}
                onClick={() => handleSaveAns("C")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "D" && "bg-black"
                }`}
                onClick={() => handleSaveAns("D")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
            <div className="w-[45%] flex flex-col font-semibold">
              <div
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "E" && "bg-black"
                }`}
                onClick={() => handleSaveAns("E")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "F" && "bg-black"
                }`}
                onClick={() => handleSaveAns("F")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "G" && "bg-black"
                }`}
                onClick={() => handleSaveAns("G")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[0] === "H" && "bg-black"
                }`}
                onClick={() => handleSaveAns("H")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
      className={` bg-lightgreen flex px-20 flex-col justify-between overflow-hidden absolute w-full ${
        questionNum === 2
          ? "h-[75%] py-16 top-[5%]"
          : questionNum === 1
          ? "h-[5%] top-[75%]"
          : "h-[5%] top-[5%]"
      }`}
    >
      <p
        className={`${
          questionNum === 2 && "hidden"
        } text-xl absolute inset-y-0 h-min my-auto font-chakra left-8`}
      >
        2
      </p>
      {questionNum === 2 && (
        <>
          <div className="flex gap-6 max-w-1/2 items-start">
            <Title2 className="w-[10%]" />
            <div className="text-xl font-light">
              <p>是否曾經發生在現實生活中，這個夢是你的真實回憶嗎？</p>
              <p className="font-medium mt-2">
                HAS IT EVER HAPPENED IN THE REAL LIFE? <br />
                IS IT A REAL MEMORY OF YOURS?
              </p>
            </div>
          </div>
          <div className="flex justify-between h-[28%]">
            <div className="w-[20%] mr-12 ml-auto flex flex-col font-semibold">
              <div
                className={`flex justify-between text-xl px-4 py-4 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[0] === "Y" && "bg-black"
                }`}
                onClick={() => handleSaveAns("Y")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
                    otherAns[0] === "Y" && "hidden"
                  }`}
                >
                  yes
                </span>
                <Yes
                  className={`w-[20%] group-hover:fill-lightgreen group-hover:block ${
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
                className={`flex justify-between text-xl px-4 py-4 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[0] === "N" && "bg-black"
                }`}
                onClick={() => handleSaveAns("N")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
                    otherAns[0] === "N" && "hidden"
                  }`}
                >
                  no
                </span>
                <No
                  className={`w-[20%] group-hover:fill-lightgreen group-hover:block ${
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
      className={`bg-lakegreen flex px-20 flex-col justify-between overflow-hidden absolute w-full ${
        questionNum === 3
          ? "h-[75%] py-16 top-[10%]"
          : questionNum < 3
          ? "h-[5%] top-[80%]"
          : "h-[5%] top-[10%]"
      }`}
    >
      <p
        className={`${
          questionNum === 3 && "hidden"
        } text-xl absolute inset-y-0 h-min my-auto font-chakra left-8`}
      >
        3
      </p>
      {questionNum === 3 && (
        <>
          <div className="flex gap-6 items-center justify-between">
            <div className="text-xl font-light">
              <p>該夢境中的主角是？可以是自己、物品或動物。</p>
              <p className="font-medium mt-2">
                WHAT IS THE MAIN PROTAGONIST OF THIS DREAM?
                <br />
                IT COULD BE YOURSELF, AN OBJECT OR ANIMAL.
              </p>
            </div>
            <Title3 className="w-[10%]" />
          </div>
          <div className="flex justify-between h-[62%]">
            <div className="w-[60%] flex flex-col font-semibold">
              <div
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "2" && "bg-black"
                }`}
                onClick={() => handleSaveAns("2")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "3" && "bg-black"
                }`}
                onClick={() => handleSaveAns("3")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "1" && "bg-black"
                }`}
                onClick={() => handleSaveAns("1")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "4" && "bg-black"
                }`}
                onClick={() => handleSaveAns("4")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
}) => {
  return (
    <div
      className={`bg-purple flex px-20 flex-col justify-between overflow-hidden absolute w-full ${
        questionNum === 4
          ? "h-[75%] py-16 top-[15%]"
          : questionNum < 4
          ? "h-[5%] top-[85%]"
          : "h-[5%] top-[15%]"
      }`}
    >
      <p
        className={`${
          questionNum === 4 && "hidden"
        } text-xl absolute inset-y-0 h-min my-auto font-chakra left-8`}
      >
        4
      </p>
      {questionNum === 4 && (
        <>
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <Title4 className="w-[12%]" />
            <div className="text-xl font-light">
              <p>承上題，請選擇以下項目</p>
              <p className="font-medium mt-2">
                FOLLOWING THE PREVIOUS QUESTION, WHAT SPECIFIC IT IS?
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-24 h-[30%]">
            <div className="w-[30%] flex flex-col font-semibold">
              <div
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 ${
                  otherAns[1] === "3" && "bg-black"
                }`}
                onClick={() => handleSaveAns("3")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
                    otherAns[1] === "3" && "hidden"
                  }`}
                >
                  undefined mysterious animal
                </span>
                <Nonexisted
                  className={`w-[70%] group-hover:block group-hover:fill-lakegreen ${
                    otherAns[1] === "3" ? "block fill-lakegreen" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-lakegreen ${
                    otherAns[1] === "3" && "text-lakegreen"
                  }`}
                >
                  不存在的生物
                </p>
              </div>
              <div
                className="flex justify-between text-md px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1"
                onClick={(e) => handleSaveAns(e)}
              >
                <span className="group-hover:text-purple">自己</span>
                <p className="group-hover:text-purple">myself</p>
              </div>
              <div
                className="flex justify-between text-md px-4 py-3 cursor-pointer border-black border-b-2 group hover:bg-black items-center flex-1"
                onClick={(e) => handleSaveAns(e)}
              >
                <span className="group-hover:text-purple">陌生人</span>
                <p className="group-hover:text-purple">strangers</p>
              </div>
            </div>
            <div className="w-[40%] flex flex-col font-semibold">
              <div
                className="flex justify-between text-md px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1"
                onClick={(e) => handleSaveAns(e)}
              >
                <span className="group-hover:text-purple">
                  知道或認得但不認識的人
                </span>
                <p className="group-hover:text-purple">
                  people you know <br />
                  but not familiar with
                </p>
              </div>
              <div
                className="flex justify-between text-md px-4 py-3 cursor-pointer border-black border-b-2 group hover:bg-black items-center flex-1"
                onClick={(e) => handleSaveAns(e)}
              >
                <span className="group-hover:text-purple">
                  重要他人（家人、伴侶、照顧者、
                  <br />
                  生命中重要的人、前任）
                </span>
                <p className="group-hover:text-purple">significant other</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Question5 = ({ questionNum, setQuestionNum, handleSaveAns, quizAns }) => {
  return (
    <div
      className={`bg-blue flex px-20 flex-col justify-between overflow-hidden absolute w-full ${
        questionNum === 5
          ? "h-[75%] py-16 top-[20%]"
          : questionNum < 5
          ? "h-[5%] top-[90%]"
          : "h-[5%] top-[20%]"
      }`}
    >
      <p
        className={`${
          questionNum === 5 && "hidden"
        } text-xl absolute inset-y-0 h-min my-auto font-chakra left-8`}
      >
        5
      </p>
      {questionNum === 5 && (
        <>
          <div className="flex items-end justify-center h-full">
            <div className="flex flex-col justify-between h-full w-[45%]">
              <div className="text-xl font-light">
                <p>該夢境的主要走向是?</p>
                <p className="font-medium mt-2">
                  HOW DOES THE DREAM’S PLOT DEVELOPES?
                </p>
              </div>
              <Title5 className="w-[25%]" />
            </div>
            <div className="flex justify-center gap-24 w-[55%] h-[48%]">
              <div className="w-full flex flex-col font-semibold">
                <div
                  className="flex justify-between text-md px-4 pt-4 pb-1 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1"
                  onClick={(e) => handleSaveAns(e)}
                >
                  <Normal className="w-[20%] group-hover:fill-lakegreen" />
                  <p className="group-hover:text-blue -translate-y-2">
                    日常生活
                  </p>
                </div>
                <div
                  className="flex justify-between text-md px-4 py-6 cursor-pointer border-black border-b-2 group hover:bg-black items-center flex-1"
                  onClick={(e) => handleSaveAns(e)}
                >
                  <Natural className="w-[25%] group-hover:fill-lakegreen" />
                  <p className="group-hover:text-blue">自然現象</p>
                </div>
                <div
                  className="flex justify-between text-md px-4 py-5 cursor-pointer border-black border-b-2 group hover:bg-black items-center flex-1"
                  onClick={(e) => handleSaveAns(e)}
                >
                  <Novel className="w-[45%] group-hover:fill-lakegreen" />
                  <p className="group-hover:text-blue">小說情節</p>
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
  return (
    <div
      className={`bg-yellow flex px-20 flex-col justify-between overflow-hidden absolute w-full ${
        questionNum === 6
          ? "h-[75%] py-16 top-[25%]"
          : questionNum < 6
          ? "h-[5%] top-[95%]"
          : "h-[5%] top-[25%]"
      }`}
    >
      <p
        className={`${
          questionNum === 6 && "hidden"
        } text-xl absolute inset-y-0 h-min my-auto font-chakra left-8`}
      >
        6
      </p>
      {questionNum === 6 && (
        <>
          <div className="flex gap-6 items-start justify-between">
            <div className="text-xl font-light">
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
            <Title6 className="w-[15%]" />
          </div>
          <div className="flex items-end justify-between h-[62%]">
            <div className="w-[30%] flex flex-col font-semibold h-full">
              <div
                className="flex justify-between text-xl px-4 py-4 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1"
                onClick={(e) => handleSaveAns(e)}
              >
                <span className="group-hover:hidden text-2xl">recognize</span>
                <Recognized className="w-[46%] hidden group-hover:fill-yellow group-hover:block" />
                <p className="group-hover:text-yellow">認得</p>
              </div>
              <div
                className="flex justify-between text-xl px-4 py-4 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1"
                onClick={(e) => handleSaveAns(e)}
              >
                <span className="group-hover:hidden text-2xl">
                  not recognized
                </span>
                <Notrecognized className="w-[46%] hidden group-hover:fill-yellow group-hover:block" />
                <p className="group-hover:text-yellow">不認得</p>
              </div>
              <div
                className="flex justify-between text-xl px-4 py-4 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1"
                onClick={(e) => handleSaveAns(e)}
              >
                <span className="group-hover:hidden text-2xl">open</span>
                <Open className="w-[30%] hidden group-hover:fill-yellow group-hover:block" />
                <p className="group-hover:text-yellow">開放</p>
              </div>
              <div
                className="flex justify-between text-xl px-4 py-4 cursor-pointer border-black border-b-2 group hover:bg-black items-center flex-1"
                onClick={(e) => handleSaveAns(e)}
              >
                <span className="group-hover:hidden text-2xl">sealed</span>
                <Sealed className="w-[30%] hidden group-hover:fill-yellow group-hover:block" />
                <p className="group-hover:text-yellow">密閉</p>
              </div>
            </div>
            <div
              className="bg-blue w-min ml-auto px-6 py-3 rounded-full cursor-pointer"
              onClick={() => setQuestionNum(questionNum + 1)}
            >
              <Finger className="w-[56px] h-[25px] fill-yellow" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const GeneratingResult = () => {
  return (
    <div className="max-w-[50%] m-auto text-center">
      <div className="flex m-auto justify-center">
        <img className="w-[5rem]" src={Loading1} alt="Loading1" />
        <img className="w-[5rem]" src={Loading2} alt="Loading2" />
        <img className="w-[5rem]" src={Loading3} alt="Loading3" />
        <img className="w-[5rem]" src={Loading4} alt="Loading4" />
      </div>
      <p className="text-lg mt-4">
        WHAT YOU DREAM LEADS YOU BECOMING A BETTER MAN.
      </p>
      <span className="block animate-loaded h-[1rem] bg-blue mt-4" />
    </div>
  );
};

const Quiz = () => {
  const [questionNum, setQuestionNum] = useState(1);
  const [quizAns, setQuizAns] = useState([]);

  const [otherAns, setOtherAns] = useState([]);

  function handleSaveAns(value) {
    if (questionNum % 2 !== 0) {
      const ansArray = quizAns.slice();
      if (questionNum === 1) {
        ansArray[0] = value;
      } else if (questionNum === 3) {
        ansArray[1] = value;
      } else if (questionNum === 5) {
        ansArray[2] = value;
      }

      setQuizAns(ansArray);
    } else {
      const otherAnsArray = otherAns.slice();
      if (questionNum === 2) {
        otherAnsArray[0] = value;
      } else if (questionNum === 4) {
        otherAnsArray[1] = value;
      } else if (questionNum === 6) {
        otherAnsArray[2] = value;
      }
      setOtherAns(otherAnsArray);
    }

    if (questionNum < 4) setQuestionNum(questionNum + 1);
  }

  return (
    <div className="flex flex-col h-screen relative">
      {questionNum <= 6 && (
        <>
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
        </>
      )}
      {questionNum === 7 && <GeneratingResult />}
    </div>
  );
};

export default Quiz;
