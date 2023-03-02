import React from "react";
import { Container } from "@mui/material";
import { IContainerProps } from "../../shared/types";

const AppContainer: React.FC<IContainerProps> = ({ children }) => {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        p: 10,
      }}
    >
      {children}
    </Container>
  );
};

export default AppContainer;
