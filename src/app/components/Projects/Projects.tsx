"use client";
import { FC } from "react";
import "./Projects.scss";
import { TProjectCard } from "@/types/types";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useTranslations, useLocale } from "next-intl";

const Projects: FC = () => {
  const t = useTranslations();
  const localActive = useLocale();

  return (
    <div className="projects" id="project">
      <h3 className="projects__title title-p">{t.raw("ProjectsPage").title}</h3>
      <ul className="projects-container">
        {t
          .raw("Projects")
          .map((item: TProjectCard) =>
            item.main ? <ProjectCard key={item.id} {...item} /> : "",
          )}
      </ul>
      <a className="projects__all link-icon" href={`${localActive}/projects`}>
        {t.raw("ProjectsPage").all}
      </a>
    </div>
  );
};

export default Projects;
