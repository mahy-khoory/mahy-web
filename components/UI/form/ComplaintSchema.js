import { z } from "zod";

const phoneRegexUAE = /^(?:\+971|971|0)?5\d{8}$/;
const phoneRegexInternational = /^\+?[1-9]\d{6,14}$/;

export const complaintSchema = z
  .object({
    // Customer Information
    customerType: z.enum(["Organization", "Person"]),
    contactPerson: z.string().optional(),
    companyName: z.string().optional(),

    mobileNumber: z
      .string()
      .min(1, "Mobile Number is required")
      .refine(
        (val) => phoneRegexUAE.test(val) || phoneRegexInternational.test(val),
        { message: "Enter a valid mobile number" },
      ),

    email: z.string().email("Enter a valid email").optional(),

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
    incidentDate: z.date().optional(),
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
