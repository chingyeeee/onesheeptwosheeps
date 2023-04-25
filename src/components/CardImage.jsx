import { useRef, useEffect, Fragment } from "react";
import { Image, Transformer, Text, Circle, Group } from "react-konva";
import useImage from "use-image";
import { getImageUrl } from "../utils/getImageUrl";
import CancelIcon from "@mui/icons-material/Cancel";
import { Html } from "react-konva-utils";
import { IconButton } from "@mui/material";

const MyImage = ({ shapeProps, isSelected, onSelect, onChange, handleDeleteSelectedCardItem }) => {
  const shapeRef = useRef();
  const trRef = useRef();
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
    <Fragment>
      <Html>
        {isSelected && (
          <IconButton
            onClick={handleDeleteSelectedCardItem}
            sx={{ top: shapeProps.y - 23, left: shapeProps.x - 23 }}>
            <CancelIcon fontSize='large' />
          </IconButton>
        )}
      </Html>
      <Image
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        image={imageItem}
        onDragMove={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
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
          resizeEnabled
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </Fragment>
  );
};
export default MyImage;
