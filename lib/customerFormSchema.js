import { z } from "zod";
import { isUAECountry } from "@/lib/utils/country";
import {
  PASSPORT_NUMBER_MAX_LENGTH,
  PASSPORT_NUMBER_REGEX,
  PERSON_NAME_MIN_LENGTH,
  UAE_DIALING_CODE,
} from "@/lib/formConstants";

const today = new Date();
today.setHours(0, 0, 0, 0);

const requiredTrimmedString = (message) =>
  z.string({ required_error: message }).trim().min(1, message);

const optionalTrimmedString = () => z.string().trim().optional();

export const customerFormSchema = z
  .object({
    // Basic Details
    customerType: z.enum(["organization", "individual"]),
    classificationGroup: z.enum(["credit", "onetime"]).default("credit"),
    customerGroup: optionalTrimmedString(),
    currency: z.string().default("AED"),
    customerAccount: optionalTrimmedString(),

    // Tax & Compliance - Organization
    trnType: z.enum(["with_trn", "without_trn"]).optional(),
    trn: z
      .string()
      .optional()
      .transform((v) => (v ? v.replace(/\D/g, "").slice(0, 15) : v))
      .refine((v) => !v || /^\d{1,15}$/.test(v), {
        message: "TRN can be up to 15 digits",
      }),
    tradeLicense: optionalTrimmedString(),
    tlIssueDate: z.date().optional(),
    tlExpiryDate: z.date().optional(),
    tradeLicenseFile: z.any().optional(),
    companyName: optionalTrimmedString(),
    // companyName: z
    //   .string({ required_error: "Company name required" })
    //   .min(1, "Company name required"),
    // Tax & Compliance - Person (UAE)
    emiratesId: z
      .string()
      .optional()
      .refine((v) => !v || /^\d{1,15}$/.test(v), {
        message: "Emirates ID must be up to 15 digits",
      }),
    emiratesIdIssueDate: z.date().optional(),
    emiratesIdExpiryDate: z.date().optional(),
    emiratesIdFile: z.any().optional(),

    // Tax & Compliance - Person (Non-UAE)
    passportNumber: z
      .string()
      .optional()
      .refine((v) => !v || PASSPORT_NUMBER_REGEX.test(v), {
        message: `Passport number must be alphanumeric and up to ${PASSPORT_NUMBER_MAX_LENGTH} characters`,
      }),
    passportIssueDate: z.date().optional(),
    passportExpiryDate: z.date().optional(),
    passportFile: z.any().optional(),
    // fullName: z.string().optional(),
    firstName: optionalTrimmedString(),
    middleName: optionalTrimmedString(),
    lastNamePrefix: optionalTrimmedString(),
    lastName: optionalTrimmedString(),

    // Commercial Terms
    paymentTerms: optionalTrimmedString(),

    paymentMethod: optionalTrimmedString(),
    deliveryTerms: optionalTrimmedString(),
    deliveryMode: optionalTrimmedString(),
    salesTaxGroup: optionalTrimmedString(),
    taxExemptNumber: optionalTrimmedString(),

    // Business Details (Credit only)
    holdingCompany: z.boolean().default(false),
    companyChain: optionalTrimmedString(),
    vatRegistered: z.boolean().default(true),

    // Business Classification
    sourceCode: optionalTrimmedString(),
    lineOfBusiness: optionalTrimmedString(),
    segment: optionalTrimmedString(),
    subsegment: optionalTrimmedString(),

    // Address Information
    country: z.string().default("ARE"),
    city: requiredTrimmedString("City required"),
    zipPostalCode: z.string().optional(),
    makaniNo: z
      .string()
      .optional()
      .refine((v) => !v || /^\d{10}$/.test(v), {
        message: "Makani number must be exactly 10 digits",
      }),
    street: requiredTrimmedString("Street required"),
    addressBooks: optionalTrimmedString(),

    // Contact Information - Telephone
    telCountryCode: z.string().default("+971"),
    telAreaCode: optionalTrimmedString(),
    telephone: requiredTrimmedString("Telephone required").max(
      15,
      "Maxiumum character limit is 15",
    ),
    extension: optionalTrimmedString(),

    // Contact Information - Mobile
    mobileCountryCode: z.string().default("+971"),
    mobileAreaCode: optionalTrimmedString(),
    mobileNumber: requiredTrimmedString("Mobile number required").max(
      15,
      "Maxiumum character limit is 15",
    ),

    // Digital Contact
    fax: optionalTrimmedString(),
    email: requiredTrimmedString("Email required").email("Invalid email"),
    confirmEmail: requiredTrimmedString("Confirm email required").email(
      "Invalid email",
    ),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),

    // State
    state: optionalTrimmedString(),

    // Consent
    consent: z
      .boolean({ required_error: "You must agree to continue" })
      .refine((val) => val === true, {
        message: "You must agree to continue",
      }),
  })
  .superRefine((data, ctx) => {
    const isCredit = data.classificationGroup === "credit";
    const isOneTime = data.classificationGroup === "onetime";
    const isOrganization = data.customerType === "organization";
    const isPerson = data.customerType === "individual";
    const isUAE = isUAECountry(data.country);

    // OneTime + With TRN must be Organization only
    // OneTime + Without TRN allows Person
    if (isOneTime && isPerson && data.trnType === "with_trn") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Person type is only available for OneTime without TRN or Credit classification",
        path: ["customerType"],
      });
    }

    // TRN validation - must be 15 characters
    const showTrn = isOneTime
      ? data.trnType === "with_trn"
      : isCredit && data.vatRegistered && isOrganization;

    if (showTrn && data.trn) {
      const trn = String(data.trn).trim();
      if (!/^\d{15}$/.test(trn)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "TRN must be exactly 15 digits",
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
      if (!data.companyName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Customer Name Required",
          path: ["companyName"],
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

    if (data.telCountryCode === UAE_DIALING_CODE && !data.telAreaCode) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Telephone area code is required",
        path: ["telAreaCode"],
      });
    }

    if (data.mobileCountryCode === UAE_DIALING_CODE && !data.mobileAreaCode) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Mobile area code is required",
        path: ["mobileAreaCode"],
      });
    }

    const requirePersonNameFields =
      isPerson && (isCredit || (isOneTime && data.trnType === "without_trn"));

    // Person name validations
    if (requirePersonNameFields) {
      // if (!data.fullName || data.fullName.length < 2) {
      //     ctx.addIssue({
      //         code: z.ZodIssueCode.custom,
      //         message: "Full name is required",
      //         path: ["fullName"],
      //     });
      // }

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

      //   if (!data.lastNamePrefix || data.lastNamePrefix.length < 2) {
      //     ctx.addIssue({
      //       code: z.ZodIssueCode.custom,
      //       message: "last Name Prefix is required",
      //       path: ["lastNamePrefix"],
      //     });
      //   }

      if (
        !data.lastName ||
        data.lastName.length < PERSON_NAME_MIN_LENGTH
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "last Name is required",
          path: ["lastName"],
        });
      }
    }

    // Person validations (Credit only)
    if (isPerson && isCredit) {
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
        } else if (data.passportIssueDate > today) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passport issue date cannot be in the future",
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
