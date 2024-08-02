"use client";
import { FC, ChangeEvent } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import "./LanguageBtn.scss";
import { MobileProps } from "@/types/types";

const LanguageBtn: FC<MobileProps> = ({ isMobile }) => {
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
  };

  return (
    <div className={`header-lng ${isMobile ? "header-lng_mobile" : ""}`}>
      <input
        className="header-lng__item"
        type="radio"
        value="ru"
        name="lng"
        id="ru"
        onChange={onSelectChange}
        disabled={localActive === "ru" ? true : false}
      />
      <label
        className={`header-lng__label header-lng__label_after ${localActive === "ru" ? "header-lng__label_active" : ""}`}
        htmlFor="ru"
      >
        РУС
      </label>
      <input
        className="header-lng__item"
        type="radio"
        value="en"
        name="lng"
        id="en"
        onChange={onSelectChange}
        disabled={localActive === "en" ? true : false}
      />
      <label
        className={`header-lng__label header-lng__label_before ${localActive === "en" ? "header-lng__label_active" : ""}`}
        htmlFor="en"
      >
        ENG
      </label>
    </div>
  );
};

export default LanguageBtn;
