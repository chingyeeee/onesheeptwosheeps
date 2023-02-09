import { useEffect, useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import { getImageUrl } from "../utils/getImageUrl";
import Welcome from "./Welcome";
import useImage from "use-image";
import DragAndTransformImage from "./CardImage";
import MyImage from "./CardImage";

const Background = ({ welcomeToEnabled, color }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  //cardItems
  const [cardItems, setCardItems] = useState([
    {
      x: 10,
      y: 10,
      width: 300,
      height: 300,
      id: "rect1",
    },
    {
      x: 150,
      y: 150,
      width: 300,
      height: 300,
      id: "rect2",
    },
  ]);
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

  return (
    <Stage width={windowWidth} height={windowHeight}>
      <Layer>
        {welcomeToEnabled && (
          <Welcome
            width={windowWidth}
            height={windowHeight * 0.5}
            color={color}
          />
        )}
        <MyImage />
      </Layer>
    </Stage>
  );
};

export default Background;
