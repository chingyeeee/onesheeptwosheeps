import { Tab } from "@headlessui/react";
import TabData from "../../../assets/data/TabList.json";
import { getImageUrl } from "../../../utils/getImageUrl";
import Setting from "./Setting";

const Settings = ({ setColor, closeMenu, toggles }) => {
  const {
    logoEnabled,
    setLogoEnabled,
    welcomeToEnabled,
    setWelcomeToEnabled,
    aboutUsEnabled,
    setAboutUsEnabled,
    dreamCardEnabled,
    setDreamCardEnabled,
    emotionEnabled,
    setEmotionEnabled,
    addItemsEnabled,
    setAddItemsEnabled,
    downloadEnabled,
    setDownloadEnabled,
  } = toggles;

  const toggleMap = {
    LOGOTYPE: {
      toggle: logoEnabled,
      setToggle: setLogoEnabled,
    },
    "WELCOME TO": {
      toggle: welcomeToEnabled,
      setToggle: setWelcomeToEnabled,
    },
    "DREAM CARD": {
      toggle: dreamCardEnabled,
      setToggle: setDreamCardEnabled,
    },
    "ABOUT US": {
      toggle: aboutUsEnabled,
      setToggle: setAboutUsEnabled,
    },
    EMOTIONS: {
      toggle: emotionEnabled,
      setToggle: setEmotionEnabled,
    },
    "ADD ITEMS": {
      toggle: addItemsEnabled,
      setToggle: setAddItemsEnabled,
    },
    DOWNLOAD: {
      toggle: downloadEnabled,
      setToggle: setDownloadEnabled,
    },
  };
  return (
    <Tab.Panel>
      <h3 className='text-5xl text-left font-semibold'>
        COLOR <br />
        CHANGE_
      </h3>
      <div className='flex flex-wrap gap-4 mt-6'>
        {TabData["BACKGROUND"].color.map((background) => {
          return (
            <img
              className='w-[10%] cursor-custom'
              key={background}
              src={getImageUrl("cardColors", background)}
              onClick={() => {
                setColor(background);
                closeMenu();
              }}
            />
          );
        })}
      </div>
      <h3 className='text-5xl font-semibold text-left mt-12'>
        BACKGROUND <br />
        WORDS_
      </h3>
      <div className='flex flex-col gap-4 mt-6'>
        {TabData["BACKGROUND"].word.map((word) => {
          return (
            <div
              key={word}
              className='rounded-md border-2 border-black p-2 flex justify-between items-center'>
              <p className='text-lg font-bold'>{word}</p>
              <Setting toggle={toggleMap[word].toggle} setToggle={toggleMap[word].setToggle} />
            </div>
          );
        })}
      </div>
    </Tab.Panel>
  );
};
export default Settings;
