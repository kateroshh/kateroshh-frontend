"use client";
import { FC } from "react";
import "./PortfolioCard.scss";

import Chips from "../Chips/Chips";

const PortfolioCard: FC = () => {
  return (
    <li className="portfolio-card">
      <p className="portfolio-card__period">2023 — настоящее время</p>
      <div className="portfolio-card__content">
        <h3 className="portfolio-card__title">
          Frontend-разработчик – Фриланс
        </h3>
        <div className="portfolio-card__about">
          <p className="portfolio-card__text">
            Проект для HRSpace (hrspace.hh.ru) «Микросервис билдера заявки для
            поиска рекрутеров»: разработка кастомных форм на JavaScript /
            TypeScript и с использованием библиотеки Formik.
          </p>
          <p className="portfolio-card__text">
            Ссылка на проект:
            <a
              className="portfolio-card__link"
              href="https://github.com/Space-HR/hr-space-frontend"
            >
              https://github.com/Space-HR/hr-space-frontend
            </a>
          </p>
        </div>
        <Chips />
      </div>
    </li>
  );
};

export default PortfolioCard;
