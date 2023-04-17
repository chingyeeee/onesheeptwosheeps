import Marquee from "../images/aboutus/marquee.png";
import { ReactComponent as BackFinger } from "../images/aboutus/icon-back.svg";
import Profile1 from "../images/aboutus/profile-1.jpg";
import Profile2 from "../images/aboutus/profile-2.jpg";
import Profile3 from "../images/aboutus/profile-3.jpg";
import Profile4 from "../images/aboutus/profile-4.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const navigate = useNavigate();
  const [is1Expanded, setIs1Expanded] = useState(false);
  const [is2Expanded, setIs2Expanded] = useState(false);
  const [is3Expanded, setIs3Expanded] = useState(false);
  const [is4Expanded, setIs4Expanded] = useState(false);

  return (
    <div className='overflow-x-hidden'>
      <div className='mx-4 mt-4 p-6 bg-lightgreen text-center rounded-t-3xl min-h-[94.3vh] md:min-h-[91vh] relative'>
        <BackFinger
          className='absolute w-[10%] md:w-[5%] top-8 cursor-custom animate-finger-shake'
          onClick={() => navigate("/")}
        />
        <h3 className='border-black border-b-2 md:border-b-4 bg-red font-normal text-2xl md:text-6xl inline-block mx-auto'>
          ABOUT US
        </h3>
        <div className='relative'>
          <p className='text-red text-[19px] md:text-4xl mt-6 font-light text-justify font-adobe leading-normal md:leading-relaxed'>
            ONE SHEEP, TWO SHEEP ARE COMPOSED OF FOUR MEMBERS OF THE WIND DIRECTION CONSTELLATION,
            THE TWINS WITH MULTIPLE PERSONALITIES AND THE ECCENTRIC WATER BOTTLE, WHO OFTEN COME UP
            WITH SOME UNCONSTRAINED IDEAS, LIKE FREEDOM, TRAVEL AND SLEEP. LONGING FOR SLEEP AND
            CURIOSITY ABOUT DREAMS, WE LAUNCHED THIS DREAM PROJECT. WE HOPE THAT IN ADDITION TO
            EXPLORING THE BACKGROUND AND MEANING OF THE DREAM FIELD, WE CAN ALSO MAKE A GRADUATION
            PROJECT WITH THE CHARACTERISTICS OF THE FOUR OF US IN THE LAST YEAR OF UNIVERSITY.
            TOPIC.
          </p>
          <div className='bg-yellow max-w-[75%] md:max-w-[50%] m-auto absolute inset-0 text-sm md:text-xl font-medium h-min md:tracking-[0.5rem] -translate-y-8'>
            <p className='text-justify mb-6'>
              一隻羊，兩隻羊由四位風向星座的成員組成，多重人格的雙子及古靈精怪的水瓶，時常蹦出一些天馬行空的想法，愛好自由、出遊和睡覺。
            </p>
            <p className='text-justify'>
              對睡眠的渴望以及對夢境的好奇，我們展開了這次的夢境專題，希望除了探索夢境領域的背景和意義以外，也能在大學的最後一年裡共同做出一個擁有我們四個人特色的畢業製作專題。
            </p>
          </div>
        </div>

        <div
          className={`fixed top-[28%] md:top-[18%] left-[10%] md:left-[10%] group ${
            is1Expanded ? "z-[30]" : "z-[21]"
          }`}
          onMouseEnter={() => setIs1Expanded(true)}
          onMouseLeave={() => setIs1Expanded(false)}>
          <div
            className={`absolute text-left p-2 md:p-6 bg-blue rounded-xl w-min md:w-max group-hover:block transition-500 ${
              is1Expanded ? "animate-expandLT" : "animate-collapseLT"
            }`}>
            <div className='flex flex-col gap-6 md:gap-12'>
              <div className='flex gap-4'>
                <img
                  className='w-[80px] h-[100px] md:w-[140px] md:h-[180px] opacity-0'
                  src={Profile1}
                />
                <div className='flex flex-col gap-1 md:gap-3 w-[65%] md:w-auto'>
                  <div className='flex flex-col'>
                    <p className='text-xs md:text-sm'>name/</p>
                    <p className='md:text-lg'>J-wei</p>
                  </div>
                  <div className='flex gap-6'>
                    <div className='flex flex-col gap'>
                      <p className='text-xs md:text-sm'>age/</p>
                      <p className='md:text-lg'>22</p>
                    </div>
                    <div className='flex flex-col gap'>
                      <p className='text-xs md:text-sm'>zodiac sign/</p>
                      <p className='md:text-lg'>aquarius</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>role assignment/</p>
                    <p className='text-sm md:text-base break-words'>
                      主視覺、標準字及變體字設計、 解夢書製作
                    </p>
                  </div>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>website/</p>
                    <a
                      className='text-sm md:text-base break-words cursor-custom underline decoration-yellow decoration-solid underline-offset-4'
                      href='https://www.instagram.com/j_wei_wei/'
                      target='_blank'>
                      https://www.instagram.com/j_wei_wei/
                    </a>
                  </div>
                </div>
              </div>
              <p className='text-sm md:text-base'>基隆人、水瓶座、不敢吃蒜頭、喜歡看動漫）</p>
            </div>
          </div>
          <div className='p-2 md:p-6 relative z-[20]'>
            <img
              className='w-[80px] h-[100px] md:w-[140px] md:h-[180px] cursor-custom'
              src={Profile1}
            />
          </div>
        </div>
        <div
          className={`fixed top-[54%] left-[20%] md:top-[50%] md:left-[22%] group ${
            is2Expanded ? "z-[30]" : "z-20"
          }`}
          onMouseEnter={() => setIs2Expanded(true)}
          onMouseLeave={() => setIs2Expanded(false)}>
          <div
            className={`absolute text-left p-2 md:p-6 bg-red rounded-xl w-min md:w-max group-hover:block transition-500 ${
              is2Expanded ? "animate-expandLT " : "animate-collapseLT"
            }`}>
            <div className='flex flex-col gap-6 md:gap-12'>
              <div className='flex gap-4'>
                <img
                  className='w-[80px] h-[100px] md:w-[140px] md:h-[180px] opacity-0'
                  src={Profile2}
                />
                <div className='flex flex-col gap-1 md:gap-3 w-[65%] md:w-auto'>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>name/</p>
                    <p className='md:text-lg'>王溫蒂</p>
                  </div>
                  <div className='flex gap-6'>
                    <div className='flex flex-col gap'>
                      <p className='text-xs md:text-sm'>age/</p>
                      <p className='md:text-lg'>21</p>
                    </div>
                    <div className='flex flex-col gap'>
                      <p className='text-xs md:text-sm'>zodiac sign/</p>
                      <p className='md:text-lg'>gemini</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>role assignment/</p>
                    <p className='text-sm md:text-base break-words'>轉卡小卡製作、企劃文案、報告</p>
                  </div>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>website/</p>
                    <a
                      className='text-sm md:text-base break-words cursor-custom underline decoration-blue decoration-solid underline-offset-4'
                      href='https://www.instagram.com/uxwn.n/'
                      target='_blank'>
                      https://www.instagram.com/uxwn.n/
                    </a>
                  </div>
                </div>
              </div>
              <p className='text-sm md:text-base'>
                很愛睡覺 幾乎每天做夢，最近喜歡亮晶晶或綠色的東西
                <br />
                有著雙子座的善變，喜歡夏天的氛圍但也喜歡冬天的被窩。
              </p>
            </div>
          </div>
          <div className='p-2 md:p-6 relative z-[20]'>
            <img
              className='w-[80px] h-[100px] md:w-[140px] md:h-[180px] cursor-custom'
              src={Profile2}
            />
          </div>
        </div>
        <div
          className='fixed z-[21] right-[15%] top-[15%] md:top-[5%] md:right-[13%] group'
          onMouseEnter={() => setIs3Expanded(true)}
          onMouseLeave={() => setIs3Expanded(false)}>
          <div
            className={`absolute text-left p-2 md:p-6 bg-lakegreen rounded-xl right-[0] w-min md:w-max group-hover:block transition-500 ${
              is3Expanded ? "animate-expandRT" : "animate-collapseRT"
            }`}>
            <div className='flex flex-col gap-6 md:gap-12'>
              <div className='flex gap-4'>
                <div className='flex flex-col gap-1 md:gap-3 w-[65%] md:w-auto'>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>name/</p>
                    <p className='md:text-lg'>tedd chen</p>
                  </div>
                  <div className='flex gap-6'>
                    <div className='flex flex-col gap'>
                      <p className='text-xs md:text-sm'>age/</p>
                      <p className='md:text-lg'>22</p>
                    </div>
                    <div className='flex flex-col gap'>
                      <p className='text-xs md:text-sm'>zodiac sign/</p>
                      <p className='md:text-lg'>aquarius</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>role assignment/</p>
                    <p className='text-sm md:text-base break-words'>
                      網頁介面設計、企劃發想、影片剪輯
                    </p>
                  </div>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>website/</p>
                    <a
                      className='text-sm md:text-base break-words cursor-custom underline decoration-lightpurple decoration-solid underline-offset-4'
                      href='https://www.instagram.com/t1ddey/'
                      target='_blank'>
                      https://www.instagram.com/t1ddey/
                    </a>
                  </div>
                </div>
                <img
                  className='w-[80px] h-[100px] md:w-[140px] md:h-[180px] opacity-0'
                  src={Profile3}
                />
              </div>
              <p className='text-sm md:text-base'>
                土生土長ㄉ嘉義人，喜歡到處social，嘴巴似乎沒有停下來的一天。
                <br />
                不管是在講話還是吃：）
              </p>
            </div>
          </div>
          <div className='p-4 md:p-6 relative z-[20]'>
            <img
              className='w-[80px] h-[100px] md:w-[140px] md:h-[180px] cursor-custom'
              src={Profile3}
            />
          </div>
        </div>
        <div
          className='fixed z-20 bottom-[35%] right-[5%] md:bottom-[25%] md:right-[10%] group'
          onMouseEnter={() => setIs4Expanded(true)}
          onMouseLeave={() => setIs4Expanded(false)}>
          <div
            className={`absolute text-left p-2 md:p-6 bg-lightpurple rounded-xl right-[0] w-min md:w-max transition-500 ${
              is4Expanded ? "animate-expandRT" : "animate-collapseRT"
            }`}>
            <div className='flex flex-col gap-6 md:gap-12'>
              <div className='flex gap-4'>
                <div className='flex flex-col gap-1 md:gap-3 w-[65%] md:w-auto'>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>name/</p>
                    <p className='md:text-lg'>Chien</p>
                  </div>
                  <div className='flex gap-6'>
                    <div className='flex flex-col gap'>
                      <p className='text-xs md:text-sm'>age/</p>
                      <p className='md:text-lg'>22</p>
                    </div>
                    <div className='flex flex-col gap'>
                      <p className='text-xs md:text-sm'>zodiac sign/</p>
                      <p className='md:text-lg'>gemini</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>role assignment/</p>
                    <p className='text-sm md:text-base break-words'>
                      組長、解夢卡、許願包製作、文案撰寫
                    </p>
                  </div>
                  <div className='flex flex-col gap'>
                    <p className='text-xs md:text-sm'>website/</p>
                    <a
                      className='text-sm md:text-base break-words cursor-custom underline decoration-purple decoration-solid underline-offset-4'
                      href='https://www.instagram.com/o6.ycww_11/'
                      target='_blank'>
                      https://www.instagram.com/o6.ycww_11/
                    </a>
                  </div>
                </div>
                <img
                  className='w-[80px] h-[100px] md:w-[140px] md:h-[180px] opacity-0'
                  src={Profile4}
                />
              </div>
              <p className='text-sm md:text-base'>
                養了一隻約克夏，聽說狗會像主人，矛盾又善變，懶惰又勤勞
                <br />
                偶爾軟趴趴的像坨泥巴，偶爾瘋瘋癲癲很愛亂叫，但這是狗狗不是我。
              </p>
            </div>
          </div>
          <div className='p-2 md:p-6 relative z-[20]'>
            <img
              className='w-[80px] h-[100px] md:w-[140px] md:h-[180px] cursor-custom'
              src={Profile4}
            />
          </div>
        </div>
      </div>
      <div className='bg-purple h-[2rem] md:h-[5rem] sticky bottom-0 overflow-hidden'>
        <div className='absolute inset-y-0 h-min m-auto flex animate-marquee w-[200%]'>
          <img className='w-[50%] md:w-[25%] h-auto' src={Marquee} />
          <img className='w-[50%] md:w-[25%] h-auto' src={Marquee} />
          <img className='w-[50%] md:w-[25%] h-auto' src={Marquee} />
          <img className='w-[50%] md:w-[25%] h-auto' src={Marquee} />
        </div>
      </div>
      <div className='mx-4 px-6 pt-12 pb-6 mb-6 bg-darkgreen text-center rounded-b-3xl min-h-[95vh] relative flex flex-col'>
        <div className='relative flex-1'>
          <p className='text-blue md:text-4xl mt-6 font-light text-justify font-padyakke leading-normal'>
            EVERY DAY WE STEP INTO THE DIMENSION OF DREAMS, AN INFINITE SPACE WHERE WE CAN REVEAL
            OUR TRUEST SELVES AND RELEASE OUR BURIED DEEPEST DESIRES; WHETHER IT IS A DREAM OF
            HAPPINESS OR SADNESS OR FEAR, IT WILL FADE AWAY WITH TIME AFTER WAKING UP. IN THE FACE
            OF WHAT HAPPENED IN THE DREAM, WE INTERPRET DREAMS IN A HUMOROUS WAY, HOPING THAT PEOPLE
            CAN FACE THE DIFFICULTIES IN LIFE WITH THE POSITIVE ENERGY OBTAINED THROUGH DREAM
            INTERPRETATION.
          </p>
          <div className='bg-lakegreen text-red max-w-[75%] md:max-w-[50%] m-auto absolute inset-0 text-sm md:text-xl font-medium h-min md:tracking-[0.5rem] -translate-y-24'>
            <p className='text-justify mb-6'>
              每一天我們都會踏進夢的維度，一個可以展現最真實的自我、釋放埋藏深處的慾望的無限空間；不管是開心或是傷心害怕的夢，在醒來之後都會隨時間淡忘。
            </p>
            <p className='text-justify'>
              而面對夢境中發生的事，我們以幽默風趣的方式解夢，希望人們可以透過解夢得到的正能量來面對生活中的總總困難。
            </p>
          </div>
        </div>
        <div className='flex justify-between text-yellow md:text-5xl'>
          <p>CONTACT US:</p>
          <p className='border-b md:border-b-2 border-yellow'>@1SHEEP.2SLEEP</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
