import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { IFooterProps } from "../shared/types";
import Copyright from "./Copyright";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: ` ${theme.spacing(10)} 0`,
}));

const Footer: React.FC<IFooterProps> = ({ description, title }) => {
  return (
    <StyledBox component="footer">
      {/* <Container maxWidth="lg"> */}
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {description}
      </Typography>
      <Copyright />
      {/* </Container> */}
    </StyledBox>
  );
};

export default Footer;
