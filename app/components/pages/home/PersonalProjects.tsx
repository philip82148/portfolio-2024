import clsx from "clsx";
import { Fragment, useMemo, useRef, useState } from "react";
import { FaCalendarDays, FaCode, FaCodeFork, FaMicrochip, FaStar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineImageNotSupported } from "react-icons/md";

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
    const imgSrc = project.thumbnailImgSrc ?? project.imgSrc;
    if (!imgSrc) {
      dialogRef.current?.showModal();
      return;
    }
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => dialogRef.current?.showModal();
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
      {groupByToSectionTitleAndProjects[groupBy].map(([sectionTitle, projects], i) => (
        <Fragment key={`${groupBy}-${i}`}>
          <h3 className="font-bold text-2xl mt-8 mb-4 flip-in-hor-bottom">{sectionTitle}</h3>
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4">
            {projects.map((project) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={`${groupBy}-${project.id}`}
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
                      <span className="flex items-center">
                        <FaStar size={14} className="mr-2 w-[16px]" title="Stars" />
                        {project.starCount}
                      </span>
                    )}
                    {!!project.forkCount && (
                      <span className="flex items-center">
                        <FaCodeFork size={14} className="mr-2 w-[13px]" title="Forks" />
                        {project.forkCount}
                      </span>
                    )}
                    {!!project.mainTechStacks?.length && (
                      <span className="flex items-center">
                        <FaCode size={14} className="mr-2 w-[18px]" title="Main Tech Stacks" />
                        {project.mainTechStacks.map((stack, i) => (
                          <Fragment key={i}>
                            {i !== 0 && " / "}
                            {stack}
                          </Fragment>
                        ))}
                      </span>
                    )}
                    <span className="flex items-center">
                      <FaCalendarDays size={14} className="mr-2" title="Period" />
                      {project.period}
                    </span>
                    <span className="flex items-center">
                      <FaMicrochip size={14} className="mr-2" title="Category" />
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
                <IoClose size={36} title="Close" />
              </button>
            </form>
          </div>
          <p className="font-medium text-slate-500 mt-2.5">{modalProject?.summary}</p>
          <div className="flex-grow grid grid-rows-[1fr_auto] gap-x-20 gap-y-5 mt-5 max-lg:justify-items-center">
            <div className="col-start-1 grid grid-cols-[auto_1fr] max-w-[800px] w-full gap-x-8 h-min gap-y-2 mt-1 max-lg:max-w-none max-lg:flex max-lg:flex-col">
              {modalProject?.links?.map((link, i) => (
                <Fragment key={i}>
                  <span className="font-bold text-right max-lg:text-left">{link.label}</span>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link break-all"
                  >
                    {link.href}
                  </a>
                </Fragment>
              ))}
              {!!(modalProject?.allTechStacks ?? modalProject?.mainTechStacks)?.length && (
                <>
                  <span className="font-bold text-right max-lg:text-left">All Tech Stacks</span>
                  <div>
                    {(modalProject.allTechStacks ?? modalProject.mainTechStacks)?.map(
                      (stack, i) => (
                        <Fragment key={i}>
                          {i !== 0 && " / "}
                          <span className="inline-block">{stack}</span>
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
                <span className="flex items-center">
                  <FaStar size={16} className="mr-2 w-[18px]" title="Stars" />
                  {modalProject.starCount}
                </span>
              )}
              {!!modalProject?.forkCount && (
                <span className="flex items-center">
                  <FaCodeFork size={16} className="mr-2 w-[14px]" title="Forks" />
                  {modalProject.forkCount}
                </span>
              )}
              {!!modalProject?.mainTechStacks?.length && (
                <span className="flex items-center">
                  <FaCode size={16} className="mr-2 w-[20px]" title="Main Tech Stacks" />
                  {modalProject.mainTechStacks.map((stack, i) => (
                    <Fragment key={i}>
                      {i !== 0 && " / "}
                      {stack}
                    </Fragment>
                  ))}
                </span>
              )}
              <span className="flex items-center">
                <FaCalendarDays size={16} className="mr-2" title="Period" />
                {modalProject?.period}
              </span>
              <span className="flex items-center">
                <FaMicrochip size={16} className="mr-2" title="Category" />
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
                <MdOutlineImageNotSupported size={100} />
              </div>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};
