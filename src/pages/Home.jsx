import clsx from "clsx";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { Fragment, lazy, useEffect, useRef, useState } from "react";
import { ReactComponent as Download } from "../assets/images/icons/icon-download.svg";
import { ReactComponent as Menu } from "../assets/images/icons/icon-menu-sheep.svg";
import BrowserAlert from "../components/BrowserAlert";
import Introduction from "../components/Introduction";
import ItemsTab from "../components/ItemsTab";
import { useToggle } from "../context/useToggle";

const Background = lazy(() => import("../components/Background"));

const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { color, addItemsEnabled, downloadEnabled } = useToggle();

  //cardItems
  const [cardItems, setCardItems] = useState([]);
  //stage Ref
  const stageRef = useRef();
  const pngRef = useRef();

  useEffect(() => {
    if (navigator.userAgent.match(/FB/i) || navigator.userAgent.match(/LINE/i)) {
      setOpenDrawer(true);
    }
  }, []);

  //開啓menu
  function openMenu() {
    setIsOpenMenu(true);
  }

  //download stage as image
  const handleExport = () => {
    const element = pngRef.current;

    html2canvas(element).then((canvas) => {
      canvas.toBlob((blob) => saveAs(blob, "oneSheepTwoSleep.png"));
    });
  };
  return (
    <Fragment>
      <BrowserAlert open={openDrawer} setOpen={setOpenDrawer} />
      <div
        className={clsx("relative min-safe-h-screen md:h-full overflow-hidden touch-none", {
          "bg-purple": color.name === "color4",
          "bg-lightpurple": color.name === "color5",
          "bg-darkgreen": color.name === "color6",
        })}
        ref={pngRef}>
        <Background cardItems={cardItems} setCardItems={setCardItems} stageRef={stageRef} />

        <div className='absolute z-[30] w-[10%] bottom-[15%] left-10 md:left-auto md:bottom-0 md:top-[30%] tv:top-auto tv:bottom-[15%] tv:left-20 flex flex-col gap-7 items-center'>
          <div
            className={clsx("flex flex-col opacity-0 items-center", {
              "opacity-100 cursor-custom": addItemsEnabled,
            })}
            onClick={openMenu}>
            <Menu className='w-[100%] md:w-auto' />
            <p className='text-[8px] md:text-base tv:text-3xl font-bold underline underline-black w-max'>
              add items
            </p>
          </div>

          {downloadEnabled && (
            <div className='flex flex-col items-center cursor-custom' onClick={handleExport}>
              <Download className='w-[100%] scale-110 md:w-auto' />
              <p className='text-[8px] md:text-base tv:text-3xl font-bold underline underline-black w-max'>
                download
              </p>
            </div>
          )}
        </div>
        <ItemsTab
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
          setCardItems={setCardItems}
        />
      </div>
      {!openDrawer && <Introduction />}
    </Fragment>
  );
};

export default Home;
