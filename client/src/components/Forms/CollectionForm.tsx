import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { useForm } from "react-hook-form";
import MenuAutocomplete from "../Menu/MenuAutocomplete";
import {
  collectionTopic,
  collectionFields,
} from "../../shared/constants/formFields";
import AppButton from "../Buttons/AppButton";
import FormField from "./FormField";
import { addCollection } from "../../store/thunks";
import MenuGrouped from "../Menu/MenuGrouped";
import DragItem from "../DragItem";
import { imageUrlSelector } from "../../store/selectors/collectionSelector";
import RichText from "./RichText";
import { curUserSelector } from "../../store/selectors/userSelector";

const StyledForm = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  maxWidth: "100%",
  maxHeight: "90%",
  [theme.breakpoints.down("md")]: {
    overflowY: "scroll",
    paddingRight: theme.spacing(3),
  },
}));

const CollectionForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const imageUrl = useAppSelector(imageUrlSelector);
  const currentUser = useAppSelector(curUserSelector);

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

    console.log(data);
    dispatch(addCollection(data));
    reset();
    // dispatch(setImageUrl(null));
  };

  return (
    <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <FormField
            autoComplete="on"
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
            autoComplete="on"
            id="collectionTags"
            name="collectionTags"
            label="Tags"
            placeholder="Enter tags with comma"
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
            options={collectionTopic}
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
            menuData={collectionFields}
            errorMessage="Fields is required"
          />
        </Grid>

        <Grid item xs={12}>
          <RichText control={control} />
        </Grid>
        <Grid item xs={12}>
          <DragItem />
        </Grid>
        <Grid item xs={12}>
          <AppButton type="submit" variant="contained" disabled={!isValid}>
            Create collection
          </AppButton>
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export default CollectionForm;
