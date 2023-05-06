import { Fragment, useState, useEffect } from "react";
import { Layer, Stage } from "react-konva";
import MyImage from "./CardImage";
import Emotion from "./Emotion";
import Logo from "./Logo";
import ShortCut from "./ShortCut";
import Welcome from "./Welcome";
import { useToggle } from "../context/useToggle";
const Background = ({ cardItems, setCardItems, stageRef }) => {
  const { color, logoEnabled, welcomeToEnabled, emotionEnabled, aboutUsEnabled, dreamCardEnabled } =
    useToggle();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  //selectedItem
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  //刪除選擇的cardItem
  function handleDeleteSelectedCardItem() {
    setCardItems(cardItems.filter((item) => item.id !== selectedId));
  }
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedId]);
  return (
    <Fragment>
      <Stage
        ref={stageRef}
        className='z-10'
        width={windowWidth}
        height={windowHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}>
        <Layer>
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
      {welcomeToEnabled && (
        <div className='absolute top-5 w-full md:w-[55%] px-5 tv:w-full tv:top-20 tv:px-14'>
          <Welcome color={color} />
        </div>
      )}
      {logoEnabled && (
        <div className='absolute right-3 top-[35%] w-[35%] md:w-[45%] md:right-2 md:top-16 tv:w-[35%] tv:right-16 tv:top-[35%]'>
          <Logo color={color} />
        </div>
      )}
      {emotionEnabled && <Emotion />}
      <div className='absolute w-full tv:w-full top-[23%] tv:top-[24%] md:top-auto md:bottom-10 tv:bottom-auto flex flex-col gap-5 md:gap-0 tv:gap-20 md:flex-row-reverse tv:flex-col justify-between md:px-10 px-6 tv:px-6 z-10'>
        <ShortCut
          key='dreamcard'
          className='pl-28 md:pl-0 tv:pl-[24rem]'
          toggle={dreamCardEnabled}
          path={"dreamcard"}
          text='DREAM CARD'
          colorObj={color}
        />
        <ShortCut
          key='aboutus'
          className='pl-3 md:pl-0 tv:pl-[5rem]'
          toggle={aboutUsEnabled}
          path={"aboutus"}
          text='ABOUT US'
          colorObj={color}
        />
      </div>
    </Fragment>
  );
};

export default Background;
