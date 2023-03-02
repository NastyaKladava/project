import { IconButton } from "@mui/material";
import React from "react";
import { IIconButtonProps } from "../../shared/types";

const AppIconButton: React.FC<IIconButtonProps> = ({
  type,
  handler,
  size,
  children,
  ariaLabel,
  sx,
}) => {
  return (
    <IconButton
      type={type}
      onClick={handler}
      size={size}
      aria-label={ariaLabel}
      sx={sx}
    >
      {children}
    </IconButton>
  );
};

export default AppIconButton;
