import type { Internship } from "~/api/interface";

export const INTERNSHIPS: Internship[] = [
  {
    name: "Sky株式会社",
    occupation: "フロントエンド兼バックエンドエンジニア",
    start: "2024/06",
    end: "Present",
    descriptions: ["詳細は守秘義務により割愛。"],
  },
  {
    name: "アイザック株式会社",
    occupation: "フロントエンド兼バックエンドエンジニア",
    start: "2023/02",
    end: "2023/04",
    descriptions: [
      "あるウェブサービスを作る部署にてフロントエンド兼バックエンドエンジニアとして従事。",
      "技術スタックはフロントNext.js、バックNestJS、Hasura、Prismaで、TypeScriptのモノレポ構成。設計手法はDDD。",
    ],
  },
  {
    name: "株式会社飛竜企画",
    occupation: "ソフトウェアエンジニア",
    start: "2022/02",
    end: "2023/02",
    descriptions: [
      "上司から依頼を受け、いくつかの自動化プログラムを作った。",
      "上司とコミュニケーションを取り、要件やソリューションを決定した。",
      "設計から開発まで一人で行った。",
    ],
  },
];
