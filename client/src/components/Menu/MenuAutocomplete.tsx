import React from "react";
import { Controller } from "react-hook-form";
import { IAutocompleteProps } from "../../shared/types";
import { Autocomplete, Chip, TextField } from "@mui/material";

const ListboxProps = {
  style: {
    maxHeight: 100,
    width: "auto",
  },
};

const MenuAutocomplete: React.FC<IAutocompleteProps> = ({
  name,
  id,
  label,
  placeholder,
  defaultValue,
  options,
  control,
  multiple,
  errorMessage,
  freeSolo,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onChange, ref, ...field },
        fieldState: { error },
      }) => (
        <Autocomplete
          multiple={multiple}
          id={id}
          size="medium"
          options={options}
          freeSolo={freeSolo}
          noOptionsText="No option"
          forcePopupIcon={true}
          renderInput={(params) => (
            <TextField
              {...field}
              inputRef={ref}
              {...params}
              label={label}
              placeholder={placeholder}
              error={error ? true : false}
              helperText={error ? errorMessage : null}
            />
          )}
          onChange={(_, data) => onChange(data)}
          ListboxProps={ListboxProps}
        />
      )}
      rules={{ required: true }}
    />
  );
};

export default MenuAutocomplete;
