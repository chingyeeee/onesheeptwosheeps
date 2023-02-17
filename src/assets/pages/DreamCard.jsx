import { useState, lazy } from "react";
import Quiz from "../components/Quiz";
import Rules from "../components/Rules";
import WriteDownYourName from "../components/WriteDownYourName";

const DreamCard = () => {
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep(step + 1);
  }

  return (
    <div className="h-screen">
      {step === 1 && <Rules nextStep={nextStep} />}
      {step === 2 && <WriteDownYourName nextStep={nextStep} />}
      {step === 3 && <Quiz nextStep={nextStep} />}
    </div>
  );
};

export default DreamCard;
