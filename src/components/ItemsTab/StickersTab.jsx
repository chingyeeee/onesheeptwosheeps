import { Tab } from "@headlessui/react";
import TabData from "../../assets/data/TabList.json";
import { getImageUrl } from "../../utils/getImageUrl";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";

const StickersTab = ({ setCardItems }) => {
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
      <div className='mt-6 columns-3'>
        {TabData["STiCKERS"].map((sticker) => {
          return (
            <img
              className={`w-full cursor-custom hover:bg-[#a9a9ff40] place-self-start`}
              key={sticker}
              src={getImageUrl("stickers", sticker)}
              onClick={(e) => {
                setCardItems((cardItems) => [
                  ...cardItems,
                  {
                    image: sticker,
                    x: isTV ? posX - 300 : posX,
                    y: isTV ? posY + 200 : posY,
                    width: e.target.width * 2,
                    height: e.target.height * 2,
                    id: uuidv4(),
                    folder: "stickers",
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
export default StickersTab;
