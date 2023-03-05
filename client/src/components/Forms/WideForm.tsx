import React from "react";
import { Box, styled } from "@mui/material";
import { IFormProps } from "../../shared/types";

const StyledForm = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  maxWidth: "100%",
  maxHeight: "90%",
  [theme.breakpoints.down("md")]: {
    overflowY: "scroll",
    paddingRight: theme.spacing(2),
  },

  "&::-webkit-scrollbar": {
    width: 10,
    borderRadius: theme.spacing(2),
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: theme.spacing(),
    backgroundColor: theme.palette.background.paper,
    width: 5,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[400],
    backgroundClip: "padding-box",
    borderRight: `${theme.spacing()} ${theme.palette.background.paper} solid`,
    borderLeft: `${theme.spacing()} ${theme.palette.background.paper} solid`,
    borderRadius: theme.spacing(2),
  },
}));

const WideForm: React.FC<IFormProps> = ({ children, handleData }) => {
  return (
    <StyledForm component="form" onSubmit={handleData}>
      {children}
    </StyledForm>
  );
};

export default WideForm;
