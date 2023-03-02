import React from "react";
import { Delete, Update } from "@mui/icons-material";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import { IButtonGroupProps } from "../../shared/types";

const AppButtonGroup: React.FC<IButtonGroupProps> = ({
  variant,
  size,
  ariaLabel,
  children,
}) => {
  return (
    <ButtonGroup variant={variant} size={size} aria-label={ariaLabel}>
      {children}
    </ButtonGroup>
  );
};

export default AppButtonGroup;
