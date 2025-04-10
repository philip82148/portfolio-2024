import type { OmitId } from "./OmitId";

import type { Skill } from "~/api/interface";

export const SKILLS = [
  {
    name: "C",
    type: "Language",
    skillIconKey: "c",
    personalYear: 11,
    tags: ["Electronics"],
  },
  {
    name: "C++",
    type: "Language",
    skillIconKey: "cpp",
    personalYear: 1,
    tags: ["Other"],
    subsetLanguageLikeSkills: ["C"],
  },
  {
    name: "TypeScript",
    type: "Language",
    skillIconKey: "typescript",
    personalYear: 2,
    internshipYear: 1,
    tags: ["Web", "Frontend", "Backend"],
    subsetLanguageLikeSkills: ["JavaScript"],
  },
  {
    name: "JavaScript",
    type: "Language",
    skillIconKey: "javascript",
    personalYear: 4,
    internshipYear: 1,
    tags: ["Web", "Frontend", "Backend"],
  },
  {
    name: "Node.js",
    type: "Other",
    skillIconKey: "nodejs",
    personalYear: 2,
    internshipYear: 1,
    tags: ["Web", "Frontend", "Backend"],
    subsetLanguageLikeSkills: ["JavaScript", "TypeScript"],
  },
  {
    name: "Next.js",
    type: "Framework",
    skillIconKey: "nextjs",
    personalYear: 2,
    internshipYear: 0.5,
    tags: ["Web", "Frontend"],
    subsetFrameworkLikeSkills: ["React"],
    subsetLanguageLikeSkills: ["Node.js", "TypeScript", "JavaScript", "HTML"],
  },
  {
    name: "Remix",
    type: "Framework",
    skillIconKey: "remix",
    personalYear: 0.5,
    internshipYear: 0.5,
    tags: ["Web", "Frontend"],
    subsetFrameworkLikeSkills: ["React"],
    subsetLanguageLikeSkills: ["Node.js", "TypeScript", "JavaScript", "HTML"],
  },
  {
    name: "React",
    type: "Framework",
    skillIconKey: "react",
    personalYear: 2,
    internshipYear: 1,
    tags: ["Web", "Frontend"],
    subsetLanguageLikeSkills: ["Node.js", "TypeScript", "JavaScript", "HTML"],
  },
  {
    name: "Material UI",
    type: "Framework",
    skillIconKey: "materialui",
    personalYear: 2,
    internshipYear: 0.5,
    tags: ["Web", "Frontend"],
    subsetFrameworkLikeSkills: ["React"],
    subsetLanguageLikeSkills: ["Node.js", "TypeScript", "JavaScript", "CSS"],
  },
  {
    name: "Tailwind CSS",
    type: "Framework",
    skillIconKey: "tailwindcss",
    personalYear: 0.5,
    internshipYear: 0.5,
    tags: ["Web", "Frontend"],
    subsetLanguageLikeSkills: ["CSS"],
  },
  {
    name: "Daisy UI",
    type: "Framework",
    skillIconKey: "daisyui",
    personalYear: 0.5,
    internshipYear: 0.5,
    tags: ["Web", "Frontend"],
    subsetFrameworkLikeSkills: ["Tailwind CSS"],
    subsetLanguageLikeSkills: ["CSS"],
  },
  {
    name: "NestJS",
    type: "Framework",
    skillIconKey: "nestjs",
    internshipYear: 0.5,
    tags: ["Web", "Backend"],
    subsetFrameworkLikeSkills: ["GraphQL"],
    subsetLanguageLikeSkills: ["Node.js", "TypeScript", "JavaScript"],
  },
  {
    name: "Hono",
    type: "Framework",
    skillIconKey: "hono",
    personalYear: 0.5,
    internshipYear: 0.5,
    tags: ["Web", "Backend"],
    subsetLanguageLikeSkills: ["Node.js", "TypeScript", "JavaScript"],
  },
  {
    name: "Prisma",
    type: "Other",
    skillIconKey: "prisma",
    personalYear: 2,
    internshipYear: 1,
    tags: ["Web", "Backend"],
    subsetLanguageLikeSkills: ["Node.js", "TypeScript", "JavaScript"],
  },
  {
    name: "GraphQL",
    type: "Other",
    skillIconKey: "graphql",
    internshipYear: 0.5,
    tags: ["Web", "Backend"],
  },
  {
    name: "gRPC",
    type: "Other",
    skillIconKey: "grpc",
    personalYear: 0.5,
    internshipYear: 0.5,
    tags: ["Web", "Backend"],
  },
  {
    name: "Docker",
    type: "Other",
    skillIconKey: "docker",
    personalYear: 1,
    internshipYear: 1,
    tags: ["Web", "Backend"],
  },
  {
    name: "PHP",
    type: "Language",
    skillIconKey: "php",
    personalYear: 4,
    tags: ["Web", "Backend"],
  },
  {
    name: "jQuery",
    type: "Other",
    skillIconKey: "jquery",
    personalYear: 2,
    tags: ["Web", "Frontend"],
    subsetLanguageLikeSkills: ["JavaScript"],
  },
  {
    name: "WordPress",
    type: "Other",
    skillIconKey: "wordpress",
    personalYear: 1,
    tags: ["Web", "Backend"],
    subsetFrameworkLikeSkills: ["jQuery"],
    subsetLanguageLikeSkills: ["PHP", "MySQL", "JavaScript"],
  },
  {
    name: "PostgreSQL",
    type: "Other",
    skillIconKey: "postgresql",
    internshipYear: 1,
    tags: ["Web", "Backend"],
  },
  {
    name: "MySQL",
    type: "Other",
    skillIconKey: "mysql",
    personalYear: 3,
    tags: ["Web", "Backend"],
  },
  {
    name: "Go",
    type: "Language",
    skillIconKey: "go",
    personalYear: 0.5,
    internshipYear: 0.5,
    tags: ["Other"],
  },
  {
    name: "Java",
    type: "Language",
    skillIconKey: "java",
    personalYear: 0.5,
    tags: ["Other"],
  },
  {
    name: "Flutter",
    type: "Language",
    skillIconKey: "flutter",
    personalYear: 0.5,
    tags: ["Mobile"],
  },
  {
    name: "Kotlin",
    type: "Language",
    skillIconKey: "kotlin",
    personalYear: 0.5,
    tags: ["Mobile"],
  },
  {
    name: "Python",
    type: "Language",
    skillIconKey: "python",
    personalYear: 4,
    tags: ["Other"],
  },
  {
    name: "GCP",
    type: "Other",
    skillIconKey: "gcp",
    personalYear: 0.5,
    tags: ["Web"],
  },
  {
    name: "AWS",
    type: "Other",
    skillIconKey: "aws",
    personalYear: 0.5,
    tags: ["Web"],
  },
  {
    name: "Ubuntu",
    type: "Other",
    skillIconKey: "ubuntu",
    personalYear: 3,
    tags: ["Other"],
  },
  {
    name: "Raspberry Pi",
    type: "Other",
    skillIconKey: "raspberrypi",
    personalYear: 2,
    tags: ["Electronics"],
  },
  {
    name: "CSS",
    type: "Language",
    skillIconKey: "css",
    personalYear: 4,
    tags: ["Frontend"],
  },
  {
    name: "HTML",
    type: "Language",
    skillIconKey: "html",
    personalYear: 4,
    tags: ["Frontend"],
  },
  // Self-referencing & enum constraints implemented in code
] as const satisfies (OmitId<Skill> & {
  name: SkillName;
  tags: Tag[];
  subsetFrameworkLikeSkills?: FrameworkLikeSkillName[];
  subsetLanguageLikeSkills?: LanguageLikeSkillName[];
})[];

