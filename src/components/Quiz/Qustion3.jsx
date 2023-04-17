import { ReactComponent as Animal } from "../../assets/images/quiz/3/animal.svg";
import { ReactComponent as Ghost } from "../../assets/images/quiz/3/ghost.svg";
import { ReactComponent as Nonexisted } from "../../assets/images/quiz/3/nonexisted.svg";
import { ReactComponent as Person } from "../../assets/images/quiz/3/person.svg";
import { ReactComponent as Title3 } from "../../assets/images/quiz/3/title.svg";
const Question3 = ({ questionNum, setQuestionNum, handleSaveAns, quizAns }) => {
  return (
    <div
      className={`bg-lakegreen flex px-6 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[18] ${
        questionNum <= 3
          ? "h-[88%] md:h-[85%] pt-20 md:pt-36 pb-16 animate-slideDown"
          : "h-[12%] md:h-[15%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 3 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(3)}>
        <p>III.</p>
        <p>THIRD</p>
      </div>

      {questionNum === 3 && (
        <>
          <div className='flex flex-col-reverse md:flex-row gap-6 items-end md:items-center justify-between'>
            <div className='text-sm md:text-xl'>
              <p className='font-medium'>
                該夢境中的主角是？
                <br /> 可以是自己、物品或動物。
              </p>
              <p className='font-medium mt-2'>
                WHAT IS THE MAIN PROTAGONIST OF THIS DREAM?
                <br />
                IT COULD BE YOURSELF, AN OBJECT OR ANIMAL.
              </p>
            </div>
            <Title3 className='w-[25%] mr-6 md:w-[10%]' />
          </div>
          <div className='flex justify-between md:h-[62%] mt-6 md:mt-0'>
            <div className='w-full md:w-[60%] flex flex-col font-semibold'>
              <div
                className={`flex justify-between text-base md:text-xl p-2 cursor-custom border-t-2 border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "2" && "bg-black"
                }`}
                onClick={() => handleSaveAns(1, "2")}>
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[1] === "2" && "hidden"
                  }`}>
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
                  }`}>
                  鬼神
                </p>
              </div>
              <div
                className={`flex justify-between text-sm md:text-xl p-2 cursor-custom border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "3" && "bg-black"
                }`}
                onClick={() => handleSaveAns(1, "3")}>
                <span
                  className={`group-hover:hidden text-sm md:text-2xl ${
                    quizAns[1] === "3" && "hidden"
                  }`}>
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
                  }`}>
                  不存在的生物
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl p-2 cursor-custom border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "1" && "bg-black"
                }`}
                onClick={() => handleSaveAns(1, "1")}>
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[1] === "1" && "hidden"
                  }`}>
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
                  }`}>
                  人
                </p>
              </div>
              <div
                className={`flex justify-between text-base md:text-xl p-2 cursor-custom border-b-2 border-black group hover:bg-black items-center flex-1 transition duration-500 ${
                  quizAns[1] === "4" && "bg-black"
                }`}
                onClick={() => handleSaveAns(1, "4")}>
                <span
                  className={`group-hover:hidden text-base md:text-2xl ${
                    quizAns[1] === "4" && "hidden"
                  }`}>
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
                  }`}>
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
export default Question3;
