import styles from "./MenuItem.module.css";
import type { ReactNode } from "react";

interface MenuItemProps {
  name: string;
  component?: ReactNode;
  onMouseEnter?: (index: number) => void;
  onMouseLeave?: (index: number) => void;
  index: number;
}

function MenuItem({
  name,
  component,
  onMouseEnter,
  onMouseLeave,
  index,
}: MenuItemProps) {
  return (
    <li
      className={styles.menuItem}
      onMouseEnter={() => onMouseEnter?.(index)}
      onMouseLeave={() => onMouseLeave?.(index)}
    >
      {component}
      <span className={styles.menuItemName}>{name}</span>
    </li>
  );
}

export default MenuItem;
