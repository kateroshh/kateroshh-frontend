"use client";
import { FC } from "react";
import "./MobileMenu.scss";

import Menu from "../Menu/Menu";
import MenuIcons from "../MenuIcons/MenuIcons";
import Button from "../Button/Button";

const MobileMenu: FC = () => {
  return (
    <>
      <div className="burger"></div>
      <div className="mobile-menu">
        <Menu />
        <Button />
        <MenuIcons />
      </div>
    </>
  );
};

export default MobileMenu;
