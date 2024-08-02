"use client";
import { FC } from "react";
import "./Header.scss";

import Logo from "@/components/Logo/Logo";
import LanguageBtn from "@/components/LanguageBtn/LanguageBtn";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

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
