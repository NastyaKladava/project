import React from "react";
import { Box, CssBaseline, styled, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { useAppSelector } from "../hooks/commonHooks";
import { isAppModeSelector } from "../store/selectors/mainSelectors";
import { useAppTheme } from "../hooks/themeHook";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

const Layout: React.FC = () => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <CssBaseline />
        <Navbar />
        <HeroSection />
        <Outlet />
        <Footer title="Footer" description="Collection Website" />
      </StyledBox>
    </ThemeProvider>
  );
};

export default Layout;
