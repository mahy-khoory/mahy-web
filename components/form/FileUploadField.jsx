import { Upload, X, FileText } from "lucide-react";
import { FormField } from "./FormField";
import { useRef } from "react";
import { Button } from "../UI/form/button";
import { toast } from "react-toastify";

const DEFAULT_ALLOWED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png"];
const DEFAULT_MAX_SIZE_MB = 10;
const DEFAULT_MAX_FILES = 5;

function getFileExtension(filename) {
    return filename.slice(filename.lastIndexOf(".")).toLowerCase();
}

function getAllowedExtensions(accept) {
    if (!accept) return DEFAULT_ALLOWED_EXTENSIONS;

    // Handle wildcard accepts like "image/*", "video/*", "audio/*"
    if (accept.includes("image/*")) {
        return [".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg"];
    }
    if (accept.includes("video/*")) {
        return [".mp4", ".mov", ".avi", ".mkv", ".webm", ".wmv"];
    }
    if (accept.includes("audio/*")) {
        return [".mp3", ".wav", ".ogg", ".m4a", ".aac", ".flac"];
    }

    // Parse comma-separated extensions
    return accept.split(",").map((ext) => ext.trim().toLowerCase());
}

export function FileUploadField({
    label,
    value,
    onChange,
    required,
    error,
    accept = ".pdf,.jpg,.jpeg,.png",
    multiple = false,
    maxFiles = DEFAULT_MAX_FILES,
    maxSizeMB = DEFAULT_MAX_SIZE_MB,
}) {
    const inputRef = useRef(null);

    const validateFile = (file) => {
        const allowedExtensions = getAllowedExtensions(accept);
        const fileExtension = getFileExtension(file.name);
        const maxSizeBytes = maxSizeMB * 1024 * 1024;

        // Check file extension
        const isValidExtension = allowedExtensions.some((ext) => {
            if (ext.startsWith(".")) {
                return fileExtension === ext;
            }
            // Handle MIME type format like "image/jpeg"
            return file.type.includes(ext.replace(".", ""));
        });

        if (!isValidExtension) {
            toast.error(`Invalid file type "${fileExtension}". Allowed: ${allowedExtensions.join(", ")}`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return false;
        }

        // Check file size
        if (file.size > maxSizeBytes) {
            toast.error(`File "${file.name}" exceeds ${maxSizeMB}MB limit. Size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return false;
        }

        return true;
    };


    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) {
            onChange(null);
            return;
        }

        if (multiple) {
            // Check max files limit
            if (files.length > maxFiles) {
                toast.error(`Maximum ${maxFiles} files allowed. You selected ${files.length} files.`, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                if (inputRef.current) {
                    inputRef.current.value = "";
                }
                return;
            }

            // Validate each file
            const validFiles = [];
            for (let i = 0; i < files.length; i++) {
                if (validateFile(files[i])) {
                    validFiles.push(files[i]);
                }
            }

            if (validFiles.length > 0) {
                onChange(validFiles);
            } else {
                if (inputRef.current) {
                    inputRef.current.value = "";
                }
            }
        } else {
            const file = files[0];
            if (validateFile(file)) {
                onChange(file);
            } else {
                if (inputRef.current) {
                    inputRef.current.value = "";
                }
            }
        }
    };

    const handleRemove = (index) => {
        if (multiple && Array.isArray(value) && typeof index === "number") {
            const newFiles = value.filter((_, i) => i !== index);
            onChange(newFiles.length > 0 ? newFiles : null);
        } else {
            onChange(null);
        }
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const renderFileList = () => {
        if (!value) return null;

        if (multiple && Array.isArray(value)) {
            return (
                <div className="space-y-2">
                    {value.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 p-2 border border-border rounded-md bg-accent/50"
                        >
                            <FileText className="h-4 w-4 text-primary" />
                            <span className="text-sm flex-1 truncate">{file.name}</span>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemove(index)}
                                className="h-6 w-6 p-0"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            );
        }

        if (value instanceof File) {
            return (
                <div className="flex items-center gap-2 p-2 border border-border rounded-md bg-accent/50">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm flex-1 truncate">{value.name}</span>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemove()}
                        className="h-6 w-6 p-0"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            );
        }

        return null;
    };

    const hasFiles = multiple ? Array.isArray(value) && value.length > 0 : value instanceof File;

    return (
        <FormField label={label} required={required} error={error}>
            <input
                ref={inputRef}
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={handleChange}
                className="hidden"
            />
            {hasFiles ? (
                renderFileList()
            ) : (
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleClick}
                    className="w-full h-10 justify-start text-muted-foreground"
                >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload file{multiple ? `(s) - Max ${maxFiles}` : ""}
                </Button>
            )
            }
        </FormField >
    );
}
