import React from "react";
import { ButtonGroup } from "@mui/material";
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
