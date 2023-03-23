import { useEffect, useState } from "react";
import { Stage, Layer, Group, Text } from "react-konva";
import Welcome from "./Welcome";
import MyImage from "./CardImage";
import Logo from "./Logo";
import Emotion from "./Emotion";
import { ReactComponent as Finger } from "../images/icons/icon-finger.svg";
import { useNavigate } from "react-router-dom";

const Background = ({
  logoEnabled,
  welcomeToEnabled,
  color,
  cardItems,
  setCardItems,
  stageRef,
  emotionEnabled,
  aboutUsEnabled,
  dreamCardEnabled,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  //selectedItem
  const [selectedId, selectShape] = useState(null);

  const navigate = useNavigate();

  //配合螢幕調整canvas
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Backspace") {
        handleDeleteSelectedCardItem();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedId]);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  //根據color傳入對應style
  function handleNavItemStyle(color) {
    switch (color) {
      case "color-default.svg":
        return "decoration-black text-black border-black";
      case "color1.svg":
        return "decoration-lightgreen text-lightgreen border-lightgreen stroke-lightgreen fill-lightgreen";
      case "color2.svg":
        return "decoration-black text-black border-black";
      case "color3.svg":
        return "decoration-lightpurple text-lightpurple border-lightpurple stroke-lightpurple fill-lightpurple";
      case "color4.svg":
        return "decoration-yellow text-yellow border-yellow stroke-yellow fill-yellow";
      case "color5.svg":
        return "decoration-yellow text-yellow border-yellow stroke-yellow fill-yellow";
      case "color6.svg":
        return "decoration-lakegreen text-lakegreen border-lakegreen stroke-lakegreen fill-lakegreen";
    }
  }

  //刪除選擇的cardItem
  function handleDeleteSelectedCardItem() {
    setCardItems(cardItems.filter((item) => item.id !== selectedId));
  }

  return (
    <div
      ref={stageRef}
      className={`relative before:block before:absolute before:-inset-1 before:z-[-1] ${
        color === "color4.svg" &&
        "before:bg-purple before:w-[100%] before:mx-auto before:h-[95%] before:mt-1"
      } ${
        color === "color5.svg" &&
        "before:bg-lightpurple before:w-[100%] before:mx-auto before:h-[95%] before:mt-1"
      } ${
        color === "color6.svg" &&
        "before:bg-darkgreen before:w-[100%] before:mx-auto before:h-[95%] before:mt-1"
      }`}
    >
      {welcomeToEnabled && (
        <div className="absolute z-[10] w-full md:w-[55%]">
          <Welcome color={color} />
        </div>
      )}
      {logoEnabled && (
        <div className="absolute z-[10] right-2 top-[35%] w-[35%] md:w-[45%] md:right-2 md:top-16">
          <Logo color={color} />
        </div>
      )}

      <div className="relative z-[20] -top-6 -left-6">
        <Stage
          width={windowWidth}
          height={windowHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        >
          <Layer onMouseDown={checkDeselect} onTouchStart={checkDeselect}>
            {emotionEnabled && (
              <Emotion width={windowWidth} height={windowHeight} />
            )}
            {cardItems.map((item, index) => {
              return (
                <MyImage
                  key={index}
                  shapeProps={item}
                  isSelected={item.id === selectedId}
                  onSelect={() => {
                    selectShape(item.id);
                  }}
                  onChange={(newAttrs) => {
                    const items = cardItems.slice();
                    items[index] = newAttrs;
                    setCardItems(items);
                  }}
                  handleDeleteSelectedCardItem={handleDeleteSelectedCardItem}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>

      {aboutUsEnabled && (
        <div
          className={`absolute z-[21] left-0 top-[23%] md:top-auto md:bottom-14 flex gap-4 items-center cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] ml-auto w-min`}
          onClick={() => navigate("/aboutus")}
        >
          <Finger
            className={`w-[2.5rem] md:w-[6.5rem] h-auto animate-finger-shake ${handleNavItemStyle(
              color
            )}`}
          />

          <p
            className={`underline-offset-8 md:decoration-4 decoration-solid underline w-max text-2xl md:text-5xl lg:text-[4rem] ${handleNavItemStyle(
              color
            )}`}
          >
            ABOUT US
          </p>
        </div>
      )}
      {dreamCardEnabled && (
        <div
          className="absolute z-[21] top-[17%] right-[5%] md:top-auto md:bottom-14 flex gap-4 items-center cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] w-min mr-auto"
          onClick={() => navigate("/dreamcard")}
        >
          <Finger
            className={`w-[2.5rem] md:w-[6.5rem] h-auto animate-finger-shake ${handleNavItemStyle(
              color
            )}`}
          />
          <p
            className={`underline-offset-8 md:decoration-4 decoration-solid underline w-max text-2xl md:text-5xl lg:text-[4rem] ${handleNavItemStyle(
              color
            )}`}
          >
            DREAM CARD
          </p>
        </div>
      )}
    </div>
  );
};

export default Background;
