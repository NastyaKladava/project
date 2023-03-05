import React from "react";
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { useForm } from "react-hook-form";
import MenuAutocomplete from "../Menu/MenuAutocomplete";
import {
  collectionTopicsValues,
  collectionFieldsValues,
} from "../../shared/constants/formFields";
import AppButton from "../Buttons/AppButton";
import FormField from "./FormField";
import { addCollection } from "../../store/thunks";
import MenuGrouped from "../Menu/MenuGrouped";
import DragItem from "../DragItem";
import { imageUrlSelector } from "../../store/selectors/collectionSelector";
import RichText from "./RichText";
import { curUserSelector } from "../../store/selectors/userSelector";
import { EditorState } from "draft-js";
import WideForm from "./WideForm";
import { useTranslation } from "react-i18next";

const CollectionForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const imageUrl = useAppSelector(imageUrlSelector);
  const currentUser = useAppSelector(curUserSelector);
  const richTExtDefaultValue = EditorState.createEmpty();

  const {
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    const tagsArray: string[] = data.collectionTags.split(",");
    data.collectionTags = tagsArray;
    data.collectionImageUrl = imageUrl;
    data.collectionAuthor = currentUser?.firstName;
    data.collectionMail = currentUser?.email;

    dispatch(addCollection(data));
    reset();
    // dispatch(setImageUrl(null));
  };

  return (
    <WideForm handleData={handleSubmit(onSubmit)}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <FormField
            autoFocus={true}
            id="collectionTitle"
            name="collectionTitle"
            label="Collection Title"
            placeholder="Enter title"
            defaultValue=""
            control={control}
            errorMessage="Title is required"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormField
            id="collectionTags"
            name="collectionTags"
            label="Tags"
            placeholder="Enter with comma"
            defaultValue=""
            control={control}
            errorMessage="Tags is required"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <MenuAutocomplete
            name="collectionTopic"
            id="collectionTopic"
            label="Topic"
            placeholder="Choose fields"
            multiple={false}
            defaultValue=""
            control={control}
            options={collectionTopicsValues}
            errorMessage="Topic is required"
            freeSolo
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MenuGrouped
            name="collectionFields"
            id="collectionFields"
            label="Fields"
            defaultValue={[]}
            placeholder="Choose fields"
            multiple
            control={control}
            menuData={collectionFieldsValues}
            errorMessage="Fields is required"
          />
        </Grid>

        <Grid item xs={12}>
          <RichText control={control} defaultValue={richTExtDefaultValue} />
        </Grid>
        <Grid item xs={12}>
          <DragItem />
        </Grid>
        <Grid item xs={12}>
          <AppButton type="submit" variant="contained" disabled={!isValid}>
            {t("buttons.createCollection")}
          </AppButton>
        </Grid>
      </Grid>
    </WideForm>
  );
};

export default CollectionForm;
