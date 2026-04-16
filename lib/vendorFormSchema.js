import { z } from "zod";
import { isUAECountry } from "@/lib/utils/country";
import {
  PASSPORT_NUMBER_MAX_LENGTH,
  PASSPORT_NUMBER_REGEX,
  PERSON_NAME_MIN_LENGTH,
} from "@/lib/formConstants";

const today = new Date();
today.setHours(0, 0, 0, 0);

const requiredTrimmedString = (message) =>
  z.string({ required_error: message }).trim().min(1, message);

const optionalTrimmedString = () => z.string().trim().optional();

export const vendorFormSchema = z
  .object({
    // Basic Details
    vendorType: z.enum(["organization", "person"]),
    currency: z.string().default("AED"),
    vendorClassificationGroup: z
      .enum(["onetime", "regular"])
      .default("onetime"),
    termsOfPayment: optionalTrimmedString(),
    deliveryTerms: optionalTrimmedString(),
    deliveryMode: requiredTrimmedString("Mode of delivery required"),
    salesTaxGroup: optionalTrimmedString(),
    taxExemptNumber: optionalTrimmedString(),
    lineOfBusiness: optionalTrimmedString(),
    segment: optionalTrimmedString(),
    subsegment: optionalTrimmedString(),

    // Organization specific fields
    trnType: z.enum(["with_trn", "without_trn"]).default("with_trn"),
    tradeLicense: optionalTrimmedString(),
    tradeLicenseIssueDate: z.date().optional(),
    tradeLicenseExpiryDate: z.date().optional(),
    tradeLicenseFile: z.any().optional(),
    companyName: optionalTrimmedString(),
    methodOfPayment: optionalTrimmedString(),
    trn: z
      .string()
      .optional()
      .transform((v) => (v ? v.replace(/\D/g, "") : v))
      .refine((v) => !v || /^\d{15}$/.test(v), {
        message: "TRN must be exactly 15 digits",
      }),
    // Regular organization additional fields
    holdingCompany: z.boolean().default(false),
    companyChain: optionalTrimmedString(),
    makaniNumber: z
      .string()
      .optional()
      .refine((v) => !v || /^\d{10}$/.test(v), {
        message: "Makani number must be exactly 10 digits",
      }),

    // Person specific fields - Passport (non-UAE)
    passportNumber: z
      .string()
      .optional()
      .refine((v) => !v || PASSPORT_NUMBER_REGEX.test(v), {
        message: `Passport number must be alphanumeric and up to ${PASSPORT_NUMBER_MAX_LENGTH} characters`,
      }),
    passportDateOfIssue: z.date().optional(),
    passportDateOfExpiry: z.date().optional(),
    passportFile: z.any().optional(),

    // Person specific fields - Emirates ID (UAE)
    emiratesId: z
      .string()
      .optional()
      .refine((v) => !v || /^\d{1,15}$/.test(v), {
        message: "Emirates ID must be up to 15 digits",
      }),
    emiratesIdIssueDate: z.date().optional(),
    emiratesIdExpiryDate: z.date().optional(),
    emiratesIdFile: z.any().optional(),

    // Person name fields
    firstName: optionalTrimmedString(),
    middleName: optionalTrimmedString(),
    // lastNamePrefix: z.string().optional(),
    lastName: optionalTrimmedString(),
    lastNamePrefix: optionalTrimmedString(),

    // Address Information - Organization
    countryRegion: z.string().default("ARE"),
    city: requiredTrimmedString("City required"),
    zipPostalCode: requiredTrimmedString("ZIP/Postal code required"),
    addressBooks: optionalTrimmedString(),
    street: requiredTrimmedString("Street required"),

    // Address Information - Person additional fields
    postBox: optionalTrimmedString(),
    state: optionalTrimmedString(),
    streetNumber: optionalTrimmedString(),
    district: optionalTrimmedString(),
    buildingComplement: optionalTrimmedString(),
    county: optionalTrimmedString(),

    // Contact Information - Telephone
    telCountryCode: z.string().optional(),
    telAreaCode: optionalTrimmedString(),
    telNumber: requiredTrimmedString("Tel number required").max(
      15,
      "Maxiumum character limit is 15",
    ),
    extension: optionalTrimmedString(),

    // Contact Information - Mobile
    mobileCountryCode: z
      .string({ required_error: "Country code required" })
      .min(1, "Country code required"),
    mobileAreaCode: optionalTrimmedString(),
    mobileNumber: requiredTrimmedString("Mobile number required").max(
      15,
      "Maxiumum character limit is 15",
    ),

    // Digital Contact
    fax: optionalTrimmedString(),
    emailAddress: requiredTrimmedString("Email required").email("Invalid email"),
    confirmEmail: requiredTrimmedString("Confirm email required").email(
      "Invalid email",
    ),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),

    // Consent
    consent: z.literal(true, {
      errorMap: () => ({ message: "You must agree to continue" }),
    }),
  })
  .superRefine((data, ctx) => {
    const isOrganization = data.vendorType === "organization";
    const isPerson = data.vendorType === "person";
    const isUAE = isUAECountry(data.countryRegion);
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
      if (!data.companyName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Company name is required",
          path: ["companyName"],
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
      if (
        !data.firstName ||
        data.firstName.length < PERSON_NAME_MIN_LENGTH
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "First name is required",
          path: ["firstName"],
        });
      }
      if (
        !data.lastName ||
        data.lastName.length < PERSON_NAME_MIN_LENGTH
      ) {
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
        } else if (data.emiratesIdIssueDate > today) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Emirates ID issue date cannot be in the future",
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
        } else if (data.passportDateOfIssue > today) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passport issue date cannot be in the future",
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
