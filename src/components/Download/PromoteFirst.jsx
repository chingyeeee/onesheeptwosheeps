import { Dialog, Transition } from "@headlessui/react";

import { Fragment } from "react";
const PromoteFirst = ({ promoteFirstOpen, setPromoteFirstOpen, setPromoteSecOpen }) => {
  const closepromote = () => {
    setPromoteFirstOpen(false);
    setPromoteSecOpen(true);
  };
  return (
    <Transition appear show={promoteFirstOpen} as={Fragment}>
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
              <Dialog.Panel className='w-full max-w-2xl transform rounded-2xl bg-white px-6  py-8 align-middle shadow-xl transition-all text-center relative z-[10]'>
                <div className='flex flex-col gap-4 items-center'>
                  <p className='text-md font-medium'>
                    獨一無二の解夢卡出爐啦！ <br />
                    YOUR ONE AND ONLY DREAMCARD IS NOW READY!
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default PromoteFirst;
