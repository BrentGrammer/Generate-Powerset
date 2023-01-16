import { formatSubjectRowString, addCheckBoxToRow } from "./formatRows.js";

function genSubjectComboRows(
  powerset,
  filterFn = FILTERS.showAllSubjectCombinations
) {
  const emtpySet = 1;

  const powersetList = powerset
    .slice(emtpySet)
    .filter(filterFn)
    .map((set, i) => addCheckBoxToRow(formatSubjectRowString(set, i), i));

  return powersetList;
}

export { genSubjectComboRows };
