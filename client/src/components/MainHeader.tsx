import React from "react";
import { Typography } from "@mui/material";
import { IMainHeaderProps } from "../shared/types";

const MainHeader: React.FC<IMainHeaderProps> = ({ title }) => {
  return (
    <Typography variant="h1" component="h1" textAlign="center" gutterBottom>
      {title}
    </Typography>
  );
};

export default MainHeader;
