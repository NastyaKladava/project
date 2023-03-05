import React from "react";
import { Stack, styled } from "@mui/material";
import { useAppDispatch } from "../hooks/commonHooks";
import { setShowItemModal } from "../store/slices/mainSlice";
import ItemModal from "../components/Modals/CollectionItemModal";
import { useCollectionItem } from "../hooks/collectionItemHook";
import CollectionItemsTable from "../components/Tables/CollectionItemsTable";
import AppContainer from "../components/Containers/AppContainer";
import Sidebar from "../components/Sidebar";
import AddFab from "../components/Buttons/AddFab";
import AppSnackbar from "../components/Popovers/AppSnackbar";
import ColItemUpdateModal from "../components/Modals/ColItemUpdateModal";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(10),
}));

const CollectionPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const openItemModal = () => dispatch(setShowItemModal(true));

  const { errorColItemMessage, successColItemMessage } = useCollectionItem();

  return (
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
      {/* <ColItemUpdateModal /> */}
    </>
  );
};

export default CollectionPage;
