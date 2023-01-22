import { dispatch } from "./events.js";
import { createCheckbox } from "./util.js";
import { Events } from "./events.js";

const $filters = document.getElementById("filters");
const $filtersSection = document.getElementById("filters-section");
const getFilterSettingOR = () => document.getElementById("filter-setting-OR");

/**
 * @returns string: 'AND' | 'OR'
 */
const getFilterSetting = () => {
  const $or = getFilterSettingOR();

  if ($or.checked === true) {
    return "OR";
  }
  return "AND";
};

const FILTER_SELECTION_CHECKBOX_CLASS = "filters-checkbox";

const resetFilterSettings = () => {
  getFilterSettingOR().checked = false;
};

const showFilters = () => {
  $filtersSection.style.visibility = "visible";
};
const hideFilters = () => {
  $filtersSection.style.visibility = "hidden";
};
const removeFilters = () => {
  removeFilterListeners();
  resetFilterSettings();
  $filters.innerHTML = "";
  hideFilters();
};

const emitFilters = (e) => {
  const filterSelections = $filters.querySelectorAll(
    `.${FILTER_SELECTION_CHECKBOX_CLASS}`
    );
    const setting = getFilterSetting();
    
    const selected = Array.from(filterSelections)
    .filter((i) => i.checked)
    .map((i) => i.value);
    
  dispatch(Events.FILTERS_CHANGE, { selected, setting });
};

const addFilterListeners = () => {
  const $checkboxes = document.querySelectorAll(
    ".filters-checkbox"
  );
  $checkboxes.forEach(function ($checkbox) {
    $checkbox.addEventListener("change", emitFilters);
  });
};

const removeFilterListeners = () => {
  const $checkboxes = document.querySelectorAll(
    ".filters-checkbox"
  );
  $checkboxes.forEach(function ($checkbox) {
    $checkbox.removeEventListener("change", emitFilters);
  });
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
