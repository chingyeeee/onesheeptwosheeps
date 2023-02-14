import { useEffect, useState } from "react";
import { Stage, Layer, Group } from "react-konva";
import { Html } from "react-konva-utils";
import Welcome from "./Welcome";
import MyImage from "./CardImage";
import { ReactComponent as Finger } from "../images/icons/icon-finger.svg";
import Logo from "./Logo";

const Background = ({
  logoEnabled,
  welcomeToEnabled,
  color,
  cardItems,
  setCardItems,
  stageRef,
  aboutUsEnabled,
  dreamCardEnabled,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  //selectedItem
  const [selectedId, selectShape] = useState(null);

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
        return "text-black border-black";
      case "color1.svg":
        return "text-lightgreen border-lightgreen stroke-lightgreen fill-lightgreen";
      case "color2.svg":
        return "text-black border-black";
      case "color3.svg":
        return "text-lightpurple border-lightpurple stroke-lightpurple fill-lightpurple";
      case "color4.svg":
        return "text-yellow border-yellow stroke-yellow fill-yellow";
      case "color5.svg":
        return "text-yellow border-yellow stroke-yellow fill-yellow";
      case "color6.svg":
        return "text-lakegreen border-lakegreen stroke-lakegreen fill-lakegreen";
    }
  }

  //刪除選擇的cardItem
  function handleDeleteSelectedCardItem() {
    setCardItems(cardItems.filter((item) => item.id !== selectedId));
  }

  return (
    <Stage
      width={windowWidth}
      height={windowHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
      ref={stageRef}
      className={`relative before:block before:absolute before:-inset-1 before:z-[-1] ${
        color === "color4.svg" &&
        "before:bg-purple before:w-[calc(100%-40px)] before:h-[calc(100%-40px)] before:m-auto "
      } ${
        color === "color5.svg" &&
        "before:bg-lightpurple before:w-[calc(100%-40px)] before:h-[calc(100%-40px)] before:m-auto"
      } ${
        color === "color6.svg" &&
        "before:bg-darkgreen before:w-[calc(100%-40px)] before:h-[calc(100%-40px)] before:m-auto"
      }`}
    >
      <Layer onMouseDown={checkDeselect} onTouchStart={checkDeselect}>
        <Group>
          {welcomeToEnabled && (
            <Welcome
              width={windowWidth}
              height={windowHeight * 0.45}
              color={color}
            />
          )}
          {logoEnabled && (
            <Logo
              width={windowWidth}
              height={windowHeight * 0.5}
              color={color}
            />
          )}
        </Group>
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
            />
          );
        })}
        <Html
          divProps={{
            style: {
              position: "absolute",
              top: "auto",
              left: "auto",
              bottom: "16px",
              width: "100%",
            },
          }}
        >
          <div className="relative flex items-center justify-between p-6 bottom-2 w-[90%] mx-auto">
            {aboutUsEnabled && (
              <div
                className={`flex gap-4 items-center cursor-pointer w-[50%] mr-auto `}
              >
                <Finger
                  className={`w-[15%] animate-finger-shake ${handleNavItemStyle(
                    color
                  )}`}
                />

                <p
                  className={`border-b-4 text-5xl lg:text-[4rem] ${handleNavItemStyle(
                    color
                  )}`}
                >
                  ABOUT US
                </p>
              </div>
            )}
            {dreamCardEnabled && (
              <div className="flex gap-4 items-center cursor-pointer w-[50%] ml-auto justify-end">
                <Finger
                  className={`w-[15%] animate-finger-shake ${handleNavItemStyle(
                    color
                  )}`}
                />
                <p
                  className={`border-b-4 text-5xl lg:text-[4rem] ${handleNavItemStyle(
                    color
                  )}`}
                >
                  DREAM CARD
                </p>
              </div>
            )}
          </div>
        </Html>
      </Layer>
    </Stage>
  );
};

export default Background;
