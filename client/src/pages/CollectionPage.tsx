import React, { useEffect } from "react";
import { Box, Stack, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/commonHooks";
import { useCollection } from "../hooks/collectionHook";
import NoCollectionBox from "../components/Profile/NoCollectionBox";
import CollectionModal from "../components/Modals/CollectionModal";
import CollectionBox from "../components/Profile/CollectionBox";
import { getCollection } from "../store/thunks";
import {
  setShowCollectionModal,
  setShowItemModal,
} from "../store/slices/mainSlice";
import { NOITEMSTEXT } from "../shared/constants/common";
import ItemModal from "../components/Modals/CollectionItemModal";
import { useCollectionItem } from "../hooks/collectionItemHook";
import CollectionItemsTable from "../components/Tables/CollectionItemsTable";
import AppCenterContainer from "../components/Containers/AppCenterContainer";
import AppContainer from "../components/Containers/AppContainer";
import Sidebar from "../components/Sidebar";
import AddFab from "../components/Buttons/AddFab";
import AppSnackbar from "../components/Popovers/AppSnackbar";

const StyledBox = styled(Box)(({ theme }) => ({}));
const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(10),
}));

const StyledCenteredBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const CollectionPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const openItemModal = () => dispatch(setShowItemModal(true));

  const {
    pathname,
    collectionItemsData,
    currentFields,
    isColItemError,
    isColItemLoading,
    isColItemSuccess,
    errorColItemMessage,
    successColItemMessage,
  } = useCollectionItem();

  return collectionItemsData.length === 0 ? (
    <>
      <StyledCenteredBox>
        <NoCollectionBox mainText={NOITEMSTEXT} buttonHandler={openItemModal} />
      </StyledCenteredBox>
      <ItemModal />
      {errorColItemMessage && (
        <AppSnackbar message={errorColItemMessage} severity="error" />
      )}
      {successColItemMessage && (
        <AppSnackbar message={successColItemMessage} severity="success" />
      )}
    </>
  ) : (
    <>
      <AppContainer>
        <StyledStack>
          <Sidebar />
          <CollectionItemsTable />
        </StyledStack>
      </AppContainer>
      <ItemModal />
      <AddFab
        title="Add new collection item"
        ariaLabel="add"
        handler={openItemModal}
      />
      {errorColItemMessage && (
        <AppSnackbar message={errorColItemMessage} severity="error" />
      )}
      {successColItemMessage && (
        <AppSnackbar message={successColItemMessage} severity="success" />
      )}
    </>
  );
};

export default CollectionPage;
