import { dispatch } from "./events.js";

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

const _genCheckboxListItem = (item) => {
  const id = `filter-checkbox-${item}`;
  const $checkbox = document.createElement("input");
  $checkbox.type = "checkbox";
  $checkbox.name = id;
  $checkbox.value = item;
  $checkbox.id = id;
  $checkbox.classList.add(FILTER_CHECKBOX_CLASS);

  const $label = document.createElement("label");
  $label.htmlFor = id;
  $label.appendChild(document.createTextNode(item));

  const $listItem = document.createElement("li");

  $listItem.appendChild($checkbox);
  $listItem.appendChild($label);

  return $listItem;
};

const renderFilters = (subjectsList) => {
  const $fragment = document.createDocumentFragment();

  const $filterListItems = subjectsList.map((i) => _genCheckboxListItem(i));
  $filterListItems.forEach(($filter) => $fragment.append($filter));

  $filters.appendChild($fragment);
  addFilterListeners();
  showFilters();
};

export { removeFilters, renderFilters, includesFilters };
