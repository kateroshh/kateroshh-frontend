"use client";
import { FC } from "react";
import "./PortfolioCard.scss";
import { TPortfolioCard } from "@/types/types";

import Chips from "@/components/Chips/Chips";
import List from "./List/List";
import Links from "./Links/Links";
import Text from "@/components/Text/Text";

const PortfolioCard: FC<TPortfolioCard> = ({
  period,
  title,
  text,
  achievements,
  chips,
  links,
}) => {
  return (
    <li className="portfolio-card">
      <p className="portfolio-card__period">{period}</p>
      <div className="portfolio-card__content">
        <h3 className="portfolio-card__title">{title}</h3>
        <div className="portfolio-card__about">
          {/* {text &&
            text.map((item, index) => (
              <p key={index} className="portfolio-card__text">
                {item}
              </p>
            ))} */}

          <Text textArray={text} classNameText="portfolio-card__text" />

          <List list={achievements} title={"Достижения:"} />

          <Links list={links} title={"Ссылка на проект:"} />

          {/* {achievements && (
            <div className="portfolio__text">
              Достижения:
              <ul className="portfolio-list">
                {achievements.map((item, index) => (
                  <li key={index} className="portfolio-list__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {links && (
            <p className="portfolio__text">
              Ссылка на проект:
              {links.map((item, index) => (
                <a key={index} className="portfolio__link" href={item.href}>
                  {item.title}
                </a>
              ))}
            </p>
          )} */}
        </div>
        <Chips chips={chips} />
      </div>
    </li>
  );
};

export default PortfolioCard;
