import { z } from "zod";

const yearRegex = /^\d{1,4}$/;

const isFutureDate = (date) => {
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const candidate = new Date(date);
  candidate.setHours(0, 0, 0, 0);
  return candidate > today;
};

export const complaintSchema = z
  .object({
    // Customer Information
    customerType: z.enum(["Organization", "Person"]),
    contactPerson: z.string().optional(),
    companyName: z.string().optional(),

    mobileNumber: z.string().min(1, "Mobile Number is required"),

    email: z.string().email("Enter a valid email").optional(),
    year: z
      .string()
      .optional()
      .refine((val) => !val || yearRegex.test(val), {
        message: "Year must be up to 4 digits",
      }),

    // Complaint Reference
    source: z.enum(["phone", "email", "website", "whatsapp", "walk-in"]),

    // Product / Service Details
    complaintType: z.string().min(1, "Complaint Type is required"),
    productCategory: z.string().min(1, "Product Category is required"),
    salesPerson: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    serialNo: z.string().optional(),
    invoiceNo: z.string().optional(),

    // Complaint Core
    problemDescription: z.string().min(1, "Problem Description is required"),
    incidentDate: z
      .date()
      .optional()
      .refine((val) => !val || !isFutureDate(val), {
        message: "Incident Date cannot be in the future",
      }),
    frequency: z
      .enum(["once", "intermittent", "frequent", "always"])
      .optional(),

    // Category & Severity
    issueCategory: z.string().min(1, "Issue Category is required"),
    severityLevel: z.enum(["critical", "high", "medium", "low"]),
    businessImpact: z.string().optional(),

    // Evidence
    photos: z.any().optional(),
    videos: z.any().optional(),
    documents: z.any().optional(),
    voiceNote: z.any().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.customerType === "Person" && !data.contactPerson) {
      ctx.addIssue({
        path: ["contactPerson"],
        message: "Contact Person is required when Person is selected",
        code: z.ZodIssueCode.custom,
      });
    }

    if (
      (data.customerType === "Organization" ||
        data.customerType === "Person") &&
      !data.companyName
    ) {
      ctx.addIssue({
        path: ["companyName"],
        message: "Company Name is required",
        code: z.ZodIssueCode.custom,
      });
    }
  });
