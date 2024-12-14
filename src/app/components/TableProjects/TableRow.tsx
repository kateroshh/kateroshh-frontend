"use client";
import { FC } from "react";
import "./TableProjects.scss";
import { TProjectCard } from "@/types/types";

import Chips from "@/components/Chips/Chips";
import { useLocale } from "next-intl";

const TableRow: FC<TProjectCard> = ({ id, year, title, company, chips }) => {
  const localActive = useLocale();

  return (
    <tr className="table__row">
      <td className="table__cell">{year}</td>
      <td className="table__cell">{title}</td>
      <td className="table__cell">{company}</td>
      <td className="table__cell">
        <Chips chips={chips} />
      </td>
      <td className="table__cell">
        <a
          className="table__link link-icon"
          href={`/${localActive}/projects/${id}`}
        >
          Ссылка
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
