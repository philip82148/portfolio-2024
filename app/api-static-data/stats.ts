import type { Stat } from "~/api/interface";

export const STATS: Omit<Stat, "id">[] = [
  {
    name: "GitHub",
    imgSrc:
      "https://github-readme-stats-sooty-nine-75.vercel.app/api?username=philip82148&show_icons=true&exclude_repo=github-readme-stats,qutip-tutorials-ipynb,selva,kishukusha-hp-theme,testrepo",
    providerHref: "https://github.com/anuraghazra/github-readme-stats",
  },
  {
    name: "AtCoder",
    imgSrc: "https://atcoder-readme-stats.vercel.app/stats/philip82148",
    providerHref: "https://github.com/iwbc-mzk/atcoder-readme-stats",
  },
];
