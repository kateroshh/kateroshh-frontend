"use client";
import { FC } from "react";
import "./CardProjects.scss";
import { TProjectCard } from "@/types/types";

import { useTranslations } from "next-intl";

type TCardProjects = {
  projects: TProjectCard[];
};

const CardProjects: FC<TCardProjects> = ({ projects }) => {
  const t = useTranslations("TableProjects");

  return (
    <ul className="cards">
      {projects.map((item: TProjectCard) => (
        <li key={item.id} className="card">
          <a className="card__content" href="#">
            <h2 className="card__title">{item.title}</h2>
            <p className="card__company">{item.company}</p>
            <p className="card__about">{item.about}</p>
          </a>
          <a className="card__link link-icon" href={item.link}>
            {t("link")}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CardProjects;
