import { Dialog, Disclosure, Transition } from "@headlessui/react";
import html2canvas from "html2canvas";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLongPress } from "use-long-press";
import Loading1 from "../../images/quiz/loading/loading1.svg";
import Loading2 from "../../images/quiz/loading/loading2.svg";
import Loading3 from "../../images/quiz/loading/loading3.svg";
import Loading4 from "../../images/quiz/loading/loading4.svg";
import Loading5 from "../../images/quiz/loading/loading5.svg";
import { ReactComponent as ChevronUp } from "../../images/quiz/showResult/chevronUp.svg";
import LeftMarquee from "../../images/quiz/showResult/left-marquee.svg";
import Marquee from "../../images/quiz/showResult/marquee.svg";
import RightMarquee from "../../images/quiz/showResult/right-marquee.svg";
import Arrow from "../../images/resultCards/nav/icon-arrow.svg";
import { ReactComponent as Download } from "../../images/resultCards/nav/icon-download.svg";
import { ReactComponent as Home } from "../../images/resultCards/nav/icon-home.svg";
import Logo from "../../images/resultCards/nav/icon-logo.svg";
import { ReactComponent as Share } from "../../images/resultCards/nav/icon-share.svg";
import { getImageUrl } from "../../utils/getImageUrl";
import Question1 from "./Qustion1";
import Question2 from "./Qustion2";
import Question3 from "./Qustion3";
import Question4 from "./Qustion4";
import Question5 from "./Qustion5";
import Question6 from "./Qustion6";

const GeneratingResult = ({ setQuestionNum }) => {
  setTimeout(() => setQuestionNum(8), 3000);
  return (
    <div className='w-[75%] md:max-w-[50%] m-auto text-center'>
      <div className='flex m-auto justify-center'>
        <img className='w-[3.5rem] md:w-[5rem]' src={Loading1} alt='Loading1' />
        <img className='w-[3.5rem] md:w-[5rem]' src={Loading2} alt='Loading2' />
        <img className='w-[3.5rem] md:w-[5rem]' src={Loading3} alt='Loading3' />
        <img className='w-[3.5rem] md:w-[5rem]' src={Loading4} alt='Loading4' />
      </div>
      <p className='md:text-lg mt-4'>WHAT YOU DREAM LEADS YOU BECOMING A BETTER MAN.</p>
      <span className='block animate-loaded h-[1rem] bg-blue mt-4' />
    </div>
  );
};

