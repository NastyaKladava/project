import { Theme } from "@mui/material";
import { Boxprops } from "../shared/types";

export const getDragBorderColor = (props: Boxprops, theme: Theme) => {
  if (props.isDragAccept) {
    return theme.palette.success.main;
  } else if (props.isDragReject) {
    return theme.palette.error.main;
  } else if (props.isDragActive) {
    return theme.palette.secondary.main;
  } else {
    return theme.palette.info.main;
  }
};

export const getDragBgColor = (props: Boxprops, theme: Theme) => {
  if (props.isDragAccept) {
    return theme.palette.success.light;
  } else if (props.isDragReject) {
    return theme.palette.error.light;
  } else if (props.isDragActive) {
    return theme.palette.secondary.light;
  } else {
    return theme.palette.divider;
  }
};
