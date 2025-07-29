import Link from "next/link";
import Image from "next/image";

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
              {" "}
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              {" "}
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
