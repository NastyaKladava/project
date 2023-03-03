import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import AppCenterContainer from "../Containers/AppCenterContainer";

const Loader: React.FC = () => {
  return (
    <AppCenterContainer>
      <CircularProgress color="secondary" />
    </AppCenterContainer>
  );
};

export default Loader;
