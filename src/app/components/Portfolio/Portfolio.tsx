"use client";
import { FC } from "react";
import "./Portfolio.scss";
import { TPortfolioCard } from "@/types/types";

import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";
import { useTranslations } from "next-intl";

const Portfolio: FC = () => {
  const t = useTranslations();

  return (
    <div className="portfolio" id="portfolio">
      <h3 className="portfolio__title title-p">Опыт</h3>
      <ul className="portfolio-cards">
        {t
          .raw("Portfolio")
          .map((item: TPortfolioCard) =>
            item.main ? <PortfolioCard key={item.id} {...item} /> : "",
          )}
      </ul>
      <a className="portfolio__all link-icon" href="#">
        Посмотреть резюме полностью
      </a>
    </div>
  );
};

export default Portfolio;
