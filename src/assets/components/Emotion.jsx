import { getImageUrl } from "../utils/getImageUrl";

const Emotion = () => {
  const EmotionImg = getImageUrl("emotions", "emotion-bg.png");
  const EmotionImgM = getImageUrl("emotions", "emotion-bg-m.png");

  return (
    <div className="absolute z-[-1] inset-0">
      <img className="hidden md:block" src={EmotionImg} alt="logo" />
      <img className="md:hidden block" src={EmotionImgM} alt="logo" />
    </div>
  );
};

export default Emotion;
