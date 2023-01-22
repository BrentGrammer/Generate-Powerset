import { dispatch } from "./events.js";
import { createCheckbox } from "./util.js";

const $filters = document.getElementById("filters");
const $filtersSection = document.getElementById("filters-section");

const FILTER_CHECKBOX_CLASS = "filters-checkbox";

const showFilters = () => {
  $filtersSection.style.visibility = "visible";
};
const hideFilters = () => {
  $filtersSection.style.visibility = "hidden";
};
const removeFilters = () => {
  removeFilterListeners();
  $filters.innerHTML = "";
  hideFilters();
};

const includesFilters = (set, filters) => {
  if (filters.length === 0) {
    return true;
  }
  return filters.some((filter) => set.includes(filter));
};

const emitFilters = (e) => {
  const checkboxes = document.querySelectorAll(`.${FILTER_CHECKBOX_CLASS}`);

  const filters = Array.from(checkboxes)
    .filter((i) => i.checked)
    .map((i) => i.value);

  dispatch("filterschange", filters);
};

const addFilterListeners = () => {
  const checkboxes = document.querySelectorAll(`.${FILTER_CHECKBOX_CLASS}`);

  checkboxes.forEach(function ($checkbox) {
    $checkbox.addEventListener("change", emitFilters);
  });
};

const removeFilterListeners = () => {
  const checkboxes = document.querySelectorAll(`.${FILTER_CHECKBOX_CLASS}`);

  checkboxes.forEach(function ($checkbox) {
    $checkbox.removeEventListener("change", emitFilters);
  });
};

const _createCheckboxListItem = (item) => {
  return createCheckbox({
    id: `filter-checkbox-${item}`,
    label: item,
    className: FILTER_CHECKBOX_CLASS,
    containerEl: "li",
  });
};

const renderFilters = (subjectsList) => {
  const $fragment = document.createDocumentFragment();

  const $filterListItems = subjectsList.map((i) => _createCheckboxListItem(i));
  $filterListItems.forEach(($filter) => $fragment.append($filter));

  $filters.appendChild($fragment);
  addFilterListeners();
  showFilters();
};

export { removeFilters, renderFilters, includesFilters };
