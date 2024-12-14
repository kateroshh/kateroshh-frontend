"use client";
import { FC } from "react";
import "@/scss/index.scss";

import Head from "next/head";
import BriefInfo from "@/components/BriefInfo/BriefInfo";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import Portfolio from "@/components/Portfolio/Portfolio";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <BriefInfo />

      <div className="content">
        <AboutMe />

        <Projects />

        <Portfolio />
      </div>
    </>
  );
};

export default Home;