const ShowResult = ({ signImgPath, quizAns, otherAns, setQuestionNum }) => {
  function getEmotion() {
    switch (quizAns[0]) {
      case "A":
        return [
          "悲傷",
          "sad",
          "有一種悲傷～是笑著與你分開思念卻背對背張望～哭啊、喊阿～好好的擁抱自己吧，這無關對錯，只是情緒的出口，請相信你的世界仍充滿絢麗的陽光，那些過不去的坎…..都是因為你腿短。",
          "原本想一口一口吃掉憂愁，不料卻一口一口吃成胖子。",
        ];
      case "B":
        return [
          "無感",
          "feel nothing",
          "人生百態，笑笑看待，我們做人啊，要記得及時行樂，天天快樂，多買可樂。在這座城市，誰先認真，誰就輸了，古人說：自殺不能解決問題，但裝死可以：））",
          "生活就像鴨子游水，別人只看水面悠閒的樣子，沒人知道水下的雙腳有多拼命。每個人都只是在不動聲色地努力罷了。",
        ];
      case "C":
        return [
          "恐懼",
          "fear",
          "不哭不哭眼淚是珍珠，越哭越像豬～做惡夢不怕不怕，最怕的是走建國路回家但後座少ㄌ泥！經過惡夢的洗禮恭喜你成功挺ㄌ過來，你「兵來將擋、水來土掩」，生活中的挫折都無法將你輕易打敗～試著傾聽自己內心的聲音，不要逃避也不要害怕，你會成為更好的自己。",
        ];
      case "D":
        return [
          "性歡愉",
          "sexual pleasure",
          "對你的愛，不只說說，因為剩下….都用做的。👌 💦 🍑今晚，我要你愛，我要你為了我變壞，如果可以，只想和你…回到那天相遇。",
          "愛情，笑起來很甜，嚐起來很鹹。",
          "白天只想讓你…心上有我，夜晚也想讓你身上有我。",
          "脫了衣服我是禽獸，穿上衣服我是衣冠禽獸！",
        ];
      case "E":
        return [
          "厭惡",
          "disgust",
          "面對討厭的人事物，唯一的解決辦法就是….讓他更討厭你🤪，物極必反、負負得正、愛拼才會贏。",
        ];
      case "F":
        return [
          "憤怒",
          "angry",
          "別惹我，否則我會讓你死得很有節奏感。媽媽說：讀書是為了心平氣和地跟傻逼說話，而健身是為了讓傻逼心平氣和地跟你說話。現在我明白了，謝謝那些曾經擊倒我的人，躺著真舒服。",
        ];
      case "G":
        return [
          "驚嚇",
          "terrified",
          "兄弟你說 ：你若不勇敢，誰替你堅強？當時，真的是害怕吉了， 要記住！情況越嚴重，越困難，就越需要堅定，別亂了陣腳。",
          "為什麼要怕鬼，害你的全是人。 人只要不失去方向，就不會失去自己！人生重要的不是所站的位置，而是所朝的方向。",
        ];
      case "H":
        return [
          "幸福滿足",
          "happy satisfied",
          "最近的你生活順利滿福堡、心靈富足比奇堡，樂悠悠的快樂好比海綿寶寶跟派大星，至於章魚哥？算了吧。保持你的好心情和正能量，沒事多喝水，多喝水沒事…",
        ];
    }
  }

  const percentageArray = [
    getRandomPercentage(94, 70),
    getRandomPercentage(80, 50),
    getRandomPercentage(94, 70),
  ];

  const twoChoices = getRandomPercentage(3, 2);
  const fourChoices = getRandomPercentage(5, 2);

  function getRandomPercentage(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getCharacter() {
    if (quizAns[1] === "1") {
      if (otherAns[1] === "myself") {
        return [
          "人",
          "people",
          "要好好愛自己，因為沒有人會愛你，夢見那個始終不離不棄的你，好好享受孤獨吧。一個人想著一個人，到頭來才發現，原來最長的戀愛，叫自戀。",
        ];
      } else if (otherAns[1] === "strangers") {
        return [
          "人",
          "people",
          "想念是會呼吸的痛，相信夢到的那個他在你的生命中佔了一席之地，人生的旅途一路顛簸，有人留下、有人離開，但這些都是為了讓你成為更完整、更完美的人。所以愛我別走～希望你愛的那個他都能留在你身邊。",
        ];
      } else if (otherAns[1] === "acquaintance") {
        return [
          "人",
          "people",
          "有些人跟牛排一樣，不要太熟比較好，來衝衝去衝衝，轟隆轟隆，別為了不屬於你的觀眾，演了一段你根本不喜歡的人生。",
        ];
      } else if (otherAns[1] === "significant other") {
        return [
          "人",
          "people",
          "對你而言，最遠的不是沒有緣分，而是從熟識變得陌生，對我而言，最遙遠的距離是他媽的星期一到星期五💩",
          "我喜歡你，就像你媽打你……不講道理。",
        ];
      }
    } else if (quizAns[1] === "2") {
      if (otherAns[1] === "positive") {
        return [
          "鬼神",
          "ghost",
          "R們R們，上帝關上一扇門，必定開啟一扇窗，讓你跳下去。日子過得好苦呀～靜下來多留意身旁的人事物，走走平時不會走的路，就算跌倒，也要豪邁地笑，是驚喜、是驚嚇？下一個轉角是什麼？拐個彎，搞不好幸運小精靈就在你身邊。",
        ];
      } else if (otherAns[1] === "negative") {
        return [
          "鬼神",
          "ghost",
          "夜路走多，總會遇到鬼😨，原來那不是別人，是藏在我們內心的魔鬼，總在夜闌人靜的時候跑出來，讓我們變得脆弱、不安。歇會歇會吧～～生活是否覺得疲憊了？那就對了！因為舒服是負責留給有錢人的🤭，笑一個吧，快樂快樂才叫做意義！",
        ];
      }
    } else if (quizAns[1] === "3") {
      if (otherAns[1] === "threatening") {
        return [
          "不存在的生物",
          "undefined mysterious animal",
          "有怪獸、大怪獸，一直纏著我～被生活壓的喘不過氣的你是不是要netflix and chill一下？現實生活就像是寶可夢ㄉ世界，面對火箭隊來勢洶洶ㄉ進擊，或許你需要一隻皮卡丘來跟你並肩作戰！試著讓自己放鬆一下吧！",
        ];
      } else if (otherAns[1] === "not threatening") {
        return [
          "不存在的生物",
          "undefined mysterious animal",
          "面對外物的紛紛擾擾，我不會眼睜睜讓你去送死，我會閉上眼睛。老話說得好呀：心靜則清，心清則明，當心真正沉靜下來之後，生活隨即而來也將變得輕鬆隨性。",
        ];
      }
    } else if (quizAns[1] === "4") {
      return ["動物", "animal", "動物是人類最好的朋友，從小我就開始培養最穩固的友誼，名叫侯友宜。"];
    }
  }

  function getLifeStyle() {
    switch (quizAns[2]) {
      case "X":
        return [
          "自然現象",
          "natural",
          "世界上最寬闊的是海洋，比海洋更寬闊的是天空，在這大自然中，自然而然地忘卻生活中所有的不愉快，腦海裡滋生出許多美好的想法，心底也覺得像大海一樣很寬、很寬……宰相肚裡能撐船，而我撐的卻是整座食堂，人生苦短，再來給我三百碗…..",
        ];
      case "Y":
        return [
          "日常生活",
          "normal",
          "人生苦短，必須性感，每天來點儀式感。偶爾為生活添加一些樂子，替平凡加入一點美麗的藥水💦",
          "早起可以做很多事，比如說再睡個回籠覺。",
          "一早醒來我以為我長大了，原來是被子蓋橫了。",
          "不要放棄你的夢！繼續睡！棉被以外的地方，都是遠方，請先不要叫我起床。成人的世界除了長胖，一切都不容易。",
        ];
      case "Z":
        return [
          "小說情節",
          "novel",
          "想像力就是你的超能力，奶油獅都沒你這麼有創意！BLACKPINK的演唱會規模都不及你腦內的派對，天馬行空的你總是有機靈古怪的想法，有想法就去衝！get ‘em get ‘em",
          "很喜歡你的愚蠢，總是那麼富有想像力。",
        ];
    }
  }

  return (
    <div className='relative min-safe-h-screen overflow-hidden'>
      <div className='bg-blue h-[2rem] md:h-[5rem] relative overflow-hidden'>
        <div className='absolute inset-y-0 m-auto flex animate-marquee w-[200%]'>
          <object type='image/svg+xml' data={Marquee} className='w-[50%] h-auto' />
          <object type='image/svg+xml' data={Marquee} className='w-[50%] h-auto' />
          <object type='image/svg+xml' data={Marquee} className='w-[50%] h-auto' />
          <object type='image/svg+xml' data={Marquee} className='w-[50%] h-auto' />
        </div>
      </div>
      <div className='bg-yellow absolute left-0 w-[2rem] md:w-[5rem] min-h-inherit h-full overflow-hidden'>
        <div className='absolute inset-x-0 m-auto flex flex-col animate-marqueeV h-[200%]'>
          <object type='image/svg+xml' data={LeftMarquee} className='h-[50%] md:h-[100%] w-auto' />
          <object type='image/svg+xml' data={LeftMarquee} className='h-[50%] md:h-[100%] w-auto' />
          <object type='image/svg+xml' data={LeftMarquee} className='h-[50%] md:h-[100%] w-auto' />
          <object type='image/svg+xml' data={LeftMarquee} className='h-[50%] md:h-[100%] w-auto' />
        </div>
      </div>
      <div className='bg-purple absolute right-0 w-[2rem] md:w-[5rem] min-h-inherit h-full overflow-hidden'>
        <div className='absolute inset-x-0 m-auto flex flex-col animate-marqueeV h-[200%]'>
          <object type='image/svg+xml' data={RightMarquee} className='h-[50%] md:h-[100%] w-auto' />
          <object type='image/svg+xml' data={RightMarquee} className='h-[50%] md:h-[100%] w-auto' />
          <object type='image/svg+xml' data={RightMarquee} className='h-[50%] md:h-[100%] w-auto' />
          <object type='image/svg+xml' data={RightMarquee} className='h-[50%] md:h-[100%] w-auto' />
        </div>
      </div>
      <img
        src={Loading5}
        className={
          "absolute -right-[0.1rem] -top-[0.1rem] w-[2.13rem] h-[2.13rem] md:w-[5.1rem] md:h-[5.2rem]"
        }
      />
      <img
        src={Loading2}
        className={
          "absolute -left-[0.1rem] -top-[0.1rem] w-[2.13rem] h-[2.13rem] md:w-[5.13rem] md:h-[5.2rem]"
        }
      />

      <div className='w-[80%] mx-auto md:w-full px-4 md:pt-6 pb-12 min-safe-h-screen overflow-scroll'>
        <img className='m-auto h-[8rem] md:h-[12rem] mb-2' src={signImgPath} alt='yourName' />
        <div className='mx-auto w-full max-w-3xl bg-white px-2 pb-8'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-t-2 border-blue p-3 text-left text-sm font-medium focus:outline-none relative z-[20]'>
                  <p className='md:text-lg text-blue'>
                    (1) <br />有{percentageArray[0]}%的人也跟你一樣做了（ {getEmotion()[0]} ）的夢{" "}
                    <br />
                    BASED ON YOUR CHOICE, <br />
                    YOU HAVE A <span className='font-padyakke text-red'>({getEmotion()[1]})</span>
                    <span className='text-red'> {getEmotion()[0]} </span>
                    DREAM.
                  </p>
                  <ChevronUp
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='p-3 space-y-8 text-sm md:text-md text-red relative flex flex-col items-end z-[10]'>
                  <img
                    className='md:scale-100 scale-[1.4]'
                    src={getImageUrl("quiz/showResult", `${quizAns[0]}.svg`)}
                  />

                  <p className='underline-offset-1 decoration-red decoration-solid underline'>
                    {quizAns[0] === "D"
                      ? getEmotion()[fourChoices]
                      : quizAns[0] === "A" || quizAns[0] === "B" || quizAns[0] === "G"
                      ? getEmotion()[twoChoices]
                      : getEmotion()[2]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-t-2 border-blue p-3 text-left text-sm font-medium focus:outline-none relative z-[20]'>
                  <p className='md:text-lg text-blue'>
                    (2) <br />而{percentageArray[1]}%的人夢境中的主角是（
                    {getCharacter()[0]}） <br />
                    WITH
                    <span className='font-padyakke text-red'>({getCharacter()[1]})</span>
                    <span className='text-red'>{getCharacter()[0]}</span>
                    BECOMING YOUR DREAM’S <br />
                    MAIN OBJECT.{" "}
                  </p>
                  <ChevronUp
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='p-3 space-y-8 text-sm md:text-md text-red relative flex flex-col items-end z-[10] w-full'>
                  <img
                    className='md:scale-100 scale-[1.4]'
                    src={getImageUrl("quiz/showResult", `${quizAns[1]}.svg`)}
                  />
                  <p className='underline-offset-1 decoration-red decoration-solid underline'>
                    {otherAns[1] === "significant other"
                      ? getCharacter()[twoChoices]
                      : getCharacter()[2]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-between border-t-2  border-blue p-3 text-left text-sm font-medium focus:outline-none relative z-[20] ${
                    !open && "border-b-2"
                  }`}>
                  <p className='md:text-lg text-blue'>
                    (3) <br />
                    {percentageArray[1]}%的人做了有關（
                    {getLifeStyle()[0]}） 的夢
                    <br /> AND YOUR DREAM IS ALL ABOUT{""}
                    <span className='font-padyakke text-red'>({getLifeStyle()[1]})</span>
                    <span className='text-red'>{getLifeStyle()[0]}</span>
                  </p>
                  <ChevronUp
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className={`p-3 space-y-8 text-sm md:text-md text-red relative flex flex-col items-end z-[10] ${
                    open && "border-b-2 border-blue"
                  }`}>
                  <img
                    className='md:scale-100 scale-[1.4]'
                    src={getImageUrl("quiz/showResult", `${quizAns[2]}.svg`)}
                  />

                  <p className='underline-offset-1 decoration-red decoration-solid underline'>
                    {quizAns[2] === "Y"
                      ? getLifeStyle()[fourChoices]
                      : quizAns[2] === "X"
                      ? getLifeStyle()[2]
                      : getLifeStyle()[twoChoices]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div
            className={`px-8 py-2 cursor-custom text-darkgreen border-2 border-darkgreen rounded-full w-max mx-auto mt-12 mb-12 hover:bg-darkgreen hover:text-white transition animate-lightening2`}
            onClick={() => setQuestionNum(9)}>
            生成解夢卡
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowResultCard = ({ signImgPath, quizAns }) => {
  const [resultCardPath, setResultCardPath] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [cardNo, setCardNo] = useState(1);
  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
  }

  function getResultCard() {
    const imgFileName = `${quizAns.join("")}.jpg`;
    setResultCardPath(imgFileName);
  }

  const downloadImage = () => {
    const element = document.getElementById("combinedImg");
    element.classList.remove("animate-rotate360");
    html2canvas(element, { backgroundColor: null }).then((canvas) => {
      const imgSrc = canvas.toDataURL();
      const link = document.createElement("a");
      link.download = `sheep_${String(cardNo).padStart(3, "0")}.png`;
      link.href = imgSrc;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setCardNo(cardNo + 1);
    });
    element.classList.add("animate-rotate360");
  };

  //長按儲存
  const onLongPressDownload = useLongPress(() => {
    const element = document.getElementById("combinedImg");

    element.classList.remove("animate-rotate360");

    html2canvas(element, { backgroundColor: null }).then((canvas) => {
      const imgSrc = canvas.toDataURL();

      // 使用 FileTransfer 插件下載圖片
      const fileTransfer = new FileTransfer();
      const fileName = `sheep_${String(cardNo).padStart(3, "0")}.png`;
      const fileUrl = cordova.file.externalRootDirectory + "DCIM/Camera/" + fileName;

      fileTransfer.download(
        imgSrc,
        fileUrl,
        (entry) => {
          console.log("Download success: " + entry.toURL());
        },
        (error) => {
          console.log("Download error: " + error);
        },
        false
      );

      setCardNo(cardNo + 1);
    });

    element.classList.add("animate-rotate360");
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
        text: "快來超神準心理測驗one sheep two sheep，6個問題測出你的真實模樣&隱藏性格特質",
        url: "https://onesheeptwosleep.farm/",
      });
    });
    element.classList.add("animate-rotate360");
  }

  useEffect(() => {
    getResultCard();
    setTimeout(() => setIsShow(false), 1500);
    setTimeout(() => setIsOpen(true), 1600);
  }, []);

  return (
    <div className='min-h-inherit w-screen md:flex justify-center items-center relative'>
      <img
        className='absolute md:static inset-y-0 h-min w-full md:w-[80%] m-auto'
        src={signImgPath}
      />
      <div
        className={`absolute inset-y-0 h-min m-auto flex justify-center py-8 ${
          !isShow && !isOpen && "animate-rotate360"
        } bg-transparent`}
        id='combinedImg'
        {...onLongPressDownload()}>
        <img
          className='absolute scale-[0.3] md:scale-[0.2] z-[20] top-6 -left-2 md:top-4 md:-left-8 rotate-6'
          src={signImgPath}
        />
        <img
          className='w-[50%] md:w-[35%] rotate-3'
          src={getImageUrl("resultCards", resultCardPath)}
        />
      </div>
      <div className='absolute z-10 bottom-[15%] md:bottom-[10%] right-[5%] flex flex-col md:flex-row gap-2 md:gap-8 items-center'>
        <div
          className='h-[3.5rem] md:h-[4.5rem] flex flex-col items-center justify-between cursor-custom text-sm md:text-base'
          onClick={downloadImage}>
          <Download />
          <p className='underline-offset-1 decoration-black decoration-solid underline'>DOWNLOAD</p>
        </div>
        <div
          className={`h-[3.5rem] md:h-[4.5rem] flex flex-col items-center justify-between cursor-custom  text-sm md:text-base`}
          onClick={() => navigate("/")}>
          <Home />
          <p className='underline-offset-1 decoration-black decoration-solid underline'>HOME</p>
        </div>
        <div
          className={`h-[3.5rem] md:h-[4.5rem] flex flex-col items-center justify-between cursor-custom  text-sm md:text-base`}
          onClick={share}>
          <Share />
          <p className='underline-offset-1 decoration-black decoration-solid underline'>SHARE</p>
        </div>
      </div>

      {/* 1st modal */}
      <Transition appear show={isShow} as={Fragment}>
        <Dialog as='div' className='relative z-[30]' onClose={closeModal}>
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

      {/* 2nd modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-[30]' onClose={closeModal}>
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
                <Dialog.Panel className='w-full max-w-2xl transform rounded-2xl bg-white px-6 pt-16 md:pt-24 pb-12 align-middle shadow-xl transition-all text-center relative z-[10]'>
                  <img
                    className='w-[80%] absolute left-0 right-0 mx-auto -top-[10%] md:-top-[20%] z-[20]'
                    src={Logo}
                  />
                  <div className='flex flex-col gap-4 items-center'>
                    <p className='text-md font-medium'>
                      1.下載屬於你的解夢卡 <br />
                      CLICK BUTTON TO DOWNLOAD THE DREAMCARD.
                    </p>
                    <img className='w-[1.5rem]' src={Arrow} />
                    <p className='text-md font-medium'>
                      2.追蹤「一隻羊，兩隻羊」IG <br />
                      FOLLOW OUR INSTARGRAM.
                    </p>

                    <img className='w-[1.5rem]' src={Arrow} />
                    <p className='text-md font-medium'>
                      3.分享出去並標記我們！
                      <br />
                      REMEMBER TO SHARE AND TAG US!
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

const Quiz = ({ signImgPath }) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [quizAns, setQuizAns] = useState([]);

  const [otherAns, setOtherAns] = useState([]);

  function handleSaveAns(num, value) {
    if (questionNum % 2 !== 0) {
      const ansArray = quizAns.slice();
      ansArray[num] = value;

      setQuizAns(ansArray);
    } else {
      const otherAnsArray = otherAns.slice();
      otherAnsArray[num] = value;

      setOtherAns(otherAnsArray);
    }

    if (questionNum < 6) setQuestionNum(questionNum + 1);
  }

  return (
    <div className='flex flex-col min-safe-h-screen relative'>
      {questionNum <= 6 && (
        <div className='animate-fadeSlideIn'>
          <Question1
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            quizAns={quizAns}
          />

          <Question2
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            otherAns={otherAns}
          />
          <Question3
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            quizAns={quizAns}
          />
          <Question4
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            otherAns={otherAns}
            quizAns={quizAns}
          />
          <Question5
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            quizAns={quizAns}
          />
          <Question6
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            handleSaveAns={handleSaveAns}
            otherAns={otherAns}
          />
        </div>
      )}
      {questionNum === 7 && <GeneratingResult setQuestionNum={setQuestionNum} />}
      {questionNum === 8 && (
        <ShowResult
          quizAns={quizAns}
          otherAns={otherAns}
          setQuestionNum={setQuestionNum}
          signImgPath={signImgPath}
        />
      )}
      {questionNum === 9 && <ShowResultCard quizAns={quizAns} signImgPath={signImgPath} />}
    </div>
  );
};

export default Quiz;
