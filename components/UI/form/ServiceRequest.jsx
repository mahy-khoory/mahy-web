"use client"

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Wrench } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";

import { FormSection } from "@/components/form/FormSection";
import { InputField } from "@/components/form/InputField";
import { SelectField } from "@/components/form/SelectField";
import { RadioGroupField } from "@/components/form/RadioGroupField";
import { DatePickerField } from "@/components/form/DatePickerField";
import { FileUploadField } from "@/components/form/FileUploadField";
import { AnimatedField } from "@/components/form/AnimatedField";
import { CheckboxGroupField } from "@/components/form/CheckboxGroupField";
import { BooleanField } from "@/components/form/BooleanField";
import { NumberField } from "@/components/form/NumberField";

import { COUNTRY_CODES } from "@/lib/formConstants";

import {
    CUSTOMER_TYPES,
    CONTRACT_TYPES,
    BUILDING_TYPES,
    PRODUCT_CATEGORIES,
    PUMP_SYMPTOMS,
    PUMP_OBSERVED_SIGNS,
    PUMP_SUSPECTED_AREAS,
    AC_SYMPTOMS,
    AC_FAULT_AREAS,
    VEHICLE_TYPES,
    CAR_BRANDS,
    FUEL_TYPES,
    TRANSMISSION_TYPES,
    CAR_SYMPTOMS,
    CAR_OBSERVED_SIGNS,
    CAR_NOISE_LOCATIONS,
    CAR_PERFORMANCE_ISSUES,
    CAR_SUSPECTED_AREAS,
    CAR_WARNING_LIGHTS,
    URGENCY_LEVELS,
    BUSINESS_IMPACTS,
    PREFERRED_VISITS,
} from "@/lib/serviceRequestFormConstants";

import {
    serviceRequestFormSchema
} from "@/lib/serviceRequestFormSchema";
import { TextareaField } from "@/components/form/TextAreaField";
import Button from "../Button";

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

