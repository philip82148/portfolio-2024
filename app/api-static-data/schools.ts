import type { School } from "~/api/interface";
import type { Multilingual } from "~/multilingual";

export const SCHOOLS = [
  {
    name: { ja: "東京大学大学院", en: "Graduate School of Engineering, The University of Tokyo" },
    end: { ja: "2026/03", en: "03/2026" },
    start: { ja: "2024/04", en: "04/2024" },
    major: {
      ja: "工学系研究科 電気系工学専攻",
      en: "Department of Electrical Engineering and Information Systems",
    },
  },
  {
    name: { ja: "慶應義塾大学", en: "Keio University" },
    end: { ja: "2024/03", en: "03/2024" },
    start: { ja: "2020/04", en: "04/2020" },
    major: {
      ja: "理工学部 電気情報工学科",
      en: "Department of Electronics and Electrical Engineering, Faculty of Science and Technology",
    },
  },
  {
    name: { ja: "福岡県立修猷館高等学校", en: "Fukuoka Prefectural Shuyukan High School" },
    end: { ja: "2020/04", en: "04/2020" },
    start: { ja: "2017/03", en: "03/2017" },
    major: { ja: "普通科", en: "" },
  },
] as const satisfies Multilingual<Omit<School, "id">>[];
