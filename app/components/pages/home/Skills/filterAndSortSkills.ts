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

  // If query ends with space, all keywords are complete.
  // Otherwise, the last keyword is incomplete.
  let completeKeywords: string[] = [],
    incompleteKeyword: string = "";
  if (query.match(/\s+$/)) {
    completeKeywords = Array.from(new Set(allKeywords));
  } else {
    completeKeywords = Array.from(new Set(allKeywords.slice(0, -1)));
    incompleteKeyword = allKeywords.at(-1) ?? "";
  }

  return (
    skills
      // Filter
      .flatMap((skill) => {
        const relevanceScoreToCount: number[] = new Array(MAX_RELEVANCE_SCORE + 1).fill(0);

        // Filter by complete keywords
        const { name, type, tags, subsetFrameworkLikeSkills, subsetLanguageLikeSkills } = skill;
        for (const keyword of completeKeywords) {
          if ([...name.split(/\s+/), type].map(sanitize).includes(keyword)) {
            ++relevanceScoreToCount[3];
            continue;
          }
          if (tags.map((tag) => sanitize(`#${tag}`)).includes(keyword)) {
            ++relevanceScoreToCount[2];
            continue;
          }
          if (
            (subsetFrameworkLikeSkills ?? [])
              .flatMap((skill) => skill.split(/\+s/).map(sanitize))
              .includes(keyword)
          ) {
            ++relevanceScoreToCount[1];
            continue;
          }
          if (
            (subsetLanguageLikeSkills ?? [])
              .flatMap((skill) => skill.split(/\+s/).map(sanitize))
              .includes(keyword)
          ) {
            ++relevanceScoreToCount[0];
            continue;
          }
          return [];
        }
        if (!incompleteKeyword) {
          return [{ relevanceScoreToCount, skill }];
        }

        // Filter by incomplete keywords
        const { personalYear, internshipYear } = skill;
        const relevanceScore =
          calcRelevanceScore(name, incompleteKeyword, 3 * 5 + 1) ||
          calcRelevanceScore(type, incompleteKeyword, 3 * 4 + 1) ||
          calcRelevanceScoreArray(
            tags.map((tag) => `#${tag}`) ?? [],
            incompleteKeyword,
            3 * 3 + 1
          ) ||
          calcRelevanceScoreArray(subsetFrameworkLikeSkills ?? [], incompleteKeyword, 3 * 2 + 1) ||
          calcRelevanceScoreArray(subsetLanguageLikeSkills ?? [], incompleteKeyword, 3 * 1 + 1) ||
          (personalYear &&
          sanitize(`Personal ${personalYear > 0.5 ? personalYear : "- 0.5"} yr.`).includes(
            incompleteKeyword
          )
            ? 1
            : 0) ||
          (internshipYear &&
          sanitize(`Internship ${internshipYear > 0.5 ? internshipYear : "- 0.5"} yr.`).includes(
            incompleteKeyword
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

const sanitize = (s: string) => s.replaceAll(/[.\s]+/g, "").toLowerCase();

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
