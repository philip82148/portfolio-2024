import type { OmitId } from "./OmitId";

import type { Internship } from "~/content-loader/interface";
import type { Multilingual } from "~/multilingual";

export const INTERNSHIPS = [
  {
    name: { ja: "Sky株式会社", en: "Sky Co., LTD." },
    occupation: {
      ja: "フロントエンド兼バックエンドエンジニア",
      en: "Frontend and Backend Engineer",
    },
    end: { ja: "2025/07", en: "07/2025" },
    start: { ja: "2024/06", en: "06/2024" },
  },
  {
    name: { ja: "株式会社メルカリ", en: "Mercari, Inc." },
    occupation: {
      ja: "バックエンドエンジニア",
      en: "Bankend Engineer",
    },
    end: { ja: "2025/03", en: "03/2025" },
    start: { ja: "2025/02", en: "02/2025" },
  },
  {
    name: { ja: "フリー株式会社", en: "freee K.K." },
    occupation: {
      ja: "Web エンジニア",
      en: "Web Engineer",
    },
    end: { ja: "2024/09", en: "09/2024" },
    start: { ja: "2024/09", en: "09/2024" },
  },
  {
    name: { ja: "LINEヤフー株式会社", en: "LY Corporation" },
    occupation: {
      ja: "ソフトウェアエンジニア",
      en: "Software Engineer",
    },
    end: { ja: "2024/08", en: "08/2024" },
    start: { ja: "2024/08", en: "08/2024" },
  },
  {
    name: { ja: "アイザック株式会社", en: "aisaac inc." },
    occupation: {
      ja: "Webエンジニア",
      en: "Web Engineer",
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
] as const satisfies Multilingual<OmitId<Internship>>[];
