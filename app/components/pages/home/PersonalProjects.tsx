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
        projects.reduce((periodSet, project) => periodSet.add(project.period), new Set<string>())
      ).map((period) => [period, projects.filter((project) => project.period === period)]),
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
              name="personal-projects-group-by"
              aria-label={`Group By ${by}`}
              checked={by === groupBy}
              onChange={() => setGroupBy(by)}
            />
          )
        )}
      </form>
      {groupByToSectionTitleAndProjects[groupBy].map(([sectionTitle, projects]) => (
        <Fragment key={sectionTitle}>
          <h3 className="font-bold text-2xl mt-8 mb-4 flip-in-hor-bottom">{sectionTitle}</h3>
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4">
            {projects.map((project) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={project.title}
                className="card card-bordered card-side border-2 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-[ease] h-36 max-xl:h-min flip-in-hor-bottom"
                onClick={() => showModal(project)}
                onKeyDown={(e) => e.key === "Enter" && showModal(project)}
              >
                <div className="card-body p-6 justify-between">
                  <h4 className="card-title line-clamp-2">{project.title}</h4>
                  <p className="font-medium text-sm text-slate-500 line-clamp-1">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-medium text-sm">
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
                    {!!project.mainTechStacks && (
                      <span>
                        <FontAwesomeIcon icon={faCode} className="mr-2.5" />
                        {project.mainTechStacks.map((stack, i) => (
                          <Fragment key={stack}>
                            {i !== 0 && <span className="mx-1">/</span>}
                            <span>{stack}</span>
                          </Fragment>
                        ))}
                      </span>
                    )}
                    <span>
                      <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                      {project.period}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                      {project.category}
                    </span>
                  </div>
                </div>
                {!!project.thumbnailImgSrc && (
                  <figure className="max-w-[230px] max-md:max-w-[120px]">
                    <img
                      src={project.thumbnailImgSrc}
                      alt={project.title}
                      className="object-contain h-full w-auto"
                    />
                  </figure>
                )}
              </div>
            ))}
          </div>
        </Fragment>
      ))}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
      <dialog
        ref={dialogRef}
        className="modal"
        onClick={(e) => e.currentTarget === e.target && dialogRef.current?.close()}
      >
        <div className="modal-box w-11/12 max-w-7xl min-h-96 px-12 py-10 flex flex-col max-lg:px-8 max-lg:py-7 max-sm:p-5 [max-height:calc(100dvh-5em)]">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-2xl max-lg:text-lg">{modalProject?.title}</h3>
            <form method="dialog">
              <button className="btn btn-square btn-ghost -mb-[100%]">
                <FontAwesomeIcon icon={faX} size="lg" />
              </button>
            </form>
          </div>
          <p className="font-medium text-slate-500 mt-2.5">{modalProject?.summary}</p>
          <div className="flex-grow flex gap-20 mt-5 max-lg:flex-col max-lg:gap-5 max-lg:items-center">
            <div className="basis-0 flex-grow flex flex-col justify-between gap-6 max-lg:gap-2 max-lg:w-full">
              <div className="grid grid-cols-[auto_1fr] max-w-[800px] gap-x-8 h-min gap-y-2 mt-1 max-lg:flex max-lg:flex-col">
                {modalProject?.links?.map(({ label, href }) => (
                  <Fragment key={label}>
                    <span className="font-bold text-right max-lg:text-left">{label}</span>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link break-all"
                    >
                      {href}
                    </a>
                  </Fragment>
                ))}
                {!!(modalProject?.allTechStacks ?? modalProject?.mainTechStacks) && (
                  <>
                    <span className="font-bold text-right max-lg:text-left">All Tech Stacks</span>
                    <div className="flex flex-wrap gap-x-1.5">
                      {(modalProject.allTechStacks ?? modalProject.mainTechStacks)?.map(
                        (stack, i) => (
                          <Fragment key={stack}>
                            {i !== 0 && <span>/</span>}
                            <span>{stack}</span>
                          </Fragment>
                        )
                      )}
                    </div>
                  </>
                )}
                <span className="font-bold text-right max-lg:text-left">Description</span>
                <div>
                  {modalProject?.descriptions?.map((description) => (
                    <p key={description} className="mb-3.5">
                      {description}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-medium">
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
                {!!modalProject?.mainTechStacks && (
                  <span>
                    <FontAwesomeIcon icon={faCode} className="mr-2.5" />
                    {modalProject.mainTechStacks.map((stack, i) => (
                      <Fragment key={stack}>
                        {i !== 0 && <span className="mx-1.5">/</span>}
                        <span>{stack}</span>
                      </Fragment>
                    ))}
                  </span>
                )}
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  {modalProject?.period}
                </span>
                <span>
                  <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                  {modalProject?.category}
                </span>
              </div>
            </div>
            {!!(modalProject?.thumbnailImgSrc ?? modalProject?.imgSrc) && (
              <figure className="basis-0 flex-grow max-w-fit max-lg:max-h-[400px]">
                <img
                  src={modalProject.thumbnailImgSrc ?? modalProject.imgSrc}
                  alt={modalProject.title}
                  className="object-contain h-full w-auto"
                />
              </figure>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};
