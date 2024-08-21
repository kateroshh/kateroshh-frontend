"use client";
import { FC, useState } from "react";
import "./ProjectDetails.scss";
import { TProjectCard } from "@/types/types";

import { useTranslations } from "next-intl";

import Image from "next/image";
import Chips from "@/app/components/Chips/Chips";
import ProjectImages from "./ProjectImages";
import Popup from "../Popup/Popup";

type TProps = {
  project: TProjectCard;
};

const ProjectDetails: FC<TProps> = ({ project }) => {
  const [imgSrc, setImgSrc] = useState("");

  const t = useTranslations("ProjectsPage");

  return (
    <div className="details">
      <div className="details__about">
        {project.srcIcon && (
          <Image
            width={400}
            height={272}
            className="details__icon"
            src={project.srcIcon}
            alt={project.title}
          />
        )}
        <div className="details__text">
          <p className="details__p">{project.about}</p>
        </div>
      </div>
      <div className="details__info">
        <a className="details__link link-icon" href={project.link}>
          {t("linkProject")}
        </a>
        <div className="details-chips">
          <h2 className="details-chips__title"> {t("techProject")}</h2>
          <Chips chips={project.chips} />
        </div>

        {project.details &&
          project.details?.map(({ title, src }, index) => (
            <ProjectImages
              key={index}
              src={src}
              title={title}
              setImgSrc={setImgSrc}
            />
          ))}
      </div>
      {imgSrc && <Popup src={imgSrc} close={setImgSrc} />}
    </div>
  );
};

export default ProjectDetails;
