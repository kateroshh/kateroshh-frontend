"use client";
import { FC } from "react";
import "./ProjectDetails.scss";
import { TProjectDetails } from "@/types/types";

import Image from "next/image";

const ProjectImages: FC<TProjectDetails> = ({ src, title, setImgSrc }) => {
  return (
    <>
      <h2 className="details__title">{title}</h2>
      <div className="details__imgs">
        {Array.isArray(src) ? (
          src.map((item, index) => (
            <Image
              key={index}
              width={300}
              height={150}
              className="details__img"
              src={item}
              alt={title}
              onClick={() => setImgSrc(item)}
            />
          ))
        ) : (
          <Image
            width={300}
            height={150}
            className="details__img"
            src={src}
            alt={title}
            onClick={() => setImgSrc(src)}
          />
        )}
      </div>
    </>
  );
};

export default ProjectImages;
