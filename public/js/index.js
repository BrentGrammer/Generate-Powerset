import { renderSubjectCombinations } from "./renderSubjectCombos.js";

function calculatePowerset(event) {
  event.preventDefault();
  const subjectsInput = document.getElementById("subjects-input");

  const subjects = subjectsInput.value;
  const commaSeparated = subjects.split(",");

  renderSubjectCombinations(commaSeparated);
}

const form = document.getElementById("subjects-form");
form.addEventListener("submit", calculatePowerset);
