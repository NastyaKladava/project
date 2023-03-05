import React from "react";
import { TextField } from "@mui/material";
import { IValidatedFieldsProps } from "../../shared/types";
import { Controller } from "react-hook-form";
import { getValidationMessage } from "../../utils/getValidationMessage";

const ValidatedFormField: React.FC<IValidatedFieldsProps> = ({
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
  errors,
  minLength,
  maxLength,
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
          //helperText={error ? errorMessage : null}
          helperText={error ? getValidationMessage(errors!) : null}
          InputProps={InputProps}
        />
      )}
      rules={{ required: true, maxLength: maxLength, minLength: minLength }}
    />
  );
};

export default ValidatedFormField;
