import { formatSubjectRowString, addCheckBoxToRow } from "./formatRows.js";

function buildSetRows(powerset) {
  const powersetList = powerset.map((set, i) =>
    addCheckBoxToRow(formatSubjectRowString(set, i), i)
  );

  return powersetList;
}

export { buildSetRows };
