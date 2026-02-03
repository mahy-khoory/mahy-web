import { cn } from "@/lib/utils";
import { Label } from "./Label";
import { Checkbox } from "../UI/checkbox";

export function CheckboxGroupField({
    label,
    options,
    value = [],
    onChange,
    required,
    error,
    className,
}) {
    const handleToggle = (optionValue) => {
        if (value.includes(optionValue)) {
            onChange(value.filter((v) => v !== optionValue));
        } else {
            onChange([...value, optionValue]);
        }
    };

    return (
        <div className={cn("space-y-2", className)}>
            <Label className="text-sm font-medium text-foreground">
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <div className="flex flex-wrap gap-3 mt-1">
                {options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                        <Checkbox
                            id={`${label}-${option.value}`}
                            checked={value.includes(option.value)}
                            onCheckedChange={() => handleToggle(option.value)}
                        />
                        <label
                            htmlFor={`${label}-${option.value}`}
                            className="text-sm text-muted-foreground cursor-pointer"
                        >
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
    );
}
