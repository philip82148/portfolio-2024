import type { Internship } from "~/api/interface";
import type { Multilingual } from "~/multilingual";

export const INTERNSHIPS = [
  {
    name: { ja: "Sky株式会社", en: "Sky Co., LTD." },
    occupation: {
      ja: "フロントエンド兼バックエンドエンジニア",
      en: "Frontend and Backend Engineer",
    },
    end: "Present",
    start: { ja: "2024/06", en: "06/2024" },
  },
  {
    name: { ja: "アイザック株式会社", en: "aisaac inc." },
    occupation: {
      ja: "フロントエンド兼バックエンドエンジニア",
      en: "Frontend and Backend Engineer",
    },
    end: { ja: "2023/04", en: "04/2023" },
    start: { ja: "2023/02", en: "02/2023" },
  },
  {
    name: { ja: "株式会社飛竜企画", en: "HIRYU KIKAKU co., Ltd. " },
    occupation: { ja: "ソフトウェアエンジニア", en: "Software Engineer" },
    end: { ja: "2023/02", en: "02/2023" },
    start: { ja: "2022/02", en: "02/2022" },
  },
] as const satisfies Multilingual<Omit<Internship, "id">>[];
