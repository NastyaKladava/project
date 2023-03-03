import React from "react";
import { Box, InputAdornment, styled } from "@mui/material";
import { useAppDispatch } from "../../hooks/commonHooks";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { addColItemComment } from "../../store/thunks";
import { Send } from "@mui/icons-material";
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
  const { currentUser } = useCollectionItem();

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    data.itemId = itemId;
    data.commentAuthor = currentUser?.email;

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
