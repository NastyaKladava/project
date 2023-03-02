import React from "react";
import { Box, Fab, Grid, InputAdornment, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { useForm } from "react-hook-form";
import AppButton from "../Buttons/AppButton";
import FormField from "./FormField";
import {
  addColItemComment,
  addCollection,
  addCollectionItem,
} from "../../store/thunks";
import { useCollection } from "../../hooks/collectionHook";
import { Send } from "@mui/icons-material";
import { defineItemsFields } from "../../utils/defineItemsFields";
import { IAddColItemData, ICollectionItem } from "../../store/types";
import { useCollectionItem } from "../../hooks/collectionItemHook";
import AppIconButton from "../Buttons/AppIconButton";
import { IItemCommentProps } from "../../shared/types";

const StyledForm = styled(Box)(({ theme }) => ({
  padding: theme.spacing(),
  maxWidth: "100%",
  marginBottom: theme.spacing(10),
}));

const InputProps = {
  endAdornment: (
    <InputAdornment position="end">
      <AppIconButton type="submit" ariaLabel="add" variant="contained">
        <Send color="primary" />
      </AppIconButton>
    </InputAdornment>
  ),
};

const CommentForm: React.FC<IItemCommentProps> = ({ itemId }) => {
  const dispatch = useAppDispatch();
  const { currentFields, id, currentCollection, currentUser } =
    useCollectionItem();

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  console.log(currentUser);

  const onSubmit = (data: any) => {
    data.itemId = itemId;
    data.commentAuthor = currentUser?.email;
    console.log(data);

    dispatch(addColItemComment(data));
    reset();
  };

  return (
    <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        autoComplete="on"
        autoFocus={true}
        id="commentDescription"
        name="commentDescription"
        label="Comment"
        placeholder="Enter comment"
        defaultValue=""
        control={control}
        errorMessage="Comment is required"
        multiline
        InputProps={InputProps}
      />
    </StyledForm>
  );
};

export default CommentForm;
