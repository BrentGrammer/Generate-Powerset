import { buildSetRows } from "./buildSubjectCombos.js";
import { genPowerset } from "./genPowerset.js";
import { FILTERS } from "./subjectComboFilters.js";

const $tbody = document
  .getElementById("subject-table")
  .getElementsByTagName("tbody")[0];

function _insertSubjectRow(rowContent) {
  // Insert a row at the end of table
  const $newRow = $tbody.insertRow();
  const $newCell = $newRow.insertCell();
  $newCell.innerHTML = rowContent;
}

function renderPowerset(subjects) {
  const rawPowerset = genPowerset(subjects);
  const removedSingleEntries = rawPowerset.filter(
    (set) => set.length !== 1 && set.length !== subjects.length
  );

  const subjectComboRows = buildSetRows(
    removedSingleEntries,
    FILTERS.showAllSubjectCombinations
  );

  subjectComboRows.forEach((rowContent) => {
    _insertSubjectRow(rowContent);
  });
}

function clearTable() {
  $tbody.innerHTML = "";
}

export { renderPowerset, clearTable };
