const NUM_SUBJECTS_PER_ROW = 4;
const MAX_COMBINATIONS = 4;

const LIMITS = {
  showXNumSubjectsPerRow: (set) => set.length === NUM_SUBJECTS_PER_ROW,
  limitMaxSubjectCombinations: (set) => set.length <= MAX_COMBINATIONS,
  showAllSubjectCombinations: (_set) => true,
};

export { LIMITS };
