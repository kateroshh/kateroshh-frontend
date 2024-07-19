"use client";
import { FC } from "react";
import "../scss/index.scss";

import Header from "./components/Header/Header";
import BriefInfo from "./components/BriefInfo/BriefInfo";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

const Home: FC = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="container">
          <BriefInfo />

          <div className="content">
            <AboutMe />

            <Projects />

            <Portfolio />
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
