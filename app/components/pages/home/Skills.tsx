import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useRef, useState } from "react";

import type { Skill, Stat } from "~/api/interface";
import { SKILL_ICONS } from "~/frontend-static-data";

export const Skills: React.FC<{ stats: Stat[]; skills: Skill[] }> = ({ stats, skills }) => {
  const [filterInput, setFilterInput] = useState<string>("");

  const filteredSkills = useMemo(() => filterAndSort(skills, filterInput), [filterInput, skills]);

  const addKeywordToFilterInput = (keyword: string) => {
    setFilterInput((prev) => (prev ? `${prev} ${keyword}` : keyword));
  };

  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Skills</h2>
      <h3 className="font-bold text-xl mb-8">Stats</h3>
      <div className="flex flex-wrap items-start gap-4 mb-8">
        {stats.map((stat) => (
          <a key={stat.name} href={stat.providerHref} target="_blank" rel="noopener noreferrer">
            <img src={stat.imgSrc} alt={`${stat.name} Stats`} className="h-40 w-auto" />
          </a>
        ))}
      </div>
      <h3 className="font-bold text-xl mb-8">Languages & Frameworks</h3>
      <div className="px-1.5">
        <LazyTextInput placeholder="Filter..." value={filterInput} onChange={setFilterInput} />
      </div>
      <p className="px-3 mt-5 font-medium">
        {filterInput.trim() ? "Found" : "Total"} {filteredSkills.length} Skills
      </p>
      <div className="flex flex-wrap gap-4 w-full mt-5">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="card card-bordered border-2 w-min h-min bg-base-100 rounded"
          >
            <div className="card-body flex flex-row items-center gap-6">
              <div className="size-16">{SKILL_ICONS[skill.skillIconKey]}</div>
              <div className="w-64">
                <div className="flex items-center gap-2">
                  <h4 className="card-title">
                    <button onClick={() => addKeywordToFilterInput(skill.name)}>
                      {skill.name}
                    </button>
                  </h4>
                  <button
                    className="badge badge-neutral"
                    onClick={() => addKeywordToFilterInput(skill.type)}
                  >
                    {skill.type}
                  </button>
                </div>
                <p className="my-0.5 font-medium text-sm text-slate-500">
                  {skill.personalYear && (
                    <span>
                      Personal {skill.personalYear > 0.5 ? skill.personalYear : "- 0.5"} yr.
                    </span>
                  )}
                  {skill.personalYear && skill.internshipYear && <span className="mr-2">,</span>}
                  {skill.internshipYear && (
                    <span>
                      Internship {skill.internshipYear > 0.5 ? skill.internshipYear : "- 0.5"} yr.
                    </span>
                  )}
                </p>
                <div className="flex gap-x-2 gap-y-1 font-medium text-sm">
                  {skill.tags.map((tag) => (
                    <button
                      key={tag}
                      className="link link-hover"
                      onClick={() => addKeywordToFilterInput(`#${tag}`)}
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

const LazyTextInput: React.FC<{
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ placeholder, value, onChange }) => {
  const [realValue, setRealValue] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => onChange(realValue), 300);
    return () => clearTimeout(timeout);
  }, [onChange, realValue]);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setRealValue(value);
    if (value) inputRef.current?.focus();
  }, [value]);

  return (
    <label className="input input-bordered flex items-center w-full max-w-xs gap-2 [&>button]:focus-within:block">
      <input
        ref={inputRef}
        type="text"
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
          <FontAwesomeIcon icon={faX} className="text-slate-500" />
        </button>
      )}
    </label>
  );
};

const filterAndSort = (skills: Skill[], filterInput: string) => {
  const sanitize = (s: string) => s.replace(/[.\s]+/, "").toLowerCase();
  const calcRelevanceLevel = (target: string, sanitizedKw: string, baseLevel: number) => {
    const sanitizedTarget = sanitize(target);
    if (sanitizedTarget === sanitizedKw) return baseLevel;
    if (sanitizedTarget.startsWith(sanitizedKw)) return baseLevel - 1;
    if (sanitizedTarget.includes(sanitizedKw)) return baseLevel - 2;
    return 0;
  };
  const calcRelevanceLevelArray = (targets: string[], keyword: string, baseLevel: number) => {
    return targets.reduce(
      (acc, target) =>
        acc < baseLevel ? Math.max(acc, calcRelevanceLevel(target, keyword, baseLevel)) : acc,
      0
    );
  };
  const TYPE_ORDER: Record<Skill["type"], number> = {
    Language: 3,
    Framework: 2,
    Other: 1,
  };

  const sanitizedKeywords = new Set(filterInput.split(/\s+/).map((word) => sanitize(word)));
  return skills
    .flatMap((skill) => {
      const {
        name,
        tags,
        subsetFrameworkLikeSkills,
        subsetLanguageLikeSkills,
        personalYear,
        internshipYear,
        ...rest
      } = skill;
      const relevanceLevelToCount = new Array(16).fill(0);
      for (const keyword of sanitizedKeywords) {
        if (keyword === "") continue;
        const relevanceLevel =
          calcRelevanceLevel(name, keyword, 16) ||
          calcRelevanceLevelArray(tags.map((tag) => `#${tag}`) ?? [], keyword, 13) ||
          calcRelevanceLevelArray(subsetFrameworkLikeSkills ?? [], keyword, 10) ||
          calcRelevanceLevelArray(subsetLanguageLikeSkills ?? [], keyword, 7) ||
          calcRelevanceLevelArray(Object.values(rest), keyword, 4) ||
          (personalYear &&
          [`personal${personalYear}yr.`, `personal${personalYear}year`].some((s) =>
            s.includes(keyword)
          )
            ? 1
            : 0) ||
          (internshipYear &&
          [`internship${internshipYear}yr.`, `internship${internshipYear}year`].some((s) =>
            s.includes(keyword)
          )
            ? 1
            : 0);
        if (!relevanceLevel) return [];
        ++relevanceLevelToCount[relevanceLevel - 1];
      }
      return [
        {
          relevanceLevelToCount,
          experienceYear: Math.max(personalYear ?? 0, (internshipYear ?? 0) * 5),
          skill,
        },
      ];
    })
    .sort(
      (a, b) =>
        // sort by relevance
        b.relevanceLevelToCount.reduceRight(
          (acc, cur, i) => acc || cur - a.relevanceLevelToCount[i],
          0
        ) ||
        // sort by non-relevance-related factors
        TYPE_ORDER[b.skill.type] - TYPE_ORDER[a.skill.type] ||
        a.skill.name.localeCompare(b.skill.name)
    )
    .map(({ skill }) => skill);
};
