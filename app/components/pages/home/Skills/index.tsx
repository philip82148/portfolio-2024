import { LanguagesAndFrameworks } from "./LanguagesAndFrameworks";
import { Stats } from "./Stats";

import type { Skill, Stat } from "~/api/interface";

export const Skills: React.FC<{ stats: Stat[]; skills: Skill[] }> = ({ stats, skills }) => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Skills</h2>
      <Stats stats={stats} />
      <LanguagesAndFrameworks skills={skills} />
    </div>
  );
};
