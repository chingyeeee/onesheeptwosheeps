import { useState, useEffect } from "react";

function ToggleText() {
  const [showEnglish, setShowEnglish] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowEnglish((prev) => !prev);
    }, 2000);

    // 清除定时器以避免内存泄漏
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-12">
      {showEnglish ? (
        <p className="english-text animate-fadeIn">
          [ Click anywhere to continue ]
        </p>
      ) : (
        <p className="chinese-text animate-fadeIn">[ 按任意地方進行下一步 ]</p>
      )}
    </div>
  );
}

export default ToggleText;
