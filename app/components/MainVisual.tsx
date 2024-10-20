import { useRef, useState } from "react";

export const MainVisual: React.FC = () => {
  const timeoutId = useRef<NodeJS.Timeout>();
  const [tooltipIsOpen, setTooltipIsOpen] = useState<boolean>(false);
  const [tooltipProps, setTooltipProps] = useState<Omit<TooltipProps, "open">>({});

  const openTooltip = (props: Omit<TooltipProps, "open">) => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    if (tooltipIsOpen) {
      // close & open
      timeoutId.current = setTimeout(() => {
        setTooltipIsOpen(false);
        timeoutId.current = setTimeout(() => {
          setTooltipIsOpen(true);
          setTooltipProps(props);
        }, 300);
      }, 100);
    } else {
      setTooltipIsOpen(true);
      setTooltipProps(props);
    }
  };
  const closeTooltip = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setTooltipIsOpen(false);
    }, 500);
  };
  const closeTooltipImmediately = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setTooltipIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen min-h-[600px]">
      <div className="container flex justify-around">
        <div className="w-96">
          <img src="/portfolio/me.jpg" alt="Ryota Sasaki" className="w-full" />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <Skills
            title="Frontend"
            skills={["nextjs", "remix", "react", "materialui", "tailwind", "daisyui"]}
            openTooltip={openTooltip}
            closeTooltip={closeTooltip}
            closeTooltipImmediately={closeTooltipImmediately}
          />
          <Skills
            title="Backend"
            skills={["nestjs", "hono", "prisma", "graphql", "grpc", "postgres", "mysql"]}
            openTooltip={openTooltip}
            closeTooltip={closeTooltip}
            closeTooltipImmediately={closeTooltipImmediately}
          />
          <Skills
            title="Other Web Technologies"
            skills={["ts", "js", "nodejs", "docker", "php", "jquery", "wordpress"]}
            openTooltip={openTooltip}
            closeTooltip={closeTooltip}
            closeTooltipImmediately={closeTooltipImmediately}
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
            openTooltip={openTooltip}
            closeTooltip={closeTooltip}
            closeTooltipImmediately={closeTooltipImmediately}
          />
        </div>
      </div>
      <Tooltip open={tooltipIsOpen} {...tooltipProps} />
    </div>
  );
};

type TooltipProps = {
  open: boolean;
  top?: number;
  height?: number;
  left?: number;
  width?: number;
  text?: string;
};

const Tooltip: React.FC<TooltipProps> = ({ open, top = 0, height = 0, left, text }) => {
  const transitions = {
    0: "opacity-0",
    1: "",
  };

  return (
    <div
      className={`${
        transitions[open ? 1 : 0]
      } transition-opacity duration-300 absolute w-20 flex justify-center`}
      style={{ top: top + height, left }}
    >
      <div className="px-2 py-1 rounded-[0.25rem] bg-slate-700 text-white text-sm mt-0.5">
        {text}
      </div>
    </div>
  );
};

const Skills: React.FC<{
  title: string;
  skills: string[];
  openTooltip: (props: Omit<TooltipProps, "open">) => void;
  closeTooltip: () => void;
  closeTooltipImmediately: () => void;
}> = ({ title, skills, openTooltip, closeTooltip, closeTooltipImmediately }) => {
  // TODO: Separate icons and turn them into local svg.
  const scrollableDiv = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold text-2xl">{title}</p>
      <div ref={scrollableDiv} className="overflow-x-auto" onScroll={closeTooltipImmediately}>
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
            <div
              key={skill}
              className="size-20 relative"
              onMouseEnter={(e) => {
                const elem = e.target as HTMLDivElement;

                openTooltip({
                  top: elem.offsetTop,
                  height: elem.offsetHeight,
                  left: elem.offsetLeft - (scrollableDiv.current?.scrollLeft ?? 0),
                  width: elem.offsetWidth,
                  text: skill,
                });
              }}
              onMouseLeave={closeTooltip}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
