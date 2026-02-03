// Customer Type
export const CUSTOMER_TYPES = [
    { value: "organization", label: "Organization" },
    { value: "person", label: "Person" },
];

// Contract Types
export const CONTRACT_TYPES = [
    { value: "amc", label: "AMC" },
    { value: "warranty", label: "Warranty" },
    { value: "chargeable", label: "Chargeable" },
];

// Building Types
export const BUILDING_TYPES = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "industrial", label: "Industrial" },
];

// Product Categories
export const PRODUCT_CATEGORIES = [
    { value: "pump", label: "Pump" },
    { value: "ac", label: "AC" },
    { value: "motor", label: "Motor" },
    { value: "panel", label: "Panel" },
    { value: "pressure_vessel", label: "Pressure Vessel" },
    { value: "car", label: "Car" },
];

// Pump Symptoms
export const PUMP_SYMPTOMS = [
    { value: "not_starting", label: "Not starting" },
    { value: "low_pressure", label: "Low pressure" },
    { value: "no_flow", label: "No flow" },
    { value: "noise", label: "Noise" },
    { value: "vibration", label: "Vibration" },
    { value: "overheating", label: "Overheating" },
    { value: "leakage", label: "Leakage" },
    { value: "tripping", label: "Tripping" },
];

// Pump Observed Signs
export const PUMP_OBSERVED_SIGNS = [
    { value: "motor_runs_no_discharge", label: "Motor runs no discharge" },
    { value: "air_bubbles", label: "Air bubbles" },
    { value: "pressure_fluctuation", label: "Pressure fluctuation" },
    { value: "seal_leaking", label: "Seal leaking" },
    { value: "burnt_smell", label: "Burnt smell" },
];

// Pump Suspected Areas
export const PUMP_SUSPECTED_AREAS = [
    { value: "motor", label: "Motor" },
    { value: "impeller", label: "Impeller" },
    { value: "seal", label: "Seal" },
    { value: "bearing", label: "Bearing" },
    { value: "panel", label: "Panel" },
    { value: "electrical", label: "Electrical" },
    { value: "piping", label: "Piping" },
    { value: "not_sure", label: "Not sure" },
];

// AC Symptoms
export const AC_SYMPTOMS = [
    { value: "not_cooling", label: "Not cooling" },
    { value: "not_starting", label: "Not starting" },
    { value: "water_leakage", label: "Water leakage" },
    { value: "smell", label: "Smell" },
    { value: "noise", label: "Noise" },
    { value: "ice", label: "Ice" },
];

// AC Fault Areas
export const AC_FAULT_AREAS = [
    { value: "compressor", label: "Compressor" },
    { value: "pcb", label: "PCB" },
    { value: "gas", label: "Gas" },
    { value: "fan_motor", label: "Fan motor" },
    { value: "sensor", label: "Sensor" },
    { value: "drain", label: "Drain" },
];

// Car Vehicle Types
export const VEHICLE_TYPES = [
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "pickup", label: "Pickup" },
    { value: "van", label: "Van" },
    { value: "truck", label: "Truck" },
];

// Car Brands
export const CAR_BRANDS = [
    { value: "toyota", label: "Toyota" },
    { value: "nissan", label: "Nissan" },
    { value: "bmw", label: "BMW" },
    { value: "mercedes", label: "Mercedes" },
    { value: "audi", label: "Audi" },
    { value: "ford", label: "Ford" },
    { value: "other", label: "Other" },
];

// Fuel Types
export const FUEL_TYPES = [
    { value: "petrol", label: "Petrol" },
    { value: "diesel", label: "Diesel" },
    { value: "hybrid", label: "Hybrid" },
    { value: "electric", label: "Electric" },
];

// Transmission Types
export const TRANSMISSION_TYPES = [
    { value: "automatic", label: "Automatic" },
    { value: "manual", label: "Manual" },
];

// Car Symptoms
export const CAR_SYMPTOMS = [
    { value: "not_starting", label: "Not starting" },
    { value: "hard_starting", label: "Hard starting" },
    { value: "engine_noise", label: "Engine noise" },
    { value: "vibration", label: "Vibration" },
    { value: "overheating", label: "Overheating" },
    { value: "smoke", label: "Smoke" },
    { value: "poor_acceleration", label: "Poor acceleration" },
    { value: "stalling", label: "Stalling" },
    { value: "warning_light_on", label: "Warning light on" },
    { value: "ac_not_working", label: "AC not working" },
    { value: "brake_issue", label: "Brake issue" },
    { value: "steering_issue", label: "Steering issue" },
];

// Car Observed Signs
export const CAR_OBSERVED_SIGNS = [
    { value: "check_engine_light", label: "Check engine light" },
    { value: "oil_leak", label: "Oil leak" },
    { value: "coolant_leak", label: "Coolant leak" },
    { value: "brake_fluid_leak", label: "Brake fluid leak" },
    { value: "burning_smell", label: "Burning smell" },
    { value: "battery_warning", label: "Battery warning" },
    { value: "abs_light", label: "ABS light" },
    { value: "low_power", label: "Low power" },
    { value: "excessive_smoke", label: "Excessive smoke" },
];

// Car Noise Location
export const CAR_NOISE_LOCATIONS = [
    { value: "engine", label: "Engine" },
    { value: "front_wheels", label: "Front wheels" },
    { value: "rear_wheels", label: "Rear wheels" },
    { value: "underbody", label: "Underbody" },
    { value: "exhaust", label: "Exhaust" },
];

// Car Performance Issues
export const CAR_PERFORMANCE_ISSUES = [
    { value: "low_pickup", label: "Low pickup" },
    { value: "high_fuel_consumption", label: "High fuel consumption" },
    { value: "jerking", label: "Jerking" },
    { value: "gear_slipping", label: "Gear slipping" },
    { value: "delayed_response", label: "Delayed response" },
];

// Car Suspected Areas
export const CAR_SUSPECTED_AREAS = [
    { value: "engine", label: "Engine" },
    { value: "transmission", label: "Transmission" },
    { value: "battery", label: "Battery" },
    { value: "electrical", label: "Electrical" },
    { value: "brakes", label: "Brakes" },
    { value: "suspension", label: "Suspension" },
    { value: "steering", label: "Steering" },
    { value: "cooling_system", label: "Cooling system" },
    { value: "fuel_system", label: "Fuel system" },
    { value: "ac_system", label: "AC system" },
    { value: "exhaust", label: "Exhaust" },
    { value: "not_sure", label: "Not sure" },
];

// Car Warning Lights
export const CAR_WARNING_LIGHTS = [
    { value: "engine", label: "Engine" },
    { value: "abs", label: "ABS" },
    { value: "battery", label: "Battery" },
    { value: "oil", label: "Oil" },
    { value: "temperature", label: "Temperature" },
    { value: "airbag", label: "Airbag" },
    { value: "tpms", label: "TPMS" },
];

// Urgency Levels
export const URGENCY_LEVELS = [
    { value: "critical", label: "Critical" },
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
];

// Business Impact
export const BUSINESS_IMPACTS = [
    { value: "production_stop", label: "Production stop" },
    { value: "water_supply_affected", label: "Water supply affected" },
    { value: "customer_complaint", label: "Customer complaint" },
    { value: "comfort_only", label: "Comfort only" },
];

// Preferred Visit
export const PREFERRED_VISITS = [
    { value: "asap", label: "ASAP" },
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "later", label: "Later" },
];
