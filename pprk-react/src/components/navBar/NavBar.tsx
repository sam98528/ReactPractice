import styles from "./NavBar.module.css";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";
function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.allCategory}>
        <Menu size={22} strokeWidth={2} />
        <p>전체 카테고리</p>
      </div>
      <div className={styles.navBarMenu}>자동차</div>
      <div className={styles.navBarMenu}>조립PC</div>
      <div className={styles.navBarMenu}>PC견적</div>
      <div className={styles.navBarMenu}>AI Hub</div>
      <div className={styles.navBarMenu}>쇼핑기획전</div>
      <div className={styles.navBarMenu}>커뮤니티</div>
      <div className={styles.navBarMenu}>이벤트 / 체험단</div>
      <div className={styles.navBarMore}>
        <span>더보기</span>
        <ChevronDown size={20} />
      </div>
    </div>
  );
}

export default NavBar;
