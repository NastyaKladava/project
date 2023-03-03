import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { useAppDispatch } from "../../hooks/commonHooks";
import { useForm } from "react-hook-form";
import AppButton from "../Buttons/AppButton";
import FormField from "./FormField";
import { addCollectionItem } from "../../store/thunks";
import { defineItemsFields } from "../../utils/defineItemsFields";
import { useCollectionItem } from "../../hooks/collectionItemHook";

const StyledForm = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  maxWidth: "100%",
}));

const ItemForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentFields, id, currentCollection, currentUser } =
    useCollectionItem();

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    const tagsArray: string[] = data.itemTags.split(",");
    data.itemTags = tagsArray;
    data.collectionId = id;
    data.itemAuthor = currentUser?.firstName;
    data.fromCollection = currentCollection?.collectionTitle;

    dispatch(addCollectionItem(data));
    reset();
  };

  return (
    <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <FormField
            autoComplete="on"
            autoFocus={true}
            id="itemTitle"
            name="itemTitle"
            label="item Title"
            placeholder="Enter title"
            defaultValue=""
            control={control}
            errorMessage="Title is required"
          />
        </Grid>
        <Grid item xs={12}>
          <FormField
            autoComplete="on"
            id="itemTags"
            name="itemTags"
            label="Tags"
            placeholder="Enter tags with comma"
            defaultValue=""
            control={control}
            errorMessage="Tags is required"
          />
        </Grid>
        <>
          {currentFields &&
            currentFields.map((field, index) =>
              defineItemsFields(field, index, control)
            )}
        </>

        <Grid item xs={12}>
          <AppButton type="submit" variant="contained">
            Create item
          </AppButton>
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export default ItemForm;
