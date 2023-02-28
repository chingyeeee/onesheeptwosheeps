import Marquee from "../images/aboutus/marquee.svg";
import { ReactComponent as BackFinger } from "../images/aboutus/icon-back.svg";
import Profile1 from "../images/aboutus/profile-1.jpg";
import Profile2 from "../images/aboutus/profile-2.jpg";
import Profile3 from "../images/aboutus/profile-3.jpg";
import Profile4 from "../images/aboutus/profile-4.jpg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mx-4 mt-4 p-6 bg-lightgreen text-center rounded-t-3xl min-h-[90vh] relative">
        <BackFinger
          className="absolute w-[5%] top-8 cursor-pointer animate-finger-shake"
          onClick={() => navigate("/")}
        />
        <h3 className="border-black border-b bg-red font-normal text-6xl inline-block mx-auto">
          ABOUT US
        </h3>
        <div className="relative">
          <p className="text-red text-4xl mt-6 font-light text-justify font-nanum leading-normal">
            ONE SHEEP, TWO SHEEP ARE COMPOSED OF FOUR MEMBERS OF THE WIND
            DIRECTION CONSTELLATION, THE TWINS WITH MULTIPLE PERSONALITIES AND
            THE ECCENTRIC WATER BOTTLE, WHO OFTEN COME UP WITH SOME
            UNCONSTRAINED IDEAS, LIKE FREEDOM, TRAVEL AND SLEEP. LONGING FOR
            SLEEP AND CURIOSITY ABOUT DREAMS, WE LAUNCHED THIS DREAM PROJECT. WE
            HOPE THAT IN ADDITION TO EXPLORING THE BACKGROUND AND MEANING OF THE
            DREAM FIELD, WE CAN ALSO MAKE A GRADUATION PROJECT WITH THE
            CHARACTERISTICS OF THE FOUR OF US IN THE LAST YEAR OF UNIVERSITY.
            TOPIC.
          </p>
          <div className="bg-yellow max-w-[50%] m-auto absolute inset-0 text-xl font-medium h-min tracking-[0.5rem] -translate-y-8">
            <p className="text-justify mb-6">
              一隻羊，兩隻羊由四位風向星座的成員組成，多重人格的雙子及古靈精怪的水瓶，時常蹦出一些天馬行空的想法，愛好自由、出遊和睡覺。
            </p>
            <p className="text-justify">
              對睡眠的渴望以及對夢境的好奇，我們展開了這次的夢境專題，希望除了探索夢境領域的背景和意義以外，也能在大學的最後一年裡共同做出一個擁有我們四個人特色的畢業製作專題。
            </p>
          </div>
        </div>
        <img
          src={Profile1}
          className="fixed z-20 w-[140px] h-[180x] top-[25%] left-[10%]"
        />
        <img
          src={Profile2}
          className="fixed z-20 w-[140px] h-[180x] bottom-[10%] left-[26%]"
        />
        <img
          src={Profile3}
          className="fixed z-20 w-[140px] h-[180x] top-[5%] right-[13%]"
        />
        <img
          src={Profile4}
          className="fixed z-20 w-[140px] h-[180x] bottom-[25%] right-[10%]"
        />
      </div>
      <div className="w-screen bg-purple sticky top-0 min-h-[8vh] flex items-center z-10">
        <div className="absolute inset-y-0 m-auto flex animate-marquee w-[200%]">
          <img className="w-[50%] h-auto" src={Marquee} />
          <img className="w-[50%] h-auto" src={Marquee} />
          <img className="w-[50%] h-auto" src={Marquee} />
          <img className="w-[50%] h-auto" src={Marquee} />
        </div>
      </div>
      <div className="mx-4 px-6 pt-12 pb-6 bg-darkgreen text-center rounded-b-3xl min-h-[95vh] relative flex flex-col">
        <div className="relative flex-1">
          <p className="text-blue text-4xl mt-6 font-light text-justify font-padyakke leading-normal">
            EVERY DAY WE STEP INTO THE DIMENSION OF DREAMS, AN INFINITE SPACE
            WHERE WE CAN REVEAL OUR TRUEST SELVES AND RELEASE OUR BURIED DEEPEST
            DESIRES; WHETHER IT IS A DREAM OF HAPPINESS OR SADNESS OR FEAR, IT
            WILL FADE AWAY WITH TIME AFTER WAKING UP. IN THE FACE OF WHAT
            HAPPENED IN THE DREAM, WE INTERPRET DREAMS IN A HUMOROUS WAY, HOPING
            THAT PEOPLE CAN FACE THE DIFFICULTIES IN LIFE WITH THE POSITIVE
            ENERGY OBTAINED THROUGH DREAM INTERPRETATION.
          </p>
          <div className="bg-lakegreen text-red max-w-[50%] m-auto absolute inset-0 text-xl font-medium h-min tracking-[0.5rem] -translate-y-24">
            <p className="text-justify mb-6">
              每一天我們都會踏進夢的維度，一個可以展現最真實的自我、釋放埋藏深處的慾望的無限空間；不管是開心或是傷心害怕的夢，在醒來之後都會隨時間淡忘。
            </p>
            <p className="text-justify">
              而面對夢境中發生的事，我們以幽默風趣的方式解夢，希望人們可以透過解夢得到的正能量來面對生活中的總總困難。
            </p>
          </div>
        </div>
        <div className="flex justify-between text-yellow text-5xl">
          <p>CONTACT US:</p>
          <p className="border-b-2 border-yellow">@1SHEEP.2SLEEP</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
