
import { cn } from "@/lib/utils";
import { Label } from "./Label";

export function FormField({ label, required, error, children, className }) {
    return (
        <div className={cn("space-y-1.5", className)}>
            <Label className="text-sm mb-1 font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {children}
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}
