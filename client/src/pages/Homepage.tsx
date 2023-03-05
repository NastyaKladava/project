import React from "react";
import { styled, Stack } from "@mui/material";
import { useCollection } from "../hooks/collectionHook";
import Rightbar from "../components/Rightbar";
import Feed from "../components/Feed";
import AppSnackbar from "../components/Popovers/AppSnackbar";
import AppContainer from "../components/Containers/AppContainer";
import Loading from "../components/Loading";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: theme.spacing(5),
}));

const HomePage: React.FC = () => {
  const {
    errorCollectionMessage,
    errorColItemMessage,
    successColItemMessage,
    infoMessage,
    isColItemLoading,
    isColItemSuccess,
    isCollectionError,
    isColItemError,
  } = useCollection();

  return (
    <>
      <AppContainer>
        {/* <MainHeader title="Collections" /> */}
        {/* <HeroSection /> */}
        <StyledStack>
          <Feed />
          <Rightbar />
        </StyledStack>
        {errorCollectionMessage && isCollectionError && (
          <AppSnackbar message={errorCollectionMessage} severity="error" />
        )}
        {errorColItemMessage && isColItemError && (
          <AppSnackbar message={errorColItemMessage} severity="error" />
        )}
        {successColItemMessage && isColItemSuccess && (
          <AppSnackbar message={successColItemMessage} severity="success" />
        )}
        {infoMessage && <AppSnackbar message={infoMessage} severity="info" />}{" "}
        {isColItemLoading && <Loading />}
      </AppContainer>
      {/* <CollectionUpdateModal /> */}
      {/* <ColItemUpdateModal /> */}
    </>
  );
};

export default HomePage;
