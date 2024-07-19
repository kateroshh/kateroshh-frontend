"use client";
import { FC } from "react";
import "./Chips.scss";

const Chips: FC = () => {
  return (
    <ul className="chips">
      <li className="chips__item">Java Script</li>
      <li className="chips__item">React</li>
      <li className="chips__item">TypeScript</li>
      <li className="chips__item">SCSS</li>
    </ul>
  );
};

export default Chips;
