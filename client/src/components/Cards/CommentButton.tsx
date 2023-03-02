import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, InsertComment } from "@mui/icons-material";
import { IIconButtonProps } from "../../shared/types";

const CommentButton: React.FC<IIconButtonProps> = ({ ariaLabel }) => {
  return (
    <IconButton aria-label={ariaLabel}>
      <InsertComment fontSize="large" />
    </IconButton>
  );
};

export default CommentButton;
