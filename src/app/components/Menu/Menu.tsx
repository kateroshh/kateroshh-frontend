"use client";
import { FC } from "react";
import "./Menu.scss";
import { MobileProps } from "../../../types/types";
import { useTranslations } from "next-intl";

const Menu: FC<MobileProps> = ({ isMobile }) => {
  const t = useTranslations("Menu");

  return (
    <nav className={`menu ${isMobile ? "menu_active" : ""}`}>
      <li className="menu__item">
        <a className="menu__link menu__link_active" href="#">
          {t("about")}
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#">
          {t("project")}
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#">
          {t("experience")}
        </a>
      </li>
    </nav>
  );
};

export default Menu;
