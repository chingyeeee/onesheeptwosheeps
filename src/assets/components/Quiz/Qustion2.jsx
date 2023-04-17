import { ReactComponent as No } from "../../images/quiz/2/no.svg";
import { ReactComponent as Title2 } from "../../images/quiz/2/title.svg";
import { ReactComponent as Yes } from "../../images/quiz/2/yes.svg";

const Question2 = ({ questionNum, setQuestionNum, handleSaveAns, otherAns }) => {
  return (
    <div
      className={` bg-lightgreen flex px-6 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[19] ${
        questionNum <= 2
          ? "h-[84%] md:h-[80%] pt-24 md:pt-28 pb-16 animate-slideDown"
          : "h-[8%] md:h-[10%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 2 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(2)}>
        <p>II.</p>
        <p>SECOND</p>
      </div>
      {questionNum === 2 && (
        <>
          <div className='md:flex gap-6 max-w-1/2 items-start'>
            <Title2 className='w-[20%] md:w-[10%]' />
            <div className='text-sm mt-6 md:mt-0 md:text-xl font-medium'>
              <p>是否曾經發生在現實生活中，這個夢是你的真實回憶嗎？</p>
              <p className='font-medium mt-2'>
                HAS IT EVER HAPPENED IN THE REAL LIFE? <br />
                IS IT A REAL MEMORY OF YOURS?
              </p>
            </div>
          </div>
          <div className='flex justify-between md:h-[35%]'>
            <div className='w-[70%] md:w-[20%] md:mr-12 ml-auto h-full justify-between flex flex-col font-semibold'>
              <div
                className={`flex justify-between  text-base md:text-xl px-2 md:px-4 py-2 md:py-4 cursor-custom border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[0] === "Y" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "Y")}>
                <span
                  className={`group-hover:hidden  text-base md:text-2xl ${
                    otherAns[0] === "Y" && "hidden"
                  }`}>
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
                  }`}>
                  是
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl px-2 md:px-4 py-2 cursor-custom border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  otherAns[0] === "N" && "bg-black"
                }`}
                onClick={() => handleSaveAns(0, "N")}>
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    otherAns[0] === "N" && "hidden"
                  }`}>
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
                  }`}>
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
export default Question2;
