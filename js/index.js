import { renderPowerset, clearTable, hideTable } from "./renderPowerset.js";
import { hideLoading, showLoading } from "./loading.js";
import { removeFilters, renderFilters } from "./filters.js";
import { addFiltersListener } from "./events.js";
import { getSubjects } from "./util.js";

document.addEventListener("DOMContentLoaded", function (_) {
  const $submitButton = document.getElementById("form-submit-button");
  // use event to show loading first before the browser runs batch long running update to render the table (in the case of long lists)
  $submitButton.addEventListener("mousedown", (e) => {
    // TODO: bug: if user is scrolled down after getting results and clicks get combos again, then the loading... stays since the button moves
    removeFilters();
    clearTable();
    showLoading();
  });

  addFiltersListener((filters) => {
    clearTable();
    renderPowerset(getSubjects(), filters);
  });

  const MINIMUM_NUM_SUBJECTS = 3;
  const MAX_NUM_SUBJECTS = 15;

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      const subjects = getSubjects();
      if (!subjects || subjects.length < MINIMUM_NUM_SUBJECTS) {
        hideTable();
        alert(
          `Must enter at least ${MINIMUM_NUM_SUBJECTS} items to get a combinations list.`
        );
        return;
      }

      if (subjects.length > MAX_NUM_SUBJECTS) {
        alert(
          `You have entered ${subjects.length} items.  Maximum number of items allowed is ${MAX_NUM_SUBJECTS}.  This is to prevent browser crashes and memory overload.`
        );
        hideTable();
        return;
      }

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
