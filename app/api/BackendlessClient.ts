import type { Account, Internship, Profile, Project, School, Skill, Stat } from "./interface";
import { StatService, ProjectService } from "./services";

import { ACCOUNTS, INTERNSHIPS, PROFILE, SCHOOLS, SKILLS } from "~/api-static-data";
import { monolingual } from "~/multilingual";
import type { Language } from "~/multilingual";

export class BackendlessClient {
  private lang: Language;
  private statService: StatService;
  private projectService: ProjectService;

  constructor(env: Env, lang: Language) {
    this.lang = lang;
    this.statService = new StatService(env);
    this.projectService = new ProjectService(env, lang);
  }

  async getProfile(): Promise<Profile> {
    return monolingual<Profile>(PROFILE, this.lang);
  }

  async getAccounts(): Promise<Account[]> {
    return ACCOUNTS.map((account, i) => ({ ...account, id: i }));
  }

  async getSchools(): Promise<School[]> {
    return SCHOOLS.map((school, i) => monolingual<School>({ ...school, id: i }, this.lang));
  }

  async getInternships(): Promise<Internship[]> {
    return INTERNSHIPS.map((internship, i) =>
      monolingual<Internship>({ ...internship, id: i }, this.lang)
    );
  }

  async getStats(): Promise<Stat[]> {
    return await this.statService.getStats();
  }

  async getSkills(): Promise<Skill[]> {
    return SKILLS.map((skill, i) => ({ ...skill, id: i }));
  }

  async getProjects(): Promise<Project[]> {
    return await this.projectService.getProjects();
  }
}
