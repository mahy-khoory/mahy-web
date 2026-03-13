"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { FormSection } from "@/components/form/FormSection";
import { InputField } from "@/components/form/InputField";
import { SelectField } from "@/components/form/SelectField";
import { RadioGroupField } from "@/components/form/RadioGroupField";
import { DatePickerField } from "@/components/form/DatePickerField";
import { FileUploadField } from "@/components/form/FileUploadField";
import { FormField } from "@/components/form/FormField";
import { AnimatedField } from "@/components/form/AnimatedField";
import { usePaymentTerms } from "@/lib/hooks/usePaymentTerms";
import { useCurrencies } from "@/lib/hooks/useCurrencies";
import { customerFormSchema } from "@/lib/customerFormSchema";
import { useSearchParams } from "next/navigation";

import {
  CUSTOMER_TYPES,
  CUSTOMER_CLASSIFICATION_GROUPS,
  PAYMENT_METHODS,
  NAME_PREFIXES,
  COUNTRIES,
  COUNTRY_CODES,
  VAT_TYPES,
  SUBSEGMENTS,
  ADDRESS_BOOKS,
  getStatesForCountry,
} from "@/lib/formConstants";
import Button from "../Button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Checkbox } from "../checkbox";
import { Label } from "@/components/form/Label";
import { Switch } from "@/components/form/Switch";
import FormD365Lookup from "@/components/Lookup/FormD365Lookup";
import { useDeliveryTerms } from "@/lib/hooks/useDeliveryTerms";
import { useTaxGroups } from "@/lib/hooks/useTaxGroups";
import { useLineOfBusiness } from "@/lib/hooks/useLineOfBusiness";
import { useDeliveryModes } from "@/lib/hooks/useDeliveryModes";
import { useZipCodes } from "@/lib/hooks/useZipCodes";
import { useCreateCustomer } from "@/lib/hooks/useCreateCustomer";
import SelectedCompany from "@/components/SelectedCompany";

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

