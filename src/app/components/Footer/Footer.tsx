"use client";
import { FC } from "react";
import "./Footer.scss";

import MenuIcons from "@/components/MenuIcons/MenuIcons";
import Button from "@/components/Button/Button";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Связаться со мной</h3>
      <div className="footer__menu">
        <MenuIcons />
      </div>

      <div className="footer__btn">
        <Button isFill />
      </div>
    </footer>
  );
};

export default Footer;
