import type { SITE_ICONS, SKILL_ICONS } from "~/frontend-static-data";

export type Profile = {
  aBitAboutMe: string;
};

export type Account = {
  id: number;
  siteName: string;
  siteIconKey: keyof typeof SITE_ICONS;
  accountId: string;
  href: string;
};

export type School = {
  id: number;
  name: string;
  start: string;
  end: string;
  major: string;
};

export type Internship = {
  id: number;
  name: string;
  occupation: string;
  start: string;
  end: string;
  descriptions?: string[];
};

export type Stat = {
  id: number;
  name: string;
  imgSrc: string;
  providerHref: string;
};

export type Skill = {
  id: number;
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
  id: number;
  title: string;
  period: string;
  category: "Web" | "Book" | "Electronics" | "Other";
  summary: string;
  descriptions?: string[];
  mainTechStacks?: string[];
  allTechStacks?: string[];
  links?: { label: string; href: string }[];
  thumbnailImgSrc?: string;
  imgSrc?: string;
  starCount?: number;
  forkCount?: number;
};
