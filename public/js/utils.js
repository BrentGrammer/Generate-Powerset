const removeLastComma = (str) => {
  let removed = str;
  console.log(str.slice(-1), 'str')
  const lastChar = str.slice(-1);
  if (lastChar === ",") {
    removed = str.slice(0, -1);
  }

  return removed;
};

export { removeLastComma };
