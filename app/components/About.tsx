export const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="container py-20">
        <h2 className="font-bold text-4xl mt-3 mb-2">About Me</h2>
        <p className="grid grid-cols-[120px,1fr]">
          <span className="font-bold">Belonging: </span>
          <span className="col-start-2">
            {
              "master's student, department of electrical engineering, graduate school, the University of Tokyo"
            }
          </span>
          <span className="font-bold">Hobbies: </span>
          <span className="col-start-2">{"electronics projects, karaoke, anime, piano"}</span>
          <span className="font-bold">Special skill: </span>
          <span className="col-start-2">{"can recite 100 digits of pi"}</span>
        </p>
      </div>
    </div>
  );
};
