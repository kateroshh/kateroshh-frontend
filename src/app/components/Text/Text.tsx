"use client";
import { FC } from "react";
import "./Text.scss";
import { TTextArray } from "@/types/types";

const Text: FC<TTextArray> = ({ textArray, classNameText }) => {
  return (
    textArray &&
    textArray.map((item, index) => (
      <p key={index} className={classNameText}>
        {item}
      </p>
    ))
  );
};

export default Text;
