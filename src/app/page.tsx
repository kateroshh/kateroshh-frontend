"use client";
import { FC } from "react";
import "../scss/index.scss";

import Image from "next/image";
import Logo from "../../public/img/logo.svg";

const Home: FC = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__container">
            <Image className="" src={Logo} alt="logo" />
            <ul className="header-lng">
              <li className="header-lng__item header__item_active">РУС</li>
              <li className="header-lng__item">ENG</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
