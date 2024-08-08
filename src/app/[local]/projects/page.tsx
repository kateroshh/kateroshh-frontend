"use client";
import { FC } from "react";
import "@/scss/index.scss";

import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const ProjectsPage: FC = () => {
  return (
    <div className="page">
      <Head>
        <title>Проекты</title>
      </Head>
      <Header />
      <main className="main">
        <div className="container">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
