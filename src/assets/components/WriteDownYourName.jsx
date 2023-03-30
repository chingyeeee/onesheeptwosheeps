import { Stage, Layer, Line } from "react-konva";
import Title from "../images/writeDownYourName/writedownyourname.svg";
import TitleM from "../images/writeDownYourName/titleM.svg";
import { useState, useRef, useEffect } from "react";
import Reset from "../images/sign/reset.svg";
import Save from "../images/sign/save.svg";
import PrevStep from "../images/sign/prevStep.svg";
import HoverReset from "../images/sign/hoverReset.svg";
import HoverSave from "../images/sign/hoverSave.svg";
import HoverPrevStep from "../images/sign/hoverPrevStep.svg";

const SignatureCanvas = ({ nextStep, setSignImgPath }) => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const stageRef = useRef();
  const backgroundRef = useRef();
  const [color, setColor] = useState("#000000");
  const [canvaWidth, setCanvaWidth] = useState(null);

  const handleMouseDown = () => {
    isDrawing.current = true;
    setLines([...lines, { points: [], color: color }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines([...lines]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleClear = () => {
    setLines([]);
  };

  const returnPrevStep = () => {
    const newLines = lines.slice(0, -1);
    setLines(newLines);
  };

  const handleSave = () => {
    const dataURL = stageRef.current.toDataURL();
    setSignImgPath(dataURL);
    lines.length !== 0 && nextStep();
  };

  useEffect(() => {
    if (backgroundRef.current) {
      const width = backgroundRef.current.clientWidth;
      setCanvaWidth(width);
    }
  }, [backgroundRef.current]);

  return (
    <div
      className="w-[90%] md:w-[80%] md:h-[75vh] mx-auto relative bottom-5"
      ref={backgroundRef}
    >
      <div className="bg-signBlock bg-no-repeat bg-center bg-contain mt-6 relative">
        <Stage
          width={canvaWidth}
          height={
            window.innerWidth < 768 ? `${180}` : `${window.innerHeight * 0.6}`
          }
          ref={stageRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onMouseMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          onMouseUp={handleMouseUp}
          className="mx-auto"
        >
          <Layer>
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.color}
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
              />
            ))}
          </Layer>
        </Stage>
        <p
          className={`absolute inset-0 text-center h-min m-auto text-gray-300 z-[-1] ${
            lines.length !== 0 && "hidden"
          }`}
        >
          （ 寫 下 你 的 名 字 ）
        </p>
      </div>
      <div className="flex gap-16 justify-center items-center mt-4">
        <div className="md:flex gap-2 hidden">
          <div
            className={`${
              color === "#004943" && "border-4 p-2 border-black border-solid"
            } w-[1.5rem] h-[1.5rem] p-[0.2rem] bg-darkgreen cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
            onClick={() => handleColorChange("#004943")}
          />
          <div
            className={`${
              color === "#ff00c9" && "border-4 p-2 border-black border-solid"
            } w-[1.5rem] h-[1.5rem] bg-lightpurple cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
            onClick={() => handleColorChange("#ff00c9")}
          />
          <div
            className={`${
              color === "#0073f7" && "border-4 p-2 border-black border-solid"
            } w-[1.5rem] h-[1.5rem] bg-blue cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
            onClick={() => handleColorChange("#0073f7")}
          />
          <div
            className={`${
              color === "#a6e2c5" && "border-4 p-2 border-black border-solid"
            } w-[1.5rem] h-[1.5rem] bg-lakegreen cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
            onClick={() => handleColorChange("#a6e2c5")}
          />
          <div
            className="w-[1.5rem] h-[1.5rem] bg-white"
            onClick={() => handleColorChange("#fff")}
          />
        </div>
        <div className="flex gap-4">
          <div
            className="w-[3.5rem] cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] group"
            onClick={handleClear}
          >
            <img className={`group-hover:hidden`} src={Reset} alt="reset" />
            <img
              className={`hidden group-hover:block`}
              src={HoverReset}
              alt="reset"
            />
          </div>
          <div
            className="w-[3.5rem] cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] group"
            onClick={returnPrevStep}
          >
            <img
              className={`group-hover:hidden`}
              src={PrevStep}
              alt="prevStep"
            />
            <img
              className={`hidden group-hover:block`}
              src={HoverPrevStep}
              alt="prevStep"
            />
          </div>
          <div
            className="w-[3.5rem] cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] group"
            onClick={handleSave}
          >
            <img className={`group-hover:hidden`} src={Save} alt="save" />
            <img
              className={`hidden group-hover:block`}
              src={HoverSave}
              alt="save"
            />
          </div>
        </div>
        <div className="md:flex gap-2 hidden">
          <div
            className={`${
              color === "#fffa6f" && "border-4 p-2 border-black border-solid"
            } w-[1.5rem] h-[1.5rem] bg-yellow cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
            onClick={() => handleColorChange("#fffa6f")}
          />
          <div
            className={`${
              color === "#20d371" && "border-4 p-2 border-black border-solid"
            } w-[1.5rem] h-[1.5rem] bg-lightgreen cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
            onClick={() => handleColorChange("#20d371")}
          />
          <div
            className={`${
              color === "#ff4a03" && "border-4 p-2 border-black border-solid"
            } w-[1.5rem] h-[1.5rem] bg-red cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
            onClick={() => handleColorChange("#ff4a03")}
          />
          <div
            className={`${
              color === "#a9a9ff" && "border-4 p-2 border-black border-solid"
            } w-[1.5rem] h-[1.5rem] bg-purple cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
            onClick={() => handleColorChange("#a9a9ff")}
          />
          <div
            className={`${
              color === "#000000" && "border-4 p-2 border-grey border-solid"
            } w-[1.5rem] h-[1.5rem] bg-black cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
            onClick={() => handleColorChange("#000000")}
          />
        </div>
      </div>

      <div className="w-[85%] m-auto flex md:hidden flex-wrap mt-12 gap-8 justify-around">
        <div
          className={`${
            color === "#004943" && "border-4 p-2 border-black border-solid"
          } w-[2rem] h-[2rem] bg-darkgreen cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] `}
          onClick={() => handleColorChange("#004943")}
        />
        <div
          className={`w-[2rem] h-[2rem] bg-lightpurple cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] ${
            color === "#ff00c9" && "border-4 border-black border-solid"
          }`}
          onClick={() => handleColorChange("#ff00c9")}
        />
        <div
          className={`w-[2rem] h-[2rem] bg-blue cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] ${
            color === "#0073f7" && "border-4 border-black border-solid"
          }`}
          onClick={() => handleColorChange("#0073f7")}
        />
        <div
          className={`${
            color === "#a6e2c5" && "border-4 p-2 border-black border-solid"
          } w-[2rem] h-[2rem] bg-lakegreen cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
          onClick={() => handleColorChange("#a6e2c5")}
        />
        <div
          className={`${
            color === "#fffa6f" && "border-4 p-2 border-black border-solid"
          } w-[2rem] h-[2rem] bg-yellow cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
          onClick={() => handleColorChange("#fffa6f")}
        />
        <div
          className={`${
            color === "#20d371" && "border-4 p-2 border-black border-solid"
          } w-[2rem] h-[2rem] bg-lightgreen cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
          onClick={() => handleColorChange("#20d371")}
        />
        <div
          className={`${
            color === "#ff4a03" && "border-4 p-2 border-black border-solid"
          } w-[2rem] h-[2rem] bg-red cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
          onClick={() => handleColorChange("#ff4a03")}
        />
        <div
          className={`${
            color === "#a9a9ff" && "border-4 p-2 border-black border-solid"
          } w-[2rem] h-[2rem] bg-purple cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
          onClick={() => handleColorChange("#a9a9ff")}
        />
        <div
          className={`${
            color === "#000000" && "border-4 p-2 border-grey border-solid"
          } w-[2rem] h-[2rem] bg-black cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]`}
          onClick={() => handleColorChange("#000000")}
        />
        <div className={` w-[2rem] h-[2rem] bg-transparent`} />
      </div>
    </div>
  );
};

const WriteDownYourName = ({ nextStep, setSignImgPath }) => {
  return (
    <div className="w-full min-h-inherit flex flex-col relative justify-center items-center overflow-hidden">
      <div>
        <img
          className="max-w-[90%] mx-auto hidden md:block"
          src={Title}
          alt="Write Down Your Name"
        />
        <img
          className="max-w-[90%] mx-auto mb-12 md:hidden"
          src={TitleM}
          alt="Write Down Your Name"
        />
        <SignatureCanvas nextStep={nextStep} setSignImgPath={setSignImgPath} />
      </div>
    </div>
  );
};

export default WriteDownYourName;
