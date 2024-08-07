"use client";
import { FC } from "react";
import "./Menu.scss";
import { MobileProps, TMenuItem } from "@/types/types";

import { useTranslations } from "next-intl";
import { useScrollspy } from "@/utils/hooks/useScrollspy";
import { MENU_IDS } from "@/constants";

const Menu: FC<MobileProps> = ({ isMobile }) => {
  const t = useTranslations();
  const activeId = useScrollspy(MENU_IDS, 150);

  return (
    <nav className={`menu ${isMobile ? "menu_active" : ""}`}>
      {t.raw("Menu").map(({ id, title, tag }: TMenuItem) => (
        <li key={id} className="menu__item">
          <a
            className={`menu__link ${activeId === tag ? "menu__link_active" : ""}`}
            href={`#${tag}`}
          >
            {title}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Menu;
