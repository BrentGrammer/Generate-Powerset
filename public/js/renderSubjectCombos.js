import { genSubjectComboRows } from "./buildSubjectCombos.js";
import { genPowerset } from "./powerset.js";
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

  const subjectComboRows = genSubjectComboRows(
    rawPowerset,
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
