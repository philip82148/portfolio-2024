export type Account = {
  siteName: string;
  id: string;
  href: string;
  iconSrc: string;
  colorAdjust?: string;
  iconSizeAdjust?: string;
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
  descriptions: string[];
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
