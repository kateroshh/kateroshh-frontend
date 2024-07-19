"use client";
import { FC } from "react";
import "./Projects.scss";

import ProjectCard from "../ProjectCard/ProjectCard";

const Projects: FC = () => {
  return (
    <div className="projects">
      <h3 className="projects__title title-p">Мои проекты</h3>
      <ul className="projects-container">
        <ProjectCard />
      </ul>
      <a className="projects__all link-icon" href="#">
        Посмотреть все проекты
      </a>
    </div>
  );
};

export default Projects;
