import { Switch } from "@headlessui/react";
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
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);
  //color
  const [color, setColor] = useState("color-default.svg");
  //cardItems
  const [cardItems, setCardItems] = useState([]);
  //stage Ref
  const stageRef = useRef();
  const pngRef = useRef();

  useEffect(() => {
    if (window.screen.width > 1024) {
      setPosX(window.screen.width / 2 + 200);
      setPosY(300);
    } else {
      setPosX(50);
      setPosY(270);
    }
  }, []);

  //開啓menu
  function openMenu() {
    setIsOpenMenu(true);
  }

  //根據word render對應的input
  function handleSwitchInput(word) {
    switch (word) {
      case "LOGOTYPE":
        return (
          <Switch
            value={logoEnabled}
            checked={logoEnabled}
            onChange={setLogoEnabled}
            className={`${logoEnabled ? "bg-black" : "bg-gray-300"}
          relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${logoEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "WELCOME TO":
        return (
          <Switch
            value={welcomeToEnabled}
            checked={welcomeToEnabled}
            onChange={setWelcomeToEnabled}
            className={`${welcomeToEnabled ? "bg-black" : "bg-gray-300"}
            relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${welcomeToEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
              pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "DREAM CARD":
        return (
          <Switch
            value={dreamCardEnabled}
            checked={dreamCardEnabled}
            onChange={setDreamCardEnabled}
            className={`${dreamCardEnabled ? "bg-black" : "bg-gray-300"}
            relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${dreamCardEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
              pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "ABOUT US":
        return (
          <Switch
            value={aboutUsEnabled}
            checked={aboutUsEnabled}
            onChange={setAboutUsEnabled}
            className={`${aboutUsEnabled ? "bg-black" : "bg-gray-300"}
              relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${aboutUsEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
                pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "EMOTIONS":
        return (
          <Switch
            value={emotionEnabled}
            checked={emotionEnabled}
            onChange={setEmotionEnabled}
            className={`${emotionEnabled ? "bg-black" : "bg-gray-300"}
                relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${emotionEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
                  pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "ADD ITEMS":
        return (
          <Switch
            value={addItemsEnabled}
            checked={addItemsEnabled}
            onChange={setAddItemsEnabled}
            className={`${addItemsEnabled ? "bg-black" : "bg-gray-300"}
                  relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${addItemsEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
                    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "DOWNLOAD":
        return (
          <Switch
            value={downloadEnabled}
            checked={downloadEnabled}
            onChange={setDownloadEnabled}
            className={`${downloadEnabled ? "bg-black" : "bg-gray-300"}
                  relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${downloadEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
                    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
    }
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
      <div className={`min-safe-h-screen md:h-screen p-6 overflow-hidden relative`} ref={pngRef}>
        <>
          <Background
            color={color}
            logoEnabled={logoEnabled}
            welcomeToEnabled={welcomeToEnabled}
            cardItems={cardItems}
            setCardItems={setCardItems}
            stageRef={stageRef}
            aboutUsEnabled={aboutUsEnabled}
            dreamCardEnabled={dreamCardEnabled}
            emotionEnabled={emotionEnabled}
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
            posX={posX}
            posY={posY}
            setColor={setColor}
            setCardItems={setCardItems}
            handleSwitchInput={handleSwitchInput}
          />
        </>
      </div>
      <Introduction />
    </>
  );
};

export default Home;
