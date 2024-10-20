import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export const MainVisual: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen min-h-[600px]">
      <div className="container flex justify-around items-center">
        <div className="w-96 flex flex-col">
          <img
            src="https://avatars.githubusercontent.com/u/92205270?v=4"
            alt="Ryota Sasaki"
            className="w-full"
          />
          <h1 className="font-bold text-4xl mt-3 mb-2">Ryota Sasaki</h1>
          <p className="text-xl">
            <span className="whitespace-nowrap">{"Web Developer"}</span>
            {" | "}
            <span className="whitespace-nowrap">{"Low-Level Programming Lover"}</span>
            {" | "}
            <span className="whitespace-nowrap">{"Competitive Programming Enthusiast"}</span>
            {" | "}
            <span className="whitespace-nowrap">
              {"Master's Student at the University of Tokyo"}
            </span>
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <Skills
            title="Frontend"
            skills={["nextjs", "remix", "react", "materialui", "tailwind", "daisyui"]}
          />
          <Skills
            title="Backend"
            skills={["nestjs", "hono", "prisma", "graphql", "grpc", "postgres", "mysql"]}
          />
          <Skills
            title="Other Web Technologies"
            skills={["ts", "js", "nodejs", "docker", "php", "wordpress", "jquery"]}
          />
          <Skills
            title="Other"
            skills={[
              "cpp",
              "c",
              "go",
              "java",
              "py",
              "flutter",
              "kotlin",
              "gcp",
              "aws",
              "ubuntu",
              "raspberrypi",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC<{
  title: string;
  skills: string[];
}> = ({ title, skills }) => {
  // TODO: Separate icons and turn them into local svg.
  const scrollableDiv = useRef<HTMLDivElement>(null);
  const addScrollEventListener = (listener: () => void) => {
    scrollableDiv.current?.addEventListener("scroll", listener);
  };
  const getScrollLeft = () => scrollableDiv.current?.scrollLeft ?? 0;

  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold text-2xl">{title}</p>
      <div ref={scrollableDiv} className="overflow-x-auto">
        <div
          className="flex gap-3 w-fit"
          style={{
            backgroundImage: `url(https://go-skill-icons.vercel.app/api/icons?i=${skills.join(
              ","
            )}&theme=dark)`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
        >
          {skills.map((skill) => (
            <FloatingTooltip
              key={skill}
              text={skill}
              addScrollEventListener={addScrollEventListener}
              getScrollLeft={getScrollLeft}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// This component floats outside of the block formatting context (BFC).
const FloatingTooltip: React.FC<{
  text: string;
  addScrollEventListener: (listener: () => void) => void;
  getScrollLeft: () => number;
}> = ({ text, addScrollEventListener, getScrollLeft }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hoverAreaDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addScrollEventListener(() => setIsOpen(false));
  }, [addScrollEventListener]);

  return (
    <div
      ref={hoverAreaDiv}
      className="size-20"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className="absolute pt-0.5"
        style={{
          top: (hoverAreaDiv.current?.offsetTop ?? 0) + (hoverAreaDiv.current?.offsetHeight ?? 0),
          left: (hoverAreaDiv.current?.offsetLeft ?? 0) - getScrollLeft(),
        }}
      >
        <div
          className={clsx("tooltip w-20 after:hidden mt-8", isOpen && "tooltip-open")}
          data-tip={text}
        />
      </div>
    </div>
  );
};
