import type { GitHubRepository } from "./cache";
import { GitHubRepositoryCache } from "./cache";
import type { Account, Internship, Project, School } from "./interface";

import { ACCOUNTS, INTERNSHIPS, PROJECTS_PARTIAL, SCHOOLS } from "~/api-static-data";

export class BackendlessClient {
  private githubRepositoryCache: GitHubRepositoryCache;
  private githubRepositoryCacheReady: Promise<void>;

  constructor(env: Env) {
    const cache = new GitHubRepositoryCache(env);
    this.githubRepositoryCache = cache;
    this.githubRepositoryCacheReady = (async () => {
      const updatedAt = await cache.getUpdatedAt();
      const now = new Date();
      if (updatedAt && now.getTime() - updatedAt.getTime() < 24 * 60 * 60 * 1000) return;

      const res = await fetch("https://api.github.com/users/philip82148/repos", {
        headers: { "User-Agent": "Portfolio-2024" },
      });
      if (!res.ok) return;

      const repos: ({ name: string } & GitHubRepository)[] = await res.json();
      await cache.updateMany(repos.map(({ name, ...data }) => ({ name, data })));
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
        return { ...project, starCount: repo?.stargazers_count, folkCount: repo?.forks_count };
      })
    );
    return projects;
  }
}