export default function CustomerRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createCustomerMutation = useCreateCustomer();
  const searchParams = useSearchParams();

  const company = searchParams.get("company");
  const [openLookup, setOpenLookup] = useState(null);

  const { data: paymentTerms = [], isLoading: ptLoading } = usePaymentTerms(
    company,
    openLookup === "paymentTerms",
  );

  const { data: currencies = [], isLoading: currenciesLoading } = useCurrencies(
    openLookup === "currencies",
  );

  const { data: deliveryTerms = [], isLoading: dlvTermsLoading } =
    useDeliveryTerms(company, openLookup === "deliveryTerms");

  const { data: taxGroups = [], isLoading: taxGroupsLoading } = useTaxGroups(
    company,
    openLookup === "taxGroups",
  );

  const { data: lineOfBusiness = [], isLoading: lineOfBusinessLoading } =
    useLineOfBusiness(company, openLookup === "lineOfBusiness");

  const { data: dlvModes = [], isLoading: dlvModesLoading } = useDeliveryModes(
    company,
    openLookup === "dlvModes",
  );

  const { data: zipCodes = [], isLoading: zipCodesLoading } = useZipCodes(
    openLookup === "zipCodes",
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
    resolver: zodResolver(customerFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    defaultValues: {
      customerType: "organization",
      classificationGroup: "credit",
      currency: "AED",
      trnType: "with_trn",
      country: "UAE",
      paymentTerms: "",
      paymentMethod: "",
      deliveryTerms: "",
      deliveryMode: "",
      telCountryCode: "+971",
      mobileCountryCode: "+971",
      holdingCompany: false,
      vatRegistered: true,
    },
  });

  const classificationGroup = watch("classificationGroup");
  const customerType = watch("customerType");
  const trnType = watch("trnType");
  const country = watch("country");
  const holdingCompany = watch("holdingCompany");
  const vatRegistered = watch("vatRegistered");

  const isCredit = classificationGroup === "credit";
  const isOneTime = classificationGroup === "onetime";
  const isOrganization = customerType === "organization";
  const isPerson = customerType === "individual";
  const isUAE = country === "UAE";
  const showTrn = isOneTime
    ? trnType === "with_trn"
    : isCredit && vatRegistered && isOrganization;

  useEffect(() => {
    if (isOneTime && isPerson && trnType === "with_trn") {
      setValue("customerType", "organization");
    }
  }, [isOneTime, isPerson, trnType, setValue]);

  // state when country changes
  useEffect(() => {
    setValue("state", "");
  }, [country, setValue]);

  useEffect(() => {
    // person => always NET000D
    if (isPerson) {
      setValue("paymentTerms", "NET000D", {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [isPerson, setValue]);

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

      Object.entries(values).forEach(([key, value]) => {
        if (
          value === undefined ||
          value === null ||
          value === "" ||
          key.endsWith("File")
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

      normalizeFiles(values.emiratesIdFile).forEach((file) =>
        formData.append("files", file),
      );

      normalizeFiles(values.passportFile).forEach((file) =>
        formData.append("files", file),
      );

      // console.log("Customer form payload:");
      for (const pair of formData.entries()) {
        // console.log(pair[0], pair[1]);
      }

      await createCustomerMutation.mutateAsync(formData);

      toast.success("Customer registered successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to register customer");
    } finally {
      setIsSubmitting(false);
    }
  };

  const customerTypeOptions =
    isOneTime && trnType === "with_trn"
      ? [{ value: "organization", label: "Organization" }]
      : [...CUSTOMER_TYPES];

  const stateOptions = getStatesForCountry(country);

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
        className="min-h-screen py-8 px-4"
      >
        <div className="max-w-5xl mx-auto pt-20">
          <SelectedCompany currentPage="customer-registration" />

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
                    <Building2 className="h-7 w-7" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      Customer Registration
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Please fill in all required fields to complete
                      registration
                    </p>
                  </div>
                </motion.div>
              </CardHeader>

              <CardContent className="p-6">
                <form
                  onSubmit={handleSubmit(onSubmit, onInvalid)}
                  className="space-y-8"
                >
                  {/* Basic Details - Combined Section */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="Basic Details">
                      {/* Basic Customer Details */}
                      <AnimatedField show={showTrn}>
                        <InputField
                          label="TRN"
                          required
                          error={errors.trn?.message}
                          inputMode="numeric"
                          autoComplete="off"
                          placeholder="Enter 15-digit TRN"
                          {...register("trn", {
                            onChange: (e) => {
                              e.target.value = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 15);
                            },
                          })}
                        />
                      </AnimatedField>

                      <Controller
                        name="customerType"
                        control={control}
                        render={({ field }) => (
                          <RadioGroupField
                            label="Organization/Person"
                            value={field.value}
                            onChange={field.onChange}
                            options={customerTypeOptions}
                            error={errors.customerType?.message}
                          />
                        )}
                      />

                      <InputField
                        label="Customer Group"
                        {...register("customerGroup")}
                      />

                      <AnimatedField>
                        <InputField
                          label="Customer Account"
                          // required={isCredit && isOrganization}
                          // error={errors.customerAccount?.message}
                          {...register("customerAccount")}
                        />
                      </AnimatedField>

                      {/* <AnimatedField show={isOneTime}>
                        <Controller
                          name="trnType"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="TRN Type"
                              value={field.value || "with_trn"}
                              onChange={field.onChange}
                              options={[...VAT_TYPES]}
                            />
                          )}
                        />
                      </AnimatedField> */}

                      <AnimatedField show={isOneTime}>
                        <Controller
                          name="trnType"
                          control={control}
                          render={({ field }) => (
                            <RadioGroupField
                              label="TRN Type"
                              value={field.value}
                              onChange={field.onChange}
                              options={[
                                { value: "with_trn", label: "With TRN" },
                                { value: "without_trn", label: "Without TRN" },
                              ]}
                            />
                          )}
                        />
                      </AnimatedField>

                      <Controller
                        name="classificationGroup"
                        control={control}
                        render={({ field }) => (
                          <RadioGroupField
                            label="Customer Classification Group"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...CUSTOMER_CLASSIFICATION_GROUPS]}
                          />
                        )}
                      />

                      <FormD365Lookup
                        name="currency"
                        control={control}
                        enableSearch
                        searchPlaceholder={"Search Currency"}
                        label="Currency"
                        required
                        data={currencies}
                        loading={currenciesLoading}
                        onOpen={() => setOpenLookup("currencies")}
                        columns={[
                          { key: "label", label: "Currency" },
                          { key: "description", label: "Symbol" },
                        ]}
                        error={errors.currency?.message}
                      />

                      <AnimatedField show={isOrganization}>
                        <InputField
                          label="Trade License"
                          required
                          error={errors.tradeLicense?.message}
                          {...register("tradeLicense")}
                        />
                      </AnimatedField>

                      <AnimatedField show={isOrganization}>
                        <Controller
                          name="tlIssueDate"
                          control={control}
                          render={({ field }) => (
                            <DatePickerField
                              label="Trade License Issue Date"
                              value={field.value}
                              onChange={(date) => {
                                if (date && isFutureDate(date)) {
                                  setError("tlIssueDate", {
                                    type: "manual",
                                    message:
                                      "Trade License issue date cannot be in the future",
                                  });
                                  return;
                                }
                                clearErrors("tlIssueDate");
                                field.onChange(date);
                              }}
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isOrganization}>
                        <Controller
                          name="tlExpiryDate"
                          control={control}
                          render={({ field }) => (
                            <DatePickerField
                              label="Trade License Expiry Date"
                              value={field.value}
                              onChange={field.onChange}
                              error={errors.tlExpiryDate?.message}
                              disabled={(date) => date < new Date()}
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isOrganization}>
                        <Controller
                          name="tradeLicenseFile"
                          control={control}
                          render={({ field }) => (
                            <FileUploadField
                              label="Attach Trade License"
                              value={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isOrganization}>
                        <InputField
                          label="Company Name"
                          {...register("companyName")}
                        />
                      </AnimatedField>

                      {/* Person UAE - Emirates ID */}
                      <AnimatedField show={isPerson && isCredit && isUAE}>
                        <InputField
                          label="Emirates ID"
                          required
                          inputMode="numeric"
                          autoComplete="off"
                          error={errors.emiratesId?.message}
                          {...register("emiratesId", {
                            onChange: (e) => {
                              e.target.value = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 15);
                            },
                          })}
                        />
                      </AnimatedField>

                      <AnimatedField show={isPerson && isCredit && isUAE}>
                        <Controller
                          name="emiratesIdIssueDate"
                          control={control}
                          render={({ field }) => (
                            <DatePickerField
                              label="Emirates ID Issue Date"
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

                      <AnimatedField show={isPerson && isCredit && isUAE}>
                        <Controller
                          name="emiratesIdExpiryDate"
                          control={control}
                          render={({ field }) => (
                            <DatePickerField
                              label="Emirates ID Expiry Date"
                              value={field.value}
                              onChange={field.onChange}
                              required
                              error={errors.emiratesIdExpiryDate?.message}
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isPerson && isCredit && isUAE}>
                        <Controller
                          name="emiratesIdFile"
                          control={control}
                          render={({ field }) => (
                            <FileUploadField
                              label="Attach Emirates ID"
                              value={field.value}
                              onChange={field.onChange}
                              required
                            />
                          )}
                        />
                      </AnimatedField>

                      {/* Person Non-UAE - Passport */}
                      <AnimatedField show={isPerson && isCredit && !isUAE}>
                        <InputField
                          label="Passport Number"
                          required
                          inputMode="numeric"
                          autoComplete="off"
                          error={errors.passportNumber?.message}
                          {...register("passportNumber", {
                            onChange: (e) => {
                              e.target.value = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 15);
                            },
                          })}
                        />
                      </AnimatedField>

                      <AnimatedField show={isPerson && isCredit}>
                        {/* <InputField
                          label="Full Name"
                          required
                          error={errors.fullName?.message}
                          {...register("fullName")}
                        /> */}

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
                      </AnimatedField>

                      <AnimatedField show={isPerson && isCredit}>
                        {/* <Controller
                          name="lastNamePrefix"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Title"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...NAME_PREFIXES]} // Mr / Ms / Mrs / Dr etc.
                              required
                              error={errors.lastNamePrefix?.message}
                              placeholder="Select..."
                            />
                          )}
                        /> */}

                        <InputField
                          label="Last name"
                          required
                          error={errors.lastName?.message}
                          {...register("lastName")}
                        />
                      </AnimatedField>

                      <AnimatedField show={isPerson && isCredit && !isUAE}>
                        <Controller
                          name="passportIssueDate"
                          control={control}
                          render={({ field }) => (
                            <DatePickerField
                              label="Passport Issue Date"
                              value={field.value}
                              onChange={(date) => {
                                if (date && isFutureDate(date)) {
                                  setError("passportIssueDate", {
                                    type: "manual",
                                    message:
                                      "Passport issue date cannot be in the future",
                                  });
                                  return;
                                }
                                clearErrors("passportIssueDate");
                                field.onChange(date);
                              }}
                              required
                              error={errors.passportIssueDate?.message}
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isPerson && isCredit && !isUAE}>
                        <Controller
                          name="passportExpiryDate"
                          control={control}
                          render={({ field }) => (
                            <DatePickerField
                              label="Passport Expiry Date"
                              value={field.value}
                              onChange={field.onChange}
                              required
                              error={errors.passportExpiryDate?.message}
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isPerson && isCredit && !isUAE}>
                        <Controller
                          name="passportFile"
                          control={control}
                          render={({ field }) => (
                            <FileUploadField
                              label="Attach Passport"
                              value={field.value}
                              onChange={field.onChange}
                              required
                            />
                          )}
                        />
                      </AnimatedField>

                      <Controller
                        name="paymentMethod"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Method of Payment"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...PAYMENT_METHODS]}
                            required
                            error={errors.paymentMethod?.message}
                            placeholder="Select..."
                          />
                        )}
                      />

                      <FormD365Lookup
                        name="paymentTerms"
                        control={control}
                        label="Terms of payment"
                        data={paymentTerms}
                        loading={ptLoading}
                        enableSearch
                        searchPlaceholder={"Search Payment Terms"}
                        onOpen={() => setOpenLookup("paymentTerms")}
                        columns={[
                          { key: "label", label: "Terms of payment" },
                          { key: "description", label: "Description" },
                        ]}
                        displayValue={isPerson ? "NET000D" : undefined}
                        disabled={isPerson}
                        error={errors.paymentTerms?.message}
                      />

                      {/* Credit only: Holding Company toggle */}
                      <AnimatedField show={isCredit && isOrganization}>
                        <FormField label="Holding Company">
                          <div className="flex items-center space-x-2">
                            <Controller
                              name="holdingCompany"
                              control={control}
                              render={({ field }) => (
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              )}
                            />
                            <Label className="font-normal">
                              {holdingCompany ? "Yes" : "No"}
                            </Label>
                          </div>
                        </FormField>
                      </AnimatedField>

                      <FormD365Lookup
                        name="deliveryTerms"
                        control={control}
                        label="Delivery Terms"
                        enableSearch
                        searchPlaceholder={"Search Dlv Terms"}
                        data={deliveryTerms}
                        loading={dlvTermsLoading}
                        onOpen={() => setOpenLookup("deliveryTerms")}
                        columns={[
                          { key: "label", label: "Delivery Term" },
                          { key: "description", label: "Description" },
                        ]}
                        error={errors.deliveryTerms?.message}
                      />

                      {/* Credit only: Company Chain */}
                      <AnimatedField show={isCredit && isOrganization}>
                        <Controller
                          name="companyChain"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Company Chain"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[]}
                              placeholder="Select..."
                            />
                          )}
                        />
                      </AnimatedField>

                      <FormD365Lookup
                        name="deliveryMode"
                        control={control}
                        label="Mode Of Delivery"
                        enableSearch
                        searchPlaceholder={"Search Dlv Modes"}
                        data={dlvModes}
                        loading={dlvModesLoading}
                        onOpen={() => setOpenLookup("dlvModes")}
                        columns={[
                          { key: "label", label: "Modes" },
                          { key: "description", label: "Description" },
                        ]}
                        error={errors.deliveryMode?.message}
                      />

                      {/* Credit only: VAT Registered toggle */}
                      <AnimatedField show={isCredit && isOrganization}>
                        <FormField label="VAT Registered">
                          <div className="flex items-center space-x-2">
                            <Controller
                              name="vatRegistered"
                              control={control}
                              render={({ field }) => (
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              )}
                            />
                            <Label className="font-normal">
                              {vatRegistered ? "Yes" : "No"}
                            </Label>
                          </div>
                        </FormField>
                      </AnimatedField>

                      <FormD365Lookup
                        name="salesTaxGroup"
                        control={control}
                        label="Sales Tax Group"
                        enableSearch
                        searchPlaceholder={"Search Sales Tax Groups"}
                        data={taxGroups}
                        loading={taxGroupsLoading}
                        onOpen={() => setOpenLookup("taxGroups")}
                        columns={[
                          { key: "label", label: "Value" },
                          { key: "description", label: "Name" },
                        ]}
                        error={errors.salesTaxGroup?.message}
                      />

                      <Controller
                        name="taxExemptNumber"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Tax Exempt Number"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[]}
                            placeholder="Select..."
                          />
                        )}
                      />

                      <FormD365Lookup
                        name="lineOfBusiness"
                        control={control}
                        label="Line Of Business"
                        enableSearch
                        searchPlaceholder={"Search Line of Business"}
                        data={lineOfBusiness}
                        loading={lineOfBusinessLoading}
                        onOpen={() => setOpenLookup("lineOfBusiness")}
                        columns={[
                          { key: "label", label: "Business" },
                          { key: "description", label: "Description" },
                        ]}
                        error={errors.lineOfBusiness?.message}
                      />

                      <InputField
                        label="Segment"
                        disabled
                        className="opacity-50"
                        {...register("segment")}
                      />

                      <Controller
                        name="subsegment"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Subsegment"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...SUBSEGMENTS]}
                            placeholder="Select..."
                          />
                        )}
                      />
                    </FormSection>
                  </motion.div>

                  {/* E. Address Information */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="Address">
                      <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Country/Region"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...COUNTRIES]}
                            required
                          />
                        )}
                      />

                      <InputField
                        label="City"
                        required
                        error={errors.city?.message}
                        {...register("city")}
                      />

                      <FormD365Lookup
                        name="zipPostalCode"
                        control={control}
                        label="ZIP Codes"
                        required
                        allowCustomValue
                        data={zipCodes}
                        loading={zipCodesLoading}
                        enableSearch
                        searchPlaceholder={"Search Zip codes"}
                        onOpen={() => setOpenLookup("zipCodes")}
                        columns={[
                          { key: "label", label: "CODE" },
                          { key: "description", label: "CITY" },
                        ]}
                        error={errors.zipPostalCode?.message}
                      />

                      <AnimatedField show={stateOptions.length > 0}>
                        <Controller
                          name="state"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="State"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...stateOptions]}
                              placeholder="Select state..."
                            />
                          )}
                        />
                      </AnimatedField>

                      <InputField
                        label="Makani Number"
                        inputMode="numeric"
                        autoComplete="off"
                        placeholder="10-digit Makani number"
                        {...register("makaniNo", {
                          onChange: (e) => {
                            e.target.value = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10);
                          },
                        })}
                      />

                      <InputField
                        label="Street"
                        required
                        error={errors.street?.message}
                        {...register("street")}
                      />

                      <Controller
                        name="addressBooks"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Address Books"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...ADDRESS_BOOKS]}
                            placeholder="Select..."
                          />
                        )}
                      />
                    </FormSection>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="Contact Information">
                      <div className="col-span-full">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                          TELEPHONE
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Controller
                            name="telCountryCode"
                            control={control}
                            render={({ field }) => (
                              <SelectField
                                key={field.value}
                                label="Country Code"
                                value={field.value}
                                onChange={field.onChange}
                                options={[...COUNTRY_CODES]}
                              />
                            )}
                          />

                          <InputField
                            label="Tel Number"
                            required
                            type="tel"
                            placeholder="Enter telephone number"
                            {...register("telephone", {
                              onChange: (e) => {
                                const countryCode = watch("telCountryCode"); // get selected tel country code
                                let value = e.target.value.replace(/\D/g, ""); // remove non-digits

                                // Example: limit by country
                                if (countryCode === "+971") {
                                  value = value.slice(0, 7); // UAE 7 digits
                                } else {
                                  value = value.slice(0, 15);
                                }
                                // Add other countries as needed

                                e.target.value = value;
                              },
                              required: "Telephone number is required",
                            })}
                            error={errors.telephone?.message}
                          />

                          <InputField
                            label="Extension"
                            {...register("extension")}
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                          MOBILE
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Controller
                            name="mobileCountryCode"
                            control={control}
                            render={({ field }) => (
                              <SelectField
                                label="Country Code"
                                value={field.value}
                                onChange={field.onChange}
                                options={[...COUNTRY_CODES]}
                              />
                            )}
                          />

                          <InputField
                            label="Mobile Number"
                            type="tel"
                            placeholder="Enter mobile number"
                            {...register("mobileNumber", {
                              onChange: (e) => {
                                const countryCode = watch("mobileCountryCode"); // get current country code
                                let value = e.target.value.replace(/\D/g, ""); // remove non-numbers

                                // Limit length based on country
                                if (countryCode === "+971") {
                                  value = value.slice(0, 7); // UAE 7 digits
                                }
                                else {
                                  value = value.slice(0, 15);
                                }
                                e.target.value = value;
                              },
                              required: "Mobile number is required",
                            })}
                            error={errors.mobileNumber?.message}
                          />
                        </div>
                      </div>

                      <InputField label="Fax" {...register("fax")} />

                      <InputField
                        label="Email Address"
                        required
                        type="email"
                        error={errors.email?.message}
                        {...register("email")}
                      />

                      <InputField
                        label="Confirm Email"
                        required
                        type="email"
                        error={errors.confirmEmail?.message}
                        {...register("confirmEmail")}
                      />

                      <InputField
                        label="Website"
                        type="url"
                        placeholder="https://"
                        error={errors.website?.message}
                        {...register("website")}
                      />
                    </FormSection>
                  </motion.div>

                  {/* Consent & Submission */}
                  <motion.div
                    variants={sectionVariants}
                    className="space-y-6 border-t border-gray-300 pt-6"
                  >
                    <FormField
                      label="Terms and Conditions"
                      required
                      error={errors.consent?.message}
                    >
                      <div className="flex items-start gap-2 mt-2">
                        <Controller
                          name="consent"
                          control={control}
                          render={({ field }) => (
                            <Checkbox
                              id="consent"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1"
                            />
                          )}
                        />
                        <Label
                          htmlFor="consent"
                          className="text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer"
                        >
                          I confirm that all the information provided is
                          accurate and complete. I agree to the terms and
                          conditions of registration and understand that any
                          false information may result in the rejection of this
                          application.
                        </Label>
                      </div>
                    </FormField>

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
