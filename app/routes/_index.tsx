import type { MetaFunction } from "@remix-run/node";

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

// export const loader = async () => {
//   const projects: Project[] = await Promise.all(
//     PROJECTS_PARTIAL.map(async (project) => {
//       const githubLink = project.links?.find((link) =>
//         link.href.startsWith("https://github.com/")
//       )?.href;
//       if (!githubLink) return project;

//       const { owner, repo } =
//         githubLink.match(/https:\/\/github.com\/(?<owner>)\/(?<repo>)/)?.groups ?? {};
//       const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
//       if (!res.ok) return project;

//       return { ...project, starCount: await res.json() };
//     })
//   );
//   return { projects };
// };

export default function Index() {
  // const { projects } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <Profile />
      <Accounts accounts={ACCOUNTS} />
      <Education schools={SCHOOLS} />
      <Internships internships={INTERNSHIPS} />
      <PersonalProjects projects={PROJECTS_PARTIAL} />
    </div>
  );
}
