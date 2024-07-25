"use client";
import { FC } from "react";
import "./Button.scss";
import { useTranslations } from "next-intl";

const Button: FC = () => {
  const t = useTranslations("Button");

  return (
    <a className="download-btn" href="#">
      {t("download")}
    </a>
  );
};

export default Button;
