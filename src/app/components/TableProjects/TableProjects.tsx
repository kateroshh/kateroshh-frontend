"use client";
import { FC } from "react";
import "./TableProjects.scss";
import { TProjectCard, TTableHeader } from "@/types/types";

import TableHeader from "@/components/TableProjects/TableHeader";
import TableRow from "@/components/TableProjects/TableRow";

type TableProjectsProps = {
  projects: TProjectCard[];
  tableTitle: TTableHeader;
};

const TableProjects: FC<TableProjectsProps> = ({ projects, tableTitle }) => {
  return (
    <table className="table">
      <TableHeader tableTitle={tableTitle} />
      <tbody>
        {projects.map((item: TProjectCard) => (
          <TableRow key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default TableProjects;
