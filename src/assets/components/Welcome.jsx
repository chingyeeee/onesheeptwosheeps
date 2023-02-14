import "react-lazy-load-image-component/src/effects/blur.css";
import useImage from "use-image";
import { Image } from "react-konva";
import { getImageUrl } from "../utils/getImageUrl";

const Welcome = ({ width, height, color }) => {
  function handleWelcomeColor(color) {
    switch (color) {
      case "color-default.svg":
        return "welcome-default.png";
      case "color1.svg":
        return "welcome-1.png";
      case "color2.svg":
        return "welcome-2.png";
      case "color3.svg":
        return "welcome-3.png";
      case "color4.svg":
        return "welcome-4.png";
      case "color5.svg":
        return "welcome-5.png";
      case "color6.svg":
        return "welcome-6.png";
    }
  }

  const welcomeImg = getImageUrl("nav", handleWelcomeColor(color));
  const [image] = useImage(welcomeImg);
  return (
    <Image
      className="w-[50%]"
      image={image}
      width={color === "color2.svg" ? width * 1.12 : width}
      scaleX={0.5}
      scaleY={0.5}
      height={color === "color2.svg" ? height / 0.45 : height}
      y={20}
      x={20}
    />
  );
};

export default Welcome;
