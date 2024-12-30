import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { Project } from "~/api/interface";
import { getStarCount } from "~/api/server";
import {
  Accounts,
  Education,
  Internships,
  PersonalProjects,
  Profile,
} from "~/components/pages/home";
import { ACCOUNTS, INTERNSHIPS, PROJECTS_PARTIAL, SCHOOLS } from "~/static-data";

export const meta: MetaFunction = () => {
  return [
    { title: "Ryota Sasaki's Portfolio" },
    { name: "description", content: "This is a portfolio site of Ryota Sasaki." },
  ];
};

export const loader = async () => {
  const projects: Project[] = await Promise.all(
    PROJECTS_PARTIAL.map(async (project) => {
      const githubLink = project.links?.find((link) =>
        link.href.startsWith("https://github.com/philip82148/")
      )?.href;
      const repoName = githubLink?.match(/https:\/\/github.com\/philip82148\/(?<repo>.*)/)?.groups
        ?.repo;
      if (!repoName) return project;

      const starCount = await getStarCount(repoName);
      return { ...project, starCount };
    })
  );
  return { projects };
};

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <Profile />
      <Accounts accounts={ACCOUNTS} />
      <Education schools={SCHOOLS} />
      <Internships internships={INTERNSHIPS} />
      <PersonalProjects projects={projects} />
    </div>
  );
}
