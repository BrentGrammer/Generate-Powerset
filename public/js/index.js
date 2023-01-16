import { renderSubjectCombinations, clearTable } from "./renderSubjectCombos.js";

function calculatePowerset(event) {
  event.preventDefault();
  clearTable();
  const subjectsInput = document.getElementById("subjects-input");
  const subjects = subjectsInput.value;
  const trimmedSubjects = subjects.trim();
  if (!trimmedSubjects) return;

  const subjectsList = trimmedSubjects.split(",");
  renderSubjectCombinations(subjectsList);
}

const form = document.getElementById("subjects-form");
form.addEventListener("submit", calculatePowerset);
