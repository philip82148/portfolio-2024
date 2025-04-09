import type React from "react";

import type { Internship } from "~/api/interface";

export const Internships: React.FC<{ internships: Internship[] }> = ({ internships }) => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Internships</h2>
      <div className="grid grid-cols-[auto_auto_1fr] items-center gap-x-8 pl-2 max-sm:gap-x-3">
        {internships.map((internship, i) => (
          <InternshipColumn
            key={internship.id}
            internship={internship}
            isLast={i === internships.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const InternshipColumn: React.FC<{ internship: Internship; isLast: boolean }> = ({
  internship,
  isLast,
}) => {
  return (
    <>
      <div className="col-start-1 size-16 rounded-full bg-primary-content mask [mask-image:url(/ornaments/company.png)] [mask-size:3rem] max-sm:size-10 max-sm:[mask-size:2rem]" />
      <div className="col-start-2 flex flex-col text-sm font-bold">
        <span>{internship.end}</span>
        <span className="text-xs">―</span>
        <span>{internship.start}</span>
      </div>
      <div className="col-start-3 flex flex-col">
        <h3 className="font-bold text-xl">{internship.name}</h3>
        <div className="font-semibold">{internship.occupation}</div>
      </div>
      <div className="col-start-1 flex justify-center h-full py-4">
        {!isLast && <div className="w-1 min-h-10 bg-primary-content max-sm:w-[3px]" />}
      </div>
      {!!internship.descriptions?.length && (
        <ul className="col-start-3 my-4 pb-10 list-disc list-inside">
          {internship.descriptions.map((description, i) => (
            <li key={i}>{description}</li>
          ))}
        </ul>
      )}
    </>
  );
};
