import type { Project } from "../../interface";

import type { GitHubRepo } from "./GitHubRepoCache";
import { GitHubRepoCache } from "./GitHubRepoCache";

import type { Language } from "~/multilingual";
import { monolingual } from "~/multilingual";
import { PROJECTS } from "~/static-data";

export class ProjectService {
  private lang: Language;
  private githubRepoCache: GitHubRepoCache;
  private githubRepoCacheReady: Promise<void>;

  constructor(env: Env, lang: Language) {
    this.lang = lang;
    this.githubRepoCache = new GitHubRepoCache(env);
    const githubCache = this.githubRepoCache;
    this.githubRepoCacheReady = (async () => {
      const updatedAt = await githubCache.getUpdatedAt();
      const now = new Date();
      if (updatedAt && now.getTime() - updatedAt.getTime() < 24 * 60 * 60 * 1000) {
        return;
      }

      const res = await fetch("https://api.github.com/users/sassan-dev/repos", {
        headers: { "User-Agent": "Portfolio-2024" },
      });
      if (!res.ok) {
        return;
      }

      const repos: ({ name: string } & GitHubRepo)[] = await res.json();
      await githubCache.updateMany(repos.map(({ name, ...data }) => ({ name, data })));
      console.log("Updated GitHub Repository cache");
    })();
  }

  async getProjects(): Promise<Project[]> {
    await this.githubRepoCacheReady;
    return await Promise.all(
      PROJECTS.map(async (projectMultilingual, i) => {
        const project = monolingual<Project>({ ...projectMultilingual, id: i }, this.lang);
        const githubLink = project.links?.find((link) =>
          link.href.startsWith("https://github.com/sassan-dev/")
        )?.href;
        const repoName = githubLink?.match(/^https:\/\/github.com\/sassan-dev\/(?<repo>[^/]*)/)
          ?.groups?.repo;
        if (!repoName) {
          return project;
        }

        const repo = await this.githubRepoCache.get(repoName);
        return {
          ...project,
          starCount: repo?.stargazers_count,
          forkCount: repo?.forks_count,
        };
      })
    );
  }
}
