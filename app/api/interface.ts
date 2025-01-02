import type { SITE_ICONS, SKILL_ICONS } from "~/frontend-static-data";

export type Account = {
  siteName: string;
  siteIconKey: keyof typeof SITE_ICONS;
  id: string;
  href: string;
};

export type School = {
  name: string;
  start: string;
  end: string;
  major: string;
};

export type Internship = {
  name: string;
  occupation: string;
  start: string;
  end: string;
  descriptions?: string[];
};

export type Stat = {
  name: string;
  imgSrc: string;
  providerHref: string;
};

export type Skill = {
  name: string;
  type: "Language" | "Framework" | "Other";
  skillIconKey: keyof typeof SKILL_ICONS;
  personalYear?: number;
  internshipYear?: number;
  tags: string[];
  subsetFrameworkLikeSkills?: string[];
  subsetLanguageLikeSkills?: string[];
};

export type Project = {
  title: string;
  year: number;
  period?: string;
  category: "Web" | "Book" | "Electronics" | "Other";
  summary: string;
  description?: string;
  techStacks?: string[];
  allTechStacks?: string[];
  links?: { label: string; href: string }[];
  imgSrc?: string;
  starCount?: number;
  forkCount?: number;
};
