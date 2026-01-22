import { FormField } from "./FormField";
import { forwardRef } from "react";
import { Input } from "../UI/form/input";
import { Textarea } from "../UI/form/textArea";

export const InputField = forwardRef(
    ({ label, error, required, className, ...props }, ref) => {
        return (
            <FormField label={label} required={required} error={error} className={className}>
                <Input ref={ref} className="h-10 mt-1 bg-gray-50" {...props} />
            </FormField>
        );
    }
);

InputField.displayName = "InputField";

export const TextareaField = forwardRef(
    ({ label, error, required, className, ...props }, ref) => {
        return (
            <FormField label={label} required={required} error={error} className={className}>
                <Textarea ref={ref} {...props} />
            </FormField>
        );
    }
);

TextareaField.displayName = "TextareaField";
