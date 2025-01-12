import {
  faCode,
  faStar,
  faCalendarDays,
  faMicrochip,
  faX,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
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
          (by, i) => (
            <input
              key={i}
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
      {groupByToSectionTitleAndProjects[groupBy].map(([sectionTitle, projects], sectionIndex) => (
        <Fragment key={`${groupBy}-${sectionIndex}`}>
          <h3 className="font-bold text-2xl mt-8 mb-4 flip-in-hor-bottom">{sectionTitle}</h3>
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4">
            {projects.map((project, projectIndex) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={`${groupBy}-${sectionIndex}-${projectIndex}`}
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
                    {!!project.mainTechStacks?.length && (
                      <span>
                        <FontAwesomeIcon icon={faCode} className="mr-2.5" />
                        {project.mainTechStacks.map((stack, i) => (
                          <Fragment key={i}>
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
            <h3 className="font-bold text-2xl max-lg:text-xl">{modalProject?.title}</h3>
            <form method="dialog" className="-mb-[100%]">
              <button className="btn btn-square btn-ghost">
                <FontAwesomeIcon icon={faX} size="lg" />
              </button>
            </form>
          </div>
          <p className="font-medium text-slate-500 mt-2.5">{modalProject?.summary}</p>
          <div className="flex-grow grid grid-rows-[1fr_auto] gap-x-20 gap-y-5 mt-5 max-lg:justify-items-center">
            <div className="col-start-1 grid grid-cols-[auto_1fr] max-w-[800px] w-full gap-x-8 h-min gap-y-2 mt-1 max-lg:max-w-none max-lg:flex max-lg:flex-col">
              {modalProject?.links?.map(({ label, href }, i) => (
                <Fragment key={i}>
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
              {!!(modalProject?.allTechStacks ?? modalProject?.mainTechStacks)?.length && (
                <>
                  <span className="font-bold text-right max-lg:text-left">All Tech Stacks</span>
                  <div className="flex flex-wrap gap-x-1.5">
                    {(modalProject.allTechStacks ?? modalProject.mainTechStacks)?.map(
                      (stack, i) => (
                        <Fragment key={i}>
                          {i !== 0 && <span>/</span>}
                          <span>{stack}</span>
                        </Fragment>
                      )
                    )}
                  </div>
                </>
              )}
              {!!modalProject?.descriptions?.length && (
                <>
                  <span className="font-bold text-right max-lg:text-left">Description</span>
                  <div className="flex flex-col gap-3.5">
                    {modalProject.descriptions.map((description, i) => (
                      <p key={i}>{description}</p>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="col-start-1 row-start-2 flex flex-wrap items-center gap-x-5 gap-y-2 mt-1 w-full font-medium max-lg:row-start-3">
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
              {!!modalProject?.mainTechStacks?.length && (
                <span>
                  <FontAwesomeIcon icon={faCode} className="mr-2.5" />
                  {modalProject.mainTechStacks.map((stack, i) => (
                    <Fragment key={i}>
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
            {modalProject?.thumbnailImgSrc ?? modalProject?.imgSrc ? (
              <figure className="col-start-2 row-start-1 row-span-2 max-w-fit lg:ml-auto max-lg:col-start-1 max-lg:row-span-1 max-lg:row-start-2 max-lg:max-h-[400px]">
                <img
                  src={modalProject.thumbnailImgSrc ?? modalProject.imgSrc}
                  alt={modalProject.title}
                  className="object-contain h-full w-auto"
                />
              </figure>
            ) : (
              <div
                className={clsx(
                  "col-start-2 row-start-1 row-span-2 w-[300px] bg-slate-100 py-14 flex items-center justify-center text-3xl",
                  "lg:ml-auto max-lg:col-start-1 max-lg:row-span-1 max-lg:row-start-2 max-lg:w-full max-lg:max-w-[300px] max-lg:max-h-[400px]"
                )}
              >
                <NoImageIcon width="100" height="100" />
              </div>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};

const NoImageIcon: React.FC<{ width?: string; height?: string }> = ({ width, height }) => {
  return (
    <svg
      fill="#000000"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30,3.4141,28.5859,2,2,28.5859,3.4141,30l2-2H26a2.0027,2.0027,0,0,0,2-2V5.4141ZM26,26H7.4141l7.7929-7.793,2.3788,2.3787a2,2,0,0,0,2.8284,0L22,19l4,3.9973Zm0-5.8318-2.5858-2.5859a2,2,0,0,0-2.8284,0L19,19.1682l-2.377-2.3771L26,7.4141Z" />
      <path d="M6,22V19l5-4.9966,1.3733,1.3733,1.4159-1.416-1.375-1.375a2,2,0,0,0-2.8284,0L6,16.1716V6H22V4H6A2.002,2.002,0,0,0,4,6V22Z" />
      <rect
        id="_Transparent_Rectangle_"
        data-name="&lt;Transparent Rectangle&gt;"
        className="fill-none"
        width="32"
        height="32"
      />
    </svg>
  );
};
