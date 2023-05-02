import html2canvas from "html2canvas";
import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLongPress } from "use-long-press";
import { ReactComponent as Download } from "../../assets/images/resultCards/nav/icon-download.svg";
import { ReactComponent as Home } from "../../assets/images/resultCards/nav/icon-home.svg";
import { saveAs } from "file-saver";
import { ReactComponent as Share } from "../../assets/images/resultCards/nav/icon-share.svg";
import { getImageUrl } from "../../utils/getImageUrl";
import PromoteFirst from "../Download/PromoteFirst";
import PromoteSec from "../Download/PromoteSec";
import clsx from "clsx";
import mergeImages from "merge-images";

const DownloadAndShare = () => {
  const location = useLocation();
  const { signImgPath, quizAns } = location.state;
  const [resultCardPath, setResultCardPath] = useState(null);
  const [promoteFirstOpen, setPromoteFirstOpen] = useState(false);
  const [promoteSecOpen, setPromoteSecOpen] = useState(false);
  const [cardNo, setCardNo] = useState(1);
  const navigate = useNavigate();

  function getResultCard() {
    const imgFileName = `${quizAns.join("")}.jpg`;
    setResultCardPath(imgFileName);
  }

  const downloadImage = () => {
    const element = document.getElementById("combinedImg");
    element.classList.remove("animate-rotate360");
    html2canvas(element, { backgroundColor: null, scale: 2 }).then((canvas) => {
      canvas.toBlob((blob) => saveAs(blob, `card_${cardNo}.png`));
      setCardNo((no) => no + 1);
    });
    element.classList.add("animate-rotate360");
  };

  //長按儲存

  const onLongPressDownload = useLongPress(() => {
    downloadImage();
  });

  //  分享至社交平台
  async function share() {
    const element = document.getElementById("combinedImg");
    element.classList.remove("animate-rotate360");
    const canvas = await html2canvas(element, { backgroundColor: "black" });
    canvas.toBlob((blob) => {
      navigator.share({
        files: [
          new File([blob], "share.png", {
            type: blob.type,
          }),
        ],
        text: "一隻羊兩隻羊，祝你日日是好夢！\n點擊以下連結來獲得獨一無二的解夢卡！",
        url: "https://onesheeptwosleep.farm/",
      });
    });
    element.classList.add("animate-rotate360");
  }

  function imageToDataUri(img, width) {
    // create an off-screen canvas
    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");

    // set its dimension to target size
    canvas.width = width;
    canvas.height = 200;

    // draw source image into the off-screen canvas:
    ctx.drawImage(img, 0, 0, width, 200);

    // encode image to data-uri with base64 version of compressed image
    return canvas.toDataURL();
  }

  function resizeImage(width) {
    const img = new Image();
    img.onload = resizeImage;
    img.src = signImgPath;
    const newDataUri = imageToDataUri(img, width);
    return newDataUri;
  }
  mergeImages([
    { src: getImageUrl("resultCards", resultCardPath), x: 0, y: 0 },
    { src: resizeImage(400), x: 50, y: 200 },
  ]).then((b64) => {
    document.getElementById("combinedImg").src = b64;
  });

  useEffect(() => {
    getResultCard();
    setPromoteFirstOpen(true);
  }, []);

  return (
    <Fragment>
      <PromoteFirst
        promoteFirstOpen={promoteFirstOpen}
        setPromoteFirstOpen={setPromoteFirstOpen}
        setPromoteSecOpen={setPromoteSecOpen}
      />
      <PromoteSec promoteSecOpen={promoteSecOpen} setPromoteSecOpen={setPromoteSecOpen} />
      <div className='absolute w-full flex inset-y-1/3'>
        <img className='flex-auto' src={signImgPath} />
      </div>
      <div className='absolute w-full h-full flex justify-center items-center'>
        <img
          className={clsx("w-[40%] md:w-[28%] lg:w-[17%] py-5 z-10", {
            "animate-rotate360": !promoteFirstOpen && !promoteSecOpen,
          })}
          id='combinedImg'
        />
      </div>

      <div className='absolute bottom-[10%] right-[5%] flex flex-col md:flex-row gap-2 md:gap-8 items-center z-10'>
        <div
          className='h-[3.5rem] md:h-[4.5rem] flex flex-col items-center justify-between cursor-custom text-sm md:text-base'
          onClick={downloadImage}>
          <Download />
          <p className='underline-offset-1 decoration-black decoration-solid underline'>DOWNLOAD</p>
        </div>
        <div
          className='h-[3.5rem] md:h-[4.5rem] flex flex-col items-center justify-between cursor-custom text-sm md:text-base'
          onClick={() => navigate("/")}>
          <Home />
          <p className='underline-offset-1 decoration-black decoration-solid underline'>HOME</p>
        </div>
        <div
          className='h-[3.5rem] md:h-[4.5rem] flex flex-col items-center justify-between cursor-custom text-sm md:text-base'
          onClick={share}>
          <Share />
          <p className='underline-offset-1 decoration-black decoration-solid underline'>SHARE</p>
        </div>
      </div>
    </Fragment>
  );
};
export default DownloadAndShare;
