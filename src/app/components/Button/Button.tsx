"use client";
import { FC } from "react";
import "./Button.scss";
import { useTranslations } from "next-intl";

import { TButton } from "@/types/types";
import { RESUME_NAME } from "@/constants";

const Button: FC<TButton> = ({ isFill }) => {
  const t = useTranslations("Button");

  const classNameBtn = `download-btn ${isFill ? "download-btn_no-fill" : ""}`;

  return (
    <a
      className={classNameBtn}
      href={`\${RESUME_NAME}`}
      download={RESUME_NAME}
      target="_blank"
    >
      {t("download")}
    </a>
  );
};

export default Button;
