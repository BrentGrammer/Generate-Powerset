import {
  renderSubjectCombinations,
  clearTable,
} from "./renderSubjectCombos.js";
import { hideLoading, showLoading } from "./loading.js";

const $submitButton = document.getElementById("form-submit-button");
// use event to show loading first before the browser runs batch long running update to render the table (in the case of long lists)
$submitButton.addEventListener("mousedown", (e) => {
  clearTable();
  showLoading();
});

function calculatePowerset(event) {
  event.preventDefault();
  try {
    const subjectsInput = document.getElementById("subjects-input");
    const subjects = subjectsInput.value;
    console.log({subjects})
    const trimmedSubjects = subjects.trim();
    if (!trimmedSubjects) return;

    const subjectsList = trimmedSubjects.split(",");
    renderSubjectCombinations(subjectsList);
  } catch (e) {
    console.error(e);
    alert("something went wrong.");
  } finally {
    hideLoading();
  }
}

const form = document.getElementById("subjects-form");
form.addEventListener("submit", calculatePowerset);
