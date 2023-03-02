import React from "react";
import { TextField } from "@mui/material";
import { IDateFieldProps } from "../../shared/types";
import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";

const DateField: React.FC<IDateFieldProps> = ({
  id,
  name,
  label,
  defaultValue,
  control,
  inputFormat,
  errorMessage,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label={label}
            inputFormat={inputFormat}
            value={dayjs(value)}
            onChange={(e) => onChange(e)}
            {...field}
            renderInput={(params) => (
              <TextField
                {...params}
                id={id}
                error={Boolean(error)}
                helperText={error ? errorMessage : null}
              />
            )}
          />
        </LocalizationProvider>
      )}
      rules={{ required: true }}
    />
  );
};

export default DateField;
