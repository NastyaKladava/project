import React from "react";
import { Paper, Box, styled } from "@mui/material";
import MainHeader from "./MainHeader";
import hero from "../assets/images/Hero.jpg";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,.3)",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: `${theme.spacing(25)} 0`,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.info.light,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url(${hero})`,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const HeroSection = () => {
  return (
    <StyledPaper>
      <StyledBox />
      <MainHeader title="Collections" />
    </StyledPaper>
  );
};

export default HeroSection;
