import { Fragment, useState } from "react";
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

  return (
    <Fragment>
      <Stage
        ref={stageRef}
        className='z-10'
        width={window.innerWidth}
        height={window.innerHeight}
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
        <div className='absolute top-5 left-5 w-full md:w-[55%]'>
          <Welcome color={color} />
        </div>
      )}
      {logoEnabled && (
        <div className='absolute right-2 top-[35%] w-[35%] md:w-[45%] md:right-2 md:top-16'>
          <Logo color={color} />
        </div>
      )}
      {emotionEnabled && <Emotion />}
      <div className='absolute w-full top-[21%] md:bottom-2 flex flex-col gap-5 md:gap-0 md:flex-row-reverse justify-between p-10 z-10'>
        <ShortCut
          key='dreamcard'
          className='pl-16 md:pl-0'
          toggle={dreamCardEnabled}
          path={"dreamcard"}
          text='DREAM CARD'
          colorObj={color}
        />
        <ShortCut
          key='aboutus'
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
