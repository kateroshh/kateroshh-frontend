"use client";
import { FC } from "react";
import "./Menu.scss";

const Menu: FC = () => {
  return (
    <nav className="menu">
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
