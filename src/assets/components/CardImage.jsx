import { useState, useRef, useEffect } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";
import { getImageUrl } from "../utils/getImageUrl";

const MyImage = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef();
  const trRef = useRef();

  const imagePath = getImageUrl("stickers", shapeProps.image);
  const [imageItem] = useImage(imagePath);

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        width={shapeProps.width}
        height={shapeProps.height}
        image={imageItem}
        draggable
        onDragEnd={(e) => {
          e.target.moveToTop();
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
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
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
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
