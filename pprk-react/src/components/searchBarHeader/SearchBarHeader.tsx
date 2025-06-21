import styles from "./SearchBarHeader.module.css";
import { Star } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingBag } from "lucide-react";

function SearchBarHeader() {
  return (
    <div className={styles.header}>
      <a href="" className={styles.logo}>
        <img
          src="https://img.danawa.com/new/danawa_main/v1/img/danawa_logo_main_brand.png"
          alt=""
        />
      </a>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="검색어를 입력하세요."
        />
        <button className={styles.searchButton}>
          <img className={styles.searchIcon} src="/search.svg" />
        </button>
      </div>
      <div className={styles.menuButtons}>
        <button>
          <ShoppingBag size={34} strokeWidth={1} />
          <span>최근</span>
        </button>
        <button>
          <Star size={34} strokeWidth={1} />
          <span>즐겨찾기</span>
        </button>
        <button>
          <User size={34} strokeWidth={1} />
          <span>로그인</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBarHeader;
