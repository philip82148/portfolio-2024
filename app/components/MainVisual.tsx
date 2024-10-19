export const MainVisual: React.FC = () => {
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
          />
          <Skills
            title="Backend"
            skills={["nestjs", "hono", "prisma", "graphql", "grpc", "postgres", "mysql"]}
          />
          <Skills
            title="Other Web Technologies"
            skills={["ts", "js", "nodejs", "docker", "php", "jquery", "wordpress"]}
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

const Skills: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => {
  // TODO: Separate icons and turn them into local svg.
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold text-2xl">{title}</p>
      <div className="overflow-x-auto">
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
            <div key={skill} className="tooltip tooltip-right" data-tip={skill}>
              <div className="size-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
