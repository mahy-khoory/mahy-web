import { z } from "zod";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const vendorFormSchema = z
  .object({
    // Basic Details
    vendorType: z.enum(["organization", "person"]),
    currency: z.string().default("AED"),
    vendorClassificationGroup: z
      .enum(["onetime", "regular"])
      .default("onetime"),
    termsOfPayment: z.string().optional(),
    deliveryTerms: z.string().optional(),
    deliveryMode: z
      .string({ required_error: "Mode of delivery required" })
      .min(1, "Mode of delivery required"),
    salesTaxGroup: z.string().optional(),
    taxExemptNumber: z.string().optional(),
    lineOfBusiness: z.string().optional(),
    segment: z.string().optional(),
    subsegment: z.string().optional(),

    // Organization specific fields
    trnType: z.enum(["with_trn", "without_trn"]).default("with_trn"),
    tradeLicense: z.string().optional(),
    tradeLicenseIssueDate: z.date().optional(),
    tradeLicenseExpiryDate: z.date().optional(),
    tradeLicenseFile: z.any().optional(),
    companyName: z.string().optional(),
    methodOfPayment: z.string().optional(),
    trn: z
      .string()
      .optional()
      .transform((v) => (v ? v.replace(/\D/g, "") : v))
      .refine((v) => !v || /^\d{15}$/.test(v), {
        message: "TRN must be exactly 15 digits",
      }),
    // Regular organization additional fields
    holdingCompany: z.boolean().default(false),
    companyChain: z.string().optional(),
    makaniNumber: z.string().optional(),

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
    // lastNamePrefix: z.string().optional(),
    lastName: z.string().optional(),

    // Address Information - Organization
    countryRegion: z.string().default("UAE"),
    city: z.string({ required_error: "City required" }).min(1, "City required"),
    zipPostalCode: z
      .string({ required_error: "ZIP/Postal code required" })
      .min(1, "ZIP/Postal code required"),
    addressBooks: z.string().optional(),
    street: z
      .string({ required_error: "Street required" })
      .min(1, "Street required"),

    // Address Information - Person additional fields
    postBox: z.string().optional(),
    state: z.string().optional(),
    streetNumber: z.string().optional(),
    district: z.string().optional(),
    buildingComplement: z.string().optional(),
    county: z.string().optional(),

    // Contact Information - Telephone
    telCountryCode: z.string().optional(),
    telNumber: z
      .string({ required_error: "Tel number required" })
      .min(1, "Tel number required"),
    extension: z.string().optional(),

    // Contact Information - Mobile
    mobileCountryCode: z
      .string({ required_error: "Country code required" })
      .min(1, "Country code required"),
    mobileNumber: z
      .string({ required_error: "Mobile number required" })
      .min(1, "Mobile number required"),

    // Digital Contact
    fax: z.string().optional(),
    emailAddress: z
      .string({ required_error: "Email required" })
      .email("Invalid email"),
    confirmEmail: z
      .string({ required_error: "Confirm email required" })
      .email("Invalid email"),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),

    // Consent
    consent: z.literal(true, {
      errorMap: () => ({ message: "You must agree to continue" }),
    }),
  })
  .superRefine((data, ctx) => {
    const isOrganization = data.vendorType === "organization";
    const isPerson = data.vendorType === "person";
    const isUAE = data.countryRegion === "UAE";
    const showMethodOfPayment = data.trnType === "with_trn";
    // Organization validations
    if (isOrganization) {
      // TRN validation - must be 15 characters when provided
      if (data.trnType === "with_trn") {
        if (data.trnType === "with_trn") {
          if (!data.trn || data.trn.length < 1) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "TRN is required",
              path: ["trn"],
            });
          }
        } else if (data.trn.length < 15) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "TRN must be at least 15 characters",
            path: ["trn"],
          });
        }
      }
      if (!data.tradeLicense || data.tradeLicense.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Trade license is required",
          path: ["tradeLicense"],
        });
      }
      if (data.tradeLicenseExpiryDate && data.tradeLicenseExpiryDate < today) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Trade license expiry date cannot be in the past",
          path: ["tradeLicenseExpiryDate"],
        });
      }

      // Method of payment only required when TRN type is "with_trn"
      if (
        showMethodOfPayment &&
        (!data.methodOfPayment || data.methodOfPayment.length < 1)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Method of payment is required",
          path: ["methodOfPayment"],
        });
      }
    }

    // Person validations
    if (isPerson) {
      // Check if any name field is filled
      const hasFirstName = data.firstName && data.firstName.length > 0;
      const hasMiddleName = data.middleName && data.middleName.length > 0;
      // const hasLastNamePrefix =
      //   data.lastNamePrefix && data.lastNamePrefix.length > 0;
      const hasLastName = data.lastName && data.lastName.length > 0;
      const anyNameFilled =
        hasFirstName || hasMiddleName || hasLastName;

      // If no name field is filled, all are required
      if (!anyNameFilled) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "First name is required",
          path: ["firstName"],
        });
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Middle name is required",
          path: ["middleName"],
        });
        // ctx.addIssue({
        //   code: z.ZodIssueCode.custom,
        //   message: "Last name prefix is required",
        //   path: ["lastNamePrefix"],
        // });
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Last name is required",
          path: ["lastName"],
        });
      }

      // UAE Person - Emirates ID validations
      if (isUAE) {
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
      if (!isUAE) {
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
