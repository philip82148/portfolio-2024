import clsx from "clsx";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MdClear } from "react-icons/md";

import { filterAndSortSkills } from "./filterAndSortSkills";

import type { Skill } from "~/api/interface";
import { SKILL_ICONS } from "~/frontend-static-data";

const NUM_SKILLS_TO_ADD = 10;

export const LanguagesAndFrameworks: React.FC<{ skills: Skill[] }> = ({
  skills: originalSkills,
}) => {
  // Skill Filter
  const [filterInput, originalSetFilterInput] = useState<string>("");
  const [displayLimit, setDisplayLimit] = useState<number>(NUM_SKILLS_TO_ADD);
  const setFilterInput = useCallback((arg: Parameters<typeof originalSetFilterInput>[0]) => {
    originalSetFilterInput(arg);
    setDisplayLimit(NUM_SKILLS_TO_ADD);
  }, []);
  const skills = useMemo(
    () => filterAndSortSkills(originalSkills, filterInput),
    [filterInput, originalSkills]
  );

  // Keyword Click
  const onKeywordClick = (keyword: string) => {
    setFilterInput((prev) => {
      if (!prev.replaceAll(/\s+/g, "")) {
        return `${keyword} `;
      }
      const match = prev.match(/(?<keywords>^.*[^\s])\s+$/);
      if (match) {
        return `${match.groups?.keywords} ${keyword} `;
      }
      return `${prev} ${keyword} `;
    });
  };

  return (
    <div>
      <h3 className="font-bold text-xl mb-8">Languages & Frameworks</h3>
      <div className="px-1.5">
        <LazyTextInput
          name="skill-filter"
          placeholder="Filter..."
          value={filterInput}
          onChange={setFilterInput}
        />
      </div>
      <p className="px-3 mt-5 font-medium">
        {`${filterInput.trim() ? "Found" : "Total"} ${skills.length} skills, `}
        {`showing ${Math.min(displayLimit, skills.length)} of them.`}
      </p>
      <div
        className={clsx(
          "grid grid-cols-3 grid-rows-[repeat(4,140px)] gap-4 w-full mt-5",
          "max-2xl:grid-rows-[repeat(4,124px)]",
          "max-xl:grid-cols-2 max-xl:grid-rows-[repeat(5,140px)]",
          "max-lg:grid-cols-1",
          "max-sm:grid-rows-[repeat(5,132px)]"
        )}
      >
        {skills.slice(0, displayLimit).map((skill) => (
          <SkillCard
            key={`${filterInput}-${skill.id}`}
            skill={skill}
            onKeywordClick={onKeywordClick}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6 h-12">
        {displayLimit < skills.length && (
          <button
            className="btn flip-in-hor-bottom"
            onClick={() => setDisplayLimit((limit) => limit + NUM_SKILLS_TO_ADD)}
          >
            Display More
          </button>
        )}
      </div>
    </div>
  );
};

const SkillCard: React.FC<{ skill: Skill; onKeywordClick: (keyword: string) => void }> = ({
  skill,
  onKeywordClick,
}) => {
  return (
    <div className="card card-bordered border-2 bg-base-100 rounded flip-in-hor-bottom">
      <div
        className={clsx(
          "card-body flex flex-row items-center gap-6",
          "max-2xl:p-6 max-xl:p-8",
          "max-sm:py-7 max-sm:px-5 max-sm:gap-5"
        )}
      >
        <div className="size-16 flex justify-center">{SKILL_ICONS[skill.skillIconKey]}</div>
        <div className="w-64 flex-grow -mt-[2px] mb-[2px]">
          <div className="flex items-center gap-2">
            <h4 className="card-title">
              <button onClick={() => onKeywordClick(skill.name)} className="line-clamp-1">
                {skill.name}
              </button>
            </h4>
            <button className="badge badge-neutral" onClick={() => onKeywordClick(skill.type)}>
              {skill.type}
            </button>
          </div>
          <p className="my-0.5 font-medium text-sm text-slate-500 line-clamp-1">
            {skill.personalYear && (
              <span>Personal {skill.personalYear > 0.5 ? skill.personalYear : "- 0.5"} yr.</span>
            )}
            {skill.personalYear && skill.internshipYear && <span className="mr-2">,</span>}
            {skill.internshipYear && (
              <span>
                Internship {skill.internshipYear > 0.5 ? skill.internshipYear : "- 0.5"} yr.
              </span>
            )}
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1 font-medium text-sm">
            {skill.tags.map((tag, i) => (
              <button key={i} className="link link-hover" onClick={() => onKeywordClick(`#${tag}`)}>
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LazyTextInput: React.FC<{
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ name, placeholder, value, onChange }) => {
  const [realValue, setRealValue] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => onChange(realValue), 500);
    return () => clearTimeout(timeout);
  }, [onChange, realValue]);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setRealValue(value);
    if (value) {
      inputRef.current?.focus();
    }
  }, [value]);

  return (
    <label className="input input-bordered flex items-center w-full max-w-xs gap-2 [&>button]:focus-within:block">
      <input
        ref={inputRef}
        type="text"
        name={name}
        placeholder={placeholder}
        className="grow"
        value={realValue}
        onChange={(e) => setRealValue(e.target.value)}
      />
      {!!realValue && (
        <button
          type="reset"
          onClick={(e) => {
            e.preventDefault();
            setRealValue("");
            inputRef.current?.focus();
          }}
          className="hidden"
        >
          <MdClear size={20} className="text-slate-500" title="Clear" />
        </button>
      )}
    </label>
  );
};
