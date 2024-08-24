"use client";
import { FC } from "react";
import "./ProjectDetails.scss";
import { TProjectDetails } from "@/types/types";

import Image from "next/image";

const ProjectImages: FC<TProjectDetails> = ({
  src,
  title,
  setIndexSrc,
  setArrayImgs,
}) => {
  const handleClickImage = (index: number, arrayImgs: string[]) => {
    setArrayImgs(arrayImgs);
    setIndexSrc(index);
  };

  return (
    <>
      <h2 className="details__title">{title}</h2>
      <div className="details__imgs">
        {src.map((item, index) => (
          <Image
            key={index}
            width={300}
            height={150}
            className="details__img"
            src={item}
            alt={title}
            onClick={() => handleClickImage(index, src)}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectImages;
