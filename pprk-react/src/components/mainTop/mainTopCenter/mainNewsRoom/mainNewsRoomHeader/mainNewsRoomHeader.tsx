import styles from "./mainNewsRoomHeader.module.css";
import { ChevronRight, ChevronLeft, Pause, Play } from "lucide-react";
import { useState, useEffect } from "react";

const newsRoomMenu: string[] = [
  "주요이슈",
  "컴퓨터",
  "테크",
  "자동차",
  "AI",
  "신상소식",
];

function MainNewsRoomHeader() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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
    const interval = setInterval(() => {
      handleMenuClick(activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className={styles.newsRoomMenuContainer}>
      <div className={styles.newsRoomMenu}>
        <div className={styles.newsRoomTitleMenu}>
          <h2 className={styles.title}>
            <a href="">뉴스룸</a>
          </h2>
          <ChevronRight size={22} strokeWidth={1} />
        </div>
        <div className={styles.newsRoomMenus}>
          {newsRoomMenu.map((menu, index) => (
            <div key={index} className={styles.newsRoomMenus}>
              <p
                className={`${styles.menuItem} ${
                  index === activeIndex ? styles.active : ""
                }`}
                onClick={() => handleMenuClick(index)}
              >
                {menu}
              </p>
              {index < newsRoomMenu.length - 1 && (
                <div className={styles.newsRoomSeparator} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.newsRoomPagingContainer}>
        <span>{activeIndex + 1} / 6</span>
        <div className={styles.newsRoomPagingButtons}>
          <button
            className={styles.leftButton}
            onClick={() => handleMenuClick(activeIndex - 1)}
          >
            <ChevronLeft size={12} />
          </button>
          <button
            className={styles.rightButton}
            onClick={() => handleMenuClick(activeIndex + 1)}
          >
            <ChevronRight size={12} />
          </button>
        </div>
        <button
          className={styles.stopButton}
          onClick={() => setIsPaused(!isPaused)}
        >
          {!isPaused ? <Play size={12} /> : <Pause size={12} />}
        </button>
      </div>
    </div>
  );
}

export default MainNewsRoomHeader;
