import { useRef, useEffect } from "react";
import { Image, Transformer, Text, Circle, Group } from "react-konva";
import useImage from "use-image";
import { getImageUrl } from "../utils/getImageUrl";

const MyImage = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  handleDeleteSelectedCardItem,
}) => {
  const shapeRef = useRef();
  const trRef = useRef();
  const deleteButtonRef = useRef(null);

  const imagePath = getImageUrl(shapeProps.folder, shapeProps.image);
  const [imageItem] = useImage(imagePath);

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <Group>
      <Image
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        width={shapeProps.width}
        height={shapeProps.height}
        draggable
        image={imageItem}
        onDragStart={(e) => {
          e.target.moveToTop();
          document.body.style.cursor =
            "url(/src/assets/images/cursor-move.png),move";
        }}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
          document.body.style.cursor =
            "url(/src/assets/images/cursor-default.png),default";
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
          document.body.style.cursor =
            "url(/src/assets/images/cursor-default.png),default";
        }}
      />
      {isSelected && (
        <>
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
          <Group ref={deleteButtonRef}>
            <Circle
              x={shapeProps.x}
              y={shapeProps.y}
              radius={15}
              fill="black"
            />
            <Text
              text="X"
              fontSize={16}
              fill="white"
              onClick={handleDeleteSelectedCardItem}
              onTap={handleDeleteSelectedCardItem}
              fontStyle="bold"
              width={150}
              height={150}
              x={shapeProps.x - 5}
              y={shapeProps.y - 6}
            />
          </Group>
        </>
      )}
    </Group>
  );
};
export default MyImage;
