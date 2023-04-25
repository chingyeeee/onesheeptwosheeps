import { Dialog, Tab, Transition } from "@headlessui/react";
import TabData from "../../assets/data/TabList.json";

import clsx from "clsx";
import { Fragment } from "react";
import LogoTab from "./LogoTab";
import StickersTab from "./StickersTab";
import SettingsTab from "./SettingsTab";
const ItemsTab = ({ isOpenMenu, setIsOpenMenu, setColor, setCardItems }) => {
  function closeMenu() {
    setIsOpenMenu(false);
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
                          clsx(
                            "w-full py-1 md:py-2.5 text-xs md:text-lg font-medium leading-5 ring-white ring-opacity-60 focus:outline-none focus:ring-2",
                            {
                              "before:block before:absolute before:-inset-1 before:bg-lightpurple before:rounded-md before:z-[-1] before:scale-[0.65] relative inline-block text-white":
                                selected,
                              "text-black": !selected,
                              "border-x-2 md:border-x-4 border-black": tab === "1SHEEP2SLEEP",
                            }
                          )
                        }>
                        {tab}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className='p-6 max-h-[40vh] md:max-h-[65vh] overflow-y-auto'>
                    <StickersTab setCardItems={setCardItems} />
                    <LogoTab setCardItems={setCardItems} />
                    <SettingsTab setColor={setColor} />
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
export default ItemsTab;
