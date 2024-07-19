"use client";
import { FC } from "react";
import "./Footer.scss";

import MenuIcons from "../MenuIcons/MenuIcons";
import Button from "../Button/Button";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Связаться со мной</h3>
      <div className="footer__menu">
        <MenuIcons />
      </div>

      <div className="footer__btn">
        <Button />
        {/* <a className="download-btn download-btn_no-fill">Резюме</a> */}
      </div>
    </footer>
  );
};

export default Footer;
