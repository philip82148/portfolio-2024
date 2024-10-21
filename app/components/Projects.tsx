import { useState } from "react";

export const Projects: React.FC = () => {
  const [groupName, setGroupName] = useState<"year" | "field">("year");

  const projectsByGroup = { year: projectIdsByYear, field: projectIdsByField }[groupName];

  return (
    <div className="flex flex-col items-center">
      <div className="container py-20">
        <h2 className="font-bold text-4xl mt-3 mb-2">Projects</h2>
        <button onClick={() => setGroupName("year")}>Group by Year</button>
        <button onClick={() => setGroupName("field")}>Group by Field</button>
        <div className="flex flex-col gap-3">
          {projectsByGroup.map(({ groupName, projectIds }) => (
            <div key={groupName}>
              <h3 className="font-bold text-3xl mt-3 mb-2">{groupName}</h3>
              <div className="flex gap-3 overflow-x-auto">
                {projectIds.map((projectId) => (
                  <ProjectCard key={projectId} {...projects[projectId]} />
                ))}
                <div className="gradient-blur -ml-20 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type ProjectCardProps = { title: string; src: string; description: string };

const ProjectCard: React.FC<ProjectCardProps> = ({ title, src, description }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl shrink-0">
      <figure>
        <img src={src} alt={title} className="size-60" />
      </figure>
      <div className="card-body w-96">
        <h4 className="card-title">{title}</h4>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

type ProjectIds =
  | "portfolio"
  | "cpp-dump"
  | "env-setup"
  | "simplerich"
  | "portfolio-2023"
  | "meibo"
  | "line-bot";

type ProjectIdsByGroup = { groupName: string; projectIds: ProjectIds[] }[];

const projectIdsByField: ProjectIdsByGroup = [
  { groupName: "Frontend", projectIds: ["portfolio"] },
  { groupName: "Backend", projectIds: ["line-bot"] },
  { groupName: "Other", projectIds: ["cpp-dump"] },
];

const projectIdsByYear: ProjectIdsByGroup = [
  { groupName: "2024", projectIds: ["portfolio"] },
  {
    groupName: "2023",
    projectIds: ["env-setup", "cpp-dump", "simplerich", "portfolio-2023", "meibo", "line-bot"],
  },
];

const projects: Record<ProjectIds, ProjectCardProps> = {
  portfolio: {
    title: "Portfolio",
    src: "/portfolio/me.jpg",
    description: "Created this portfolio.",
  },
  "env-setup": {
    title: "Manual for Environment Setup",
    src: "/portfolio/me.jpg",
    description:
      "Created a manual for setting up the environment and development procedures for people in my lab who have never done any programming before.",
  },
  "cpp-dump": {
    title: 'Debugging Tool for Competitive Programming: "cpp-dump"',
    src: "/portfolio/me.jpg",
    description:
      "Created a library for competitive programming that can print variables of any type in C++.",
  },
  meibo: {
    title: "Automated Roster Generation App",
    src: "/portfolio/me.jpg",
    description:
      "At the Hiyoshi Dormitory, we had to create a roster for the residents, and the task of formatting phone numbers and addresses was a tedious job every year. So, I created a program to automate the process.",
  },
  simplerich: {
    title: 'Oh My Zsh Theme "simplerich-zsh-theme"',
    src: "/portfolio/me.jpg",
    description:
      "Created a theme for Oh My Zsh that allows you to see at a glance how many files are staged, changed, untracked, and how many commits you are ahead or behind the remote repository.",
  },
  "portfolio-2023": {
    title: "Portfolio (2023 Version)",
    src: "/portfolio/me.jpg",
    description: "A portfolio I created in 2023.",
  },
  "line-bot": {
    title: 'LINE BOT "Dormitory Submission Support"',
    src: "/portfolio/me.jpg",
    description:
      "Developed a LINE BOT to make various submissions at the Hiyoshi Dormitory more convenient for both those submitting and those reviewing the forms.",
  },
};
