import styles from "./mainNewsRoomDataContainer.module.css";
import { useState } from "react";

const newsRoomData: string[] = [
  "먹거리",
  "패션/의류",
  "PC/노트북",
  "게임",
  "스마트기기",
];

const newsRoomDataImage: [string, string][] = [
  [
    "http://img.danawa.com/images/attachFiles/6/824/5823765_1.jpg?fitting=Large|110:78&crop=110:78;*,*",
    "풀무원, 쫄깃한 메밀면으로 여름 공략…‘가쓰오 냉모밀’ 신제품 출시sadsadsadsadsadsadsadsadsadasdsadasd",
  ],
  [
    "http://img.danawa.com/images/attachFiles/6/815/5814574_1.jpeg?fitting=Large|110:78&crop=110:78;*,*",
    "처음 만난 사람을 대비한 신상 주류 5",
  ],
];

const newsRoomDataContent: string[] = [
  "치열한 일상 속 Chill한 상쾌함을, 스프라이트 제로 Chill",
  "지평주조, 100주년 기념 하이엔드 막걸리 ‘지평 부의’ 및 ‘지평 석탄’ 출시",
  "올가, 국산 현미로 만든 뉴트로 스낵 3종 출시",
  "스타벅스 리스트레토 샷, 네스프레소 캡슐로 출시 집에서도 프리미엄 커피 경험",
  "풀무원푸드머스, 어린이날 맞아 강화된 '풀스박스' 간식 꾸러미 출시",
];

function NewsRoomDataContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.newsRoomContainer}>
      <div className={styles.newsRoomMenuContainer}>
        {newsRoomData.map((data, index) => (
          <div key={index} className={styles.newsRoomDataContainer}>
            <p
              className={`${styles.menuItem} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => handleMenuClick(index)}
            >
              {data}
            </p>
            {index < newsRoomData.length - 1 && (
              <div className={styles.newsRoomSeparator} />
            )}
          </div>
        ))}
      </div>

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
          {newsRoomDataContent.map((data, index) => (
            <div key={index} className={styles.dataContent}>
              {data}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsRoomDataContainer;
