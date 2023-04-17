import { ReactComponent as Acquaintance } from "../../assets/images/quiz/4/acquaintance.svg";
import { ReactComponent as Myself } from "../../assets/images/quiz/4/myself.svg";
import { ReactComponent as Negative } from "../../assets/images/quiz/4/negative.svg";
import { ReactComponent as None } from "../../assets/images/quiz/4/none.svg";
import { ReactComponent as NotThreatening } from "../../assets/images/quiz/4/notthreatening.svg";
import { ReactComponent as Other } from "../../assets/images/quiz/4/other.svg";
import { ReactComponent as Positive } from "../../assets/images/quiz/4/positive.svg";
import { ReactComponent as Strangers } from "../../assets/images/quiz/4/strangers.svg";
import { ReactComponent as Threatening } from "../../assets/images/quiz/4/threatening.svg";
import { ReactComponent as Title4 } from "../../assets/images/quiz/4/title.svg";
const Question4 = ({ questionNum, setQuestionNum, handleSaveAns, otherAns, quizAns }) => {
  return (
    <div
      className={`bg-purple flex px-4 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[17] ${
        questionNum <= 4
          ? "h-[92%] md:h-[90%] pt-36 md:pt-48 pb-16 animate-slideDown"
          : "h-[16%] md:h-[20%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 4 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(4)}>
        <p>IV.</p>
        <p>FOURTH</p>
      </div>

      {questionNum === 4 && (
        <>
          <div className='flex flex-col gap-6 items-center justify-center text-center'>
            <Title4 className='w-[40%] md:w-[12%]' />
            <div className='text-sm md:text-xl font-medium'>
              <p>承上題，請選擇以下項目</p>
              <p className='font-medium mt-2'>
                FOLLOWING THE PREVIOUS QUESTION, WHAT SPECIFIC IT IS?
              </p>
            </div>
          </div>
          <div
            className={`md:flex justify-center gap-24 ${
              quizAns[1] === "1" ? "md:h-[35%]" : "md:h-[16%] md:mb-[3%]"
            } `}>
            {quizAns[1] === "1" && (
              <>
                <div className='w-[90%] mx-auto md:w-[40%] flex flex-col font-semibold'>
                  <div
                    className={`flex justify-between md:text-xl p-2 cursor-custom border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "myself" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "myself")}>
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "myself" && "hidden"
                      }`}>
                      myself
                    </span>
                    <Myself
                      className={`w-[30%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "myself" ? "block fill-purple" : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "myself" && "text-purple"
                      }`}>
                      自己
                    </p>
                  </div>
                  <div
                    className={`flex justify-between md:text-xl p-2 cursor-custom border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "strangers" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "strangers")}>
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "strangers" && "hidden"
                      }`}>
                      strangers
                    </span>
                    <Strangers
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "strangers" ? "block fill-purple" : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "strangers" && "text-purple"
                      }`}>
                      陌生人
                    </p>
                  </div>
                </div>
                <div className='w-[90%] mx-auto md:w-[40%] flex flex-col font-semibold'>
                  <div
                    className={`flex justify-between md:text-xl p-2 cursor-custom md:border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "acquaintance" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "acquaintance")}>
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "acquaintance" && "hidden"
                      }`}>
                      acquaintance
                    </span>
                    <Acquaintance
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "acquaintance" ? "block fill-purple" : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "acquaintance" && "text-purple"
                      }`}>
                      知道或認得但不認識的人
                    </p>
                  </div>
                  <div
                    className={`flex justify-between p-2 cursor-custom border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "significant other" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "significant other")}>
                    <span
                      className={`group-hover:hidden md:text-2xl mr-6 ${
                        otherAns[1] === "significant other" && "hidden"
                      }`}>
                      significant other
                    </span>
                    <Other
                      className={`w-[35%] group-hover:block group-hover:fill-purple mr-6 ${
                        otherAns[1] === "significant other" ? "block fill-purple" : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple text-[8px] md:text-base ${
                        otherAns[1] === "significant other" && "text-purple"
                      }`}>
                      重要他人（家人、伴侶、照顧者、生命中重要的人、前任）
                    </p>
                  </div>
                </div>
              </>
            )}
            {quizAns[1] === "2" && (
              <>
                <div className='w-[80%] mx-auto md:w-[40%] flex flex-col font-semibold'>
                  <div
                    className={`flex justify-between md:text-xl p-2 cursor-custom border-t-2 md:border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "positive" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "positive")}>
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "positive" && "hidden"
                      }`}>
                      positive
                    </span>
                    <Positive
                      className={`w-[30%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "positive" ? "block fill-purple" : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "positive" && "text-purple"
                      }`}>
                      正向的
                    </p>
                  </div>
                </div>
                <div className='w-[80%] mx-auto md:w-[40%] flex flex-col font-semibold'>
                  <div
                    className={`flex justify-between md:text-xl p-2 cursor-custom border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "negative" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "negative")}>
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "negative" && "hidden"
                      }`}>
                      negative
                    </span>
                    <Negative
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "negative" ? "block fill-purple" : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "negative" && "text-purple"
                      }`}>
                      負面的
                    </p>
                  </div>
                </div>
              </>
            )}
            {quizAns[1] === "3" && (
              <>
                <div className='w-[80%] mx-auto md:w-[40%] flex flex-col font-semibold'>
                  <div
                    className={`flex justify-between md:text-xl p-2 cursor-custom border-t-2 md:border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "threatening" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "threatening")}>
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "threatening" && "hidden"
                      }`}>
                      threatening
                    </span>
                    <Threatening
                      className={`w-[30%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "threatening" ? "block fill-purple" : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "threatening" && "text-purple"
                      }`}>
                      具威脅性
                    </p>
                  </div>
                </div>
                <div className='w-[80%] mx-auto md:w-[40%] flex flex-col font-semibold'>
                  <div
                    className={`flex justify-between md:text-xl p-2 cursor-custom border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "not threatening" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "not threatening")}>
                    <span
                      className={`group-hover:hidden md:text-2xl ${
                        otherAns[1] === "not threatening" && "hidden"
                      }`}>
                      not threatening
                    </span>
                    <NotThreatening
                      className={`w-[35%] group-hover:block group-hover:fill-purple ${
                        otherAns[1] === "not threatening" ? "block fill-purple" : "hidden"
                      }`}
                    />
                    <p
                      className={`group-hover:text-purple ${
                        otherAns[1] === "not threatening" && "text-purple"
                      }`}>
                      不具威脅性
                    </p>
                  </div>
                </div>
              </>
            )}
            {quizAns[1] === "4" && (
              <>
                <div className='w-[80%] md:w-[40%] mx-auto font-semibold'>
                  <div
                    className={`flex justify-between text-xl p-2 cursor-custom border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                      otherAns[1] === "none" && "bg-black"
                    }`}
                    onClick={() => handleSaveAns(1, "none")}>
                    <span
                      className={`group-hover:hidden text-2xl ${
                        otherAns[1] === "none" && "hidden"
                      }`}>
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
                      }`}>
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

export default Question4;
