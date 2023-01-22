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

export { getSubjects };
