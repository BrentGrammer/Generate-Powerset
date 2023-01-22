const _removeLastComma = (str) => {
  let removed = str;

  const lastChar = str.slice(-1);
  if (lastChar === ",") {
    removed = str.slice(0, -1);
  }

  return removed;
};

const cleanInput = (input) => {
  let cleaned = input.trim();
  if (!cleaned) return undefined;

  cleaned = _removeLastComma(cleaned);
  return cleaned;
};

const getSubjects = () => {
  const subjectsInput = document.getElementById("subjects-input");
  const subjects = cleanInput(subjectsInput.value);
  if (!subjects) return undefined;

  const subjectsList = subjects.split(",");
  return subjectsList;
};

const createCheckbox = ({ containerEl, label, id, className = '' }) => {
  const $checkbox = document.createElement("input");
  $checkbox.type = "checkbox";
  $checkbox.name = id;
  $checkbox.value = label;
  $checkbox.id = id;
  $checkbox.classList.add(className);

  const $label = document.createElement("label");
  $label.htmlFor = id;
  $label.appendChild(document.createTextNode(label));

  const $container = document.createElement(containerEl);

  $container.appendChild($checkbox);
  $container.appendChild($label);

  return $container;
}

export { getSubjects, createCheckbox };
