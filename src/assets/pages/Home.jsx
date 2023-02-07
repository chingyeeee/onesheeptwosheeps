import { lazy, Fragment, useState } from "react";
import { Dialog, Transition, Tab, Switch } from "@headlessui/react";
import Menu from "../images/icon-menu-sheep.svg";
import Finger from "../images/icon-finger.svg";
import TabData from "../data/TabList.json";
import { getImageUrl } from "../utils/getImageUrl";
const Background = lazy(() => import("../components/Background"));

const Home = () => {
  const [isIntro, setIsIntro] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  //toggle開關
  const [enabled, setEnabled] = useState(false);

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

  return (
    <>
      <div className="h-screen flex overflow-hidden flex-col justify-between relative">
        <div className="">
          <Background />
          <div
            className="absolute z-10 w-[15%] top-[30%] flex flex-col gap items-center cursor-pointer"
            onClick={openMenu}
          >
            <img className="w-[35%]" src={Menu} alt="menu" />
            <p className="border-b border-black">add items</p>
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
                <div className="min-h-full p-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-[50%] mr-auto transform overflow-hidden text-center align-middle transition-all absolute top-[20%] left-[12%] border-4 border-black rounded-xl bg-white px-4">
                      <Tab.Group>
                        <Tab.List className="flex p-4 border-b-4 border-black space-x-1">
                          {Object.keys(TabData).map((tab) => (
                            <Tab
                              key={tab}
                              className={({ selected }) =>
                                classNames(
                                  "w-full py-2.5 text-md font-medium leading-5",
                                  "ring-white ring-opacity-60 focus:outline-none focus:ring-2",
                                  selected
                                    ? "before:block before:absolute before:-inset-1 before:bg-lightpurple before:rounded-md before:z-[-1] before:scale-[0.65] relative inline-block text-white"
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
                          <Tab.Panel>Content 1</Tab.Panel>
                          <Tab.Panel>
                            <h3 className="text-4xl text-left">LOGOTYPES_</h3>
                            <div className="flex flex-col gap-12 mt-6">
                              {TabData["1SHEEP2SLEEP"].map((logo) => {
                                return (
                                  <img
                                    className="w-[80%] m-auto"
                                    key={logo}
                                    src={getImageUrl("cardLogos", logo)}
                                    onClick={() => console.log(logo)}
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
                                    className="w-[12%]"
                                    key={background}
                                    src={getImageUrl("cardColors", background)}
                                    onClick={() => console.log(background)}
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
                                    <Switch
                                      checked={enabled}
                                      onChange={setEnabled}
                                      className={`${
                                        enabled ? "bg-black" : "bg-gray-300"
                                      }
          relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                    >
                                      <span className="sr-only">
                                        Use setting
                                      </span>
                                      <span
                                        aria-hidden="true"
                                        className={`${
                                          enabled
                                            ? "translate-x-[1.6rem]"
                                            : "translate-x-0"
                                        }
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                      />
                                    </Switch>
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
        <div className="absolute flex items-center justify-between p-6 bottom-0">
          <div className="flex gap-4 items-center cursor-pointer">
            <img className="w-[15%]" src={Finger} alt="finger" />
            <p className="border-b-4 border-black text-5xl lg:text-7xl">
              ABOUT US
            </p>
          </div>
          <div className="flex gap-4 items-center cursor-pointer">
            <img className="ml-auto w-[15%]" src={Finger} alt="finger" />
            <p className="border-b-4 border-black text-5xl lg:text-7xl">
              DREAM CARD
            </p>
          </div>
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
                  <p className="text-xl font-medium leading-6 text-gray-900 p-1">
                    歡迎來到一隻羊兩隻羊！
                  </p>
                  <p className="text-xl font-medium leading-6 text-gray-900 p-1">
                    這裡除了有解夢卡專區之外
                  </p>
                  <p className="text-xl font-medium leading-6 text-gray-900 p-1">
                    還有更多值得你探索的地方～
                  </p>

                  <p className="text-xl font-medium leading-6 text-gray-900 mt-6">
                    快動動手指製作屬於自己的桌布及解夢卡吧！
                  </p>
                  <p className="text-xl font-medium leading-6 text-gray-900 p-1 mt-8">
                    Welcome to the website of ONE SHEEP, TWO SLEEP.
                  </p>
                  <p className="text-xl font-medium leading-6 text-gray-900 p-1">
                    Aside from our DREAMCARD area,
                  </p>
                  <p className="text-xl font-medium leading-6 text-gray-900 p-1">
                    here’s more to explore. GO make yourself
                  </p>
                  <p className="text-xl font-medium leading-6 text-gray-900 mt-6">
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
