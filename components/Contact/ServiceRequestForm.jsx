"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SubmitButton from "./SubmitButton.jsx";

/* ================= VALIDATION ================= */

const phoneRegex = /^\+?[0-9]{7,15}$/;
const nameRegex = /^[A-Za-z\s]+$/;
const productModelRegex = /^[A-Za-z0-9\-\/\s]+$/;

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const serviceRequestSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long")
    .regex(nameRegex, "Name can only contain letters"),

  phone: z
    .string()
    .regex(phoneRegex, "Enter a valid phone number"),

  email: z
    .string()
    .email("Enter a valid email address"),

  productModel: z
    .string()
    .min(2, "Product model is required")
    .max(50, "Product model is too long")
    .regex(productModelRegex, "Invalid product model format"),

  address: z
    .string()
    .min(10, "Please enter a complete address")
    .max(250, "Address is too long"),

  symptoms: z
    .string()
    .min(20, "Please describe the issue in detail")
    .max(1000, "Description is too long"),

  appointmentDate: z
    .string()
    .refine((date) => {
      const selected = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Appointment date cannot be in the past"),

  appointmentTime: z.string().min(1, "Please select a time"),

  images: z
    .any()
    .optional()
    .refine(
      (files) => !files || files.length <= 5,
      "You can upload up to 5 images"
    )
    .refine(
      (files) =>
        !files ||
        Array.from(files).every((file) => file.size <= MAX_FILE_SIZE),
      "Each image must be under 5MB"
    )
    .refine(
      (files) =>
        !files ||
        Array.from(files).every((file) =>
          ACCEPTED_IMAGE_TYPES.includes(file.type)
        ),
      "Only JPG, PNG or WEBP images are allowed"
    ),

  notes: z.string().max(500, "Additional notes are too long").optional(),
});

/* ================= COMPONENT ================= */

export default function ServiceRequestForm({
  submitLabel = "Submit Service Request",
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(serviceRequestSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const payload = {
      ...data,
      images: data.images ? Array.from(data.images) : [],
    };

    // console.log("SERVICE REQUEST PAYLOAD:", payload);

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 max-w-3xl">
      {/* BASIC INFO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        <Field label="Name" error={errors.name} required>
          <input {...register("name")} />
        </Field>

        <Field label="Phone" error={errors.phone} required>
          <input {...register("phone")} />
        </Field>

        <Field label="Email" error={errors.email} required>
          <input {...register("email")} />
        </Field>

        <Field label="Product Model No." error={errors.productModel} required>
          <input {...register("productModel")} />
        </Field>
      </div>

      {/* ADDRESS */}
      <div className="mt-6">
        <Field label="Address" error={errors.address} required>
          <textarea rows={3} {...register("address")} />
        </Field>
      </div>

      {/* SYMPTOMS */}
      <div className="mt-6">
        <Field label="Symptoms" error={errors.symptoms} required>
          <textarea rows={5} {...register("symptoms")} />
        </Field>
      </div>

      {/* IMAGES */}
      <div className="mt-6">
        <Field label="Attach Images (optional)">
          <input
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp"
            {...register("images")}
            className="pt-2"
          />
        </Field>
      </div>

      {/* DATE & TIME */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        <Field label="Appointment Date" error={errors.appointmentDate} required>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            {...register("appointmentDate")}
          />
        </Field>

        <Field label="Appointment Time" error={errors.appointmentTime} required>
          <input type="time" {...register("appointmentTime")} />
        </Field>
      </div>

      {/* NOTES */}
      <div className="mt-6">
        <Field label="Additional Notes">
          <textarea rows={4} {...register("notes")} />
        </Field>
      </div>

      {/* SUBMIT */}
      <div className="mt-8">
        <SubmitButton label={submitLabel} loading={isSubmitting} />
      </div>
    </form>
  );
}

/* ================= FIELD ================= */

export function Field({ label, error, required = false, children }) {
  const inputClass =
    "w-full h-12 rounded-md border border-slate-300 px-4 text-sm focus:border-black focus:outline-none";

  const textareaClass =
    "w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-black focus:outline-none";

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {React.isValidElement(children) &&
        React.cloneElement(children, {
          className:
            children.type === "textarea" ? textareaClass : inputClass,
        })}

      <div className="min-h-[18px] mt-1">
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}
