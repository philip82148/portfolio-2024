import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json, useLoaderData } from "@remix-run/react";

import { BackendlessClient } from "~/api/client";
import {
  Accounts,
  Education,
  Internships,
  PersonalProjects,
  Profile,
  Skills,
} from "~/components/pages/home";

export const meta: MetaFunction = () => {
  return [
    { title: "Ryota Sasaki's Portfolio" },
    { name: "description", content: "This is a portfolio site of Ryota Sasaki." },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const client = new BackendlessClient(context.cloudflare.env);
  const [accounts, schools, internships, skills, projects] = await Promise.all([
    client.getAccounts(),
    client.getSchools(),
    client.getInternships(),
    client.getSkills(),
    client.getProjects(),
  ]);
  return json({ accounts, schools, internships, skills, projects });
};

export default function Index() {
  const { accounts, schools, internships, skills, projects } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <Profile />
      <Accounts accounts={accounts} />
      <Education schools={schools} />
      <Internships internships={internships} />
      <Skills skills={skills} />
      <PersonalProjects projects={projects} />
    </div>
  );
}
