import React from "react";
import { Box, styled } from "@mui/material";
import { ICommentBoxProps } from "../../shared/types";

const StyledCommentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const CommentBox: React.FC<ICommentBoxProps> = ({ children }) => {
  return <StyledCommentBox>{children}</StyledCommentBox>;
};

export default CommentBox;
