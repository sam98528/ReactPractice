import styles from "./NewsRoomTempleteA.module.css";
import { useState } from "react";

interface NewsRoomCategoryData {
  name: string;
  images: [string, string][];
  contents: string[];
}

const newsRoomCategories: NewsRoomCategoryData[] = [
  {
    name: "먹거리",
    images: [
      [
        "http://img.danawa.com/images/attachFiles/6/824/5823765_1.jpg?fitting=Large|110:78&crop=110:78;*,*",
        "풀무원, 쫄깃한 메밀면으로 여름 공략…'가쓰오 냉모밀' 신제품 출시",
      ],
      [
        "http://img.danawa.com/images/attachFiles/6/815/5814574_1.jpeg?fitting=Large|110:78&crop=110:78;*,*",
        "처음 만난 사람을 대비한 신상 주류 5",
      ],
    ],
    contents: [
      "치열한 일상 속 Chill한 상쾌함을, 스프라이트 제로 Chill로 시원하게 해결하세요",
      "지평주조, 100주년 기념 하이엔드 막걸리 '지평 부의' 및 '지평 석탄' 출시로 전통의 맛을 재현",
      "올가, 국산 현미로 만든 뉴트로 스낵 3종 출시로 건강한 간식 문화를 선도",
      "스타벅스 리스트레토 샷, 네스프레소 캡슐로 출시하여 집에서도 프리미엄 커피 경험을 즐기세요",
      "풀무원푸드머스, 어린이날 맞아 강화된 '풀스박스' 간식 꾸러미로 아이들의 건강을 챙겨보세요",
      "신선한 제철 과일과 채소로 만든 홈메이드 주스 레시피를 공개합니다",
      "다이어트 중에도 맛있게 먹을 수 있는 저칼로리 요리 10가지 추천",
      "집에서 쉽게 만들 수 있는 베이킹 레시피와 팁을 소개합니다",
    ],
  },
  {
    name: "패션/의류",
    images: [
      [
        "http://img.danawa.com/images/attachFiles/6/833/5832997_1.jpg?fitting=Large|110:78&crop=110:78;*,*",
        "아이더, 장마철 겨냥한 여성용 레인 아이템 3종 출시",
      ],
      [
        "http://img.danawa.com/images/attachFiles/6/833/5832851_1.jpg?fitting=Large|110:78&crop=110:78;*,*",
        "침낭에서 재킷으로, 과수원에서 런웨이로… 도널드 글로버의 몽클레르 재해석",
      ],
    ],
    contents: [
      "봄맞이 신상 의류 컬렉션으로 트렌디한 스타일을 완성해보세요",
      "지속가능한 패션의 중요성과 친환경 소재를 활용한 브랜드들을 소개합니다",
      "2024 패션 트렌드 분석을 통해 올해의 핫 아이템을 미리 확인하세요",
      "계절별 코디 팁과 체형별 스타일링 가이드를 제공합니다",
      "패션 브랜드 신제품 소개와 함께 스타일링 아이디어를 공유합니다",
      "오피스룩부터 캐주얼룩까지 상황별 패션 코디네이션 가이드",
      "신발과 가방을 활용한 포인트 스타일링으로 개성을 표현해보세요",
      "액세서리 활용법과 함께 완성도 높은 룩을 만들어보세요",
    ],
  },
  {
    name: "PC/노트북",
    images: [
      [
        "http://img.danawa.com/images/attachFiles/6/834/5833558_1.jpeg?fitting=Large|110:78&crop=110:78;*,*",
        "대원씨티에스, AMD Ryzen7 PRO 8840U 탑재 미니PC '기가바이트 GB-BER7-8840' 출시",
      ],
      [
        "http://img.danawa.com/images/attachFiles/6/834/5833555_1.jpeg?fitting=Large|110:78&crop=110:78;*,*",
        "맥스엘리트 '1stPlayer NEO87' 유무선 블루투스 기계식 키보드 4종 출시",
      ],
    ],
    contents: [
      "2024년 최고의 게이밍 노트북 성능 비교와 추천 모델을 상세히 분석했습니다",
      "업무 효율성을 높이는 노트북 선택법과 사양별 구매 가이드를 제공합니다",
      "노트북 성능 비교 분석을 통해 본인의 용도에 맞는 최적의 제품을 찾아보세요",
      "조립 PC 가이드와 함께 예산별 추천 사양을 상세히 안내합니다",
      "노트북 액세서리 추천과 함께 사용성을 극대화할 수 있는 방법을 소개합니다",
      "게이밍 PC 조립 가이드와 함께 게임 성능을 최적화하는 팁을 공유합니다",
      "업무용 PC 선택 시 고려해야 할 사양과 브랜드별 특징을 비교 분석합니다",
      "노트북 배터리 관리법과 함께 수명을 연장할 수 있는 방법을 알려드립니다",
    ],
  },
  {
    name: "게임",
    images: [
      [
        "http://img.danawa.com/images/attachFiles/6/834/5833425_18.jpeg?fitting=Large|110:78&crop=110:78;*,*",
        "2024년 기대작 게임 소개와 함께 출시 일정을 미리 확인해보세요",
      ],
      [
        "http://img.danawa.com/images/attachFiles/6/833/5832254_18.jpeg?fitting=Large|110:78&crop=110:78;*,*",
        "게이밍 기어 리뷰와 함께 게임 성능을 향상시킬 수 있는 장비를 추천합니다",
      ],
    ],
    contents: [
      "2024년 출시 예정 게임들과 함께 기대작들의 상세 정보를 확인해보세요",
      "게이밍 마우스 추천과 함께 게임 장르별 최적의 마우스를 선택하는 방법을 안내합니다",
      "게임 성능 최적화 팁과 함께 PC 설정을 통해 더 나은 게임 경험을 만들어보세요",
      "e스포츠 대회 소식과 함께 프로게이머들의 전략과 플레이 스타일을 분석합니다",
      "게이밍 키보드 비교 분석을 통해 본인의 게임 스타일에 맞는 키보드를 찾아보세요",
      "게이밍 헤드셋 추천과 함께 음향 품질과 착용감을 모두 만족하는 제품을 소개합니다",
      "게임 스트리밍 설정 가이드와 함께 콘텐츠 제작을 위한 장비 구성을 안내합니다",
      "모바일 게임 추천과 함께 스마트폰에서 즐길 수 있는 최고의 게임들을 소개합니다",
    ],
  },
  {
    name: "스마트기기",
    images: [
      [
        "http://img.danawa.com/images/attachFiles/6/833/5832910_1.jpeg?fitting=Large|110:78&crop=110:78;*,*",
        "최신 스마트폰 리뷰와 함께 각 브랜드별 특징과 성능을 상세히 비교 분석합니다",
      ],
      [
        "http://img.danawa.com/images/attachFiles/6/832/5831605_1.jpg?fitting=Large|110:78&crop=110:78;*,*",
        "스마트워치 비교 분석을 통해 건강 관리와 일상 편의성을 모두 만족하는 제품을 찾아보세요",
      ],
    ],
    contents: [
      "2024년 최고의 스마트폰 성능 비교와 함께 카메라 품질과 배터리 수명을 종합적으로 평가합니다",
      "스마트워치 선택 가이드와 함께 운동 추적 기능과 건강 모니터링 성능을 상세히 분석합니다",
      "태블릿 추천과 함께 업무용과 엔터테인먼트용으로 활용할 수 있는 최적의 모델을 소개합니다",
      "스마트홈 기기 소개와 함께 IoT 기술을 활용한 편리한 생활 환경을 구축하는 방법을 안내합니다",
      "웨어러블 기기 트렌드와 함께 미래 기술의 발전 방향과 새로운 기능들을 미리 확인해보세요",
      "무선 이어버드 추천과 함께 노이즈 캔슬링 기능과 음질을 모두 만족하는 제품을 비교 분석합니다",
      "스마트 스피커 활용법과 함께 음성 인식 기술을 활용한 편리한 생활 팁을 공유합니다",
      "스마트폰 카메라 활용 팁과 함께 전문가 수준의 사진을 찍을 수 있는 기법들을 소개합니다",
    ],
  },
];

