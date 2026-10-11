import type { Account, Internship, Profile, Project, School, Skill, Stat } from "./interface";
import { ProjectService, StatService } from "./services";

import type { Language } from "~/multilingual";
import { monolingual } from "~/multilingual";
import { ACCOUNTS, INTERNSHIPS, PROFILE, SCHOOLS, SKILLS } from "~/static-data";

export class ContentLoader {
  private lang: Language;
  private statService: StatService;
  private projectService: ProjectService;

  constructor(env: Env, lang: Language) {
    this.lang = lang;
    this.statService = new StatService(env);
    this.projectService = new ProjectService(env, lang);
  }

  getProfile(): Profile {
    return monolingual<Profile>(PROFILE, this.lang);
  }

  getAccounts(): Account[] {
    return ACCOUNTS.map((account, i) => ({ ...account, id: i }));
  }

  getSchools(): School[] {
    return SCHOOLS.map((school, i) => monolingual<School>({ ...school, id: i }, this.lang));
  }

  getInternships(): Internship[] {
    return INTERNSHIPS.map((internship, i) =>
      monolingual<Internship>({ ...internship, id: i }, this.lang)
    );
  }

  async getStats(): Promise<Stat[]> {
    return await this.statService.getStats();
  }

  getSkills(): Skill[] {
    return SKILLS.map((skill, i) => ({ ...skill, id: i }));
  }

  async getProjects(): Promise<Project[]> {
    return await this.projectService.getProjects();
  }
}
