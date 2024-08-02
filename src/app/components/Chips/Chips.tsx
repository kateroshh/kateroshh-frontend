"use client";
import { FC } from "react";
import "./Chips.scss";
import { TChips } from "@/types/types";

const Chips: FC<TChips> = ({ chips }) => {
  return (
    chips && (
      <ul className="chips">
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
