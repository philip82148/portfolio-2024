import type { EventContext } from "@cloudflare/workers-types";

export const onRequestGet = async ({ params: { repo }, env }: EventContext<Env, "repo", null>) => {
  const updatedAt = Number(await env.STAR_COUNT.get("__updated_at__"));
  if (!updatedAt || Date.now() > 24 * 60 * 60 * 1000 + updatedAt) {
    const res = await fetch("https://api.github.com/users/philip82148/repos", {
      headers: { "User-Agent": "Portfolio-2024" },
    });
    if (res.ok) {
      const repos: { name: string; stargazers_count: number }[] = await res.json();
      await Promise.all(
        repos.map(async ({ name, stargazers_count }) => {
          await env.STAR_COUNT.put(name, String(stargazers_count));
        })
      );
      await env.STAR_COUNT.put("__updated_at__", String(Date.now()));
      console.log("Updated star count cache");
    }
  }

  const starCount = await env.STAR_COUNT.get(repo as string);
  return new Response(starCount);
};
