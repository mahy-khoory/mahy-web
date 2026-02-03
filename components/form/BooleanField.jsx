import { cn } from "@/lib/utils";
import { Label } from "./Label";
import { Switch } from "./Switch";

export function BooleanField({
    label,
    value,
    onChange,
    required,
    error,
    className,
}) {
    return (
        <div className={cn("space-y-2", className)}>
            <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-foreground">
                    {label}
                    {required && <span className="text-destructive ml-1">*</span>}
                </Label>
                <div className="flex items-center gap-2">
                    <Switch
                        checked={value || false}
                        onCheckedChange={onChange}
                    />
                    <span className="text-sm text-muted-foreground">
                        {value ? "Yes" : "No"}
                    </span>
                </div>
            </div>
            {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
    );
}
