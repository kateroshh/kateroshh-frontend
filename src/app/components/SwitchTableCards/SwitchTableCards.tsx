"use client";
import { FC } from "react";
import "./SwitchTableCards.scss";
import { TSwitchTableCards } from "@/types/types";

import SVG from "react-inlinesvg";

const SwitchTableCards: FC<TSwitchTableCards> = ({
  typeDisplays,
  setTypeDisplays,
}) => {
  const isTable = typeDisplays === "table" ? true : false;
  return (
    <div className="btns">
      <button
        className={`btns__item ${isTable ? "btns__item_active" : ""}`}
        onClick={() => setTypeDisplays("table")}
      >
        <SVG className="btns__img" src="/img/btns-table.svg" />
      </button>
      <button
        className={`btns__item ${!isTable ? "btns__item_active" : ""}`}
        onClick={() => setTypeDisplays("cards")}
      >
        <SVG className="btns__img" src="/img/btn-cards.svg" />
      </button>
    </div>
  );
};

export default SwitchTableCards;
