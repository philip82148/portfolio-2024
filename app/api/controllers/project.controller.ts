import type { GitHubRepository } from "../cache";
import { GitHubRepositoryCache } from "../cache";
import type { Project } from "../interface";

import { PROJECTS_PARTIAL } from "~/api-static-data";

export class ProjectController {
  private githubRepositoryCache: GitHubRepositoryCache;
  private githubRepositoryCacheReady: Promise<void>;

  constructor(env: Env) {
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

  async getProjects(): Promise<Project[]> {
    await this.githubRepositoryCacheReady;
    return await Promise.all(
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
  }
}
