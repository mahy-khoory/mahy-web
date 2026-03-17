"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";

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
import { complaintSchema } from "./ComplaintSchema";
import { submitCustomerComplaint } from "@/lib/api/customerComplaint";
import { useMutation } from "@tanstack/react-query";

const COMPLAINT_TYPES = [
  "Quotation Delay",
  "Order Processing Delay",
  "Wrong Product Sent",
  "Incomplete Delivery",
  "Damaged Product",
  "Product Defect",
  "Installation Issue",
  "Service Delay",
  "Poor Service Quality",
  "Billing Error",
  "Overcharging",
  "Payment Issue",
  "Credit Issue",
  "No Response to Calls",
  "No Response to Emails",
  "No Response on WhatsApp",
  "Rude Staff Behaviour",
  "Miscommunication",
  "Incorrect Information",
  "Other",
];

const PRODUCT_CATEGORIES = [
  "Pump",
  "AC",
  "Motor",
  "Control Panel",
  "Pressure Vessel",
  "Spare Parts",
  "Furniture",
  "Corrugated Boxes",
  "Corrugated Paper",
  "Wood Block",
  "Jerry Cans",
  "Other",
];

const ISSUE_CATEGORIES = [
  { value: "quality_issue", label: "Quality Issue" },
  { value: "wrong_product", label: "Wrong Product" },
  { value: "damaged", label: "Damaged Product" },
  { value: "delay", label: "Delay" },
  { value: "overcharging", label: "Overcharging" },
  { value: "poor_service", label: "Poor Service" },
  { value: "behaviour", label: "Staff Behaviour" },
  { value: "other", label: "Other" },
];

