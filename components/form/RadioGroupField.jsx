
import { RadioGroup, RadioGroupItem } from "../UI/form/radioGroup";
import { FormField } from "./FormField";
import { Label } from "./Label";

export function RadioGroupField({
    label,
    value,
    onChange,
    options,
    required,
    error,
}) {
    return (
        <FormField label={label} required={required} error={error}>
            <RadioGroup value={value} onValueChange={onChange} className="flex items-center gap-4 mt-2">
                {options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-1.5">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="font-normal cursor-pointer">
                            {option.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </FormField>
    );
}
