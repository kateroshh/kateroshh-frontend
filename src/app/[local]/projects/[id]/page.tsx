"use client";
import { FC } from "react";
import "@/scss/index.scss";
import { TProjectCard } from "@/types/types";

import { usePathname, redirect } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

import Head from "next/head";
import ProjectsPageHeader from "@/components/ProjectsPageHeader/ProjectsPageHeader";
import ProjectDetails from "@/app/components/ProjectDetails/ProjectDetails";

const Project: FC = () => {
  const url = usePathname();
  const projectId = url.substring(url.lastIndexOf("/") + 1);

  const t = useTranslations();
  const localActive = useLocale();

  const project = t
    .raw("Projects")
    .find((item: TProjectCard) => item.id === projectId);

  return (
    <>
      {project ? (
        <>
          <Head>
            <title>{t.raw("ProjectsPage").projectTitle}</title>
          </Head>
          <ProjectsPageHeader title={project.title} />
          <ProjectDetails project={project} />
        </>
      ) : (
        redirect(`/${localActive}/not-found`)
      )}
    </>
  );
};

export default Project;
