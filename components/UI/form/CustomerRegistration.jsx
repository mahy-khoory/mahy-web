"use client";

import { useState } from "react";
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
  CURRENCIES,
  VAT_TYPES,
  PAYMENT_TERMS,
  PAYMENT_METHODS,
  DELIVERY_TERMS,
  DELIVERY_MODES,
  COUNTRIES,
  ADDRESS_TYPES,
  COUNTRY_CODES,
  getCitiesForCountry,
  customer_classification_group,
} from "@/lib/formConstants";
import Button from "../Button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Checkbox } from "../checkbox";

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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      customerType: "organization",
      currency: "AED",
      vatRegistration: "with_trn",
      country: "UAE",
      paymentTerms: "cash",
      customerClassification : "one_time",
      paymentMethod: "cash",
      telCountryCode: "+971",
      mobileCountryCode: "+971",
    },
  });

  const customerType = watch("customerType");
  const vatRegistration = watch("vatRegistration");
  const country = watch("country");

  const isOrganization = customerType === "organization";
  const isIndividual = customerType === "individual";
  const isUAE = country === "UAE";
  const showPassport = isIndividual && !isUAE;
  const showEmiratesId = isIndividual && isUAE;

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
                      <Controller
                        name="customerType"
                        control={control}
                        render={({ field }) => (
                          <RadioGroupField
                            label="Customer Type"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...CUSTOMER_TYPES]}
                            required
                            error={errors.customerType?.message}
                          />
                        )}
                      />

                      <AnimatedField show={isOrganization}>
                        <InputField
                          label="Company Name"
                          required
                          error={errors.companyName?.message}
                          {...register("companyName")}
                        />
                      </AnimatedField>

                      <AnimatedField show={isIndividual}>
                        <InputField
                          label="Full Name"
                          required
                          error={errors.fullName?.message}
                          {...register("fullName")}
                        />
                      </AnimatedField>

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
                      <AnimatedGroup show={isOrganization} className="contents">
                        <AnimatedGroupItem>
                          <Controller
                            name="vatRegistration"
                            control={control}
                            render={({ field }) => (
                              <RadioGroupField
                                label="VAT Registration"
                                value={field.value || "with_trn"}
                                onChange={field.onChange}
                                options={[...VAT_TYPES]}
                                required
                              />
                            )}
                          />
                        </AnimatedGroupItem>

                        <AnimatedField show={vatRegistration === "with_trn"}>
                          <InputField
                            label="VAT TRN Number"
                            required
                            error={errors.vatTrnNumber?.message}
                            {...register("vatTrnNumber")}
                          />
                        </AnimatedField>

                        <AnimatedGroupItem>
                          <InputField
                            label="Trade License No."
                            error={errors.tradeLicenseNo?.message}
                            {...register("tradeLicenseNo")}
                          />
                        </AnimatedGroupItem>

                        <AnimatedGroupItem>
                          <Controller
                            name="tlIssueDate"
                            control={control}
                            render={({ field }) => (
                              <DatePickerField
                                label="TL Issue Date"
                                value={field.value}
                                onChange={field.onChange}
                              />
                            )}
                          />
                        </AnimatedGroupItem>

                        <AnimatedGroupItem>
                          <Controller
                            name="tlExpiryDate"
                            control={control}
                            render={({ field }) => (
                              <DatePickerField
                                label="TL Expiry Date"
                                value={field.value}
                                onChange={field.onChange}
                                required
                                error={errors.tlExpiryDate?.message}
                              />
                            )}
                          />
                        </AnimatedGroupItem>

                        <AnimatedGroupItem>
                          <Controller
                            name="tradeLicenseFile"
                            control={control}
                            render={({ field }) => (
                              <FileUploadField
                                label="Upload Trade License"
                                value={field.value}
                                onChange={field.onChange}
                                required
                              />
                            )}
                          />
                        </AnimatedGroupItem>
                      </AnimatedGroup>

                      <AnimatedGroup show={showPassport} className="contents">
                        <AnimatedGroupItem>
                          <InputField
                            label="Passport Number"
                            required
                            error={errors.passportNumber?.message}
                            {...register("passportNumber")}
                          />
                        </AnimatedGroupItem>

                        <AnimatedGroupItem>
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
                        </AnimatedGroupItem>

                        <AnimatedGroupItem>
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
                        </AnimatedGroupItem>

                        <AnimatedGroupItem>
                          <Controller
                            name="passportFile"
                            control={control}
                            render={({ field }) => (
                              <FileUploadField
                                label="Upload Passport"
                                value={field.value}
                                onChange={field.onChange}
                                required
                              />
                            )}
                          />
                        </AnimatedGroupItem>
                      </AnimatedGroup>

                      <AnimatedGroup show={showEmiratesId} className="contents">
                        <AnimatedGroupItem>
                          <InputField
                            label="Emirates ID"
                            required
                            error={errors.emiratesId?.message}
                            {...register("emiratesId")}
                          />
                        </AnimatedGroupItem>

                        <AnimatedGroupItem>
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
                        </AnimatedGroupItem>

                        <AnimatedGroupItem>
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
                        </AnimatedGroupItem>

                        <AnimatedGroupItem>
                          <Controller
                            name="emiratesIdFile"
                            control={control}
                            render={({ field }) => (
                              <FileUploadField
                                label="Upload Emirates ID"
                                value={field.value}
                                onChange={field.onChange}
                                required
                              />
                            )}
                          />
                        </AnimatedGroupItem>
                      </AnimatedGroup>

                      <AnimatedField
                        show={
                          !isOrganization && !showPassport && !showEmiratesId
                        }
                      >
                        <p className="text-sm text-muted-foreground col-span-full">
                          Select customer type and country to see document
                          requirements.
                        </p>
                      </AnimatedField>
                    </FormSection>
                  </motion.div>

                  {/* C. Commercial Terms */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="C. Commercial Terms">
                      <Controller
                        name="paymentTerms"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Payment Terms"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...PAYMENT_TERMS]}
                            required
                            error={errors.paymentTerms?.message}
                          />
                        )}
                      />
                      <Controller
                        name="customerClassification"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Customer Classification"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...customer_classification_group]}
                            required
                            error={errors.paymentTerms?.message}
                          />
                        )}
                      />

                      <Controller
                        name="paymentMethod"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Payment Method"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...PAYMENT_METHODS]}
                            required
                            error={errors.paymentMethod?.message}
                          />
                        )}
                      />

                      <Controller
                        name="deliveryTerms"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Delivery Terms"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...DELIVERY_TERMS]}
                            placeholder="Select delivery terms"
                          />
                        )}
                      />

                      <Controller
                        name="deliveryMode"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Delivery Mode"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...DELIVERY_MODES]}
                            placeholder="Select delivery mode"
                          />
                        )}
                      />
                    </FormSection>
                  </motion.div>

                  {/* D. Address Information */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="D. Address Information">
                      <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Country"
                            value={field.value}
                            onChange={field.onChange}
                            options={[...COUNTRIES]}
                            required
                          />
                        )}
                      />

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
                        label="PO Box"
                        required
                        error={errors.poBox?.message}
                        {...register("poBox")}
                      />
                      <InputField
                        label="Full Address"
                        required
                        error={errors.fullAddress?.message}
                        className="md:col-span-2"
                        {...register("fullAddress")}
                      />
                      <Controller
                        name="addressType"
                        control={control}
                        render={({ field }) => (
                          <SelectField
                            label="Address Type"
                            value={field.value || ""}
                            onChange={field.onChange}
                            options={[...ADDRESS_TYPES]}
                            placeholder="Select address type"
                          />
                        )}
                      />
                      <InputField
                        label="Makani No."
                        {...register("makaniNo")}
                      />
                    </FormSection>
                  </motion.div>

                  {/* E. Contact Information */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="E. Contact Information">
                      <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-4">
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
                          label="Telephone"
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

                      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Controller
                          name="mobileCountryCode"
                          control={control}
                          render={({ field }) => (
                            <SelectField
                              label="Mobile Country Code"
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
                    </FormSection>
                  </motion.div>

                  {/* F. Digital Contact */}
                  <motion.div variants={sectionVariants}>
                    <FormSection title="F. Digital Contact">
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

                      <InputField label="Fax" {...register("fax")} />
                    </FormSection>
                  </motion.div>

                  {/* G. Consent & Submission */}
                  <motion.div
                    variants={sectionVariants}
                    className="border-t border-gray-300 pt-6"
                  >
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
                              I confirm that the information provided is
                              accurate and I consent to its use for customer
                              registration and system processing.
                            </label>
                          </div>
                        </FormField>
                      )}
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="mt-6 flex justify-end"
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
