export const CUSTOMER_TYPES = [
    { value: "organization", label: "Organization" },
    { value: "individual", label: "Individual" },
];

export const CURRENCIES = [
    { value: "AED", label: "AED - UAE Dirham" },
    { value: "USD", label: "USD - US Dollar" },
    { value: "EUR", label: "EUR - Euro" },
    { value: "GBP", label: "GBP - British Pound" },
    { value: "SAR", label: "SAR - Saudi Riyal" },
];

export const VAT_TYPES = [
    { value: "with_trn", label: "With TRN" },
    { value: "without_trn", label: "Without TRN" },
];

export const PAYMENT_TERMS = [
    { value: "cash", label: "Cash" },
    { value: "30_days", label: "30 Days" },
    { value: "60_days", label: "60 Days" },
];

export const PAYMENT_METHODS = [
    { value: "cash", label: "Cash" },
    { value: "bank_transfer", label: "Bank Transfer" },
    { value: "cheque", label: "Cheque" },
];

export const DELIVERY_TERMS = [
    { value: "ex_works", label: "Ex-Works" },
    { value: "delivered", label: "Delivered" },
    { value: "pickup", label: "Pickup" },
];

export const DELIVERY_MODES = [
    { value: "company_transport", label: "Company Transport" },
    { value: "courier", label: "Courier" },
    { value: "customer_pickup", label: "Customer Pickup" },
];

export const COUNTRIES = [
    { value: "UAE", label: "United Arab Emirates" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "QA", label: "Qatar" },
    { value: "KW", label: "Kuwait" },
    { value: "BH", label: "Bahrain" },
    { value: "OM", label: "Oman" },
    { value: "IN", label: "India" },
    { value: "PK", label: "Pakistan" },
    { value: "PH", label: "Philippines" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
];

// Cities organized by country
export const CITIES_BY_COUNTRY = {
    UAE: [
        { value: "dubai", label: "Dubai" },
        { value: "abu_dhabi", label: "Abu Dhabi" },
        { value: "sharjah", label: "Sharjah" },
        { value: "ajman", label: "Ajman" },
        { value: "ras_al_khaimah", label: "Ras Al Khaimah" },
        { value: "fujairah", label: "Fujairah" },
        { value: "umm_al_quwain", label: "Umm Al Quwain" },
    ],
    SA: [
        { value: "riyadh", label: "Riyadh" },
        { value: "jeddah", label: "Jeddah" },
        { value: "mecca", label: "Mecca" },
        { value: "medina", label: "Medina" },
        { value: "dammam", label: "Dammam" },
        { value: "khobar", label: "Al Khobar" },
        { value: "dhahran", label: "Dhahran" },
        { value: "tabuk", label: "Tabuk" },
    ],
    QA: [
        { value: "doha", label: "Doha" },
        { value: "al_wakrah", label: "Al Wakrah" },
        { value: "al_khor", label: "Al Khor" },
        { value: "lusail", label: "Lusail" },
        { value: "al_rayyan", label: "Al Rayyan" },
        { value: "umm_salal", label: "Umm Salal" },
    ],
    KW: [
        { value: "kuwait_city", label: "Kuwait City" },
        { value: "hawalli", label: "Hawalli" },
        { value: "salmiya", label: "Salmiya" },
        { value: "farwaniya", label: "Farwaniya" },
        { value: "jahra", label: "Al Jahra" },
        { value: "ahmadi", label: "Ahmadi" },
    ],
    BH: [
        { value: "manama", label: "Manama" },
        { value: "muharraq", label: "Muharraq" },
        { value: "riffa", label: "Riffa" },
        { value: "hamad_town", label: "Hamad Town" },
        { value: "isa_town", label: "Isa Town" },
        { value: "sitra", label: "Sitra" },
    ],
    OM: [
        { value: "muscat", label: "Muscat" },
        { value: "salalah", label: "Salalah" },
        { value: "sohar", label: "Sohar" },
        { value: "nizwa", label: "Nizwa" },
        { value: "sur", label: "Sur" },
        { value: "ibri", label: "Ibri" },
    ],
    IN: [
        { value: "mumbai", label: "Mumbai" },
        { value: "delhi", label: "New Delhi" },
        { value: "bangalore", label: "Bangalore" },
        { value: "hyderabad", label: "Hyderabad" },
        { value: "chennai", label: "Chennai" },
        { value: "kolkata", label: "Kolkata" },
        { value: "pune", label: "Pune" },
        { value: "ahmedabad", label: "Ahmedabad" },
        { value: "jaipur", label: "Jaipur" },
        { value: "surat", label: "Surat" },
    ],
    PK: [
        { value: "karachi", label: "Karachi" },
        { value: "lahore", label: "Lahore" },
        { value: "islamabad", label: "Islamabad" },
        { value: "rawalpindi", label: "Rawalpindi" },
        { value: "faisalabad", label: "Faisalabad" },
        { value: "multan", label: "Multan" },
        { value: "peshawar", label: "Peshawar" },
        { value: "quetta", label: "Quetta" },
    ],
    PH: [
        { value: "manila", label: "Manila" },
        { value: "quezon_city", label: "Quezon City" },
        { value: "davao", label: "Davao City" },
        { value: "cebu", label: "Cebu City" },
        { value: "makati", label: "Makati" },
        { value: "pasig", label: "Pasig" },
        { value: "taguig", label: "Taguig" },
        { value: "antipolo", label: "Antipolo" },
    ],
    GB: [
        { value: "london", label: "London" },
        { value: "birmingham", label: "Birmingham" },
        { value: "manchester", label: "Manchester" },
        { value: "glasgow", label: "Glasgow" },
        { value: "liverpool", label: "Liverpool" },
        { value: "leeds", label: "Leeds" },
        { value: "edinburgh", label: "Edinburgh" },
        { value: "bristol", label: "Bristol" },
    ],
    US: [
        { value: "new_york", label: "New York" },
        { value: "los_angeles", label: "Los Angeles" },
        { value: "chicago", label: "Chicago" },
        { value: "houston", label: "Houston" },
        { value: "phoenix", label: "Phoenix" },
        { value: "philadelphia", label: "Philadelphia" },
        { value: "san_antonio", label: "San Antonio" },
        { value: "san_diego", label: "San Diego" },
        { value: "dallas", label: "Dallas" },
        { value: "san_francisco", label: "San Francisco" },
    ],
};

// Keep UAE_CITIES for backwards compatibility
export const UAE_CITIES = CITIES_BY_COUNTRY.UAE;

export const ADDRESS_TYPES = [
    { value: "billing", label: "Billing" },
    { value: "delivery", label: "Delivery" },
    { value: "both", label: "Both" },
];

export const COUNTRY_CODES = [
    { value: "+971", label: "+971 (UAE)" },
    { value: "+966", label: "+966 (SA)" },
    { value: "+974", label: "+974 (QA)" },
    { value: "+965", label: "+965 (KW)" },
    { value: "+973", label: "+973 (BH)" },
    { value: "+968", label: "+968 (OM)" },
    { value: "+91", label: "+91 (IN)" },
    { value: "+92", label: "+92 (PK)" },
    { value: "+63", label: "+63 (PH)" },
    { value: "+44", label: "+44 (UK)" },
    { value: "+1", label: "+1 (US)" },
];

// Helper function to get cities for a country
export function getCitiesForCountry(countryCode) {
    return CITIES_BY_COUNTRY[countryCode] || [];
}
