"use client";
import { FC, useState } from "react";
import "@/scss/index.scss";
import "./page.scss";

import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TableProjects from "@/components/TableProjects/TableProjects";
import CardsProjects from "@/components/CardProjects/CardProjects";
import ProjectsPageHeader from "@/components/ProjectsPageHeader/ProjectsPageHeader";

import { useTranslations } from "next-intl";

const ProjectsPage: FC = () => {
  const [typeDisplays, setTypeDisplays] = useState("cards");
  const isTable = typeDisplays === "table" ? true : false;

  const t = useTranslations();

  return (
    <div className="page">
      <Head>
        <title>{t.raw("ProjectsPage").title}</title>
      </Head>
      <Header />

      <main className="main">
        <div className="container">
          <ProjectsPageHeader
            typeDisplays={typeDisplays}
            setTypeDisplays={setTypeDisplays}
          />

          {isTable ? (
            <TableProjects
              projects={t.raw("Projects")}
              tableTitle={t.raw("TableProjects")}
            />
          ) : (
            <CardsProjects projects={t.raw("Projects")} />
          )}

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
