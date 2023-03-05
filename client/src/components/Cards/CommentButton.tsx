import React from "react";
import { IconButton } from "@mui/material";
import { InsertComment } from "@mui/icons-material";
import { IIconButtonProps } from "../../shared/types";

const CommentButton: React.FC<IIconButtonProps> = ({ ariaLabel }) => {
  return (
    <IconButton aria-label={ariaLabel}>
      <InsertComment fontSize="large" />
    </IconButton>
  );
};

export default CommentButton;
