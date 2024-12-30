import { Fragment } from "react";

import type { School } from "~/api/interface";

export const Education: React.FC<{ schools: School[] }> = ({ schools }) => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Education</h2>
      <div className="grid grid-cols-[auto_auto_1fr] items-center gap-x-8 pl-2">
        {schools.map(({ name, start, end, major }, i) => (
          <Fragment key={name}>
            <div className="col-start-1 size-16 rounded-full bg-primary-content mask [mask-image:url(/ornaments/school.png)]" />
            <div className="col-start-2 flex flex-col text-sm font-bold">
              <span>{end}</span>
              <span className="text-xs">―</span>
              <span>{start}</span>
            </div>
            <div className="col-start-3 flex flex-col">
              <h3 className="font-bold text-xl">{name}</h3>
              <div className="font-semibold">{major}</div>
            </div>
            <div className="col-start-1 flex justify-center h-full py-4">
              {i !== schools.length - 1 && <div className="w-1 min-h-10 bg-primary-content" />}
            </div>
          </Fragment>
        ))}
        {/* <div className="col-start-1 flex flex-col items-center h-full">
          <div className="rounded-full size-6 bg-primary-content" />
        </div> */}
      </div>
    </div>
  );
};
