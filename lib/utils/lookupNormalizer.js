export const normalizeLookup = (rows, config) => {
  const {
    value,
    label,
    description,
    fallbackDescription = "",
    buildLabel,
    idKey = "id" 
  } = config;

  return rows.map((row) => ({
    id: row?.[idKey] ?? index,
    value: typeof value === "function" ? value(row) : row[value],
    label: buildLabel
      ? buildLabel(row)
      : typeof label === "function"
      ? label(row)
      : row[label],
    description: description
      ? typeof description === "function"
        ? description(row)
        : row[description]
      : fallbackDescription,
  }));
};