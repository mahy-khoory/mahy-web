"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React, { useEffect, useRef, useState } from "react";
import SubmitButton from "./SubmitButton";
import MapPicker from "./MapPicker";

const TIME_SLOTS = [
  "08:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM",
];

const schema = z.object({
  name: z.string().min(2, "Required"),
  phone: z.string().min(7, "Invalid number"),
  email: z.string().email("Invalid email"),
  pumpBrand: z.string().min(1, "Required"),
  pumpModel: z.string().min(1, "Required"),
  problemDetails: z.string().min(10, "Please describe the issue"),
  siteLocation: z.string().min(3, "Required"),
  preferredDate: z.string().min(1, "Required"),
  preferredTime: z.string().min(1, "Required"),
  attachment: z.any().optional(),
  latitude: z.number(),
  longitude: z.number(),
  additionalNotes: z.string().optional(),
});

export default function SiteVisitRequisitionForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const attachmentInputRef = useRef(null);
  const [attachmentLabel, setAttachmentLabel] = useState("");
  const attachmentField = register("attachment");

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && attachmentInputRef.current) {
      attachmentInputRef.current.removeAttribute("capture");
    }
  }, [isMobile]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // console.log("Site Visit Payload:", data);
    setIsSubmitting(false);
  };

  const openAttachmentPicker = (mode) => {
    if (!attachmentInputRef.current) return;

    if (mode === "camera") {
      attachmentInputRef.current.setAttribute("capture", "environment");
    } else {
      attachmentInputRef.current.removeAttribute("capture");
    }

    attachmentInputRef.current.click();
  };

  const handleAttachmentChange = (event) => {
    const file = event.target.files?.[0];
    setAttachmentLabel(file ? file.name : "");
    if (typeof attachmentField.onChange === "function") {
      attachmentField.onChange(event);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl">
      <Section title="Contact Information">
        <Grid>
          <Field label="Name" error={errors.name}>
            <input {...register("name")} />
          </Field>

          <Field label="Contact Number" error={errors.phone}>
            <input {...register("phone")} />
          </Field>

          <Field label="Email ID" error={errors.email}>
            <input {...register("email")} />
          </Field>
        </Grid>
      </Section>

      <Section title="Pump Details">
        <Grid>
          <Field label="Pump Brand" error={errors.pumpBrand}>
            <input {...register("pumpBrand")} />
          </Field>

          <Field label="Pump Model" error={errors.pumpModel}>
            <input {...register("pumpModel")} />
          </Field>
        </Grid>

        <Field label="Problem Details" error={errors.problemDetails}>
          <textarea {...register("problemDetails")} rows={4} />
        </Field>
      </Section>

      <Section title="Photo / Video">
        <div>
          <label
            htmlFor="site-visit-attachment"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Supporting Media (optional)
          </label>
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-5">
            <input
              id="site-visit-attachment"
              type="file"
              accept="image/*,video/*"
              {...attachmentField}
              onChange={handleAttachmentChange}
              ref={(element) => {
                attachmentInputRef.current = element;
                if (typeof attachmentField.ref === "function") {
                  attachmentField.ref(element);
                }
              }}
              onBlur={attachmentField.onBlur}
              className="hidden"
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {isMobile ? (
                <>
                  <button
                    type="button"
                    onClick={() => openAttachmentPicker("camera")}
                    className="w-full rounded-md bg-black px-4 py-3 text-sm font-medium text-white"
                  >
                    Capture Photo / Video
                  </button>
                  <button
                    type="button"
                    onClick={() => openAttachmentPicker("upload")}
                    className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    Upload from Device
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => openAttachmentPicker("upload")}
                  className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90"
                >
                  Browse Photo / Video
                </button>
              )}

              <p className="text-xs text-slate-500 sm:ml-4 sm:text-left">
                JPG, PNG, HEIC or MP4 up to 10MB.
              </p>
            </div>

            <p className="mt-3 text-xs text-slate-600">
              {attachmentLabel ? `Selected file: ${attachmentLabel}` : "No file selected yet."}
            </p>
          </div>
        </div>
      </Section>

      <Section title="Site Location">
        <Field label="Site Location Address" error={errors.siteLocation}>
          <input {...register("siteLocation")} />
        </Field>

        <MapPicker
          error={errors.latitude}
          onSelect={(lat, lng) => {
            setValue("latitude", lat, { shouldValidate: true });
            setValue("longitude", lng);
          }}
        />
      </Section>

      <Section title="Preferred Visit Schedule">
        <Grid>
          <Field label="Preferred Visit Date" error={errors.preferredDate}>
            <input type="date" {...register("preferredDate")} />
          </Field>

          <SelectField
            label="Preferred Time Slot"
            options={TIME_SLOTS}
            error={errors.preferredTime}
            {...register("preferredTime")}
          />
        </Grid>
      </Section>

      <Section title="Additional Notes">
        <textarea
          {...register("additionalNotes")}
          rows={3}
          className="w-full rounded-md border border-slate-300 p-4 text-sm"
        />
      </Section>

      <SubmitButton label="Submit Site Visit Request" loading={isSubmitting} />
    </form>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">{title}</h3>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Grid({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{children}</div>
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

      {children &&
        typeof children === "object" &&
        children.type !== "textarea" &&
        React.cloneElement(children, {
          className: `${inputClass} ${children.props.className || ""}`,
        })}

      {children?.type === "textarea" &&
        React.cloneElement(children, {
          className:
            "w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-black focus:outline-none",
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
        {label}
      </label>
      <select
        {...props}
        className="w-full h-12 rounded-md border border-slate-300 px-4 text-sm"
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
    </div>
  );
}
