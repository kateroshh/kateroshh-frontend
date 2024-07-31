"use client";
import { FC } from "react";
import "./AboutMe.scss";

import { useTranslations } from "next-intl";

const AboutMe: FC = () => {
  const t = useTranslations("AboutMe");
  console.log(t("p1"));

  return (
    <div className="about-me">
      <h3 className="about-me__title title-p">Обо мне</h3>
      <p className="about-me__text">{t("p1")}</p>
      <p className="about-me__text">{t("p2")}</p>
      <p className="about-me__text">{t("p3")}</p>
      <p className="about-me__text">{t("p4")}</p>
    </div>
  );
};

export default AboutMe;
