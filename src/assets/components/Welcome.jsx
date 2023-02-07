import "react-lazy-load-image-component/src/effects/blur.css";
import Logo from "../images/nav/logo-default.svg";
import useImage from "use-image";
import { Image } from "react-konva";
import { getImageUrl } from "../utils/getImageUrl";

const Welcome = ({ width, height, logoType }) => {
  const logo = getImageUrl("nav", "logo-default.svg");
  const [image] = useImage(Logo);
  return <Image image={image} width={width} height={height} />;
};

// const Welcome = () => {
//   return (
//     <div>
//       <LazyLoadImage src={Logo} width={"100%"} alt="logo" effect="blur" />
//     </div>
//   );
// };

export default Welcome;
