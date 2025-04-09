import type { Stat } from "../../interface";

import { SvgCache } from "./SvgCache";

import { STATS } from "~/api-static-data";

export class StatService {
  private svgCache: SvgCache;

  constructor(env: Env) {
    this.svgCache = new SvgCache(env);
  }

  async getStats(): Promise<Stat[]> {
    if (process.env.NODE_ENV === "development") {
      return STATS.map((stat, i) => ({ ...stat, id: i }));
    }
    return await Promise.all(
      STATS.map(async ({ name, imgSrc, ...rest }, i) => {
        const key = `${name.toLowerCase()}-stats`;
        const updatedAt = await this.svgCache.getUpdatedAt(key);
        const now = new Date();
        if (!(updatedAt && now.getTime() - updatedAt.getTime() < 24 * 60 * 60 * 1000)) {
          const res = await fetch(imgSrc);
          if (res.ok) {
            const content = await res.text();
            await this.svgCache.update(key, content);
          }
        }
        return { name, imgSrc: `/svg/${key}`, ...rest, id: i };
      })
    );
  }
}
