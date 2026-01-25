"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2, Building2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { FormSection } from "@/components/form/FormSection";
import { InputField } from "@/components/form/InputField";
import { SelectField } from "@/components/form/SelectField";
import { RadioGroupField } from "@/components/form/RadioGroupField";
import { DatePickerField } from "@/components/form/DatePickerField";
import { FileUploadField } from "@/components/form/FileUploadField";
import { FormField } from "@/components/form/FormField";
import {
  AnimatedField,
  AnimatedGroup,
  AnimatedGroupItem,
} from "@/components/form/AnimatedField";

import { customerFormSchema } from "@/lib/customerFormSchema";
import {
  CUSTOMER_TYPES,
  CUSTOMER_CLASSIFICATION_GROUPS,
  CURRENCIES,
  VAT_TYPES,
  PAYMENT_TERMS,
  PAYMENT_METHODS,
  DELIVERY_TERMS,
  DELIVERY_MODES,
  COUNTRIES,
  COUNTRY_CODES,
  SALES_TAX_GROUPS,
  SOURCE_CODES,
  LINE_OF_BUSINESS,
  SEGMENTS,
  SUBSEGMENTS,
  ADDRESS_BOOKS,
  STATES,
  DISTRICTS,
  COUNTIES,
  getCitiesForCountry,
} from "@/lib/formConstants";
import Button from "../Button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Checkbox } from "../checkbox";
import { Label } from "@/components/form/Label";
import { Switch } from "@/components/form/Switch";

// Page animation variants
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

