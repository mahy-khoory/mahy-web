import { Upload, X, FileText } from "lucide-react";
import { FormField } from "./FormField";
import { useRef } from "react";
import { Button } from "../UI/form/button";

export function FileUploadField({
    label,
    value,
    onChange,
    required,
    error,
    accept = ".pdf,.jpg,.jpeg,.png",
}) {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (e) => {
        const file = e.target.files?.[0] || null;
        onChange(file);
    };

    const handleRemove = () => {
        onChange(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    return (
        <FormField label={label} required={required} error={error}>
            <input
                ref={inputRef}
                type="file"
                accept={accept}
                onChange={handleChange}
                className="hidden"
            />
            {value ? (
                <div className="flex items-center gap-2 p-2 border border-border rounded-md bg-accent/50">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm flex-1 truncate">{value.name}</span>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={handleRemove}
                        className="h-6 w-6 p-0"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleClick}
                    className="w-full h-10 justify-start text-muted-foreground"
                >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload file
                </Button>
            )}
        </FormField>
    );
}
