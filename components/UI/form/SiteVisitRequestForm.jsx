"use client";

import React, { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormSection } from "@/components/form/FormSection";
import { InputField, TextareaField } from "@/components/form/InputField";
import { DatePickerField } from "@/components/form/DatePickerField";
import { FileUploadField } from "@/components/form/FileUploadField";
import { FormField } from "@/components/form/FormField";
import {
  AnimatedGroup,
  AnimatedGroupItem,
} from "@/components/form/AnimatedField";
import Button from "../Button";
import { TimePickerField } from "./TimePickerField";

// If you already have your own Button component, replace this import with yours.
// This import matches your existing shadcn-like setup used by DatePicker/FileUpload.

/** ---------- Options (exactly as provided) ---------- */
const SECTORS = [
  "Trading & Distribution",
  "Engineering",
  "Manufacturing",
  "Logistics",
  "Energy",
  "Hospitality",
  "Automotive",
  "Other",
];

const COUNTRIES = ["UAE", "KSA", "Oman", "Qatar", "Bahrain", "Kuwait", "Other"];

const SITE_TYPES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
];

const NATURE_OF_REQUIREMENT = [
  "Inspection",
  "Survey",
  "Installation",
  "Maintenance",
  "Repair",
  "Consultation",
];

const URGENCY_LEVELS = ["Normal", "High", "Critical"];

const HEAR_ABOUT = [
  "Google",
  "Social Media",
  "Referral",
  "Existing Client",
  "Other",
];

/** ---------- Validation (exactly per your sheet) ---------- */
// - Required: Company Name, Contact Person, Email Address (validated), Site Location,
//   Brief Description of Requirement, Consent (required), Submit button is just UI.
// - Alternative Contact Number: optional, but "with validation" (basic phone format).
const phoneRegex = /^[+]?[\d\s()-]{7,20}$/;
const phoneRegexUAE = /^(?:\+971|971|0)?5\d{8}$/;
const phoneRegexInternational = /^\+?[1-9]\d{6,14}$/;

const schema = z.object({
  // Company Information
  companyName: z.string().min(1, "Company Name is required"),
  sector: z.string().optional(),
  companyAddress: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),

  // Contact Person
  contactPerson: z.string().min(1, "Contact Person is required"),
  jobTitle: z.string().optional(),
  emailAddress: z
    .string()
    .min(1, "Email Address is required")
    .email("Enter a valid email"),
  mobileNumber: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val || phoneRegexUAE.test(val) || phoneRegexInternational.test(val),
      {
        message: "Enter a valid mobile number (UAE or international format)",
      },
    ),

  alternativeContactNumber: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val || phoneRegexUAE.test(val) || phoneRegexInternational.test(val),
      {
        message:
          "Enter a valid alternative contact number (UAE or international format)",
      },
    ),
  // Site Details
  siteLocation: z.string().min(1, "Site Location is required"),
  typeOfSite: z.string().optional(),
  // natureOfRequirement: z.array(z.string()).optional(),
  natureOfRequirement: z.string().optional(),

  preferredVisitDate: z.date().optional(),
  preferredVisitTime: z
    .object({
      hours: z.number(),
      minutes: z.number(),
      seconds: z.number(),
      formatted: z.string(),
    })
    .optional(),
  urgencyLevel: z.enum(["Normal", "High", "Critical"]).optional(),

  // Technical Information
  briefDescription: z.string().min(1, "Brief Description is required"),
  existingSystem: z.string().optional(),
  safetyRequirements: z.string().optional(),
  attachFile: z.any().optional(),

  // Consent & Submission
  howDidYouHear: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required" }),
  }),
});

const defaultValues = {
  companyName: "",
  sector: "",
  companyAddress: "",
  city: "",
  country: "",

  contactPerson: "",
  jobTitle: "",
  emailAddress: "",
  mobileNumber: "",
  alternativeContactNumber: "",

  siteLocation: "",
  typeOfSite: "",
  // natureOfRequirement: [],
  natureOfRequirement: "",

  preferredVisitDate: undefined,
  preferredVisitTime: "",
  urgencyLevel: "Normal",

  briefDescription: "",
  existingSystem: "",
  safetyRequirements: "",
  attachFile: null,

  howDidYouHear: "",
  consent: false,
};

