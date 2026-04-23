import { companyDescriptions } from "@/constants/companyDescriptions";

const sectorCompanyNames = {
  trading: [
    "MAHY Khoory Trading",
    "Pure Energy Construction LLC",
  ],
  manufacturing: [
    "Union Paper Mills",
    "Al Dhafra Paper Manufacturing",
    "National Paper Industries",
    "Union Sustainable Packaging Solutions",
    "Senan Industry LLC",
    "Union Wood Works",
    "Al Khoory Engineering",
  ],
  "engineering-technical-services": [
    "Al Khoory Engineering",
  ],
  "waste-management": [
    "Recyclable Waste Management Division",
    "Solid Waste Management Division",
    "Al Dhafra Waste Collection",
    "Around Continent Waste Collection",
    "Etihad Waste Management",
    "Clean Earth LLC",
  ],
  automotive: [
    "MAHY Khoory Automotive",
    "MAHY Khoory Motors",
  ],
  "energy-sustainability-consulting": [
    "Creative Solutions Green Building Consultancy",
  ],
  "transportation-logistics": [
    "Greenland Transport",
  ],
  "food-and-beverage": [
    "Market Restaurant and Caf\u00C3\u00A9",
    "Pearl Marina Hotel Apartments",
  ],
};

const companiesByName = new Map(
  companyDescriptions.map((company) => [company.name, company]),
);

export function getCompaniesBySector(sector) {
  const companyNames = sectorCompanyNames[sector] || [];

  return companyNames
    .map((companyName) => companiesByName.get(companyName))
    .filter(Boolean);
}

export { sectorCompanyNames };
