import styles from "./MainTopCenter.module.css";
import MainNewsRoom from "./mainNewsRoom/mainNewsRoom";

function MainTopCenter() {
  return (
    <div className={styles.mainArea}>
      <div className={styles.topMainArea}>
        <div className={styles.topMainAreaContainerL}>
          <p>hello</p>
        </div>
        <div className={styles.topMainAreaContainerR}>
          <ul>
            <li>
              생활공작소, 가정과 차량용 ‘에어컨 탈취제’ 출시… 99% 이상 탈취 효과
            </li>
            <li>
              가성비 무선 기계식 키보드 추천 지클릭커 이 가격에 공장윤활까지?
            </li>
            <li>에이텐코리아, 8x4 USB 3.2 공유 스위치 'US3384i' 출시</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomMainArea}>
        <div className={styles.bottomMainAreaContainerL}>
          <MainNewsRoom />
        </div>
        <div className={styles.bottomMainAreaContainerR}>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default MainTopCenter;
