import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Logo from "../images/nav/logo-default.svg";

const Welcome = () => {
  return (
    <div>
      <LazyLoadImage src={Logo} width={"100%"} alt="logo" effect="blur" />
    </div>
  );
};

export default Welcome;
