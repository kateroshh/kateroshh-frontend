"use client";
import { FC } from "react";
import "./BriefInfo.scss";

import Menu from "../Menu/Menu";
import MenuIcons from "../MenuIcons/MenuIcons";
import Button from "../Button/Button";

import { useTranslations } from "next-intl";

const BriefInfo: FC = () => {
  const t = useTranslations("BriefInfo");

  return (
    <div className="brief-info">
      <h1 className="brief-info__title title">{t("name")}</h1>
      <h2 className="brief-info__subtitle subtitle">{t("prof")}</h2>
      <p className="brief-info__text">{t("brif")}</p>
      <div className="brief-info__btn">
        <Button />
      </div>

      <Menu />

      <MenuIcons />
    </div>
  );
};

export default BriefInfo;
