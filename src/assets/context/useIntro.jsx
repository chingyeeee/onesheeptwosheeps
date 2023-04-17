import { useState, createContext, useContext } from "react";
const IntroContext = createContext();

export const useIntro = () => useContext(IntroContext);

export const IntroProvider = ({ children }) => {
  const [isIntro, setIsIntro] = useState(true);

  function closeIntro() {
    setIsIntro(false);
  }

  return <IntroContext.Provider value={{ isIntro, closeIntro }}>{children}</IntroContext.Provider>;
};
