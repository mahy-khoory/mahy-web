"use client";

import * as React from "react";
import { Combobox } from "@headlessui/react";
import { FormField } from "./FormField";
import { Check } from "lucide-react";

export function SelectField({ label, value, onChange, options, placeholder = "Select...", required, error }) {
    const [query, setQuery] = React.useState("");
    const [selectedOption, setSelectedOption] = React.useState(
        options.find((o) => o.value === value) || null
    );
    const [isOpen, setIsOpen] = React.useState(false);

    const filteredOptions = query === ""
        ? options
        : options.filter((opt) =>
            opt.label.toLowerCase().includes(query.toLowerCase())
        );

    const inputRef = React.useRef(null);

    return (
        <FormField label={label} required={required} error={error}>
            <Combobox
                value={selectedOption}
                onChange={(opt) => {
                    setSelectedOption(opt);
                    onChange(opt ? opt.value : "");
                    setIsOpen(false); // close on selection
                }}
                as="div"
            >
                <div className="relative mt-1">
                    <Combobox.Input
                        ref={inputRef}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#79c4e7]"
                        displayValue={(opt) => opt?.label || ""}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={placeholder}
                        onFocus={() => setIsOpen(true)}
                        onClick={() => setIsOpen(true)}
                        onBlur={(e) => {
                            // allow click inside options before closing
                            setTimeout(() => {
                                if (!document.activeElement.classList.contains("combobox-option")) {
                                    setIsOpen(false);
                                }
                            }, 100);
                        }}
                    />

                    <Combobox.Options
                        className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg"
                        static={isOpen}
                        onWheel={(e) => {
                            const el = e.currentTarget;
                            const atTop = el.scrollTop === 0 && e.deltaY < 0;
                            const atBottom = el.scrollHeight - el.scrollTop === el.clientHeight && e.deltaY > 0;

                            if (atTop || atBottom) {
                                e.stopPropagation();
                            } else {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }}
                    >
                        {filteredOptions.length === 0 ? (
                            <div className="p-2 text-sm text-gray-400">No results found</div>
                        ) : (
                            filteredOptions.map((opt) => (
                                <Combobox.Option
                                    key={opt.value}
                                    value={opt}
                                    className={({ active }) =>
                                        `combobox-option cursor-pointer select-none px-3 py-2 text-sm ${active ? "bg-[#79c4e7] text-white" : "text-gray-900"}`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {({ selected }) => (
                                        <div className="flex justify-between items-center">
                                            <span>{opt.label}</span>
                                            {selected && <Check className="h-4 w-4 text-white" />}
                                        </div>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </div>
            </Combobox>
        </FormField>
    );
}