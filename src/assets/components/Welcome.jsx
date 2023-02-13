import "react-lazy-load-image-component/src/effects/blur.css";
import useImage from "use-image";
import { Image } from "react-konva";
import { getImageUrl } from "../utils/getImageUrl";

const Welcome = ({ width, height, color }) => {
  function handleWelcomeColor(color) {
    switch (color) {
      case "color-default.svg":
        return "welcome-default.svg";
      case "color1.svg":
        return "welcome-1.svg";
      case "color2.svg":
        return "welcome-2.svg";
      case "color3.svg":
        return "welcome-3.svg";
      case "color4.svg":
        return "welcome-4.svg";
      case "color5.svg":
        return "welcome-5.svg";
      case "color6.svg":
        return "welcome-6.svg";
    }
  }

  const welcomeImg = getImageUrl("nav", handleWelcomeColor(color));
  const [image] = useImage(welcomeImg);
  return (
    <Image
      className="w-[50%]"
      image={image}
      width={width}
      scaleX={0.53}
      scaleY={0.53}
      height={height}
      y={10}
      x={10}
    />
  );
};

export default Welcome;
