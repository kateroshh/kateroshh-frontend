"use client";
import { FC, useState } from "react";
import "@/scss/index.scss";

import Head from "next/head";
import TableProjects from "@/components/TableProjects/TableProjects";
import CardsProjects from "@/components/CardProjects/CardProjects";
import ProjectsPageHeader from "@/components/ProjectsPageHeader/ProjectsPageHeader";

import { useTranslations } from "next-intl";

const ProjectsPage: FC = () => {
  const [typeDisplays, setTypeDisplays] = useState("cards");
  const isTable = typeDisplays === "table" ? true : false;

  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t.raw("ProjectsPage").title}</title>
      </Head>

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
    </>
  );
};

export default ProjectsPage;
