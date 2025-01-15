import type { School } from "~/api/interface";
import type { Multilingual } from "~/multilingual";

export const SCHOOLS = [
  {
    name: { ja: "東京大学大学院", en: "The University of Tokyo" },
    start: { ja: "2024/04", en: "04/2024" },
    end: { ja: "2026/03", en: "03/2026" },
    major: {
      ja: "工学系研究科 電気系工学専攻",
      en: "Graduate School of Engineering Electrical and Electronic Engineering",
    },
  },
  {
    name: { ja: "慶應義塾大学", en: "Keio University" },
    start: { ja: "2024/03", en: "03/2024" },
    end: { ja: "2020/04", en: "04/2020" },
    major: {
      ja: "理工学部 電気情報工学科",
      en: "Faculty of Science and Technology Department of Electrical and Electronic Engineering",
    },
  },
  {
    name: { ja: "福岡県立修猷館高等学校", en: "Fukuoka Prefectural Shuyukan High School" },
    start: { ja: "2017/03", en: "03/2017" },
    end: { ja: "2020/04", en: "04/2020" },
    major: { ja: "普通科", en: "General Education" },
  },
] as const satisfies Multilingual<Omit<School, "id">>[];
