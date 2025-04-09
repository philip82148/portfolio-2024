import type { Skill } from "~/api/interface";

const MAX_RELEVANCE_SCORE = 4;
const TYPE_ORDER = {
  Language: 3,
  Framework: 2,
  Other: 1,
} as const satisfies Record<Skill["type"], number>;

export const filterAndSortSkills = (skills: Skill[], query: string) => {
  const allKeywords = query
    .split(/\s+/)
    .filter((kw) => !!kw)
    .map(sanitize);

  // If query ends with space, all keywords are completed.
  // Otherwise, the last keyword is uncompleted
  let completedKeywords: string[] = [],
    uncompletedKeyword: string = "";
  if (query.match(/\s+$/)) {
    completedKeywords = Array.from(new Set(allKeywords));
  } else {
    completedKeywords = Array.from(new Set(allKeywords.slice(0, -1)));
    uncompletedKeyword = allKeywords.at(-1) ?? "";
  }

  return (
    skills
      // Filter
      .flatMap((skill) => {
        const relevanceScoreToCount: number[] = new Array(MAX_RELEVANCE_SCORE + 1).fill(0);

        // Filter by completed keywords
        const { name, type, tags, subsetFrameworkLikeSkills, subsetLanguageLikeSkills } = skill;
        for (const keyword of completedKeywords) {
          if ([name, type].map(sanitize).includes(keyword)) {
            ++relevanceScoreToCount[3];
            continue;
          }
          if (tags.map(sanitize).includes(keyword)) {
            ++relevanceScoreToCount[2];
            continue;
          }
          if ((subsetFrameworkLikeSkills ?? []).map(sanitize).includes(keyword)) {
            ++relevanceScoreToCount[1];
            continue;
          }
          if ((subsetLanguageLikeSkills ?? []).map(sanitize).includes(keyword)) {
            ++relevanceScoreToCount[0];
            continue;
          }
          return [];
        }
        if (!uncompletedKeyword) {
          return [{ relevanceScoreToCount, skill }];
        }

        // Filter by uncompleted keywords
        const { personalYear, internshipYear } = skill;
        const relevanceScore =
          calcRelevanceScore(name, uncompletedKeyword, 3 * 5 + 1) ||
          calcRelevanceScore(type, uncompletedKeyword, 3 * 4 + 1) ||
          calcRelevanceScoreArray(
            tags.map((tag) => `#${tag}`) ?? [],
            uncompletedKeyword,
            3 * 3 + 1
          ) ||
          calcRelevanceScoreArray(subsetFrameworkLikeSkills ?? [], uncompletedKeyword, 3 * 2 + 1) ||
          calcRelevanceScoreArray(subsetLanguageLikeSkills ?? [], uncompletedKeyword, 3 * 1 + 1) ||
          (personalYear &&
          sanitize(`Personal ${personalYear > 0.5 ? personalYear : "- 0.5"} yr.`).includes(
            uncompletedKeyword
          )
            ? 1
            : 0) ||
          (internshipYear &&
          sanitize(`Internship ${internshipYear > 0.5 ? internshipYear : "- 0.5"} yr.`).includes(
            uncompletedKeyword
          )
            ? 1
            : 0);
        if (relevanceScore === 0) {
          return [];
        }
        relevanceScoreToCount[MAX_RELEVANCE_SCORE] = relevanceScore;

        return [{ relevanceScoreToCount, skill }];
      })

      // Sort
      .sort(
        (a, b) =>
          // sort by relevance
          [...new Array(MAX_RELEVANCE_SCORE + 1).keys()].reduceRight(
            (acc, score) => acc || b.relevanceScoreToCount[score] - a.relevanceScoreToCount[score],
            0
          ) ||
          // sort by non-relevance-related factors
          TYPE_ORDER[b.skill.type] - TYPE_ORDER[a.skill.type] ||
          a.skill.name.localeCompare(b.skill.name)
      )

      // Convert to array
      .map(({ skill }) => skill)
  );
};

const sanitize = (s: string) => s.replace(/[.\s]+/, "").toLowerCase();

const calcRelevanceScore = (target: string, sanitizedKw: string, maxScore: number) => {
  const sanitizedTarget = sanitize(target);
  if (sanitizedTarget === sanitizedKw) {
    return maxScore;
  }
  if (sanitizedTarget.startsWith(sanitizedKw)) {
    return maxScore - 1;
  }
  if (sanitizedTarget.includes(sanitizedKw)) {
    return maxScore - 2;
  }
  return 0;
};
const calcRelevanceScoreArray = (targets: string[], sanitizedKw: string, maxScore: number) => {
  return targets.reduce(
    (acc, unsanitizedTarget) =>
      acc === maxScore
        ? acc
        : Math.max(acc, calcRelevanceScore(unsanitizedTarget, sanitizedKw, maxScore)),
    0
  );
};
