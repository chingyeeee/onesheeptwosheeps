import { getImageUrl } from "../utils/getImageUrl";

const Logo = ({ color }) => {
  function handleLogoColor(color) {
    switch (color.name) {
      case "default":
      case "color2":
        return "logo-default.png";
      case "color1":
        return "logo-1.png";
      case "color3":
      case "color4":
        return "logo-3.png";
      case "color5":
        return "logo-5.png";
      case "color6":
        return "logo-6.png";
    }
  }

  function handleMobileLogoColor(color) {
    switch (color.name) {
      case "default":
        return "logo-default.png";
      case "color2":
        return "logo-2.png";
      case "color1":
        return "logo-1.png";
      case "color3":
      case "color4":
        return "logo-3.png";
      case "color5":
        return "logo-5.png";
      case "color6":
        return "logo-6.png";
    }
  }

  const logoImg = getImageUrl("nav", handleLogoColor(color));

  const logoImgM = getImageUrl("mobile/nav", handleMobileLogoColor(color));

  return (
    <>
      <img className='hidden md:block' src={logoImg} alt='logo' />
      <img className='md:hidden block' src={logoImgM} alt='logo' />
    </>
  );
};

export default Logo;
