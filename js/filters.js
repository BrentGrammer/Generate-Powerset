import { dispatch } from "./events.js";
import { createCheckbox } from "./util.js";
import { Events } from "./events.js";

const FILTER_SELECTION_CHECKBOX_CLASS = "filters-checkbox";

const $filters = document.getElementById("filters");
const $filtersSection = document.getElementById("filters-section");
const $or = document.getElementById("filter-setting-OR");
const $combosLimit = document.getElementById("combo-limit-input");
const $setFilters = document.getElementById("apply-filters-button");
const $resetFilters = document.getElementById("reset-filters-button");
const getAllFilterCheckboxes = () => {
  return Array.from(
    $filters.querySelectorAll(`.${FILTER_SELECTION_CHECKBOX_CLASS}`)
  );
};

/**
 * @returns string: 'AND' | 'OR'
 */
const getFilterSetting = () => {
  if ($or.checked === true) {
    return "OR";
  }
  return "AND";
};

const resetFilters = () => {
  $or.checked = false;
  $combosLimit.value = "";

  const filterSelections = getAllFilterCheckboxes();

  for (let i = 0; i < filterSelections.length; i++) {
    const box = filterSelections[i];
    box.checked = false;
  }
};

const showFilters = () => {
  $filtersSection.style.visibility = "visible";
};
const hideFilters = () => {
  $filters.innerHTML = "";
  $filtersSection.style.visibility = "hidden";
};
const removeFilters = () => {
  removeFilterListeners();
  resetFilters();
  hideFilters();
};

const MINIMUM_LIMIT = 2;

const emitFilters = (e) => {
  let limit = $combosLimit.value;

  if (limit !== "" && Number(limit) < MINIMUM_LIMIT) {
    alert(
      `Please enter a max combination limit value of ${MINIMUM_LIMIT} or more.`
    );
    return;
  }
  const filterSelections = getAllFilterCheckboxes();
  const setting = getFilterSetting();

  const selected = filterSelections
    .filter((i) => i.checked)
    .map((i) => i.value);

  dispatch(Events.FILTERS_CHANGE, { selected, setting, limit: Number(limit) });
};

const addFilterListeners = () => {
  $setFilters.addEventListener("click", emitFilters);
  $resetFilters.addEventListener("click", resetFilters);
};

const removeFilterListeners = () => {
  $setFilters.removeEventListener("click", emitFilters);
  $resetFilters.removeEventListener("click", resetFilters);
};

const _createCheckboxListItem = (item) => {
  return createCheckbox({
    id: `filter-checkbox-${item}`,
    label: item,
    className: `${FILTER_SELECTION_CHECKBOX_CLASS} filters-checkbox`,
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

export { removeFilters, renderFilters };
