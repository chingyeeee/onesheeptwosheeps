import { useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
import { Html } from "react-konva-utils";
import Welcome from "./Welcome";
import MyImage from "./CardImage";
import { ReactComponent as Finger } from "../images/icons/icon-finger.svg";

const Background = ({
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
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <Stage
      width={windowWidth}
      height={windowHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
      ref={stageRef}
      className={`relative before:block before:absolute before:-inset-1  before:z-[-1] ${
        color === "color4.svg" &&
        "before:bg-purple before:w-[96%] before:m-auto before:h-[93%]"
      } ${
        color === "color5.svg" &&
        "before:bg-lightpurple before:w-[96%] before:ml-[2%] before:h-[95%]"
      } ${
        color === "color6.svg" &&
        "before:bg-darkgreen before:w-[96%] before:m-auto before:h-[95%]"
      }`}
    >
      <Layer onMouseDown={checkDeselect} onTouchStart={checkDeselect}>
        {welcomeToEnabled && (
          <Welcome
            width={windowWidth}
            height={windowHeight * 0.5}
            color={color}
          />
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
            />
          );
        })}
        <Html
          divProps={{
            style: {
              position: "absolute",
              top: "auto",
              left: "auto",
              bottom: "8px",
            },
          }}
        >
          <div className="relative flex items-center justify-between p-6 bottom-2 w-full">
            {aboutUsEnabled && (
              <div
                className={`flex gap-4 items-center cursor-pointer w-[50%] mr-auto group `}
              >
                <Finger
                  className={`w-[15%] group-hover:animate-finger-shake ${handleNavItemStyle(
                    color
                  )}`}
                />

                <p
                  className={`border-b-4 text-5xl lg:text-7xl ${handleNavItemStyle(
                    color
                  )}`}
                >
                  ABOUT US
                </p>
              </div>
            )}
            {dreamCardEnabled && (
              <div className="flex gap-4 items-center cursor-pointer w-[50%] ml-auto justify-end group">
                <Finger
                  className={`w-[15%] group-hover:animate-finger-shake ${handleNavItemStyle(
                    color
                  )}`}
                />
                <p
                  className={`border-b-4 text-5xl lg:text-7xl ${handleNavItemStyle(
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
