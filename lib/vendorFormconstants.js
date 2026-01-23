// Vendor-specific constants

export const VENDOR_TYPES = [
    { value: "organization", label: "Organization" },
    { value: "person", label: "Person" },
];

export const VENDOR_CLASSIFICATION_GROUPS = [
    { value: "onetime", label: "OneTime" },
    { value: "regular", label: "Regular" },
    { value: "preferred", label: "Preferred" },
    { value: "strategic", label: "Strategic" },
];

export const TRN_TYPES = [
    { value: "with_trn", label: "With TRN" },
    { value: "without_trn", label: "Without TRN" },
];

export const SALES_TAX_GROUPS = [
    { value: "vat", label: "VAT" },
    { value: "exempt", label: "Exempt" },
    { value: "zero_rated", label: "Zero Rated" },
];

export const LINE_OF_BUSINESS = [
    { value: "manufacturing", label: "Manufacturing" },
    { value: "trading", label: "Trading" },
    { value: "services", label: "Services" },
    { value: "construction", label: "Construction" },
    { value: "retail", label: "Retail" },
    { value: "it", label: "Information Technology" },
    { value: "logistics", label: "Logistics" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "other", label: "Other" },
];

export const SEGMENTS = [
    { value: "enterprise", label: "Enterprise" },
    { value: "sme", label: "SME" },
    { value: "startup", label: "Startup" },
    { value: "government", label: "Government" },
];

export const SUBSEGMENTS = [
    { value: "tier1", label: "Tier 1" },
    { value: "tier2", label: "Tier 2" },
    { value: "tier3", label: "Tier 3" },
];

export const NAME_PREFIXES = [
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
    { value: "ms", label: "Ms." },
    { value: "dr", label: "Dr." },
    { value: "prof", label: "Prof." },
];

export const ZIP_POSTAL_CODES = [
    { value: "00000", label: "00000" },
    { value: "11111", label: "11111" },
    { value: "12345", label: "12345" },
    { value: "54321", label: "54321" },
];

export const STATES = [
    { value: "abu_dhabi", label: "Abu Dhabi" },
    { value: "dubai", label: "Dubai" },
    { value: "sharjah", label: "Sharjah" },
    { value: "ajman", label: "Ajman" },
    { value: "ras_al_khaimah", label: "Ras Al Khaimah" },
    { value: "fujairah", label: "Fujairah" },
    { value: "umm_al_quwain", label: "Umm Al Quwain" },
];

export const DISTRICTS = [
    { value: "central", label: "Central" },
    { value: "north", label: "North" },
    { value: "south", label: "South" },
    { value: "east", label: "East" },
    { value: "west", label: "West" },
];

export const COUNTIES = [
    { value: "county1", label: "County 1" },
    { value: "county2", label: "County 2" },
    { value: "county3", label: "County 3" },
];

export const ADDRESS_BOOKS = [
    { value: "default", label: "Default" },
    { value: "billing", label: "Billing" },
    { value: "shipping", label: "Shipping" },
    { value: "headquarters", label: "Headquarters" },
];
