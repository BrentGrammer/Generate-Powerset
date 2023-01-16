import { formatSubjectRowString, addCheckBoxToRow } from "./formatRows.js";

function genSubjectComboRows(
  powerset,
  filterFn = FILTERS.showAllSubjectCombinations
) {
  const emtpySet = 1;

  console.log('starrt fenmsubjectcomrows', {powerset})

  const powersetList = powerset
    .slice(emtpySet)
    .filter(filterFn)
    .map((set, i) => addCheckBoxToRow(formatSubjectRowString(set, i), i));

    console.log({powersetList})

  return powersetList;
}

export { genSubjectComboRows };
