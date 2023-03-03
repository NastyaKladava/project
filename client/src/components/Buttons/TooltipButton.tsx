import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { ITooltipButtonProps } from "../../shared/types";

const TooltipButton: React.FC<ITooltipButtonProps> = ({
  title,
  children,
  ariaLabel,
  handler,
}) => {
  return (
    <Tooltip title={title} onClick={handler}>
      <IconButton aria-label={ariaLabel}>{children}</IconButton>
    </Tooltip>
  );
};

export default TooltipButton;
