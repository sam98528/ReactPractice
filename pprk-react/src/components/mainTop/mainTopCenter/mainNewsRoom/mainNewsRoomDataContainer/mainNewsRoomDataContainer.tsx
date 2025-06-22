import NewsRoomTempleteA from "./MainNewsRoomTemplete/NewsRoomTempleteA";
import NewsRoomTempleteB from "./MainNewsRoomTemplete/NewsRoomTempleteB";
import NewsRoomTempleteC from "./MainNewsRoomTemplete/NewsRoomTempleteC";

const dummyData: [string, string][] = [
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250617/1750135021352.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "(거의) 완벽한 미니 게이밍 태블릿",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250618/1750231332637.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "7월 공개 확정! 원플러스 새 거 온다",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250617/1750132925332.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "7월 공개 확정! 원플러스 새 거 온다",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250619/1750297298771.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "레트로 디자인 + 파워풀 사운드",
  ],
];

const dummyData2: [string, string][] = [
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250618/1750219036041.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "여름철 음식물 쓰레기 줄이는 꿀팁",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250616/1750058039328.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "아직도 구형 손풍기 쓰세요?",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250617/1750134256434.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "올여름 필수템은 이겁니다.",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250619/1750298662365.gif?fitting=Large|130:92&crop=130:92;*,*",
    "20만원 대로 로청기 입문 가능!",
  ],
];

const dummyData3: [string, string][] = [
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250618/1750219036041.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "여름철 음식물 쓰레기 줄이는 꿀팁",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250616/1750058039328.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "아직도 구형 손풍기 쓰세요?",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250617/1750134256434.jpeg?fitting=Large|130:92&crop=130:92;*,*",
    "올여름 필수템은 이겁니다.",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250619/1750298662365.gif?fitting=Large|130:92&crop=130:92;*,*",
    "20만원 대로 로청기 입문 가능!",
  ],
  [
    "https://img.danawa.com/images/attachFiles/newsRoom/20250619/1750298662365.gif?fitting=Large|130:92&crop=130:92;*,*",
    "20만원 대로 로청기 입문 가능!",
  ],
];

function NewsRoomDataContainer({ activeIndex }: { activeIndex: number }) {
  switch (activeIndex) {
    case 0:
      return <NewsRoomTempleteB newsRoomData={dummyData2} />;
    case 1:
      return <NewsRoomTempleteB newsRoomData={dummyData} />;
    case 2:
      return <NewsRoomTempleteC newsRoomData={dummyData3} />;
    case 3:
      return <NewsRoomTempleteB newsRoomData={dummyData} />;
    case 4:
      return <NewsRoomTempleteB newsRoomData={dummyData2} />;
    case 5:
      return <NewsRoomTempleteA />;
    default:
      return <NewsRoomTempleteA />;
  }
}

export default NewsRoomDataContainer;
