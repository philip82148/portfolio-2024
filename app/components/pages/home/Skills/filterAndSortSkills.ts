import type { Skill } from "~/api/interface";

const MAX_RELEVANCE_SCORE = 5;
const TYPE_ORDER = {
  Language: 3,
  Framework: 2,
  Other: 1,
} as const satisfies Record<Skill["type"], number>;

export const filterAndSortSkills = (skills: Skill[], query: string) => {
  const sanitize = (s: string) => s.replaceAll(/[.\s]+/g, "").toLowerCase();
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
        const { name, type, tags, subsetFrameworkLikeSkills, subsetLanguageLikeSkills } = skill;
        // In targetsByLevel, the elements at the top have higher relevance scores.
        const targetsByLevel = [
          name.split(/\s+/).map(sanitize),
          [type].map(sanitize),
          tags.map((tag) => sanitize(`#${tag}`)),
          (subsetFrameworkLikeSkills ?? []).flatMap((skill) => skill.split(/\+s/).map(sanitize)),
          (subsetLanguageLikeSkills ?? []).flatMap((skill) => skill.split(/\+s/).map(sanitize)),
        ] as const;
        const NUM_TARGET_LEVELS = targetsByLevel.length satisfies typeof MAX_RELEVANCE_SCORE;
        const relevanceScoreToCount: number[] = new Array(MAX_RELEVANCE_SCORE + 1).fill(0);

        // Filter by complete keywords.
        for (const keyword of completeKeywords) {
          let found = false;
          let relevanceScore = NUM_TARGET_LEVELS - 1;
          for (const targets of targetsByLevel) {
            if (targets.includes(keyword)) {
              ++relevanceScoreToCount[relevanceScore];
              found = true;
              break;
            }
            relevanceScore--;
          }
          if (!found) {
            return [];
          }
        }
        if (!incompleteKeyword) {
          return [{ relevanceScoreToCount, skill }];
        }

        // Filter by incomplete keywords.
        type RelevanceFunc = (keyword: string, target: string) => boolean;
        // In relevanceFuncsByLevel, the elements at the top have higher relevance scores.
        const relevanceFuncsByLevel: RelevanceFunc[] = [
          (k, t) => t === k, // match
          (k, t) => t.startsWith(k), // starts with
          (k, t) => t.includes(k), // includes
        ];
        const NUM_FUNC_LEVELS = relevanceFuncsByLevel.length;

        // If found, set relevanceScore to relevanceScoreToCount[MAX_RELEVANCE_SCORE].
        // relevanceScore should be between 1 and (NUM_FUNC_LEVELS * NUM_TARGET_LEVELS).
        let relevanceScore = NUM_FUNC_LEVELS * NUM_TARGET_LEVELS;
        // Search from higher-level functions first.
        for (const relevanceFunc of relevanceFuncsByLevel) {
          // Search from higher-level targets first.
          for (const targets of targetsByLevel) {
            if (targets.some((target) => relevanceFunc(incompleteKeyword, target))) {
              // Found.
              relevanceScoreToCount[MAX_RELEVANCE_SCORE] = relevanceScore;
              return [{ relevanceScoreToCount, skill }];
            }
            relevanceScore--;
          }
        }
        return [];
      })

      // Sort
      .sort(
        (a, b) =>
          // Sort by relevance.
          [...new Array(MAX_RELEVANCE_SCORE + 1).keys()].reduceRight(
            (acc, score) => acc || b.relevanceScoreToCount[score] - a.relevanceScoreToCount[score],
            0
          ) ||
          // Sort by non-relevance-related factors.
          TYPE_ORDER[b.skill.type] - TYPE_ORDER[a.skill.type] ||
          a.skill.name.localeCompare(b.skill.name)
      )

      // Convert to array
      .map(({ skill }) => skill)
  );
};
