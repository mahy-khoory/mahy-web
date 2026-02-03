import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";
import { Textarea } from "../UI/form/textArea";

export const TextareaField = React.forwardRef(
    ({ label, required, error, className, ...props }, ref) => {
        return (
            <div className={cn("space-y-1.5", className)}>
                <Label className="text-sm font-medium text-foreground">
                    {label}
                    {required && <span className="text-destructive ml-1">*</span>}
                </Label>
                <Textarea
                    ref={ref}
                    className={cn(error && "border-destructive")}
                    {...props}
                />
                {error && <p className="text-xs text-destructive">{error}</p>}
            </div>
        );
    }
);

TextareaField.displayName = "TextareaField";
