import { getImageUrl } from "../utils/getImageUrl";

const Welcome = ({ color }) => {
  function handleWelcomeColor(color) {
    switch (color.name) {
      case "default":
        return "welcome-default.png";
      case "color1":
        return "welcome-1.png";
      case "color2":
        return "welcome-2.png";
      case "color3":
        return "welcome-3.png";
      case "color4":
        return "welcome-4.png";
      case "color5":
        return "welcome-5.png";
      case "color6":
        return "welcome-6.png";
    }
  }

  //desktop
  const welcomeImg = getImageUrl("nav", handleWelcomeColor(color));

  //mobile
  const welcomeImgM = getImageUrl("mobile/nav", handleWelcomeColor(color));

  return (
    <>
      <img className='hidden md:block' src={welcomeImg} alt='welcome' />
      <img className='md:hidden block' src={welcomeImgM} alt='welcome' />
    </>
  );
};

export default Welcome;
