import useImage from "use-image";
import { Image } from "react-konva";
import { getImageUrl } from "../utils/getImageUrl";

const Emotion = ({ width, height }) => {
  const EmotionImg = getImageUrl("emotions", "emotion-bg.png");
  const [image] = useImage(EmotionImg);

  return <Image image={image} width={width} height={height} y={20} x={20} />;
};

export default Emotion;
