import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/Logo.png";
import Styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <nav className={`${Styles.nav} ${Styles.nav_Bg}`}>
        <ul className={Styles.menu}>
          <li>
            <Link href={"/"}>
              <Image
                style={{ cursor: "pointer" }}
                src={Logo}
                alt="Logo"
                width={"32px"}
                height={"32px"}
              />
            </Link>
          </li>
          <li>
            <ul className={Styles.buttons}>
              <li>
                <a
                  className={Styles.cta}
                  href="mailto:ashraf2k1zeeshan@gmail.com?subject=Contact mail from marketplace"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className={`${Styles.cta} ${Styles.ctaOpen}`}
                  href="https://github.com/Zeeshan-2k1/marketplace-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
