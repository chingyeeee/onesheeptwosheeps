import clsx from "clsx";
import { Link } from "react-router-dom";
import { ReactComponent as Finger } from "../assets/images/icons/icon-finger.svg";

const ShortCut = ({ toggle, path, text, colorObj }) => {
  const { color } = colorObj;
  return (
    toggle && (
      <div className='flex gap-4 items-center cursor-custom'>
        <Finger
          className={clsx(
            "w-[2.5rem] md:w-[5rem] h-auto animate-finger-shake",
            `stroke-${color} fill-${color}`
          )}
        />
        <Link
          to={path}
          className={clsx(
            "underline-offset-8 md:decoration-4 decoration-solid underline w-max text-2xl md:text-5xl lg:text-[4rem]",
            `decoration-${color} text-${color} border-${color} stroke-${color} fill-${color}"`
          )}>
          {text}
        </Link>
      </div>
    )
  );
};

export default ShortCut;
