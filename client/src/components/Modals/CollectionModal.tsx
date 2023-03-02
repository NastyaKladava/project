import React from "react";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { isShowColModalSelector } from "../../store/selectors/mainSelectors";
import CollectionForm from "../Forms/CollectionForm";
import { setShowCollectionModal } from "../../store/slices/mainSlice";
import AppModal from "./Modal";

const CollectionModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isShowCollectionModal = useAppSelector(isShowColModalSelector);
  const handleClose = () => dispatch(setShowCollectionModal(false));

  return (
    <AppModal open={isShowCollectionModal} handleClose={handleClose}>
      <Typography component="h2" variant="h5" textAlign="center">
        Add new collection
      </Typography>
      <CollectionForm />
    </AppModal>
  );
};

export default CollectionModal;
