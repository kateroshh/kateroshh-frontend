"use client";
import { FC } from "react";
import "./ProjectCard.scss";

import Image from "next/image";
import HRspace from "../../../../public/img/projects/HRspace.jpg";

import Chips from "../Chips/Chips";

const ProjectCard: FC = () => {
  return (
    <li className="project-card">
      <a className="project-card__link" href="#">
        <Image className="project-card__img" src={HRspace} alt="project icon" />
        <div className="project-card__content">
          <h2 className="project-card__title link-icon">
            Микросервис билдера заявки – HRSpace
          </h2>
          <div className="project-card__about">
            <p className="project-card__text text">
              Проект для HRSpace (hrspace.hh.ru) «Микросервис билдера заявки для
              поиска рекрутеров».
            </p>
            <p className="project-card__text text">
              Цели сервиса: дать заказчикам возможность размещать заявку на
              подбор по трем моделям оплаты. Рекрутерам – откликаться и вести
              переписку с клиентами в рамках внутреннего чата, направлять резюме
              и регистрировать вышедшего сотрудника (дата выхода и прохождение
              испытательного срока).
            </p>
          </div>
          <Chips />
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
