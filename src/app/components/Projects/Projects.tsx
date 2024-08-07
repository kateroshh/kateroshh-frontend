"use client";
import { FC } from "react";
import "./Projects.scss";
import { TProjectCard } from "@/types/types";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { MENU_IDS } from "@/constants";

const Projects: FC = () => {
  const t = useTranslations();
  const localActive = useLocale();

  return (
    <div className="projects" id={MENU_IDS[1]}>
      <h3 className="projects__title title-p">{t.raw("ProjectsPage").title}</h3>
      <ul className="projects-container">
        {t
          .raw("Projects")
          .map((item: TProjectCard) =>
            item.main ? <ProjectCard key={item.id} {...item} /> : "",
          )}
      </ul>
      <Link
        className="projects__all link-icon"
        href={`${localActive}/projects`}
      >
        {t.raw("ProjectsPage").all}
      </Link>
    </div>
  );
};

export default Projects;
