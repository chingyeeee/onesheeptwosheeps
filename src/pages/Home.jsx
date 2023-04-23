import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { lazy, useEffect, useRef, useState } from "react";
import { ReactComponent as Download } from "../assets/images/icons/icon-download.svg";
import { ReactComponent as Menu } from "../assets/images/icons/icon-menu-sheep.svg";
import Introduction from "../components/Introduction";
import Items from "../components/Items";

const Background = lazy(() => import("../components/Background"));

const Home = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  //toggle開關
  const [logoEnabled, setLogoEnabled] = useState(true);
  const [welcomeToEnabled, setWelcomeToEnabled] = useState(true);
  const [dreamCardEnabled, setDreamCardEnabled] = useState(true);
  const [aboutUsEnabled, setAboutUsEnabled] = useState(true);
  const [emotionEnabled, setEmotionEnabled] = useState(false);
  const [addItemsEnabled, setAddItemsEnabled] = useState(true);
  const [downloadEnabled, setDownloadEnabled] = useState(true);

  const toggles = {
    logoEnabled: logoEnabled,
    setLogoEnabled: setLogoEnabled,
    welcomeToEnabled: welcomeToEnabled,
    setWelcomeToEnabled: setWelcomeToEnabled,
    aboutUsEnabled: aboutUsEnabled,
    setAboutUsEnabled: setAboutUsEnabled,
    dreamCardEnabled: dreamCardEnabled,
    setDreamCardEnabled: setDreamCardEnabled,
    emotionEnabled: emotionEnabled,
    setEmotionEnabled: setEmotionEnabled,
    addItemsEnabled: addItemsEnabled,
    setAddItemsEnabled: setAddItemsEnabled,
    downloadEnabled: downloadEnabled,
    setDownloadEnabled: setDownloadEnabled,
  };

  //color
  const [color, setColor] = useState("color-default.svg");
  //cardItems
  const [cardItems, setCardItems] = useState([]);
  //stage Ref
  const stageRef = useRef();
  const pngRef = useRef();

  useEffect(() => {
    if (navigator.userAgent.match(/FB/i) || navigator.userAgent.match(/LINE/i)) {
      alert("建議使用預設瀏覽器");
    }
  }, []);

  //開啓menu
  function openMenu() {
    setIsOpenMenu(true);
  }

  //download stage as image
  const handleExport = () => {
    const element = pngRef.current;

    html2canvas(element).then((canvas) => {
      canvas.toBlob((blob) => saveAs(blob, "oneSheepTwoSleep.png"));
    });
  };

  return (
    <>
      <div
        className='min-safe-h-screen md:h-screen p-6 overflow-hidden relative touch-none'
        ref={pngRef}>
        <>
          <Background
            color={color}
            // logoEnabled={logoEnabled}
            // welcomeToEnabled={welcomeToEnabled}
            cardItems={cardItems}
            setCardItems={setCardItems}
            stageRef={stageRef}
            toggles={toggles}
            // aboutUsEnabled={aboutUsEnabled}
            // dreamCardEnabled={dreamCardEnabled}
            // emotionEnabled={emotionEnabled}
          />

          <div className='absolute z-[30] w-[10%] bottom-[15%] left-10 md:left-auto md:bottom-0 md:top-[30%] flex flex-col gap-8 items-center'>
            <div
              className={`flex flex-col opacity-0 items-center ${
                addItemsEnabled && "opacity-100 cursor-custom"
              }`}
              onClick={openMenu}>
              <Menu className='w-[100%] md:w-auto' />
              <p className='text-[8px] md:text-base underline underline-black w-max'>add items</p>
            </div>

            {downloadEnabled && (
              <div className='flex flex-col items-center cursor-custom' onClick={handleExport}>
                <Download className='w-[100%] md:w-auto' />
                <p className='text-[8px] md:text-base underline underline-black w-max'>download</p>
              </div>
            )}
          </div>
          <Items
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
            setColor={setColor}
            setCardItems={setCardItems}
            toggles={toggles}
          />
        </>
      </div>
      <Introduction />
    </>
  );
};

export default Home;
