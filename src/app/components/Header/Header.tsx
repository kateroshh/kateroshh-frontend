"use client";
import { FC } from "react";
import "./Header.scss";

import Logo from "../Logo/Logo";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Logo />
          <LanguageBtn />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
