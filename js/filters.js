const $filters = document.getElementById("filters");

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

const renderFilterSelection = (subjectsList) => {
  const $fragment = document.createDocumentFragment();

  const $filterListItems = subjectsList.map((i) => _genCheckboxListItem(i));
  $filterListItems.forEach(($filter) => $fragment.append($filter));

  $filters.appendChild($fragment);
};

export { clearFilters, renderFilterSelection };
