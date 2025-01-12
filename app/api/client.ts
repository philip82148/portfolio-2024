import { StatController, ProjectController } from "./controllers";
import type { Account, Internship, Profile, Project, School, Skill, Stat } from "./interface";

import { ACCOUNTS, INTERNSHIPS, PROFILE, SCHOOLS, SKILLS } from "~/api-static-data";
import { monolingual } from "~/multilingual";
import type { Language } from "~/multilingual";

export class BackendlessClient {
  private lang: Language;
  private statController: StatController;
  private projectController: ProjectController;

  constructor(env: Env, lang: Language) {
    this.lang = lang;
    this.statController = new StatController(env);
    this.projectController = new ProjectController(env, lang);
  }

  async getProfile(): Promise<Profile> {
    return monolingual<Profile>(PROFILE, this.lang);
  }

  async getAccounts(): Promise<Account[]> {
    return ACCOUNTS;
  }

  async getSchools(): Promise<School[]> {
    return monolingual<School[]>(SCHOOLS, this.lang);
  }

  async getInternships(): Promise<Internship[]> {
    return monolingual<Internship[]>(INTERNSHIPS, this.lang);
  }

  async getStats(): Promise<Stat[]> {
    return await this.statController.getStats();
  }

  async getSkills(): Promise<Skill[]> {
    return SKILLS;
  }

  async getProjects(): Promise<Project[]> {
    return await this.projectController.getProjects();
  }
}
