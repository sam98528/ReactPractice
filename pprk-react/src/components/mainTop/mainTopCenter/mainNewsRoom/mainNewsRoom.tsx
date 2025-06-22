import styles from "./mainNewsRoom.module.css";
import MainNewsRoomHeader from "./mainNewsRoomHeader/mainNewsRoomHeader";
import NewsRoomContainer from "./mainNewsRoomDataContainer/mainNewsRoomDataContainer";
import { useState, useEffect } from "react";

const newsRoomMenu: string[] = [
  "주요이슈",
  "컴퓨터",
  "테크",
  "자동차",
  "AI",
  "신상소식",
];

function MainNewsRoom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const handleMenuClick = (index: number) => {
    if (index < 0) {
      setActiveIndex(newsRoomMenu.length - 1);
    } else if (index >= newsRoomMenu.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleMenuClick(activeIndex + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeIndex]);

  return (
    <div className={styles.mainNewsRoom}>
      <MainNewsRoomHeader
        newsRoomMenu={newsRoomMenu}
        activeIndex={activeIndex}
        handleMenuClick={handleMenuClick}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
      <NewsRoomContainer activeIndex={activeIndex} />
    </div>
  );
}

export default MainNewsRoom;
