import React from "react";
import { Fab, Tooltip } from "@mui/material";
import { Add } from "@mui/icons-material";
import { IAddFabProps } from "../../shared/types";

const AddFab: React.FC<IAddFabProps> = ({ title, handler, ariaLabel }) => {
  return (
    <Tooltip
      onClick={handler}
      title={title}
      sx={{
        position: "fixed",
        bottom: 10,
        left: { xs: "calc(50% - 25px)", md: 180, sm: 30 },
      }}
    >
      <Fab color="primary" aria-label={ariaLabel}>
        <Add />
      </Fab>
    </Tooltip>
  );
};

export default AddFab;
