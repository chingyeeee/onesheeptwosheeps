import { ReactComponent as Finger } from "../../assets/images/icons/icon-finger.svg";
import { ReactComponent as Notrecognized } from "../../assets/images/quiz/6/notrecognized.svg";
import { ReactComponent as Open } from "../../assets/images/quiz/6/open.svg";
import { ReactComponent as Recognized } from "../../assets/images/quiz/6/recognized.svg";
import { ReactComponent as Sealed } from "../../assets/images/quiz/6/sealed.svg";
import { ReactComponent as Title6 } from "../../assets/images/quiz/6/title.svg";
const Question6 = ({ questionNum, setQuestionNum, handleSaveAns, otherAns }) => {
  function checkNotEmptyAns() {
    otherAns[2] !== undefined && otherAns[3] !== undefined && setQuestionNum(questionNum + 1);
  }

  return (
    <div
      className={`bg-yellow flex px-4 md:px-20 flex-col md:justify-between overflow-hidden absolute w-full z-[15] ${
        questionNum <= 6 ? "h-[100%] pt-44 md:pt-64 pb-16 animate-slideDown" : "h-[24%] md:h-[25%]"
      }`}>
      <div
        className={`${
          questionNum === 6 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(6)}>
        <p>VI.</p>
        <p>SIXTH</p>
      </div>
      {questionNum === 6 && (
        <>
          <div className='flex flex-col-reverse md:flex-row gap-2 md:gap-6 items-start justify-between'>
            <div className='text-sm md:text-xl font-medium'>
              <p>該夢境發生在什麼樣的場景?是認得的空間嗎？開放或是密閉的？（四選二）</p>
              <p className='font-medium mt-2'>
                WHAT DOES THE SCENE LOOK LIKE?
                <br />
                IS IT FAMILIAR OR RECONGNIZED? OPEN OR SEALED? <br />
                (CHOOSE 2 OPTIONS)
              </p>
            </div>
            <Title6 className='w-[30%] md:w-[15%] ml-auto md:ml-0' />
          </div>
          <div className='md:flex items-end justify-between md:h-[36%] mt-8 md:mt-0'>
            <div className='w-[60%] md:w-[30%] flex flex-col font-semibold md:h-full'>
              <div
                className={`flex justify-between md:text-xl px-2 md:px-4 py-3 cursor-custom border-t-2 border-b-2 border-black group hover:bg-black items-center md:flex-1 transition duration-500 ${
                  otherAns[2] === "recognize" && "bg-black"
                }`}
                onClick={() => handleSaveAns(2, "recognize")}>
                <span
                  className={`group-hover:hidden  md:text-2xl ${
                    otherAns[2] === "recognize" && "hidden"
                  }`}>
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
                  }`}>
                  認得
                </p>
              </div>
              <div
                className={`flex justify-between  md:text-xl px-2 md:px-4 py-3 cursor-custom border-b-2 border-black group hover:bg-black items-center md:flex-1 transition duration-500 ${
                  otherAns[2] === "not recognized" && "bg-black"
                }`}
                onClick={() => handleSaveAns(2, "not recognized")}>
                <span
                  className={`group-hover:hidden  md:text-2xl ${
                    otherAns[2] === "not recognized" && "hidden"
                  }`}>
                  not recognized
                </span>
                <Notrecognized
                  className={`w-[46%] group-hover:block group-hover:fill-yellow ${
                    otherAns[2] === "not recognized" ? "block fill-yellow" : "hidden"
                  }`}
                />
                <p
                  className={`group-hover:text-yellow ${
                    otherAns[2] === "not recognized" && "text-yellow"
                  }`}>
                  不認得
                </p>
              </div>
            </div>
            {otherAns[2] !== undefined && (
              <div className='w-[60%] md:w-[30%] md:ml-[5%] flex flex-col font-semibold md:h-full'>
                <div
                  className={`flex justify-between  md:text-xl px-2 md:px-4 py-3 cursor-custom md:border-t-2 border-b-2 border-black group hover:bg-black items-center md:flex-1 transition duration-500 ${
                    otherAns[3] === "open" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(3, "open")}>
                  <span
                    className={`group-hover:hidden  md:text-2xl ${
                      otherAns[3] === "open" && "hidden"
                    }`}>
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
                    }`}>
                    開放
                  </p>
                </div>
                <div
                  className={`flex justify-between  md:text-xl px-2 py-3 cursor-custom border-b-2 border-black group hover:bg-black items-center md:flex-1 transition duration-500 ${
                    otherAns[3] === "sealed" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(3, "sealed")}>
                  <span
                    className={`group-hover:hidden  md:text-2xl ${
                      otherAns[3] === "sealed" && "hidden"
                    }`}>
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
                    }`}>
                    密閉
                  </p>
                </div>
              </div>
            )}
            <div
              className={`bg-blue mt-6 md:mt-0 w-min ml-auto px-5 md:px-6 py-3 rounded-full animate-remind-lightening transition hover:animate-lightening ${
                otherAns[3] !== undefined ? "opacity-1 cursor-custom" : "opacity-0"
              }`}
              onClick={checkNotEmptyAns}>
              <Finger className='w-[42px] h-[20px] md:w-[56px] md:h-[25px] fill-yellow' />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Question6;
