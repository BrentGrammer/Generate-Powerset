const $filters = document.getElementById("filters");
const $filtersSection = document.getElementById("filters-section");

const showFilters = () => {
  $filtersSection.style.visibility = "visible";
};
const hideFilters = () => {
  $filtersSection.style.visibility = "hidden";
};
const clearFilters = () => {
  $filters.innerHTML = "";
};

const _genCheckboxListItem = (item) => {
  const id = `filter-checkbox-${item}`;
  const $checkbox = document.createElement("input");
  $checkbox.type = "checkbox";
  $checkbox.name = id;
  $checkbox.value = item;
  $checkbox.id = id;

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
  showFilters();
};

export { clearFilters, renderFilters, hideFilters };
