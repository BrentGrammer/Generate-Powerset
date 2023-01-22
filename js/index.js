import { renderPowerset, clearTable } from "./renderPowerset.js";
import { hideLoading, showLoading } from "./loading.js";
import { removeFilters, renderFilters } from "./filters.js";
import { addFiltersListener } from "./events.js";
import { getSubjects } from "./util.js";

document.addEventListener("DOMContentLoaded", function (_) {
  const $submitButton = document.getElementById("form-submit-button");
  // use event to show loading first before the browser runs batch long running update to render the table (in the case of long lists)
  $submitButton.addEventListener("mousedown", (e) => {
    removeFilters();
    clearTable();
    showLoading();
  });

  addFiltersListener((filters) => {
    clearTable();
    renderPowerset(getSubjects(), filters);
  });

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      const subjects = getSubjects();
      if (!subjects) return;

      renderFilters(subjects);
      renderPowerset(subjects);
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
