"use client";
import { FC } from "react";
import "./Menu.scss";
import { MobileProps } from "../../../types/types";

const Menu: FC<MobileProps> = ({ isMobile }) => {
  console.log(isMobile);

  return (
    <nav className={`menu ${isMobile ? "menu_active" : ""}`}>
      <li className="menu__item">
        <a className="menu__link menu__link_active" href="#">
          Обо мне
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#">
          Проекты
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#">
          Опыт
        </a>
      </li>
    </nav>
  );
};

export default Menu;