const SEVERITY_LEVELS = [
  { value: "critical", label: "Critical" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

const BUSINESS_IMPACT = [
  { value: "production_stopped", label: "Production Stopped" },
  { value: "water_supply_affected", label: "Water Supply Affected" },
  { value: "financial_loss", label: "Financial Loss" },
  { value: "inconvenience_only", label: "Inconvenience Only" },
];

const sanitizeDigits = (value = "", limit) =>
  String(value ?? "")
    .replace(/\D/g, "")
    .slice(0, limit);

const isFutureDate = (date) => {
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const candidate = new Date(date);
  candidate.setHours(0, 0, 0, 0);
  return candidate > today;
};

export default function CustomerComplaintForm() {
  const {
    control,
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(complaintSchema),
    defaultValues: {
      customerType: "Organization",
      businessImpact: [],
      year: "",
    },
    mode: "onTouched",
  });

  const mutation = useMutation({
    mutationFn: submitCustomerComplaint,
    onSuccess: (data) => {
      const successMessage =
        data?.message || "Complaint submitted successfully.";
      toast.success(successMessage);
      reset();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit complaint.");
    },
  });

  const customerType = watch("customerType");

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[26px] sm:text-[32px] font-semibold text-gray-900">
            Customer Complaint
          </h1>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 sm:p-8 space-y-10"
          >
            <AnimatedGroup className="space-y-10">
              <AnimatedGroupItem>
                <FormSection title="Customer Information">
                  <FormField label="Organization / Person" required>
                    <div className="flex gap-6 mt-1">
                      {["Organization", "Person"].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-2 text-sm"
                        >
                          <input
                            type="radio"
                            value={opt}
                            {...register("customerType")}
                            className="h-4 w-4 accent-black"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </FormField>

                  {customerType === "Person" && (
                    <InputField
                      label="Contact Person"
                      required
                      {...register("contactPerson")}
                      error={errors.contactPerson?.message}
                    />
                  )}

                  <InputField
                    label="Company Name"
                    required
                    {...register("companyName")}
                    error={errors.companyName?.message}
                  />

                  <InputField
                    label="Mobile Number"
                    required
                    type="tel"
                    inputMode="tel"
                    {...register("mobileNumber")}
                    error={errors.mobileNumber?.message}
                  />

                  <InputField
                    label="Email"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </FormSection>
              </AnimatedGroupItem>
              <AnimatedGroupItem>
                <FormSection title="Complaint Reference">
                  <FormField label="Source" required>
                    <select
                      {...register("source")}
                      className="w-full h-11 rounded-md border border-gray-300 bg-white px-3 text-sm focus:ring-2 focus:ring-black/10"
                    >
                      <option value="">Select source</option>
                      <option value="phone">Phone</option>
                      <option value="email">Email</option>
                      <option value="website">Website</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="walk-in">Walk-in</option>
                    </select>
                  </FormField>
                </FormSection>
              </AnimatedGroupItem>

              <AnimatedGroupItem>
                <FormSection title="Product / Service Details">
                  <FormField label="Complaint Type" required>
                    <select
                      {...register("complaintType")}
                      className="w-full h-11 rounded-md border px-3 text-sm"
                    >
                      <option value="">Select complaint type</option>
                      {COMPLAINT_TYPES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Product Category" required>
                    <select
                      {...register("productCategory")}
                      className="w-full h-11 rounded-md border px-3 text-sm"
                    >
                      <option value="">Select product category</option>
                      {PRODUCT_CATEGORIES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <InputField
                    label="Sales Person"
                    {...register("salesPerson")}
                  />
                  <InputField label="Brand" {...register("brand")} />
                  <InputField label="Model" {...register("model")} />
                  <InputField
                    label="Year"
                    maxLength={4}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    {...register("year", {
                      setValueAs: (value) => sanitizeDigits(value, 4),
                    })}
                    error={errors.year?.message}
                  />
                  <InputField label="Serial No" {...register("serialNo")} />
                  <InputField label="Invoice No" {...register("invoiceNo")} />
                </FormSection>
              </AnimatedGroupItem>

              <AnimatedGroupItem>
                <FormSection title="Complaint Core">
                  <TextareaField
                    label="Problem Description"
                    required
                    rows={5}
                    {...register("problemDescription")}
                    error={errors.problemDescription?.message}
                  />

                  <Controller
                    control={control}
                    name="incidentDate"
                    render={({ field }) => (
                      <DatePickerField
                        label="Incident Date"
                        error={errors.incidentDate?.message}
                        disabled={isFutureDate}
                        {...field}
                      />
                    )}
                  />

                  <FormField label="Frequency">
                    <select
                      {...register("frequency")}
                      className="w-full h-11 rounded-md border px-3 text-sm"
                    >
                      <option value="">Select frequency</option>
                      <option value="once">Once</option>
                      <option value="intermittent">Intermittent</option>
                      <option value="frequent">Frequent</option>
                      <option value="always">Always</option>
                    </select>
                  </FormField>
                </FormSection>
              </AnimatedGroupItem>

              <AnimatedGroupItem>
                <FormSection title="Category & Severity">
                  <FormField label="Issue Category" required>
                    <select
                      {...register("issueCategory")}
                      className="w-full h-11 rounded-md border px-3 text-sm"
                    >
                      <option value="">Select issue category</option>
                      {ISSUE_CATEGORIES.map((i) => (
                        <option key={i.value} value={i.value}>
                          {i.label}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Severity Level" required>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mt-2">
                      {SEVERITY_LEVELS.map((lvl) => (
                        <label
                          key={lvl.value}
                          className="flex items-center gap-2 text-sm"
                        >
                          <input
                            type="radio"
                            value={lvl.value}
                            {...register("severityLevel")}
                            className="h-4 w-4 accent-black"
                          />
                          {lvl.label}
                        </label>
                      ))}
                    </div>
                  </FormField>

                  <FormField label="Business Impact">
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {BUSINESS_IMPACT.map((b) => (
                        <label
                          key={b.value}
                          className="flex items-center gap-2 text-sm"
                        >
                          <input
                            type="radio"
                            value={b.value}
                            {...register("businessImpact")}
                            className="h-4 w-4 accent-black"
                          />
                          {b.label}
                        </label>
                      ))}
                    </div>
                  </FormField>
                </FormSection>
              </AnimatedGroupItem>

              <AnimatedGroupItem>
                <FormSection title="Evidence">
                  <Controller
                    control={control}
                    name="photos"
                    render={({ field }) => (
                      <FileUploadField
                        label="Photos"
                        accept=".jpg,.png"
                        multiple
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="videos"
                    render={({ field }) => (
                      <FileUploadField
                        label="Videos"
                        accept=".mp4"
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="documents"
                    render={({ field }) => (
                      <FileUploadField
                        label="Documents"
                        accept=".pdf,.doc,.docx"
                        multiple
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="voiceNote"
                    render={({ field }) => (
                      <FileUploadField
                        label="Voice Note"
                        accept=".mp3"
                        {...field}
                      />
                    )}
                  />
                </FormSection>
              </AnimatedGroupItem>

              <AnimatedGroupItem>
                <div className="flex justify-center pt-4">
                  <Button type="submit" disabled={mutation.isPending}>
                    {mutation.isPending ? "Submitting..." : "Submit Complaint"}
                  </Button>
                </div>
              </AnimatedGroupItem>
            </AnimatedGroup>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
