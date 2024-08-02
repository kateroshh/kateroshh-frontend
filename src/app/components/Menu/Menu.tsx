"use client";
import { FC } from "react";
import "./Menu.scss";
import { MobileProps } from "@/types/types";

import { useTranslations } from "next-intl";
import { useScrollspy } from "../../../utils/hooks/useScrollspy";
import { MENU_IDS } from "../../../utils/constants";

const Menu: FC<MobileProps> = ({ isMobile }) => {
  const t = useTranslations("Menu");
  const activeId = useScrollspy(MENU_IDS, 150);

  return (
    <nav className={`menu ${isMobile ? "menu_active" : ""}`}>
      <li className="menu__item">
        <a
          className={`menu__link ${activeId === "about" ? "menu__link_active" : ""}`}
          href="#about"
        >
          {t("about")}
        </a>
      </li>
      <li className="menu__item">
        <a
          className={`menu__link ${activeId === "project" ? "menu__link_active" : ""}`}
          href="#project"
        >
          {t("project")}
        </a>
      </li>
      <li className="menu__item">
        <a
          className={`menu__link ${activeId === "portfolio" ? "menu__link_active" : ""}`}
          href="#portfolio"
        >
          {t("experience")}
        </a>
      </li>
    </nav>
  );
};

export default Menu;
