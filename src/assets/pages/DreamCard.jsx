import { useState } from "react";
import { Transition } from "@headlessui/react";
import Quiz from "../components/Quiz";
import Rules from "../components/Rules";
import WriteDownYourName from "../components/WriteDownYourName";

const DreamCard = () => {
  const [step, setStep] = useState(1);
  const [signImgPath, setSignImgPath] = useState(null);

  function nextStep() {
    setStep(step + 1);
  }

  return (
    <div className="h-full w-screen">
      <Transition
        show={step === 1}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={"h-full"}
      >
        <Rules nextStep={nextStep} step={step} />
      </Transition>
      <Transition
        show={step === 2}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={"h-full"}
      >
        <WriteDownYourName
          nextStep={nextStep}
          step={step}
          setSignImgPath={setSignImgPath}
        />
      </Transition>
      <Transition
        show={step === 3}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={"h-full"}
      >
        <Quiz signImgPath={signImgPath} />
      </Transition>
    </div>
  );
};

export default DreamCard;
