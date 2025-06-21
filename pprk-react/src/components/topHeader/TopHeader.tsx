import styles from "./TopHeader.module.css";

function TopHeader() {
  return (
    <div className={styles.header}>
      <a href="">에누리</a>
      <div className={styles.seperator}></div>
      <a href="">몰테일</a>
      <div className={styles.seperator}></div>
      <a href="">플레이오토</a>
      <div className={styles.seperator}></div>
      <a href="">메이크샵</a>
    </div>
  );
}

export default TopHeader;
