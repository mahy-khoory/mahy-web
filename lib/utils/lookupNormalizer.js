export const normalizeLookup = (rows, config) => {
  const {
    value,
    label,
    description,
    fallbackDescription = "",
    buildLabel,
    idKey = "id",
  } = config;

  return (rows ?? []).map((row, index) => {
    const normalizedValue =
      typeof value === "function" ? value(row) : row?.[value];
    const normalizedLabel = buildLabel
      ? buildLabel(row)
      : typeof label === "function"
        ? label(row)
        : row?.[label];
    const normalizedDescription = description
      ? typeof description === "function"
        ? description(row)
        : row?.[description]
      : fallbackDescription;
    const sourceId = row?.[idKey];

    return {
      id: sourceId ?? `${normalizedValue ?? normalizedLabel ?? "lookup"}-${index}`,
      key: `${sourceId ?? normalizedValue ?? normalizedLabel ?? "lookup"}-${index}`,
      value: normalizedValue,
      label: normalizedLabel,
      description: normalizedDescription,
    };
  });
};
