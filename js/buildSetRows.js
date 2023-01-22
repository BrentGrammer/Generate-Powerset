import { formatSubjectRowString, addCheckBoxToRow } from "./formatRows.js";

function buildSetRows(powerset, filterFn) {
  const powersetList = powerset
    .filter(filterFn)
    .map((set, i) => addCheckBoxToRow(formatSubjectRowString(set, i), i));

  return powersetList;
}

export { buildSetRows };
