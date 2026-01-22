"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { COUNTRIES, ENQUIRY_TYPES } from "../../config/contactOptions.js";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton.jsx";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const schema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  companyName: z.string().optional(),
  companyWebsite: z.string().url("Invalid URL").optional(),
  businessEmail: z.string().email("Invalid email"),
  mobileNumber: z.string().min(7, "Invalid number"),
  country: z.string().min(1, "Required"),
  enquiryType: z.string().min(1, "Required"),
  message: z.string().optional(),
  agreed: z.literal(true, {
    errorMap: () => ({ message: "Required" }),
  }),
});

export default function ContactFormPane({ data, agreement, submit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (data) => {
    // if (!executeRecaptcha) {
    //   console.warn("reCAPTCHA not yet available");
    //   return;
    // }

    // const token = await executeRecaptcha("contact_form");

    const payload = {
      ...data,
      recaptchaToken: "",
    };

    console.log("payload:", payload);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4 max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        <Field label={data[0]} error={errors.firstName}>
          <input {...register("firstName")} />
        </Field>

        <Field label={data[1]} error={errors.lastName}>
          <input {...register("lastName")} />
        </Field>

        <Field label={data[2]} error={errors.companyName}>
          <input {...register("companyName")} />
        </Field>

        <Field label={data[3]} error={errors.companyWebsite}>
          <input {...register("companyWebsite")} />
        </Field>

        <Field label={data[4]} error={errors.businessEmail}>
          <input {...register("businessEmail")} />
        </Field>

        <Field label={data[5]} error={errors.mobileNumber}>
          <input {...register("mobileNumber")} />
        </Field>
      </div>

      <div className="mt-6 space-y-5">
        <SelectField
          label={data[6]}
          error={errors.country}
          {...register("country")}
          options={COUNTRIES}
        />

        <SelectField
          label={data[7]}
          error={errors.enquiryType}
          {...register("enquiryType")}
          options={ENQUIRY_TYPES}
        />

        <Field label={data[8]}>
          <textarea rows={4} {...register("message")} />
        </Field>

        <div className="flex items-center gap-3">
          <input type="checkbox" {...register("agreed")} />
          <p className="text-sm text-slate-600">
            {agreement[0]} <span className="underline">{agreement[1]}</span>{" "}
            {agreement[2]} <span className="underline">{agreement[3]}</span>
          </p>
        </div>

        {errors.agreed && (
          <p className="text-sm text-red-500">{errors.agreed.message}</p>
        )}

        <SubmitButton label={submit} loading={isSubmitting} />
      </div>
    </form>
  );
}

export function Field({ label, error, required = false, children }) {
  const inputClass =
    "w-full h-12 rounded-md border border-slate-300 px-4 text-sm focus:border-black focus:outline-none";

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {React.isValidElement(children) &&
        React.cloneElement(children, {
          className: `${inputClass} ${children.props.className || ""}`,
        })}

      <div className="min-h-[18px] mt-1">
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}

export function SelectField({ label, options, error, ...props }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        {label} <span className="text-red-500">*</span>
      </label>

      <select
        {...props}
        className="w-full h-12 rounded-md border border-slate-300 px-4 text-sm focus:border-black focus:outline-none"
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      <div className="min-h-[18px] mt-1">
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}
