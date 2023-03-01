import { ReactComponent as RulesLogo } from "../images/rules/rules.svg";
import { ReactComponent as Finger } from "../images/icons/icon-finger.svg";
import { useEffect, useState } from "react";

function TypingText({ onTypingFinish }) {
  const [text, setText] = useState("");
  const content =
    "請試著回想一個讓你印象深刻的夢，可以是任何的情境；\n 不管傷心難過、開心快樂甚至是難以啟齒的夢，都請回答接下來的問題！\n Please try to recall a dream that impressed you, it can be any situation; \n Regardless of whether you are sad, happy or even unspeakable dreams, \n please answer the following questions!";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText((text) => text + content.charAt(i));
      i++;
      if (i === content.length) {
        clearInterval(typingInterval);
        onTypingFinish && onTypingFinish();
      }
    }, speed);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="max-w-[70%] mx-auto mt-6 leading-8 text-lg">
      {text.split("").map((char, index) => {
        if (char === "\n") {
          return <br key={index} />;
        } else {
          return (
            <span
              key={index}
              className={`opacity-1 animate-typing delay-${index}s`}
            >
              {char}
            </span>
          );
        }
      })}
    </div>
  );
}

const Rules = ({ nextStep }) => {
  const [isTypingFinish, setIsTypingFinish] = useState(false);
  const handleTypingFinish = () => {
    setIsTypingFinish(true);
  };

  return (
    <div className="h-full flex justify-center items-center animate-zoomIn">
      <div className="w-[70%] bg-yellow rounded-full p-12 text-center min-h-[50%]">
        <RulesLogo className="w-[40%] m-auto" />
        <TypingText onTypingFinish={handleTypingFinish} />
        {isTypingFinish && (
          <div
            className="bg-blue mt-8 w-min m-auto px-6 py-3 rounded-full cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] animate-remind-lightening transition hover:animate-lightening"
            onClick={nextStep}
          >
            <Finger className="w-[56px] h-[25px] fill-yellow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Rules;