export default function CustomerRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerFormSchema),
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
  const showTrn = isOneTime ? trnType === "with_trn" : (isCredit && vatRegistered);

  // Reset customerType to organization when switching to OneTime
  useEffect(() => {
    if (isOneTime && isPerson) {
      setValue("customerType", "organization");
    }
  }, [isOneTime, isPerson, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      toast.success("Registration submitted successfully!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Customer type options based on classification
  const customerTypeOptions = isOneTime
    ? [{ value: "organization", label: "Organization" }]
    : [...CUSTOMER_TYPES];

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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* A. Basic Customer Details */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="A. Basic Customer Details">
                      <InputField
                        label="Customer Account"
                        {...register("customerAccount")}
                      />

                      <AnimatedField show={showTrn}>
                        <InputField
                          label="TRN"
                          required
                          error={errors.trn?.message}
                          {...register("trn")}
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

                      <Controller
                        name="currency"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Currency"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...CURRENCIES]}
                          />
                        )}
                      />
                    </FormSection>
                  </motion.div>

                  {/* B. Tax & Compliance Information */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="B. Tax & Compliance Information">
                      {/* OneTime: TRN Type field */}
                      <AnimatedField show={isOneTime}>
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
                      </AnimatedField>

                      {/* Organization fields */}
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
                              onChange={field.onChange}
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

                      {/* Person fields (Credit only) */}
                      <AnimatedField show={isPerson && isCredit}>
                        <InputField
                          label="Full Name"
                          required
                          error={errors.fullName?.message}
                          {...register("fullName")}
                        />
                      </AnimatedField>

                      {/* Person UAE - Emirates ID */}
                      <AnimatedField show={isPerson && isCredit && isUAE}>
                        <InputField
                          label="Emirates ID"
                          required
                          error={errors.emiratesId?.message}
                          {...register("emiratesId")}
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
                              onChange={field.onChange}
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
                          error={errors.passportNumber?.message}
                          {...register("passportNumber")}
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
                              onChange={field.onChange}
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
                    </FormSection>
                  </motion.div>

                  {/* C. Commercial Terms */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="C. Commercial Terms">
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

                      <Controller
                        name="paymentTerms"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Terms of Payment"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...PAYMENT_TERMS]}
                            required
                            error={errors.paymentTerms?.message}
                            placeholder="Select..."
                          />
                        )}
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
                            <Label className="font-normal">{holdingCompany ? "Yes" : "No"}</Label>
                          </div>
                        </FormField>
                      </AnimatedField>

                      <Controller
                        name="deliveryTerms"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Delivery Terms"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...DELIVERY_TERMS]}
                            required
                            error={errors.deliveryTerms?.message}
                            placeholder="Select..."
                          />
                        )}
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

                      <Controller
                        name="deliveryMode"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Mode of Delivery"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...DELIVERY_MODES]}
                            required
                            error={errors.deliveryMode?.message}
                            placeholder="Select..."
                          />
                        )}
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
                            <Label className="font-normal">{vatRegistered ? "Yes" : "No"}</Label>
                          </div>
                        </FormField>
                      </AnimatedField>

                      <Controller
                        name="salesTaxGroup"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Sales Tax Group"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...SALES_TAX_GROUPS]}
                            placeholder="Select..."
                          />
                        )}
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
                    </FormSection>
                  </motion.div>

                  {/* D. Business Classification */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="D. Business Classification">
                      <Controller
                        name="sourceCode"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Source Code"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...SOURCE_CODES]}
                            placeholder="Select..."
                          />
                        )}
                      />

                      <Controller
                        name="lineOfBusiness"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Line of Business"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...LINE_OF_BUSINESS]}
                            placeholder="Select..."
                          />
                        )}
                      />

                      <Controller
                        name="segment"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Segment"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...SEGMENTS]}
                            placeholder="Select..."
                          />
                        )}
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
                    <FormSection title="E. Address">
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

                      {/* Credit has more address fields */}
                      <AnimatedField show={isCredit}>
                        <InputField
                          label="Post Box"
                          {...register("poBox")}
                        />
                      </AnimatedField>

                      <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="City"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...getCitiesForCountry(country)]}
                            required
                            error={errors.city?.message}
                            placeholder="Select city"
                          />
                        )}
                      />

                      <InputField
                        label="ZIP/Postal Code"
                        {...register("zipPostalCode")}
                      />

                      <InputField
                        label="Makani Number"
                        {...register("makaniNo")}
                      />

                      <InputField
                        label="Street"
                        {...register("street")}
                        error={errors.street?.message}
                      />

                      {/* Credit only: Additional address fields */}
                      <AnimatedField show={isCredit}>
                        <Controller
                          name="state"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="State"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...STATES]}
                              placeholder="Select..."
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isCredit}>
                        <InputField
                          label="Street Number"
                          {...register("streetNumber")}
                        />
                      </AnimatedField>

                      <AnimatedField show={isCredit}>
                        <Controller
                          name="district"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="District"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...DISTRICTS]}
                              placeholder="Select..."
                            />
                          )}
                        />
                      </AnimatedField>

                      <AnimatedField show={isCredit}>
                        <InputField
                          label="Building Complement"
                          {...register("buildingComplement")}
                        />
                      </AnimatedField>

                      <AnimatedField show={isCredit}>
                        <Controller
                          name="county"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="County"
                              value={field.value || ""}
                              onChange={field.onChange}
                              options={[...COUNTIES]}
                              placeholder="Select..."
                            />
                          )}
                        />
                      </AnimatedField>

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

                  {/* F. Contact Information */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="F. Contact Information">
                      <div className="col-span-full">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-3">TELEPHONE</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Controller
                            name="telCountryCode"
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
                            label="Tel Number"
                            required
                            type="tel"
                            error={errors.telephone?.message}
                            {...register("telephone")}
                          />

                          <InputField
                            label="Extension"
                            {...register("extension")}
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-3">MOBILE</h3>
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
                            required
                            type="tel"
                            error={errors.mobileNumber?.message}
                            {...register("mobileNumber")}
                          />
                        </div>
                      </div>

                      <InputField
                        label="Fax"
                        {...register("fax")}
                      />

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

                  {/* G. Consent & Submission */}
                  <motion.div
                    variants={sectionVariants}
                    className="border-t pt-6"
                  >
                    <Controller
                      name="consent"
                      control={control}
                      render={({ field }) => (
                        <FormField
                          label=""
                          error={errors.consent?.message}
                        >
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
                              I confirm that the information provided is accurate and I consent to its use for customer registration and system processing.
                            </label>
                          </div>
                        </FormField>
                      )}
                    />

                    <motion.div variants={sectionVariants} className="flex justify-end pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        bg={true}
                      >
                        {isSubmitting ? (
                          <>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Registration
                          </>
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