export default function ServiceRequest() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(serviceRequestFormSchema),
        defaultValues: {
            customerType: "organization",
            mobileCountryCode: "+971",
            pumpSymptoms: [],
            pumpObservedSigns: [],
            acSymptoms: [],
            carSymptoms: [],
            carObservedSigns: [],
            performanceIssues: [],
            warningLights: [],
            businessImpact: [],
        },
    });

    const customerType = watch("customerType");
    const productCategory = watch("productCategory");

    const isPerson = customerType === "person";
    const isOrganization = customerType === "organization";
    const isPump = productCategory === "pump";
    const isAC = productCategory === "ac";
    const isCar = productCategory === "car";
    const showProblemDescription = productCategory && !isPump && !isAC && !isCar;

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Service request form submitted:", data);
            toast.success("Service request submitted successfully!", {
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
                                    <div className="size-12 rounded-lg b-base text-white flex items-center justify-center">
                                        <Wrench className="size-7" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl">Service Request Form</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Please fill in all required fields to submit a service request
                                        </p>
                                    </div>
                                </motion.div>
                            </CardHeader>

                            <CardContent className="p-6">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                    {/* Customer & Site Information Section */}
                                    <motion.div variants={sectionVariants}>
                                        <FormSection title="Customer & Site Information">
                                            <Controller
                                                name="customerType"
                                                control={control}
                                                render={({ field }) => (
                                                    <RadioGroupField
                                                        label="Organization/Person"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        options={[...CUSTOMER_TYPES]}
                                                        required
                                                        error={errors.customerType?.message}
                                                    />
                                                )}
                                            />

                                            <AnimatedField show={isPerson}>
                                                <InputField
                                                    label="Contact Person"
                                                    required
                                                    error={errors.contactPerson?.message}
                                                    {...register("contactPerson")}
                                                />
                                            </AnimatedField>

                                            <AnimatedField show={isOrganization}>
                                                <InputField
                                                    label="Company Name"
                                                    required
                                                    error={errors.companyName?.message}
                                                    {...register("companyName")}
                                                />
                                            </AnimatedField>

                                            <div className="grid grid-cols-3 gap-2">
                                                <Controller
                                                    name="mobileCountryCode"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SelectField
                                                            label="Mobile"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            options={[...COUNTRY_CODES]}
                                                        />
                                                    )}
                                                />
                                                <div className="col-span-2">
                                                    <InputField
                                                        label=""
                                                        placeholder="Mobile number"
                                                        required
                                                        error={errors.mobileNumber?.message}
                                                        {...register("mobileNumber")}
                                                    />
                                                </div>
                                            </div>

                                            <InputField
                                                label="Email"
                                                type="email"
                                                error={errors.email?.message}
                                                {...register("email")}
                                            />

                                            <Controller
                                                name="contractType"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        label="Contract Type"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...CONTRACT_TYPES]}
                                                        placeholder="Select contract type"
                                                    />
                                                )}
                                            />

                                            <Controller
                                                name="contractExpiry"
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePickerField
                                                        label="Contract Expiry"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />

                                            <InputField
                                                label="Site Name"
                                                required
                                                error={errors.siteName?.message}
                                                {...register("siteName")}
                                            />

                                            <div className="col-span-full">
                                                <TextareaField
                                                    label="Site Address"
                                                    required
                                                    error={errors.siteAddress?.message}
                                                    {...register("siteAddress")}
                                                />
                                            </div>

                                            <InputField
                                                label="Location Pin (Google Maps)"
                                                placeholder="Paste Google Maps link"
                                                {...register("locationPin")}
                                            />

                                            <Controller
                                                name="buildingType"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        label="Building Type"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...BUILDING_TYPES]}
                                                        required
                                                        error={errors.buildingType?.message}
                                                    />
                                                )}
                                            />
                                        </FormSection>
                                    </motion.div>

                                    {/* Product Selection Section */}
                                    <motion.div variants={sectionVariants}>
                                        <FormSection title="Product Selection">
                                            <Controller
                                                name="productCategory"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        label="Product Category"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...PRODUCT_CATEGORIES]}
                                                        required
                                                        error={errors.productCategory?.message}
                                                    />
                                                )}
                                            />

                                            <InputField
                                                label="Brand"
                                                required
                                                error={errors.brand?.message}
                                                {...register("brand")}
                                            />

                                            <InputField
                                                label="Model"
                                                {...register("model")}
                                            />

                                            <Controller
                                                name="installationDate"
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePickerField
                                                        label="Installation Date"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />

                                            <Controller
                                                name="warrantyStatus"
                                                control={control}
                                                render={({ field }) => (
                                                    <BooleanField
                                                        label="Warranty Status"
                                                        value={field.value || false}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />

                                            <InputField
                                                label="Asset Tag"
                                                {...register("assetTag")}
                                            />
                                        </FormSection>
                                    </motion.div>

                                    {/* Pump Diagnostics Block */}
                                    <AnimatedField show={isPump}>
                                        <motion.div variants={sectionVariants}>
                                            <FormSection title="Pump Diagnostics">
                                                <div className="col-span-full">
                                                    <Controller
                                                        name="pumpSymptoms"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <CheckboxGroupField
                                                                label="Symptoms"
                                                                options={[...PUMP_SYMPTOMS]}
                                                                value={field.value || []}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                </div>

                                                <div className="col-span-full">
                                                    <Controller
                                                        name="pumpObservedSigns"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <CheckboxGroupField
                                                                label="Observed Signs"
                                                                options={[...PUMP_OBSERVED_SIGNS]}
                                                                value={field.value || []}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                </div>

                                                <Controller
                                                    name="suctionPressure"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Suction Pressure"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="dischargePressure"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Discharge Pressure"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="flowRate"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Flow Rate"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="voltageAvailable"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Voltage Available"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="phase"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <RadioGroupField
                                                            label="Phase"
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            options={[
                                                                { value: "single", label: "Single Phase" },
                                                                { value: "three", label: "Three Phase" },
                                                            ]}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="pumpRecentService"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <BooleanField
                                                            label="Recent Service"
                                                            value={field.value || false}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="pumpPowerIssue"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <BooleanField
                                                            label="Power Issue"
                                                            value={field.value || false}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="pumpSuspectedArea"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SelectField
                                                            label="Suspected Area"
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            options={[...PUMP_SUSPECTED_AREAS]}
                                                            placeholder="Select suspected area"
                                                        />
                                                    )}
                                                />
                                            </FormSection>
                                        </motion.div>
                                    </AnimatedField>

                                    {/* AC Diagnostics Block */}
                                    <AnimatedField show={isAC}>
                                        <motion.div variants={sectionVariants}>
                                            <FormSection title="AC Diagnostics">
                                                <div className="col-span-full">
                                                    <Controller
                                                        name="acSymptoms"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <CheckboxGroupField
                                                                label="Symptoms"
                                                                options={[...AC_SYMPTOMS]}
                                                                value={field.value || []}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                </div>

                                                <InputField
                                                    label="Error Code"
                                                    {...register("acErrorCode")}
                                                />

                                                <Controller
                                                    name="compressorRunning"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <BooleanField
                                                            label="Compressor Running"
                                                            value={field.value || false}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="fanRunning"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <BooleanField
                                                            label="Fan Running"
                                                            value={field.value || false}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="airflowWeak"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <BooleanField
                                                            label="Airflow Weak"
                                                            value={field.value || false}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="roomTemp"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Room Temp"
                                                            suffix="°C"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="setTemp"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Set Temp"
                                                            suffix="°C"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="acFaultArea"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SelectField
                                                            label="Fault Area"
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            options={[...AC_FAULT_AREAS]}
                                                            placeholder="Select fault area"
                                                        />
                                                    )}
                                                />
                                            </FormSection>
                                        </motion.div>
                                    </AnimatedField>

                                    {/* Car Diagnostics Block */}
                                    <AnimatedField show={isCar}>
                                        <motion.div variants={sectionVariants}>
                                            <FormSection title="Car Diagnostics - Basic Information">
                                                <Controller
                                                    name="vehicleType"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SelectField
                                                            label="Vehicle Type"
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            options={[...VEHICLE_TYPES]}
                                                            required
                                                            error={errors.vehicleType?.message}
                                                        />
                                                    )}
                                                />

                                                <InputField
                                                    label="Plate Number"
                                                    required
                                                    error={errors.plateNumber?.message}
                                                    {...register("plateNumber")}
                                                />

                                                <Controller
                                                    name="carBrand"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SelectField
                                                            label="Car Brand"
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            options={[...CAR_BRANDS]}
                                                            required
                                                            error={errors.carBrand?.message}
                                                        />
                                                    )}
                                                />

                                                <InputField
                                                    label="Model"
                                                    required
                                                    error={errors.carModel?.message}
                                                    {...register("carModel")}
                                                />

                                                <Controller
                                                    name="carYear"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Year"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            placeholder="YYYY"
                                                            required
                                                            error={errors.carYear?.message}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="mileage"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Mileage"
                                                            suffix="KM"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="fuelType"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <RadioGroupField
                                                            label="Fuel Type"
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            options={[...FUEL_TYPES]}
                                                            required
                                                            error={errors.fuelType?.message}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="transmission"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <RadioGroupField
                                                            label="Transmission"
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            options={[...TRANSMISSION_TYPES]}
                                                        />
                                                    )}
                                                />

                                                <InputField
                                                    label="VIN Number"
                                                    {...register("vinNumber")}
                                                />
                                            </FormSection>
                                        </motion.div>

                                        <motion.div variants={sectionVariants}>
                                            <FormSection title="Car Diagnostics - Symptoms">
                                                <div className="col-span-full">
                                                    <Controller
                                                        name="carSymptoms"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <CheckboxGroupField
                                                                label="Symptoms"
                                                                options={[...CAR_SYMPTOMS]}
                                                                value={field.value || []}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                </div>

                                                <div className="col-span-full">
                                                    <Controller
                                                        name="carObservedSigns"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <CheckboxGroupField
                                                                label="Observed Signs"
                                                                options={[...CAR_OBSERVED_SIGNS]}
                                                                value={field.value || []}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                </div>
                                            </FormSection>
                                        </motion.div>

                                        <motion.div variants={sectionVariants}>
                                            <FormSection title="Car Diagnostics - Operating Conditions">
                                                <Controller
                                                    name="engineStarts"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <BooleanField
                                                            label="Engine Starts"
                                                            value={field.value || false}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="engineTemperature"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Engine Temperature"
                                                            suffix="°C"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="batteryVoltage"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Battery Voltage"
                                                            suffix="V"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="fuelLevel"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <NumberField
                                                            label="Fuel Level"
                                                            suffix="%"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            min={0}
                                                            max={100}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="carRecentService"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <BooleanField
                                                            label="Recent Service"
                                                            value={field.value || false}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    name="accidentHistory"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <BooleanField
                                                            label="Accident History"
                                                            value={field.value || false}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />
                                            </FormSection>
                                        </motion.div>

                                        <motion.div variants={sectionVariants}>
                                            <FormSection title="Car Diagnostics - Noise & Performance">
                                                <Controller
                                                    name="noiseLocation"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SelectField
                                                            label="Noise Location"
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            options={[...CAR_NOISE_LOCATIONS]}
                                                            placeholder="Select noise location"
                                                        />
                                                    )}
                                                />

                                                <div className="col-span-full">
                                                    <Controller
                                                        name="performanceIssues"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <CheckboxGroupField
                                                                label="Performance Issues"
                                                                options={[...CAR_PERFORMANCE_ISSUES]}
                                                                value={field.value || []}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                </div>

                                                <Controller
                                                    name="carSuspectedArea"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SelectField
                                                            label="Suspected Area"
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            options={[...CAR_SUSPECTED_AREAS]}
                                                            placeholder="Select suspected area"
                                                        />
                                                    )}
                                                />
                                            </FormSection>
                                        </motion.div>

                                        <motion.div variants={sectionVariants}>
                                            <FormSection title="Car Diagnostics - Error Codes">
                                                <InputField
                                                    label="Error Code (OBD/Manual)"
                                                    {...register("carErrorCode")}
                                                />

                                                <div className="col-span-full">
                                                    <Controller
                                                        name="warningLights"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <CheckboxGroupField
                                                                label="Warning Lights"
                                                                options={[...CAR_WARNING_LIGHTS]}
                                                                value={field.value || []}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                </div>
                                            </FormSection>
                                        </motion.div>
                                    </AnimatedField>

                                    {/* Problem Description for other products or Car */}
                                    <AnimatedField show={showProblemDescription || isCar}>
                                        <motion.div variants={sectionVariants}>
                                            <FormSection title="Problem Description">
                                                <div className="col-span-full">
                                                    <TextareaField
                                                        label="Problem Description"
                                                        required
                                                        error={errors.problemDescription?.message}
                                                        {...register("problemDescription")}
                                                    />
                                                </div>
                                            </FormSection>
                                        </motion.div>
                                    </AnimatedField>

                                    {/* Media & Evidence Section */}
                                    <motion.div variants={sectionVariants}>
                                        <FormSection title="Media & Evidence">
                                            <Controller
                                                name="uploadPhotos"
                                                control={control}
                                                render={({ field }) => (
                                                    <FileUploadField
                                                        label="Upload Photos (Max 5)"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        accept="image/*"
                                                        multiple
                                                        maxFiles={5}
                                                        maxSizeMB={10}
                                                    />
                                                )}
                                            />

                                            <Controller
                                                name="uploadVideo"
                                                control={control}
                                                render={({ field }) => (
                                                    <FileUploadField
                                                        label="Upload Video"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        accept="video/*"
                                                    />
                                                )}
                                            />

                                            <Controller
                                                name="voiceNote"
                                                control={control}
                                                render={({ field }) => (
                                                    <FileUploadField
                                                        label="Voice Note"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        accept="audio/*"
                                                    />
                                                )}
                                            />

                                            <Controller
                                                name="errorScreenshot"
                                                control={control}
                                                render={({ field }) => (
                                                    <FileUploadField
                                                        label="Error Screenshot"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        accept="image/*"
                                                    />
                                                )}
                                            />
                                        </FormSection>
                                    </motion.div>

                                    {/* Priority & Impact Section */}
                                    <motion.div variants={sectionVariants}>
                                        <FormSection title="Priority & Impact">
                                            <Controller
                                                name="urgency"
                                                control={control}
                                                render={({ field }) => (
                                                    <RadioGroupField
                                                        label="Urgency"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...URGENCY_LEVELS]}
                                                        required
                                                        error={errors.urgency?.message}
                                                    />
                                                )}
                                            />

                                            <div className="col-span-full">
                                                <Controller
                                                    name="businessImpact"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <CheckboxGroupField
                                                            label="Business Impact"
                                                            options={[...BUSINESS_IMPACTS]}
                                                            value={field.value || []}
                                                            onChange={field.onChange}
                                                            required
                                                            error={errors.businessImpact?.message}
                                                        />
                                                    )}
                                                />
                                            </div>

                                            <Controller
                                                name="preferredVisit"
                                                control={control}
                                                render={({ field }) => (
                                                    <RadioGroupField
                                                        label="Preferred Visit"
                                                        value={field.value || ""}
                                                        onChange={field.onChange}
                                                        options={[...PREFERRED_VISITS]}
                                                        required
                                                        error={errors.preferredVisit?.message}
                                                    />
                                                )}
                                            />

                                            <div className="col-span-full">
                                                <TextareaField
                                                    label="Additional Notes"
                                                    {...register("additionalNotes")}
                                                />
                                            </div>
                                        </FormSection>
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex justify-end gap-4 pt-4 border-t border-gray-300"
                                    >
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
