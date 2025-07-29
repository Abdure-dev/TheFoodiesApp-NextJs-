import Link from "next/link";
import Image from "next/image";
import NavLink from "./nav-link";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import syles from "./header-style.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={syles.header}>
        <Link className={syles.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={syles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Browse Meals</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
