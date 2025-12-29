"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import SubmitButton from "./SubmitButton";
import FileUploadField from "./FileUploadField";
import { Slide, ToastContainer } from "react-toastify";

const COMPLAINT_CATEGORIES = [
  { value: "product_quality", label: "Product Quality & Defects" },
  {
    value: "service_experience",
    label: "Service Experience & Customer Handling",
  },
  { value: "delivery_logistics", label: "Delivery, Shipping & Logistics" },
  { value: "billing_payment", label: "Billing, Charges & Payment Issues" },
  { value: "order_accuracy", label: "Order Accuracy & Item Mismatch" },
  { value: "technical_support", label: "Technical Support & System Issues" },
  { value: "sales_process", label: "Sales Process, Pricing & Quotations" },
  {
    value: "warranty_support",
    label: "Warranty, Repairs & After Sales Support",
  },
  { value: "staff_conduct", label: "Staff Conduct & Professional Behaviour" },
  { value: "general_feedback", label: "General Feedback & Other Concerns" },
];

const schema = z.object({
  customerName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Invalid number"),
  productService: z.string().min(2, "Required"),
  category: z.string().min(1, "Required"),
  attachment: z.any().optional(),
});

export default function ComplaintFormPane({ data, upload, submit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    if (!executeRecaptcha) {
      console.warn("recaPTCHA not yet available");
      return;
    }

    // const token = await executeRecaptcha("complaint_form");

    const payload = {
      ...data,
      recaptchaToken: "",
    };

    console.log("payloadd", payload);
  };

  // const { executeRecaptcha } = useGoogleReCaptcha();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        <Field label={data[0]} error={errors.customerName}>
          <input {...register("customerName")} />
        </Field>

        <Field label={data[1]} error={errors.email}>
          <input {...register("email")} />
        </Field>

        <Field label={data[2]} error={errors.phone}>
          <input {...register("phone")} />
        </Field>

        <Field label={data[3]} error={errors.productService}>
          <input {...register("productService")} />
        </Field>
      </div>

      <div className="mt-6 space-y-5">
        <SelectField
          label={data[4]}
          options={COMPLAINT_CATEGORIES}
          error={errors.category}
          {...register("category")}
        />

        {/* <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Attachment
          </label>
          <input
            type="file"
            {...register("attachment")}
            className="w-full text-sm"
          />
        </div> */}

        <FileUploadField
          label={data[5]}
          upload={upload}
          register={register}
          error={errors.attachment}
        />
        {/* <div className="flex items-start gap-3">
          <input type="checkbox" {...register("captcha")} />
          <p className="text-sm text-slate-600">Verify if you are human</p>
        </div>

        {errors.captcha && (
          <p className="text-sm text-red-500">{errors.captcha.message}</p>
        )} */}

        <SubmitButton label={submit} loading={isSubmitting} />
      </div>
      <ToastContainer
        transition={Slide}
        hideProgressBar
        autoClose={3000}
        position="top-right"
        toastStyle={{
          transition: "all 0.5s ease-in-out",
        }} />
    </form>
  );
}

function Field({ label, error, required = false, children }) {
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

function SelectField({ label, options, error, ...props }) {
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
