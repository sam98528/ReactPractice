import styles from "./mainTop.module.css";
import MainTopCenter from "./mainTopCenter/MainTopCenter";
import SideMenu from "./sideMenu/SideMenu";

function MainTop() {
  return (
    <div className={styles.mainTop}>
      <SideMenu />
      <MainTopCenter />
    </div>
  );
}

export default MainTop;
