"use client";
import { FC } from "react";
import "./Logo.scss";

import Image from "next/image";
import LogoImg from "@/img/logo.svg";

const Logo: FC = () => {
  return (
    <a className="logo" href="/">
      <Image className="logo__img" src={LogoImg} alt="logo" priority={true} />
    </a>
  );
};

export default Logo;
