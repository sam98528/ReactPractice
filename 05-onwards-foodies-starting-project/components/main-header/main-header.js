import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import style from "./main-header.module.css";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link className={style.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority></Image>
          NextLevel Food
        </Link>

        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Brows Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
