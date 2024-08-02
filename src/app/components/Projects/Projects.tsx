"use client";
import { FC, useRef } from "react";
import "./Projects.scss";
import { TProjectCard } from "@/types/types";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useTranslations } from "next-intl";

const Projects: FC = () => {
  const t = useTranslations();

  return (
    <div className="projects" id="project">
      <h3 className="projects__title title-p">Мои проекты</h3>
      <ul className="projects-container">
        {t
          .raw("Projects")
          .map((item: TProjectCard) =>
            item.main ? <ProjectCard key={item.id} {...item} /> : "",
          )}
      </ul>
      <a className="projects__all link-icon" href="#">
        Посмотреть все проекты
      </a>
    </div>
  );
};

export default Projects;
