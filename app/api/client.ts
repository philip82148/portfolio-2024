import { StatController, ProjectController } from "./controllers";
import type { Account, Internship, Project, School, Skill, Stat } from "./interface";

import { ACCOUNTS, INTERNSHIPS, SCHOOLS, SKILLS } from "~/api-static-data";

export class BackendlessClient {
  private statController: StatController;
  private projectController: ProjectController;

  constructor(env: Env) {
    this.statController = new StatController(env);
    this.projectController = new ProjectController(env);
  }

  async getAccounts(): Promise<Account[]> {
    return ACCOUNTS;
  }

  async getSchools(): Promise<School[]> {
    return SCHOOLS;
  }

  async getInternships(): Promise<Internship[]> {
    return INTERNSHIPS;
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
