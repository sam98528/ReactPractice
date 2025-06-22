import styles from "./SideMenu.module.css";
import MenuItem from "./MenuItem";
import menus from "./SideMenuData";
import { useState } from "react";

function SideMenu() {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setSelectedMenu(index);
  };

  const handleMouseLeave = () => {
    // 진짜 바깥으로 나간 경우만 상태 초기화
    setSelectedMenu(null);
  };

  return (
    <div className={styles.sideMenuContainer}>
      <div className={styles.sideMenu} onMouseLeave={handleMouseLeave}>
        {menus.map((menu, index) => (
          <MenuItem
            key={menu.name}
            name={menu.name}
            component={menu.component}
            index={index}
            onMouseEnter={handleMouseEnter}
          />
        ))}
        {selectedMenu !== null && (
          <div className={styles.detailMenu}>
            <div className={styles.detailMenuLeft}>
              {menus[selectedMenu].details.map((detail) => (
                <div className={styles.detailMenuItem}>
                  <div className={styles.detailMenuItemCategory}>
                    {detail.category}
                  </div>
                  <div className={styles.detailMenuItemMenuContainer}>
                    {detail.menu.map((menuItem) => (
                      <div
                        className={styles.detailMenuItemMenu}
                        key={menuItem[0]}
                      >
                        <a href={menuItem[1]}>{menuItem[0]}</a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.detailMenuDivider}></div>
            <div className={styles.detailMenuRight}>
              <div className={styles.detailMenuItemCategory}>쇼핑 꿀팁</div>
              {menus[selectedMenu].tip.map((tip) => (
                <div className={styles.detailMenuRightItem}>
                  <span>•</span>
                  <a href={tip.link}>{tip.name}</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideMenu;
