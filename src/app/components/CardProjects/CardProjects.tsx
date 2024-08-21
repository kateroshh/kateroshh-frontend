"use client";
import { FC } from "react";
import "./CardProjects.scss";
import { TProjectCard } from "@/types/types";

import Link from "next/link";
import { useTranslations } from "next-intl";

type TCardProjects = {
  projects: TProjectCard[];
};

const CardProjects: FC<TCardProjects> = ({ projects }) => {
  const t = useTranslations("TableProjects");

  return (
    <ul className="cards">
      {projects.map(({ id, title, company, about }: TProjectCard) => (
        <li key={id} className="card">
          <Link className="card__content" href={`projects/${id}`}>
            <h2 className="card__title">{title}</h2>
            <p className="card__company">{company}</p>
            <p className="card__about">{about}</p>
          </Link>
          <Link className="card__link link-icon" href={`projects/${id}`}>
            {t("link")}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CardProjects;
