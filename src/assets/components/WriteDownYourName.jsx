import { Stage, Layer, Line } from "react-konva";
import { ReactComponent as Title } from "../images/writeDownYourName/writedownyourname.svg";
import { useState, useRef, useEffect } from "react";
import Reset from "../images/sign/reset.svg";
import Save from "../images/sign/save.svg";
import HoverReset from "../images/sign/hoverreset.svg";
import HoverSave from "../images/sign/hoversave.svg";

const SignatureCanvas = ({ nextStep }) => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const stageRef = useRef();
  const backgroundRef = useRef();
  const [color, setColor] = useState("#000000");
  const [canvaWidth, setCanvaWidth] = useState(null);
  const [signImgPath, setSignImgPath] = useState(null);

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

  const handleSave = () => {
    const dataURL = stageRef.current.toDataURL();
    console.log(dataURL);
    lines.length !== 0 && nextStep();
  };

  useEffect(() => {
    if (backgroundRef.current) {
      const width = backgroundRef.current.clientWidth;
      setCanvaWidth(width);
    }
  }, [backgroundRef.current]);

  return (
    <div className="max-w-[80vw] h-[75vh] mx-auto " ref={backgroundRef}>
      <div className="bg-signBlock bg-no-repeat bg-center bg-contain mt-6 relative">
        <Stage
          width={canvaWidth}
          height={window.innerHeight * 0.6}
          ref={stageRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
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
        <div className="flex gap-2">
          <div
            className="w-[1.5rem] h-[1.5rem] bg-darkgreen cursor-pointer"
            onClick={() => handleColorChange("#004943")}
          />
          <div
            className="w-[1.5rem] h-[1.5rem] bg-lightpurple cursor-pointer"
            onClick={() => handleColorChange("#ff00c9")}
          />
          <div
            className="w-[1.5rem] h-[1.5rem] bg-blue cursor-pointer"
            onClick={() => handleColorChange("#0073f7")}
          />
          <div
            className="w-[1.5rem] h-[1.5rem] bg-lakegreen cursor-pointer"
            onClick={() => handleColorChange("#a6e2c5")}
          />
        </div>
        <div className="flex gap-4">
          <div
            className="w-[3.5rem] cursor-pointer group"
            onClick={handleClear}
          >
            <img className={`group-hover:hidden`} src={Reset} alt="reset" />
            <img
              className={`hidden group-hover:block`}
              src={HoverReset}
              alt="reset"
            />
          </div>
          <div className="w-[3.5rem] cursor-pointer group" onClick={handleSave}>
            <img className={`group-hover:hidden`} src={Save} alt="save" />
            <img
              className={`hidden group-hover:block`}
              src={HoverSave}
              alt="save"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div
            className="w-[1.5rem] h-[1.5rem] bg-yellow cursor-pointer"
            onClick={() => handleColorChange("#fffa6f")}
          />
          <div
            className="w-[1.5rem] h-[1.5rem] bg-lightgreen cursor-pointer"
            onClick={() => handleColorChange("#20d371")}
          />
          <div
            className="w-[1.5rem] h-[1.5rem] bg-red cursor-pointer"
            onClick={() => handleColorChange("#ff4a03")}
          />
          <div
            className="w-[1.5rem] h-[1.5rem] bg-purple cursor-pointer"
            onClick={() => handleColorChange("#a9a9ff")}
          />
        </div>
      </div>
    </div>
  );
};

const WriteDownYourName = ({ nextStep }) => {
  return (
    <div className="w-screen">
      <Title />
      <SignatureCanvas nextStep={nextStep} />
    </div>
  );
};

export default WriteDownYourName;
