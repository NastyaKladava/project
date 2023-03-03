import React from "react";
import { Container } from "@mui/material";
import { IContainerProps } from "../../shared/types";

const AppJustifyContainer: React.FC<IContainerProps> = ({ children }) => {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "100vh",
        p: 10,
      }}
    >
      {children}
    </Container>
  );
};

export default AppJustifyContainer;
