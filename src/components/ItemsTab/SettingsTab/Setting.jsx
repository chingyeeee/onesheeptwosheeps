import { Switch } from "@headlessui/react";

const Setting = ({ toggle, setToggle, word }) => {
  return (
    <Switch
      value={toggle}
      checked={toggle}
      onChange={setToggle}
      className={`${toggle ? "bg-black" : "bg-gray-300"}
            relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
      <span className='sr-only'>Use {word}</span>
      <span
        aria-hidden='true'
        className={`${toggle ? "translate-x-[1.6rem]" : "translate-x-0"}
              pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};
export default Setting;
