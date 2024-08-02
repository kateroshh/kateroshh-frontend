"use client";
import { FC } from "react";
import "./Logo.scss";

import Image from "next/image";
import LogoImg from "@/img/logo.svg";

const Logo: FC = () => {
  return <Image className="logo" src={LogoImg} alt="logo" />;
};

export default Logo;
