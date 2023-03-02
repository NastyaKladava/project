import React from "react";
import { Button } from "@mui/material";
import { IButtonProps } from "../../shared/types";

const AppButton: React.FC<IButtonProps> = ({
  children,
  type,
  handler,
  endIcon,
  variant,
  size,
  color,
}) => {
  return (
    <Button
      type={type}
      onClick={handler}
      endIcon={endIcon}
      variant={variant}
      size={size}
      color={color}
    >
      {children}
    </Button>
  );
};

export default AppButton;
