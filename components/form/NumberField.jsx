import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";
import { Input } from "../UI/form/input";

export function NumberField({
    label,
    value,
    onChange,
    placeholder,
    required,
    error,
    className,
    suffix,
    min,
    max,
}) {
    const handleChange = (e) => {
        const val = e.target.value;
        if (val === "") {
            onChange(undefined);
        } else {
            const num = parseFloat(val);
            if (!isNaN(num)) {
                onChange(num);
            }
        }
    };

    return (
        <div className={cn("space-y-1.5", className)}>
            <Label className="text-sm font-medium text-foreground">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
                {suffix && <span className="text-muted-foreground ml-1">({suffix})</span>}
            </Label>
            <Input
                type="number"
                value={value ?? ""}
                onChange={handleChange}
                placeholder={placeholder}
                min={min}
                max={max}
                className={cn(error && "border-destructive")}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}
