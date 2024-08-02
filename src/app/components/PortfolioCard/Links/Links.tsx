"use client";
import { FC } from "react";
import "./Links.scss";
import { TPortfolioLinks } from "@/types/types";

const Links: FC<TPortfolioLinks> = ({ list, title }) => {
  return (
    list && (
      <div className="portfolio__text">
        {title}
        <ul className="portfolio-list">
          {list.map((item, index) => (
            <li key={index} className="portfolio-list__item">
              <a key={index} className="portfolio-list__link" href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Links;
