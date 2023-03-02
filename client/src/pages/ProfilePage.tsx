import React, { useEffect } from "react";
import { Box, CircularProgress, Stack, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/commonHooks";
import { curUserSelector } from "../store/selectors/userSelector";
import NoCollectionBox from "../components/Profile/NoCollectionBox";
import CollectionBox from "../components/Profile/CollectionBox";
import CollectionForm from "../components/Forms/CollectionForm";
import CollectionModal from "../components/Modals/CollectionModal";
import { useRegister } from "../hooks/registerHook";
import { useCollection } from "../hooks/collectionHook";
import { setShowCollectionModal } from "../store/slices/mainSlice";
import { NOCOLLECTIONSTEXT } from "../shared/constants/common";
import AppCenterContainer from "../components/Containers/AppCenterContainer";
import AppContainer from "../components/Containers/AppContainer";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import AddFab from "../components/Buttons/AddFab";
import AppSnackbar from "../components/Popovers/AppSnackbar";

const StyledBox = styled(Box)(({ theme }) => ({}));

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
  const user = useAppSelector(curUserSelector);
  const dispatch = useAppDispatch();
  const { id, isAdmin } = { ...useAppSelector(curUserSelector) };
  const openCollectionModal = () => dispatch(setShowCollectionModal(true));

  const {
    isCollectionError,
    isCollectionLoading,
    isCollectionSuccess,
    errorCollectionMessage,
    isShowCollectionModal,
    collectionsData,
    pathname,
    currentCollection,
    successCollectionMessage,
  } = useCollection();

  let curId;

  console.log(collectionsData);
  console.log(id);

  // if (isAdmin) {
  //   return "hh";
  // } else {
  //   curId = id;
  // }

  return collectionsData.length === 0 ? (
    <>
      <AppCenterContainer>
        <NoCollectionBox
          mainText={NOCOLLECTIONSTEXT}
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
    </>
  );
};

export default ProfilePage;
