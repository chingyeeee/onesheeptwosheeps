import { useState, createContext, useContext } from "react";
const ToggleContext = createContext();

export const useToggle = () => useContext(ToggleContext);

export const ToggleProvider = ({ children }) => {
  const [color, setColor] = useState({
    name: "default",
    color: "balck",
    file: "default.svg",
  });
  const [logoEnabled, setLogoEnabled] = useState(true);
  const [welcomeToEnabled, setWelcomeToEnabled] = useState(true);
  const [dreamCardEnabled, setDreamCardEnabled] = useState(true);
  const [aboutUsEnabled, setAboutUsEnabled] = useState(true);
  const [emotionEnabled, setEmotionEnabled] = useState(false);
  const [addItemsEnabled, setAddItemsEnabled] = useState(true);
  const [downloadEnabled, setDownloadEnabled] = useState(true);
  const toggleMap = {
    LOGOTYPE: {
      toggle: logoEnabled,
      setToggle: setLogoEnabled,
    },
    "WELCOME TO": {
      toggle: welcomeToEnabled,
      setToggle: setWelcomeToEnabled,
    },
    "DREAM CARD": {
      toggle: dreamCardEnabled,
      setToggle: setDreamCardEnabled,
    },
    "ABOUT US": {
      toggle: aboutUsEnabled,
      setToggle: setAboutUsEnabled,
    },
    EMOTIONS: {
      toggle: emotionEnabled,
      setToggle: setEmotionEnabled,
    },
    "ADD ITEMS": {
      toggle: addItemsEnabled,
      setToggle: setAddItemsEnabled,
    },
    DOWNLOAD: {
      toggle: downloadEnabled,
      setToggle: setDownloadEnabled,
    },
  };
  return (
    <ToggleContext.Provider
      value={{
        color,
        setColor,
        logoEnabled,
        setLogoEnabled,
        welcomeToEnabled,
        setWelcomeToEnabled,
        dreamCardEnabled,
        setDreamCardEnabled,
        aboutUsEnabled,
        setAboutUsEnabled,
        emotionEnabled,
        setEmotionEnabled,
        addItemsEnabled,
        setAddItemsEnabled,
        downloadEnabled,
        setDownloadEnabled,
        toggleMap,
      }}>
      {children}
    </ToggleContext.Provider>
  );
};
