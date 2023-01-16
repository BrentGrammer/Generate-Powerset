import { genSubjectComboRows } from "./buildSubjectCombos.js";
import { insertSubjectRow } from "./renderSubjectCombos.js";
import { genPowerset } from "./powerset.js";

function onSubmit(event) {
  event.preventDefault();
  const subjectsInput = document.getElementById("subjects-input");

  const subjects = subjectsInput.value;
  const commaSeparated = subjects.split(",");

  renderSubjectCombinations(commaSeparated);
}

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

const NUM_SUBJECTS_PER_ROW = 4;
const MAX_COMBINATIONS = 4;

const FILTERS = {
  showXNumSubjectsPerRow: (set) => set.length === NUM_SUBJECTS_PER_ROW,
  limitMaxSubjectCombinations: (set) => set.length <= MAX_COMBINATIONS,
  showAllSubjectCombinations: (_set) => true,
};

function renderSubjectCombinations(subjects) {
  const rawPowerset = genPowerset(subjects);

  const subjectComboRows = genSubjectComboRows(
    rawPowerset,
    FILTERS.showAllSubjectCombinations
  );

  subjectComboRows.forEach((rowContent) => {
    insertSubjectRow(rowContent);
  });
}
