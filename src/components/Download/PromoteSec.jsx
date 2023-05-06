import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Arrow from "../../assets/images/resultCards/nav/icon-arrow.svg";
import Logo from "../../assets/images/resultCards/nav/icon-logo.svg";

const PromoteSec = ({ promoteSecOpen, setPromoteSecOpen }) => {
  const closepromote = () => {
    setPromoteSecOpen(false);
  };
  return (
    <Transition appear show={promoteSecOpen} as={Fragment}>
      <Dialog as='div' className='relative z-[30]' onClose={closepromote}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black bg-opacity-25 z-[29] overflow-hidden' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto z-[30]'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className=' w-full max-w-2xl tv:max-w-[85%] transform rounded-2xl bg-white px-6 pt-16 md:pt-24 pb-12 tv:pt-44 tv:pb-40 align-middle shadow-xl transition-all text-center relative z-[10]'>
                <img
                  className='w-[80%] absolute left-0 right-0 mx-auto -top-[10%] md:-top-[20%] z-[20] tv:-top-[17%]'
                  src={Logo}
                />
                <div className='flex flex-col gap-4 items-center'>
                  <p className='text-md tv:text-2xl font-medium'>
                    1.下載屬於你的解夢卡 <br />
                    CLICK BUTTON TO DOWNLOAD THE DREAMCARD.
                  </p>
                  <img className='w-[1.5rem]' src={Arrow} />
                  <p className='text-md tv:text-2xl font-medium'>
                    2.追蹤「一隻羊，兩隻羊」IG <br />
                    FOLLOW OUR INSTARGRAM.
                  </p>

                  <img className='w-[1.5rem]' src={Arrow} />
                  <p className='text-md tv:text-2xl font-medium'>
                    3.分享出去並標記我們！
                    <br />
                    REMEMBER TO SHARE AND TAG US!
                  </p>
                  <p className='absolute bottom-2 text-lg'>@onesheep_twosleep</p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default PromoteSec;
