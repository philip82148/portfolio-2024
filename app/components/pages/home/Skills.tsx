import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useRef, useState } from "react";

import type { Skill } from "~/api/interface";
import { SkillIcons } from "~/frontend-static-data";

export const Skills: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const [filterInput, setFilterInput] = useState<string>("");

  const filteredSkills = useMemo(() => {
    const lowerCasedWords = filterInput.split(/\s+/).map((word) => word.toLocaleLowerCase());
    return skills.filter((skill) => {
      const { internshipYear, personalYear, tags, hiddenKeywords, ...rest } = skill;
      return lowerCasedWords.every((word) => {
        return (
          Object.values(rest).some((value) => `#${value}`.toLowerCase().includes(word)) ||
          (personalYear && `personal${personalYear}year`.includes(word)) ||
          (internshipYear && `internship${internshipYear}year`.includes(word)) ||
          tags.some((tag) => `#${tag.toLowerCase()}`.includes(word)) ||
          hiddenKeywords?.some((keyword) => `#${keyword.toLowerCase()}`.includes(word))
        );
      });
    });
  }, [filterInput, skills]);

  const addTagToFilterInput = (tag: string) => {
    setFilterInput((prev) => (prev ? `${prev} #${tag}` : `#${tag}`));
  };

  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Skills</h2>
      <form className="px-1.5">
        <LazyTextInput value={filterInput} onChange={setFilterInput} />
      </form>
      <p className="px-3 mt-5">
        {filterInput.trim() ? "Found" : "Total"} {filteredSkills.length} Skills
      </p>
      <div className="flex flex-wrap gap-4 w-full mt-5">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="card card-bordered border-2 w-min h-min bg-base-100">
            <div className="card-body flex flex-row items-center gap-6">
              <div className="size-16">{SkillIcons[skill.skillIconKey]}</div>
              <div className="w-64">
                <div className="flex items-center gap-2">
                  <h2 className="card-title">
                    <button onClick={() => addTagToFilterInput(skill.name)}>{skill.name}</button>
                  </h2>
                  <button
                    className="badge badge-neutral"
                    onClick={() => addTagToFilterInput(skill.type)}
                  >
                    {skill.type}
                  </button>
                </div>
                <p className="my-0.5 font-semibold text-sm text-slate-500">
                  {skill.personalYear && (
                    <span>
                      Personal {skill.personalYear > 0.5 ? skill.personalYear : "- 0.5"} year
                    </span>
                  )}
                  {skill.personalYear && skill.internshipYear && <span className="mr-2">,</span>}
                  {skill.internshipYear && (
                    <span>
                      Internship {skill.internshipYear > 0.5 ? skill.internshipYear : "- 0.5"} year
                    </span>
                  )}
                </p>
                <div className="flex gap-x-2 gap-y-1 text-sm">
                  {skill.tags.map((tag) => (
                    <button
                      key={tag}
                      className="link link-hover"
                      onClick={() => addTagToFilterInput(tag)}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LazyTextInput: React.FC<{ value: string; onChange: (value: string) => void }> = ({
  value,
  onChange,
}) => {
  const [realValue, setRealValue] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => onChange(realValue), 300);
    return () => clearTimeout(timeout);
  }, [onChange, realValue]);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setRealValue(value);
    inputRef.current?.focus();
  }, [value]);

  return (
    <label className="input input-bordered flex items-center w-full max-w-xs gap-2 [&>button]:focus-within:block">
      <input
        ref={inputRef}
        type="text"
        placeholder="Filter"
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
          }}
          className="hidden"
        >
          <FontAwesomeIcon icon={faX} className="text-slate-500" />
        </button>
      )}
    </label>
  );
};
