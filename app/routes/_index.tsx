import type { MetaFunction } from "@remix-run/node";

import { Accounts } from "~/components/Accounts";
import { Header } from "~/components/Header";
import { Profile } from "~/components/Profile";

export const meta: MetaFunction = () => {
  return [
    { title: "Ryota Sasaki's Portfolio" },
    { name: "description", content: "This is a portfolio site of Ryota Sasaki." },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col gap-10">
        <Profile />
        <Accounts />
        {/*<Education />
        <Internships />
        <Projects /> */}
      </div>
    </>
  );
}
