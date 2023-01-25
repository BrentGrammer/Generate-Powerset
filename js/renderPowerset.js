import { buildSetRows } from "./buildSetRows.js";
import { genPowerset } from "./genPowerset.js";

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

const includesFilters = (set, filters) => {
  const { selected, setting } = filters;
  if (selected.length === 0) {
    return true;
  }
  if (setting === "OR") return selected.some((filter) => set.includes(filter));

  return selected.every((filter) => set.includes(filter));
};

const limitMaxCombos = (set, limit) => (limit ? set.length <= limit : true);

function renderPowerset(
  subjects,
  filters = { setting: "AND", selected: [], limit: null }
) {
  const rawPowerset = genPowerset(subjects);
  let powerSet = rawPowerset.filter(
    (set) =>
      isNotRedundant(set, subjects) &&
      includesFilters(set, filters) &&
      limitMaxCombos(set, filters.limit)
  );

  const subjectComboRows = buildSetRows(powerSet);

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
