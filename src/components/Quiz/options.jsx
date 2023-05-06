import { ReactComponent as Choice1 } from "../../assets/images/quiz/1/choice1.svg";
import { ReactComponent as Choice2 } from "../../assets/images/quiz/1/choice2.svg";
import { ReactComponent as Choice3 } from "../../assets/images/quiz/1/choice3.svg";
import { ReactComponent as Choice4 } from "../../assets/images/quiz/1/choice4.svg";
import { ReactComponent as Choice5 } from "../../assets/images/quiz/1/choice5.svg";
import { ReactComponent as Choice6 } from "../../assets/images/quiz/1/choice6.svg";
import { ReactComponent as Choice7 } from "../../assets/images/quiz/1/choice7.svg";
import { ReactComponent as Choice8 } from "../../assets/images/quiz/1/choice8.svg";

import { ReactComponent as No } from "../../assets/images/quiz/2/no.svg";
import { ReactComponent as Yes } from "../../assets/images/quiz/2/yes.svg";

import { ReactComponent as Animal } from "../../assets/images/quiz/3/animal.svg";
import { ReactComponent as Ghost } from "../../assets/images/quiz/3/ghost.svg";
import { ReactComponent as Nonexisted } from "../../assets/images/quiz/3/nonexisted.svg";
import { ReactComponent as Person } from "../../assets/images/quiz/3/person.svg";

import { ReactComponent as Acquaintance } from "../../assets/images/quiz/4/acquaintance.svg";
import { ReactComponent as Myself } from "../../assets/images/quiz/4/myself.svg";
import { ReactComponent as Negative } from "../../assets/images/quiz/4/negative.svg";
import { ReactComponent as None } from "../../assets/images/quiz/4/none.svg";
import { ReactComponent as NotThreatening } from "../../assets/images/quiz/4/notthreatening.svg";
import { ReactComponent as Other } from "../../assets/images/quiz/4/other.svg";
import { ReactComponent as Positive } from "../../assets/images/quiz/4/positive.svg";
import { ReactComponent as Strangers } from "../../assets/images/quiz/4/strangers.svg";
import { ReactComponent as Threatening } from "../../assets/images/quiz/4/threatening.svg";

import { ReactComponent as Natural } from "../../assets/images/quiz/5/natural.svg";
import { ReactComponent as Normal } from "../../assets/images/quiz/5/normal.svg";
import { ReactComponent as Novel } from "../../assets/images/quiz/5/novel.svg";

import { ReactComponent as Recognized } from "../../assets/images/quiz/6/recognized.svg";
import { ReactComponent as Notrecognized } from "../../assets/images/quiz/6/notrecognized.svg";
import { ReactComponent as Open } from "../../assets/images/quiz/6/open.svg";
import { ReactComponent as Sealed } from "../../assets/images/quiz/6/sealed.svg";

export const Q1options = [
  { opt: "A", optText: "悲傷", optTextEng: "sad", Image: Choice1 },
  { opt: "B", optText: "無感", optTextEng: "feel nothing", Image: Choice2 },
  { opt: "C", optText: "恐懼", optTextEng: "fear", Image: Choice3 },
  { opt: "D", optText: "性歡愉", optTextEng: "sexual pleasure", Image: Choice4 },
  { opt: "E", optText: "厭惡", optTextEng: "disgust", Image: Choice5 },
  { opt: "F", optText: "憤怒", optTextEng: "angry", Image: Choice6 },
  { opt: "G", optText: "驚嚇", optTextEng: "terrified", Image: Choice7 },
  { opt: "H", optText: "幸福滿足", optTextEng: "happy, satisfied", Image: Choice8 },
];

export const Q2options = [
  { opt: "Y", optText: "是", optTextEng: "yes", Image: Yes },
  { opt: "N", optText: "否", optTextEng: "no", Image: No },
];

export const Q3options = [
  { opt: "2", optText: "鬼神", optTextEng: "ghost", Image: Ghost },
  {
    opt: "3",
    optText: "不存在的生物",
    optTextEng: "undefined mysterious animal",
    Image: Nonexisted,
  },
  { opt: "1", optText: "人", optTextEng: "people", Image: Person },
  { opt: "4", optText: "動物", optTextEng: "animal", Image: Animal },
];

export const Q4options = {
  1: [
    { opt: "myself", optText: "自己", Image: Myself },
    {
      opt: "strangers",
      optText: "陌生人",
      Image: Strangers,
    },
    {
      opt: "acquaintance",
      optText: "知道或認得但不認識的人",
      Image: Acquaintance,
    },
    {
      opt: "significant other",
      optText: "生命中重要的人",
      Image: Other,
    },
  ],
  2: [
    {
      opt: "positive",
      optText: "正向的",
      Image: Positive,
    },
    {
      opt: "negative",
      optText: "負面的",
      Image: Negative,
    },
  ],
  3: [
    { opt: "threatening", optText: "有威脅性", Image: Threatening },
    { opt: "not threatening", optText: "不具威脅性", Image: NotThreatening },
  ],
  4: [{ opt: "none", optText: "無", Image: None }],
};

export const Q5options = [
  { opt: "Y", optText: "日常生活", optTextEng: "daily", Image: Normal },
  { opt: "X", optText: "自然現象", optTextEng: "natural", Image: Natural },
  { opt: "Z", optText: "小說情節", optTextEng: "unrealistic", Image: Novel },
];

export const Q6options = [
  { opt: "recognize", optText: "認得", Image: Recognized },
  { opt: "not recognized", optText: "不認得", Image: Notrecognized },
  { opt: "open", optText: "開放", Image: Open },
  { opt: "sealed", optText: "密閉", Image: Sealed },
];
