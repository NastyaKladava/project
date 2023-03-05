import React from "react";
import { Grid } from "@mui/material";
import { Control } from "react-hook-form";
import CheckboxField from "../components/Forms/CheckboxField";
import DateField from "../components/Forms/DateField";
import FormField from "../components/Forms/FormField";
import { ICollectionField, ICollectionItem } from "../store/types";

export const defineItemsFields = (
  field: ICollectionField,
  index: number,
  control: Control,
  updatedColItem: ICollectionItem | undefined
) => {
  const type = field.type;
  const value = field.title.toLowerCase();

  if (type === "number") {
    return (
      <Grid item xs={12} key={index}>
        <FormField
          id={value}
          name={value}
          label={value}
          autoComplete={value}
          defaultValue={
            updatedColItem?.["page quantity"] ||
            updatedColItem?.price ||
            updatedColItem?.volume ||
            ""
          }
          control={control}
          errorMessage={`${value} is required`}
          placeholder={value}
        />
      </Grid>
    );
  } else if (type === "boolean") {
    return (
      <Grid item xs={12} key={index}>
        <CheckboxField
          id={value}
          name={value}
          label={value}
          defaultValue={
            updatedColItem?.["is finished"] ||
            updatedColItem?.["is read"] ||
            updatedColItem?.["is tried"] ||
            false
          }
          control={control}
          errorMessage={`${value} 2is required`}
        />
      </Grid>
    );
  } else if (type === "date") {
    return (
      <Grid item xs={12} key={index}>
        <DateField
          id={value}
          name={value}
          label={value}
          defaultValue={
            updatedColItem?.["harvest year"] ||
            updatedColItem?.["publication date"] ||
            new Date()
          }
          control={control}
          inputFormat="DD/MM/YYYY"
          errorMessage={`${value} is required`}
        />
      </Grid>
    );
  } else if (type === "text") {
    return (
      <Grid item xs={12} key={index}>
        <FormField
          id={value}
          name={value}
          label={value}
          autoComplete={value}
          defaultValue={
            updatedColItem?.comment ||
            updatedColItem?.["about author"] ||
            updatedColItem?.descr ||
            ""
          }
          multiline
          control={control}
          errorMessage={`${value} is required`}
          placeholder={value}
        />
      </Grid>
    );
  } else {
    return (
      <Grid item xs={12} key={index}>
        <FormField
          id={value}
          name={value}
          label={value}
          autoComplete={value}
          defaultValue={
            updatedColItem?.author ||
            updatedColItem?.genre ||
            updatedColItem?.type ||
            ""
          }
          control={control}
          errorMessage={`${value} is required`}
          placeholder={value}
        />
      </Grid>
    );
  }
};
