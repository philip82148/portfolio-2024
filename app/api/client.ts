import type { GitHubRepository } from "./cache";
import { SvgCache, GitHubRepositoryCache } from "./cache";
import type { Account, Internship, Project, School, Skill, Stat } from "./interface";

import { ACCOUNTS, INTERNSHIPS, PROJECTS_PARTIAL, SCHOOLS, SKILLS, STATS } from "~/api-static-data";

export class BackendlessClient {
  private SvgCache: SvgCache;
  private githubRepositoryCache: GitHubRepositoryCache;
  private githubRepositoryCacheReady: Promise<void>;

  constructor(env: Env) {
    this.SvgCache = new SvgCache(env);

    const githubCache = new GitHubRepositoryCache(env);
    this.githubRepositoryCache = githubCache;
    this.githubRepositoryCacheReady = (async () => {
      const updatedAt = await githubCache.getUpdatedAt();
      const now = new Date();
      if (updatedAt && now.getTime() - updatedAt.getTime() < 24 * 60 * 60 * 1000) return;

      const res = await fetch("https://api.github.com/users/philip82148/repos", {
        headers: { "User-Agent": "Portfolio-2024" },
      });
      if (!res.ok) return;

      const repos: ({ name: string } & GitHubRepository)[] = await res.json();
      await githubCache.updateMany(repos.map(({ name, ...data }) => ({ name, data })));
      console.log("Updated GitHub Repository cache");
    })();
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
    if (process.env.NODE_ENV === "development") return STATS;
    return await Promise.all(
      STATS.map(async ({ name, imgSrc }) => {
        const updatedAt = await this.SvgCache.getUpdatedAt(name);
        const now = new Date();
        if (!(updatedAt && now.getTime() - updatedAt.getTime() < 24 * 60 * 60 * 1000)) {
          const res = await fetch(imgSrc);
          if (res.ok) {
            const content = await res.text();
            await this.SvgCache.update(name, content);
          }
        }
        return { name, imgSrc: `/svg/${name}` };
      })
    );
  }

  async getSkills(): Promise<Skill[]> {
    return SKILLS;
  }

  async getProjects(): Promise<Project[]> {
    await this.githubRepositoryCacheReady;
    const projects: Project[] = await Promise.all(
      PROJECTS_PARTIAL.map(async (project) => {
        const githubLink = project.links?.find((link) =>
          link.href.startsWith("https://github.com/philip82148/")
        )?.href;
        const repoName = githubLink?.match(/^https:\/\/github.com\/philip82148\/(?<repo>[^/]*)/)
          ?.groups?.repo;
        if (!repoName) return project;

        const repo = await this.githubRepositoryCache.get(repoName);
        return { ...project, starCount: repo?.stargazers_count, forkCount: repo?.forks_count };
      })
    );
    return projects;
  }
}
