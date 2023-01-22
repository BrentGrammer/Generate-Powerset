import { renderPowerset, clearTable } from "./renderPowerset.js";
import { hideLoading, showLoading } from "./loading.js";
import { cleanInput } from "./cleanInput.js";
import { clearFilters, hideFilters, renderFilters } from "./filters.js";

document.addEventListener("DOMContentLoaded", function (_) {
  const $submitButton = document.getElementById("form-submit-button");
  // use event to show loading first before the browser runs batch long running update to render the table (in the case of long lists)
  $submitButton.addEventListener("mousedown", (e) => {
    hideFilters();
    clearFilters();
    clearTable();
    showLoading();
  });

  function calculatePowerset(subjectsList) {
    renderPowerset(subjectsList);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      const subjectsInput = document.getElementById("subjects-input");

      const subjects = cleanInput(subjectsInput.value);
      if (!subjects) return;

      const subjectsList = subjects.split(",");

      calculatePowerset(subjectsList);
      renderFilters(subjectsList);
    } catch (e) {
      console.error(e);
      alert("something went wrong.");
    } finally {
      hideLoading();
    }
  };

  const $form = document.getElementById("subjects-form");
  $form.addEventListener("submit", onSubmit);
});
