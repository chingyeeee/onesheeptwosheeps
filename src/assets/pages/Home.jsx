import { lazy } from "react";
import Menu from "../images/icon-menu-sheep.svg";
import Finger from "../images/icon-finger.svg";

const Welcome = lazy(() => import("../components/Welcome"));

const Home = () => {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col justify-between">
        <div className="">
          <Welcome />
          <div className="w-[15%] md:-mt-24 lg:-mt-48 flex flex-col gap items-center">
            <img className="w-[35%]" src={Menu} alt="menu" />
            <p className="border-b border-black">add items</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex gap-4 items-center cursor-pointer">
            <img className="w-[15%]" src={Finger} alt="finger" />
            <p className="border-b border-black text-5xl lg:text-7xl">
              ABOUT US
            </p>
          </div>
          <div className="flex gap-4 items-center cursor-pointer">
            <img className="ml-auto w-[15%]" src={Finger} alt="finger" />
            <p className="border-b border-black text-5xl lg:text-7xl">
              DREAM CARD
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Modal */}
    </>
  );
};

export default Home;
