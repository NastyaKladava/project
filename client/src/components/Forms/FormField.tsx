import React from "react";
import { TextField } from "@mui/material";
import { IFieldsProps } from "../../shared/types";
import { Controller } from "react-hook-form";

const FormField: React.FC<IFieldsProps> = ({
  id,
  name,
  label,
  autoComplete,
  autoFocus,
  defaultValue,
  control,
  errorMessage,
  placeholder,
  multiline,
  variant,
  InputProps,
  type,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          margin="normal"
          fullWidth
          key={id}
          id={id}
          name={name}
          label={label}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          autoFocus={autoFocus}
          multiline={multiline}
          variant={variant}
          error={error ? true : false}
          helperText={error ? errorMessage : null}
          //helperText={error ? getValidationMessage(errors.name) : null}
          InputProps={InputProps}
        />
      )}
      rules={{ required: true }}
    />
  );
};

export default FormField;
