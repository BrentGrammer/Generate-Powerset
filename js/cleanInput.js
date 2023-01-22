const removeLastComma = (str) => {
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

  cleaned = removeLastComma(cleaned);
  return cleaned;
};

export { cleanInput };
