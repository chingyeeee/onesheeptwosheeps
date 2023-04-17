import { ReactComponent as Natural } from "../../assets/images/quiz/5/natural.svg";
import { ReactComponent as Normal } from "../../assets/images/quiz/5/normal.svg";
import { ReactComponent as Novel } from "../../assets/images/quiz/5/novel.svg";
import { ReactComponent as Title5 } from "../../assets/images/quiz/5/title.svg";
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
              <div className='w-full md:w-[55%] h-full justify-between flex flex-col font-semibold mt-4 md:mt-0'>
                <div
                  className={`flex justify-between md:text-xl px-2 md:px-4 cursor-custom border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                    quizAns[2] === "Y" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(2, "Y")}>
                  <span
                    className={`group-hover:hidden  md:text-2xl ${quizAns[2] === "Y" && "hidden"}`}>
                    daily
                  </span>
                  <Normal
                    className={`w-[20%] group-hover:block group-hover:fill-blue translate-y-2 ${
                      quizAns[2] === "Y" ? "block fill-blue" : "hidden"
                    }`}
                  />
                  <p className={`group-hover:text-blue ${quizAns[2] === "Y" && "text-blue"}`}>
                    日常生活
                  </p>
                </div>
                <div
                  className={`flex justify-between  md:text-xl px-2 md:px-4 cursor-custom border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                    quizAns[2] === "X" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(2, "X")}>
                  <span
                    className={`group-hover:hidden  md:text-2xl ${quizAns[2] === "X" && "hidden"}`}>
                    natural
                  </span>
                  <Natural
                    className={`w-[25%] group-hover:block group-hover:fill-blue ${
                      quizAns[2] === "X" ? "block fill-blue" : "hidden"
                    }`}
                  />
                  <p className={`group-hover:text-blue ${quizAns[2] === "X" && "text-blue"}`}>
                    自然現象
                  </p>
                </div>
                <div
                  className={`flex justify-between  md:text-xl px-2 md:px-4 cursor-custom border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                    quizAns[2] === "Z" && "bg-black"
                  }`}
                  onClick={() => handleSaveAns(2, "Z")}>
                  <span
                    className={`group-hover:hidden  md:text-2xl ${quizAns[2] === "Z" && "hidden"}`}>
                    unrealistic
                  </span>
                  <Novel
                    className={`w-[45%] group-hover:block group-hover:fill-blue ${
                      quizAns[2] === "Z" ? "block fill-blue" : "hidden"
                    }`}
                  />
                  <p className={`group-hover:text-blue ${quizAns[2] === "Z" && "text-blue"}`}>
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
export default Question5;
