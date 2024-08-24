"use client";
import { FC, useState } from "react";
import "./Popup.scss";
import { TPopup } from "@/types/types";

import Image from "next/image";

const Popup: FC<TPopup> = ({ index, close, arrayImgs }) => {
  const [indexImg, setIndexImg] = useState(index);
  const [isNextBtn, setIsNextBtn] = useState(true);
  const [isBackBtn, setIsBackBtn] = useState(true);

  const handleClickNextImg = (typeBtn: string) => {
    if (arrayImgs.length - 1 === indexImg) {
      typeBtn === "next" ? setIndexImg(0) : setIndexImg(arrayImgs.length + 1);
    } else if (indexImg === 0) {
      typeBtn === "next"
        ? setIndexImg(indexImg + 1)
        : setIndexImg(arrayImgs.length - 1);
    } else {
      typeBtn === "next"
        ? setIndexImg(indexImg + 1)
        : setIndexImg(indexImg - 1);
    }
  };

  return (
    <div
      className="popup"
      onClick={(e) => e.currentTarget === e.target && close(null)}
    >
      <button className="popup__close" onClick={() => close(null)}></button>
      {isNextBtn && (
        <button
          className="popup__btn popup__btn_back"
          onClick={() => handleClickNextImg("next")}
        ></button>
      )}
      <Image
        width={300}
        height={150}
        className="popup__img"
        src={arrayImgs[indexImg]}
        alt="show img"
      />
      {isBackBtn && (
        <button
          className="popup__btn popup__btn_forward"
          onClick={() => handleClickNextImg("forward")}
        ></button>
      )}
    </div>
  );
};

export default Popup;
