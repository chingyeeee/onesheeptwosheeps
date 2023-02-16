import { ReactComponent as RulesLogo } from "../images/rules/rules.svg";
import { ReactComponent as Finger } from "../images/icons/icon-finger.svg";

const Rules = ({ nextStep }) => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-[70%] bg-yellow rounded-full p-12 text-center min-h-[50%]">
        <RulesLogo className="w-[40%] m-auto" />
        <p className="max-w-[70%] mx-auto mt-6">
          請試著回想一個讓你印象深刻的夢，可以是任何的情境；
          <br />
          不管傷心難過、開心快樂甚至是難以啟齒的夢，都請回答接下來的問題！
        </p>
        <p className="max-w-[70%] m-auto mt-4">
          Please try to recall a dream that impressed you, it can be any
          situation; <br />
          Regardless of whether you are sad, happy or even unspeakable dreams,
          please answer the following questions!
        </p>
        <div
          className="bg-blue mt-8 w-min m-auto px-6 py-3 rounded-full cursor-pointer"
          onClick={nextStep}
        >
          <Finger className="w-[56px] h-[25px] fill-yellow" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
