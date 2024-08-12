"use client";
import { FC } from "react";
import "./TableProjects.scss";
import { TTableHeader } from "@/types/types";

type TableHeaderProps = {
  tableTitle: TTableHeader;
};

const TableHeader: FC<TableHeaderProps> = ({ tableTitle }) => {
  return (
    <thead>
      <tr className="table__row table__row_header">
        {/* {Object.keys(tableTitle).map((item: string, index) => (
          <th key={index} className="table__cell table__cell_header">
            {tableTitle[item]}
          </th>
        ))} */}
        <th className="table__cell table__cell_header">{tableTitle.year}</th>
        <th className="table__cell table__cell_header">{tableTitle.project}</th>
        <th className="table__cell table__cell_header">{tableTitle.company}</th>
        <th className="table__cell table__cell_header">{tableTitle.tech}</th>
        <th className="table__cell table__cell_header">{tableTitle.link}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
