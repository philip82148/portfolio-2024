import type { Project } from "./interface";

import { ACCOUNTS, INTERNSHIPS, PROJECTS_PARTIAL, SCHOOLS } from "~/api-static-data";

export class BackendlessClient {
  starCountCacheReady: Promise<void>;

  constructor(private env: Env) {
    this.starCountCacheReady = (async () => {
      const updatedAtStr = await this.env.STAR_COUNT.get("__updated_at__");
      const updatedAt = updatedAtStr ? new Date(updatedAtStr) : null;
      const now = new Date();
      if (!updatedAt || now.getTime() - updatedAt.getTime() >= 24 * 60 * 60 * 1000) {
        const res = await fetch("https://api.github.com/users/philip82148/repos", {
          headers: { "User-Agent": "Portfolio-2024" },
        });
        if (res.ok) {
          const repos: { name: string; stargazers_count: number }[] = await res.json();
          await Promise.all(
            repos.map(async ({ name, stargazers_count }) => {
              await this.env.STAR_COUNT.put(name, String(stargazers_count));
            })
          );
          await this.env.STAR_COUNT.put("__updated_at__", now.toISOString());
          console.log("Updated star count cache");
        }
      }
    })();
  }

  async getAccounts() {
    return ACCOUNTS;
  }

  async getSchools() {
    return SCHOOLS;
  }

  async getInternships() {
    return INTERNSHIPS;
  }

  async getProjects() {
    await this.starCountCacheReady;
    const projects: Project[] = await Promise.all(
      PROJECTS_PARTIAL.map(async (project) => {
        const githubLink = project.links?.find((link) =>
          link.href.startsWith("https://github.com/philip82148/")
        )?.href;
        const repo = githubLink?.match(/^https:\/\/github.com\/philip82148\/(?<repo>[^/]*)/)?.groups
          ?.repo;
        if (!repo) return project;

        const starCount = Number(await this.env.STAR_COUNT.get(repo));
        return { ...project, starCount };
      })
    );
    return projects;
  }
}
