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
    <div className="overflow-x-hidden">
      <div className="mx-4 mt-4 p-6 bg-lightgreen text-center rounded-t-3xl min-h-[90vh] relative">
        <BackFinger
          className="absolute w-[5%] top-8 cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] animate-finger-shake"
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

        <div className="fixed z-20 top-[18%] left-[10%] group">
          <div className="absolute text-left p-6 bg-blue rounded-xl w-max hidden group-hover:animate-expandLT group-hover:block transition-500">
            <div className="flex flex-col gap-12">
              <div className="flex gap-4">
                <img className="w-[140px] h-[180px] opacity-0" src={Profile1} />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap">
                    <p className="text-sm">name/</p>
                    <p className="text-lg">J-wei</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col gap">
                      <p className="text-sm">age/</p>
                      <p className="text-lg">22</p>
                    </div>
                    <div className="flex flex-col gap">
                      <p className="text-sm">zodiac sign/</p>
                      <p className="text-lg">aquarius</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap">
                    <p className="text-sm">role assignment/</p>
                    <p className="text-md">
                      主視覺、標準字及變體字設計、 解夢書製作
                    </p>
                  </div>
                  <div className="flex flex-col gap">
                    <p className="text-sm">website/</p>
                    <p className="text-md">
                      https://www.instagram.com/j_wei_wei/
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-md">
                基隆人、水瓶座、不敢吃蒜頭、喜歡看動漫）
              </p>
            </div>
          </div>
          <div className="p-6 relative z-[20]">
            <img
              className="w-[140px] h-[180px] cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]"
              src={Profile1}
            />
          </div>
        </div>
        <div className="fixed z-20 top-[55%] left-[22%] group">
          <div className="absolute text-left p-6 bg-red rounded-xl w-max hidden group-hover:animate-expandLT group-hover:block transition-500">
            <div className="flex flex-col gap-12">
              <div className="flex gap-4">
                <img className="w-[140px] h-[180px] opacity-0" src={Profile2} />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap">
                    <p className="text-sm">name/</p>
                    <p className="text-lg">王溫蒂</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col gap">
                      <p className="text-sm">age/</p>
                      <p className="text-lg">21</p>
                    </div>
                    <div className="flex flex-col gap">
                      <p className="text-sm">zodiac sign/</p>
                      <p className="text-lg">gemini</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap">
                    <p className="text-sm">role assignment/</p>
                    <p className="text-md">轉卡小卡製作、企劃文案、報告</p>
                  </div>
                  <div className="flex flex-col gap">
                    <p className="text-sm">website/</p>
                    <p className="text-md">https://www.instagram.com/uxwn.n/</p>
                  </div>
                </div>
              </div>
              <p className="text-md">
                很愛睡覺 幾乎每天做夢，最近喜歡亮晶晶或綠色的東西
                <br />
                有著雙子座的善變，喜歡夏天的氛圍但也喜歡冬天的被窩。
              </p>
            </div>
          </div>
          <div className="p-6 relative z-[20]">
            <img
              className="w-[140px] h-[180px] cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]"
              src={Profile2}
            />
          </div>
        </div>
        <div className="fixed z-20 top-[5%] right-[13%] group">
          <div className="absolute text-left p-6 bg-lakegreen rounded-xl right-[0] w-max hidden group-hover:animate-expandRT group-hover:block transition-500">
            <div className="flex flex-col gap-12">
              <div className="flex gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap">
                    <p className="text-sm">name/</p>
                    <p className="text-lg">tedd chen</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col gap">
                      <p className="text-sm">age/</p>
                      <p className="text-lg">22</p>
                    </div>
                    <div className="flex flex-col gap">
                      <p className="text-sm">zodiac sign/</p>
                      <p className="text-lg">aquarius</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap">
                    <p className="text-sm">role assignment/</p>
                    <p className="text-md">網頁介面設計、企劃發想、影片剪輯</p>
                  </div>
                  <div className="flex flex-col gap">
                    <p className="text-sm">website/</p>
                    <p className="text-md">https://www.instagram.com/t1ddey/</p>
                  </div>
                </div>
                <img className="w-[140px] h-[180px] opacity-0" src={Profile3} />
              </div>
              <p className="text-md">
                土生土長ㄉ嘉義人，喜歡到處social，嘴巴似乎沒有停下來的一天。
                <br />
                不管是在講話還是吃：）
              </p>
            </div>
          </div>
          <div className="p-6 relative z-[20]">
            <img
              className="w-[140px] h-[180px] cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]"
              src={Profile3}
            />
          </div>
        </div>
        <div className="fixed z-20 bottom-[25%] right-[10%] group">
          <div className="absolute text-left p-6 bg-lightpurple rounded-xl right-[0] w-max hidden group-hover:animate-expandRT group-hover:block transition-500">
            <div className="flex flex-col gap-12">
              <div className="flex gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap">
                    <p className="text-sm">name/</p>
                    <p className="text-lg">Chien</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col gap">
                      <p className="text-sm">age/</p>
                      <p className="text-lg">22</p>
                    </div>
                    <div className="flex flex-col gap">
                      <p className="text-sm">zodiac sign/</p>
                      <p className="text-lg">gemini</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap">
                    <p className="text-sm">role assignment/</p>
                    <p className="text-md">
                      組長、解夢卡、許願包製作、文案撰寫
                    </p>
                  </div>
                  <div className="flex flex-col gap">
                    <p className="text-sm">website/</p>
                    <p className="text-md">
                      https://www.instagram.com/o6.ycww_11/
                    </p>
                  </div>
                </div>
                <img className="w-[140px] h-[180px] opacity-0" src={Profile4} />
              </div>
              <p className="text-md">
                養了一隻約克夏，聽說狗會像主人，矛盾又善變，懶惰又勤勞
                <br />
                偶爾軟趴趴的像坨泥巴，偶爾瘋瘋癲癲很愛亂叫，但這是狗狗不是我。
              </p>
            </div>
          </div>
          <div className="p-6 relative z-[20]">
            <img
              className="w-[140px] h-[180px] cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer]"
              src={Profile4}
            />
          </div>
        </div>
      </div>
      <div className="w-screen bg-purple sticky top-0 min-h-[8vh] flex items-center z-10 overflow-hidden">
        <div className="absolute inset-y-0 m-auto flex animate-marquee w-[200%]">
          <img className="w-[50%] h-auto" src={Marquee} />
          <img className="w-[50%] h-auto" src={Marquee} />
          <img className="w-[50%] h-auto" src={Marquee} />
          <img className="w-[50%] h-auto" src={Marquee} />
        </div>
      </div>
      <div className="mx-4 px-6 pt-12 pb-6 mb-6 bg-darkgreen text-center rounded-b-3xl min-h-[95vh] relative flex flex-col">
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
