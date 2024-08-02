"use client";
import { FC } from "react";
import "./ProjectCard.scss";
import { TProjectCard } from "@/types/types";

import Image from "next/image";
import HRspace from "@/img/projects/HRspace.jpg";

import Chips from "@/components/Chips/Chips";

const ProjectCard: FC<TProjectCard> = ({ title, about, chips, link }) => {
  return (
    <li className="project-card">
      <a className="project-card__link" href={link}>
        <Image className="project-card__img" src={HRspace} alt="project icon" />
        <div className="project-card__content">
          <h2 className="project-card__title link-icon">{title}</h2>
          <div className="project-card__about">
            <p className="project-card__text text">{about}</p>
          </div>
          <Chips chips={chips} />
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
