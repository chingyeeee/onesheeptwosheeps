import { getImageUrl } from "../utils/getImageUrl";

const Welcome = ({ color }) => {
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

  //desktop
  const welcomeImg = getImageUrl("nav", handleWelcomeColor(color));

  //mobile
  const welcomeImgM = getImageUrl("mobile/nav", handleWelcomeColor(color));

  return (
    <>
      <img className="hidden md:block" src={welcomeImg} alt="welcome" />
      <img className="md:hidden block" src={welcomeImgM} alt="welcome" />
    </>
  );
};

export default Welcome;
