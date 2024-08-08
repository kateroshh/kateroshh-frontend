"use client";
import { FC } from "react";
import "./Header.scss";
import { usePathname } from "next/navigation";

import Logo from "@/components/Logo/Logo";
import LanguageBtn from "@/components/LanguageBtn/LanguageBtn";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import Button from "@/components/Button/Button";

const Header: FC = () => {
  const url = usePathname();
  const isProjectsUrl = url.includes("projects");

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Logo />
          {isProjectsUrl ? (
            <div className="header__projects">
              <LanguageBtn />
              <Button />
            </div>
          ) : (
            <LanguageBtn />
          )}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
