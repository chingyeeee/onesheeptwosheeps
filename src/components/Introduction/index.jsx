import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CloudMobileCH from "../../assets/images/icons/icon-cloud-mobile-ch.svg";
import CloudMobileEn from "../../assets/images/icons/icon-cloud-mobile-en.svg";
import Cloud from "../../assets/images/icons/icon-cloud.svg";
import ToggleText from "../../components/ToggleText";
import { useIntro } from "../../context/useIntro";

const Introduction = () => {
  const { isIntro, closeIntro } = useIntro();
  return (
    <Transition appear show={isIntro} as={Fragment}>
      <Dialog as='div' className='relative z-[32]' onClose={closeIntro}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-purple bg-opacity-95' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-x-hidden overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel
                className='w-full transform md:overflow-hidden text-center align-middle transition-all text-sm md:text-lg font-medium leading-6 text-gray-900'
                onClick={closeIntro}>
                <img className='scale-[0.8] hidden md:block' src={Cloud} alt='cloud' />
                <img className='scale-90 md:hidden' src={CloudMobileCH} alt='cloud' />
                <img className='scale-90 md:hidden' src={CloudMobileEn} alt='cloud' />
              </Dialog.Panel>
            </Transition.Child>
            <ToggleText />
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default Introduction;