export default function SiteVisitRequestForm() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onTouched",
  });

  // const selectedNature = watch("natureOfRequirement") || [];

  const onSubmit = async (values) => {
    // Replace with your API call
    // Example:
    // const formData = new FormData();
    // Object.entries(values).forEach(([k,v]) => { ... });
    // await fetch("/api/site-visit", { method:"POST", body: formData });

    console.log("SITE VISIT REQUEST VALUES:", values);

    // Optional UX: you can replace with your toast if you use react-toastify
    alert("Site visit request submitted successfully!");
  };

  // const natureToggle = (item) => {
  //   const current = new Set(selectedNature);
  //   if (current.has(item)) current.delete(item);
  //   else current.add(item);
  //   setValue("natureOfRequirement", Array.from(current), {
  //     shouldValidate: true,
  //   });
  // };

  const selectClass =
    "w-full h-10 mt-1 bg-gray-50 border border-gray-200 rounded-md px-3 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300";

  const boxClass =
    "w-full mt-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm";

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[26px] sm:text-[32px] font-semibold text-gray-900">
            Site Visit Request
          </h1>
          {/* <p className="mt-2 text-[12px] sm:text-[13px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Please provide the details below. Our team will review your request
            and contact you to confirm the visit.
          </p> */}
        </div>

        {/* Form Card */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 sm:p-8 space-y-10"
          >
            <AnimatedGroup className="space-y-10">
              {/* Company Information */}
              <AnimatedGroupItem>
                <FormSection title="Company Information">
                  <InputField
                    label="Company Name"
                    required
                    placeholder="Enter company name"
                    {...register("companyName")}
                    error={errors.companyName?.message}
                  />

                  <FormField label="Sector" error={errors.sector?.message}>
                    <select className={selectClass} {...register("sector")}>
                      <option value="">Select sector</option>
                      {SECTORS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <TextareaField
                    label="Company Address"
                    placeholder="Full address"
                    rows={4}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("companyAddress")}
                    error={errors.companyAddress?.message}
                  />

                  <InputField
                    label="City"
                    placeholder="Enter city"
                    {...register("city")}
                    error={errors.city?.message}
                  />

                  <FormField label="Country" error={errors.country?.message}>
                    <select className={selectClass} {...register("country")}>
                      <option value="">Select country</option>
                      {COUNTRIES.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </FormSection>
              </AnimatedGroupItem>

              {/* Contact Person */}
              <AnimatedGroupItem>
                <FormSection title="Contact Person">
                  <InputField
                    label="Contact Person"
                    required
                    placeholder="Full name"
                    {...register("contactPerson")}
                    error={errors.contactPerson?.message}
                  />

                  <InputField
                    label="Job Title"
                    placeholder="e.g., Manager, Engineer"
                    {...register("jobTitle")}
                    error={errors.jobTitle?.message}
                  />

                  <InputField
                    label="Email Address"
                    type="email"
                    required
                    placeholder="name@company.com"
                    {...register("emailAddress")}
                    error={errors.emailAddress?.message}
                  />

                  <InputField
                    label="Mobile Number"
                    placeholder="e.g., +971 5X XXX XXXX"
                    {...register("mobileNumber")}
                    error={errors.mobileNumber?.message}
                  />

                  <InputField
                    label="Alternative Contact Number"
                    type="tel"
                    placeholder="Optional"
                    {...register("alternativeContactNumber")}
                    error={errors.alternativeContactNumber?.message}
                  />
                </FormSection>
              </AnimatedGroupItem>

              {/* Site Details */}
              <AnimatedGroupItem>
                <FormSection title="Site Details">
                  <TextareaField
                    label="Site Location"
                    required
                    placeholder="Enter site location"
                    rows={4}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("siteLocation")}
                    error={errors.siteLocation?.message}
                  />

                  <FormField
                    label="Type of Site"
                    error={errors.typeOfSite?.message}
                  >
                    <select className={selectClass} {...register("typeOfSite")}>
                      <option value="">Select site type</option>
                      {SITE_TYPES.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  {/* Nature of Requirement (Multi-select Dropdown) */}
                  {/* <FormField
                    label="Nature of Requirement"
                    error={errors.natureOfRequirement?.message}
                    className="md:col-span-2 lg:col-span-2"
                  >
                    <div className={boxClass}>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {selectedNature.length ? (
                          selectedNature.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2 py-0.5 text-xs text-gray-700"
                            >
                              {tag}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-gray-400">
                            Select one or more
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {NATURE_OF_REQUIREMENT.map((item) => {
                          const checked = selectedNature.includes(item);
                          return (
                            <label
                              key={item}
                              className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 cursor-pointer hover:bg-gray-50"
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => natureToggle(item)}
                                className="h-4 w-4"
                              />
                              <span className="text-sm text-gray-700">
                                {item}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </FormField> */}

                  <FormField
                    label="Nature of Requirement"
                    error={errors.natureOfRequirement?.message}
                    className="md:col-span-2 lg:col-span-2"
                  >
                    <div className={boxClass}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {NATURE_OF_REQUIREMENT.map((item) => (
                          <label
                            key={item}
                            className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 cursor-pointer hover:bg-gray-50"
                          >
                            <input
                              type="radio"
                              value={item}
                              {...register("natureOfRequirement")}
                              className="h-4 w-4"
                            />
                            <span className="text-sm text-gray-700">
                              {item}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </FormField>
                  {/* Preferred Visit Date */}
                  <Controller
                    control={control}
                    name="preferredVisitDate"
                    render={({ field }) => (
                      <DatePickerField
                        label="Preferred Visit Date"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.preferredVisitDate?.message}
                      />
                    )}
                  />

                  {/* <FormField
                    label="Preferred Visit Time"
                    error={errors.preferredVisitTime?.message}
                  >
                    <input
                      type="time"
                      className={selectClass}
                      {...register("preferredVisitTime")}
                    />
                  </FormField> */}

                  <Controller
                    control={control}
                    name="preferredVisitTime"
                    render={({ field }) => (
                      <TimePickerField
                        label="Preferred Visit Time"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.preferredVisitTime?.message}
                      />
                    )}
                  />

                  {/* Urgency Level */}
                  <FormField
                    label="Urgency Level"
                    error={errors.urgencyLevel?.message}
                  >
                    <div className="mt-1 flex flex-wrap gap-3">
                      {URGENCY_LEVELS.map((lvl) => (
                        <label
                          key={lvl}
                          className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <input
                            type="radio"
                            value={lvl}
                            {...register("urgencyLevel")}
                            className="h-4 w-4"
                            defaultChecked={lvl === "Normal"}
                          />
                          <span className="text-sm text-gray-700">{lvl}</span>
                        </label>
                      ))}
                    </div>
                  </FormField>
                </FormSection>
              </AnimatedGroupItem>

              {/* Technical Information */}
              <AnimatedGroupItem>
                <FormSection title="Technical Information">
                  <TextareaField
                    label="Brief Description of Requirement"
                    required
                    placeholder="Describe what you need (required)"
                    rows={5}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("briefDescription")}
                    error={errors.briefDescription?.message}
                  />

                  <TextareaField
                    label="Existing System"
                    placeholder="Optional"
                    rows={4}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("existingSystem")}
                    error={errors.existingSystem?.message}
                  />

                  <TextareaField
                    label="Safety Requirements"
                    placeholder="Optional"
                    rows={4}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("safetyRequirements")}
                    error={errors.safetyRequirements?.message}
                  />

                  <Controller
                    control={control}
                    name="attachFile"
                    render={({ field }) => (
                      <FileUploadField
                        label="Attach Files"
                        value={field.value}
                        onChange={field.onChange}
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        error={errors.attachFile?.message}
                      />
                    )}
                  />
                </FormSection>
              </AnimatedGroupItem>

              {/* Consent & Submission */}
              <AnimatedGroupItem>
                <FormSection title="Consent & Submission">
                  <FormField
                    label="How did you hear about us?"
                    error={errors.howDidYouHear?.message}
                  >
                    <select
                      className={selectClass}
                      {...register("howDidYouHear")}
                    >
                      <option value="">Select an option (optional)</option>
                      {HEAR_ABOUT.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField
                    label="Consent"
                    required
                    error={errors.consent?.message}
                    className="md:col-span-2 lg:col-span-3"
                  >
                    <label className="mt-2 flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("consent")}
                        className="mt-1 h-4 w-4"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        I agree to be contacted by MAHY Khoory Group.
                      </span>
                    </label>
                  </FormField>

                  <div className="md:col-span-2 lg:col-span-3 flex items-center justify-center gap-3 pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-11 px-6 rounded-xl"
                    >
                      {isSubmitting ? "Submitting..." : "Request Site Visit"}
                    </Button>
                  </div>
                </FormSection>
              </AnimatedGroupItem>
            </AnimatedGroup>
          </form>
        </div>
      </div>
    </section>
  );
}
