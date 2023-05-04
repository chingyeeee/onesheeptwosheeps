import { useState } from "react";
import DownloadAndShare from "../Download";
import Result from "../ResultCard";
import GenerateProccess from "../ResultCard/GenerateProccess";
import Question1 from "./Qustion1";
import Question2 from "./Qustion2";
import Question3 from "./Qustion3";
import Question4 from "./Qustion4";
import Question5 from "./Qustion5";
import Question6 from "./Qustion6";

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
    <div className='flex flex-col min-safe-h-screen relative'>
      {questionNum <= 6 && (
        <div className='animate-fadeSlideIn'>
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
      {questionNum === 7 && <GenerateProccess setQuestionNum={setQuestionNum} />}
      {questionNum === 8 && (
        <Result
          quizAns={quizAns}
          otherAns={otherAns}
          setQuestionNum={setQuestionNum}
          signImgPath={signImgPath}
        />
      )}
      {/* {questionNum === 9 && <DownloadAndShare quizAns={quizAns} signImgPath={signImgPath} />} */}
    </div>
  );
};

export default Quiz;
