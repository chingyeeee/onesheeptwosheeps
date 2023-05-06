import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton, useMediaQuery } from "@mui/material";
import { Fragment, useEffect, useRef } from "react";
import { Image, Transformer } from "react-konva";
import { Html } from "react-konva-utils";
import useImage from "use-image";
import { getImageUrl } from "../utils/getImageUrl";

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

  const isTV = useMediaQuery("(min-width: 1080px) and (orientation: portrait)");

  return (
    <Fragment>
      <Html>
        {isSelected && (
          <IconButton
            onClick={handleDeleteSelectedCardItem}
            sx={{
              top: shapeProps.y - (isTV ? 35 : 20),
              left: shapeProps.x - (isTV ? 35 : 20),
              color: "#000",
            }}>
            <CancelIcon className='bg-transparen tv:!w-[65px] tv:!h-[65px]' />
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
