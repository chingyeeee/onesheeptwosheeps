import { useEffect, useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import Welcome from "./Welcome";
import MyImage from "./CardImage";

const Background = ({ welcomeToEnabled, color, cardItems, setCardItems }) => {
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
    >
      <Layer>
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
