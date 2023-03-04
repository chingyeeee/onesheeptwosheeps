import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

function ToggleText() {
  const [showEnglish, setShowEnglish] = useState(false);
  const [showChinese, setShowChinese] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowEnglish((prev) => !prev);
      setShowChinese((prev) => !prev);
    }, 2000);

    // 清除定时器以避免内存泄漏
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-12">
      {showEnglish ? (
        <Transition
          show={showEnglish}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p className="english-text">[ Click anywhere to continue ]</p>
        </Transition>
      ) : (
        <Transition
          show={showChinese}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p className="chinese-text">[ 按任意地方進行下一步 ]</p>
        </Transition>
      )}
    </div>
  );
}

export default ToggleText;
