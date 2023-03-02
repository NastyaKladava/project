import React from "react";
import { Box, styled } from "@mui/material";
import { IFormProps } from "../../shared/types";

const StyledForm = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  maxWidth: "40vw",
}));

const Form: React.FC<IFormProps> = ({ children, handleData }) => {
  return (
    <StyledForm component="form" onSubmit={handleData}>
      {children}
    </StyledForm>
  );
};

export default Form;
