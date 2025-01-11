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
import { getLangOrThrow404Response } from "~/multilingual";

export const meta: MetaFunction = () => {
  return [
    { title: "Ryota Sasaki's Portfolio" },
    { name: "description", content: "This is a portfolio site of Ryota Sasaki." },
  ];
};

export const loader = async ({ params, request, context }: LoaderFunctionArgs) => {
  const lang = getLangOrThrow404Response(params, request);
  const client = new BackendlessClient(context.cloudflare.env, lang);
  const [accounts, schools, internships, stats, skills, projects] = await Promise.all([
    client.getAccounts(),
    client.getSchools(),
    client.getInternships(),
    client.getStats(),
    client.getSkills(),
    client.getProjects(),
  ]);
  return json({ accounts, schools, internships, stats, skills, projects });
};

export default function Index() {
  const { accounts, schools, internships, stats, skills, projects } =
    useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-6 max-sm:px-5 flex flex-col gap-10">
      <Profile />
      <Accounts accounts={accounts} />
      <Education schools={schools} />
      <Internships internships={internships} />
      <Skills stats={stats} skills={skills} />
      <PersonalProjects projects={projects} />
    </div>
  );
}
