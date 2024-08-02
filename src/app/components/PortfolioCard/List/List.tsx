"use client";
import { FC } from "react";
import "./List.scss";
import { TPortfolioList } from "@/types/types";

type TProps = TPortfolioList;

const List: FC<TProps> = ({ list, title }) => {
  return (
    list && (
      <div className="portfolio__text">
        {title}
        <ul className="portfolio-list">
          {list.map((item, index) => (
            <li key={index} className="portfolio-list__item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default List;
