import { renderSubjectCombinations } from "./renderSubjectCombos.js";

function calculatePowerset(event) {
  event.preventDefault();
  const subjectsInput = document.getElementById("subjects-input");
  const subjects = subjectsInput.value;
  if (!subjects) return;

  const subjectsList = subjects.split(",");
  renderSubjectCombinations(subjectsList);
}

const form = document.getElementById("subjects-form");
form.addEventListener("submit", calculatePowerset);
