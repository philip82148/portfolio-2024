import type { MetaFunction } from "@remix-run/node";

import { Header } from "~/components/Header";
import { Profile } from "~/components/Profile";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col gap-10">
        <Profile />
        {/* <Accounts />
        <Education />
        <Internships />
        <Projects /> */}
      </div>
    </>
  );
}
