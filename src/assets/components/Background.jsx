import { useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
import Welcome from "./Welcome";
import MyImage from "./CardImage";

const Background = ({
  welcomeToEnabled,
  color,
  cardItems,
  setCardItems,
  stageRef,
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
        {/* <MyImage /> */}
        {cardItems.map((item, i) => {
          return (
            <MyImage
              key={i}
              shapeProps={item}
              isSelected={item.id === selectedId}
              onSelect={() => {
                selectShape(item.id);
              }}
              onChange={(newAttrs) => {
                const items = cardItems.slice();
                items[i] = newAttrs;
                setCardItems(items);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Background;
