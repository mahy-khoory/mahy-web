import { z } from "zod";

export const serviceRequestFormSchema = z.object({
    // Customer & Site Information
    customerType: z.enum(["organization", "person"]),
    contactPerson: z.string().optional(),
    companyName: z.string().optional(),
    mobileCountryCode: z.string().default("+971"),
    mobileNumber: z.string({ required_error: "Mobile number required" }).min(1, "Mobile number required"),
    email: z.string().email("Invalid email").optional().or(z.literal("")),
    contractType: z.string().optional(),
    contractExpiry: z.date().optional(),
    siteName: z.string({ required_error: "Site name required" }).min(1, "Site name required"),
    siteAddress: z.string({ required_error: "Site address required" }).min(1, "Site address required"),
    locationPin: z.string().optional(),
    buildingType: z.string({ required_error: "Building type required" }).min(1, "Building type required"),

    // Product Selection
    productCategory: z.string({ required_error: "Product category required" }).min(1, "Product category required"),
    brand: z.string({ required_error: "Brand required" }).min(1, "Brand required"),
    model: z.string().optional(),
    installationDate: z.date().optional(),
    warrantyStatus: z.boolean().optional(),
    assetTag: z.string().optional(),

    // Pump Diagnostics
    pumpSymptoms: z.array(z.string()).optional(),
    pumpObservedSigns: z.array(z.string()).optional(),
    suctionPressure: z.number().optional(),
    dischargePressure: z.number().optional(),
    flowRate: z.number().optional(),
    voltageAvailable: z.number().optional(),
    phase: z.string().optional(),
    pumpRecentService: z.boolean().optional(),
    pumpPowerIssue: z.boolean().optional(),
    pumpSuspectedArea: z.string().optional(),

    // AC Diagnostics
    acSymptoms: z.array(z.string()).optional(),
    acErrorCode: z.string().optional(),
    compressorRunning: z.boolean().optional(),
    fanRunning: z.boolean().optional(),
    airflowWeak: z.boolean().optional(),
    roomTemp: z.number().optional(),
    setTemp: z.number().optional(),
    acFaultArea: z.string().optional(),

    // Car Diagnostics - Basic Info
    vehicleType: z.string().optional(),
    plateNumber: z.string().optional(),
    carBrand: z.string().optional(),
    carModel: z.string().optional(),
    carYear: z.number().optional(),
    mileage: z.number().optional(),
    fuelType: z.string().optional(),
    transmission: z.string().optional(),
    vinNumber: z.string().optional(),

    // Car Diagnostics - Symptoms
    carSymptoms: z.array(z.string()).optional(),
    carObservedSigns: z.array(z.string()).optional(),

    // Car Diagnostics - Operating Conditions
    engineStarts: z.boolean().optional(),
    engineTemperature: z.number().optional(),
    batteryVoltage: z.number().optional(),
    fuelLevel: z.number().optional(),
    carRecentService: z.boolean().optional(),
    accidentHistory: z.boolean().optional(),

    // Car Diagnostics - Noise & Performance
    noiseLocation: z.string().optional(),
    performanceIssues: z.array(z.string()).optional(),
    carSuspectedArea: z.string().optional(),

    // Car Diagnostics - Error Codes
    carErrorCode: z.string().optional(),
    warningLights: z.array(z.string()).optional(),

    // Problem Description (for other products)
    problemDescription: z.string().optional(),

    // Media & Evidence
    uploadPhotos: z.any().optional(),
    uploadVideo: z.any().optional(),
    voiceNote: z.any().optional(),
    errorScreenshot: z.any().optional(),

    // Priority & Impact
    urgency: z.string({ required_error: "Urgency required" }).min(1, "Urgency required"),
    businessImpact: z.array(z.string()).min(1, "Business impact required"),
    preferredVisit: z.string({ required_error: "Preferred visit required" }).min(1, "Preferred visit required"),
    additionalNotes: z.string().optional(),
}).superRefine((data, ctx) => {
    const isPerson = data.customerType === "person";
    const isOrganization = data.customerType === "organization";
    const isPump = data.productCategory === "pump";
    const isAC = data.productCategory === "ac";
    const isCar = data.productCategory === "car";
    const isOther = !isPump && !isAC && !isCar;

    // Contact Person required for Person type
    if (isPerson && (!data.contactPerson || data.contactPerson.length < 1)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Contact person is required",
            path: ["contactPerson"],
        });
    }

    // Company Name required for Organization type
    if (isOrganization && (!data.companyName || data.companyName.length < 1)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Company name is required",
            path: ["companyName"],
        });
    }

    // Car-specific required fields
    if (isCar) {
        if (!data.vehicleType) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Vehicle type is required",
                path: ["vehicleType"],
            });
        }
        if (!data.plateNumber) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Plate number is required",
                path: ["plateNumber"],
            });
        }
        if (!data.carBrand) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Car brand is required",
                path: ["carBrand"],
            });
        }
        if (!data.carModel) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Model is required",
                path: ["carModel"],
            });
        }
        if (!data.carYear) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Year is required",
                path: ["carYear"],
            });
        }
        if (!data.fuelType) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Fuel type is required",
                path: ["fuelType"],
            });
        }
        if (!data.problemDescription) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Problem description is required",
                path: ["problemDescription"],
            });
        }
    }

    // Problem Description required for non-Pump, non-AC, non-Car products
    if (isOther && (!data.problemDescription || data.problemDescription.length < 1)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Problem description is required",
            path: ["problemDescription"],
        });
    }
});
