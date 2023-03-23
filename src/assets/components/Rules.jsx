import { ReactComponent as RulesLogo } from "../images/rules/rules.svg";
import { ReactComponent as Finger } from "../images/icons/icon-finger.svg";

const Rules = ({ nextStep }) => {
  return (
    <div className="h-full flex justify-center items-center animate-zoomIn">
      <div className="w-[90%] md:w-[70%] bg-yellow rounded-[150px] md:rounded-full py-24 md:py-24 md:p-12 text-center min-h-[50%]">
        <RulesLogo className="w-[40%] m-auto" />
        <div className="w-[70%] h-[220px] md:h-[170px] mx-auto mt-6 md:leading-8 text-sm md:text-lg">
          <p>
            請試著回想一個讓你印象深刻的夢，可以是任何的情境
            <br />
            不管傷心難過、開心快樂甚至是難以啟齒的夢，都請回答接下來的問題！
            <br />
            Please try to recall a dream that impressed you, it can be any
            situation,
            <br />
            Regardless of whether you are sad, happy or even unspeakable dreams,{" "}
            <br />
            please answer the following questions!
          </p>
        </div>

        <div
          className={`bg-blue mt-8 w-min m-auto px-6 py-3 rounded-full cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] animate-remind-lightening transition hover:animate-lightening opacity-1`}
          onClick={nextStep}
        >
          <Finger className="w-[42px] h-[20px] md:w-[56px] md:h-[25px] fill-yellow" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
