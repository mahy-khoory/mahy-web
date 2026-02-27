"use client";

import { Controller } from "react-hook-form";
import D365Lookup from "./D365Lookup";

export default function FormD365Lookup({
  name,
  control,
  label,
  data,
  columns,
  required,
  error,
  placeholder,
  loading,
  onOpen,
  disabled,
  displayValue,
  enableSearch = false,
  searchPlaceholder,
  searchKeys,
  allowCustomValue = false,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <D365Lookup
          label={label}
          value={field.value}
          onChange={field.onChange}
          data={data}
          columns={columns}
          placeholder={placeholder}
          required={required}
          error={error}
          loading={loading}
          onOpen={onOpen}
          displayValue={displayValue}
          disabled={disabled}
          enableSearch={enableSearch}
          searchPlaceholder={searchPlaceholder}
          searchKeys={searchKeys}
          allowCustomValue={allowCustomValue}
        />
      )}
    />
  );
}
