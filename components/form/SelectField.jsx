import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/form/select";
import { FormField } from "./FormField";

export function SelectField({
    label,
    value,
    onChange,
    options,
    required,
    error,
    placeholder = "Select...",
}) {
    return (
        <FormField label={label} required={required} error={error}>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="h-10">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </FormField>
    );
}
