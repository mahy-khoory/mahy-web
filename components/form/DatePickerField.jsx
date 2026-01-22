import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormField } from "./FormField";
import { Calendar } from "../UI/Calender";
import { Popover, PopoverContent, PopoverTrigger } from "../UI/form/popover";
import { Button } from "../UI/form/button";

export function DatePickerField({
    label,
    value,
    onChange,
    required,
    error,
    placeholder = "Select date",
    disabled,
}) {
    return (
        <FormField label={label} required={required} error={error}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            "w-full justify-start text-left font-normal h-10",
                            !value && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {value ? format(value, "PPP") : <span>{placeholder}</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={value}
                        onSelect={onChange}
                        disabled={disabled}
                        initialFocus
                        className="pointer-events-auto bg-white rounded-md"
                    />
                </PopoverContent>
            </Popover>
        </FormField>
    );
}
