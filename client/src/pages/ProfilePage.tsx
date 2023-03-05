import React, { useEffect } from "react";
import { Box, Stack, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/commonHooks";
import { curUserSelector } from "../store/selectors/userSelector";
import NoCollectionBox from "../components/Profile/NoCollectionBox";
import CollectionBox from "../components/Profile/CollectionBox";
import CollectionModal from "../components/Modals/CollectionModal";
import { useCollection } from "../hooks/collectionHook";
import {
  setShowCollectionModal,
  setShowColUpdateModal,
  setUpdatedCollection,
} from "../store/slices/mainSlice";
import { NOCOLLECTIONSTEXT } from "../shared/constants/common";
import AppCenterContainer from "../components/Containers/AppCenterContainer";
import AppContainer from "../components/Containers/AppContainer";
import Sidebar from "../components/Sidebar";
import AddFab from "../components/Buttons/AddFab";
import AppSnackbar from "../components/Popovers/AppSnackbar";
import { useTranslation } from "react-i18next";
import Loading from "../components/Loading";
import CollectionUpdateModal from "../components/Modals/CollectionUpdateModal";
import { trendCollectionSelector } from "../store/selectors/collectionSelector";

const StyledCenteredBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(10),
}));

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const user = useAppSelector(curUserSelector);
  const { id, isAdmin } = { ...useAppSelector(curUserSelector) };
  const openCollectionModal = () => dispatch(setShowCollectionModal(true));
  const openCollectionUpdateModal = () => dispatch(setShowColUpdateModal(true));

  const collections = useAppSelector(trendCollectionSelector);

  const {
    errorCollectionMessage,
    collectionsData,
    successCollectionMessage,
    isCollectionLoading,
  } = useCollection();

  return collectionsData.length === 0 ? (
    <>
      <AppCenterContainer>
        <NoCollectionBox
          mainText={t("noCollections")}
          buttonHandler={openCollectionModal}
        />
      </AppCenterContainer>
      <CollectionModal />
      {errorCollectionMessage && (
        <AppSnackbar message={errorCollectionMessage} severity="error" />
      )}
      {successCollectionMessage && (
        <AppSnackbar message={successCollectionMessage} severity="success" />
      )}
      {isCollectionLoading && <Loading />}
    </>
  ) : (
    <>
      <AppContainer>
        <StyledStack>
          <Sidebar />
          <CollectionBox />
        </StyledStack>
      </AppContainer>
      <CollectionModal />
      <CollectionUpdateModal />
      <AddFab
        title="Add new collection"
        ariaLabel="add"
        handler={openCollectionModal}
      />
      {errorCollectionMessage && (
        <AppSnackbar message={errorCollectionMessage} severity="error" />
      )}
      {successCollectionMessage && (
        <AppSnackbar message={successCollectionMessage} severity="success" />
      )}
      {isCollectionLoading && <Loading />}
    </>
  );
};

export default ProfilePage;
