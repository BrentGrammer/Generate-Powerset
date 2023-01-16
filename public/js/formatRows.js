function _formatToCommaSeparatedString(set) {
  return set.join(", ");
}

function addCheckBoxToRow(rowString, rowIndex) {
  const name = `row-checkbox-${rowIndex + 1}`;
  return `<input type="checkbox" name=${name} />&nbsp; ${rowString}`;
}

function formatSubjectRowString(set, i) {
  return `${i + 1}: ${_formatToCommaSeparatedString(
    _highlightEveryOtherSubject(set)
  )}`;
}

function _highlightEveryOtherSubject(subjectList) {
  return subjectList.map((subject, i) =>
    i % 2 === 0 ? `<strong>${subject}</strong>` : subject
  );
}

export { addCheckBoxToRow, formatSubjectRowString };
