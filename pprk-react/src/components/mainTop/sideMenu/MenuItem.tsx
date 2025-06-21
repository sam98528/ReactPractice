import styles from "./MenuItem.module.css";
import type { ReactNode } from "react";

interface MenuItemProps {
  name: string;
  component?: ReactNode;
}

function MenuItem({ name, component }: MenuItemProps) {
  return (
    <li className={styles.menuItem}>
      {component}
      <span className={styles.menuItemName}>{name}</span>
    </li>
  );
}

export default MenuItem;
