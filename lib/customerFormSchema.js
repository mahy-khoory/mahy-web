import { z } from "zod";

export const customerFormSchema = z.object({
    // Basic Details
    customerType: z.enum(["organization", "individual"]),
    companyName: z.string().optional(),
    fullName: z.string().optional(),
    currency: z.string().default("AED"),

    // Tax & Compliance - Organization
    vatRegistration: z.enum(["with_trn", "without_trn"]).optional(),
    vatTrnNumber: z.string().optional(),
    tradeLicenseNo: z.string().optional(),
    tlIssueDate: z.date().optional(),
    tlExpiryDate: z.date().optional(),
    tradeLicenseFile: z.any().optional(),

    // Tax & Compliance - Individual Non-UAE
    passportNumber: z.string().optional(),
    passportIssueDate: z.date().optional(),
    passportExpiryDate: z.date().optional(),
    passportFile: z.any().optional(),

    // Tax & Compliance - Individual UAE
    emiratesId: z.string().optional(),
    emiratesIdIssueDate: z.date().optional(),
    emiratesIdExpiryDate: z.date().optional(),
    emiratesIdFile: z.any().optional(),
//customer classification


    // Commercial Terms
    paymentTerms: z.string({ required_error: "Payment terms required" }).min(1, "Payment terms required"),
    paymentMethod: z.string({ required_error: "Payment method required" }).min(1, "Payment method required"),
    deliveryTerms: z.string().optional(),
    deliveryMode: z.string().optional(),

    // Address Information
    country: z.string().default("UAE"),
    city: z.string({ required_error: "City required" }).min(1, "City required"),
    poBox: z.string({ required_error: "PO Box required" }).min(1, "PO Box required"),
    makaniNo: z.string().optional(),
    fullAddress: z.string().min(1, "Address required"),
    addressType: z.string().optional(),

    // Contact Information - Telephone
    telCountryCode: z.string().default("+971"),
    telephone: z.string().min(1, "Telephone required"),
    extension: z.string().optional(),

    // Contact Information - Mobile
    mobileCountryCode: z.string().default("+971"),
    mobileNumber: z.string().min(1, "Mobile number required"),

    // Digital Contact
    email: z.string().email("Invalid email"),
    confirmEmail: z.string().email("Invalid email"),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),
    fax: z.string().optional(),

    // Consent
    consent: z.literal(true, {
        errorMap: () => ({ message: "You must agree to continue" }),
    }),
}).superRefine((data, ctx) => {
    // Organization validations
    if (data.customerType === "organization") {
        if (!data.companyName || data.companyName.length < 2) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Company name is required",
                path: ["companyName"],
            });
        }
        if (!data.tlExpiryDate) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Trade License expiry date is required",
                path: ["tlExpiryDate"],
            });
        }
        if (data.vatRegistration === "with_trn" && !data.vatTrnNumber) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "VAT TRN Number is required",
                path: ["vatTrnNumber"],
            });
        }
    }

    // Individual validations
    if (data.customerType === "individual") {
        if (!data.fullName || data.fullName.length < 2) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Full name is required",
                path: ["fullName"],
            });
        }

        // Non-UAE individual
        if (data.country !== "UAE") {
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

        // UAE individual
        if (data.country === "UAE") {
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
