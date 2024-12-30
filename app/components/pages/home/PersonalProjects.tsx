import {
  faCode,
  faStar,
  faCalendarDays,
  faMicrochip,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useMemo, useRef, useState } from "react";

import type { Project } from "~/api/interface";

export const PersonalProjects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const periodAndProjects = useMemo(
    () =>
      Array.from(
        projects.reduce((yearToProjects, project) => {
          const period = project.period ?? String(project.year);
          if (!yearToProjects.has(period)) yearToProjects.set(period, []);
          yearToProjects.get(period)?.push(project);
          return yearToProjects;
        }, new Map<string, Project[]>())
      ).map(([period, projects]) => ({ period, projects })),
    [projects]
  );

  const [modalProject, setModalProject] = useState<Project>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showModal = (project: Project) => {
    setModalProject(project);
    dialogRef.current?.showModal();
  };

  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Personal Projects</h2>
      {periodAndProjects.map(({ period, projects }) => (
        <Fragment key={period}>
          <h3 className="font-bold text-2xl mt-8 mb-4">{period}</h3>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={project.title}
                className="card card-bordered card-side border-2 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-[ease] h-36"
                onClick={() => showModal(project)}
                onKeyDown={(e) => e.key === "Enter" && showModal(project)}
              >
                <div className="card-body p-6 w-full justify-between">
                  <h4 className="card-title">{project.title}</h4>
                  <div className="text-sm text-slate-500">{project.shortDescription}</div>
                  <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
                    {project.starCount && (
                      <span>
                        <FontAwesomeIcon icon={faStar} className="mr-2" />
                        {project.starCount}
                      </span>
                    )}
                    {project.techStacks && (
                      <span>
                        <FontAwesomeIcon icon={faCode} className="mr-2.5" />
                        {project.techStacks.join(" / ")}
                      </span>
                    )}
                    <span>
                      <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                      {project.year}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                      {project.genre}
                    </span>
                  </div>
                </div>
                {project.imgSrc && (
                  <figure className="max-w-[230px]">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="object-cover min-h-full"
                    />
                  </figure>
                )}
              </div>
            ))}
          </div>
        </Fragment>
      ))}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box w-11/12 max-w-7xl px-12 py-10">
          <div className="flex justify-between items-end">
            <h3 className="font-bold text-2xl">{modalProject?.title}</h3>
            <form method="dialog">
              <button className="btn btn-square btn-ghost -mb-[100%]">
                <FontAwesomeIcon icon={faX} size="lg" />
              </button>
            </form>
          </div>
          <div className="flex gap-10 mt-5">
            <div>
              <div className="flex gap-5">
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  {modalProject?.year}
                </span>
                <span>
                  <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                  {modalProject?.genre}
                </span>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-10 h-min gap-y-2 mt-5">
                <span className="font-bold">Short Description</span>
                {modalProject?.shortDescription}
                <span className="font-bold">Description</span>
                <p>{modalProject?.description}</p>
                {modalProject?.techStacks && (
                  <>
                    <span className="font-bold">Tech Stacks</span>
                    <span>{modalProject?.techStacks?.join(" / ")}</span>
                  </>
                )}
                {modalProject?.links?.map(({ label, href }) => (
                  <Fragment key={label}>
                    <span className="font-bold">{label}</span>
                    <a href={href} target="_blank" rel="noreferrer" className="link">
                      {href}
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
            {modalProject?.imgSrc && (
              <figure className="max-w-[50%]">
                <img src={modalProject?.imgSrc} alt={modalProject?.title} />
              </figure>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};
