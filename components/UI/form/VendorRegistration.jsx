"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2, Users, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Button from "../Button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

import { FormSection } from "@/components/form/FormSection";
import { InputField, TextareaField } from "@/components/form/InputField";
import { RadioGroupField } from "@/components/form/RadioGroupField";
import { DatePickerField } from "@/components/form/DatePickerField";
import { FileUploadField } from "@/components/form/FileUploadField";
import { useSearchParams } from "next/navigation";
import {
  AnimatedField,
  AnimatedGroup,
  AnimatedGroupItem,
} from "@/components/form/AnimatedField";

import {
  PAYMENT_METHODS,
  COUNTRY_CODES,
  UAE_DIALING_CODE,
  UAE_TELEPHONE_AREA_CODES,
  UAE_MOBILE_AREA_CODES,
  mergeAreaCodeWithPhoneNumber,
  sanitizePassportNumber,
} from "@/lib/formConstants";

import {
  VENDOR_TYPES,
  VENDOR_CLASSIFICATION_GROUPS,
  TRN_TYPES,
  SALES_TAX_GROUPS,
  LINE_OF_BUSINESS,
  SEGMENTS,
  SUBSEGMENTS,
  NAME_PREFIXES,
  ZIP_POSTAL_CODES,
  STATES,
  DISTRICTS,
  COUNTIES,
  COMPANY_CHAINS,
} from "@/lib/vendorFormconstants";

import { vendorFormSchema } from "@/lib/vendorFormSchema";
import { FormField } from "@/components/form/FormField";
import { Checkbox } from "../checkbox";
import { usePaymentTerms } from "@/lib/hooks/usePaymentTerms";
import { useCurrencies } from "@/lib/hooks/useCurrencies";
import FormD365Lookup from "@/components/Lookup/FormD365Lookup";
import { useDeliveryTerms } from "@/lib/hooks/useDeliveryTerms";
import { useZipCodes } from "@/lib/hooks/useZipCodes";
import { useLineOfBusiness } from "@/lib/hooks/useLineOfBusiness";
import { useTaxGroups } from "@/lib/hooks/useTaxGroups";
import { useDeliveryModes } from "@/lib/hooks/useDeliveryModes";
import { useCreateVendor } from "@/lib/hooks/useCreateVendor";
import Link from "next/link";
import SelectedCompany from "@/components/SelectedCompany";
import { useCountries } from "@/lib/hooks/useCountries";
import { useCities } from "@/lib/hooks/useCities";
import { isUAECountry } from "@/lib/utils/country";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
    },
  },
};

export const ADDRESS_BOOKS = [{ value: "RealEstate", label: "RealEstate" }];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const isFutureDate = (date) => {
  if (!date) return false;
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return normalizedDate > today;
};

