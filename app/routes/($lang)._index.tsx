import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json, useLoaderData } from "@remix-run/react";

import { BackendlessClient } from "~/api/BackendlessClient";
import {
  Accounts,
  Education,
  Internships,
  PersonalProjects,
  Profile,
  Skills,
} from "~/components/pages/home";
import { isLanguage } from "~/multilingual";

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  const paramLang = params.lang;
  if (paramLang !== undefined && !isLanguage(paramLang)) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
  const lang = paramLang || "ja";

  const client = new BackendlessClient(context.cloudflare.env, lang);
  const [profile, accounts, schools, internships, stats, skills, projects] = await Promise.all([
    client.getProfile(),
    client.getAccounts(),
    client.getSchools(),
    client.getInternships(),
    client.getStats(),
    client.getSkills(),
    client.getProjects(),
  ]);

  return json({ profile, accounts, schools, internships, stats, skills, projects });
};

export default function Index() {
  const { profile, accounts, schools, internships, stats, skills, projects } =
    useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-6 max-sm:px-5 flex flex-col gap-10">
      <Profile profile={profile} />
      <Accounts accounts={accounts} />
      <Education schools={schools} />
      <Internships internships={internships} />
      <Skills stats={stats} skills={skills} />
      <PersonalProjects projects={projects} />
    </div>
  );
}
