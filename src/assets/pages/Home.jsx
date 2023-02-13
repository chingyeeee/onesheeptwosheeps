import { lazy, Fragment, useState, useRef } from "react";
import { Dialog, Transition, Tab, Switch } from "@headlessui/react";
import { ReactComponent as Menu } from "../images/icons/icon-menu-sheep.svg";

import { ReactComponent as Download } from "../images/icons/icon-download.svg";
import TabData from "../data/TabList.json";
import { getImageUrl } from "../utils/getImageUrl";
const Background = lazy(() => import("../components/Background"));

const Home = () => {
  const [isIntro, setIsIntro] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  //toggle開關
  const [logoEnabled, setLogoEnabled] = useState(true);
  const [welcomeToEnabled, setWelcomeToEnabled] = useState(true);
  const [dreamCardEnabled, setDreamCardEnabled] = useState(true);
  const [aboutUsEnabled, setAboutUsEnabled] = useState(true);
  const [emotionEnabled, setEmotionEnabled] = useState(false);
  const [addItemsEnabled, setAddItemsEnabled] = useState(true);
  const [downloadEnabled, setDownloadEnabled] = useState(true);
  //color
  const [color, setColor] = useState("color-default.svg");
  //cardItems
  const [cardItems, setCardItems] = useState([]);
  //stage Ref
  const stageRef = useRef();

  //關閉introduction
  function closeIntro() {
    setIsIntro(false);
  }

  //開啓menu
  function openMenu() {
    setIsOpenMenu(true);
  }

  //關閉menu
  function closeMenu() {
    setIsOpenMenu(false);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  //根據word render對應的input
  function handleSwitchInput(word) {
    switch (word) {
      case "LOGOTYPE":
        return (
          <Switch
            value={logoEnabled}
            checked={logoEnabled}
            onChange={setLogoEnabled}
            className={`${logoEnabled ? "bg-black" : "bg-gray-300"}
          relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use {word}</span>
            <span
              aria-hidden="true"
              className={`${
                logoEnabled ? "translate-x-[1.6rem]" : "translate-x-0"
              }
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "WELCOME TO":
        return (
          <Switch
            value={welcomeToEnabled}
            checked={welcomeToEnabled}
            onChange={setWelcomeToEnabled}
            className={`${welcomeToEnabled ? "bg-black" : "bg-gray-300"}
            relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use {word}</span>
            <span
              aria-hidden="true"
              className={`${
                welcomeToEnabled ? "translate-x-[1.6rem]" : "translate-x-0"
              }
              pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "DREAM CARD":
        return (
          <Switch
            value={dreamCardEnabled}
            checked={dreamCardEnabled}
            onChange={setDreamCardEnabled}
            className={`${dreamCardEnabled ? "bg-black" : "bg-gray-300"}
            relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use {word}</span>
            <span
              aria-hidden="true"
              className={`${
                dreamCardEnabled ? "translate-x-[1.6rem]" : "translate-x-0"
              }
              pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "ABOUT US":
        return (
          <Switch
            value={aboutUsEnabled}
            checked={aboutUsEnabled}
            onChange={setAboutUsEnabled}
            className={`${aboutUsEnabled ? "bg-black" : "bg-gray-300"}
              relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use {word}</span>
            <span
              aria-hidden="true"
              className={`${
                aboutUsEnabled ? "translate-x-[1.6rem]" : "translate-x-0"
              }
                pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "EMOTIONS":
        return (
          <Switch
            value={emotionEnabled}
            checked={emotionEnabled}
            onChange={setEmotionEnabled}
            className={`${emotionEnabled ? "bg-black" : "bg-gray-300"}
                relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use {word}</span>
            <span
              aria-hidden="true"
              className={`${
                emotionEnabled ? "translate-x-[1.6rem]" : "translate-x-0"
              }
                  pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "ADD ITEMS":
        return (
          <Switch
            value={addItemsEnabled}
            checked={addItemsEnabled}
            onChange={setAddItemsEnabled}
            className={`${addItemsEnabled ? "bg-black" : "bg-gray-300"}
                  relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use {word}</span>
            <span
              aria-hidden="true"
              className={`${
                addItemsEnabled ? "translate-x-[1.6rem]" : "translate-x-0"
              }
                    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "DOWNLOAD":
        return (
          <Switch
            value={downloadEnabled}
            checked={downloadEnabled}
            onChange={setDownloadEnabled}
            className={`${downloadEnabled ? "bg-black" : "bg-gray-300"}
                  relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use {word}</span>
            <span
              aria-hidden="true"
              className={`${
                downloadEnabled ? "translate-x-[1.6rem]" : "translate-x-0"
              }
                    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
    }
  }

  //download stage as image
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    // downloadURI(uri, 'stage.png');
  };

  return (
    <>
      <div
        className={`h-screen flex overflow-hidden flex-col justify-between relative`}
      >
        <div>
          <Background
            color={color}
            logoEnabled={logoEnabled}
            welcomeToEnabled={welcomeToEnabled}
            cardItems={cardItems}
            setCardItems={setCardItems}
            stageRef={stageRef}
            aboutUsEnabled={aboutUsEnabled}
            dreamCardEnabled={dreamCardEnabled}
          />

          <div className="absolute z-10 w-[12%] top-[30%] flex flex-col gap-8 items-center">
            <div
              className={`flex flex-col opacity-0 cursor-auto ${
                addItemsEnabled && "opacity-100 cursor-pointer"
              }`}
              onClick={openMenu}
            >
              <Menu />
              <p className="border-b border-black">add items</p>
            </div>

            {downloadEnabled && (
              <div
                className="flex flex-col cursor-pointer"
                onClick={handleExport}
              >
                <Download />
                <p className="border-b border-black">download</p>
              </div>
            )}
          </div>
          <Transition appear show={isOpenMenu} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeMenu}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-white bg-opacity-50" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="min-h-full">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-[50%] min-h-[75vh] mr-auto transform overflow-hidden text-center align-middle transition-all absolute top-[20%] left-[12%] border-4 border-black rounded-xl bg-white px-4">
                      <Tab.Group>
                        <Tab.List className="flex py-4 border-b-4 border-black space-x-0.5">
                          {Object.keys(TabData).map((tab) => (
                            <Tab
                              key={tab}
                              className={({ selected }) =>
                                classNames(
                                  "w-full py-2.5 text-2xl font-semibold leading-5",
                                  "ring-white ring-opacity-60 focus:outline-none focus:ring-2",
                                  selected
                                    ? "before:block before:absolute before:-inset-1 before:bg-lightpurple before:rounded-md before:z-[-1] before:scale-[0.8] relative inline-block text-white"
                                    : "text-black",
                                  `${
                                    tab === "1SHEEP2SLEEP" &&
                                    "border-x-4 border-black "
                                  }`
                                )
                              }
                            >
                              {tab}
                            </Tab>
                          ))}
                        </Tab.List>
                        <Tab.Panels className="p-6 max-h-[65vh] overflow-y-auto">
                          <Tab.Panel>
                            <div className="flex flex-wrap mt-6">
                              {TabData["STiCKERS"].map((sticker) => {
                                return (
                                  <img
                                    className="w-[20%] m-auto cursor-pointer hover:bg-zinc-100"
                                    key={sticker}
                                    src={getImageUrl("stickers", sticker)}
                                    onClick={() =>
                                      setCardItems([
                                        ...cardItems,
                                        {
                                          image: sticker,
                                          x: 150,
                                          y: 250,
                                          width: 300,
                                          height: 300,
                                          id: sticker,
                                          folder: "stickers",
                                        },
                                      ])
                                    }
                                  />
                                );
                              })}
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <h3 className="text-4xl text-left">LOGOTYPES_</h3>
                            <div className="flex flex-col gap-12 mt-6">
                              {TabData["1SHEEP2SLEEP"].map((logo) => {
                                return (
                                  <img
                                    className="w-[80%] m-auto cursor-pointer hover:bg-zinc-100"
                                    key={logo}
                                    src={getImageUrl("cardLogos", logo)}
                                    onClick={() =>
                                      setCardItems([
                                        ...cardItems,
                                        {
                                          image: logo,
                                          x: 150,
                                          y: 250,
                                          width: 500,
                                          height: 200,
                                          id: logo,
                                          folder: "cardLogos",
                                        },
                                      ])
                                    }
                                  />
                                );
                              })}
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <h3 className="text-4xl text-left">
                              COLOR <br />
                              CHANGE_
                            </h3>
                            <div className="flex flex-wrap gap-4 mt-6">
                              {TabData["BACKGROUND"].color.map((background) => {
                                return (
                                  <img
                                    className="w-[10%] cursor-pointer"
                                    key={background}
                                    src={getImageUrl("cardColors", background)}
                                    onClick={() => setColor(background)}
                                  />
                                );
                              })}
                            </div>
                            <h3 className="text-4xl text-left mt-12">
                              BACKGROUND <br />
                              WORDS_
                            </h3>
                            <div className="flex flex-col gap-4 mt-6">
                              {TabData["BACKGROUND"].word.map((word) => {
                                return (
                                  <div
                                    key={word}
                                    className="rounded-md border-2 border-black p-2 flex justify-between items-center"
                                  >
                                    <p className="text-lg font-bold">{word}</p>
                                    {handleSwitchInput(word)}
                                  </div>
                                );
                              })}
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>

      {/* Introduction Modal */}
      <Transition appear show={isIntro} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeIntro}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-purple bg-opacity-95" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-cloud bg-no-repeat bg-center bg-contain">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full transform overflow-hidden p-6 text-center align-middle transition-all"
                  onClick={closeIntro}
                >
                  <p className="text-lg font-medium leading-6 text-gray-900 p-1">
                    歡迎來到一隻羊兩隻羊！
                  </p>
                  <p className="text-lg font-medium leading-6 text-gray-900 p-1">
                    這裡除了有解夢卡專區之外
                  </p>
                  <p className="text-lg font-medium leading-6 text-gray-900 p-1">
                    還有更多值得你探索的地方～
                  </p>

                  <p className="text-lg font-medium leading-6 text-gray-900 mt-6">
                    快動動手指製作屬於自己的桌布及解夢卡吧！
                  </p>
                  <p className="text-lg font-medium leading-6 text-gray-900 p-1 mt-8">
                    Welcome to the website of ONE SHEEP, TWO SLEEP.
                  </p>
                  <p className="text-lg font-medium leading-6 text-gray-900 p-1">
                    Aside from our DREAMCARD area,
                  </p>
                  <p className="text-lg font-medium leading-6 text-gray-900 p-1">
                    here’s more to explore. GO make yourself
                  </p>
                  <p className="text-lg font-medium leading-6 text-gray-900 mt-6">
                    own “DREAMCARD” and “wallpaper”
                  </p>
                </Dialog.Panel>
              </Transition.Child>
              <p className="absolute inset-x-0 bottom-12">
                [ 按任意地方進行下一步 ]
              </p>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Home;
