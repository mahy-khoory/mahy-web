export const UAE_COUNTRY_CODES = new Set(["UAE", "ARE"]);

export const isUAECountry = (countryCode) =>
  UAE_COUNTRY_CODES.has(String(countryCode || "").toUpperCase());

export const normalizeCountryRegionCode = (countryCode) => {
  const normalized = String(countryCode || "").toUpperCase();

  if (normalized === "UAE") {
    return "ARE";
  }

  return normalized;
};

export const getStateCountryCode = (countryCode) =>
  isUAECountry(countryCode)
    ? "UAE"
    : String(countryCode || "").toUpperCase();
