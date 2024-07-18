"use client";
import { FC } from "react";
import "./Header.scss";

import Image from "next/image";
import Logo from "../../../../public/img/logo.svg";

import LanguageBtn from "../LanguageBtn/LanguageBtn";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Image className="header__logo" src={Logo} alt="logo" />
          <LanguageBtn />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
