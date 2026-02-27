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
import { SelectField } from "@/components/form/SelectField";
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
  getCitiesForCountry,
  COUNTRIES,
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

export default function VendorRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createVendorMutation = useCreateVendor();

  const searchParams = useSearchParams();

  const company = searchParams.get("company");

  const [openLookup, setOpenLookup] = useState(null);

  const { data: paymentTerms = [], isLoading: ptLoading } = usePaymentTerms(
    openLookup === "paymentTerms",
  );

  const { data: taxGroups = [], isLoading: taxGroupsLoading } = useTaxGroups(
    openLookup === "taxGroups",
  );

  const { data: lineOfBusiness = [], isLoading: lineOfBusinessLoading } =
    useLineOfBusiness(openLookup === "lineOfBusiness");

  const { data: zipCodes = [], isLoading: zipCodesLoading } = useZipCodes(
    openLookup === "zipCodes",
  );

  const { data: currencies = [], isLoading: currenciesLoading } = useCurrencies(
    openLookup === "currencies",
  );

  const { data: deliveryTerms = [], isLoading: dlvTermsLoading } =
    useDeliveryTerms(openLookup === "deliveryTerms");

  const { data: dlvModes = [], isLoading: dlvModesLoading } = useDeliveryModes(
    openLookup === "dlvModes",
  );

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(vendorFormSchema),
    defaultValues: {
      vendorType: "organization",
      currency: "AED",
      vendorClassificationGroup: "onetime",
      trnType: "with_trn",
      salesTaxGroup: "vat",
      countryRegion: "UAE",
      mobileCountryCode: "+971",
    },
  });

  const vendorType = watch("vendorType");
  const vendorClassificationGroup = watch("vendorClassificationGroup");
  const trnType = watch("trnType");
  const countryRegion = watch("countryRegion");

  const isOrganization = vendorType === "organization";
  const isPerson = vendorType === "person";
  const isRegular = vendorClassificationGroup === "regular";
  const isUAE = countryRegion === "UAE";
  const showPassport = isPerson && !isUAE;
  const showEmiratesId = isPerson && isUAE;

  const showExtendedAddress = (isOrganization && isRegular) || isPerson;

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

      normalizeFiles(values.passportFile).forEach((file) =>
        formData.append("files", file),
      );

      normalizeFiles(values.emiratesIdFile).forEach((file) =>
        formData.append("files", file),
      );
      console.log("Vendor form payload:");
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
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
          <SelectedCompany
            currentPage="vendor-registration"
          />

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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
                        label="Curreny"
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

                      <Controller
                        name="vendorClassificationGroup"
                        control={control}
                        render={({ field }) => (
                          <RadioGroupField
                            label="Vendor classification group"
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
                        required
                        data={paymentTerms}
                        loading={ptLoading}
                        onOpen={() => setOpenLookup("paymentTerms")}
                        columns={[
                          { key: "label", label: "Terms of payment" },
                          { key: "description", label: "Description" },
                        ]}
                        error={errors.paymentTerms?.message}
                      />

                      <FormD365Lookup
                        name="deliveryTerms"
                        control={control}
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
                        required
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
                        required
                        data={lineOfBusiness}
                        loading={lineOfBusinessLoading}
                        onOpen={() => setOpenLookup("lineOfBusiness")}
                        columns={[
                          { key: "label", label: "Business" },
                          { key: "description", label: "Description" },
                        ]}
                        error={errors.lineOfBusiness?.message}
                      />

                      <InputField label="Segment" {...register("segment")} />

                      <Controller
                        name="subsegment"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Subsegment"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...SUBSEGMENTS]}
                            placeholder="Select subsegment"
                          />
                        )}
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

                        <InputField
                          label="Trade license"
                          required
                          error={errors.tradeLicense?.message}
                          {...register("tradeLicense")}
                        />

                        <Controller
                          name="tradeLicenseIssueDate"
                          control={control}
                          render={({ field }) => (
                            <DatePickerField
                              label="Trade license issue date"
                              value={field.value}
                              onChange={field.onChange}
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
                          {...register("companyName")}
                        />

                        {/* Regular-specific organization fields */}
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
                          <Controller
                            name="companyChain"
                            control={control}
                            render={({ field }) => (
                              <SelectField
                                label="Company chain"
                                value={field.value || ""}
                                onChange={field.onChange}
                                options={[...COMPANY_CHAINS]}
                                placeholder="Select company chain"
                              />
                            )}
                          />
                        </AnimatedField>

                        <Controller
                          name="methodOfPayment"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Method of payment"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...PAYMENT_METHODS]}
                              required
                              error={errors.methodOfPayment?.message}
                            />
                          )}
                        />

                        <AnimatedField show={trnType === "with_trn"}>
                          <InputField
                            label="TRN"
                            required
                            error={errors.trn?.message}
                            {...register("trn")}
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
                          <InputField
                            label="Passport number"
                            required
                            error={errors.passportNumber?.message}
                            {...register("passportNumber")}
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
                                onChange={field.onChange}
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
                          <InputField
                            label="Emirates ID"
                            required
                            error={errors.emiratesId?.message}
                            {...register("emiratesId")}
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
                                onChange={field.onChange}
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

                        {/* Name fields - always shown for Person */}
                        {/* <Controller
                          name="firstName"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="First name"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[
                                { value: "john", label: "John" },
                                { value: "jane", label: "Jane" },
                                { value: "ahmed", label: "Ahmed" },
                                { value: "fatima", label: "Fatima" },
                                { value: "mohammed", label: "Mohammed" },
                              ]}
                              required
                              error={errors.firstName?.message}
                            />
                          )}
                        />

                        <Controller
                          name="middleName"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Middle name"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[
                                { value: "ali", label: "Ali" },
                                { value: "omar", label: "Omar" },
                                { value: "hassan", label: "Hassan" },
                                { value: "khalid", label: "Khalid" },
                              ]}
                              required
                              error={errors.middleName?.message}
                            />
                          )}
                        />

                        <Controller
                          name="lastNamePrefix"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Last name prefix"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...NAME_PREFIXES]}
                              required
                              error={errors.lastNamePrefix?.message}
                            />
                          )}
                        />

                        <Controller
                          name="lastName"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Last name"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[
                                { value: "smith", label: "Smith" },
                                { value: "johnson", label: "Johnson" },
                                { value: "khan", label: "Khan" },
                                { value: "ahmed", label: "Ahmed" },
                                { value: "ali", label: "Ali" },
                              ]}
                              required
                              error={errors.lastName?.message}
                            />
                          )}
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

                        <Controller
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
                        />

                        <InputField
                          label="Last name"
                          required
                          error={errors.lastName?.message}
                          {...register("lastName")}
                        />
                      </FormSection>
                    </motion.div>
                  </AnimatedField>

                  {/* Address Information */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="Address">
                      <AnimatedField show={isOrganization}>
                        <Controller
                          name="countryRegion"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Country/region"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...COUNTRIES]}
                              required
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isPerson}>
                        <Controller
                          name="countryRegion"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Country/region"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...COUNTRIES]}
                              required
                            />
                          )}
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
                        data={zipCodes}
                        loading={zipCodesLoading}
                        onOpen={() => setOpenLookup("zipCodes")}
                        columns={[
                          { key: "label", label: "CODE" },
                          { key: "description", label: "CITY" },
                        ]}
                        error={errors.zipPostalCode?.message}
                      />

                      {/* <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="City"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[
                              ...getCitiesForCountry(countryRegion || "UAE"),
                            ]}
                            required
                            error={errors.city?.message}
                          />
                        )}
                      /> */}

                      <InputField
                        label="City"
                        required
                        error={errors.city?.message}
                        {...register("city")}
                      />
                      <InputField
                        label="Street"
                        {...register("street")}
                        required
                        error={errors.street?.message}
                      />

                      <AnimatedField show={showExtendedAddress}>
                        <InputField
                          label="Makani number"
                          {...register("makaniNumber")}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <Controller
                          name="state"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="State"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...STATES]}
                              placeholder="Select state"
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <InputField
                          label="Street number"
                          {...register("streetNumber")}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <Controller
                          name="district"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="District"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...DISTRICTS]}
                              placeholder="Select district"
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <InputField
                          label="Building complement"
                          {...register("buildingComplement")}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <Controller
                          name="county"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="County"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...COUNTIES]}
                              placeholder="Select county"
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={showExtendedAddress}>
                        <Controller
                          name="addressBooks"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Address books"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...ADDRESS_BOOKS]}
                              placeholder="Select address book"
                            />
                          )}
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

                      <AnimatedField show={isOrganization}>
                        <Controller
                          name="telCountryCode"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Country code"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...COUNTRY_CODES]}
                              required
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isPerson}>
                        <Controller
                          name="telCountryCode"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Country code"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...COUNTRY_CODES]}
                              placeholder="Select code"
                            />
                          )}
                        />
                      </AnimatedField>

                      <InputField
                        label="Tel number"
                        required
                        error={errors.telNumber?.message}
                        {...register("telNumber")}
                      />

                      <InputField
                        label="Extension"
                        {...register("extension")}
                      />

                      {/* Mobile */}
                      <div className="col-span-full mt-4">
                        <p className="text-sm font-semibold text-foreground mb-3">
                          MOBILE
                        </p>
                      </div>

                      <Controller
                        name="mobileCountryCode"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Country code"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...COUNTRY_CODES]}
                            required
                            error={errors.mobileCountryCode?.message}
                          />
                        )}
                      />

                      <InputField
                        label="Mobile number"
                        required
                        error={errors.mobileNumber?.message}
                        {...register("mobileNumber")}
                      />

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
