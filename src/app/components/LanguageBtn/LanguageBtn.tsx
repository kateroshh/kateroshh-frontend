"use client";
import { FC } from "react";
import "./LanguageBtn.scss";

const LanguageBtn: FC = () => {
  return (
    <ul className="header-lng">
      <li className="header-lng__item">
        <button className="header-lng__btn header-lng__btn_after header-lng__btn_active">
          РУС
        </button>
      </li>
      <li className="header-lng__item">
        <button className="header-lng__btn header-lng__btn_before">ENG</button>
      </li>
    </ul>
  );
};

export default LanguageBtn;
