import { z } from "zod";

export const serviceRequestFormSchema = z
  .object({
    customerType: z.enum(["organization", "person"]),
    contactPerson: z.string().optional(),
    companyName: z.string().optional(),
    mobileCountryCode: z.string().default("+971")
      .optional()
      .refine((val) => val && val.length > 0, {
        message: "Country code required",
      }),
    mobileNumber: z.string().min(1, "Mobile number required"),
    email: z.string().email("Invalid email").optional().or(z.literal("")),

    contractType: z.string().optional(),
    contractExpiry: z.date().optional(),

    siteName: z.string().min(1, "Site name required"),
    siteAddress: z.string().min(1, "Site address required"),
    locationPin: z.string().optional(),
    buildingType: z
      .string()
      .optional()
      .refine((val) => val && val.length > 0, {
        message: "Building type required",
      }),

    productCategory: z
      .string()
      .optional()
      .refine((val) => val && val.length > 0, {
        message: "Product category required",
      }),
    brand: z.string().min(1, "Brand required"),
    model: z.string().optional(),
    installationDate: z.date().optional(),
    warrantyStatus: z.boolean().optional(),
    assetTag: z.string().optional(),


    pumpSymptoms: z.string().optional(),
    pumpObservedSigns: z.string().optional(),
    suctionPressure: z.number().optional(),
    dischargePressure: z.number().optional(),
    flowRate: z.number().optional(),
    voltageAvailable: z.number().optional(),
    phase: z.string().optional(),
    pumpRecentService: z.boolean().optional(),
    pumpPowerIssue: z.boolean().optional(),
    pumpSuspectedArea: z.string().optional(),

    acSymptoms: z.string().optional(),
    acErrorCode: z.string().optional(),
    compressorRunning: z.boolean().optional(),
    fanRunning: z.boolean().optional(),
    airflowWeak: z.boolean().optional(),
    roomTemp: z.number().optional(),
    setTemp: z.number().optional(),
    acFaultArea: z.string().optional(),

    vehicleType: z.string().optional(),
    plateNumber: z.string().optional(),
    carBrand: z.string().optional(),
    carModel: z.string().optional(),
    carYear: z.number().optional(),
    mileage: z.number().optional(),
    fuelType: z.string().optional(),
    transmission: z.string().optional(),
    vinNumber: z.string().optional(),

    carSymptoms: z.string().optional(),
    carObservedSigns: z.string().optional(),

    engineStarts: z.boolean().optional(),
    engineTemperature: z.number().optional(),
    batteryVoltage: z.number().optional(),
    fuelLevel: z.number().optional(),
    carRecentService: z.boolean().optional(),
    accidentHistory: z.boolean().optional(),

    noiseLocation: z.string().optional(),
    performanceIssues: z.string().optional(),
    carSuspectedArea: z.string().optional(),

    carErrorCode: z.string().optional(),
    warningLights: z.string().optional(),

    problemDescription: z.string().optional(),

    uploadPhotos: z.any().optional(),
    uploadVideo: z.any().optional(),
    voiceNote: z.any().optional(),
    errorScreenshot: z.any().optional(),

    urgency: z.string()
      .optional()
      .refine((val) => !!val, {
        message: "Urgency required",
      }),
    businessImpact: z.string()
      .optional()
      .refine((val) => !!val, {
        message: "Business Impact required",
      }),
    preferredVisit: z.string()
      .optional()
      .refine((val) => !!val, {
        message: "Preferred Visit required",
      }),
    additionalNotes: z.string()
      .optional()
      .refine((val) => !!val, {
        message: "Urgency required",
      }),
  })
  .superRefine((data, ctx) => {
    const isPerson = data.customerType === "person";
    const isOrganization = data.customerType === "organization";
    const isPump = data.productCategory === "pump";
    const isAC = data.productCategory === "ac";
    const isCar = data.productCategory === "car";
    const isOther = !isPump && !isAC && !isCar;

    // Contact Person required for Person type
    if (isPerson) {
      if (!data.contactPerson || data.contactPerson.trim().length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Contact person is required",
          path: ["contactPerson"],
        });
      }
    }

    // Company Name required for Organization type
    if (isOrganization) {
      if (!data.companyName || data.companyName.trim().length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Company name is required",
          path: ["companyName"],
        });
      }
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
    }

    // Problem Description required for non-Pump, non-AC, non-Car products
    if ((isOther || isCar)) {
      if (!data.problemDescription || data.problemDescription.trim().length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Problem description is required",
          path: ["problemDescription"],
        });
      }
    }
  });
