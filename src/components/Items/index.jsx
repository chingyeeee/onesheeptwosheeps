import { Dialog, Tab, Transition } from "@headlessui/react";
import TabData from "../../assets/data/TabList.json";
import { v4 as uuidv4 } from "uuid";

import { Fragment } from "react";
import { getImageUrl } from "../../utils/getImageUrl";
const Items = ({
  isOpenMenu,
  setIsOpenMenu,
  posX,
  posY,
  handleSwitchInput,
  setColor,
  setCardItems,
}) => {
  function closeMenu() {
    setIsOpenMenu(false);
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Transition appear show={isOpenMenu} as={Fragment}>
      <Dialog as='div' className='relative z-[31]' onClose={closeMenu}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-white bg-opacity-50' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='min-h-full'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='w-[110%] md:w-[50%] max-h-[50vh] md:min-h-[75vh] mr-auto transform overflow-hidden text-center align-middle transition-all absolute bottom-0 md:bottom-auto md:top-[20%] -left-[5%] border-2 md:left-[12%] md:border-4 border-black rounded-xl bg-white px-4'>
                <Tab.Group>
                  <Tab.List className='flex py-2 md:py-4 border-b-2 md:border-b-4 border-black space-x-0.5'>
                    {Object.keys(TabData).map((tab) => (
                      <Tab
                        key={tab}
                        className={({ selected }) =>
                          classNames(
                            "w-full py-1 md:py-2.5 text-xs md:text-lg font-medium leading-5",
                            "ring-white ring-opacity-60 focus:outline-none focus:ring-2",
                            selected
                              ? "before:block before:absolute before:-inset-1 before:bg-lightpurple before:rounded-md before:z-[-1] before:scale-[0.65] relative inline-block text-white"
                              : "text-black",
                            `${tab === "1SHEEP2SLEEP" && "border-x-2 md:border-x-4 border-black "}`
                          )
                        }>
                        {tab}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className='p-6 max-h-[40vh] md:max-h-[65vh] overflow-y-auto'>
                    <Tab.Panel>
                      <div className='mt-6 columns-3 md:columns-4'>
                        {TabData["STiCKERS"].map((sticker, idx) => {
                          return (
                            <img
                              className={`w-full cursor-custom hover:bg-[#a9a9ff40] place-self-start`}
                              key={sticker}
                              src={getImageUrl("stickers", sticker)}
                              onClick={(e) => {
                                setCardItems((cardItems) => [
                                  ...cardItems,
                                  {
                                    image: sticker,
                                    x: posX,
                                    y: posY,
                                    width: e.target.width,
                                    height: e.target.height,
                                    id: uuidv4(),
                                    folder: "stickers",
                                  },
                                ]);
                              }}
                            />
                          );
                        })}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <h3 className='text-5xl text-left font-semibold'>LOGOTYPES_</h3>
                      <div className='flex flex-col gap-12 mt-6'>
                        {TabData["1SHEEP2SLEEP"].map((logo) => {
                          return (
                            <img
                              className='w-[80%] cursor-custom hover:bg-[#a9a9ff40] m-auto'
                              key={logo}
                              src={getImageUrl("cardLogos", logo)}
                              onClick={(e) =>
                                setCardItems((cardItems) => [
                                  ...cardItems,
                                  {
                                    image: logo,
                                    x: posX,
                                    y: posY,
                                    width: e.target.width,
                                    height: e.target.height,
                                    id: uuidv4(),
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
                      <h3 className='text-5xl text-left font-semibold'>
                        COLOR <br />
                        CHANGE_
                      </h3>
                      <div className='flex flex-wrap gap-4 mt-6'>
                        {TabData["BACKGROUND"].color.map((background) => {
                          return (
                            <img
                              className='w-[10%] cursor-custom'
                              key={background}
                              src={getImageUrl("cardColors", background)}
                              onClick={() => setColor(background)}
                            />
                          );
                        })}
                      </div>
                      <h3 className='text-5xl font-semibold text-left mt-12'>
                        BACKGROUND <br />
                        WORDS_
                      </h3>
                      <div className='flex flex-col gap-4 mt-6'>
                        {TabData["BACKGROUND"].word.map((word) => {
                          return (
                            <div
                              key={word}
                              className='rounded-md border-2 border-black p-2 flex justify-between items-center'>
                              <p className='text-lg font-bold'>{word}</p>
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
  );
};
export default Items;
