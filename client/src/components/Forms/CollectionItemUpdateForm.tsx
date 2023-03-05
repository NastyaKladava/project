import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { useAppDispatch } from "../../hooks/commonHooks";
import { useForm } from "react-hook-form";
import AppButton from "../Buttons/AppButton";
import FormField from "./FormField";
import { updateColitem } from "../../store/thunks";
import { defineItemsFields } from "../../utils/defineItemsFields";
import { useCollectionItem } from "../../hooks/collectionItemHook";
import { useTranslation } from "react-i18next";
import { IUpdateColItemRequest } from "../../store/types";
import { setUpdatedColItem } from "../../store/slices/collectionItemSlice";
import { setShowColItemUpdateModal } from "../../store/slices/mainSlice";

const StyledForm = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  maxWidth: "100%",
}));

const UpdateItemForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { currentFields, id, currentCollection, currentUser, updatedColItem } =
    useCollectionItem();
  const tagsDefaultValue = updatedColItem?.itemTags?.join(",");

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    const tagsArray: string[] = data.itemTags.split(",");
    data.itemTags = tagsArray;
    data.collectionId = currentCollection?._id;
    data.itemAuthor = currentUser?.firstName;
    data.fromCollection = currentCollection?.collectionTitle;

    const updatedData: IUpdateColItemRequest = {
      id: updatedColItem?._id,
      updatedItem: data,
    };
    dispatch(updateColitem(updatedData));
    reset();
    //dispatch(setUpdatedColItem(undefined));
    dispatch(setShowColItemUpdateModal(false));
  };

  return (
    <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <FormField
            autoFocus={true}
            id="itemTitle"
            name="itemTitle"
            label="Item title"
            placeholder="Enter title"
            defaultValue={updatedColItem?.itemTitle}
            control={control}
            errorMessage="Title is required"
          />
        </Grid>
        <Grid item xs={12}>
          <FormField
            id="itemTags"
            name="itemTags"
            label="Item tags"
            placeholder="Enter with comma"
            defaultValue={tagsDefaultValue}
            control={control}
            errorMessage="Tags is required"
          />
        </Grid>
        <>
          {currentFields &&
            currentFields.map((field, index) =>
              defineItemsFields(field, index, control, updatedColItem)
            )}
        </>

        <Grid item xs={12}>
          <AppButton type="submit" variant="contained">
            {t("buttons.updateColItem")}
          </AppButton>
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export default UpdateItemForm;
