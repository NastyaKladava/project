import React from "react";
import { Stack, styled } from "@mui/material";
import { useAppDispatch } from "../hooks/commonHooks";
import NoCollectionBox from "../components/Profile/NoCollectionBox";
import CollectionBox from "../components/Profile/CollectionBox";
import CollectionModal from "../components/Modals/CollectionModal";
import { useCollection } from "../hooks/collectionHook";
import { setShowCollectionModal } from "../store/slices/mainSlice";
import AppCenterContainer from "../components/Containers/AppCenterContainer";
import AppContainer from "../components/Containers/AppContainer";
import Sidebar from "../components/Sidebar";
import AddFab from "../components/Buttons/AddFab";
import AppSnackbar from "../components/Popovers/AppSnackbar";
import { useTranslation } from "react-i18next";
import Loading from "../components/Loading";
import CollectionUpdateModal from "../components/Modals/CollectionUpdateModal";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(10),
}));

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const openCollectionModal = () => dispatch(setShowCollectionModal(true));

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
