import type React from "react";

import type { School } from "~/api/interface";

export const Education: React.FC<{ schools: School[] }> = ({ schools }) => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Education</h2>
      <div className="grid grid-cols-[auto_auto_1fr] items-center gap-x-8 pl-2 max-sm:gap-x-3">
        {schools.map((school, i) => (
          <SchoolColumn key={school.id} school={school} isLast={i === schools.length - 1} />
        ))}
      </div>
    </div>
  );
};

const SchoolColumn: React.FC<{ school: School; isLast: boolean }> = ({ school, isLast }) => {
  return (
    <>
      <div className="col-start-1 size-16 rounded-full bg-primary-content mask [mask-image:url(/ornaments/school.png)] max-sm:size-10" />
      <div className="col-start-2 flex flex-col text-sm font-bold">
        <span>{school.end}</span>
        <span className="text-xs">―</span>
        <span>{school.start}</span>
      </div>
      <div className="col-start-3 flex flex-col">
        <h3 className="font-bold text-xl">{school.name}</h3>
        <div className="font-semibold break-keep">{school.major}</div>
      </div>
      <div className="col-start-1 flex justify-center h-full py-4">
        {!isLast && <div className="w-1 min-h-10 bg-primary-content max-sm:w-[3px]" />}
      </div>
    </>
  );
};
