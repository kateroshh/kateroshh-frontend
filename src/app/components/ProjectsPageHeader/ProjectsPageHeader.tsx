"use client";
import { FC } from "react";
import "./ProjectsPageHeader.scss";
import { TSwitchTableCards } from "@/types/types";

import SwitchTableCards from "@/components/SwitchTableCards/SwitchTableCards";

import { useTranslations } from "next-intl";

const ProjectsPageHeader: FC<TSwitchTableCards> = ({
  typeDisplays,
  setTypeDisplays,
}) => {
  const t = useTranslations("ProjectsPage");

  return (
    <div className="header-projects">
      <div className="header-projects__title">
        <a className="header-projects__link" href="/">
          {t("backPage")}
        </a>
        <h1 className="header-projects__text">{t("title")}</h1>
      </div>
      <SwitchTableCards
        typeDisplays={typeDisplays}
        setTypeDisplays={setTypeDisplays}
      />
    </div>
  );
};

export default ProjectsPageHeader;