export default function VendorRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createVendorMutation = useCreateVendor();

  const searchParams = useSearchParams();

  const company = searchParams.get("company");

  const [openLookup, setOpenLookup] = useState(null);

  const { data: paymentTerms = [], isLoading: ptLoading } = usePaymentTerms(
    company,
    openLookup === "paymentTerms",
  );

  const { data: taxGroups = [], isLoading: taxGroupsLoading } = useTaxGroups(
    company,
    openLookup === "taxGroups",
  );

  const { data: lineOfBusiness = [], isLoading: lineOfBusinessLoading } =
    useLineOfBusiness(company, openLookup === "lineOfBusiness");

  const { data: zipCodes = [], isLoading: zipCodesLoading } = useZipCodes(
    openLookup === "zipCodes",
  );

  const { data: currencies = [], isLoading: currenciesLoading } = useCurrencies(
    openLookup === "currencies",
  );

  const { data: deliveryTerms = [], isLoading: dlvTermsLoading } =
    useDeliveryTerms(company, openLookup === "deliveryTerms");

  const { data: dlvModes = [], isLoading: dlvModesLoading } = useDeliveryModes(
    company,
    openLookup === "dlvModes",
  );

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(vendorFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    defaultValues: {
      vendorType: "organization",
      currency: "AED",
      vendorClassificationGroup: "onetime",
      trnType: "with_trn",
      salesTaxGroup: "vat",
      countryRegion: "ARE",
      telCountryCode: "+971",
      telAreaCode: "",
      mobileCountryCode: "+971",
      mobileAreaCode: "",
    },
  });

  const { data: countries = [], isLoading: countriesLoading } = useCountries(
    openLookup === "countries",
  );

  const vendorType = watch("vendorType");
  const vendorClassificationGroup = watch("vendorClassificationGroup");
  const trnType = watch("trnType");
  const countryRegion = watch("countryRegion");
  const telCountryCode = watch("telCountryCode");
  const mobileCountryCode = watch("mobileCountryCode");

  const {
    data: cities = [],
    isLoading: citiesLoading,
    isFetched: citiesFetched,
  } = useCities(countryRegion, openLookup === "cities");
  const allowCustomCityEntry = citiesFetched && cities.length === 0;

  const isOrganization = vendorType === "organization";
  const isPerson = vendorType === "person";
  const isRegular = vendorClassificationGroup === "regular";
  const isUAE = isUAECountry(countryRegion);
  const showPersonNameFields =
    isPerson && ["onetime", "regular"].includes(vendorClassificationGroup);
  const showPassport = isPerson && !isUAE;
  const showEmiratesId = isPerson && isUAE;

  const showExtendedAddress = (isOrganization && isRegular) || isPerson;
  const showTelAreaCodeLookup = telCountryCode === UAE_DIALING_CODE;
  const showMobileAreaCodeLookup = mobileCountryCode === UAE_DIALING_CODE;

  useEffect(() => {
    setValue("city", "");
    setValue("state", "");
  }, [countryRegion, setValue]);

  useEffect(() => {
    if (!showTelAreaCodeLookup) {
      setValue("telAreaCode", "");
    }
  }, [showTelAreaCodeLookup, setValue]);

  useEffect(() => {
    if (!showMobileAreaCodeLookup) {
      setValue("mobileAreaCode", "");
    }
  }, [showMobileAreaCodeLookup, setValue]);

  const sanitizeDigits = (value, maxLength) =>
    value.replace(/\D/g, "").slice(0, maxLength);

  const sanitizePhoneNumber = (value, countryCode, uaeLength, defaultLength) =>
    sanitizeDigits(
      value,
      countryCode === UAE_DIALING_CODE ? uaeLength : defaultLength,
    );

  const normalizeFiles = (val) => {
    if (!val) return [];
    if (val instanceof FileList) return Array.from(val);
    if (val instanceof File) return [val];

    if (Array.isArray(val)) {
      return val
        .map((x) => {
          if (x instanceof File) return x;
          if (x?.file instanceof File) return x.file;
          if (x?.raw instanceof File) return x.raw;
          if (x?.originFileObj instanceof File) return x.originFileObj;
          return null;
        })
        .filter(Boolean);
    }

    if (val?.file instanceof File) return [val.file];
    if (val?.raw instanceof File) return [val.raw];
    if (val?.originFileObj instanceof File) return [val.originFileObj];

    return [];
  };

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      const payloadValues = {
        ...values,
        telNumber: mergeAreaCodeWithPhoneNumber(
          values.telAreaCode,
          values.telNumber,
        ),
        mobileNumber: mergeAreaCodeWithPhoneNumber(
          values.mobileAreaCode,
          values.mobileNumber,
        ),
      };

      if (isUAE) {
        delete payloadValues.passportNumber;
        delete payloadValues.passportDateOfIssue;
        delete payloadValues.passportDateOfExpiry;
      } else {
        delete payloadValues.emiratesId;
        delete payloadValues.emiratesIdIssueDate;
        delete payloadValues.emiratesIdExpiryDate;
      }

      Object.entries(payloadValues).forEach(([key, value]) => {
        if (
          value === undefined ||
          value === null ||
          value === "" ||
          key.endsWith("File") ||
          key === "telAreaCode" ||
          key === "mobileAreaCode"
        ) {
          return;
        }

        if (value instanceof Date) {
          formData.append(key, value.toISOString());
        } else if (typeof value === "boolean") {
          formData.append(key, value ? "true" : "false");
        } else {
          formData.append(key, String(value));
        }
      });

      if (company) {
        formData.append("company", company);
      }

      normalizeFiles(values.tradeLicenseFile).forEach((file) =>
        formData.append("files", file),
      );

      normalizeFiles(values.passportFile).forEach((file) =>
        formData.append("files", file),
      );

      normalizeFiles(values.emiratesIdFile).forEach((file) =>
        formData.append("files", file),
      );
      console.log("Vendor form payload:");
      for (const pair of formData.entries()) {
        // console.log(pair[0], pair[1]);
      }

      await createVendorMutation.mutateAsync(formData);

      toast.success("Vendor registered successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to register vendor");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalid = (formErrors) => {
    const firstKey = Object.keys(formErrors)[0];
    const firstMessage =
      formErrors?.[firstKey]?.message ||
      "Please correct the highlighted fields.";

    toast.error(firstMessage, { position: "top-right" });
  };

  return (
    <>
      <ToastContainer />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="min-h-screen bg-background py-8 px-4"
      >
        <div className="max-w-5xl mx-auto pt-20">
          <SelectedCompany currentPage="vendor-registration" />

          <motion.div variants={sectionVariants}>
            <Card className="shadow-lg overflow-hidden">
              <CardHeader className="border-b border-gray-300">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-12 w-12 rounded-lg b-base text-white flex items-center justify-center">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      Vendor Registration
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Please fill in all required fields to register a vendor
                    </p>
                  </div>
                </motion.div>
              </CardHeader>
              <CardContent className="p-6">
                <form
                  onSubmit={handleSubmit(onSubmit, onInvalid)}
                  className="space-y-8"
                >
                  {" "}
                  {/* Basic Vendor Details */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="Basic Details">
                      <Controller
                        name="vendorType"
                        control={control}
                        render={({ field }) => (
                          <RadioGroupField
                            label="Organization/Person"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...VENDOR_TYPES]}
                            required
                            error={errors.vendorType?.message}
                          />
                        )}
                      />

                      <FormD365Lookup
                        name="currency"
                        control={control}
                        enableSearch
                        searchPlaceholder={"Search Currency"}
                        label="Currency"
                        data={currencies}
                        loading={currenciesLoading}
                        onOpen={() => setOpenLookup("currencies")}
                        columns={[
                          { key: "label", label: "Currency" },
                          { key: "description", label: "Symbol" },
                        ]}
                        error={errors.currency?.message}
                      />

                      <Controller
                        name="vendorClassificationGroup"
                        control={control}
                        render={({ field }) => (
                          <RadioGroupField
                            label="Vendor classification group"
                            required
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...VENDOR_CLASSIFICATION_GROUPS]}
                          />
                        )}
                      />
                      {/* termsOfPayment */}
                      <FormD365Lookup
                        name="termsOfPayment"
                        control={control}
                        label="Terms of payment"
                        enableSearch
                        required
                        searchPlaceholder={"Search Payment Terms"}
                        data={paymentTerms}
                        loading={ptLoading}
                        onOpen={() => setOpenLookup("paymentTerms")}
                        columns={[
                          { key: "label", label: "Terms of payment" },
                          { key: "description", label: "Description" },
                        ]}
                        displayValue={isPerson ? "NET000D" : undefined}
                        disabled={isPerson}
                        error={errors.paymentTerms?.message}
                      />

                      <FormD365Lookup
                        name="deliveryTerms"
                        control={control}
                        enableSearch
                        searchPlaceholder={"Search Dlv Terms"}
                        label="Delivery Terms"
                        required
                        data={deliveryTerms}
                        loading={dlvTermsLoading}
                        onOpen={() => setOpenLookup("deliveryTerms")}
                        columns={[
                          { key: "label", label: "Delivery Term" },
                          { key: "description", label: "Description" },
                        ]}
                        error={errors.deliveryTerms?.message}
                      />

                      <FormD365Lookup
                        name="deliveryMode"
                        control={control}
                        label="Mode Of Delivery"
                        enableSearch
                        required
                        searchPlaceholder={"Search Dlv Modes"}
                        data={dlvModes}
                        loading={dlvModesLoading}
                        onOpen={() => setOpenLookup("dlvModes")}
                        columns={[
                          { key: "label", label: "Modes" },
                          { key: "description", label: "Description" },
                        ]}
                        error={errors.dlvModes?.message}
                      />

                      <FormD365Lookup
                        name="salesTaxGroup"
                        control={control}
                        enableSearch
                        searchPlaceholder={"Search Sales Tax Groups"}
                        label="Sales Tax Group"
                        required
                        data={taxGroups}
                        loading={taxGroupsLoading}
                        onOpen={() => setOpenLookup("taxGroups")}
                        columns={[
                          { key: "label", label: "Value" },
                          { key: "description", label: "Name" },
                        ]}
                        error={errors.salesTaxGroup?.message}
                      />

                      <InputField
                        label="Tax exempt number"
                        {...register("taxExemptNumber")}
                      />

                      <FormD365Lookup
                        name="lineOfBusiness"
                        control={control}
                        label="Line Of Business"
                        data={lineOfBusiness}
                        enableSearch
                        searchPlaceholder={"Search Line of Business"}
                        loading={lineOfBusinessLoading}
                        onOpen={() => setOpenLookup("lineOfBusiness")}
                        columns={[
                          { key: "label", label: "Business" },
                          { key: "description", label: "Description" },
                        ]}
                        error={errors.lineOfBusiness?.message}
                      />

                      <InputField label="Segment" {...register("segment")} />

                      <FormD365Lookup
                        name="subsegment"
                        control={control}
                        label="Subsegment"
                        data={SUBSEGMENTS}
                        columns={[{ key: "label", label: "Subsegment" }]}
                        placeholder="Select subsegment"
                      />
                    </FormSection>
                  </motion.div>
                  {/* Organization-specific fields */}
                  <AnimatedField show={isOrganization}>
                    <motion.div variants={sectionVariants}>
                      <FormSection title="Organization Details">
                        <Controller
                          name="trnType"
                          control={control}
                          render={({ field }) => (
                            <RadioGroupField
                              label="TRN type"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...TRN_TYPES]}
                            />
                          )}
                        />

                        <FormD365Lookup
                          name="methodOfPayment"
                          control={control}
                          label="Method of payment"
                          required
                          data={PAYMENT_METHODS}
                          columns={[
                            { key: "label", label: "Method of payment" },
                          ]}
                          error={errors.methodOfPayment?.message}
                        />

                        <InputField
                          label="Trade license"
                          required
                          error={errors.tradeLicense?.message}
                          {...register("tradeLicense")}
                        />

                        <Controller
                          name="tradeLicenseIssueDate"
                          control={control}
                          render={({ field, fieldState }) => (
                            <DatePickerField
                              label="Trade license issue date"
                              value={field.value}
                              onChange={(date) => {
                                if (date && isFutureDate(date)) {
                                  setError("tradeLicenseIssueDate", {
                                    type: "manual",
                                    message:
                                      "Trade license issue date cannot be in the future",
                                  });
                                  return;
                                }
                                clearErrors("tradeLicenseIssueDate");
                                field.onChange(date);
                              }}
                              error={fieldState.error?.message}
                              required
                            />
                          )}
                        />

                        <Controller
                          name="tradeLicenseExpiryDate"
                          control={control}
                          render={({ field }) => (
                            <DatePickerField
                              label="Trade license expiry date"
                              value={field.value}
                              onChange={field.onChange}
                              disabled={(date) => date < new Date()}
                            />
                          )}
                        />

                        <Controller
                          name="tradeLicenseFile"
                          control={control}
                          render={({ field }) => (
                            <FileUploadField
                              label="Attach trade license"
                              value={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />

                        <InputField
                          label="Company name"
                          required
                          error={errors.companyName?.message}
                          {...register("companyName")}
                        />
                        <AnimatedField show={isRegular}>
                          <div className="flex items-center gap-2">
                            <Controller
                              name="holdingCompany"
                              control={control}
                              render={({ field }) => (
                                <div className="flex items-center gap-3">
                                  <label className="text-sm font-medium">
                                    Holding company
                                  </label>
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="checkbox"
                                      checked={field.value || false}
                                      onChange={(e) =>
                                        field.onChange(e.target.checked)
                                      }
                                      className="h-4 w-4 rounded border-input"
                                    />
                                    <span className="text-sm text-muted-foreground">
                                      {field.value ? "Yes" : "No"}
                                    </span>
                                  </div>
                                </div>
                              )}
                            />
                          </div>
                        </AnimatedField>

                        <AnimatedField show={isRegular}>
                          <FormD365Lookup
                            name="companyChain"
                            control={control}
                            label="Company chain"
                            data={COMPANY_CHAINS}
                            columns={[{ key: "label", label: "Company chain" }]}
                            placeholder="Select company chain"
                          />
                        </AnimatedField>

                        <AnimatedField show={trnType === "with_trn"}>
                          <Controller
                            name="trn"
                            control={control}
                            render={({ field }) => (
                              <InputField
                                label="TRN"
                                required
                                error={errors.trn?.message}
                                inputMode="numeric"
                                autoComplete="off"
                                placeholder="Enter 15-digit TRN"
                                value={field.value || ""}
                                onChange={(e) => {
                                  const sanitized = e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 15);
                                  field.onChange(sanitized);
                                }}
                                onBlur={field.onBlur}
                                name={field.name}
                                ref={field.ref}
                              />
                            )}
                          />
                        </AnimatedField>
                      </FormSection>
                    </motion.div>
                  </AnimatedField>
                  {/* Person-specific fields */}
                  <AnimatedField show={isPerson}>
                    <motion.div variants={sectionVariants}>
                      <FormSection title="Person Details">
                        {/* Passport fields - Non-UAE */}
                        <AnimatedField show={showPassport}>
                          <Controller
                            name="passportNumber"
                            control={control}
                            render={({ field }) => (
                              <InputField
                                label="Passport number"
                                required
                                inputMode="text"
                                autoComplete="off"
                                error={errors.passportNumber?.message}
                                value={field.value || ""}
                                onChange={(e) =>
                                  field.onChange(
                                    sanitizePassportNumber(e.target.value),
                                  )
                                }
                                onBlur={field.onBlur}
                                name={field.name}
                                ref={field.ref}
                              />
                            )}
                          />
                        </AnimatedField>

                        <AnimatedField show={showPassport}>
                          <Controller
                            name="passportDateOfIssue"
                            control={control}
                            render={({ field }) => (
                              <DatePickerField
                                label="Date of issue"
                                value={field.value}
                                onChange={(date) => {
                                  if (date && isFutureDate(date)) {
                                    setError("passportDateOfIssue", {
                                      type: "manual",
                                      message:
                                        "Passport issue date cannot be in the future",
                                    });
                                    return;
                                  }
                                  clearErrors("passportDateOfIssue");
                                  field.onChange(date);
                                }}
                                required
                                error={errors.passportDateOfIssue?.message}
                              />
                            )}
                          />
                        </AnimatedField>

                        <AnimatedField show={showPassport}>
                          <Controller
                            name="passportDateOfExpiry"
                            control={control}
                            render={({ field }) => (
                              <DatePickerField
                                label="Date of expiry"
                                value={field.value}
                                onChange={field.onChange}
                                required
                                error={errors.passportDateOfExpiry?.message}
                              />
                            )}
                          />
                        </AnimatedField>

                        <AnimatedField show={showPassport}>
                          <Controller
                            name="passportFile"
                            control={control}
                            render={({ field }) => (
                              <FileUploadField
                                label="Attach passport copy"
                                value={field.value}
                                onChange={field.onChange}
                              />
                            )}
                          />
                        </AnimatedField>

                        {/* Emirates ID fields - UAE */}
                        <AnimatedField show={showEmiratesId}>
                          <Controller
                            name="emiratesId"
                            control={control}
                            render={({ field }) => (
                              <InputField
                                label="Emirates ID"
                                required
                                inputMode="numeric"
                                autoComplete="off"
                                error={errors.emiratesId?.message}
                                value={field.value || ""}
                                onChange={(e) =>
                                  field.onChange(
                                    sanitizeDigits(e.target.value, 15),
                                  )
                                }
                                onBlur={field.onBlur}
                                name={field.name}
                                ref={field.ref}
                              />
                            )}
                          />
                        </AnimatedField>

                        <AnimatedField show={showEmiratesId}>
                          <Controller
                            name="emiratesIdIssueDate"
                            control={control}
                            render={({ field }) => (
                              <DatePickerField
                                label="Emirates ID issue date"
                                value={field.value}
                                onChange={(date) => {
                                  if (date && isFutureDate(date)) {
                                    setError("emiratesIdIssueDate", {
                                      type: "manual",
                                      message:
                                        "Emirates ID issue date cannot be in the future",
                                    });
                                    return;
                                  }
                                  clearErrors("emiratesIdIssueDate");
                                  field.onChange(date);
                                }}
                                required
                                error={errors.emiratesIdIssueDate?.message}
                              />
                            )}
                          />
                        </AnimatedField>

                        <AnimatedField show={showEmiratesId}>
                          <Controller
                            name="emiratesIdExpiryDate"
                            control={control}
                            render={({ field }) => (
                              <DatePickerField
                                label="Emirates ID expiry date"
                                value={field.value}
                                onChange={field.onChange}
                                required
                                error={errors.emiratesIdExpiryDate?.message}
                              />
                            )}
                          />
                        </AnimatedField>

                        <AnimatedField show={showEmiratesId}>
                          <Controller
                            name="emiratesIdFile"
                            control={control}
                            render={({ field }) => (
                              <FileUploadField
                                label="Attach Emirates ID"
                                value={field.value}
                                onChange={field.onChange}
                              />
                            )}
                          />
                        </AnimatedField>
                        <AnimatedField show={showPersonNameFields}>
                          <InputField
                            label="First name"
                            required
                            error={errors.firstName?.message}
                            {...register("firstName")}
                          />

                          <InputField
                            label="Middle name"
                            error={errors.middleName?.message}
                            {...register("middleName")}
                          />

                          <InputField
                            label="Last Name Prefix"
                            error={errors?.lastNamePrefix?.message}
                            {...register("lastNamePrefix")}
                          />
                        </AnimatedField>

                        {/* <Controller
                          name="lastNamePrefix"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Title"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...NAME_PREFIXES]}
                              required
                              error={errors.lastNamePrefix?.message}
                              placeholder="Select..."
                            />
                          )}
                        /> */}

                        <AnimatedField show={showPersonNameFields}>
                          <InputField
                            label="Last name"
                            required
                            error={errors.lastName?.message}
                            {...register("lastName")}
                          />
                        </AnimatedField>
                      </FormSection>
                    </motion.div>
                  </AnimatedField>
                  {/* Address Information */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="Address">
                      <AnimatedField show={isOrganization}>
                        <FormD365Lookup
                          name="countryRegion"
                          control={control}
                          label="Country/region"
                          required
                          enableSearch
                          searchPlaceholder={"Search Country/Region"}
                          data={countries}
                          loading={countriesLoading}
                          onOpen={() => setOpenLookup("countries")}
                          columns={[
                            { key: "label", label: "Country/Region" },
                            { key: "description", label: "Description" },
                          ]}
                          error={errors.countryRegion?.message}
                        />
                      </AnimatedField>

                      <AnimatedField show={isPerson}>
                        <FormD365Lookup
                          name="countryRegion"
                          control={control}
                          label="Country/region"
                          required
                          enableSearch
                          searchPlaceholder={"Search Country/Region"}
                          data={countries}
                          loading={countriesLoading}
                          onOpen={() => setOpenLookup("countries")}
                          columns={[
                            { key: "label", label: "Country/Region" },
                            { key: "description", label: "Description" },
                          ]}
                          error={errors.countryRegion?.message}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <InputField label="Post box" {...register("postBox")} />
                      </AnimatedField>

                      <FormD365Lookup
                        name="zipPostalCode"
                        control={control}
                        label="ZIP Codes"
                        required
                        allowCustomValue
                        enableSearch
                        searchPlaceholder={"Search Zip codes"}
                        data={zipCodes}
                        loading={zipCodesLoading}
                        onOpen={() => setOpenLookup("zipCodes")}
                        columns={[
                          { key: "label", label: "CODE" },
                          { key: "description", label: "CITY" },
                        ]}
                        error={errors.zipPostalCode?.message}
                      />

                      <FormD365Lookup
                        name="city"
                        control={control}
                        label="City"
                        required
                        placeholder={
                          allowCustomCityEntry ? "Enter city" : "Select city"
                        }
                        enableSearch
                        searchPlaceholder={"Search City"}
                        data={cities}
                        loading={citiesLoading}
                        onOpen={() => setOpenLookup("cities")}
                        allowCustomValue={allowCustomCityEntry}
                        columns={[
                          { key: "label", label: "City" },
                          { key: "description", label: "State" },
                        ]}
                        error={errors.city?.message}
                        disabled={!countryRegion}
                      />
                      <InputField
                        label="Street"
                        {...register("street")}
                        required
                        error={errors.street?.message}
                      />

                      <AnimatedField show={showExtendedAddress}>
                        <Controller
                          name="makaniNumber"
                          control={control}
                          render={({ field }) => (
                            <InputField
                              label="Makani number"
                              inputMode="numeric"
                              autoComplete="off"
                              value={field.value || ""}
                              onChange={(e) =>
                                field.onChange(
                                  sanitizeDigits(e.target.value, 10),
                                )
                              }
                              onBlur={field.onBlur}
                              name={field.name}
                              ref={field.ref}
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <FormD365Lookup
                          name="state"
                          control={control}
                          label="State"
                          data={STATES}
                          columns={[{ key: "label", label: "State" }]}
                          placeholder="Select state"
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <InputField
                          label="Street number"
                          {...register("streetNumber")}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <FormD365Lookup
                          name="district"
                          control={control}
                          label="District"
                          data={DISTRICTS}
                          columns={[{ key: "label", label: "District" }]}
                          placeholder="Select district"
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <InputField
                          label="Building complement"
                          {...register("buildingComplement")}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <FormD365Lookup
                          name="county"
                          control={control}
                          label="County"
                          data={COUNTIES}
                          columns={[{ key: "label", label: "County" }]}
                          placeholder="Select county"
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <FormD365Lookup
                          name="addressBooks"
                          control={control}
                          label="Address books"
                          data={ADDRESS_BOOKS}
                          columns={[{ key: "label", label: "Address books" }]}
                          placeholder="Select address book"
                        />
                      </AnimatedField>
                    </FormSection>
                  </motion.div>
                  {/* Contact Information */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="Contact information">
                      {/* Telephone */}
                      <div className="col-span-full">
                        <p className="text-sm font-semibold text-foreground mb-3">
                          TELEPHONE
                        </p>
                      </div>

                      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <FormD365Lookup
                          name="telCountryCode"
                          control={control}
                          label="Country code"
                          required
                          data={COUNTRY_CODES}
                          columns={[{ key: "label", label: "Country code" }]}
                          placeholder="Select country code"
                        />

                        {showTelAreaCodeLookup && (
                          <FormD365Lookup
                            name="telAreaCode"
                            control={control}
                            label="Code/ Area code"
                            data={UAE_TELEPHONE_AREA_CODES}
                            columns={[
                              { key: "countryCode", label: "Country code" },
                              { key: "label", label: "Code/ Area code" },
                            ]}
                            placeholder="Select code"
                          />
                        )}

                        <Controller
                          name="telNumber"
                          control={control}
                          render={({ field }) => (
                            <InputField
                              label="Tel Number"
                              required
                              type="tel"
                              placeholder="Enter telephone number"
                              error={errors.telNumber?.message}
                              value={field.value || ""}
                              onChange={(e) =>
                                field.onChange(
                                  sanitizePhoneNumber(
                                    e.target.value,
                                    telCountryCode,
                                    7,
                                    10,
                                  ),
                                )
                              }
                              onBlur={field.onBlur}
                              name={field.name}
                              ref={field.ref}
                            />
                          )}
                        />

                        <InputField
                          label="Extension"
                          {...register("extension")}
                        />
                      </div>

                      {/* Mobile */}
                      <div className="col-span-full mt-4">
                        <p className="text-sm font-semibold text-foreground mb-3">
                          MOBILE
                        </p>
                      </div>

                      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FormD365Lookup
                          name="mobileCountryCode"
                          control={control}
                          label="Country code"
                          required
                          data={COUNTRY_CODES}
                          columns={[{ key: "label", label: "Country code" }]}
                          placeholder="Select country code"
                          error={errors.mobileCountryCode?.message}
                        />

                        {showMobileAreaCodeLookup && (
                          <FormD365Lookup
                            name="mobileAreaCode"
                            control={control}
                            label="Code/ Area code"
                            data={UAE_MOBILE_AREA_CODES}
                            columns={[
                              { key: "countryCode", label: "Country code" },
                              { key: "label", label: "Code/ Area code" },
                            ]}
                            placeholder="Select code"
                          />
                        )}

                        <Controller
                          name="mobileNumber"
                          control={control}
                          render={({ field }) => (
                            <InputField
                              label="Mobile Number"
                              required
                              type="tel"
                              placeholder="Enter mobile number"
                              error={errors.mobileNumber?.message}
                              value={field.value || ""}
                              onChange={(e) =>
                                field.onChange(
                                  sanitizePhoneNumber(
                                    e.target.value,
                                    mobileCountryCode,
                                    7,
                                    15,
                                  ),
                                )
                              }
                              onBlur={field.onBlur}
                              name={field.name}
                              ref={field.ref}
                            />
                          )}
                        />
                      </div>

                      <InputField label="Fax" {...register("fax")} />

                      <InputField
                        label="Email address"
                        type="email"
                        required
                        error={errors.emailAddress?.message}
                        {...register("emailAddress")}
                      />

                      <InputField
                        label="Confirm email"
                        type="email"
                        required
                        error={errors.confirmEmail?.message}
                        {...register("confirmEmail")}
                      />

                      <InputField label="Website" {...register("website")} />
                    </FormSection>
                  </motion.div>
                  <Controller
                    name="consent"
                    control={control}
                    render={({ field }) => (
                      <FormField label="" error={errors.consent?.message}>
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="consent"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                          <label
                            htmlFor="consent"
                            className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                          >
                            I confirm that the information provided is accurate
                            and I consent to its use for vendor registration and
                            system processing.
                          </label>
                        </div>
                      </FormField>
                    )}
                  />
                  {/* Submit Button */}
                  <motion.div
                    variants={sectionVariants}
                    className="flex justify-end pt-4"
                  >
                    <Button type="submit" disabled={isSubmitting} bg={true}>
                      {isSubmitting ? (
                        <>Submitting...</>
                      ) : (
                        <>Submit Registration</>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
