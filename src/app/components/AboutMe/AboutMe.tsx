"use client";
import { FC } from "react";
import "./AboutMe.scss";

import { useTranslations } from "next-intl";
import Text from "@/components/Text/Text";

const AboutMe: FC = () => {
  const text = useTranslations().raw("AboutMe");

  return (
    <div className="about-me" id="about">
      <h3 className="about-me__title title-p">Обо мне</h3>
      <Text textArray={text} classNameText="about-me__text" />
    </div>
  );
};

export default AboutMe;
