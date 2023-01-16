const $tbody = document
  .getElementById("subject-table")
  .getElementsByTagName("tbody")[0];

function insertSubjectRow(rowContent) {
  // Insert a row at the end of table
  const $newRow = $tbody.insertRow();
  const $newCell = $newRow.insertCell();
  $newCell.innerHTML = rowContent;
}

export { insertSubjectRow };
