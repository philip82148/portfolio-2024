import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { Skill, Stat } from "~/api/interface";
import { SKILL_ICONS } from "~/frontend-static-data";

const NUM_SKILLS_TO_ADD = 10;

export const Skills: React.FC<{ stats: Stat[]; skills: Skill[] }> = ({ stats, skills }) => {
  const [filterInput, originalSetFilterInput] = useState<string>("");
  const [displayLimit, setDisplayLimit] = useState<number>(NUM_SKILLS_TO_ADD);
  const setFilterInput = useCallback((arg: Parameters<typeof originalSetFilterInput>[0]) => {
    originalSetFilterInput(arg);
    setDisplayLimit(NUM_SKILLS_TO_ADD);
  }, []);

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
        {`${filterInput.trim() ? "Found" : "Total"} ${filteredSkills.length} skills, `}
        {`showing ${Math.min(displayLimit, filteredSkills.length)} of them.`}
      </p>
      <div className="grid grid-cols-3 grid-rows-[repeat(4,minmax(140px,1fr))] max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4 w-full mt-5">
        {filteredSkills.slice(0, displayLimit).map((skill) => (
          <div
            key={`${skill.name}-${filterInput}`}
            className="card card-bordered border-2 bg-base-100 rounded flip-in-hor-bottom"
          >
            <div className="card-body flex flex-row items-center gap-6">
              <div className="size-16 flex justify-center">{SKILL_ICONS[skill.skillIconKey]}</div>
              <div className="w-64 flex-grow">
                <div className="flex items-center gap-2">
                  <h4 className="card-title">
                    <button
                      onClick={() => addKeywordToFilterInput(skill.name)}
                      className="line-clamp-1"
                    >
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
                <p className="my-0.5 font-medium text-sm text-slate-500 line-clamp-1">
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
                <div className="flex flex-wrap gap-x-2 gap-y-1 font-medium text-sm">
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
      <div className="flex justify-center mt-6 h-12">
        {displayLimit < filteredSkills.length && (
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

const LazyTextInput: React.FC<{
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ placeholder, value, onChange }) => {
  const [realValue, setRealValue] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => onChange(realValue), 500);
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
  const calcRelevanceScore = (target: string, sanitizedKw: string, baseScore: number) => {
    const sanitizedTarget = sanitize(target);
    if (sanitizedTarget === sanitizedKw) return baseScore;
    if (sanitizedTarget.startsWith(sanitizedKw)) return baseScore - 1;
    if (sanitizedTarget.includes(sanitizedKw)) return baseScore - 2;
    return 0;
  };
  const calcRelevanceScoreArray = (targets: string[], sanitizedKw: string, baseScore: number) => {
    return targets.reduce(
      (acc, target) =>
        acc === baseScore ? acc : Math.max(acc, calcRelevanceScore(target, sanitizedKw, baseScore)),
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
      const relevanceScoreToCount = new Array(16).fill(0);
      for (const keyword of sanitizedKeywords) {
        if (keyword === "") continue;
        const relevanceScore =
          calcRelevanceScore(name, keyword, 16) ||
          calcRelevanceScoreArray(tags.map((tag) => `#${tag}`) ?? [], keyword, 13) ||
          calcRelevanceScoreArray(subsetFrameworkLikeSkills ?? [], keyword, 10) ||
          calcRelevanceScoreArray(subsetLanguageLikeSkills ?? [], keyword, 7) ||
          calcRelevanceScoreArray(Object.values(rest), keyword, 4) ||
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
        if (relevanceScore === 0) return [];
        ++relevanceScoreToCount[relevanceScore - 1];
      }
      return [{ relevanceScoreToCount, skill }];
    })
    .sort(
      (a, b) =>
        // sort by relevance
        [...new Array(16).keys()].reduceRight(
          (acc, score) => acc || b.relevanceScoreToCount[score] - a.relevanceScoreToCount[score],
          0
        ) ||
        // sort by non-relevance-related factors
        TYPE_ORDER[b.skill.type] - TYPE_ORDER[a.skill.type] ||
        a.skill.name.localeCompare(b.skill.name)
    )
    .map(({ skill }) => skill);
};
