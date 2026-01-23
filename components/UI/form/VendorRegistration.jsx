"use client"

import { useState } from "react";
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
import { AnimatedField, AnimatedGroup, AnimatedGroupItem } from "@/components/form/AnimatedField";

import {
    CURRENCIES,
    PAYMENT_TERMS,
    PAYMENT_METHODS,
    DELIVERY_TERMS,
    DELIVERY_MODES,
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
    ADDRESS_BOOKS,
} from "@/lib/vendorFormconstants";

import {
    vendorFormSchema
} from "@/lib/vendorFormSchema";
import { FormField } from "@/components/form/FormField";
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

export default function VendorRegistration() {
    const [isSubmitting, setIsSubmitting] = useState(false);

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
    const trnType = watch("trnType");
    const countryRegion = watch("countryRegion");

    const isOrganization = vendorType === "organization";
    const isPerson = vendorType === "person";
    const isUAE = countryRegion === "UAE";
    const showPassport = isPerson && !isUAE;
    const showEmiratesId = isPerson && isUAE;

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Vendor form submitted:", data);
            toast.success("Vendor registration submitted successfully!", {
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
                className="min-h-screen bg-background py-8 px-4"
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
                                        <Users className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl">Vendor Registration</CardTitle>
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

                                            <Controller
                                                name="vendorClassificationGroup"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        label="Vendor classification group"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...VENDOR_CLASSIFICATION_GROUPS]}
                                                    />
                                                )}
                                            />

                                            <Controller
                                                name="termsOfPayment"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        label="Terms of payment"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...PAYMENT_TERMS]}
                                                        placeholder="Select terms"
                                                    />
                                                )}
                                            />

                                            <Controller
                                                name="deliveryTerms"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        label="Delivery terms"
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
                                                        label="Mode of delivery"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...DELIVERY_MODES]}
                                                        required
                                                        error={errors.deliveryMode?.message}
                                                    />
                                                )}
                                            />

                                            <Controller
                                                name="salesTaxGroup"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        label="Sales tax group"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...SALES_TAX_GROUPS]}
                                                    />
                                                )}
                                            />

                                            <InputField
                                                label="Tax exempt number"
                                                {...register("taxExemptNumber")}
                                            />

                                            <Controller
                                                name="lineOfBusiness"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        label="Line of business"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...LINE_OF_BUSINESS]}
                                                        placeholder="Select line of business"
                                                    />
                                                )}
                                            />

                                            <InputField
                                                label="Segment"
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
                                                        <SelectField
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
                                                <Controller
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
                                                />
                                            </FormSection>
                                        </motion.div>
                                    </AnimatedField>

                                    {/* Address Information */}
                                    <motion.div variants={sectionVariants}>
                                        <FormSection title="Address">
                                            <AnimatedField show={isOrganization}>
                                                <InputField
                                                    label="Country/region"
                                                    value="ARE"
                                                    disabled
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

                                            <AnimatedField show={isPerson}>
                                                <InputField
                                                    label="Post box"
                                                    {...register("postBox")}
                                                />
                                            </AnimatedField>

                                            <Controller
                                                name="zipPostalCode"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        label="ZIP/postal code"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...ZIP_POSTAL_CODES]}
                                                        required
                                                        error={errors.zipPostalCode?.message}
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
                                                        options={[...getCitiesForCountry(countryRegion || "UAE")]}
                                                        required
                                                        error={errors.city?.message}
                                                    />
                                                )}
                                            />
                                            <InputField
                                                label="Street"
                                                required
                                                error={errors.street?.message}
                                                {...register("street")}
                                            />
                                            <AnimatedField show={isPerson}>
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

                                            <AnimatedField show={isPerson}>
                                                <InputField
                                                    label="Street number"
                                                    {...register("streetNumber")}
                                                />
                                            </AnimatedField>

                                            <AnimatedField show={isPerson}>
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

                                            <AnimatedField show={isPerson}>
                                                <InputField
                                                    label="Building complement"
                                                    {...register("buildingComplement")}
                                                />
                                            </AnimatedField>

                                            <AnimatedField show={isPerson}>
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
                                        </FormSection>
                                    </motion.div>

                                    {/* Contact Information */}
                                    <motion.div variants={sectionVariants}>
                                        <FormSection title="Contact information">
                                            {/* Telephone */}
                                            <div className="col-span-full">
                                                <p className="text-sm font-semibold text-foreground mb-3">TELEPHONE</p>
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
                                                <p className="text-sm font-semibold text-foreground mb-3">MOBILE</p>
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

                                            <InputField
                                                label="Fax"
                                                {...register("fax")}
                                            />

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

                                            <InputField
                                                label="Website"
                                                {...register("website")}
                                            />
                                        </FormSection>
                                    </motion.div>

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
                                                        I confirm that the information provided is accurate and I consent to its use for vendor registration and system processing.
                                                    </label>
                                                </div>
                                            </FormField>
                                        )}
                                    />

                                    {/* Submit Button */}
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
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}
