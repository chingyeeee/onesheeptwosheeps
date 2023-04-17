import { getImageUrl } from "../utils/getImageUrl";

const Logo = ({ color }) => {
  function handleLogoColor(color) {
    switch (color) {
      case "color-default.svg":
      case "color2.svg":
        return "logo-default.png";
      case "color1.svg":
        return "logo-1.png";
      case "color3.svg":
      case "color4.svg":
        return "logo-3.png";
      case "color5.svg":
        return "logo-5.png";
      case "color6.svg":
        return "logo-6.png";
    }
  }

  function handleMobileLogoColor(color) {
    switch (color) {
      case "color-default.svg":
        return "logo-default.png";
      case "color2.svg":
        return "logo-2.png";
      case "color1.svg":
        return "logo-1.png";
      case "color3.svg":
      case "color4.svg":
        return "logo-3.png";
      case "color5.svg":
        return "logo-5.png";
      case "color6.svg":
        return "logo-6.png";
    }
  }

  const logoImg = getImageUrl("nav", handleLogoColor(color));

  const logoImgM = getImageUrl("mobile/nav", handleMobileLogoColor(color));

  return (
    <>
      <img className="hidden md:block" src={logoImg} alt="logo" />
      <img className="md:hidden block" src={logoImgM} alt="logo" />
    </>
  );
};

export default Logo;
