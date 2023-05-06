import { Tab } from "@headlessui/react";
import TabData from "../../assets/data/TabList.json";
import { getImageUrl } from "../../utils/getImageUrl";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

const LogoTab = ({ setCardItems }) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  useEffect(() => {
    if (window.screen.width > 1024) {
      setPosX(window.screen.width / 2 + 200);
      setPosY(300);
    } else {
      setPosX(50);
      setPosY(270);
    }
  }, []);
  const isTV = useMediaQuery("(min-width: 1080px) and (orientation: portrait)");
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
                    x: isTV ? posX - 500 : posX,
                    y: isTV ? posY + 350 : posY,
                    width: e.target.width,
                    height: e.target.height,
                    id: uuidv4(),
                    folder: "cardLogos",
                  },
                ]);
              }}
            />
          );
        })}
      </div>
    </Tab.Panel>
  );
};
export default LogoTab;
