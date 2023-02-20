import { useState } from "react";
import { Disclosure } from "@headlessui/react";
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
                onClick={() => handleSaveAns(0, "A")}
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
                onClick={() => handleSaveAns(0, "B")}
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
                onClick={() => handleSaveAns(0, "C")}
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
                onClick={() => handleSaveAns(0, "D")}
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
                onClick={() => handleSaveAns(0, "E")}
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
                onClick={() => handleSaveAns(0, "F")}
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
                onClick={() => handleSaveAns(0, "G")}
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
                onClick={() => handleSaveAns(0, "H")}
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
                onClick={() => handleSaveAns(0, "Y")}
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
                onClick={() => handleSaveAns(0, "N")}
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
                onClick={() => handleSaveAns(1, "2")}
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
                onClick={() => handleSaveAns(1, "3")}
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
                onClick={() => handleSaveAns(1, "1")}
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
                onClick={() => handleSaveAns(1, "4")}
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
  quizAns,
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
          <div
            className={`flex justify-center gap-24 ${
              quizAns[1] === "1" ? " h-[35%]" : " h-[16%] mb-[3%]"
            } `}
          >
            {quizAns[1] === "1" && (
              <>
                <div className="w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "myself" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "myself")}
                  >
                    <span
                      className={`group-hover:hidden text-2xl ${
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
                    className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "strangers" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "strangers")}
                  >
                    <span
                      className={`group-hover:hidden text-2xl ${
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
                <div className="w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "acquaintance" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "acquaintance")}
                  >
                    <span
                      className={`group-hover:hidden text-2xl ${
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
                    className={`flex justify-between px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "significant other" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "significant other")}
                  >
                    <span
                      className={`group-hover:hidden text-2xl ${
                        otherAns[1] === "significant other" && "hidden"
                      }`}
                    >
                      significant other
                    </span>
                    <Other
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "significant other"
                          ? "block fill-purple"
                          : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "significant other" && "text-purple"
                      }`}
                    >
                      重要他人（家人、伴侶、照顧者、
                      <br />
                      生命中重要的人、前任）
                    </p>
                  </div>
                </div>
              </>
            )}
            {quizAns[1] === "2" && (
              <>
                <div className="w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "positive" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "positive")}
                  >
                    <span
                      className={`group-hover:hidden text-2xl ${
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
                <div className="w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "negative" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "negative")}
                  >
                    <span
                      className={`group-hover:hidden text-2xl ${
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
                <div className="w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "threatening" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "threatening")}
                  >
                    <span
                      className={`group-hover:hidden text-2xl ${
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
                      正向的
                    </p>
                  </div>
                </div>
                <div className="w-[40%] flex flex-col font-semibold">
                  <div
                    className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "not threatening" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "not threatening")}
                  >
                    <span
                      className={`group-hover:hidden text-2xl ${
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
                      負面的
                    </p>
                  </div>
                </div>
              </>
            )}
            {quizAns[1] === "4" && (
              <>
                <div className="w-[40%] mx-auto font-semibold">
                  <div
                    className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
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
                  className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                    quizAns[2] === "Y" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(2, "Y")}
                >
                  <span
                    className={`group-hover:hidden text-2xl ${
                      quizAns[2] === "Y" && "hidden"
                    }`}
                  >
                    normal
                  </span>
                  <Normal
                    className={`w-[20%] group-hover:block group-hover:fill-blue ${
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
                  className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                    quizAns[2] === "X" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(2, "X")}
                >
                  <span
                    className={`group-hover:hidden text-2xl ${
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
                  className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                    quizAns[2] === "Z" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(2, "Z")}
                >
                  <span
                    className={`group-hover:hidden text-2xl ${
                      quizAns[2] === "Z" && "hidden"
                    }`}
                  >
                    novel
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
          <div className="flex items-end justify-between h-[36%]">
            <div className="w-[30%] flex flex-col font-semibold h-full">
              <div
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[2] === "recognize" && "bg-black"
                }`}
                onClick={() => handleSaveAns(2, "recognize")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[2] === "not recognized" && "bg-black"
                }`}
                onClick={() => handleSaveAns(2, "not recognized")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
            <div className="w-[30%] ml-[5%] flex flex-col font-semibold h-full">
              <div
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[3] === "open" && "bg-black"
                }`}
                onClick={() => handleSaveAns(3, "open")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
                className={`flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[3] === "sealed" && "bg-black"
                }`}
                onClick={() => handleSaveAns(3, "sealed")}
              >
                <span
                  className={`group-hover:hidden text-2xl ${
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
            <div
              className="bg-blue w-min ml-auto px-6 py-3 rounded-full cursor-pointer"
              onClick={checkNotEmptyAns}
            >
              <Finger className="w-[56px] h-[25px] fill-yellow" />
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

const ShowResult = ({ quizAns, otherAns }) => {
  console.log(quizAns);
  console.log(otherAns);

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
    getRandomPercentage(100, 1),
    getRandomPercentage(100, 1),
    getRandomPercentage(100, 1),
  ];
  const twoChoices = getRandomPercentage(3, 2);
  const fourChoices = getRandomPercentage(5, 2);

  function getRandomPercentage(max, min) {
    return Math.trunc(Math.random() * max + min);
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
      <div className="bg-blue">
        <img src={Marquee} />
      </div>
      <div className="bg-yellow absolute left-0 w-[77px] h-min">
        <img className="object-fit" src={LeftMarquee} />
      </div>
      <div className="bg-purple absolute right-0 w-[77px] h-min">
        <img src={RightMarquee} />
      </div>
      <img src={Loading5} className={"absolute right-0 top-0 w-[4.83rem]"} />
      <img src={Loading2} className={"absolute left-0 top-0 w-[4.83rem]"} />
      {/*  */}
      <div className="w-full px-4 py-12 h-screen overflow-scroll">
        <div className="mx-auto w-full max-w-3xl bg-white px-2 pb-8">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-t-2 border-blue px-4 py-8 text-left text-sm font-medium focus:outline-none relative z-[20]">
                  <p className="text-lg text-blue">
                    (1) <br />有{percentageArray[0]}%的人也跟你一樣做了（{" "}
                    {getEmotion()[0]} ）的夢 <br />
                    BASED ON YOUR CHOICE, <br />
                    YOU HAVE A{" "}
                    <span className="font-padyakke">
                      ({getEmotion()[1]}) {getEmotion()[0]}{" "}
                    </span>
                    DREAM.
                  </p>
                  <ChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-8 text-md text-red relative h-[15rem] flex items-end z-[10]">
                  <img
                    className={`${
                      quizAns[0] === "G" ? "max-w-[20%]" : "max-w-[30%]"
                    }  mx-auto absolute z-[-1] -translate-y-[5rem] left-0 right-0`}
                    src={getImageUrl("stickers", `${quizAns[0]}.svg`)}
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
                <Disclosure.Button className="flex w-full justify-between border-t-2 border-blue px-4 py-8 text-left text-sm font-medium focus:outline-none relative z-[20]">
                  <p className="text-lg text-blue">
                    (2) <br />而{percentageArray[1]}%的人夢境中的主角是（
                    {getCharacter()[0]}） <br />
                    WITH
                    <span className="font-padyakke">
                      ({getCharacter()[1]}) {getCharacter()[0]}
                    </span>{" "}
                    BECOMING YOUR DREAM’S <br />
                    MAIN OBJECT.{" "}
                  </p>
                  <ChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-8 text-md text-red relative h-[15rem] flex items-end z-[10] w-full">
                  <img
                    className="max-w-[30%] mx-auto absolute z-[-1] -translate-y-[5rem] left-0 right-0"
                    src={getImageUrl("stickers", `${quizAns[1]}.svg`)}
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
                <Disclosure.Button className="flex w-full justify-between border-t-2 border-blue px-4 py-8 text-left text-sm font-medium focus:outline-none relative z-[20]">
                  <p className="text-lg text-blue">
                    (3) <br />
                    {percentageArray[1]}%的人做了有關（
                    {getLifeStyle()[0]}） 的夢
                    <br /> AND YOUR DREAM IS ALL ABOUT{""}
                    <span className="font-padyakke">
                      ({getLifeStyle()[1]}) {getLifeStyle()[0]}
                    </span>
                  </p>
                  <ChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-8 text-md text-red relative h-[15rem] flex items-end z-[10]">
                  <img
                    className="max-w-[30%] mx-auto absolute z-[-1] -translate-y-[5rem] left-0 right-0"
                    src={getImageUrl("stickers", `${quizAns[2]}.svg`)}
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
          <div className="px-8 py-2 cursor-pointer border-2 border-black rounded-full w-max mx-auto mt-12 mb-12 hover:bg-black hover:text-white transition">
            生成解夢卡
          </div>
        </div>
      </div>
    </div>
  );
};

const Quiz = () => {
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
        </>
      )}
      {questionNum === 7 && (
        <GeneratingResult setQuestionNum={setQuestionNum} />
      )}
      {questionNum === 8 && (
        <ShowResult quizAns={quizAns} otherAns={otherAns} />
      )}
    </div>
  );
};

export default Quiz;