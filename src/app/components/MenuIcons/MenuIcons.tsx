"use client";
import { FC } from "react";
import "./MenuIcons.scss";
import { socialIcons } from "@/constants";
import SVG from "react-inlinesvg";

const MenuIcons: FC = () => {
  const path = "/img/menu-icons/";

  return (
    <nav className="menu-icons">
      {socialIcons.map(({ id, nameIcon, url }) => (
        <li key={id} className="menu-icons__item">
          <a className="menu-icons__link" href={url} target="blank">
            <SVG className="menu-icons__img" src={path + nameIcon} />
          </a>
        </li>
      ))}
    </nav>
  );
};

export default MenuIcons;
