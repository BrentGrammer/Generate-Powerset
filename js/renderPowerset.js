import { buildSetRows } from "./buildSetRows.js";
import { genPowerset } from "./genPowerset.js";
import { LIMITS } from "./comboLimits.js";
import { includesFilters } from "./filters.js";

const $table = document.getElementById("combinations-table");
const $tbody = $table.getElementsByTagName("tbody")[0];

function _insertSubjectRow(rowContent) {
  // Insert a row at the end of table
  const $newRow = $tbody.insertRow();
  const $newCell = $newRow.insertCell();
  $newCell.innerHTML = rowContent;
}

const isNotRedundant = (set, subjects) => {
  return set.length !== 1 && set.length !== subjects.length;
};

function renderPowerset(subjects, filters = []) {
  const rawPowerset = genPowerset(subjects);
  let powerSet = rawPowerset.filter(
    (set) => isNotRedundant(set, subjects) && includesFilters(set, filters)
  );

  const subjectComboRows = buildSetRows(
    powerSet,
    LIMITS.showAllSubjectCombinations
  );

  subjectComboRows.forEach((rowContent) => {
    _insertSubjectRow(rowContent);
  });

  showTable();
}

function showTable() {
  $table.style.visibility = "visible";
}
function hideTable() {
  $table.style.visibility = "hidden";
}

function clearTable() {
  $tbody.innerHTML = "";
}

export { renderPowerset, clearTable, hideTable };
