"use client";
import { FC } from "react";
import "./BriefInfo.scss";

import Menu from "../Menu/Menu";
import MenuIcons from "../MenuIcons/MenuIcons";
import Button from "../Button/Button";

const BriefInfo: FC = () => {
  return (
    <div className="brief-info">
      <h1 className="brief-info__title title">Екатерина Рощупкина</h1>
      <h2 className="brief-info__subtitle subtitle">Frontend – разрабочик</h2>
      <p className="brief-info__text">
        Привет, меня зовут Катя, буду рада познакомиться. Я
        frontend-разработчик. Моя цель - создавать доступные и интуитивно
        понятные интерфейсы, которые облегчают жизнь пользователей и закроют их
        потребности. 
      </p>
      <div className="brief-info__btn">
        <Button />
      </div>

      <Menu />

      <MenuIcons />
    </div>
  );
};

export default BriefInfo;