type SkillName =
  | "C"
  | "C++"
  | "TypeScript"
  | "JavaScript"
  | "Node.js"
  | "Next.js"
  | "Remix"
  | "React"
  | "Material UI"
  | "Tailwind CSS"
  | "Daisy UI"
  | "NestJS"
  | "Hono"
  | "Prisma"
  | "GraphQL"
  | "gRPC"
  | "Docker"
  | "PHP"
  | "jQuery"
  | "WordPress"
  | "PostgreSQL"
  | "MySQL"
  | "Go"
  | "Java"
  | "Flutter"
  | "Kotlin"
  | "Python"
  | "GCP"
  | "AWS"
  | "Ubuntu"
  | "Raspberry Pi"
  | "HTML"
  | "CSS";

type Tag = "Web" | "Frontend" | "Backend" | "Mobile" | "Electronics" | "Other";

type LanguageLikeSkillName =
  | "C"
  | "C++"
  | "TypeScript"
  | "JavaScript"
  | "Node.js"
  | "PHP"
  | "PostgreSQL"
  | "MySQL"
  | "Go"
  | "Java"
  | "Flutter"
  | "Kotlin"
  | "Python"
  | "HTML"
  | "CSS";

type FrameworkLikeSkillName = Exclude<SkillName, LanguageLikeSkillName>;
