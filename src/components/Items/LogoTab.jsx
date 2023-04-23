import { Tab } from "@headlessui/react";
import TabData from "../../assets/data/TabList.json";
import { getImageUrl } from "../../utils/getImageUrl";
import { v4 as uuidv4 } from "uuid";

const LogoTab = ({ setCardItems, closeMenu }) => {
  return (
    <Tab.Panel>
      <h3 className='text-5xl text-left font-semibold'>LOGOTYPES_</h3>
      <div className='flex flex-col gap-12 mt-6'>
        {TabData["1SHEEP2SLEEP"].map((logo) => {
          return (
            <img
              className='w-[80%] cursor-custom hover:bg-[#a9a9ff40] m-auto'
              key={logo}
              src={getImageUrl("cardLogos", logo)}
              onClick={(e) => {
                setCardItems((cardItems) => [
                  ...cardItems,
                  {
                    image: logo,
                    x: window.screen.width / 3,
                    y: window.screen.height / 3,
                    width: e.target.width,
                    height: e.target.height,
                    id: uuidv4(),
                    folder: "cardLogos",
                  },
                ]);
                closeMenu();
              }}
            />
          );
        })}
      </div>
    </Tab.Panel>
  );
};
export default LogoTab;
