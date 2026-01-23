import { z } from "zod";

export const vendorFormSchema = z.object({
    // Basic Details
    vendorType: z.enum(["organization", "person"]),
    currency: z.string().default("AED"),
    vendorClassificationGroup: z.string().optional(),
    termsOfPayment: z.string().optional(),
    deliveryTerms: z.string().optional(),
    deliveryMode: z.string({ required_error: "Mode of delivery required" }).min(1, "Mode of delivery required"),
    salesTaxGroup: z.string().optional(),
    taxExemptNumber: z.string().optional(),
    lineOfBusiness: z.string().optional(),
    segment: z.string().optional(),
    subsegment: z.string().optional(),

    // Organization specific fields
    trnType: z.string().optional(),
    tradeLicense: z.string().optional(),
    tradeLicenseIssueDate: z.date().optional(),
    tradeLicenseExpiryDate: z.date().optional(),
    tradeLicenseFile: z.any().optional(),
    companyName: z.string().optional(),
    methodOfPayment: z.string().optional(),
    trn: z.string().optional(),

    // Person specific fields - Passport (non-UAE)
    passportNumber: z.string().optional(),
    passportDateOfIssue: z.date().optional(),
    passportDateOfExpiry: z.date().optional(),
    passportFile: z.any().optional(),

    // Person specific fields - Emirates ID (UAE)
    emiratesId: z.string().optional(),
    emiratesIdIssueDate: z.date().optional(),
    emiratesIdExpiryDate: z.date().optional(),
    emiratesIdFile: z.any().optional(),

    // Person name fields
    firstName: z.string().optional(),
    middleName: z.string().optional(),
    lastNamePrefix: z.string().optional(),
    lastName: z.string().optional(),

    // Address Information - Organization
    countryRegion: z.string().default("UAE"),
    city: z.string({ required_error: "City required" }).min(1, "City required"),
    zipPostalCode: z.string({ required_error: "ZIP/Postal code required" }).min(1, "ZIP/Postal code required"),
    addressBooks: z.string().optional(),
    street: z.string({ required_error: "Street required" }).min(1, "Street required"),

    // Address Information - Person additional fields
    postBox: z.string().optional(),
    state: z.string().optional(),
    streetNumber: z.string().optional(),
    district: z.string().optional(),
    buildingComplement: z.string().optional(),
    county: z.string().optional(),

    // Contact Information - Telephone
    telCountryCode: z.string().optional(),
    telNumber: z.string({ required_error: "Tel number required" }).min(1, "Tel number required"),
    extension: z.string().optional(),

    // Contact Information - Mobile
    mobileCountryCode: z.string({ required_error: "Country code required" }).min(1, "Country code required"),
    mobileNumber: z.string({ required_error: "Mobile number required" }).min(1, "Mobile number required"),

    // Digital Contact
    fax: z.string().optional(),
    emailAddress: z.string({ required_error: "Email required" }).email("Invalid email"),
    confirmEmail: z.string({ required_error: "Confirm email required" }).email("Invalid email"),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),
}).superRefine((data, ctx) => {
    // Organization validations
    if (data.vendorType === "organization") {
        if (data.trnType === "with_trn" && (!data.trn || data.trn.length < 1)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "TRN is required",
                path: ["trn"],
            });
        }
        if (!data.tradeLicense || data.tradeLicense.length < 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Trade license is required",
                path: ["tradeLicense"],
            });
        }
        if (!data.methodOfPayment || data.methodOfPayment.length < 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Method of payment is required",
                path: ["methodOfPayment"],
            });
        }
    }

    // Person validations
    if (data.vendorType === "person") {
        // Name validations
        if (!data.firstName || data.firstName.length < 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "First name is required",
                path: ["firstName"],
            });
        }
        if (!data.middleName || data.middleName.length < 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Middle name is required",
                path: ["middleName"],
            });
        }
        if (!data.lastNamePrefix || data.lastNamePrefix.length < 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Last name prefix is required",
                path: ["lastNamePrefix"],
            });
        }
        if (!data.lastName || data.lastName.length < 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Last name is required",
                path: ["lastName"],
            });
        }

        // UAE Person - Emirates ID validations
        if (data.countryRegion === "UAE") {
            if (!data.emiratesId || data.emiratesId.length < 1) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Emirates ID is required",
                    path: ["emiratesId"],
                });
            }
            if (!data.emiratesIdIssueDate) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Emirates ID issue date is required",
                    path: ["emiratesIdIssueDate"],
                });
            }
            if (!data.emiratesIdExpiryDate) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Emirates ID expiry date is required",
                    path: ["emiratesIdExpiryDate"],
                });
            }
        }

        // Non-UAE Person - Passport validations
        if (data.countryRegion !== "UAE") {
            if (!data.passportNumber || data.passportNumber.length < 1) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Passport number is required",
                    path: ["passportNumber"],
                });
            }
            if (!data.passportDateOfIssue) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Date of issue is required",
                    path: ["passportDateOfIssue"],
                });
            }
            if (!data.passportDateOfExpiry) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Date of expiry is required",
                    path: ["passportDateOfExpiry"],
                });
            }
        }
    }

    // Email confirmation
    if (data.emailAddress !== data.confirmEmail) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Emails do not match",
            path: ["confirmEmail"],
        });
    }
});
