import React from "react";
import { Controller } from "react-hook-form";
import { IGroupedProps } from "../../shared/types";
import { Autocomplete, Chip, TextField } from "@mui/material";

const ListboxProps = {
  style: {
    maxHeight: 150,
    width: "auto",
  },
};

const MenuGrouped: React.FC<IGroupedProps> = ({
  name,
  id,
  label,
  placeholder,
  defaultValue,
  menuData,
  control,
  multiple,
  errorMessage,
}) => {
  const options = menuData.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: firstLetter,
      ...option,
    };
  });

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
          // value={defaultValue}
          limitTags={1}
          id={id}
          size="medium"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option.title}
                size="small"
                {...getTagProps({ index })}
              />
            ))
          }
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

export default MenuGrouped;
