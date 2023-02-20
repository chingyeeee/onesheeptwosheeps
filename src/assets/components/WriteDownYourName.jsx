import { Stage, Layer, Line, Image } from "react-konva";
import { ReactComponent as Title } from "../images/writeDownYourName/writedownyourname.svg";
import { useState, useRef, useEffect } from "react";

const SignatureCanvas = () => {
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

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleClear = () => {
    setLines([]);
  };

  const handleSave = () => {
    const dataURL = stageRef.current.toDataURL();
    console.log(dataURL);
  };

  useEffect(() => {
    if (backgroundRef.current) {
      const width = backgroundRef.current.clientWidth;
      setCanvaWidth(width);
    }
  }, [backgroundRef.current]);

  return (
    <div className="max-w-[80vw] h-[75vh] mx-auto " ref={backgroundRef}>
      <div className="bg-signBlock bg-no-repeat bg-center bg-contain mt-6">
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
                globalCompositeOperation={
                  line.tool === "eraser" ? "destination-out" : "source-over"
                }
              />
            ))}
          </Layer>
        </Stage>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <label>Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
        <div
          className="w-[3.5rem] h-[3.5rem] cursor-pointer bg-save bg-center bg-contain"
          onClick={handleClear}
        ></div>
        <div className="w-[3.5rem] cursor-pointer" onClick={handleSave}></div>
      </div>
    </div>
  );
};

const WriteDownYourName = ({ nextStep }) => {
  return (
    <>
      <Title onClick={nextStep} />
      <SignatureCanvas />
    </>
  );
};

export default WriteDownYourName;