function NewsRoomTempleteA() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.newsRoomContainer}>
      <div className={styles.newsRoomMenuContainer}>
        {newsRoomCategories.map((category, index) => (
          <div key={index} className={styles.newsRoomDataContainer}>
            <p
              className={`${styles.menuItem} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => handleMenuClick(index)}
            >
              {category.name}
            </p>
            {index < newsRoomCategories.length - 1 && (
              <div className={styles.newsRoomSeparator} />
            )}
          </div>
        ))}
      </div>
      <NewsRoomDataContent
        newsRoomDataImage={newsRoomCategories[activeIndex].images}
        newsRoomDataContent={newsRoomCategories[activeIndex].contents}
      />
    </div>
  );
}

function NewsRoomDataContent({
  newsRoomDataImage,
  newsRoomDataContent,
}: {
  newsRoomDataImage: [string, string][];
  newsRoomDataContent: string[];
}) {
  return (
    <div className={styles.newsRoomContentContainer}>
      <div className={styles.contentWithImageContainer}>
        {newsRoomDataImage.map((data, index) => (
          <div key={index} className={styles.contentWithImageData}>
            <div className={styles.contentImageContainer}>
              <img src={data[0]} alt="" />
            </div>
            <p className={styles.contentTitle}>{data[1]}</p>
          </div>
        ))}
      </div>
      <div className={styles.contentContainer}>
        {newsRoomDataContent.slice(0, 5).map((data, index) => (
          <div key={index} className={styles.dataContent}>
            {data}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsRoomTempleteA;
