import { Tab } from "@headlessui/react";
import TabData from "../../../assets/data/TabList.json";
import { getImageUrl } from "../../../utils/getImageUrl";
import Setting from "./Setting";
import { useToggle } from "../../../context/useToggle";

const Settings = () => {
  const { toggleMap, setColor } = useToggle();

  return (
    <Tab.Panel>
      <h3 className='text-5xl text-left font-semibold'>
        COLOR <br />
        CHANGE_
      </h3>
      <div className='flex flex-wrap gap-4 mt-6'>
        {TabData["BACKGROUND"].color.map((background) => {
          const { name, file } = background;
          return (
            <img
              className='w-[10%] cursor-custom'
              key={name}
              src={getImageUrl("cardColors", file)}
              onClick={() => {
                setColor(background);
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
