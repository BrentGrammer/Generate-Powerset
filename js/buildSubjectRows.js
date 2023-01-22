import { formatSubjectRowString, addCheckBoxToRow } from "./formatRows.js";

function buildSubjectRows(powerset, filterFn) {
  const emptySetIdx = 1;

  const powersetList = powerset
    .slice(emptySetIdx)
    .filter(filterFn)
    .map((set, i) => addCheckBoxToRow(formatSubjectRowString(set, i), i));

  return powersetList;
}

export { buildSubjectRows };
