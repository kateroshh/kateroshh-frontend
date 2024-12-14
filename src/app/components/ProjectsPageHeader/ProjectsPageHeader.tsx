"use client";
import { FC } from "react";
import "./ProjectsPageHeader.scss";
import { TSwitchTableCards } from "@/types/types";

import SwitchTableCards from "@/components/SwitchTableCards/SwitchTableCards";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const ProjectsPageHeader: FC<TSwitchTableCards> = ({
  typeDisplays,
  setTypeDisplays,
  title,
}) => {
  const t = useTranslations("ProjectsPage");
  const router = useRouter();
  const pathname = usePathname();
  const isMain = pathname.split("/").length - 2 === 1 ? true : false;

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="header-projects">
      <div className="header-projects__title">
        <button className="header-projects__link" onClick={handleBackClick}>
          {isMain ? t("backPage") : t("title")}
        </button>
        <h1 className="header-projects__text">{isMain ? t("title") : title}</h1>
      </div>
      {isMain && (
        <SwitchTableCards
          typeDisplays={typeDisplays}
          setTypeDisplays={setTypeDisplays}
        />
      )}
    </div>
  );
};

export default ProjectsPageHeader;
