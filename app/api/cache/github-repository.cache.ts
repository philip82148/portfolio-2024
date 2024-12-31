export type GitHubRepository = {
  stargazers_count: number;
  forks_count: number;
};

export class GitHubRepositoryCache {
  private static UPDATED_AT_KEY = "__updated_at__";

  constructor(private env: Env) {}

  async getUpdatedAt(): Promise<Date | null> {
    const updatedAtStr = await this.env.GITHUB_REPOSITORIES.get(
      GitHubRepositoryCache.UPDATED_AT_KEY
    );
    return updatedAtStr ? new Date(updatedAtStr) : null;
  }

  async get(name: string): Promise<GitHubRepository | null> {
    const data = await this.env.GITHUB_REPOSITORIES.get(name);
    return data ? JSON.parse(data) : null;
  }

  async updateMany(arg: { name: string; data: GitHubRepository }[]): Promise<void> {
    await Promise.all(
      arg.map(async ({ name, data: { stargazers_count, forks_count } }) => {
        await this.env.GITHUB_REPOSITORIES.put(
          name,
          JSON.stringify({ stargazers_count, forks_count })
        );
      })
    );
    await this.env.GITHUB_REPOSITORIES.put(
      GitHubRepositoryCache.UPDATED_AT_KEY,
      new Date().toISOString()
    );
  }
}
