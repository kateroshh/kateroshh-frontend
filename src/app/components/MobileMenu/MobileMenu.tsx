"use client";
import { FC, useState } from "react";
import "./MobileMenu.scss";

import Menu from "@/components/Menu/Menu";
import MenuIcons from "@/components/MenuIcons/MenuIcons";
import Button from "@/components/Button/Button";
import LanguageBtn from "@/components/LanguageBtn/LanguageBtn";

const MobileMenu: FC = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleClick = () => {
    setIsMobileMenu(!isMobileMenu);

    if (isMobileMenu) {
      document.body.classList.remove("hide-scroll");
    } else {
      document.body.classList.add("hide-scroll");
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`burger ${isMobileMenu ? "burger_active" : ""}`}
      ></button>
      <div
        className={`mobile-menu ${isMobileMenu ? "mobile-menu_active" : ""}`}
      >
        <Menu isMobile />
        <Button />
        <LanguageBtn isMobile />
        <MenuIcons />
      </div>
    </>
  );
};

export default MobileMenu;
