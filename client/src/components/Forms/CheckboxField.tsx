import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { ICheckboxProps } from "../../shared/types";
import { Controller } from "react-hook-form";

const CheckboxField: React.FC<ICheckboxProps> = ({
  id,
  name,
  label,
  defaultValue,
  control,
  errorMessage,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <FormControl error={Boolean(error)} component="fieldset">
          <FormControlLabel
            label={label}
            control={<Checkbox id={id} checked={value} {...field} />}
          />
          {error && <FormHelperText> {errorMessage}</FormHelperText>}
        </FormControl>
      )}
      rules={{ required: true }}
    />
  );
};

export default CheckboxField;
