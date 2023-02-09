import { useState, useRef, useEffect } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";
import { getImageUrl } from "../utils/getImageUrl";

const MyImage = () => {
  const [selected, setSelected] = useState(false);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  const shapeRef = useRef();
  const trRef = useRef();

  const handleSelect = () => {
    setSelected(true);
  };

  const handleDeselect = () => {
    setSelected(false);
  };

  const imagePath = getImageUrl("stickers", "sticker1.svg");
  const [imageItem] = useImage(imagePath);

  useEffect(() => {
    if (selected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [selected]);

  return (
    <>
      <Image
        x={x}
        y={y}
        ref={shapeRef}
        width={width}
        height={height}
        image={imageItem}
        draggable
        onClick={handleSelect}
        onTap={handleSelect}
        onDragEnd={(e) => {
          setX(e.target.x());
          setY(e.target.y());
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);

          setX(e.target.x());
          setY(e.target.y());
          // set minimal value
          setWidth(Math.max(5, node.width() * scaleX));
          setHeight(Math.max(node.height() * scaleY));
        }}
      />
      {selected && (
        <Transformer
          ref={trRef}
          keepRatio
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 50 || newBox.height < 50) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default MyImage;
