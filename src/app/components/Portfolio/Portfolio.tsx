"use client";
import { FC } from "react";
import "./Portfolio.scss";
import { TPortfolioCard } from "@/types/types";

import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";
import { useTranslations } from "next-intl";
import { RESUME_NAME } from "@/constants";

const Portfolio: FC = () => {
  const t = useTranslations();

  return (
    <div className="portfolio" id="portfolio">
      <h3 className="portfolio__title title-p">
        {t.raw("PortfolioPage").title}
      </h3>
      <ul className="portfolio-cards">
        {t
          .raw("Portfolio")
          .map((item: TPortfolioCard) =>
            item.main ? <PortfolioCard key={item.id} {...item} /> : "",
          )}
      </ul>
      <a
        className="portfolio__all link-icon"
        href={`\${RESUME_NAME}`}
        download={RESUME_NAME}
        target="_blank"
      >
        {t.raw("PortfolioPage").all}
      </a>
    </div>
  );
};

export default Portfolio;
