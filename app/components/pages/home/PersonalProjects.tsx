import {
  faCode,
  faStar,
  faCalendarDays,
  faMicrochip,
  faX,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useMemo, useRef, useState } from "react";

import type { Project } from "~/api/interface";

export const PersonalProjects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const groupByToSectionTitleAndProjects: Record<string, [string, Project[]][]> = useMemo(
    () => ({
      period: Array.from(
        projects.reduce(
          (periodSet, project) => periodSet.add(project.period ?? String(project.year)),
          new Set<string>()
        )
      ).map((period) => [
        period,
        projects.filter((project) => (project.period ?? String(project.year)) === period),
      ]),
      category: ["Web", "Book", "Electronics", "Other"].flatMap((category) => {
        const filteredProjects = projects.filter((project) => project.category === category);
        return filteredProjects.length ? [[category, filteredProjects]] : [];
      }),
    }),
    [projects]
  );
  const [groupBy, setGroupBy] = useState<keyof typeof groupByToSectionTitleAndProjects>("period");

  const [modalProject, setModalProject] = useState<Project>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showModal = (project: Project) => {
    setModalProject(project);
    dialogRef.current?.showModal();
  };

  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Personal Projects</h2>
      <form className="join">
        {(["period", "category"] satisfies (keyof typeof groupByToSectionTitleAndProjects)[]).map(
          (by) => (
            <input
              key={by}
              className="join-item btn capitalize"
              type="radio"
              name="group-by"
              aria-label={by}
              checked={by === groupBy}
              onChange={() => setGroupBy(by)}
            />
          )
        )}
      </form>
      {groupByToSectionTitleAndProjects[groupBy].map(([sectionTitle, projects]) => (
        <Fragment key={sectionTitle}>
          <h3 className="font-bold text-2xl mt-8 mb-4 personal-project-animation">
            {sectionTitle}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={project.title}
                className="card card-bordered card-side border-2 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-[ease] h-36 personal-project-animation"
                onClick={() => showModal(project)}
                onKeyDown={(e) => e.key === "Enter" && showModal(project)}
              >
                <div className="card-body p-6 w-full justify-between">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="text-sm text-slate-500">{project.shortDescription}</p>
                  <div className="flex flex-wrap items-center gap-5 text-sm">
                    {!!project.starCount && (
                      <span>
                        <FontAwesomeIcon icon={faStar} className="mr-2" />
                        {project.starCount}
                      </span>
                    )}
                    {!!project.forkCount && (
                      <span>
                        <FontAwesomeIcon icon={faCodeFork} className="mr-2" />
                        {project.forkCount}
                      </span>
                    )}
                    {!!project.techStacks && (
                      <span>
                        <FontAwesomeIcon icon={faCode} className="mr-2.5" />
                        {project.techStacks.map((stack, i) => (
                          <Fragment key={stack}>
                            {i !== 0 && <span className="mx-1">/</span>}
                            <span>{stack}</span>
                          </Fragment>
                        ))}
                      </span>
                    )}
                    <span>
                      <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                      {project.year}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                      {project.category}
                    </span>
                  </div>
                </div>
                {!!project.imgSrc && (
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
        <div className="modal-box w-11/12 max-w-7xl min-h-96 px-12 py-10 flex flex-col">
          <div className="flex justify-between items-end">
            <h3 className="font-bold text-2xl">{modalProject?.title}</h3>
            <form method="dialog">
              <button className="btn btn-square btn-ghost -mb-[100%]">
                <FontAwesomeIcon icon={faX} size="lg" />
              </button>
            </form>
          </div>
          <p className="text-slate-500 mt-2.5">{modalProject?.shortDescription}</p>
          <div className="flex-grow flex gap-20 mt-5">
            <div className="basis-0 flex-grow flex flex-col justify-between gap-6">
              <div className="grid grid-cols-[auto_1fr] gap-x-8 h-min gap-y-2 mt-1">
                {modalProject?.links?.map(({ label, href }) => (
                  <Fragment key={label}>
                    <span className="font-bold text-right">{label}</span>
                    <a href={href} target="_blank" rel="noreferrer" className="link">
                      {href}
                    </a>
                  </Fragment>
                ))}
                {((techStacks) =>
                  techStacks && (
                    <>
                      {<span className="font-bold text-right">All Tech Stacks</span>}
                      <div>
                        {techStacks.map((stack, i) => (
                          <Fragment key={stack}>
                            {i !== 0 && <span className="mx-1.5">/</span>}
                            <span>{stack}</span>
                          </Fragment>
                        ))}
                      </div>
                    </>
                  ))(modalProject?.allTechStacks || modalProject?.techStacks)}
                <span className="font-bold text-right">Description</span>
                <p>{modalProject?.description}</p>
              </div>
              <div className="flex gap-5">
                {!!modalProject?.starCount && (
                  <span>
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    {modalProject.starCount}
                  </span>
                )}
                {!!modalProject?.forkCount && (
                  <span>
                    <FontAwesomeIcon icon={faCodeFork} className="mr-2" />
                    {modalProject.forkCount}
                  </span>
                )}
                {!!modalProject?.techStacks && (
                  <span>
                    <FontAwesomeIcon icon={faCode} className="mr-2.5" />
                    {modalProject.techStacks.map((stack, i) => (
                      <Fragment key={stack}>
                        {i !== 0 && <span className="mx-1.5">/</span>}
                        <span>{stack}</span>
                      </Fragment>
                    ))}
                  </span>
                )}
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  {modalProject?.year}
                </span>
                <span>
                  <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                  {modalProject?.category}
                </span>
              </div>
            </div>
            {!!modalProject?.imgSrc && (
              <figure className="basis-0 flex-grow">
                <img src={modalProject?.imgSrc} alt={modalProject?.title} />
              </figure>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};
