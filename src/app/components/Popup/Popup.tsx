"use client";
import { FC, useState } from "react";
import "./Popup.scss";
import { TPopup } from "@/types/types";

import Image from "next/image";

const Popup: FC<TPopup> = ({ src, close }) => {
  return (
    <div className="popup">
      <button className="popup__close" onClick={() => close("")}></button>
      <Image
        width={300}
        height={150}
        className="popup__img"
        src={src}
        alt="show img"
      />
    </div>
  );
};

export default Popup;
