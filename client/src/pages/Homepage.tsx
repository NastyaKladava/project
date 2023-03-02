import React, { useEffect } from "react";
import { Box, Container, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/commonHooks";
import { isLoggedInSelector } from "../store/selectors/userSelector";
import { useCollection } from "../hooks/collectionHook";
import { Stack } from "@mui/system";
import Rightbar from "../components/Rightbar";
import Feed from "../components/Feed";
import AppSnackbar from "../components/Popovers/AppSnackbar";
import HeroSection from "../components/HeroSection";
import AppContainer from "../components/Containers/AppContainer";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: theme.spacing(5),
}));

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const {
    errorCollectionMessage,
    errorColItemMessage,
    successColItemMessage,
    infoMessage,
  } = useCollection();

  return (
    <AppContainer>
      {/* <MainHeader title="Collections" /> */}
      {/* <HeroSection /> */}
      <StyledStack>
        <Feed />
        <Rightbar />
      </StyledStack>
      {errorCollectionMessage && (
        <AppSnackbar message={errorCollectionMessage} severity="error" />
      )}
      {errorColItemMessage && (
        <AppSnackbar message={errorColItemMessage} severity="error" />
      )}
      {successColItemMessage && (
        <AppSnackbar message={successColItemMessage} severity="success" />
      )}
      {infoMessage && <AppSnackbar message={infoMessage} severity="info" />}
    </AppContainer>
  );
};

export default HomePage;
