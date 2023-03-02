import React from "react";
import { IconButton, styled } from "@mui/material";
import { IExpandMoreProps } from "../shared/types";

const ExpandMore = styled((props: IExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default ExpandMore;
