import React from "react";
import { CircularProgress } from "@mui/material";
import AppCenterContainer from "./Containers/AppCenterContainer";

const Loading = () => {
  return (
    <AppCenterContainer>
      <CircularProgress />
    </AppCenterContainer>
  );
};

export default Loading;
