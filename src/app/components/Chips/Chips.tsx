"use client";
import { FC } from "react";
import "./Chips.scss";
import { TChips } from "@/types/types";
import { usePathname } from "next/navigation";

const Chips: FC<TChips> = ({ chips }) => {
  const url = usePathname();
  const isProjectsUrl = url.includes("projects");

  return (
    chips && (
      <ul className={`chips ${isProjectsUrl ? "chips_projects" : ""}`}>
        {chips.map((item, index) => (
          <li className="chips__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    )
  );
};

export default Chips;
