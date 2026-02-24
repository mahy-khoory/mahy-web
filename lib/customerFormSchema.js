import { z } from "zod";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const customerFormSchema = z.object({
    // Basic Details
    customerType: z.enum(["organization", "individual"]),
    classificationGroup: z.enum(["credit", "onetime"]).default("credit"),
    customerGroup: z.string().optional(),
    currency: z.string().default("AED"),
    customerAccount: z.string().optional(),

    // Tax & Compliance - Organization
    trnType: z.enum(["with_trn", "without_trn"]).optional(),
    trn: z.string().optional(),
    tradeLicense: z.string().optional(),
    tlIssueDate: z.date().optional(),
    tlExpiryDate: z.date().optional(),
    tradeLicenseFile: z.any().optional(),
    companyName: z.string().optional(),

    // Tax & Compliance - Person (UAE)
    emiratesId: z.string().optional(),
    emiratesIdIssueDate: z.date().optional(),
    emiratesIdExpiryDate: z.date().optional(),
    emiratesIdFile: z.any().optional(),

    // Tax & Compliance - Person (Non-UAE)
    passportNumber: z.string().optional(),
    passportIssueDate: z.date().optional(),
    passportExpiryDate: z.date().optional(),
    passportFile: z.any().optional(),
    // fullName: z.string().optional(),
     firstName: z.string().optional(),
    middleName: z.string().optional(),
    lastNamePrefix: z.string().optional(),
    lastName: z.string().optional(),


    // Commercial Terms
    paymentTerms: z.string({ required_error: "Payment terms required" }).min(1, "Payment terms required"),
    paymentMethod: z.string({ required_error: "Payment method required" }).min(1, "Payment method required"),
    deliveryTerms: z.string({ required_error: "Delivery terms required" }).min(1, "Delivery terms required"),
    deliveryMode: z.string({ required_error: "Delivery mode required" }).min(1, "Delivery mode required"),
    salesTaxGroup: z.string().optional(),
    taxExemptNumber: z.string().optional(),

    // Business Details (Credit only)
    holdingCompany: z.boolean().default(false),
    companyChain: z.string().optional(),
    vatRegistered: z.boolean().default(true),

    // Business Classification
    sourceCode: z.string().optional(),
    lineOfBusiness: z.string().optional(),
    segment: z.string().optional(),
    subsegment: z.string().optional(),

    // Address Information
    country: z.string().default("UAE"),
    city: z.string({ required_error: "City required" }).min(1, "City required"),
    zipPostalCode: z.string().optional(),
    makaniNo: z.string().optional(),
    street: z.string({ required_error: "Street required" }).min(1, "Street required"),
    addressBooks: z.string().optional(),

    // Contact Information - Telephone
    telCountryCode: z.string().default("+971"),
    telephone: z.string({ required_error: "Telephone required" }).min(1, "Telephone required"),
    extension: z.string().optional(),

    // Contact Information - Mobile
    mobileCountryCode: z.string().default("+971"),
    mobileNumber: z.string({ required_error: "Mobile number required" }).min(1, "Mobile number required"),

    // Digital Contact
    fax: z.string().optional(),
    email: z.string({ required_error: "Email required" }).email("Invalid email"),
    confirmEmail: z.string({ required_error: "Confirm email required" }).email("Invalid email"),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),

    // State
    state: z.string().optional(),


    // Consent
    consent: z.boolean({ required_error: "You must agree to continue" }).refine((val) => val === true, {
        message: "You must agree to continue",
    }),
}).superRefine((data, ctx) => {
    const isCredit = data.classificationGroup === "credit";
    const isOneTime = data.classificationGroup === "onetime";
    const isOrganization = data.customerType === "organization";
    const isPerson = data.customerType === "individual";
    const isUAE = data.country === "UAE";

    // OneTime + With TRN must be Organization only
    // OneTime + Without TRN allows Person
    if (isOneTime && isPerson && data.trnType === "with_trn") {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Person type is only available for OneTime without TRN or Credit classification",
            path: ["customerType"],
        });
    }

    // TRN validation - must be 15 characters
    const showTrn = isOneTime ? data.trnType === "with_trn" : (isCredit && data.vatRegistered && isOrganization);
    if (showTrn && data.trn) {
        if (data.trn.length < 15) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "TRN must be at least 15 characters",
                path: ["trn"],
            });
        }
    }

    // TRN required check
    if (isOneTime && data.trnType === "with_trn" && !data.trn) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "TRN is required",
            path: ["trn"],
        });
    }

    // Organization validations
    if (isOrganization) {
        if (!data.tradeLicense || data.tradeLicense.length < 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Trade license is required",
                path: ["tradeLicense"],
            });
        }

        // Trade license expiry date validation - cannot be in the past
        if (data.tlExpiryDate && data.tlExpiryDate < today) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Trade license expiry date cannot be in the past",
                path: ["tlExpiryDate"],
            });
        }

        // Credit + Organization + VAT Registered requires TRN
        if (isCredit && data.vatRegistered && !data.trn) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "TRN is required when VAT registered",
                path: ["trn"],
            });
        }
    }

    // Person validations (Credit only)
    if (isPerson && isCredit) {
        if (!data.fullName || data.fullName.length < 2) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Full name is required",
                path: ["fullName"],
            });
        }

        // UAE Person - Emirates ID
        if (isUAE) {
            if (!data.emiratesId) {
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
        } else {
            // Non-UAE Person - Passport
            if (!data.passportNumber) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Passport number is required",
                    path: ["passportNumber"],
                });
            }
            if (!data.passportIssueDate) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Passport issue date is required",
                    path: ["passportIssueDate"],
                });
            }
            if (!data.passportExpiryDate) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Passport expiry date is required",
                    path: ["passportExpiryDate"],
                });
            }
        }
    }

    // Email confirmation
    if (data.email !== data.confirmEmail) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Emails do not match",
            path: ["confirmEmail"],
        });
    }
});