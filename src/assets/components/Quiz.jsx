import { useState } from "react";
import { ReactComponent as Title1 } from "../images/quiz/1/title.svg";
import { ReactComponent as Choice1 } from "../images/quiz/1/choice1.svg";
import { ReactComponent as Choice2 } from "../images/quiz/1/choice2.svg";
import { ReactComponent as Choice3 } from "../images/quiz/1/choice3.svg";
import { ReactComponent as Choice4 } from "../images/quiz/1/choice4.svg";
import { ReactComponent as Choice5 } from "../images/quiz/1/choice5.svg";
import { ReactComponent as Choice6 } from "../images/quiz/1/choice6.svg";
import { ReactComponent as Choice7 } from "../images/quiz/1/choice7.svg";
import { ReactComponent as Choice8 } from "../images/quiz/1/choice8.svg";

const Question1 = ({ questionNum, setQuestionNum, quizAns, setQuizAns }) => {
  return (
    <div
      className={`h-full bg-red px-12 py-24 flex flex-col justify-between ${
        questionNum === 1 && "flex-1"
      }`}
    >
      <div className="flex gap-6 max-w-1/2 items-end">
        <Title1 className="w-[12%]" />
        <div className="text-xl font-light">
          <p>請試著回憶你的夢境，當下的情緒是？</p>
          <p className="font-medium mt-2">
            TRY TO RECALL YOUR DREAM, <br />
            WHAT’S YOUR MOOD IN THE MOMENT?
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[45%] border-t-2 border-b-2 border-black">
          <div className="flex justify-between text-xl px-4 py-6 cursor-pointer border-b-2 border-black group hover:bg-black items-center">
            <Choice1 className="w-[18%] group-hover:fill-red" />
            <p className="group-hover:text-red">悲傷</p>
          </div>
          <div className="flex justify-between text-xl px-4 py-6 cursor-pointer border-b-2 border-black group hover:bg-black items-center">
            <Choice2 className="w-[40%] group-hover:fill-red" />
            <p className="group-hover:text-red">無感</p>
          </div>
          <div className="flex justify-between text-xl px-4 py-6 cursor-pointer border-b-2 border-black group hover:bg-black items-center">
            <Choice3 className="w-[14%] group-hover:fill-red" />
            <p className="group-hover:text-red">恐懼</p>
          </div>
          <div className="flex justify-between text-xl px-4 py-6 cursor-pointer group hover:bg-black items-center">
            <Choice4 className="w-[55%] group-hover:fill-red" />
            <p className="group-hover:text-red">性歡愉</p>
          </div>
        </div>
        <div className="w-[45%] border-t-2 border-b-2 border-black">
          <div className="flex justify-between text-xl px-4 py-6 cursor-pointer border-b-2 border-black group hover:bg-black items-center">
            <Choice5 className="w-[25%] group-hover:fill-red" />
            <p className="group-hover:text-red">厭惡</p>
          </div>
          <div className="flex justify-between text-xl px-4 py-3 cursor-pointer border-b-2 border-black group hover:bg-black items-center">
            <Choice6 className="w-[25%] group-hover:fill-red" />
            <p className="group-hover:text-red">憤怒</p>
          </div>
          <div className="flex justify-between text-xl px-4 py-6 cursor-pointer border-b-2 border-black group hover:bg-black items-center">
            <Choice7 className="w-[25%] group-hover:fill-red" />
            <p className="group-hover:text-red">驚嚇</p>
          </div>
          <div className="flex justify-between text-xl px-4 pt-6 pb-4 cursor-pointer group hover:bg-black items-center">
            <Choice8 className="w-[42%] group-hover:fill-red" />
            <p className="group-hover:text-red">幸福滿足</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Quiz = () => {
  const [questionNum, setQuestionNum] = useState(1);
  const [quizAns, setQuizAns] = useState([]);

  function handleSaveAns(e) {
    const ansArray = quizAns.slice();
    ansArray[questionNum] = e.target.value;
    setQuizAns(ansArray);
  }

  return (
    <div className="flex flex-col h-screen">
      <Question1
        questionNum={questionNum}
        setQuestionNum={setQuestionNum}
        setQuizAns={setQuizAns}
        quizAns={quizAns}
      />
    </div>
  );
};

export default Quiz;
