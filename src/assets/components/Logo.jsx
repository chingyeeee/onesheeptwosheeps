import useImage from "use-image";
import { Image } from "react-konva";
import { getImageUrl } from "../utils/getImageUrl";

const Logo = ({ width, height, color }) => {
  function handleLogoColor(color) {
    switch (color) {
      case "color-default.svg":
      case "color2.svg":
        return "logo-default.svg";
      case "color1.svg":
        return "logo-1.svg";
      case "color3.svg":
      case "color4.svg":
        return "logo-3.svg";
      case "color5.svg":
        return "logo-5.svg";
      case "color6.svg":
        return "logo-6.svg";
    }
  }

  const logoImg = getImageUrl("nav", handleLogoColor(color));
  const [image] = useImage(logoImg);
  return (
    <Image
      image={image}
      width={width}
      x={width * 0.52}
      y={60}
      scaleX={0.45}
      scaleY={0.45}
      height={height}
    />
  );
};

export default Logo;
